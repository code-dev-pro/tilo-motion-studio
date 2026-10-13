"use client";
import {useRef} from "react";
import type {PointerEvent as ReactPointerEvent} from "react";
import {timelinePercentage,timeFromTimelinePointer} from "../../../src/timeline-scale";
type Props={time:number;movieDuration:number;scaleDuration:number;onSeek:(time:number)=>void};
export function TimelinePlayhead({time,movieDuration,scaleDuration,onSeek}:Props){
 const dragging=useRef(false);
 const pointerTime=(e:ReactPointerEvent<HTMLButtonElement>)=>{
  const surface=e.currentTarget.closest(".timeline-body");
  const ruler=surface?.querySelector(".ruler");
  const rect=ruler?.getBoundingClientRect();
  if(!rect)return;
  onSeek(timeFromTimelinePointer(e.clientX,rect.left,rect.width,scaleDuration,movieDuration));
 };
 return <button type="button" className="playhead playhead-draggable" aria-label="Déplacer la tête de lecture" aria-valuetext={time.toFixed(2)+" secondes"} style={{left:"calc(115px + (100% - 133px) * "+timelinePercentage(time,scaleDuration)/100+")"}} onPointerDown={e=>{e.preventDefault();e.stopPropagation();dragging.current=true;e.currentTarget.setPointerCapture(e.pointerId);pointerTime(e)}} onPointerMove={e=>{if(dragging.current)pointerTime(e)}} onPointerUp={e=>{if(dragging.current)pointerTime(e);dragging.current=false}} onPointerCancel={()=>{dragging.current=false}} onKeyDown={e=>{if(e.key==="ArrowLeft"||e.key==="ArrowRight"){e.preventDefault();onSeek(time+(e.key==="ArrowRight"?1:-1)/30)}else if(e.key==="Home"){e.preventDefault();onSeek(0)}else if(e.key==="End"){e.preventDefault();onSeek(movieDuration)}}}><span className="playhead-head" aria-hidden="true"/></button>;
}
