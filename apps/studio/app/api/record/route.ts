import {NextResponse} from "next/server";
import {spawn,type ChildProcess} from "node:child_process";
import {resolve} from "node:path";
import {recordingOptions} from "../../../../../src/recording";
export const runtime="nodejs";
let child:ChildProcess|null=null;
let state:"idle"|"recording"|"stopping"|"ready"|"error"="idle";
let id="",error="";
function local(req:Request){const host=req.headers.get("host")||"",origin=req.headers.get("origin");return /^(localhost|127\.0\.0\.1):3333$/.test(host)&&(!origin||new URL(origin).host===host)}
export async function GET(req:Request){if(!local(req))return NextResponse.json({error:"Local only"},{status:403});return NextResponse.json({state,id,error})}
export async function POST(req:Request){
 if(!local(req))return NextResponse.json({error:"Local only"},{status:403});
 const data=await req.json().catch(()=>null);
 if(data?.action==="stop"){
  if(!child||state!=="recording")return NextResponse.json({error:"No active recording"},{status:409});
  state="stopping";child.kill("SIGINT");return NextResponse.json({state,id});
 }
 if(data?.action!=="start")return NextResponse.json({error:"Invalid action"},{status:400});
 if(child)return NextResponse.json({error:"Recorder already active"},{status:409});
 const parsed=recordingOptions.safeParse(data.options);
 if(!parsed.success)return NextResponse.json({error:parsed.error.flatten()},{status:400});
 id=parsed.data.id;error="";state="recording";
 const root=resolve(process.cwd(),"../..");
 const worker=spawn("pnpm",["exec","tsx","src/manual-recorder.ts"],{cwd:root,env:{...process.env,TILO_RECORDING_OPTIONS:JSON.stringify(parsed.data)},stdio:["ignore","pipe","pipe"]});
 child=worker;
 let stderr="",ready=false;
 worker.stdout?.on("data",(buf:Buffer)=>{const message=buf.toString();if(message.includes("RECORDING_READY"))ready=true});
 worker.stderr?.on("data",(buf:Buffer)=>{stderr=(stderr+buf.toString()).slice(-2000)});
 worker.on("error",e=>{state="error";error=e.message;child=null});
 worker.on("exit",code=>{if(child!==worker)return;child=null;state=code===0&&ready?"ready":"error";if(state==="error")error=stderr||"Recorder exited unexpectedly"});
 return NextResponse.json({state,id});
}
