import {spawn} from "node:child_process";
/** Locate the first frame containing the temporary magenta sync marker. */
export async function detectVideoSyncMarker(file:string):Promise<number|null>{
 return new Promise((resolve,reject)=>{
  const args=["-hide_banner","-loglevel","error","-i",file,"-t","30","-vf","fps=30,crop=16:16:0:0,scale=1:1:flags=area,format=rgb24","-f","rawvideo","-"];
  const child=spawn("ffmpeg",args,{stdio:["ignore","pipe","pipe"]});
  let frame=0,found:number|null=null,buffer=Buffer.alloc(0),stderr="";
  child.stdout.on("data",(chunk:Buffer)=>{
   buffer=Buffer.concat([buffer,chunk]);
   while(buffer.length>=3){
    const r=buffer[0],g=buffer[1],b=buffer[2];
    if(found===null&&r>175&&b>175&&g<110)found=frame/30;
    buffer=buffer.subarray(3);frame++;
   }
  });
  child.stderr.on("data",chunk=>{stderr=(stderr+String(chunk)).slice(-1000)});
  child.on("error",reject);
  child.on("close",code=>code===0?resolve(found):reject(Error(stderr||"FFmpeg sync detection failed")));
 });
}
export function alignEventsToVideo<T extends {t:number}>(events:T[],offsetSeconds:number):T[]{
 return events.map(event=>({...event,t:Math.max(0,event.t+offsetSeconds)})).sort((a,b)=>a.t-b.t);
}
