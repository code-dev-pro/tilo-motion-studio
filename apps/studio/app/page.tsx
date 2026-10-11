"use client";
import {useState} from "react";
const scenarios=["fixture","moon-phases"];
const formats=["landscape","portrait","square"];
export default function Home(){
 const [scenario,setScenario]=useState("fixture"),[format,setFormat]=useState("landscape"),[busy,setBusy]=useState(false),[status,setStatus]=useState("Prêt");
 async function run(){
  setBusy(true);setStatus("Capture et rendu en cours…");
  try{
   const r=await fetch("/api/render",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({scenario,format})});
   const data=await r.json();
   if(!r.ok)throw Error(data.error||"Échec du rendu");
   setStatus("Vidéo générée : "+data.output);
  }catch(e){setStatus(e instanceof Error?e.message:String(e))}
  finally{setBusy(false)}
 }
 const card:React.CSSProperties={background:"#171e30",border:"1px solid #2b354c",borderRadius:16,padding:24};
 return <main style={{maxWidth:1100,margin:"auto",padding:"40px 24px"}}>
  <header style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:32}}><div><small style={{color:"#a9b8db"}}>TILO / VIDEO PRODUCTION</small><h1 style={{fontSize:34,margin:"8px 0"}}>Motion Studio</h1><p style={{color:"#a9b8db"}}>Capture réelle · Montage cinématique · Export automatique</p></div><div style={{border:"1px solid #3b4d6d",padding:12,borderRadius:12}}>LOCAL ONLY</div></header>
  <div style={{display:"grid",gridTemplateColumns:"minmax(0,1.6fr) minmax(260px,1fr)",gap:20}}>
   <section style={card}><h2>Aperçu du scénario</h2><div style={{aspectRatio:"16/9",borderRadius:12,background:"linear-gradient(145deg,#263963,#101728)",display:"grid",placeItems:"center",fontSize:32,fontWeight:700}}>Tilo <span style={{color:"#95a9ff"}}>Motion</span></div><p style={{color:"#a9b8db"}}>Le lecteur vidéo apparaîtra après un rendu et une intégration de la bibliothèque des exports.</p></section>
   <section style={card}><h2>Production</h2><label>Scénario<select value={scenario} onChange={e=>setScenario(e.target.value)} style={field}>{scenarios.map(s=><option key={s}>{s}</option>)}</select></label><label>Format<select value={format} onChange={e=>setFormat(e.target.value)} style={field}>{formats.map(s=><option key={s}>{s}</option>)}</select></label><button disabled={busy} onClick={run} style={{...field,background:"#7187ff",color:"#101626",fontWeight:700,cursor:busy?"wait":"pointer"}}>{busy?"Rendu en cours…":"Capturer et générer"}</button><p role="status" style={{color:"#b6c4e7",overflowWrap:"anywhere"}}>{status}</p></section>
  </div>
  <p style={{color:"#8998b8",fontSize:13,marginTop:24}}>Console locale de développement. Ne pas exposer le serveur sur Internet.</p>
 </main>;
}
const field:React.CSSProperties={display:"block",width:"100%",boxSizing:"border-box",margin:"12px 0 24px",padding:13,borderRadius:10,border:"1px solid #3a4765",background:"#222d46",color:"white"};
