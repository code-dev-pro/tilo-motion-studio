import {z} from "zod";
import {bezierProgress,defaultBezier,normalizeHandles,type BezierHandles} from "./bezier";
export const animatedPropertySchema=z.enum(["x","y","scale","rotation","opacity"]);
export const propertyKeyframeSchema=z.object({t:z.number().min(0).max(86400),value:z.number().finite(),easing:z.enum(["linear","ease-in","ease-out","ease-in-out","bezier"]).default("ease-in-out"),bezier:z.object({x1:z.number().min(0).max(1),y1:z.number().min(-2).max(3),x2:z.number().min(0).max(1),y2:z.number().min(-2).max(3)}).optional()});
export const animationTrackSchema=z.object({id:z.string().regex(/^[a-z0-9-]+$/),property:animatedPropertySchema,keyframes:z.array(propertyKeyframeSchema).max(300)});
export const animationTracksSchema=z.array(animationTrackSchema).max(20).default([]);
export type AnimationTrack=z.infer<typeof animationTrackSchema>;
export type AnimatedProperty=z.infer<typeof animatedPropertySchema>;
export const propertyDefaults:Record<AnimatedProperty,number>={x:0,y:0,scale:1,rotation:0,opacity:1};
export function sampleProperty(track:AnimationTrack|undefined,time:number,defaultValue:number):number{
 const keys=track?.keyframes.slice().sort((a,b)=>a.t-b.t)||[];
 if(!keys.length)return defaultValue;
 if(time<=keys[0].t)return keys[0].value;
 for(let i=1;i<keys.length;i++){
  const a=keys[i-1],b=keys[i];if(time>b.t)continue;
  const u=Math.max(0,Math.min(1,(time-a.t)/Math.max(.00001,b.t-a.t)));
  const eased=b.easing==="bezier"?bezierProgress(u,b.bezier??defaultBezier):b.easing==="linear"?u:b.easing==="ease-in"?u*u:b.easing==="ease-out"?1-(1-u)*(1-u):u*u*(3-2*u);
  return a.value+(b.value-a.value)*eased;
 }
 return keys[keys.length-1].value;
}
export function upsertPropertyKeyframe(tracks:AnimationTrack[],property:AnimatedProperty,t:number,value:number):AnimationTrack[]{
 const id="property-"+property,time=Math.max(0,Math.round(t*30)/30);
 const existing=tracks.find(track=>track.property===property);
 const key={t:time,value,easing:"ease-in-out" as const};
 if(!existing)return [...tracks,{id,property,keyframes:[key]}];
 return tracks.map(track=>track.property!==property?track:{...track,keyframes:[...track.keyframes.filter(k=>Math.abs(k.t-time)>1/60),key].sort((a,b)=>a.t-b.t)});
}

export function movePropertyKeyframe(tracks:AnimationTrack[],property:AnimatedProperty,index:number,time:number):AnimationTrack[]{
 return tracks.map(track=>{
  if(track.property!==property||index<0||index>=track.keyframes.length)return track;
  const next=track.keyframes.map((k,i)=>i===index?{...k,t:Math.max(0,Math.round(time*30)/30)}:k);
  return {...track,keyframes:next};
 });
}
export function setPropertyEasing(tracks:AnimationTrack[],property:AnimatedProperty,index:number,easing:z.infer<typeof propertyKeyframeSchema>["easing"]):AnimationTrack[]{
 return tracks.map(track=>track.property===property?{...track,keyframes:track.keyframes.map((k,i)=>i===index?{...k,easing}:k)}:track);
}
export function removePropertyKeyframe(tracks:AnimationTrack[],property:AnimatedProperty,index:number):AnimationTrack[]{
 return tracks.map(track=>track.property===property?{...track,keyframes:track.keyframes.filter((_,i)=>i!==index)}:track);
}

export function setPropertyBezier(tracks:AnimationTrack[],property:AnimatedProperty,index:number,handles:BezierHandles):AnimationTrack[]{
 const bezier=normalizeHandles(handles);
 return tracks.map(track=>track.property===property?{...track,keyframes:track.keyframes.map((k,i)=>i===index?{...k,easing:"bezier" as const,bezier}:k)}:track);
}
