import {z} from "zod";
export const spatialHandleSchema=z.object({t:z.number().min(0),outX:z.number().finite(),outY:z.number().finite(),inX:z.number().finite(),inY:z.number().finite()});
export const spatialHandlesSchema=z.array(spatialHandleSchema).max(300).default([]);
export type SpatialHandle=z.infer<typeof spatialHandleSchema>;
export type XYPoint={t:number;x:number;y:number};
export function cubicPoint(a:number,b:number,c:number,d:number,u:number){const v=1-u;return v*v*v*a+3*v*v*u*b+3*v*u*u*c+u*u*u*d}
export function spatialPosition(points:XYPoint[],handles:SpatialHandle[],time:number):{x:number;y:number}{
 const p=[...points].sort((a,b)=>a.t-b.t);if(!p.length)return {x:0,y:0};if(time<=p[0].t)return {x:p[0].x,y:p[0].y};
 for(let i=1;i<p.length;i++){const a=p[i-1],b=p[i];if(time>b.t)continue;const u=Math.max(0,Math.min(1,(time-a.t)/(b.t-a.t||1)));const h1=handles.find(h=>Math.abs(h.t-a.t)<1/60),h2=handles.find(h=>Math.abs(h.t-b.t)<1/60);return {x:cubicPoint(a.x,a.x+(h1?.outX??(b.x-a.x)/3),b.x+(h2?.inX??-(b.x-a.x)/3),b.x,u),y:cubicPoint(a.y,a.y+(h1?.outY??(b.y-a.y)/3),b.y+(h2?.inY??-(b.y-a.y)/3),b.y,u)}}
 return {x:p[p.length-1].x,y:p[p.length-1].y};
}
export function updateSpatialHandle(handles:SpatialHandle[],point:XYPoint,kind:"in"|"out",x:number,y:number):SpatialHandle[]{
 const existing=handles.find(h=>Math.abs(h.t-point.t)<1/60)??{t:point.t,inX:0,inY:0,outX:0,outY:0};
 const next={...existing,[kind+"X"]:x-point.x,[kind+"Y"]:y-point.y};
 return [...handles.filter(h=>Math.abs(h.t-point.t)>=1/60),next].sort((a,b)=>a.t-b.t);
}
