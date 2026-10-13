import {NextResponse} from "next/server";
import {readFile,writeFile} from "node:fs/promises";
import {resolve,join} from "node:path";
import {z} from "zod";
export const runtime="nodejs";
const sceneSchema=z.object({fit:z.enum(["contain","cover"]),scale:z.number().min(.5).max(1.5),offsetX:z.number().min(-1).max(1),offsetY:z.number().min(-1).max(1)});
const settingsSchema=z.object({
 scene:sceneSchema.default({fit:"contain",scale:1,offsetX:0,offsetY:0}),
 intro:z.string().max(160),outro:z.string().max(160),zoom:z.number().min(1).max(1.7),autoZoom:z.boolean(),cursor:z.boolean(),
 background:z.string().regex(/^#[0-9a-fA-F]{6}$/),radius:z.number().int().min(0).max(48),shadow:z.boolean(),
 camera:z.array(z.object({t:z.number().nonnegative(),x:z.number().min(0).max(1),y:z.number().min(0).max(1),scale:z.number().min(1).max(2)}))
});
const defaults={scene:{fit:"contain",scale:1,offsetX:0,offsetY:0},intro:"Découvrez Tilo",outro:"Apprendre autrement",zoom:1.06,autoZoom:true,cursor:true,background:"#101827",radius:24,shadow:true,camera:[]};
function permitted(req:Request){const host=req.headers.get("host")||"",origin=req.headers.get("origin");return /^(localhost|127\.0\.0\.1):3333$/.test(host)&&(!origin||new URL(origin).host===host)}
export async function GET(req:Request,{params}:{params:Promise<{id:string}>}){
 if(!permitted(req))return NextResponse.json({error:"Local only"},{status:403});
 const {id}=await params;if(!/^[a-z0-9-]+$/.test(id))return NextResponse.json({error:"Invalid id"},{status:400});
 const dir=join(resolve(process.cwd(),"../../output"),id);
 try{
  const [manifest,events,scenario,settings]=await Promise.all([
   readFile(join(dir,"manifest.json"),"utf8").then(JSON.parse),
   readFile(join(dir,"events.json"),"utf8").then(JSON.parse).catch(()=>[]),
   readFile(join(dir,"scenario.json"),"utf8").then(JSON.parse).catch(()=>null),
   readFile(join(dir,"editor.json"),"utf8").then(JSON.parse).catch(()=>defaults)
  ]);
  return NextResponse.json({manifest,events,scenario,settings:settingsSchema.parse(settings),video:`/api/media/${id}/capture.webm`});
 }catch{return NextResponse.json({error:"Recording not found"},{status:404})}
}
export async function PUT(req:Request,{params}:{params:Promise<{id:string}>}){
 if(!permitted(req))return NextResponse.json({error:"Local only"},{status:403});
 const {id}=await params;if(!/^[a-z0-9-]+$/.test(id))return NextResponse.json({error:"Invalid id"},{status:400});
 const parsed=settingsSchema.safeParse(await req.json().catch(()=>null));
 if(!parsed.success)return NextResponse.json({error:parsed.error.flatten()},{status:400});
 const dir=join(resolve(process.cwd(),"../../output"),id);
 try{await readFile(join(dir,"manifest.json"));await writeFile(join(dir,"editor.json"),JSON.stringify(parsed.data,null,2));return NextResponse.json({settings:parsed.data})}
 catch{return NextResponse.json({error:"Recording not found"},{status:404})}
}
