import type {CameraKeyframe} from "./cinematic";
export const clamp=(v:number)=>Math.max(0,Math.min(1,v));
export function pointFromRect(clientX:number,clientY:number,rect:{left:number;top:number;width:number;height:number}){
 return {x:clamp((clientX-rect.left)/Math.max(1,rect.width)),y:clamp((clientY-rect.top)/Math.max(1,rect.height))};
}
export function upsertCameraTarget(keys:CameraKeyframe[],time:number,x:number,y:number,scale:number):CameraKeyframe[]{
 const t=Math.max(0,Math.round(time*30)/30);
 const next={t,x:clamp(x),y:clamp(y),scale:Math.max(1,Math.min(3,scale))};
 const index=keys.findIndex(k=>Math.abs(k.t-t)<1/60);
 if(index>=0)return keys.map((k,i)=>i===index?next:k);
 return [...keys,next].sort((a,b)=>a.t-b.t);
}
