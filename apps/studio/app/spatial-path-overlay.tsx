"use client";
import {useRef} from "react";
import type {PointerEvent as ReactPointerEvent} from "react";
import type {AnimationTrack} from "../../../src/property-animation";
import {upsertPropertyKeyframe} from "../../../src/property-animation";
import {spatialPoints} from "../../../src/spatial-path";
import {spatialPosition,updateSpatialHandle,type SpatialHandle} from "../../../src/spatial-handles";
type Props={tracks:AnimationTrack[];handles:SpatialHandle[];time:number;width:number;height:number;onChange:(tracks:AnimationTrack[])=>void;onHandlesChange:(handles:SpatialHandle[])=>void;onSeek:(t:number)=>void};
type Gesture={t:number;kind:"point"|"in"|"out"};
export function SpatialPathOverlay({tracks,handles,time,width,height,onChange,onHandlesChange,onSeek}:Props){
 const ref=useRef<SVGSVGElement>(null),drag=useRef<Gesture|null>(null);
 const points=spatialPoints(tracks),current=spatialPosition(points,handles,time);
 const pos=(e:ReactPointerEvent<SVGSVGElement>)=>{const r=ref.current?.getBoundingClientRect();if(!r)return null;return {x:(e.clientX-r.left)/r.width*width-width/2,y:(e.clientY-r.top)/r.height*height-height/2}};
 const coord=(p:{x:number;y:number})=>({x:width/2+p.x,y:height/2+p.y});
 function update(e:ReactPointerEvent<SVGSVGElement>){
  const g=drag.current,p=pos(e);if(!g||!p)return;
  const point=points.find(a=>a.t===g.t);if(!point)return;
  if(g.kind==="point"){const next=upsertPropertyKeyframe(tracks,"x",g.t,Math.round(p.x));onChange(upsertPropertyKeyframe(next,"y",g.t,Math.round(p.y)))}
  else onHandlesChange(updateSpatialHandle(handles,point,g.kind,p.x,p.y));
 }
 const path=points.length?"M"+coord(points[0]).x+" "+coord(points[0]).y+points.slice(1).map((p,i)=>{const prev=points[i],a=handles.find(h=>h.t===prev.t),b=handles.find(h=>h.t===p.t),dx=(p.x-prev.x)/3,dy=(p.y-prev.y)/3;const c1=coord({x:prev.x+(a?.outX??dx),y:prev.y+(a?.outY??dy)}),c2=coord({x:p.x+(b?.inX??-dx),y:p.y+(b?.inY??-dy)}),end=coord(p);return " C"+c1.x+" "+c1.y+" "+c2.x+" "+c2.y+" "+end.x+" "+end.y}).join(""):"";
 function handlePointer(e:ReactPointerEvent<SVGSVGElement>,t:number,kind:Gesture["kind"]){e.preventDefault();e.stopPropagation();drag.current={t,kind};ref.current?.setPointerCapture(e.pointerId);onSeek(t)}
 return <svg ref={ref} className="spatial-path-overlay" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none" aria-label="Trajectoire spatiale avec tangentes" onPointerMove={update} onPointerUp={e=>{update(e);drag.current=null}} onPointerCancel={()=>{drag.current=null}}>
  <path d={path} fill="none" stroke="#FFF" strokeWidth="2.5" strokeDasharray="8 6" pointerEvents="none"/>
  {points.map((p,i)=>{const h=handles.find(a=>a.t===p.t),base=coord(p);return <g key={p.t}>
   {(["in","out"] as const).map(kind=>{const other=points[i+(kind==="in"?-1:1)];if(!other)return null;const dx=(other.x-p.x)/3,dy=(other.y-p.y)/3;const v=coord({x:p.x+(h?.[kind+"X" as "inX"|"outX"]??dx),y:p.y+(h?.[kind+"Y" as "inY"|"outY"]??dy)});return <g key={kind}><line x1={base.x} y1={base.y} x2={v.x} y2={v.y} stroke="#BBB" strokeWidth="1.5" strokeDasharray="5 4" pointerEvents="none"/><circle cx={v.x} cy={v.y} r="9" fill="#777" stroke="#FFF" strokeWidth="2" onPointerDown={e=>handlePointer(e,p.t,kind)} style={{cursor:"grab",pointerEvents:"all"}}/></g>})}
   <circle cx={base.x} cy={base.y} r="13" fill="#222" stroke="#FFF" strokeWidth="3" onPointerDown={e=>handlePointer(e,p.t,"point")} style={{cursor:"grab",pointerEvents:"all"}}/><text x={base.x} y={base.y+4} fontSize="11" fill="#FFF" textAnchor="middle" pointerEvents="none">{i+1}</text>
  </g>})}
  <circle cx={width/2+current.x} cy={height/2+current.y} r="6" fill="#FFF" stroke="#222" strokeWidth="2" pointerEvents="none"/>
 </svg>;
}
