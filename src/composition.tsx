import React from "react";
import {AbsoluteFill,OffthreadVideo,interpolate,useCurrentFrame,useVideoConfig} from "remotion";
import type {CameraKeyframe,MotionEvent} from "./cinematic";
import {interpolateTrack,smoothCursor} from "./cinematic-v2";
import {fitInside} from "./layout";
export type Props={src:string;title:string;intro:string;outro:string;zoom:number;events?:MotionEvent[];camera?:CameraKeyframe[];viewport?:{width:number;height:number}};
export function Promo({src,title,intro,outro,zoom,events=[],camera=[],viewport={width:1920,height:1080}}:Props){
 const f=useCurrentFrame(),{fps,durationInFrames,width,height}=useVideoConfig();
 const t=f/fps,duration=durationInFrames/fps;
 const cam=interpolateTrack(camera,t),cursor=smoothCursor(events,t);
 const frame=fitInside(viewport,{width:width*.88,height:height*.76});
 const fw=frame.width,fh=frame.height;
 const cx=cursor?cursor.x*fw/viewport.width:0,cy=cursor?cursor.y*fh/viewport.height:0;
 const totalScale=cam.scale*zoom;
 // Position the focal point at the center of the output frame after scaling.
 const tx=(.5-cam.x)*fw*totalScale,ty=(.5-cam.y)*fh*totalScale;
 const enter=Math.min(1,interpolate(t,[0,.5],[0,1],{extrapolateRight:"clamp"}));
 const exit=Math.min(1,interpolate(duration-t,[0,.6],[0,1],{extrapolateRight:"clamp"}));
 const opening=t<1.6,closing=t>duration-1.6;
 const overlayOpacity=opening?Math.min(1,Math.max(0,(1.6-t)/.4)):closing?Math.min(1,Math.max(0,(t-(duration-1.6))/.4)):0;
 const driftX=Math.sin(t*.28)*width*.012,driftY=Math.cos(t*.22)*height*.012;
 const clickSize=cursor?.click?48:0;
 return <AbsoluteFill style={{background:"radial-gradient(ellipse at 24% 18%,#324c8c 0%,#1a294b 38%,#0b1121 90%)",color:"white",fontFamily:"Arial,sans-serif",overflow:"hidden",alignItems:"center",justifyContent:"center"}}>
  <AbsoluteFill style={{background:"radial-gradient(circle at 75% 70%,#5365a52b,transparent 48%)",transform:`translate(${driftX}px,${driftY}px) scale(1.08)`}}/>
  <div style={{position:"absolute",width:fw,height:fh,borderRadius:24,overflow:"hidden",background:"#111827",boxShadow:"0 50px 130px #0009,0 16px 40px #0008,0 0 0 1px #ffffff32",transform:`translate(${tx}px,${ty}px) scale(${totalScale}) translateY(${(1-enter)*25+(1-exit)*-15}px)`,willChange:"transform"}}>
   <OffthreadVideo src={src} style={{width:"100%",height:"100%",objectFit:"contain"}}/>
   {cursor&&<div style={{position:"absolute",left:cx,top:cy,transform:"translate(-3px,-2px)",pointerEvents:"none",filter:"drop-shadow(0 2px 2px #0008)"}}>
    {cursor.click&&<div style={{position:"absolute",width:clickSize,height:clickSize,left:-clickSize/2,top:-clickSize/2,border:"2px solid #a3b6ff",borderRadius:"50%",background:"#a3b6ff22"}}/>}
    <svg width="30" height="38" viewBox="0 0 32 40"><path d="M3 2 L3 31 L10 24 L16 37 L22 34 L16 21 L27 21 Z" fill="white" stroke="#111827" strokeWidth="2.4" strokeLinejoin="round"/></svg>
   </div>}
  </div>
  {(opening||closing)&&<AbsoluteFill style={{background:"linear-gradient(0deg,#071021e8,#07102190)",alignItems:"center",justifyContent:"center",textAlign:"center",padding:48,opacity:overlayOpacity}}>
   <div style={{fontSize:24,letterSpacing:8,marginBottom:20,opacity:.75}}>TILO</div>
   <div style={{fontSize:Math.min(64,width/14),fontWeight:750,letterSpacing:-1}}>{opening?(intro||title):(outro||"Découvrez Tilo")}</div>
  </AbsoluteFill>}
 </AbsoluteFill>;
}
