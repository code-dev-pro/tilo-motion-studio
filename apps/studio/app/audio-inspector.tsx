"use client";
import React,{useRef,useState} from "react";
import {Button} from "@/components/arc/button/button";
import {Slider} from "@/components/arc/slider/slider";
import {Switch} from "@/components/arc/switch/switch";
import type {AudioTrack} from "../../../src/audio-tracks";
type Props={recording:string;duration:number;tracks:AudioTrack[];onChange:(tracks:AudioTrack[])=>void};
export function AudioInspector({recording,duration,tracks,onChange}:Props){
 const input=useRef<HTMLInputElement>(null);
 const microphone=useRef<MediaRecorder|null>(null);
 const micStream=useRef<MediaStream|null>(null);
 const chunks=useRef<Blob[]>([]);
 const [recordingVoice,setRecordingVoice]=useState(false);
 const [kind,setKind]=useState<"ambience"|"voiceover">("ambience");
 const [busy,setBusy]=useState(false),[error,setError]=useState("");
 const patch=(id:string,next:Partial<AudioTrack>)=>onChange(tracks.map(t=>t.id===id?{...t,...next}:t));
 async function startVoice(){try{setError("");const stream=await navigator.mediaDevices.getUserMedia({audio:true});micStream.current=stream;chunks.current=[];const mime=MediaRecorder.isTypeSupported("audio/webm")?"audio/webm":"";const recorder=new MediaRecorder(stream,mime?{mimeType:mime}:undefined);microphone.current=recorder;recorder.ondataavailable=e=>{if(e.data.size)chunks.current.push(e.data)};recorder.onstop=()=>{const file=new File(chunks.current,"commentaire.webm",{type:recorder.mimeType||"audio/webm"});stream.getTracks().forEach(t=>t.stop());micStream.current=null;setRecordingVoice(false);void upload(file,"voiceover")};recorder.start();setRecordingVoice(true)}catch(e){setError("Microphone inaccessible : "+String(e))}}
 function stopVoice(){if(microphone.current?.state==="recording")microphone.current.stop()}
 async function upload(file:File,overrideKind?:AudioTrack["kind"]){
  setBusy(true);setError("");
  try{
   if(!recording)throw Error("Sélectionne une capture avant d'ajouter un son.");
   if(tracks.length>=32)throw Error("Limite de 32 pistes atteinte.");
   const form=new FormData();form.set("file",file);
   const response=await fetch("/api/audio/"+encodeURIComponent(recording),{method:"POST",body:form});
   const data=await response.json();
   if(!response.ok)throw Error(data.error||"Import impossible");
   const audio=new window.Audio(data.url);
   const measured=await new Promise<number>(resolve=>{audio.onloadedmetadata=()=>resolve(Number.isFinite(audio.duration)?audio.duration:duration);audio.onerror=()=>resolve(duration)});
   const id="track-"+Date.now().toString(36)+"-"+Math.random().toString(36).slice(2,7);
   onChange([...tracks,{id,file:data.file,kind:overrideKind??kind,name:file.name.slice(0,100),start:0,trimStart:0,duration:Math.max(.1,Math.min(measured,duration)),volume:(overrideKind??kind)==="ambience"?.3:1,muted:false,fadeIn:(overrideKind??kind)==="ambience"?.8:0,fadeOut:(overrideKind??kind)==="ambience"?.8:0,loop:(overrideKind??kind)==="ambience"}]);
  }catch(e){setError(String(e))}finally{setBusy(false);if(input.current)input.current.value=""}
 }
 return <section className="audio-inspector">
  <div className="section-title">Audio & narration</div>
  <div className="tabbar"><button className={"tab "+(kind==="ambience"?"active":"")} onClick={()=>setKind("ambience")}>Ambiance</button><button className={"tab "+(kind==="voiceover"?"active":"")} onClick={()=>setKind("voiceover")}>Commentaire</button></div>
  <input ref={input} type="file" accept=".mp3,.wav,.m4a,.ogg,.webm,audio/*" hidden onChange={e=>{const f=e.target.files?.[0];if(f)void upload(f)}}/>
  <Button variant="secondary" disabled={busy||!recording} onClick={()=>input.current?.click()}>{busy?"Import…":kind==="ambience"?"Ajouter une ambiance":"Ajouter un commentaire audio"}</Button>
  {kind==="voiceover"&&<Button variant={recordingVoice?"danger":"secondary"} disabled={busy||!recording} onClick={()=>recordingVoice?stopVoice():void startVoice()}>{recordingVoice?"■ Terminer le commentaire":"🎙 Enregistrer au microphone"}</Button>}
  <p className="hint">MP3, WAV, M4A, OGG ou WebM · 30 Mo maximum. Fichiers conservés dans le projet.</p>
  {error&&<p role="alert" style={{color:"var(--text-secondary)"}}>{error}</p>}
  {tracks.map(track=><div className="audio-track-editor" key={track.id}>
   <div className="section-title"><strong>{track.kind==="ambience"?"♫":"🎙"} {track.name}</strong><button className="btn icon" title="Supprimer la piste" onClick={()=>onChange(tracks.filter(t=>t.id!==track.id))}>×</button></div>
   <div className="toggle">Activer <Switch aria-label={"Activer "+track.name} checked={!track.muted} onCheckedChange={v=>patch(track.id,{muted:!v})}/></div>
   <Slider label="Volume" min={0} max={2} step={.01} value={track.volume} format={v=>Math.round(v*100)+" %"} onValueChange={volume=>patch(track.id,{volume})}/>
   <Slider label="Début" min={0} max={Math.max(duration,1)} step={.1} value={Math.min(track.start,Math.max(duration,1))} format={v=>v.toFixed(1)+" s"} onValueChange={start=>patch(track.id,{start})}/>
   <Slider label="Durée" min={.1} max={Math.max(.1,duration-track.start)} step={.1} value={Math.min(track.duration,Math.max(.1,duration-track.start))} format={v=>v.toFixed(1)+" s"} onValueChange={duration=>patch(track.id,{duration})}/>
   <Slider label="Fondu entrée" min={0} max={5} step={.1} value={track.fadeIn} format={v=>v.toFixed(1)+" s"} onValueChange={fadeIn=>patch(track.id,{fadeIn})}/>
   <Slider label="Fondu sortie" min={0} max={5} step={.1} value={track.fadeOut} format={v=>v.toFixed(1)+" s"} onValueChange={fadeOut=>patch(track.id,{fadeOut})}/>
   <div className="toggle">Boucle <Switch aria-label={"Boucle "+track.name} checked={track.loop} onCheckedChange={loop=>patch(track.id,{loop})}/></div>
  </div>)}
 </section>;
}
