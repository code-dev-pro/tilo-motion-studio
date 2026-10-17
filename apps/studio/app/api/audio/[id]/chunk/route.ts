import {NextResponse} from "next/server";
import {access,appendFile,mkdir,rename,stat,writeFile,rm} from "node:fs/promises";
import {join,resolve} from "node:path";
export const runtime="nodejs";
const maxSize=30*1024*1024;
const maxChunk=4*1024*1024;
export async function PUT(req:Request,{params}:{params:Promise<{id:string}>}){
 const host=req.headers.get("host")||"",origin=req.headers.get("origin");
 if(!/^(localhost|127\.0\.0\.1):3333$/.test(host)||origin&&new URL(origin).host!==host)return NextResponse.json({error:"Local only"},{status:403});
 const {id}=await params;
 const name=req.headers.get("x-audio-name")||"";
 const index=Number(req.headers.get("x-chunk-index")),total=Number(req.headers.get("x-chunk-total"));
 if(!/^[a-z0-9-]+$/.test(id)||!/^audio-[a-f0-9]{32}\.(mp3|wav|m4a|ogg|webm)$/.test(name)||!Number.isInteger(index)||!Number.isInteger(total)||index<0||total<1||index>=total||total>8)return NextResponse.json({error:"Invalid chunk metadata"},{status:400});
 const dir=join(resolve(process.cwd(),"../../output"),id);
 try{await access(join(dir,"manifest.json"))}catch{return NextResponse.json({error:"Recording not found"},{status:404})}
 const bytes=Buffer.from(await req.arrayBuffer());
 if(bytes.length===0||bytes.length>maxChunk)return NextResponse.json({error:"Invalid audio chunk size"},{status:413});
 const partial=join(dir,name+".upload"),final=join(dir,name);
 try{
  if(index===0){await writeFile(partial,bytes,{flag:"wx"})}
  else{
   const current=await stat(partial);
   if(current.size!==index*maxChunk)return NextResponse.json({error:"Out of order chunk"},{status:409});
   if(current.size+bytes.length>maxSize)return NextResponse.json({error:"Audio exceeds 30 MB"},{status:413});
   await appendFile(partial,bytes);
  }
  if(index===total-1){const info=await stat(partial);if(info.size>maxSize)throw Error("Audio too large");await rename(partial,final);return NextResponse.json({file:name,url:"/api/media/"+id+"/"+name,complete:true})}
  return NextResponse.json({complete:false});
 }catch(e){return NextResponse.json({error:e instanceof Error?e.message:"Chunk upload failed"},{status:409})}
}
