import {NextResponse} from "next/server";
import {spawn} from "node:child_process";
import {resolve} from "node:path";
import {z} from "zod";
export const runtime="nodejs";
export const dynamic="force-dynamic";
const schema=z.object({scenario:z.enum(["fixture","moon-phases"]).optional(),recording:z.string().regex(/^[a-z0-9-]+$/).optional(),format:z.enum(["landscape","portrait","square"])}).refine(v=>Boolean(v.scenario||v.recording));
let running=false;
export async function POST(request:Request){
 const host=request.headers.get("host")||"";
 const origin=request.headers.get("origin");
 if(!/^(localhost|127\.0\.0\.1):3333$/.test(host))return NextResponse.json({error:"Local host required"},{status:403});
 if(origin&&new URL(origin).host!==host)return NextResponse.json({error:"Invalid origin"},{status:403});
 const parsed=schema.safeParse(await request.json().catch(()=>null));
 if(!parsed.success)return NextResponse.json({error:"Invalid parameters"},{status:400});
 if(running)return NextResponse.json({error:"A render is already running"},{status:409});
 running=true;
 try{
  const {scenario,recording,format}=parsed.data;
  const root=resolve(process.cwd(),"../..");
  const output=await new Promise<string>((ok,fail)=>{
   const child=spawn("pnpm",["render",...(recording?["--recording",recording]:["--scenario",scenario||"fixture"]),"--format",format],{cwd:root,env:process.env,stdio:["ignore","pipe","pipe"]});
   let stderr="";
   child.stderr.on("data",(chunk:Buffer)=>{stderr=(stderr+chunk.toString()).slice(-3000)});
   child.on("error",fail);
   child.on("close",code=>code===0?ok(`output/${recording||scenario}/${format}.mp4`):fail(Error(stderr||`Exit code ${code}`)));
  });
  return NextResponse.json({output});
 }catch(e){return NextResponse.json({error:e instanceof Error?e.message:"Render failed"},{status:500})}
 finally{running=false}
}
