import type {MotionEvent} from "./cinematic";
export type RecorderEvent=Omit<MotionEvent,"t">;
export function normalizeRecorderEvent(value:unknown,viewport:{width:number;height:number}):RecorderEvent|null{
 if(!value||typeof value!=="object")return null;
 const e=value as Record<string,unknown>;
 if(!["move","click","drag","scroll"].includes(String(e.type)))return null;
 if(typeof e.x!=="number"||typeof e.y!=="number"||!Number.isFinite(e.x)||!Number.isFinite(e.y))return null;
 const type=e.type as MotionEvent["type"];
 const x=Math.max(0,Math.min(viewport.width,e.x)),y=Math.max(0,Math.min(viewport.height,e.y));
 return {type,x,y,...(type==="scroll"&&typeof e.deltaY==="number"&&Number.isFinite(e.deltaY)?{deltaY:e.deltaY}:{})};
}
export function recordingEventSummary(events:MotionEvent[]){
 return {total:events.length,moves:events.filter(e=>e.type==="move"||e.type==="drag").length,clicks:events.filter(e=>e.type==="click").length,scrolls:events.filter(e=>e.type==="scroll").length};
}
