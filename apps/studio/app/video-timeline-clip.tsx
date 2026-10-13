"use client";
import {useRef} from "react";
import type {MouseEvent as ReactMouseEvent,PointerEvent as ReactPointerEvent} from "react";
import type {Clip} from "../../../src/timeline";
import {trimClip,duration as clipDuration} from "../../../src/timeline";
import {Tooltip} from "./tooltip";
type Props={clip:Clip;clips:Clip[];index:number;duration:number;sourceDuration:number;selected:boolean;onChange:(clips:Clip[])=>void;onSelect:(event:ReactMouseEvent<HTMLButtonElement>)=>void;onDropClip:(from:number,to:number)=>void};
export function VideoTimelineClip({clip,clips,index,duration,sourceDuration,selected,onChange,onSelect,onDropClip}:Props){
 const drag=useRef<{x:number;edge:"left"|"right";original:Clip[]}|null>(null);
 function move(e:ReactPointerEvent<HTMLSpanElement>){
  const d=drag.current,rect=e.currentTarget.parentElement?.parentElement?.getBoundingClientRect();
  if(!d||!rect)return;
  const delta=(e.clientX-d.x)/Math.max(1,rect.width)*duration;
  onChange(trimClip(d.original,clip.id,d.edge,delta,sourceDuration));
 }
 return <button type="button" className={"clip video-timeline-clip "+(selected?"selected":"")} draggable={!drag.current} onDragStart={e=>{e.dataTransfer.setData("text/plain",String(index));e.dataTransfer.effectAllowed="move"}} onDragOver={e=>e.preventDefault()} onDrop={e=>{e.preventDefault();const from=Number(e.dataTransfer.getData("text/plain"));if(Number.isInteger(from))onDropClip(from,index)}} onClick={onSelect} style={{left:clip.start/duration*100+"%",width:clipDuration(clip)/duration*100+"%",right:"auto"}}>
  <span className="video-clip-name">{clip.id}</span>
  {(["left","right"] as const).map(edge=><span key={edge} role="slider" tabIndex={0} aria-label={"Poignée "+edge} aria-valuemin={0} aria-valuemax={sourceDuration} aria-valuenow={edge==="left"?clip.sourceIn:clip.sourceOut} className={"video-trim-handle "+edge} onPointerDown={e=>{e.stopPropagation();e.preventDefault();drag.current={x:e.clientX,edge,original:clips};e.currentTarget.setPointerCapture(e.pointerId)}} onPointerMove={move} onPointerUp={e=>{move(e);drag.current=null}} onPointerCancel={()=>{drag.current=null}} onKeyDown={e=>{if(e.key==="ArrowLeft"||e.key==="ArrowRight"){e.preventDefault();onChange(trimClip(clips,clip.id,edge,e.key==="ArrowRight"?1/30:-1/30,sourceDuration))}}}/>)}
 </button>;
}
