import {copyFile,mkdir,readFile,readdir,rename,stat,writeFile} from "node:fs/promises";
import {join} from "node:path";
export async function recoverRecordedVideo(dir:string,destination=join(dir,"capture.webm")):Promise<string>{
 const entries=await readdir(dir,{withFileTypes:true});
 const candidates=await Promise.all(entries.filter(e=>e.isFile()&&e.name.endsWith(".webm")&&e.name!=="capture.webm").map(async e=>({path:join(dir,e.name),info:await stat(join(dir,e.name))})));
 const valid=candidates.filter(e=>e.info.size>0).sort((a,b)=>b.info.mtimeMs-a.info.mtimeMs);
 if(!valid.length)throw Error("No finalized WebM available for recovery");
 await copyFile(valid[0].path,destination);
 return destination;
}
export async function writeJsonAtomic(path:string,value:unknown){
 const temp=path+".tmp";
 await writeFile(temp,JSON.stringify(value,null,2));
 await rename(temp,path);
}
export async function verifyRecordingVideo(path:string){
 const info=await stat(path);if(info.size<100)throw Error("Recorded video is missing or empty");
 return info.size;
}
