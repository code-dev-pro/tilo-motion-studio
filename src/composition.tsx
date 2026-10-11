import React from "react";
import {AbsoluteFill,Audio,OffthreadVideo,interpolate,useCurrentFrame,useVideoConfig} from "remotion";
import {sampleCamera,sampleCursor,type CameraKeyframe,type MotionEvent} from "./cinematic";
import type {StudioProject} from "./project";
export type Props={src:string;title:string;intro:string;outro:string;zoom:number;events?:MotionEvent[];camera?:CameraKeyframe[];viewport?:{width:number;height:number};project?:StudioProject;audioSrc?:string};
export function Promo({src,title,intro,outro,zoom,events=[],camera=[],viewport={width:1920,height:1080},project,audioSrc}:Props){
 const f=useCurrentFrame(),{fps,durationInFrames,width,height}=useVideoConfig();
 const t=f/fps;
 const opening=f<fps*2,closing=f>=durationInFrames-fps*2;
 const key=sampleCamera(camera,t),cursor=project?.cursor===false?null:sampleCursor(events,t);
 const frameWidth=width*.88,frameHeight=Math.min(height*.76,frameWidth*viewport.height/viewport.width);
 const sx=frameWidth/viewport.width,sy=frameHeight/viewport.height;
 const cx=cursor?cursor.x*sx:0,cy=cursor?cursor.y*sy:0;
 const scale=key.scale*zoom;
 const translateX=(.5-key.x)*frameWidth*scale,translateY=(.5-key.y)*frameHeight*scale;
 const titleText=opening?(project?.intro||intro||title):(project?.outro||outro||"Découvrez Tilo");
 const introOpacity=opening?Math.min(1,interpolate(f,[0,Math.max(1,fps*.4)],[0,1],{extrapolateRight:"clamp"})):1;
 const outroOpacity=closing?Math.min(1,interpolate(f,[durationInFrames-fps*2,durationInFrames-fps*1.5],[0,1],{extrapolateLeft:"clamp",extrapolateRight:"clamp"})):1;
 const activeClip=project?.clips.find(c=>t>=c.start&&t<c.start+c.duration&&c.title);
 return <AbsoluteFill style={{background:project?.background||"radial-gradient(circle at 25% 20%,#293b69,#0c1122 70%)",color:"white",fontFamily:"Arial,sans-serif",overflow:"hidden",alignItems:"center",justifyContent:"center"}}>
  <div style={{position:"absolute",width:frameWidth,height:frameHeight,borderRadius:project?.radius??22,overflow:"hidden",boxShadow:project?.shadow===false?"none":"0 35px 100px #0009,0 0 0 1px #ffffff35",transform:`translate(${translateX}px,${translateY}px) scale(${scale})`,background:"#121a2a"}}>
   <OffthreadVideo src={src} style={{width:"100%",height:"100%",objectFit:"fill"}}/>
   {cursor&&<div style={{position:"absolute",left:cx,top:cy,pointerEvents:"none",transform:"translate(-3px,-2px)"}}>
    {cursor.click&&<div style={{position:"absolute",left:-20,top:-20,width:40,height:40,borderRadius:"50%",border:"3px solid #94a8ff",opacity:.8}}/>}
    <svg width="32" height="40" viewBox="0 0 32 40"><path d="M3 2 L3 31 L10 24 L16 37 L22 34 L16 21 L27 21 Z" fill="#fff" stroke="#111827" strokeWidth="2.4" strokeLinejoin="round"/></svg>
   </div>}
  </div>
  {activeClip&&<div style={{position:"absolute",bottom:height*.08,background:"#0b1435dd",padding:"18px 32px",borderRadius:12,fontSize:Math.min(36,width/25),fontWeight:600}}>{activeClip.title}</div>}
  {(opening||closing)&&<AbsoluteFill style={{background:"linear-gradient(0deg,rgba(8,14,32,.94),rgba(8,14,32,.35))",alignItems:"center",justifyContent:"center",textAlign:"center",padding:50,opacity:opening?introOpacity:outroOpacity}}>
   <div style={{fontSize:28,letterSpacing:6,marginBottom:20}}>TILO</div>
   <div style={{fontSize:Math.min(60,width/15),fontWeight:700}}>{titleText}</div>
  </AbsoluteFill>}
  {audioSrc&&<Audio src={audioSrc} volume={project?.audio.volume??.65}/>}
 </AbsoluteFill>;
}
