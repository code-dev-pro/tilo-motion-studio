import React from "react";
import {AbsoluteFill,OffthreadVideo,interpolate,useCurrentFrame,useVideoConfig} from "remotion";
export type Props={src:string;title:string;intro:string;outro:string;zoom:number};
export function Promo({src,title,intro,outro,zoom}:Props){
 const f=useCurrentFrame(),{fps,durationInFrames}=useVideoConfig();
 const z=interpolate(f,[0,durationInFrames],[1,zoom],{extrapolateRight:"clamp"});
 const opening=f<fps*2,closing=f>=durationInFrames-fps*2;
 return <AbsoluteFill style={{background:"#101827",color:"white",fontFamily:"Arial,sans-serif",overflow:"hidden"}}>
  <AbsoluteFill style={{transform:`scale(${z})`}}>
   <OffthreadVideo src={src} style={{width:"100%",height:"100%",objectFit:"contain"}}/>
  </AbsoluteFill>
  {(opening||closing)&&<AbsoluteFill style={{background:"linear-gradient(0deg,rgba(8,14,32,.9),rgba(8,14,32,.3))",alignItems:"center",justifyContent:"center",textAlign:"center",padding:50}}>
   <div style={{fontSize:28,letterSpacing:6,marginBottom:20}}>TILO</div>
   <div style={{fontSize:60,fontWeight:700}}>{opening?(intro||title):(outro||"Découvrez Tilo")}</div>
  </AbsoluteFill>}
 </AbsoluteFill>;
}
