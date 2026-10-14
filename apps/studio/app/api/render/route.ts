import {NextResponse} from "next/server";
import {z} from "zod";
import {cancelExport,exportStatus,runExport} from "./export-controller";
export const runtime="nodejs";
export const dynamic="force-dynamic";
const schema=z.object({scenario:z.enum(["fixture","moon-phases"]).optional(),recording:z.string().regex(/^[a-z0-9-]+$/).optional(),format:z.enum(["landscape","portrait","square"])}).refine(v=>Boolean(v.scenario||v.recording));
function permitted(req:Request){const host=req.headers.get("host")||"",origin=req.headers.get("origin");return /^(localhost|127\.0\.0\.1):3333$/.test(host)&&(!origin||new URL(origin).host===host)}
export async function GET(req:Request){if(!permitted(req))return NextResponse.json({error:"Local only"},{status:403});return NextResponse.json(exportStatus())}
export async function DELETE(req:Request){if(!permitted(req))return NextResponse.json({error:"Local only"},{status:403});if(!cancelExport())return NextResponse.json({error:"No active export"},{status:409});return NextResponse.json({state:"cancelling"})}
export async function POST(req:Request){
 if(!permitted(req))return NextResponse.json({error:"Local only"},{status:403});
 const parsed=schema.safeParse(await req.json().catch(()=>null));if(!parsed.success)return NextResponse.json({error:"Invalid parameters"},{status:400});
 try{const output=await runExport(parsed.data);return NextResponse.json({output})}
 catch(e){const status=typeof e==="object"&&e!==null&&"status" in e?Number(e.status):500;return NextResponse.json({error:e instanceof Error?e.message:"Render failed",cancelled:status===499},{status:status===499?409:status})}
}
