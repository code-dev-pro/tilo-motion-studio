import {NextResponse} from "next/server";
import {cp,mkdir,readdir,readFile,rename,rm,stat,writeFile} from "node:fs/promises";
import {resolve,join} from "node:path";
import {randomUUID} from "node:crypto";
import {validProjectId} from "../../../../../../../src/project-management";
export const runtime="nodejs";

const root=resolve(process.cwd(),"../../output");
function permitted(req:Request){const host=req.headers.get("host")||"",origin=req.headers.get("origin");return /^(localhost|127\.0\.0\.1):3333$/.test(host)&&(!origin||new URL(origin).host===host)}
const valid=validProjectId;
async function exists(id:string){try{return (await stat(join(root,id))).isDirectory()}catch{return false}}
async function sourceReady(id:string){try{const manifest=JSON.parse(await readFile(join(root,id,"manifest.json"),"utf8"));return typeof manifest==="object"&&manifest!==null}catch{return false}}
export async function POST(req:Request,{params}:{params:Promise<{id:string}>}){
 if(!permitted(req))return NextResponse.json({error:"Local only"},{status:403});
 const {id}=await params;if(!valid(id))return NextResponse.json({error:"Invalid project id"},{status:400});
 if(!await sourceReady(id))return NextResponse.json({error:"Project not found"},{status:404});
 const data=await req.json().catch(()=>null);const destination=data?.id;
 if(typeof destination!=="string"||!valid(destination)||destination===id)return NextResponse.json({error:"Invalid destination id"},{status:400});
 if(await exists(destination))return NextResponse.json({error:"Destination already exists"},{status:409});
 const temp=".copy-"+randomUUID();
 await mkdir(root,{recursive:true});
 const source=join(root,id),temporary=join(root,temp),target=join(root,destination);
 try{
  await cp(source,temporary,{recursive:true,force:false,errorOnExist:true,filter:sourcePath=>!sourcePath.endsWith("/.stop")&&!sourcePath.endsWith("/.recording")});
  const manifestPath=join(temporary,"manifest.json");
  const manifest=JSON.parse(await readFile(manifestPath,"utf8"));
  manifest.scenario=destination;
  await writeFile(manifestPath,JSON.stringify(manifest,null,2));
  const scenarioPath=join(temporary,"scenario.json");
  try{const scenario=JSON.parse(await readFile(scenarioPath,"utf8"));scenario.id=destination;await writeFile(scenarioPath,JSON.stringify(scenario,null,2))}catch{}
  if(await exists(destination))return NextResponse.json({error:"Destination already exists"},{status:409});
  await rename(temporary,target);
  return NextResponse.json({id:destination},{status:201});
 }catch(e){return NextResponse.json({error:"Could not duplicate project",detail:String(e)},{status:500})}
 finally{await rm(temporary,{recursive:true,force:true}).catch(()=>{})}
}
export async function DELETE(req:Request,{params}:{params:Promise<{id:string}>}){
 if(!permitted(req))return NextResponse.json({error:"Local only"},{status:403});
 const {id}=await params;if(!valid(id))return NextResponse.json({error:"Invalid project id"},{status:400});
 if(!await sourceReady(id))return NextResponse.json({error:"Project not found"},{status:404});
 const confirmation=req.headers.get("x-confirm-project-delete");
 if(confirmation!==id)return NextResponse.json({error:"Deletion confirmation required"},{status:400});
 try{await rm(join(root,id),{recursive:true,force:false});return NextResponse.json({deleted:id})}
 catch{return NextResponse.json({error:"Could not delete project"},{status:500})}
}
