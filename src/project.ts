import {z} from "zod";
import {mkdir,readFile,readdir,writeFile,rename} from "node:fs/promises";
import {resolve,join} from "node:path";
export const keyframeSchema=z.object({t:z.number().nonnegative(),x:z.number().min(0).max(1),y:z.number().min(0).max(1),scale:z.number().min(1).max(3)});
export const clipSchema=z.object({id:z.string().regex(/^[a-z0-9-]+$/),start:z.number().nonnegative(),duration:z.number().positive(),title:z.string().default(""),transition:z.enum(["cut","fade"]).default("fade")});
export const projectSchema=z.object({
 id:z.string().regex(/^[a-z0-9-]+$/),name:z.string().min(1),scenario:z.enum(["fixture","moon-phases"]),format:z.enum(["landscape","portrait","square"]).default("landscape"),
 background:z.string().regex(/^#[0-9a-fA-F]{6}$/).default("#101827"),radius:z.number().min(0).max(50).default(22),shadow:z.boolean().default(true),
 cursor:z.boolean().default(true),autoZoom:z.boolean().default(true),zoom:z.number().min(1).max(2).default(1),
 intro:z.string().default(""),outro:z.string().default(""),clips:z.array(clipSchema).default([]),camera:z.array(keyframeSchema).default([]),
 audio:z.object({path:z.string().default(""),volume:z.number().min(0).max(1).default(.65)}).default({}),
 createdAt:z.string().default(()=>new Date().toISOString())
});
export type StudioProject=z.infer<typeof projectSchema>;
const root=resolve("projects");
export async function listProjects(){await mkdir(root,{recursive:true});const files=(await readdir(root)).filter(x=>/^[a-z0-9-]+\.json$/.test(x));return Promise.all(files.map(async f=>projectSchema.parse(JSON.parse(await readFile(join(root,f),"utf8")))))}
export async function getProject(id:string){if(!/^[a-z0-9-]+$/.test(id))throw Error("Invalid project id");return projectSchema.parse(JSON.parse(await readFile(join(root,id+".json"),"utf8")))}
export async function saveProject(input:unknown){const p=projectSchema.parse(input);await mkdir(root,{recursive:true});const target=join(root,p.id+".json"),tmp=target+".tmp";await writeFile(tmp,JSON.stringify(p,null,2));await rename(tmp,target);return p}
export function defaultProject(id:string):StudioProject{return projectSchema.parse({id,name:"Nouvelle vidéo",scenario:"fixture"})}
