import React from "react";
import type {EnvironmentSettings} from "./environment";
export function LightingOverlay({settings,width,height,time}:{settings:EnvironmentSettings;width:number;height:number;time:number}){
 if(settings.light==="none"||settings.opacity<=0)return null;
 const blur=2+settings.softness*32;
 const angle=settings.angle+Math.sin(time*.22)*2;
 const stripes=(count:number,spacing:number,thickness:number,rotate:number)=>Array.from({length:count},(_,i)=><rect key={i} x={i*spacing-width} y={-height} width={thickness} height={height*3} transform={`rotate(${rotate} ${width/2} ${height/2})`} fill="#131827"/>);
 return <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} style={{position:"absolute",inset:0,pointerEvents:"none",opacity:settings.opacity,mixBlendMode:"multiply",filter:`blur(${blur}px)`,transform:`rotate(${angle}deg) scale(1.25)`}}>
  {settings.light==="blinds"&&Array.from({length:14},(_,i)=><rect key={i} x={-width} y={i*height/10-height/4} width={width*3} height={height/22} fill="#10151e"/>)}
  {settings.light==="window"&&<><rect x={width*.22} y={-height} width={width*.1} height={height*3} fill="#10151e"/><rect x={width*.65} y={-height} width={width*.1} height={height*3} fill="#10151e"/><rect x={-width} y={height*.48} width={width*3} height={height*.08} fill="#10151e"/></>}
  {settings.light==="rays"&&stripes(12,width/6,width/12,18)}
  {settings.light==="lattice"&&<>{stripes(14,width/8,width/20,25)}{stripes(14,width/8,width/20,-65)}</>}
  {settings.light==="curtain"&&Array.from({length:10},(_,i)=><path key={i} d={`M ${i*width/8-width/4} -100 Q ${i*width/8} ${height/2} ${i*width/8-width/5} ${height+100}`} stroke="#131827" strokeWidth={width/22} fill="none"/>)}
  {settings.light==="foliage"&&Array.from({length:32},(_,i)=>{const x=(i*179)%width,y=(i*113)%height;return <ellipse key={i} cx={x} cy={y} rx={width*.08} ry={height*.025} transform={`rotate(${i*37} ${x} ${y})`} fill="#131827"/>})}
 </svg>;
}
