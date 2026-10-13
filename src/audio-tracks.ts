import {z} from "zod";
export const audioTrackSchema=z.object({
 id:z.string().regex(/^[a-z0-9-]{1,80}$/),
 file:z.string().regex(/^audio-[a-z0-9-]+\.(mp3|wav|m4a|ogg|webm)$/),
 kind:z.enum(["ambience","voiceover"]),
 name:z.string().min(1).max(100),
 start:z.number().min(0).max(86400),
 trimStart:z.number().min(0).max(86400).default(0),
 duration:z.number().positive().max(86400),
 volume:z.number().min(0).max(2).default(1),
 muted:z.boolean().default(false),
 solo:z.boolean().default(false),
 fadeIn:z.number().min(0).max(30).default(0),
 fadeOut:z.number().min(0).max(30).default(0),
 loop:z.boolean().default(false)
});
export type AudioTrack=z.infer<typeof audioTrackSchema>;
export const audioTracksSchema=z.array(audioTrackSchema).max(32);
export const audioEnd=(track:AudioTrack)=>track.start+track.duration;
export function moveAudioTrack(tracks:AudioTrack[],id:string,start:number){return tracks.map(t=>t.id===id?{...t,start:Math.max(0,start)}:t)}
export function trimAudioTrack(tracks:AudioTrack[],id:string,duration:number){return tracks.map(t=>t.id===id?{...t,duration:Math.max(.1,duration)}:t)}
