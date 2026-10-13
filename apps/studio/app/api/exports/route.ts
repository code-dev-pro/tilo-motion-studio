import {NextResponse} from "next/server";
import {readdir,stat} from "node:fs/promises";
import {resolve,join} from "node:path";
export const runtime="nodejs";
export async function GET(req:Request){
 const host=req.headers.get("host")||"";
 if(!/^(localhost|127\.0\.0\.1):3333$/.test(host))return NextResponse.json({error:"Local only"},{status:403});
 const root=resolve(process.cwd(),"../../output");
 const exports:{scenario:string;name:string;bytes:number}[]=[];
 for(const scenario of await readdir(root).catch(()=>[])){
  if(!/^[a-z0-9-]+$/.test(scenario))continue;
  for(const name of await readdir(join(root,scenario)).catch(()=>[])){
   if(!/^(landscape|portrait|square)\.mp4$/.test(name))continue;
   const bytes=(await stat(join(root,scenario,name))).size;exports.push({scenario,name,bytes});
  }
 }
 return NextResponse.json({exports});
}
