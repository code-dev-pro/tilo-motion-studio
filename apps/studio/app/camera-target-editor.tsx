"use client";
import React,{useRef,useState} from "react";
import type {CameraKeyframe} from "../../../../src/cinematic";
import {pointFromRect,upsertCameraTarget} from "../../../../src/camera-targets";
type Props={src:string;viewport:{width:number;height:number};keys:CameraKeyframe[];time:number;scale:number;onChange:(keys:CameraKeyframe[])=>void;onSeek:(time:number)=>void};
export function CameraTargetEditor({src,viewport,keys,time,scale,onChange,onSeek}:Props){
 const video=useRef<HTMLVideoElement>(null);
 const [dragIndex,setDragIndex]=useState<number|null>(null);
 const targetRef=useRef<HTMLDivElement>(null);
 const points=keys.filter(k=>k.scale>1.001);
 function point(e:React.PointerEvent){const rect=targetRef.current?.getBoundingClientRect();return rect?pointFromRect(e.clientX,e.clientY,rect):null}
 function update(index:number,e:React.PointerEvent){const p=point(e);if(!p)return;onChange(keys.map((k,i)=>i===index?{...k,...p}:k))}
 return <div style={{display:"flex",flexDirection:"column",gap:8,width:"100%",maxHeight:"100%"}}>
  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:8}}><strong>Zoom targets</strong><button type="button" className="btn" onClick={()=>{onChange(upsertCameraTarget(keys,time,.5,.5,scale));}}>+ Cible à {time.toFixed(2)} s</button></div>
  <div style={{position:"relative",width:"100%",maxHeight:"min(55vh,620px)",aspectRatio:viewport.width+"/"+viewport.height,margin:"auto",overflow:"hidden",borderRadius:12,background:"#0a1020",touchAction:"none"}}>
   <video ref={video} src={src} muted playsInline preload="metadata" onLoadedMetadata={e=>{e.currentTarget.currentTime=Math.min(time,e.currentTarget.duration||time)}} style={{width:"100%",height:"100%",objectFit:"contain",display:"block",pointerEvents:"none"}}/>
   <div ref={targetRef} style={{position:"absolute",inset:0,cursor:"crosshair",touchAction:"none"}} onPointerDown={e=>{if(e.target!==e.currentTarget)return;const p=point(e);if(p)onChange(upsertCameraTarget(keys,time,p.x,p.y,scale))}}>
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none"}}>
     {points.slice(1).map((p,i)=><line key={i} x1={points[i].x*100} y1={points[i].y*100} x2={p.x*100} y2={p.y*100} stroke="#a9c4ff" strokeWidth=".35" strokeDasharray="1.5 1.5"/>)}
    </svg>
    {keys.map((k,i)=><button type="button" key={i} title={`Cible ${i+1} : ${k.t.toFixed(2)} s`} onClick={e=>{e.stopPropagation();onSeek(k.t)}} onPointerDown={e=>{e.stopPropagation();setDragIndex(i);e.currentTarget.setPointerCapture(e.pointerId)}} onPointerMove={e=>{if(dragIndex===i)update(i,e)}} onPointerUp={e=>{if(dragIndex===i){update(i,e);setDragIndex(null)}}} onPointerCancel={()=>setDragIndex(null)} style={{position:"absolute",left:(k.x*100)+"%",top:(k.y*100)+"%",transform:"translate(-50%,-50%)",width:28,height:28,borderRadius:"50%",border:"2px solid white",background:"#457df1",color:"white",fontWeight:700,cursor:"grab",touchAction:"none",boxShadow:"0 3px 12px #0008"}}>{i+1}</button>)}
   </div>
  </div>
  <span className="hint">Clique sur l'image pour ajouter une cible au temps courant. Glisse un point pour modifier son cadrage. Les lignes montrent l'ordre des cibles.</span>
 </div>;
}
