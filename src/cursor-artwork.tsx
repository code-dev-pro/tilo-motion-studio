import React from "react";
import type {CursorSettings} from "./cursor-settings";
export type CursorStyle=CursorSettings["style"];
export function CursorArtwork({style,size=32}:{style:CursorStyle;size?:number}){
 const stroke=style==="white"||style==="retro"?"#151b2a":"#fff";
 const fill=style==="white"||style==="retro"?"#fff":"#151b2a";
 if(style==="circle")return <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="12" fill="#ffffff33" stroke="#fff" strokeWidth="2"/></svg>;
 if(style==="hand")return <svg width={size} height={size*1.3} viewBox="0 0 32 42" aria-hidden="true"><path d="M11 39 4 23q-2-5 3-6l4 5V5q0-5 5-5t5 5v14q6-5 9 3v11l-7 8Z" fill="#fff" stroke="#161b25" strokeWidth="2"/></svg>;
 const paths:Record<Exclude<CursorStyle,"circle"|"hand">,string>={
 default:"M3 2 L3 31 L10 24 L16 37 L22 34 L16 21 L27 21 Z",
 white:"M3 2 L3 31 L10 24 L16 37 L22 34 L16 21 L27 21 Z",
 modern:"M3 2 L3 31 L10 24 L16 37 L22 34 L16 21 L27 21 Z",
 retro:"M3 2 L3 31 L10 24 L16 37 L22 34 L16 21 L27 21 Z"
 };
 return <svg width={size} height={size*1.3} viewBox="0 0 32 40" aria-hidden="true"><path d={paths[style]} fill={fill} stroke={stroke} strokeWidth={style==="retro"?3:2.2} strokeLinejoin="round"/></svg>;
}
