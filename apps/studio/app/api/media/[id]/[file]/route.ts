import {NextResponse} from "next/server";
import {createReadStream} from "node:fs";
import {stat} from "node:fs/promises";
import {resolve,join} from "node:path";
import {Readable} from "node:stream";
export const runtime="nodejs";
export async function GET(req:Request,{params}:{params:Promise<{id:string;file:string}>}){
 const host=req.headers.get("host")||"";if(!/^(localhost|127\.0\.0\.1):3333$/.test(host))return NextResponse.json({error:"Local only"},{status:403});
 const {id,file}=await params;
 if(!/^[a-z0-9-]+$/.test(id)||!["capture.webm","landscape.mp4","portrait.mp4","square.mp4"].includes(file))return NextResponse.json({error:"Invalid media"},{status:400});
 const path=join(resolve(process.cwd(),"../../output"),id,file);
 try{
  const info=await stat(path),range=req.headers.get("range"),type=file.endsWith(".webm")?"video/webm":"video/mp4";
  if(range){
   const m=/^bytes=(\d+)-(\d*)$/.exec(range);
   if(!m)return new Response(null,{status:416});
   const start=Number(m[1]),end=m[2]?Math.min(Number(m[2]),info.size-1):info.size-1;
   if(start>end||start>=info.size)return new Response(null,{status:416,headers:{"Content-Range":`bytes */${info.size}`}});
   return new Response(Readable.toWeb(createReadStream(path,{start,end})) as ReadableStream,{status:206,headers:{"Content-Type":type,"Content-Length":String(end-start+1),"Content-Range":`bytes ${start}-${end}/${info.size}`,"Accept-Ranges":"bytes"}});
  }
  return new Response(Readable.toWeb(createReadStream(path)) as ReadableStream,{headers:{"Content-Type":type,"Content-Length":String(info.size),"Accept-Ranges":"bytes"}});
 }catch{return NextResponse.json({error:"Media not found"},{status:404})}
}
