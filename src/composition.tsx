import React from "react";
import {AbsoluteFill,OffthreadVideo,Video,Audio,Sequence,interpolate,useCurrentFrame,useVideoConfig} from "remotion";
import type {CameraKeyframe,MotionEvent} from "./cinematic";
import {interpolateTrack,smoothCursor} from "./cinematic-v2";
import {fitInside} from "./layout";
import type {EditorSettings} from "./editor";
import {sourceTimeAt} from "./timeline";
import {LightingOverlay} from "./lighting-overlay";
import {defaultEnvironment} from "./environment";
import {backgroundCSS,defaultBackground} from "./backgrounds";
import {CursorOverlay} from "./cursor-overlay";
import {defaultCursorSettings} from "./cursor-settings";
import {mixedAudioGain} from "./audio-editing";
import {defaultAudioMixer} from "./audio-mixer";
import {sampleProperty,propertyDefaults} from "./property-animation";
export type Props={src:string;title:string;intro:string;outro:string;zoom:number;events?:MotionEvent[];camera?:CameraKeyframe[];viewport?:{width:number;height:number};settings?:EditorSettings;preview?:boolean};
export function Promo({src,title,intro,outro,zoom,events=[],camera=[],viewport={width:1920,height:1080},settings,preview=false}:Props){
 const f=useCurrentFrame(),{fps,durationInFrames,width,height}=useVideoConfig();
 const t=f/fps,duration=durationInFrames/fps;
 const sourceTime=settings?.clips?.length?sourceTimeAt(settings.clips,t):t;
 const cam=interpolateTrack(camera,sourceTime??t),cursor=settings?.cursor===false?null:smoothCursor(events,sourceTime??t);
 const prop=(name:keyof typeof propertyDefaults)=>sampleProperty(settings?.animationTracks.find(a=>a.property===name),t,propertyDefaults[name]);
 const advanced=settings?.advancedCamera;
 const scene=settings?.scene;
 const environment=settings?.environment??defaultEnvironment();
 const bounds={width:Math.max(1,width-environment.padding*2),height:Math.max(1,height-environment.padding*2)};
 const frame=scene?.fit==="cover"?{width:bounds.width,height:bounds.height}:fitInside(viewport,bounds);
 const fw=frame.width*(scene?.scale??1),fh=frame.height*(scene?.scale??1);
 const cx=cursor?cursor.x*fw/viewport.width:0,cy=cursor?cursor.y*fh/viewport.height:0;
 const totalScale=(advanced?.mode==="manual"?(advanced.amount):cam.scale)*(settings?.zoom??zoom);
 // Position the focal point at the center of the output frame after scaling.
 const focalX=advanced?.mode==="manual"?advanced.targetX:cam.x;
 const focalY=advanced?.mode==="manual"?advanced.targetY:cam.y;
 const tx=(.5-focalX)*fw*totalScale+(scene?.offsetX??0)*width*.25,ty=(.5-focalY)*fh*totalScale+(scene?.offsetY??0)*height*.25;
 const enter=Math.min(1,interpolate(t,[0,.5],[0,1],{extrapolateRight:"clamp"}));
 const exit=Math.min(1,interpolate(duration-t,[0,.6],[0,1],{extrapolateRight:"clamp"}));
 const opening=t<1.6,closing=t>duration-1.6;
 const overlayOpacity=opening?Math.min(1,Math.max(0,(1.6-t)/.4)):closing?Math.min(1,Math.max(0,(t-(duration-1.6))/.4)):0;
 const driftX=Math.sin(t*.28)*width*.012,driftY=Math.cos(t*.22)*height*.012;
 const clickSize=cursor?.click?48:0;
 return <AbsoluteFill style={{background:backgroundCSS(settings?.canvasBackground??defaultBackground()),color:"white",fontFamily:"Arial,sans-serif",overflow:"hidden",alignItems:"center",justifyContent:"center"}}>
  <AbsoluteFill style={{background:"radial-gradient(circle at 75% 70%,#5365a52b,transparent 48%)",transform:`translate(${driftX}px,${driftY}px) scale(1.08)`}}/>
  <div style={{position:"absolute",width:fw,height:fh,borderRadius:environment.radius,overflow:"hidden",background:"#111827",boxShadow:settings?.shadow===false?"none":`0 ${25+environment.depth*70}px ${50+environment.depth*120}px #0009,0 16px 40px #0008,0 0 0 1px #ffffff32`,opacity:prop("opacity"),transform:`perspective(1800px) translate(${tx+prop("x")}px,${ty+prop("y")}px) rotateZ(${prop("rotation")}deg) rotateX(${advanced?.tiltX??0}deg) rotateY(${advanced?.tiltY??0}deg) rotateZ(${advanced?.spinZ??0}deg) scale(${totalScale*prop("scale")}) translateY(${(1-enter)*25+(1-exit)*-15}px)`,willChange:"transform"}}>
   {settings?.clips?.length?settings.clips.map(clip=><Sequence key={clip.id} from={Math.round(clip.start*fps)} durationInFrames={Math.max(1,Math.round((clip.sourceOut-clip.sourceIn)*fps))} layout="none">{preview?<Video src={src} muted playsInline startFrom={Math.round(clip.sourceIn*fps)} style={{width:"100%",height:"100%",objectFit:scene?.fit??"contain"}}/>:<OffthreadVideo src={src} startFrom={Math.round(clip.sourceIn*fps)} style={{width:"100%",height:"100%",objectFit:scene?.fit??"contain"}}/>}</Sequence>):(preview?<Video src={src} muted playsInline style={{width:"100%",height:"100%",objectFit:scene?.fit??"contain"}}/>:<OffthreadVideo src={src} style={{width:"100%",height:"100%",objectFit:scene?.fit??"contain"}}/>)} 
   <CursorOverlay events={events} time={sourceTime??t} width={fw} height={fh} viewport={viewport} settings={{...(settings?.cursorSettings??defaultCursorSettings()),visible:settings?.cursor!==false&&(settings?.cursorSettings?.visible??true)}}/>
  </div>
  {settings?.audioTracks?.filter(track=>!track.muted).map(track=><Sequence key={track.id} from={Math.round(track.start*fps)} durationInFrames={Math.max(1,Math.round(track.duration*fps))} layout="none"><Audio src={src.slice(0,src.lastIndexOf("/")+1)+track.file} startFrom={Math.round(track.trimStart*fps)} loop={track.loop} volume={frame=>{const seconds=frame/fps;const fadeIn=track.fadeIn>0?Math.min(1,seconds/track.fadeIn):1;const fadeOut=track.fadeOut>0?Math.min(1,(track.duration-seconds)/track.fadeOut):1;return Math.max(0,Math.min(fadeIn,fadeOut))*mixedAudioGain(track,settings.audioTracks,track.start+seconds,settings.audioMixer??defaultAudioMixer())}}/></Sequence>)}
  <LightingOverlay settings={environment} width={width} height={height} time={t}/>
  {environment.vignette>0&&<AbsoluteFill style={{pointerEvents:"none",background:`radial-gradient(ellipse at center,transparent 35%,rgba(0,0,0,${environment.vignette}) 100%)`}}/>}
  {(opening||closing)&&<AbsoluteFill style={{background:"linear-gradient(0deg,#071021e8,#07102190)",alignItems:"center",justifyContent:"center",textAlign:"center",padding:48,opacity:overlayOpacity}}>
   <div style={{fontSize:24,letterSpacing:8,marginBottom:20,opacity:.75}}>TILO</div>
   <div style={{fontSize:Math.min(64,width/14),fontWeight:750,letterSpacing:-1}}>{opening?(settings?.intro||intro||title):(settings?.outro||outro||"Découvrez Tilo")}</div>
  </AbsoluteFill>}
 </AbsoluteFill>;
}
