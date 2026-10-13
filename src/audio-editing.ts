import type {AudioTrack} from "./audio-tracks";
export function clampAudioStart(start:number,movieDuration:number,clipDuration:number){
 return Math.max(0,Math.min(Math.max(0,movieDuration-Math.min(clipDuration,movieDuration)),Math.round(start*30)/30));
}
export function duckingGain(track:AudioTrack,tracks:AudioTrack[],time:number,amount=.35,ramp=.25){
 if(track.kind!=="ambience")return 1;
 const voices=tracks.filter(t=>t.kind==="voiceover"&&!t.muted);
 let gain=1;
 for(const v of voices){
  const before=v.start-time,after=time-(v.start+v.duration);
  let influence=0;
  if(before>0&&before<ramp)influence=1-before/ramp;
  else if(after>0&&after<ramp)influence=1-after/ramp;
  else if(time>=v.start&&time<=v.start+v.duration)influence=1;
  gain=Math.min(gain,1-influence*(1-amount));
 }
 return gain;
}
export function waveformPeaks(samples:Float32Array,bars=80):number[]{
 if(!samples.length)return Array(bars).fill(0);
 return Array.from({length:bars},(_,i)=>{
  const start=Math.floor(i*samples.length/bars),end=Math.max(start+1,Math.floor((i+1)*samples.length/bars));
  let max=0;for(let j=start;j<end&&j<samples.length;j++)max=Math.max(max,Math.abs(samples[j]));
  return Math.min(1,max);
 });
}
