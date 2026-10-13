import {NextResponse} from "next/server";
import {readdir,readFile} from "node:fs/promises";
import {resolve,join} from "node:path";
export const runtime="nodejs";
export async function GET(req:Request){
 if(!/^(localhost|127\.0\.0\.1):3333$/.test(req.headers.get("host")||""))return NextResponse.json({error:"Local only"},{status:403});
 const root=resolve(process.cwd(),"../../output");
 const folders=(await readdir(root,{withFileTypes:true}).catch(()=>[])).filter(d=>d.isDirectory()&&/^[a-z0-9-]+$/.test(d.name));
 const recordings=await Promise.all(folders.map(async d=>{
  try{const manifest=JSON.parse(await readFile(join(root,d.name,"manifest.json"),"utf8"));return {id:d.name,duration:manifest.duration||0,url:manifest.url||"",viewport:manifest.viewport}}
  catch{return null}
 }));
 return NextResponse.json({recordings:recordings.filter(Boolean)});
}
