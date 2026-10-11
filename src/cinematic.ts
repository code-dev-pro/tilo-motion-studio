export type MotionEvent={t:number;type:"move"|"click"|"drag"|"scroll";x:number;y:number;deltaY?:number};
export type CameraKeyframe={t:number;x:number;y:number;scale:number};
export const clamp=(v:number,min:number,max:number)=>Math.max(min,Math.min(max,v));
export const smooth=(v:number)=>{const x=clamp(v,0,1);return x*x*(3-2*x)};
export function sampleCamera(keys:CameraKeyframe[],time:number):CameraKeyframe{
 if(!keys.length)return {t:time,x:.5,y:.5,scale:1};
 const sorted=[...keys].sort((a,b)=>a.t-b.t);
 if(time<=sorted[0].t)return {...sorted[0]};
 for(let i=1;i<sorted.length;i++){
  const b=sorted[i],a=sorted[i-1];
  if(time<=b.t){const k=smooth((time-a.t)/Math.max(.001,b.t-a.t));return {t:time,x:a.x+(b.x-a.x)*k,y:a.y+(b.y-a.y)*k,scale:a.scale+(b.scale-a.scale)*k}}
 }
 return {...sorted[sorted.length-1]};
}
export function cameraFromClicks(events:MotionEvent[],duration:number,viewport:{width:number;height:number}):CameraKeyframe[]{
 const keys:CameraKeyframe[]=[{t:0,x:.5,y:.5,scale:1}];
 for(const e of events.filter(e=>e.type==="click")){
  const x=clamp(e.x/viewport.width,0,1),y=clamp(e.y/viewport.height,0,1);
  keys.push({t:Math.max(0,e.t-.22),x:.5,y:.5,scale:1});
  keys.push({t:e.t+.38,x,y,scale:1.35});
  keys.push({t:e.t+1.3,x,y,scale:1.35});
  keys.push({t:e.t+1.95,x:.5,y:.5,scale:1});
 }
 keys.push({t:duration,x:.5,y:.5,scale:1});
 return keys.sort((a,b)=>a.t-b.t).filter(k=>k.t<=duration);
}
export function sampleCursor(events:MotionEvent[],time:number):{x:number;y:number;click:boolean}|null{
 const points=events.filter(e=>e.type==="move"||e.type==="drag"||e.type==="click").sort((a,b)=>a.t-b.t);
 if(!points.length)return null;
 let previous=points[0],next=points[points.length-1];
 for(let i=1;i<points.length;i++){if(points[i].t>=time){next=points[i];previous=points[i-1];break}}
 if(time<=points[0].t){previous=points[0];next=points[0]}
 const f=smooth((time-previous.t)/Math.max(.001,next.t-previous.t));
 return {x:previous.x+(next.x-previous.x)*f,y:previous.y+(next.y-previous.y)*f,click:events.some(e=>e.type==="click"&&Math.abs(e.t-time)<.16)};
}
