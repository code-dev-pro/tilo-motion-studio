import type {AnimationTrack} from "./property-animation";
import {sampleProperty} from "./property-animation";
export type SpatialPoint={t:number;x:number;y:number};
export function spatialPoints(tracks:AnimationTrack[]):SpatialPoint[]{
 const x=tracks.find(a=>a.property==="x"),y=tracks.find(a=>a.property==="y");
 const times=[...new Set([...(x?.keyframes||[]),...(y?.keyframes||[])].map(k=>k.t))].sort((a,b)=>a-b);
 return times.map(t=>({t,x:sampleProperty(x,t,0),y:sampleProperty(y,t,0)}));
}
export function spatialPath(points:SpatialPoint[],width:number,height:number):string{
 if(!points.length)return "";
 const coord=(p:SpatialPoint)=>({x:width/2+p.x,y:height/2+p.y});
 const pts=points.map(coord);let d="M"+pts[0].x+" "+pts[0].y;
 for(let i=0;i<pts.length-1;i++){
  const p0=pts[Math.max(0,i-1)],p1=pts[i],p2=pts[i+1],p3=pts[Math.min(pts.length-1,i+2)];
  const c1={x:p1.x+(p2.x-p0.x)/6,y:p1.y+(p2.y-p0.y)/6};
  const c2={x:p2.x-(p3.x-p1.x)/6,y:p2.y-(p3.y-p1.y)/6};
  d+=" C"+c1.x+" "+c1.y+" "+c2.x+" "+c2.y+" "+p2.x+" "+p2.y;
 }
 return d;
}
