"use client";
import {useEffect,useRef,useState} from "react";
import type {PointerEvent as ReactPointerEvent} from "react";
import type {AudioTrack} from "../../../src/audio-tracks";
import {waveformPeaks,clampAudioStart,trimAudioEdge} from "../../../src/audio-editing";
import {pointerDeltaSeconds} from "../../../src/trim-geometry";
type Props={track:AudioTrack;recording:string;movieDuration:number;scaleDuration:number;onMove:(start:number)=>void;onTrim:(track:AudioTrack)=>void;onSelect:()=>void};
type Gesture={kind:"move"|"left"|"right";x:number;initial:AudioTrack;trackWidth:number};
export function AudioWaveformClip({track,recording,movieDuration,scaleDuration,onMove,onTrim,onSelect}:Props){
 const [peaks,setPeaks]=useState<number[]>([]);
 const gesture=useRef<Gesture|null>(null);
 useEffect(()=>{
  let cancelled=false;const controller=new AbortController();let ctx:AudioContext|null=null;
  (async()=>{try{
   const response=await fetch("/api/media/"+encodeURIComponent(recording)+"/"+encodeURIComponent(track.file),{signal:controller.signal});
   if(!response.ok)throw Error("Audio unavailable");
   const data=await response.arrayBuffer();if(cancelled)return;
   ctx=new AudioContext();const decoded=await ctx.decodeAudioData(data);
   if(!cancelled)setPeaks(waveformPeaks(decoded.getChannelData(0),100));
  }catch{if(!cancelled)setPeaks([])}finally{if(ctx)void ctx.close()}})();
  return()=>{cancelled=true;controller.abort();if(ctx)void ctx.close()};
 },[recording,track.file]);
 function begin(e:ReactPointerEvent<HTMLElement>,kind:Gesture["kind"]){
  e.preventDefault();e.stopPropagation();onSelect();
  const trackWidth=e.currentTarget.closest(".track")?.getBoundingClientRect().width||1;
  gesture.current={kind,x:e.clientX,initial:track,trackWidth};
  e.currentTarget.setPointerCapture(e.pointerId);
 }
 function update(e:ReactPointerEvent<HTMLElement>){
  const g=gesture.current;if(!g)return;
  const delta=pointerDeltaSeconds(e.clientX-g.x,g.trackWidth,scaleDuration);
  if(g.kind==="move")onMove(clampAudioStart(g.initial.start+delta,movieDuration,g.initial.duration));
  else onTrim(trimAudioEdge(g.initial,g.kind,delta,movieDuration));
 }
 function end(e:ReactPointerEvent<HTMLElement>){update(e);gesture.current=null}
 const safeDuration=Math.max(.001,scaleDuration);
 return <div className="clip audio-clip waveform-clip" style={{left:track.start/safeDuration*100+"%",width:Math.max(0,Math.min(track.duration,Math.max(0,movieDuration-track.start)))/safeDuration*100+"%",right:"auto"}}>
  <button type="button" className="waveform-main" aria-label={"Déplacer "+track.name} onClick={onSelect} onPointerDown={e=>begin(e,"move")} onPointerMove={update} onPointerUp={end} onPointerCancel={()=>{gesture.current=null}}>
   {peaks.length?<svg viewBox="0 0 100 28" preserveAspectRatio="none" aria-hidden="true">{peaks.map((p,i)=><line key={i} x1={i+.5} x2={i+.5} y1={14-p*12} y2={14+p*12} stroke="currentColor" strokeWidth=".7" opacity=".8"/>)}</svg>:<span className="waveform-fallback">♫</span>}
   <span className="waveform-title">{track.name}</span>
  </button>
  {(["left","right"] as const).map(edge=><div key={edge} role="slider" tabIndex={0} aria-label={edge==="left"?"Raccourcir le début de "+track.name:"Raccourcir la fin de "+track.name} aria-valuemin={0} aria-valuemax={movieDuration} aria-valuenow={edge==="left"?track.start:track.start+track.duration} className={"audio-trim-handle "+edge} onPointerDown={e=>begin(e,edge)} onPointerMove={update} onPointerUp={end} onPointerCancel={()=>{gesture.current=null}} onKeyDown={e=>{if(e.key!=="ArrowLeft"&&e.key!=="ArrowRight")return;e.preventDefault();e.stopPropagation();onTrim(trimAudioEdge(track,edge,(e.key==="ArrowRight"?1:-1)/30,movieDuration))}}><span className="audio-trim-grip" aria-hidden="true"/></div>)}
 </div>;
}
