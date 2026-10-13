"use client";
import {useEffect,useMemo,useRef,useState} from "react";
import {Player, type PlayerRef} from "@remotion/player";
import {Promo} from "../../../src/composition";
import {buildCameraTrack} from "../../../src/cinematic-v2";
import type {MotionEvent,CameraKeyframe} from "../../../src/cinematic";
type Settings={intro:string;outro:string;zoom:number;autoZoom:boolean;cursor:boolean;background:string;radius:number;shadow:boolean;camera:CameraKeyframe[]};
type Recording={id:string;duration:number;viewport:{width:number;height:number}};
type Detail={manifest:{duration?:number;viewport:{width:number;height:number}},events:MotionEvent[];scenario?:{video?:{duration:number;fps:number;zoom:number};title?:string};settings:Settings;video:string};
type State={state:string;id?:string;error?:string};
const field:React.CSSProperties={width:"100%",background:"#202b40",color:"#eef3ff",border:"1px solid #3b4964",borderRadius:8,padding:"9px 10px",boxSizing:"border-box"};
const button:React.CSSProperties={background:"#879dff",color:"#0c1326",border:0,borderRadius:9,padding:"10px 14px",fontWeight:700,cursor:"pointer"};
const panel:React.CSSProperties={background:"#161f31",border:"1px solid #2c3950",borderRadius:14,padding:18};
const defaults:Settings={intro:"Découvrez Tilo",outro:"Apprendre autrement",zoom:1.06,autoZoom:true,cursor:true,background:"#101827",radius:24,shadow:true,camera:[]};
export default function Home(){
 const [url,setUrl]=useState("http://localhost:3000"),[captureId,setCaptureId]=useState("tilo-demo"),[resolution,setResolution]=useState("1600x900");
 const [recordStatus,setRecordStatus]=useState<State>({state:"idle"}),[recordings,setRecordings]=useState<Recording[]>([]);
 const [selected,setSelected]=useState(""),[detail,setDetail]=useState<Detail|null>(null),[settings,setSettings]=useState<Settings>(defaults);
 const [format,setFormat]=useState<"landscape"|"portrait"|"square">("landscape"),[busy,setBusy]=useState(false),[message,setMessage]=useState("Prêt"),[playhead,setPlayhead]=useState(0);
 const player=useRef<PlayerRef>(null);
 useEffect(()=>{const ref=player.current;if(!ref)return;const handler=(e:{detail:{frame:number}})=>setPlayhead(e.detail.frame/30);ref.addEventListener("frameupdate",handler);return()=>ref.removeEventListener("frameupdate",handler)},[selected,format,detail]);
 const dims={landscape:{width:1920,height:1080},portrait:{width:1080,height:1920},square:{width:1080,height:1080}}[format];
 async function loadList(){const r=await fetch("/api/recordings");if(r.ok)setRecordings((await r.json()).recordings||[])}
 async function load(id:string){setSelected(id);if(!id){setDetail(null);return}const r=await fetch("/api/recordings/"+id);if(!r.ok){setMessage("Capture introuvable");return}const d=await r.json() as Detail;setDetail(d);setSettings(d.settings);setPlayhead(0);setMessage("Capture chargée")}
 useEffect(()=>{void loadList();const timer=setInterval(()=>{void fetch("/api/record").then(r=>r.json()).then((s:State)=>{setRecordStatus(s);if(s.state==="ready")void loadList()}).catch(()=>{})},1500);return()=>clearInterval(timer)},[]);
 const duration=Math.max(1,detail?.manifest.duration||detail?.scenario?.video?.duration||5);
 const camera=useMemo(()=>detail?(settings.camera.length?settings.camera:settings.autoZoom?buildCameraTrack(detail.events,duration,detail.manifest.viewport):[]):[],[detail,settings.camera,settings.autoZoom,duration]);
 const props=useMemo(()=>({src:detail?.video||"",title:detail?.scenario?.title||"Tilo",intro:settings.intro,outro:settings.outro,zoom:1,events:detail?.events||[],camera,viewport:detail?.manifest.viewport||{width:1600,height:900},settings}),[detail,camera,settings]);
 const patch=(next:Partial<Settings>)=>setSettings(s=>({...s,...next}));
 async function recording(action:"start"|"stop"){
  setBusy(true);try{const [width,height]=resolution.split("x").map(Number);
   const r=await fetch("/api/record",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action,options:{url,id:captureId,width,height}})});
   const d=await r.json();if(!r.ok)throw Error(JSON.stringify(d.error));setRecordStatus(d);setMessage(action==="start"?"Manipule Tilo dans Chromium":"Finalisation de la capture…");
  }catch(e){setMessage(String(e))}finally{setBusy(false)}
 }
 async function save(){
  if(!selected)return;setBusy(true);try{
   const r=await fetch("/api/recordings/"+selected,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(settings)});
   if(!r.ok)throw Error(await r.text());setMessage("Réglages enregistrés");
  }catch(e){setMessage(String(e))}finally{setBusy(false)}
 }
 async function exportVideo(){
  if(!selected)return;setBusy(true);setMessage("Rendu MP4 en cours…");
  try{
   const saved=await fetch("/api/recordings/"+selected,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(settings)});
   if(!saved.ok)throw Error("Impossible de sauvegarder les réglages");
   const r=await fetch("/api/render",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({recording:selected,format})});
   const d=await r.json();if(!r.ok)throw Error(d.error||"Échec");setMessage("Export terminé : "+d.output);
  }catch(e){setMessage(String(e))}finally{setBusy(false)}
 }
 const setCamera=(index:number,k:Partial<CameraKeyframe>)=>patch({camera:settings.camera.map((v,i)=>i===index?{...v,...k}:v)});
 return <main style={{maxWidth:1550,margin:"auto",padding:"24px",color:"#eef3ff",fontFamily:"system-ui"}}>
  <header style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:22,flexWrap:"wrap",gap:12}}><div><small style={{letterSpacing:3,color:"#98add4"}}>TILO / VIDEO PRODUCTION</small><h1 style={{margin:"6px 0",fontSize:30}}>Motion Studio <span style={{fontSize:13,color:"#a3b5da",fontWeight:400}}>Editor</span></h1></div><div style={{display:"flex",gap:8}}><button style={button} disabled={!selected||busy} onClick={()=>void save()}>Enregistrer</button><button style={button} disabled={!selected||busy} onClick={()=>void exportVideo()}>Exporter MP4</button></div></header>
  <div style={{display:"grid",gridTemplateColumns:"250px minmax(340px,1fr) 290px",gap:14,alignItems:"start"}}>
   <aside style={{display:"grid",gap:14}}>
    <section style={panel}><h3 style={{marginTop:0}}>Nouvelle capture</h3><label>URL<input style={field} value={url} onChange={e=>setUrl(e.target.value)}/></label><label>Nom<input style={field} value={captureId} onChange={e=>setCaptureId(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g,"-"))}/></label><label>Résolution<select style={field} value={resolution} onChange={e=>setResolution(e.target.value)}><option value="1600x900">1600 × 900</option><option value="1920x1080">1920 × 1080</option><option value="1440x900">1440 × 900</option></select></label><div style={{display:"flex",gap:6,marginTop:12}}><button style={button} disabled={busy||recordStatus.state==="recording"} onClick={()=>void recording("start")}>● REC</button><button style={{...button,background:"#ec9e9e"}} disabled={busy||recordStatus.state!=="recording"} onClick={()=>void recording("stop")}>■ Stop</button></div><p style={{fontSize:12,color:"#a3b5d2"}}>{recordStatus.state}</p></section>
    <section style={panel}><h3 style={{marginTop:0}}>Captures</h3><button style={{...button,marginBottom:12}} onClick={()=>void loadList()}>Actualiser</button>{recordings.map(r=><button key={r.id} onClick={()=>void load(r.id)} style={{...field,textAlign:"left",cursor:"pointer",borderColor:selected===r.id?"#93a6ff":"#3b4964"}}>{r.id}<small style={{display:"block",color:"#a7b7d5"}}>{r.duration.toFixed(1)} s</small></button>)}</section>
   </aside>
   <section style={{display:"grid",gap:14}}>
    <div style={panel}><div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}><h3 style={{marginTop:0}}>Prévisualisation cinématique</h3><select style={{...field,width:140}} value={format} onChange={e=>setFormat(e.target.value as typeof format)}><option value="landscape">16:9</option><option value="portrait">9:16</option><option value="square">1:1</option></select></div>
     {detail?<div style={{maxHeight:540,display:"flex",justifyContent:"center",overflow:"hidden"}}><Player ref={player} key={selected+format} component={Promo} inputProps={props} compositionWidth={dims.width} compositionHeight={dims.height} fps={30} durationInFrames={Math.max(30,Math.ceil(duration*30))} controls style={{width:format==="portrait"?"min(300px,100%)":"100%",aspectRatio:`${dims.width}/${dims.height}`}}/></div>:<div style={{aspectRatio:"16/9",display:"grid",placeItems:"center",background:"#0d1423",borderRadius:12,color:"#91a6cc"}}>Sélectionne une capture à gauche</div>}
    </div>
    <div style={panel}><h3 style={{marginTop:0}}>Timeline · {playhead.toFixed(1)} / {duration.toFixed(1)} s</h3><input aria-label="Position temporelle" type="range" min="0" max={duration} step=".0333" value={Math.min(playhead,duration)} onChange={e=>{const time=Number(e.target.value);setPlayhead(time);player.current?.seekTo(Math.round(time*30))}} style={{width:"100%"}}/><div style={{height:26,background:"#273a5a",borderRadius:7,position:"relative",marginTop:14}}>{(detail?.events||[]).filter(e=>e.type==="click").map((e,i)=><button key={i} title={`Clic à ${e.t.toFixed(2)}s`} onClick={()=>player.current?.seekTo(Math.round(e.t*30))} style={{position:"absolute",left:`${Math.min(99,e.t/duration*100)}%`,height:"100%",width:5,border:0,background:"#a9c3ff",cursor:"pointer"}}/>)}</div><p style={{fontSize:12,color:"#a3b5d2"}}>Repères bleus : clics enregistrés. Déplace la tête de lecture ou clique sur un repère.</p></div>
    <div style={panel}><div style={{display:"flex",justifyContent:"space-between"}}><h3 style={{marginTop:0}}>Caméra · Keyframes</h3><button style={button} onClick={()=>patch({camera:[...settings.camera,{t:playhead,x:.5,y:.5,scale:1.35}].sort((a,b)=>a.t-b.t)})}>+ À {playhead.toFixed(1)}s</button></div>{settings.camera.map((k,i)=><div key={i} style={{display:"grid",gridTemplateColumns:"repeat(4,minmax(0,1fr)) 30px",gap:6,marginBottom:8}}>{(["t","x","y","scale"] as const).map(prop=><label key={prop} style={{fontSize:11}}>{prop}<input style={field} type="number" min={prop==="scale"?1:0} max={prop==="scale"?2:undefined} step=".05" value={k[prop]} onChange={e=>setCamera(i,{[prop]:Number(e.target.value)})}/></label>)}<button style={{...button,alignSelf:"center",padding:6}} onClick={()=>patch({camera:settings.camera.filter((_,j)=>j!==i)})}>×</button></div>)}{!settings.camera.length&&<p style={{color:"#a3b5d2"}}>Zoom automatique actif tant qu'aucun keyframe n'est ajouté.</p>}</div>
   </section>
   <aside style={panel}><h3 style={{marginTop:0}}>Réglages</h3><label>Introduction<input style={field} value={settings.intro} onChange={e=>patch({intro:e.target.value})}/></label><label>Conclusion<input style={field} value={settings.outro} onChange={e=>patch({outro:e.target.value})}/></label><label>Fond<input style={{...field,height:46}} type="color" value={settings.background} onChange={e=>patch({background:e.target.value})}/></label><label>Zoom global {settings.zoom.toFixed(2)}<input style={{width:"100%"}} type="range" min="1" max="1.7" step=".01" value={settings.zoom} onChange={e=>patch({zoom:Number(e.target.value)})}/></label><label>Arrondi {settings.radius}px<input style={{width:"100%"}} type="range" min="0" max="48" value={settings.radius} onChange={e=>patch({radius:Number(e.target.value)})}/></label>{(["autoZoom","cursor","shadow"] as const).map(k=><label key={k} style={{display:"block",marginTop:15}}><input type="checkbox" checked={settings[k]} onChange={e=>patch({[k]:e.target.checked})}/> {({autoZoom:"Zoom automatique",cursor:"Curseur animé",shadow:"Ombre portée"})[k]}</label>)}<p style={{fontSize:12,color:"#a3b5d2",marginTop:22}}>Les modifications sont visibles dans le lecteur. Enregistre avant de quitter.</p></aside>
  </div><p role="status" style={{color:"#b6c8ef",marginTop:20}}>{message}</p>
 </main>;
}
