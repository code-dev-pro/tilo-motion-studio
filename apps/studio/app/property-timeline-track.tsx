"use client";
import {useRef} from "react";
import type {PointerEvent as ReactPointerEvent} from "react";
import type {AnimationTrack} from "../../../src/property-animation";
import {movePropertyKeyframe} from "../../../src/property-animation";
import {Tooltip} from "./tooltip";
type Props={track:AnimationTrack;tracks:AnimationTrack[];duration:number;onChange:(tracks:AnimationTrack[])=>void;onSelect:(property:AnimationTrack["property"],index:number)=>void};
export function PropertyTimelineTrack({track,tracks,duration,onChange,onSelect}:Props){
 const drag=useRef<{index:number;rect:DOMRect}|null>(null);
 function start(e:ReactPointerEvent<HTMLButtonElement>,index:number){
  const rect=e.currentTarget.parentElement?.getBoundingClientRect();if(!rect)return;
  drag.current={index,rect};e.currentTarget.setPointerCapture(e.pointerId);onSelect(track.property,index);
 }
 function move(e:ReactPointerEvent<HTMLButtonElement>){
  if(!drag.current)return;
  const {index,rect}=drag.current;
  const time=Math.max(0,Math.min(duration,(e.clientX-rect.left)/Math.max(1,rect.width)*duration));
  onChange(movePropertyKeyframe(tracks,track.property,index,time));
 }
 return <div className="track"><span className="track-label">{track.property}</span>{track.keyframes.map((key,index)=><Tooltip key={index} content={track.property+" · "+key.value+" · "+key.t.toFixed(2)+" s"}><button type="button" className="keyframe" aria-label={"Modifier keyframe "+track.property} style={{left:Math.min(100,key.t/duration*100)+"%",background:"var(--accent)"}} onPointerDown={e=>start(e,index)} onPointerMove={move} onPointerUp={e=>{move(e);drag.current=null}} onPointerCancel={()=>{drag.current=null}} onClick={()=>onSelect(track.property,index)}/></Tooltip>)}</div>;
}
