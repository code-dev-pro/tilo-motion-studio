import {createServer,type Server} from "node:http";
import {createReadStream} from "node:fs";
import {stat} from "node:fs/promises";
import {resolve,relative,sep} from "node:path";
export async function startMediaServer(rootDir=resolve("output")):Promise<{url:string;close:()=>Promise<void>}>{
 const root=resolve(rootDir);
 const server:Server=createServer(async(req,res)=>{
  try{
   const url=new URL(req.url||"/","http://localhost");
   const decoded=decodeURIComponent(url.pathname);
   const file=resolve(root,"."+decoded);
   const rel=relative(root,file);
   if(rel.startsWith(".."+sep)||rel===".."||/^[\\/]/.test(rel))throw Error("Invalid path");
   if(!/\.(webm|mp4|wav|mp3|png|jpg|jpeg)$/i.test(file)){res.writeHead(403);res.end();return}
   const info=await stat(file);
   const mime=file.endsWith(".webm")?"video/webm":file.endsWith(".mp4")?"video/mp4":file.endsWith(".mp3")?"audio/mpeg":file.endsWith(".wav")?"audio/wav":"image/png";
   const range=req.headers.range;
   if(range){
    const match=/^bytes=(\d+)-(\d*)$/.exec(range);
    if(!match){res.writeHead(416);res.end();return}
    const start=Number(match[1]),end=match[2]?Math.min(Number(match[2]),info.size-1):info.size-1;
    if(start> end||start>=info.size){res.writeHead(416,{"Content-Range":`bytes */${info.size}`});res.end();return}
    res.writeHead(206,{"Content-Type":mime,"Accept-Ranges":"bytes","Content-Range":`bytes ${start}-${end}/${info.size}`,"Content-Length":end-start+1});
    createReadStream(file,{start,end}).pipe(res);return;
   }
   res.writeHead(200,{"Content-Type":mime,"Content-Length":info.size,"Accept-Ranges":"bytes"});
   createReadStream(file).pipe(res);
  }catch{res.writeHead(404);res.end()}
 });
 await new Promise<void>(ok=>server.listen(0,"127.0.0.1",ok));
 const address=server.address();if(!address||typeof address==="string")throw Error("Media server failed");
 return {url:`http://127.0.0.1:${address.port}`,close:()=>new Promise<void>((ok,bad)=>server.close(e=>e?bad(e):ok()))};
}
