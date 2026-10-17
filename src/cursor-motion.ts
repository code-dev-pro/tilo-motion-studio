import type {MotionEvent} from "./cinematic";
export type CursorPoint={x:number;y:number;click:boolean;lastEventTime:number};
export type CursorMotionOptions={lag:number;smoothing:number;maxGap:number};
export const cursorMotionPresets:Record<"precise"|"subtle"|"smooth"|"fluid",CursorMotionOptions>={
 precise:{lag:0,smoothing:0,maxGap:.35},
 subtle:{lag:.015,smoothing:.025,maxGap:.45},
 smooth:{lag:.035,smoothing:.055,maxGap:.55},
 fluid:{lag:.06,smoothing:.09,maxGap:.65}
};
const ease=(u:number)=>{const t=Math.max(0,Math.min(1,u));return t*t*(3-2*t)};
export function cursorPosition(events:MotionEvent[],time:number,options:CursorMotionOptions):CursorPoint|null{
 const points=events.filter(e=>["move","drag","click"].includes(e.type)&&Number.isFinite(e.t)&&Number.isFinite(e.x)&&Number.isFinite(e.y)).sort((a,b)=>a.t-b.t);
 if(!points.length)return null;
 const dragBefore=[...points].reverse().find(p=>p.t<=time);
 const dragAfter=points.find(p=>p.t>=time);
 const recentDrag=Boolean((dragBefore?.type==="drag"&&time-dragBefore.t<.12)||(dragAfter?.type==="drag"&&dragAfter.t-time<.06));
 const t=Math.max(0,time-(recentDrag?0:options.lag));
 let hi=points.findIndex(p=>p.t>=t);
 if(hi<0)hi=points.length;
 const before=points[Math.max(0,hi-1)],after=points[Math.min(points.length-1,hi)];
 let x=before.x,y=before.y;
 if(after!==before&&after.t>before.t&&after.t-before.t<=options.maxGap){
  const u=recentDrag?Math.max(0,Math.min(1,(t-before.t)/(after.t-before.t))):ease((t-before.t)/(after.t-before.t));x=before.x+(after.x-before.x)*u;y=before.y+(after.y-before.y)*u;
 }else if(t<=points[0].t){x=points[0].x;y=points[0].y}
 if(options.smoothing>0&&!recentDrag){
  const near=points.filter(p=>Math.abs(p.t-t)<=options.smoothing);
  if(near.length>1){const weights=near.map(p=>1/(.015+Math.abs(p.t-t)));const sum=weights.reduce((a,b)=>a+b,0);
   const avgX=near.reduce((a,p,i)=>a+p.x*weights[i],0)/sum,avgY=near.reduce((a,p,i)=>a+p.y*weights[i],0)/sum;
   x=x*.65+avgX*.35;y=y*.65+avgY*.35}
 }
 // A click is a hard positional anchor: cinematic lag must not place the cursor
 // outside the clicked target when the video reaches the actual click frame.
 const clickAnchor=events.filter(e=>e.type==="click"&&Number.isFinite(e.t)&&e.t<=time&&time-e.t<=Math.max(.14,options.lag+.04)).sort((a,b)=>b.t-a.t)[0];
 if(clickAnchor){x=clickAnchor.x;y=clickAnchor.y}
 const click=events.some(e=>e.type==="click"&&Math.abs(e.t-time)<.14);
 const last=points.filter(p=>p.t<=time).at(-1)?.t??-Infinity;
 return {x,y,click,lastEventTime:last};
}
