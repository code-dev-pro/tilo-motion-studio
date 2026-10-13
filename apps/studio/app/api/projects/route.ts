import {NextResponse} from "next/server";
import {z} from "zod";
import {mkdir,readdir,readFile,writeFile,rename} from "node:fs/promises";
import {resolve,join} from "node:path";
export const runtime="nodejs";
const root=resolve(process.cwd(),"../../projects");
const schema=z.object({id:z.string().regex(/^[a-z0-9-]+$/),name:z.string().min(1),scenario:z.enum(["fixture","moon-phases"]),format:z.enum(["landscape","portrait","square"]),background:z.string().regex(/^#[0-9a-fA-F]{6}$/),radius:z.number().min(0).max(50),shadow:z.boolean(),cursor:z.boolean(),autoZoom:z.boolean(),zoom:z.number().min(1).max(2),intro:z.string(),outro:z.string(),clips:z.array(z.object({id:z.string().regex(/^[a-z0-9-]+$/),start:z.number().nonnegative(),duration:z.number().positive(),title:z.string(),transition:z.enum(["cut","fade"])})),camera:z.array(z.object({t:z.number().nonnegative(),x:z.number().min(0).max(1),y:z.number().min(0).max(1),scale:z.number().min(1).max(3)})),audio:z.object({path:z.string(),volume:z.number().min(0).max(1)}),createdAt:z.string()});
function authorized(req:Request){const host=req.headers.get("host")||"",origin=req.headers.get("origin");return /^(localhost|127\.0\.0\.1):3333$/.test(host)&&(!origin||new URL(origin).host===host)}
export async function GET(req:Request){
 if(!authorized(req))return NextResponse.json({error:"Local only"},{status:403});
 await mkdir(root,{recursive:true});const files=(await readdir(root)).filter(f=>/^[a-z0-9-]+\.json$/.test(f));
 const projects=await Promise.all(files.map(async f=>JSON.parse(await readFile(join(root,f),"utf8"))));
 return NextResponse.json({projects});
}
export async function POST(req:Request){
 if(!authorized(req))return NextResponse.json({error:"Local only"},{status:403});
 const parsed=schema.safeParse(await req.json().catch(()=>null));
 if(!parsed.success)return NextResponse.json({error:parsed.error.flatten()},{status:400});
 await mkdir(root,{recursive:true});
 const target=join(root,parsed.data.id+".json"),tmp=target+".tmp";
 await writeFile(tmp,JSON.stringify(parsed.data,null,2));await rename(tmp,target);
 return NextResponse.json({project:parsed.data});
}
