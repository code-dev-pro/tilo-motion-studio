"use client";
import {useRef} from "react";
import type {PointerEvent as ReactPointerEvent} from "react";
import {sampleProperty,upsertPropertyKeyframe,propertyDefaults,type AnimationTrack} from "../../../src/property-animation";
type Props={tracks:AnimationTrack[];time:number;width:number;height:number;onChange:(tracks:AnimationTrack[])=>void};
export function ScenePositionOverlay({tracks,time,width,height,onChange}:Props){
 const origin=useRef<{x:number;y:number;px:number;py:number}|null>(null);
 const x=sampleProperty(tracks.find(t=>t.property==="x"),time,propertyDefaults.x);
 const y=sampleProperty(tracks.find(t=>t.property==="y"),time,propertyDefaults.y);
 function move(e:ReactPointerEvent<HTMLDivElement>){
  if(!origin.current)return;
  const rect=e.currentTarget.getBoundingClientRect();
  const dx=(e.clientX-origin.current.px)/Math.max(1,rect.width)*width;
  const dy=(e.clientY-origin.current.py)/Math.max(1,rect.height)*height;
  const tx=upsertPropertyKeyframe(tracks,"x",time,Math.round(origin.current.x+dx));
  onChange(upsertPropertyKeyframe(tx,"y",time,Math.round(origin.current.y+dy)));
 }
 return <div className="scene-position-overlay" role="application" aria-label="Déplacer la fenêtre vidéo" onPointerDown={e=>{origin.current={x,y,px:e.clientX,py:e.clientY};e.currentTarget.setPointerCapture(e.pointerId)}} onPointerMove={move} onPointerUp={e=>{move(e);origin.current=null}} onPointerCancel={()=>{origin.current=null}}>
  <span className="scene-position-label">Déplacer la fenêtre · X {Math.round(x)} · Y {Math.round(y)}</span>
  <span className="scene-position-crosshair" aria-hidden="true">+</span>
 </div>;
}
