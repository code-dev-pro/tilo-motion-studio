export type BezierHandles={x1:number;y1:number;x2:number;y2:number};
export const defaultBezier:BezierHandles={x1:.25,y1:.1,x2:.25,y2:1};
export const clamp=(n:number,min=0,max=1)=>Math.min(max,Math.max(min,n));
export function cubic(a:number,b:number,c:number,t:number){const u=1-t;return 3*u*u*t*a+3*u*t*t*b+t*t*t*c}
export function bezierProgress(progress:number,handles:BezierHandles):number{
 const x=clamp(progress);if(x<=0)return 0;if(x>=1)return 1;
 let lo=0,hi=1;
 for(let i=0;i<28;i++){const mid=(lo+hi)/2;if(cubic(handles.x1,handles.x2,1,mid)<x)lo=mid;else hi=mid}
 return cubic(handles.y1,handles.y2,1,(lo+hi)/2);
}
export function normalizeHandles(h:BezierHandles):BezierHandles{return {x1:clamp(h.x1),y1:clamp(h.y1,-2,3),x2:clamp(h.x2),y2:clamp(h.y2,-2,3)}}
