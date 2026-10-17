import type {AudioTrack} from "./audio-tracks";
import type {AudioMixerSettings} from "./audio-mixer";
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

export function trimAudioEdge(track:AudioTrack,edge:"left"|"right",delta:number,movieDuration:number):AudioTrack{
 const snap=(n:number)=>Math.round(n*30)/30;
 if(edge==="left"){
  const change=snap(Math.max(-Math.min(track.start,track.trimStart),Math.min(track.duration-.1,delta)));
  return {...track,start:Math.max(0,track.start+change),trimStart:Math.max(0,track.trimStart+change),duration:Math.max(.1,track.duration-change)};
 }
 const next=Math.max(.1,Math.min(movieDuration-track.start,track.duration+snap(delta)));
 return {...track,duration:next};
}

/** Deterministic frame-local gain: same result in preview and offline export. */
export function mixedAudioGain(track:AudioTrack,tracks:AudioTrack[],time:number,mixer:AudioMixerSettings):number{
 if(track.muted)return 0;
 const anySolo=tracks.some(t=>t.solo&&!t.muted);
 if(anySolo&&!track.solo)return 0;
 const activeVoice=tracks.filter(t=>t.kind==="voiceover"&&!t.muted&&(!anySolo||t.solo));
 let gain=1;
 if(mixer.duckingEnabled&&track.kind==="ambience"){
  for(const voice of activeVoice){
   const start=voice.start,end=voice.start+voice.duration;
   let influence=0;
   if(time>=start&&time<=end)influence=1;
   else if(time<start&&time>=start-mixer.attack)influence=(time-(start-mixer.attack))/mixer.attack;
   else if(time>end&&time<=end+mixer.release)influence=1-(time-end)/mixer.release;
   gain=Math.min(gain,1-influence*(1-mixer.duckingLevel));
  }
 }
 return Math.max(0,Math.min(4,track.volume*mixer.masterVolume*gain));
}

/** Envelope time is relative to the audio clip, not its trimmed source position. */
export function audioFadeEnvelope(localTime:number,duration:number,fadeIn:number,fadeOut:number):number{
 if(!Number.isFinite(localTime)||!Number.isFinite(duration)||duration<=0)return 0;
 const t=Math.max(0,Math.min(duration,localTime));
 const inGain=fadeIn>0?Math.min(1,t/fadeIn):1;
 const outGain=fadeOut>0?Math.min(1,Math.max(0,duration-t)/fadeOut):1;
 return Math.max(0,Math.min(inGain,outGain));
}
