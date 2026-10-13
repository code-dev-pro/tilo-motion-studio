import React from "react";
import type {CursorSettings} from "./cursor-settings";
import type {MotionEvent} from "./cinematic";
import {smoothCursor} from "./cinematic-v2";
export function cursorAt(events:MotionEvent[],time:number,mode:CursorSettings["movement"]){
 const lag={precise:0,subtle:.025,smooth:.055,fluid:.09}[mode];
 return smoothCursor(events,Math.max(0,time-lag),{precise:.001,subtle:.035,smooth:.08,fluid:.14}[mode]);
}
export function CursorOverlay({events,time,width,height,viewport,settings}:{events:MotionEvent[];time:number;width:number;height:number;viewport:{width:number;height:number};settings:CursorSettings}){
 if(!settings.visible)return null;
 const p=cursorAt(events,time,settings.movement);if(!p)return null;
 const last=events.filter(e=>e.type==="move"||e.type==="click"||e.type==="drag").reduce((v,e)=>e.t<=time?Math.max(v,e.t):v,-Infinity);
 const idle=settings.hideWhenIdle&&time-last>1.2;
 if(idle)return null;
 const size=28*settings.size;
 const x=p.x*width/viewport.width,y=p.y*height/viewport.height;
 const click=events.filter(e=>e.type==="click"&&e.t<=time).at(-1);
 const dt=click?time-click.t:Infinity,active=dt>=0&&dt<.55;
 const effect=settings.clickEffect;
 const circle=settings.style==="circle";
 const hand=settings.style==="hand";
 const white=settings.style==="white"||settings.style==="retro";
 return <div style={{position:"absolute",left:x,top:y,transform:"translate(-12%,-8%)",pointerEvents:"none",zIndex:10,filter:"drop-shadow(0 2px 2px #0008)"}}>
  {active&&effect!=="none"&&<div style={{position:"absolute",left:-size*.5,top:-size*.5,width:size*2,height:size*2,borderRadius:"50%",border:"2px solid #9ab8ff",background:effect==="pulse"?"#a2baff55":"transparent",opacity:1-dt/.55,transform:`scale(${effect==="pulse"?1+dt:effect==="ripple"?.5+dt*2:1})`}}/>}
  {active&&effect==="confetti"&&Array.from({length:8},(_,i)=><div key={i} style={{position:"absolute",left:Math.cos(i*Math.PI/4)*dt*95,top:Math.sin(i*Math.PI/4)*dt*95,width:5,height:5,borderRadius:i%2?0:5,background:["#7c9cff","#ffd37b","#7be0cf"][i%3],opacity:1-dt/.55}}/>)}
  {circle?<div style={{width:size,height:size,border:"2px solid white",borderRadius:"50%",background:"#ffffff33"}}/>:hand?<svg width={size} height={size*1.3} viewBox="0 0 32 42"><path d="M11 39 4 23q-2-5 3-6l4 5V5q0-5 5-5t5 5v14q6-5 9 3v11l-7 8Z" fill="white" stroke="#161b25" strokeWidth="2"/></svg>:<svg width={size} height={size*1.3} viewBox="0 0 32 40"><path d="M3 2 L3 31 L10 24 L16 37 L22 34 L16 21 L27 21 Z" fill={white?"white":"#151b2a"} stroke={white?"#151b2a":"white"} strokeWidth={settings.style==="retro"?3:2.2} strokeLinejoin="round"/></svg>}
 </div>;
}
