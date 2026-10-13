"use client";
import {useEffect,useRef,useState} from "react";
import type {AudioTrack} from "../../../../src/audio-tracks";
import {waveformPeaks,clampAudioStart} from "../../../../src/audio-editing";
type Props={track:AudioTrack;recording:string;movieDuration:number;onMove:(start:number)=>void;onSelect:()=>void};
export function AudioWaveformClip({track,recording,movieDuration,onMove,onSelect}:Props){
 const [peaks,setPeaks]=useState<number[]>([]);
 const [dragStart,setDragStart]=useState<number|null>(null);
 const start=useRef({x:0,time:0});
 useEffect(()=>{
  let cancelled=false;
  const ctx=new AudioContext();
  (async()=>{try{
   const response=await fetch("/api/media/"+encodeURIComponent(recording)+"/"+encodeURIComponent(track.file));
   if(!response.ok)throw Error("Audio unavailable");
   const data=await response.arrayBuffer();
   const decoded=await ctx.decodeAudioData(data);
   if(!cancelled)setPeaks(waveformPeaks(decoded.getChannelData(0),100));
  }catch{if(!cancelled)setPeaks([])}finally{void ctx.close()}})();
  return()=>{cancelled=true;void ctx.close()};
 },[recording,track.file]);
 const move=(event:React.PointerEvent<HTMLButtonElement>)=>{
  if(dragStart===null)return;
  const rect=event.currentTarget.parentElement?.getBoundingClientRect();
  if(!rect)return;
  const delta=(event.clientX-start.current.x)/Math.max(1,rect.width)*movieDuration;
  onMove(clampAudioStart(start.current.time+delta,movieDuration,track.duration));
 };
 return <button type="button" className="clip audio-clip waveform-clip" style={{left:track.start/movieDuration*100+"%",width:Math.min(track.duration,Math.max(0,movieDuration-track.start))/movieDuration*100+"%",right:"auto"}} title={track.name+" — déplacer sur la timeline"} onClick={onSelect} onPointerDown={event=>{event.preventDefault();start.current={x:event.clientX,time:track.start};setDragStart(event.pointerId);event.currentTarget.setPointerCapture(event.pointerId);onSelect()}} onPointerMove={move} onPointerUp={event=>{if(dragStart!==null){move(event);setDragStart(null)}}} onPointerCancel={()=>setDragStart(null)}>
  {peaks.length>0?<svg viewBox="0 0 100 28" preserveAspectRatio="none" aria-hidden="true">{peaks.map((p,i)=><line key={i} x1={i+.5} x2={i+.5} y1={14-p*12} y2={14+p*12} stroke="currentColor" strokeWidth=".7" opacity=".8"/>)}</svg>:<span className="waveform-fallback">♫</span>}
  <span className="waveform-title">{track.name}</span>
 </button>;
}
