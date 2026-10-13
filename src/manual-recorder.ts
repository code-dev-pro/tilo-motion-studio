import "dotenv/config";
import {chromium} from "playwright";
import {mkdir,copyFile,writeFile,access,rm} from "node:fs/promises";
import {resolve,join} from "node:path";
import {recordingOptions} from "./recording";
import type {MotionEvent} from "./cinematic";
import {defineScenario} from "./core";
const options=recordingOptions.parse(JSON.parse(process.env.TILO_RECORDING_OPTIONS||"{}"));
const dir=resolve("output",options.id);await mkdir(dir,{recursive:true});
const stopFile=join(dir,".stop");await rm(stopFile,{force:true});
const browser=await chromium.launch({headless:false});
const context=await browser.newContext({viewport:{width:options.width,height:options.height},recordVideo:{dir,size:{width:options.width,height:options.height}}});
const page=await context.newPage();
const events:MotionEvent[]=[];
let start=0,stopping=false;
await context.exposeBinding("__tiloRecordEvent",(_source,ev:Omit<MotionEvent,"t">)=>{if(start&&Number.isFinite(ev.x)&&Number.isFinite(ev.y))events.push({...ev,t:(Date.now()-start)/1000})});
await context.addInitScript(()=>{
 const emit=(type:string,e:MouseEvent|WheelEvent)=>{void (window as unknown as {__tiloRecordEvent:(e:unknown)=>Promise<void>}).__tiloRecordEvent({type,x:e.clientX,y:e.clientY,...(e instanceof WheelEvent?{deltaY:e.deltaY}:{})})};
 let last=0;
 document.addEventListener("pointermove",e=>{const now=performance.now();if(now-last>=32){last=now;emit("move",e)}},{capture:true,passive:true});
 document.addEventListener("pointerdown",e=>emit("click",e),{capture:true,passive:true});
 document.addEventListener("click",e=>emit("click",e),{capture:true,passive:true});
 document.addEventListener("wheel",e=>emit("scroll",e),{capture:true,passive:true});
});
async function finish(){
 if(stopping)return;stopping=true;
 const duration=Math.max(1,(Date.now()-start)/1000);
 try{
  const video=page.video();
  await context.close();
  if(video)await copyFile(await video.path(),join(dir,"capture.webm"));
  await writeFile(join(dir,"events.json"),JSON.stringify(events,null,2));
  if(events.length===0)console.warn("RECORDING_WARNING: no pointer events captured. Check that interactions occurred in the Chromium recording window.");
  await writeFile(join(dir,"manifest.json"),JSON.stringify({scenario:options.id,viewport:{width:options.width,height:options.height},source:"capture.webm",events:"events.json",duration,url:options.url},null,2));
  const scenario=defineScenario({id:options.id,title:"Capture Tilo",viewport:{width:options.width,height:options.height},actions:[{type:"wait",ms:0}],video:{duration,fps:30,intro:"Découvrez Tilo",outro:"Apprendre autrement"}});
  await writeFile(join(dir,"scenario.json"),JSON.stringify(scenario,null,2));
  await rm(stopFile,{force:true});
  console.log("RECORDING_SAVED",options.id,duration);
 }catch(e){console.error("RECORDING_FAILED",e);process.exitCode=1}
 finally{await browser.close();process.exit()}
}
const stopPoll=setInterval(()=>{void access(stopFile).then(()=>{clearInterval(stopPoll);void finish()}).catch(()=>{})},250);
process.on("SIGINT",()=>{void finish()});
process.on("SIGTERM",()=>{void finish()});
browser.on("disconnected",()=>{if(!stopping){console.error("Browser closed before recording finalized");process.exitCode=1;process.exit()}});
try{await page.goto(options.url,{waitUntil:"domcontentloaded",timeout:20000});
 const bindingPresent=await page.evaluate(()=>typeof (window as unknown as {__tiloRecordEvent?:unknown}).__tiloRecordEvent==="function");
 if(!bindingPresent)console.warn("RECORDING_WARNING: event bridge is not available in the page");
 start=Date.now();console.log("RECORDING_READY",options.id)}
catch(e){console.error("RECORDING_FAILED",e);await browser.close();process.exit(1)}
