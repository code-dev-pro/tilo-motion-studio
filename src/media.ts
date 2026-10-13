import {createServer} from "node:http";
import {createReadStream} from "node:fs";
import {stat} from "node:fs/promises";
import {resolve,relative,sep} from "node:path";

export async function startMediaServer(rootDirectory:string):Promise<{baseUrl:string;close:()=>Promise<void>}>{
 const root=resolve(rootDirectory);
 const server=createServer(async(req,res)=>{
  try{
   const pathname=new URL(req.url||"/","http://localhost").pathname;
   const filename=resolve(root,"."+decodeURIComponent(pathname));
   const relativePath=relative(root,filename);
   if(relativePath===".."||relativePath.startsWith(".."+sep)||relativePath.startsWith("/")){res.writeHead(403);res.end();return}
   if(!/\.(webm|mp4|mp3|wav)$/i.test(filename)){res.writeHead(403);res.end();return}
   const file=await stat(filename);
   if(!file.isFile())throw Error("Not a file");
   const contentType=filename.endsWith(".webm")?"video/webm":filename.endsWith(".mp4")?"video/mp4":filename.endsWith(".mp3")?"audio/mpeg":"audio/wav";
   const range=req.headers.range;
   if(range){
    const m=/^bytes=(\d+)-(\d*)$/.exec(range);
    if(!m){res.writeHead(416);res.end();return}
    const start=Number(m[1]),end=m[2]?Math.min(Number(m[2]),file.size-1):file.size-1;
    if(start>end||start>=file.size){res.writeHead(416,{"Content-Range":`bytes */${file.size}`});res.end();return}
    res.writeHead(206,{"Content-Type":contentType,"Content-Length":end-start+1,"Content-Range":`bytes ${start}-${end}/${file.size}`,"Accept-Ranges":"bytes"});
    createReadStream(filename,{start,end}).pipe(res);
    return;
   }
   res.writeHead(200,{"Content-Type":contentType,"Content-Length":file.size,"Accept-Ranges":"bytes"});
   createReadStream(filename).pipe(res);
  }catch{res.writeHead(404);res.end()}
 });
 await new Promise<void>((ok,fail)=>{server.once("error",fail);server.listen(0,"127.0.0.1",ok)});
 const address=server.address();
 if(!address||typeof address==="string")throw Error("Media server has no port");
 return {baseUrl:`http://127.0.0.1:${address.port}`,close:()=>new Promise<void>((ok,fail)=>server.close(err=>err?fail(err):ok()))};
}
