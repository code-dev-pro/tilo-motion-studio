import {NextResponse} from "next/server";
import {mkdir,writeFile,access} from "node:fs/promises";
import {join,resolve} from "node:path";
import {randomUUID} from "node:crypto";
export const runtime="nodejs";
const allowed=new Map([["audio/mpeg","mp3"],["audio/wav","wav"],["audio/x-wav","wav"],["audio/mp4","m4a"],["audio/ogg","ogg"],["audio/webm","webm"]]);
export async function POST(req:Request,{params}:{params:Promise<{id:string}>}){
 const host=req.headers.get("host")||"";
 if(!/^(localhost|127\.0\.0\.1):3333$/.test(host))return NextResponse.json({error:"Local only"},{status:403});
 const {id}=await params;
 if(!/^[a-z0-9-]+$/.test(id))return NextResponse.json({error:"Invalid recording"},{status:400});
 const form=await req.formData().catch(()=>null),file=form?.get("file");
 if(!(file instanceof File))return NextResponse.json({error:"Missing audio"},{status:400});
 const ext=allowed.get(file.type);
 if(!ext||file.size>30*1024*1024||file.size===0)return NextResponse.json({error:"Unsupported audio or file too large (30 MB max)"},{status:400});
 const dir=join(resolve(process.cwd(),"../../output"),id);
 try{await access(join(dir,"manifest.json"))}catch{return NextResponse.json({error:"Recording not found"},{status:404})}
 const name="audio-"+randomUUID().replaceAll("-","")+"."+ext;
 await mkdir(dir,{recursive:true});
 await writeFile(join(dir,name),Buffer.from(await file.arrayBuffer()));
 return NextResponse.json({file:name,url:"/api/media/"+id+"/"+name,name:file.name});
}
