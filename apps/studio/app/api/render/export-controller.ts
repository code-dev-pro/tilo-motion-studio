import {spawn,type ChildProcess} from "node:child_process";
import {resolve} from "node:path";
export type ExportState="idle"|"running"|"cancelling";
let child:ChildProcess|null=null;
let state:ExportState="idle";
let cancelled=false;
let currentId:string|null=null;
export function exportStatus(){return {state,id:currentId}}
export function cancelExport(){
 if(!child||state==="idle")return false;
 cancelled=true;state="cancelling";
 try{if(process.platform!=="win32"&&child.pid)process.kill(-child.pid,"SIGTERM");else child.kill("SIGTERM")}catch{child.kill("SIGTERM")}
 return true;
}
export async function runExport(args:{scenario?:string;recording?:string;format:string}){
 if(state!=="idle")throw Object.assign(Error("An export is already running"),{status:409});
 state="running";cancelled=false;currentId=args.recording??args.scenario??null;
 const root=resolve(process.cwd(),"../..");
 try{
  return await new Promise<string>((ok,fail)=>{
   const id=args.recording??args.scenario??"fixture";
   const worker=spawn("pnpm",["render",...(args.recording?["--recording",args.recording]:["--scenario",args.scenario??"fixture"]),"--format",args.format],{cwd:root,env:process.env,stdio:["ignore","pipe","pipe"],detached:process.platform!=="win32"});
   child=worker;
   let stderr="";
   worker.stderr?.on("data",(chunk:Buffer)=>{stderr=(stderr+chunk.toString()).slice(-3000)});
   worker.once("error",e=>fail(e));
   worker.once("close",code=>cancelled?fail(Object.assign(Error("Export cancelled"),{status:499})):code===0?ok(`output/${id}/${args.format}.mp4`):fail(Error(stderr||`Render exited with code ${code}`)));
  });
 }finally{child=null;state="idle";currentId=null;cancelled=false}
}
