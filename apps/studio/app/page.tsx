"use client";
import {useEffect,useState} from "react";
type Clip={id:string;start:number;duration:number;title:string;transition:"cut"|"fade"};
type Key={t:number;x:number;y:number;scale:number};
type Project={id:string;name:string;scenario:"fixture"|"moon-phases";format:"landscape"|"portrait"|"square";background:string;radius:number;shadow:boolean;cursor:boolean;autoZoom:boolean;zoom:number;intro:string;outro:string;clips:Clip[];camera:Key[];audio:{path:string;volume:number};createdAt:string};
type Export={scenario:string;name:string;bytes:number};
const makeProject=():Project=>({id:"video-"+Date.now(),name:"Nouvelle vidéo",scenario:"fixture",format:"landscape",background:"#101827",radius:22,shadow:true,cursor:true,autoZoom:true,zoom:1,intro:"Découvrez Tilo",outro:"Apprendre autrement",clips:[],camera:[],audio:{path:"",volume:.65},createdAt:new Date().toISOString()});
const field:React.CSSProperties={width:"100%",boxSizing:"border-box",background:"#202c46",border:"1px solid #3a4a67",color:"white",padding:"10px 12px",borderRadius:9,marginTop:6};
const card:React.CSSProperties={background:"#151e31",border:"1px solid #293851",borderRadius:16,padding:22};
const button:React.CSSProperties={background:"#7f96ff",color:"#101728",border:0,padding:"11px 16px",borderRadius:9,fontWeight:700,cursor:"pointer"};
export default function Home(){
 const [project,setProject]=useState<Project>(makeProject);
 const [projects,setProjects]=useState<Project[]>([]);
 const [exports,setExports]=useState<Export[]>([]);
 const [status,setStatus]=useState("Prêt"),[busy,setBusy]=useState(false),[batch,setBatch]=useState(false);
 const [preview,setPreview]=useState("");
 const patch=(p:Partial<Project>)=>setProject(x=>({...x,...p}));
 const refresh=async()=>{const [p,e]=await Promise.all([fetch("/api/projects").then(r=>r.json()),fetch("/api/exports").then(r=>r.json())]);setProjects(p.projects||[]);setExports(e.exports||[])};
 useEffect(()=>{void refresh()},[]);
 async function save(){const r=await fetch("/api/projects",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(project)});if(!r.ok)throw Error("Enregistrement impossible");await refresh()}
 async function run(){
  setBusy(true);setStatus("Capture et rendu en cours…");
  try{
   await save();
   const r=await fetch("/api/render",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({scenario:project.scenario,format:project.format,project:project.id,batch})});
   const data=await r.json();if(!r.ok)throw Error(typeof data.error==="string"?data.error:"Échec du rendu");
   await refresh();setPreview(`/api/exports/${project.scenario}/${project.format}.mp4?t=${Date.now()}`);setStatus("Rendu terminé : "+data.output);
  }catch(e){setStatus(e instanceof Error?e.message:String(e))}finally{setBusy(false)}
 }
 function addClip(){patch({clips:[...project.clips,{id:"clip-"+Date.now(),start:2,duration:3,title:"Nouvelle légende",transition:"fade"}]})}
 function editClip(i:number,p:Partial<Clip>){patch({clips:project.clips.map((c,j)=>i===j?{...c,...p}:c)})}
 function addCamera(){patch({camera:[...project.camera,{t:0,x:.5,y:.5,scale:1}].sort((a,b)=>a.t-b.t)})}
 function editCamera(i:number,p:Partial<Key>){patch({camera:project.camera.map((k,j)=>i===j?{...k,...p}:k)})}
 return <main style={{maxWidth:1450,margin:"auto",padding:"28px 24px",fontFamily:"system-ui,Arial"}}>
  <header style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:24,gap:20}}>
   <div><small style={{color:"#a7b9e0",letterSpacing:3}}>TILO / PRODUCTION</small><h1 style={{fontSize:34,margin:"7px 0"}}>Motion Studio</h1><span style={{color:"#a7b9e0"}}>Capture · Caméra · Timeline · Exports</span></div>
   <div style={{display:"flex",gap:8}}><button style={button} onClick={()=>{setProject(makeProject());setPreview("")}}>Nouveau</button><button style={button} onClick={()=>void save().then(()=>setStatus("Projet enregistré")).catch(e=>setStatus(String(e)))}>Enregistrer</button></div>
  </header>
  <div style={{display:"grid",gridTemplateColumns:"260px minmax(360px,1fr) 320px",gap:16,alignItems:"start"}}>
   <aside style={card}><h3>Projets</h3><select style={field} value={projects.some(p=>p.id===project.id)?project.id:""} onChange={e=>{const p=projects.find(x=>x.id===e.target.value);if(p)setProject(p)}}><option value="">Projet non enregistré</option>{projects.map(p=><option key={p.id} value={p.id}>{p.name}</option>)}</select><h3 style={{marginTop:28}}>Exports</h3>{exports.length?exports.map(e=><button key={e.scenario+e.name} style={{...field,textAlign:"left",cursor:"pointer"}} onClick={()=>setPreview(`/api/exports/${e.scenario}/${e.name}`)}>{e.scenario} / {e.name}<small style={{display:"block",color:"#a9b9d7"}}>{(e.bytes/1048576).toFixed(1)} Mo</small></button>):<p style={{color:"#91a2c4"}}>Aucun rendu</p>}</aside>
   <section style={{display:"grid",gap:16}}>
    <div style={card}><div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}><h3>Aperçu vidéo</h3><span style={{color:"#a4b7d9"}}>{project.format}</span></div><div style={{aspectRatio:project.format==="portrait"?"9/16":project.format==="square"?"1":"16/9",maxHeight:500,margin:"auto",background:`linear-gradient(130deg,${project.background},#354c8a)`,borderRadius:project.radius,display:"grid",placeItems:"center",overflow:"hidden"}}>{preview?<video key={preview} src={preview} controls style={{width:"100%",height:"100%"}}/>:<div style={{fontSize:35,fontWeight:800}}>Tilo <span style={{color:"#a6b7ff"}}>Motion</span></div>}</div></div>
    <div style={card}><div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}><h3>Timeline — légendes</h3><button style={button} onClick={addClip}>+ Piste</button></div>{project.clips.map((c,i)=><div key={c.id} style={{display:"grid",gridTemplateColumns:"1fr 70px 70px 90px 34px",gap:7,marginBottom:12}}><input aria-label="Légende" style={field} value={c.title} onChange={e=>editClip(i,{title:e.target.value})}/><input aria-label="Début" style={field} type="number" min="0" step=".1" value={c.start} onChange={e=>editClip(i,{start:Number(e.target.value)})}/><input aria-label="Durée" style={field} type="number" min=".1" step=".1" value={c.duration} onChange={e=>editClip(i,{duration:Number(e.target.value)})}/><select style={field} value={c.transition} onChange={e=>editClip(i,{transition:e.target.value as Clip["transition"]})}><option>fade</option><option>cut</option></select><button style={{...button,padding:5}} onClick={()=>patch({clips:project.clips.filter((_,j)=>i!==j)})}>×</button></div>)}{!project.clips.length&&<p style={{color:"#9aaccb"}}>Ajoute une légende synchronisée à la vidéo.</p>}</div>
    <div style={card}><div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}><h3>Keyframes caméra</h3><button style={button} onClick={addCamera}>+ Keyframe</button></div>{project.camera.map((k,i)=><div key={i} style={{display:"grid",gridTemplateColumns:"repeat(4,1fr) 34px",gap:7,marginBottom:10}}>{(["t","x","y","scale"] as const).map(name=><label key={name} style={{fontSize:12,color:"#a9b9d7"}}>{name}<input style={field} type="number" min={name==="scale"?1:0} max={name==="scale"?3:undefined} step=".05" value={k[name]} onChange={e=>editCamera(i,{[name]:Number(e.target.value)})}/></label>)}<button style={{...button,alignSelf:"end",padding:7}} onClick={()=>patch({camera:project.camera.filter((_,j)=>i!==j)})}>×</button></div>)}{!project.camera.length&&<p style={{color:"#9aaccb"}}>Aucun keyframe : zoom automatique sur les clics.</p>}</div>
   </section>
   <aside style={{...card,display:"grid",gap:12}}><h3>Paramètres</h3>
    <label>Nom<input style={field} value={project.name} onChange={e=>patch({name:e.target.value})}/></label>
    <label>Scénario<select style={field} value={project.scenario} onChange={e=>patch({scenario:e.target.value as Project["scenario"]})}><option value="fixture">fixture</option><option value="moon-phases">moon-phases</option></select></label>
    <label>Format<select style={field} value={project.format} onChange={e=>patch({format:e.target.value as Project["format"]})}><option value="landscape">16:9</option><option value="portrait">9:16</option><option value="square">1:1</option></select></label>
    <label>Introduction<input style={field} value={project.intro} onChange={e=>patch({intro:e.target.value})}/></label>
    <label>Conclusion<input style={field} value={project.outro} onChange={e=>patch({outro:e.target.value})}/></label>
    <label>Arrière-plan<input style={{...field,height:46}} type="color" value={project.background} onChange={e=>patch({background:e.target.value})}/></label>
    <label>Arrondi : {project.radius}px<input style={field} type="range" min="0" max="50" value={project.radius} onChange={e=>patch({radius:Number(e.target.value)})}/></label>
    <label>Zoom : {project.zoom.toFixed(2)}<input style={field} type="range" min="1" max="2" step=".01" value={project.zoom} onChange={e=>patch({zoom:Number(e.target.value)})}/></label>
    {(["shadow","cursor","autoZoom"] as const).map(k=><label key={k}><input type="checkbox" checked={project[k]} onChange={e=>patch({[k]:e.target.checked})}/> {({shadow:"Ombre",cursor:"Curseur animé",autoZoom:"Zoom automatique"})[k]}</label>)}
    <label>Audio (chemin dans output/)<input style={field} value={project.audio.path} placeholder="assets/music.mp3" onChange={e=>patch({audio:{...project.audio,path:e.target.value}})}/></label>
    <label>Volume : {project.audio.volume}<input style={field} type="range" min="0" max="1" step=".05" value={project.audio.volume} onChange={e=>patch({audio:{...project.audio,volume:Number(e.target.value)}})}/></label>
    <label><input type="checkbox" checked={batch} onChange={e=>setBatch(e.target.checked)}/> Exporter les 3 formats</label>
    <button style={{...button,padding:16}} disabled={busy} onClick={run}>{busy?"Production en cours…":"Capturer et exporter"}</button>
    <p role="status" style={{color:"#aebfe4",fontSize:13,overflowWrap:"anywhere"}}>{status}</p>
   </aside>
  </div>
  <p style={{color:"#8498bc",fontSize:12,marginTop:25}}>Outil local. Les projets sont stockés sur disque. La prévisualisation correspond au dernier MP4 généré, pas à un rendu temps réel des réglages.</p>
 </main>;
}
