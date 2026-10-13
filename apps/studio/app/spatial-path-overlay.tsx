"use client";
import {useRef} from "react";
import type {PointerEvent as ReactPointerEvent} from "react";
import type {AnimationTrack} from "../../../src/property-animation";
import {upsertPropertyKeyframe,sampleProperty} from "../../../src/property-animation";
import {spatialPoints,spatialPath} from "../../../src/spatial-path";
type Props={tracks:AnimationTrack[];time:number;width:number;height:number;onChange:(tracks:AnimationTrack[])=>void;onSeek:(t:number)=>void};
export function SpatialPathOverlay({tracks,time,width,height,onChange,onSeek}:Props){
 const ref=useRef<SVGSVGElement>(null);
 const gesture=useRef<{t:number}|null>(null);
 const points=spatialPoints(tracks);
 const x=sampleProperty(tracks.find(t=>t.property==="x"),time,0);
 const y=sampleProperty(tracks.find(t=>t.property==="y"),time,0);
 function position(e:ReactPointerEvent<SVGSVGElement>){
  const rect=ref.current?.getBoundingClientRect();if(!rect)return null;
  return {x:(e.clientX-rect.left)/rect.width*width-width/2,y:(e.clientY-rect.top)/rect.height*height-height/2};
 }
 function update(e:ReactPointerEvent<SVGSVGElement>){
  const g=gesture.current,p=position(e);if(!g||!p)return;
  const a=upsertPropertyKeyframe(tracks,"x",g.t,Math.round(p.x));
  onChange(upsertPropertyKeyframe(a,"y",g.t,Math.round(p.y)));
 }
 return <svg ref={ref} className="spatial-path-overlay" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none" aria-label="Trajectoire spatiale de la vidéo" onPointerMove={update} onPointerUp={e=>{update(e);gesture.current=null}} onPointerCancel={()=>{gesture.current=null}}>
  <path d={spatialPath(points,width,height)} fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeDasharray="8 6" opacity=".9" pointerEvents="none"/>
  {points.map((p,i)=><g key={p.t}><circle cx={width/2+p.x} cy={height/2+p.y} r="12" fill="#222" stroke="#FFF" strokeWidth="3" style={{cursor:"grab",touchAction:"none"}} onPointerDown={e=>{e.stopPropagation();gesture.current={t:p.t};ref.current?.setPointerCapture(e.pointerId);onSeek(p.t)}}/><text x={width/2+p.x} y={height/2+p.y+4} fontSize="11" textAnchor="middle" fill="#FFF" pointerEvents="none">{i+1}</text></g>)}
  <circle cx={width/2+x} cy={height/2+y} r="6" fill="#FFF" stroke="#222" strokeWidth="2" pointerEvents="none"/>
 </svg>;
}
