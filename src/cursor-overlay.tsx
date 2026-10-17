import React from "react";
import type {CursorSettings} from "./cursor-settings";
import type {MotionEvent} from "./cinematic";
import {cursorPosition,cursorMotionPresets} from "./cursor-motion";
import {mapVideoPoint} from "./cursor-coordinate-map";
import {CursorArtwork} from "./cursor-artwork";
export function cursorAt(events:MotionEvent[],time:number,mode:CursorSettings["movement"]){
 return cursorPosition(events,time,cursorMotionPresets[mode]);
}
export function CursorOverlay({events,time,width,height,viewport,settings,fit="contain"}:{events:MotionEvent[];time:number;width:number;height:number;viewport:{width:number;height:number};settings:CursorSettings;fit?:"contain"|"cover"}){
 if(!settings.visible)return null;
 const p=cursorAt(events,time,settings.movement);if(!p)return null;
 const last=p.lastEventTime;
 const idle=settings.hideWhenIdle&&time-last>1.2;
 if(idle)return null;
 const size=28*settings.size;
 const {x,y}=mapVideoPoint(p.x,p.y,viewport,{width,height},fit);
 const click=events.filter(e=>e.type==="click"&&e.t<=time).at(-1);
 const dt=click?time-click.t:Infinity,active=dt>=0&&dt<.55;
 const effect=settings.clickEffect;

 return <div style={{position:"absolute",left:x,top:y,transform:"translate(-12%,-8%)",pointerEvents:"none",zIndex:10,filter:"drop-shadow(0 2px 2px #0008)"}}>
  {active&&effect!=="none"&&<div style={{position:"absolute",left:-size*.5,top:-size*.5,width:size*2,height:size*2,borderRadius:"50%",border:"2px solid #9ab8ff",background:effect==="pulse"?"#a2baff55":"transparent",opacity:1-dt/.55,transform:`scale(${effect==="pulse"?1+dt:effect==="ripple"?.5+dt*2:1})`}}/>}
  {active&&effect==="confetti"&&Array.from({length:8},(_,i)=><div key={i} style={{position:"absolute",left:Math.cos(i*Math.PI/4)*dt*95,top:Math.sin(i*Math.PI/4)*dt*95,width:5,height:5,borderRadius:i%2?0:5,background:["#7c9cff","#ffd37b","#7be0cf"][i%3],opacity:1-dt/.55}}/>)}
  <CursorArtwork style={settings.style} size={size}/>
 </div>;
}
