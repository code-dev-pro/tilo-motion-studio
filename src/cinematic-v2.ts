import type {CameraKeyframe,MotionEvent} from "./cinematic";
export type CameraOptions={zoom:number;lead:number;hold:number;release:number;minGap:number;maxZoom:number};
export const defaultCameraOptions:CameraOptions={zoom:1.48,lead:.32,hold:1.15,release:.8,minGap:1.9,maxZoom:1.8};
export function easeCinematic(t:number){const x=Math.max(0,Math.min(1,t));return x<.5?4*x*x*x:1-Math.pow(-2*x+2,3)/2}
export function buildCameraTrack(events:MotionEvent[],duration:number,viewport:{width:number;height:number},overrides:Partial<CameraOptions>={}):CameraKeyframe[]{
 const o={...defaultCameraOptions,...overrides},end=Math.max(0,duration);
 const clicks=events.filter(e=>e.type==="click"&&Number.isFinite(e.t)&&e.t>=0&&e.t<=end&&Number.isFinite(e.x)&&Number.isFinite(e.y)).sort((a,b)=>a.t-b.t);
 const selected:MotionEvent[]=[];
 for(const c of clicks){if(selected.length&&c.t-selected[selected.length-1].t<o.minGap)continue;selected.push(c)}
 const home=(t:number):CameraKeyframe=>({t,x:.5,y:.5,scale:1});
 const keys:CameraKeyframe[]=[home(0)];
 let lastEnd=0;
 for(const c of selected){
  const begin=Math.max(lastEnd,c.t-o.lead);
  const arrive=Math.max(begin+.01,c.t+.32);
  if(arrive>=end)break;
  const holdEnd=Math.min(end,arrive+o.hold);
  const releaseEnd=Math.min(end,holdEnd+o.release);
  const scale=Math.max(1,Math.min(o.maxZoom,o.zoom));
  const x=Math.max(.12,Math.min(.88,c.x/Math.max(1,viewport.width)));
  const y=Math.max(.12,Math.min(.88,c.y/Math.max(1,viewport.height)));
  // Never add duplicate-time keyframes; a hold at the exact end would overwrite the release.
  const candidates=[home(begin),{t:arrive,x,y,scale},{t:holdEnd,x,y,scale},home(releaseEnd)];
  for(const key of candidates){
   if(key.t>keys[keys.length-1].t+1e-5)keys.push(key);
   else if(Math.abs(key.t-keys[keys.length-1].t)<1e-5)keys[keys.length-1]=key;
  }
  lastEnd=releaseEnd;
 }
 if(end>keys[keys.length-1].t+1e-5)keys.push(home(end));
 return keys;
}
export function interpolateTrack(keys:CameraKeyframe[],t:number):CameraKeyframe{
 if(!keys.length)return {t,x:.5,y:.5,scale:1};
 if(t<=keys[0].t)return {...keys[0],t};
 for(let i=1;i<keys.length;i++){
  const a=keys[i-1],b=keys[i];
  if(t<=b.t){
   const k=easeCinematic((t-a.t)/Math.max(.0001,b.t-a.t));
   return {t,x:a.x+(b.x-a.x)*k,y:a.y+(b.y-a.y)*k,scale:a.scale+(b.scale-a.scale)*k};
  }
 }
 return {...keys[keys.length-1],t};
}
export function smoothCursor(events:MotionEvent[],t:number,windowSeconds=.08){
 const samples=events.filter(e=>(e.type==="move"||e.type==="drag"||e.type==="click")&&Math.abs(e.t-t)<=windowSeconds).sort((a,b)=>a.t-b.t);
 if(!samples.length){
  const points=events.filter(e=>e.type==="move"||e.type==="drag"||e.type==="click").sort((a,b)=>a.t-b.t);
  if(!points.length)return null;
  let i=points.findIndex(p=>p.t>=t);
  if(i<0)i=points.length-1;
  const b=points[i],a=points[Math.max(0,i-1)],k=easeCinematic((t-a.t)/Math.max(.001,b.t-a.t));
  return {x:a.x+(b.x-a.x)*k,y:a.y+(b.y-a.y)*k,click:events.some(e=>e.type==="click"&&Math.abs(e.t-t)<.14)};
 }
 const weights=samples.map(e=>1/(.012+Math.abs(e.t-t)));
 const sum=weights.reduce((a,b)=>a+b,0);
 return {x:samples.reduce((v,e,i)=>v+e.x*weights[i],0)/sum,y:samples.reduce((v,e,i)=>v+e.y*weights[i],0)/sum,click:events.some(e=>e.type==="click"&&Math.abs(e.t-t)<.14)};
}
