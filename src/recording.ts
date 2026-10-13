import {z} from "zod";
export const recordingOptions=z.object({
 url:z.string().url().refine(v=>{const u=new URL(v);return (u.hostname==="localhost"||u.hostname==="127.0.0.1")&&["http:","https:"].includes(u.protocol)},{message:"Only local Tilo URLs are supported"}),
 id:z.string().regex(/^[a-z0-9-]+$/),width:z.number().int().min(640).max(3840).default(1600),height:z.number().int().min(360).max(2160).default(900)
});
export type RecordingOptions=z.infer<typeof recordingOptions>;
export type RecordingStatus={state:"idle"|"recording"|"stopping"|"ready"|"error";id?:string;error?:string;duration?:number};
