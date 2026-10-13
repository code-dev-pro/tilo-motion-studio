import {NextResponse} from "next/server";
import {readFile} from "node:fs/promises";
import {resolve,join} from "node:path";
export const runtime="nodejs";
export async function GET(req:Request,{params}:{params:Promise<{scenario:string;file:string}>}){
 if(!/^(localhost|127\.0\.0\.1):3333$/.test(req.headers.get("host")||""))return NextResponse.json({error:"Local only"},{status:403});
 const {scenario,file}=await params;
 if(!/^[a-z0-9-]+$/.test(scenario)||!/^(landscape|portrait|square)\.mp4$/.test(file))return NextResponse.json({error:"Invalid path"},{status:400});
 try{const bytes=await readFile(join(resolve(process.cwd(),"../../output"),scenario,file));return new Response(new Uint8Array(bytes),{headers:{"Content-Type":"video/mp4","Content-Disposition":`inline; filename="${file}"`,"Cache-Control":"no-store"}})}
 catch{return NextResponse.json({error:"Not found"},{status:404})}
}
