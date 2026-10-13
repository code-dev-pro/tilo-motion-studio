"use client";
import {useEffect,useState} from "react";
type Status={state:"idle"|"recording"|"stopping"|"ready"|"error";id?:string;error?:string};
export default function Home(){
 const [url,setUrl]=useState("http://localhost:3000"),[id,setId]=useState("tilo-demo"),[format,setFormat]=useState("landscape");
 const [captureSize,setCaptureSize]=useState("1600x900");
 const [status,setStatus]=useState<Status>({state:"idle"}),[busy,setBusy]=useState(false),[message,setMessage]=useState("Prêt");
 const [scenario,setScenario]=useState("fixture"),[mode,setMode]=useState<"manual"|"automatic">("manual");
 useEffect(()=>{const timer=setInterval(()=>{void fetch("/api/record").then(r=>r.json()).then(setStatus).catch(()=>{})},1500);return()=>clearInterval(timer)},[]);
 async function action(name:"start"|"stop"){
  setBusy(true);try{
   const r=await fetch("/api/record",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:name,options:{url,id,width:Number(captureSize.split("x")[0]),height:Number(captureSize.split("x")[1])}})});
   const d=await r.json();if(!r.ok)throw Error(typeof d.error==="string"?d.error:JSON.stringify(d.error));
   setStatus(d);setMessage(name==="start"?"Fenêtre Chromium en cours d'ouverture…":"Finalisation de la capture…");
  }catch(e){setMessage(String(e))}finally{setBusy(false)}
 }
 async function exportVideo(){
  setBusy(true);setMessage("Montage Remotion en cours…");
  try{
   const recording=mode==="manual"?(status.id||id):undefined;
   const r=await fetch("/api/render",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({recording,scenario:mode==="automatic"?scenario:undefined,format})});
   const d=await r.json();if(!r.ok)throw Error(d.error||"Échec du rendu");setMessage("Export terminé : "+d.output);
  }catch(e){setMessage(String(e))}finally{setBusy(false)}
 }
 const field:React.CSSProperties={background:"#202b43",border:"1px solid #41516d",borderRadius:9,color:"white",padding:12,width:"100%",boxSizing:"border-box",margin:"8px 0 18px"};
 const btn:React.CSSProperties={background:"#8ca2ff",color:"#101827",border:0,borderRadius:10,padding:"14px 20px",fontWeight:700,cursor:"pointer"};
 return <main style={{maxWidth:1050,margin:"auto",padding:"40px 24px",fontFamily:"system-ui"}}>
  <header><small style={{color:"#b6c6e8",letterSpacing:3}}>TILO / PRODUCTION</small><h1 style={{fontSize:36,marginBottom:8}}>Motion Studio</h1><p style={{color:"#a5b7d7"}}>Enregistre les interactions réelles de Tilo, puis exporte une vidéo cinématique.</p></header>
  <section style={{background:"#151e31",border:"1px solid #35445f",borderRadius:18,padding:28,marginTop:30}}>
   <div style={{display:"flex",gap:10,marginBottom:24}}><button style={{...btn,background:mode==="manual"?"#8ca2ff":"#34425f",color:mode==="manual"?"#101827":"white"}} onClick={()=>setMode("manual")}>Enregistrement manuel</button><button style={{...btn,background:mode==="automatic"?"#8ca2ff":"#34425f",color:mode==="automatic"?"#101827":"white"}} onClick={()=>setMode("automatic")}>Scénario automatique</button></div>
   {mode==="manual"?<><label>URL de Tilo<input style={field} value={url} onChange={e=>setUrl(e.target.value)} placeholder="http://localhost:3000"/></label><label>Résolution de capture<select style={field} value={captureSize} onChange={e=>setCaptureSize(e.target.value)}><option value="1600x900">1600 × 900 (16:9)</option><option value="1920x1080">1920 × 1080 (16:9)</option><option value="1440x900">1440 × 900 (16:10)</option><option value="1080x1920">1080 × 1920 (9:16)</option></select></label><label>Nom de la capture<input style={field} value={id} onChange={e=>setId(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g,"-"))}/></label>
    <p style={{color:"#b3c2df"}}>1. Démarre l'enregistrement. 2. Manipule Tilo dans Chromium. 3. Reviens ici pour arrêter. 4. Exporte le MP4.</p>
    <div style={{display:"flex",gap:12,alignItems:"center",flexWrap:"wrap"}}>
     <button style={btn} disabled={busy||status.state==="recording"||status.state==="stopping"} onClick={()=>void action("start")}>● Démarrer l'enregistrement</button>
     <button style={{...btn,background:"#f19a9a"}} disabled={busy||status.state!=="recording"} onClick={()=>void action("stop")}>■ Arrêter</button>
     <span style={{color:"#a7badc"}}>État : {status.state}</span>
    </div>
    {status.error&&<p role="alert" style={{color:"#ffa7a7"}}>{status.error}</p>}
   </>:<label>Scénario<select style={field} value={scenario} onChange={e=>setScenario(e.target.value)}><option value="fixture">fixture</option><option value="moon-phases">moon-phases</option></select></label>}
   <hr style={{border:"none",borderTop:"1px solid #35445f",margin:"26px 0"}}/>
   <label>Format vidéo<select style={field} value={format} onChange={e=>setFormat(e.target.value)}><option value="landscape">Paysage 16:9</option><option value="portrait">Vertical 9:16</option><option value="square">Carré 1:1</option></select></label>
   <button style={btn} disabled={busy||mode==="manual"&&status.state!=="ready"} onClick={()=>void exportVideo()}>Exporter en MP4</button>
   <p role="status" style={{color:"#c1d1f2",overflowWrap:"anywhere"}}>{message}</p>
  </section>
  <p style={{color:"#9bacca",fontSize:13}}>Usage local uniquement. Les captures sont enregistrées dans output/&lt;nom&gt;/. Évite les données personnelles pendant les démonstrations.</p>
 </main>;
}
