import {chromium} from "playwright";
import {spawn,execFile,type ChildProcess} from "node:child_process";
import {promisify} from "node:util";
import {copyFile,mkdir,readFile,rm,writeFile} from "node:fs/promises";

import {join,resolve} from "node:path";
import {randomUUID} from "node:crypto";
import {setTimeout as sleep} from "node:timers/promises";
import {defaultEditorSettings} from "./editor";
const execFileAsync=promisify(execFile);
const root=resolve(".");
const output=join(root,"output");
const base="http://127.0.0.1:3333";
const id="audit-"+randomUUID().slice(0,8);
const duplicate=id+"-copy";
const dirs=[join(output,id),join(output,duplicate)];
function assert(condition:unknown,message:string):asserts condition{if(!condition)throw Error(message)}
let server:ChildProcess|undefined;
async function waitForServer(){
 for(let i=0;i<90;i++){if(server?.exitCode!==null&&server?.exitCode!==undefined)throw Error("Studio server exited");
  try{const r=await fetch(base+"/api/recordings");if(r.ok)return}catch{}
  await sleep(500)}
 throw Error("Studio did not start within 45 seconds");
}
async function main(){
 await mkdir(dirs[0],{recursive:true});
 const manifest={scenario:id,duration:3,viewport:{width:1600,height:900},source:"capture.webm",events:"events.json",url:"http://localhost:3000"};
 await Promise.all([
  writeFile(join(dirs[0],"manifest.json"),JSON.stringify(manifest)),
  writeFile(join(dirs[0],"events.json"),JSON.stringify([{t:1,type:"click",x:200,y:100}])),
  writeFile(join(dirs[0],"editor.json"),JSON.stringify(defaultEditorSettings())),
  writeFile(join(dirs[0],"scenario.json"),JSON.stringify({id,title:"Audit fixture",viewport:manifest.viewport,actions:[{type:"wait",ms:0}],video:{duration:3,fps:30,intro:"Intro",outro:"Outro",zoom:1}})),
  writeFile(join(dirs[0],"fixture-marker.txt"),"test fixture")
 ]);
 const captureBrowser=await chromium.launch({headless:true});
 try{const context=await captureBrowser.newContext({viewport:{width:640,height:360},recordVideo:{dir:dirs[0],size:{width:640,height:360}}});const page=await context.newPage();await page.setContent("<html><body style=\"background:#222;color:white\"><h1>Audit video</h1></body></html>");await sleep(3000);const video=page.video();await context.close();assert(video,"Fixture recording did not start");await copyFile(await video.path(),join(dirs[0],"capture.webm"))}finally{await captureBrowser.close()}
 server=spawn("pnpm",["--filter","@tilo/studio","start"],{cwd:root,stdio:"pipe",env:{...process.env,NODE_ENV:"production"},detached:process.platform!=="win32"});
 let stderr="";server.stderr?.on("data",chunk=>{stderr=(stderr+chunk.toString()).slice(-2000)});
 await waitForServer();
 const get=async(path:string)=>fetch(base+path);
 const idleExport=await get("/api/render");assert(idleExport.ok,"Export status endpoint unavailable");
 const idleCancel=await fetch(base+"/api/render",{method:"DELETE"});assert(idleCancel.status===409,"Cancelling with no export must return 409");
 const list=await (await get("/api/recordings")).json() as {recordings:{id:string}[]};
 assert(list.recordings.some(r=>r.id===id),"Fixture missing from project library");
 const detail=await get("/api/recordings/"+id);assert(detail.ok,"Project detail not readable");
 const missing=await fetch(base+"/api/recordings/"+id+"/manage",{method:"DELETE"});
 assert(missing.status===400,"Delete must reject missing confirmation");
 const collision=await fetch(base+"/api/recordings/"+id+"/manage",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({id})});
 assert(collision.status===400,"Duplicate must reject same name");
 const copy=await fetch(base+"/api/recordings/"+id+"/manage",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({id:duplicate})});
 assert(copy.status===201,"Project duplicate failed: "+await copy.text());
 const copied=JSON.parse(await readFile(join(dirs[1],"manifest.json"),"utf8")) as {scenario:string};
 assert(copied.scenario===duplicate,"Duplicated manifest identifier not updated");
 const editor=defaultEditorSettings();
 editor.animationTracks=[
  {id:"property-x",property:"x",keyframes:[{t:0,value:0,easing:"linear"},{t:2,value:120,easing:"bezier",bezier:{x1:.2,y1:.1,x2:.8,y2:.9}}]},
  {id:"property-y",property:"y",keyframes:[{t:0,value:0,easing:"linear"},{t:2,value:80,easing:"ease-in-out"}]}
 ];
 editor.spatialHandles=[{t:0,inX:0,inY:0,outX:25,outY:40}];
 const saved=await fetch(base+"/api/recordings/"+id,{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify(editor)});
 assert(saved.ok,"Animated editor settings could not be saved: "+await saved.text());
 const reloaded=await (await get("/api/recordings/"+id)).json() as {settings:typeof editor};
 assert(JSON.stringify(reloaded.settings.animationTracks)===JSON.stringify(editor.animationTracks),"Bézier keyframes changed after reload");
 assert(JSON.stringify(reloaded.settings.spatialHandles)===JSON.stringify(editor.spatialHandles),"Spatial handles changed after reload");
 console.log("E2E persistence: keyframes and spatial tangents — PASS");
 const browser=await chromium.launch({headless:true});
 try{
  const page=await browser.newPage({viewport:{width:1440,height:900}});
  const errors:string[]=[];page.on("pageerror",e=>errors.push(e.message));
  await page.goto(base,{waitUntil:"domcontentloaded"});
  await page.locator(".recording-row .recording-item").filter({hasText:id}).first().click();
  await page.locator(".timeline .ruler").waitFor();
  const toolbar=page.locator(".timeline-head");
  const toolbarBounds=await toolbar.boundingBox();
  assert(toolbarBounds,"Timeline toolbar is not visible");
  const toolbarButtons=toolbar.locator("button");
  for(let i=0;i<await toolbarButtons.count();i++){
   const b=await toolbarButtons.nth(i).boundingBox();
   if(b&&b.x>=toolbarBounds.x&&b.x<toolbarBounds.x+toolbarBounds.width)
    assert(b.y>=toolbarBounds.y-1&&b.y+b.height<=toolbarBounds.y+toolbarBounds.height+1,"Timeline toolbar button overflows vertically");
  }
  const ruler=page.locator(".timeline .ruler"),bounds=await ruler.boundingBox();
  assert(bounds,"Ruler is not visible");
  await page.mouse.move(bounds.x+bounds.width*.25,bounds.y+bounds.height/2);
  await page.mouse.down();await page.mouse.move(bounds.x+bounds.width*.5,bounds.y+bounds.height/2,{steps:6});await page.mouse.up();
  const transport=await page.locator(".transport .muted").innerText();
  assert(/\/ 3\.00 s/.test(transport),"Transport duration incorrect: "+transport);
  const scrubTime=Number(transport.split(" / ")[0]);assert(scrubTime>0.5&&scrubTime<3,"Ruler drag did not scrub: "+transport);
  const playhead=page.getByRole("button",{name:"Déplacer la tête de lecture"});
  assert(await playhead.isVisible(),"Draggable playhead missing");
  const clip=page.locator(".video-timeline-clip").first();await clip.waitFor();
  const initialWidth=(await clip.boundingBox())?.width??0;assert(initialWidth>0,"Video clip has no width");
  const grip=clip.locator(".video-trim-handle.right");const gripBox=await grip.boundingBox();assert(gripBox,"Right trim handle not visible");
  await page.mouse.move(gripBox.x+gripBox.width/2,gripBox.y+gripBox.height/2);
  await page.mouse.down();await page.mouse.move(gripBox.x+gripBox.width/2-60,gripBox.y+gripBox.height/2,{steps:8});await page.mouse.up();
  const trimmedWidth=(await clip.boundingBox())?.width??0;
  assert(trimmedWidth<initialWidth,"Right trim did not shorten video clip");
  assert((await page.locator(".ruler").innerText()).includes("3s"),"Trimming changed ruler scale");
  if(errors.length)console.warn("Studio browser warnings:",errors.join("; "));
  console.log("E2E UI: project load, ruler scrub, playhead visible — PASS");
 }finally{await browser.close()}
 if(process.env.TILO_AUDIT_AUDIO==="1"){
  const fileA=join(dirs[0],"audio-audit-ambience.wav"),fileB=join(dirs[0],"audio-audit-voice.wav");
  await execFileAsync("ffmpeg",["-y","-f","lavfi","-i","sine=frequency=220:duration=3","-ar","44100",fileA],{timeout:30000});
  await execFileAsync("ffmpeg",["-y","-f","lavfi","-i","sine=frequency=880:duration=1","-ar","44100",fileB],{timeout:30000});
  const settings=JSON.parse(await readFile(join(dirs[0],"editor.json"),"utf8")) as ReturnType<typeof defaultEditorSettings>;
  settings.audioTracks=[
   {id:"audit-ambience",file:"audio-audit-ambience.wav",kind:"ambience",name:"Ambience",start:0,trimStart:0,duration:3,volume:.45,muted:false,solo:false,fadeIn:.1,fadeOut:.1,loop:false},
   {id:"audit-voice",file:"audio-audit-voice.wav",kind:"voiceover",name:"Voice",start:1,trimStart:0,duration:1,volume:.8,muted:false,solo:false,fadeIn:.05,fadeOut:.05,loop:false}
  ];
  await writeFile(join(dirs[0],"editor.json"),JSON.stringify(settings));
 }
 const renderFormat=process.env.TILO_AUDIT_RENDER;
 if(renderFormat){
  if(!["landscape","portrait","square"].includes(renderFormat))throw Error("Invalid TILO_AUDIT_RENDER format");
  await execFileAsync("pnpm",["render","--recording",id,"--format",renderFormat],{cwd:root,timeout:240000,maxBuffer:2_000_000});
  const file=join(dirs[0],renderFormat+".mp4");
  const {stdout}=await execFileAsync("ffprobe",["-v","error","-show_entries","format=duration:stream=codec_type,codec_name,width,height","-of","json",file],{timeout:30000});
  const probe=JSON.parse(stdout) as {format?:{duration?:string};streams?:{codec_type:string;codec_name?:string;width?:number;height?:number}[]};
  const expected=renderFormat==="landscape"?[1920,1080]:renderFormat==="portrait"?[1080,1920]:[1080,1080];
  const video=probe.streams?.find(stream=>stream.codec_type==="video");
  assert(video?.width===expected[0]&&video?.height===expected[1],"MP4 export dimensions invalid");
  assert(video.codec_name==="h264","MP4 video codec must be H.264");
  if(process.env.TILO_AUDIT_AUDIO==="1"){const audio=probe.streams?.find(stream=>stream.codec_type==="audio");assert(audio?.codec_name==="aac","Expected AAC audio stream in rendered MP4");const {stderr:audioStats}=await execFileAsync("ffmpeg",["-i",file,"-vn","-af","volumedetect","-f","null","-"],{timeout:30000});const level=audioStats.match(/mean_volume:\s*(-?[\d.]+) dB/);console.log("E2E audio level:",level?.[1]??"not detected","dB");assert(level,"FFmpeg did not report mean_volume; inspect audio diagnostics: "+audioStats.slice(-1200));assert(Number(level[1])>-70,"Rendered audio is silent: "+level[1]+" dB")}
  const outputDuration=Number(probe.format?.duration);
  assert(Number.isFinite(outputDuration)&&Math.abs(outputDuration-3)<.15,"MP4 duration differs from expected 3 seconds: "+outputDuration);
  console.log("E2E MP4:",renderFormat,video.width+"x"+video.height,probe.format?.duration+"s — PASS");
 }
 const deleted=await fetch(base+"/api/recordings/"+duplicate+"/manage",{method:"DELETE",headers:{"x-confirm-project-delete":duplicate}});
 assert(deleted.ok,"Delete of duplicate failed");
 const stillExists=await get("/api/recordings/"+id);
 assert(stillExists.ok,"Deleting duplicate damaged original project");
 console.log("E2E API: list, detail, duplicate, protected delete, original preservation — PASS");
}
main().catch(e=>{console.error(e);process.exitCode=1}).finally(async()=>{
 if(server){try{if(process.platform!=="win32"&&server.pid)process.kill(-server.pid,"SIGTERM");else server.kill("SIGTERM")}catch{}await sleep(300)}
 for(const dir of dirs)await rm(dir,{recursive:true,force:true}).catch(()=>{});
});
