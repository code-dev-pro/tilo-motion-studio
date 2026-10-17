import {spawn} from "node:child_process";
import {execFile} from "node:child_process";
import {promisify} from "node:util";
const execFileAsync=promisify(execFile);
export function markerEndFromRGB(rgb:Buffer,fps=30):number|null{
 let first=-1,last=-1,run=0;
 for(let i=0;i+2<rgb.length;i+=3){
  const r=rgb[i],g=rgb[i+1],b=rgb[i+2],hit=r>170&&b>170&&g<110;
  if(hit){if(first<0)first=i/3;last=i/3;run++}
  else if(first>=0)break;
 }
 return run>=3?(last+1)/fps:null;
}
export async function detectMarkerEnd(path:string):Promise<number|null>{
 return new Promise((resolve,reject)=>{
  const child=spawn("ffmpeg",["-hide_banner","-loglevel","error","-i",path,"-t","30","-vf","fps=30,crop=24:24:0:0,scale=1:1:flags=area,format=rgb24","-f","rawvideo","-"],{stdio:["ignore","pipe","pipe"]});
  const chunks:Buffer[]=[];let stderr="";let size=0;
  child.stdout.on("data",(b:Buffer)=>{size+=b.length;if(size<=3000)chunks.push(b)});
  child.stderr.on("data",(b:Buffer)=>{stderr=(stderr+b.toString()).slice(-1200)});
  child.on("error",reject);
  child.on("close",code=>code===0?resolve(markerEndFromRGB(Buffer.concat(chunks))):reject(Error(stderr||"ffmpeg marker detection failed")));
 });
}
export async function videoDuration(path:string):Promise<number>{
 const {stdout}=await execFileAsync("ffprobe",["-v","error","-show_entries","format=duration","-of","default=noprint_wrappers=1:nokey=1",path]);
 const value=Number(stdout.trim());
 if(!Number.isFinite(value)||value<=0)throw Error("Invalid WebM duration");
 return value;
}
export function alignEvents<T extends {t:number}>(events:T[],offset:number):T[]{
 return events.map(e=>({...e,t:Math.max(0,e.t+offset)})).sort((a,b)=>a.t-b.t);
}
