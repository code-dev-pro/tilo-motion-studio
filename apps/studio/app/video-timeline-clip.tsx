"use client";
import {useRef} from "react";
import type {MouseEvent as ReactMouseEvent,PointerEvent as ReactPointerEvent} from "react";
import type {Clip} from "../../../src/timeline";
import {trimClip,duration as clipDuration} from "../../../src/timeline";
import {pointerDeltaSeconds} from "../../../src/trim-geometry";
type Props={clip:Clip;clips:Clip[];index:number;duration:number;sourceDuration:number;selected:boolean;onChange:(clips:Clip[])=>void;onSelect:(event:ReactMouseEvent<HTMLButtonElement>)=>void;onDropClip:(from:number,to:number)=>void};
export function VideoTimelineClip({clip,clips,index,duration,sourceDuration,selected,onChange,onSelect,onDropClip}:Props){
 const gesture=useRef<{startX:number;edge:"left"|"right";initial:Clip[];trackWidth:number}|null>(null);
 function update(e:ReactPointerEvent<HTMLDivElement>){
  const g=gesture.current;if(!g)return;
  const delta=pointerDeltaSeconds(e.clientX-g.startX,g.trackWidth,duration);
  onChange(trimClip(g.initial,clip.id,g.edge,delta,sourceDuration));
 }
 return <div className={"clip video-timeline-clip "+(selected?"selected":"")} style={{left:clip.start/duration*100+"%",width:clipDuration(clip)/duration*100+"%",right:"auto"}}>
  <button type="button" className="video-clip-main" draggable onDragStart={e=>{e.dataTransfer.setData("text/plain",String(index));e.dataTransfer.effectAllowed="move"}} onDragOver={e=>e.preventDefault()} onDrop={e=>{e.preventDefault();const from=Number(e.dataTransfer.getData("text/plain"));if(Number.isInteger(from))onDropClip(from,index)}} onClick={onSelect}>{clip.id}</button>
  {(["left","right"] as const).map(edge=><div key={edge} role="slider" tabIndex={0} aria-label={edge==="left"?"Raccourcir le début du clip":"Raccourcir la fin du clip"} aria-valuemin={0} aria-valuemax={sourceDuration} aria-valuenow={edge==="left"?clip.sourceIn:clip.sourceOut} className={"video-trim-handle "+edge} onPointerDown={e=>{e.preventDefault();e.stopPropagation();const track=e.currentTarget.parentElement?.parentElement;gesture.current={startX:e.clientX,edge,initial:clips,trackWidth:Math.max(1,track?.getBoundingClientRect().width||1)};e.currentTarget.setPointerCapture(e.pointerId)}} onPointerMove={update} onPointerUp={e=>{update(e);gesture.current=null}} onPointerCancel={()=>{gesture.current=null}} onKeyDown={e=>{if(e.key==="ArrowLeft"||e.key==="ArrowRight"){e.preventDefault();e.stopPropagation();onChange(trimClip(clips,clip.id,edge,e.key==="ArrowRight"?1/30:-1/30,sourceDuration))}}}><span aria-hidden="true" className="video-trim-grip"/></div>)}
 </div>;
}
