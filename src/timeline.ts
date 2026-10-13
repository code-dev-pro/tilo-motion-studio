import {z} from "zod";
export const clipSchema=z.object({id:z.string().regex(/^[a-z0-9-]+$/),sourceIn:z.number().nonnegative(),sourceOut:z.number().positive(),start:z.number().nonnegative()}).refine(c=>c.sourceOut>c.sourceIn);
export type Clip=z.infer<typeof clipSchema>;
export const duration=(c:Clip)=>c.sourceOut-c.sourceIn;
export const arrange=(clips:Clip[]):Clip[]=>{let t=0;return clips.map(c=>{const next={...c,start:t};t+=duration(c);return next})};
export const validateClips=(clips:Clip[],sourceDuration:number)=>clips.map(c=>{const parsed=clipSchema.parse(c);if(c.sourceOut>sourceDuration+.001)throw Error("Clip exceeds source duration");return parsed});
export function splitClip(clips:Clip[],id:string,time:number):Clip[]{
 const index=clips.findIndex(c=>c.id===id);if(index<0)return clips;
 const c=clips[index],local=time-c.start;
 if(local<=.05||local>=duration(c)-.05)return clips;
 const mid=c.sourceIn+local;
 return arrange([...clips.slice(0,index),{...c,sourceOut:mid},{...c,id:c.id+"-split-"+Math.round(mid*1000),sourceIn:mid},...clips.slice(index+1)]);
}
export function trimClip(clips:Clip[],id:string,edge:"left"|"right",delta:number,sourceDuration:number):Clip[]{
 return arrange(clips.map(c=>{if(c.id!==id)return c;const min=.1;
  if(edge==="left")return {...c,sourceIn:Math.max(0,Math.min(c.sourceOut-min,c.sourceIn+delta))};
  return {...c,sourceOut:Math.min(sourceDuration,Math.max(c.sourceIn+min,c.sourceOut+delta))};
 }));
}
export function moveClip(clips:Clip[],from:number,to:number):Clip[]{
 if(from<0||from>=clips.length||to<0||to>=clips.length)return clips;
 const next=[...clips],item=next.splice(from,1)[0];next.splice(to,0,item);return arrange(next);
}
export function removeClip(clips:Clip[],id:string){return arrange(clips.filter(c=>c.id!==id))}
export function sourceTimeAt(clips:Clip[],time:number):number|null{
 const clip=clips.find(c=>time>=c.start&&time<c.start+duration(c));
 return clip?clip.sourceIn+time-clip.start:null;
}
