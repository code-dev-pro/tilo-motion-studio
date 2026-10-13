import "dotenv/config";
import {chromium} from "playwright";
import {mkdir,copyFile,writeFile,access,rm} from "node:fs/promises";
import {resolve,join} from "node:path";
import {recordingOptions} from "./recording";
import {installRecorderListeners} from "./recorder-listeners";
import type {MotionEvent} from "./cinematic";
import {normalizeRecorderEvent,recordingEventSummary} from "./recorder-events";
import {defineScenario} from "./core";
const options=recordingOptions.parse(JSON.parse(process.env.TILO_RECORDING_OPTIONS||"{}"));
const dir=resolve("output",options.id);await mkdir(dir,{recursive:true});
const stopFile=join(dir,".stop");await rm(stopFile,{force:true});
const browser=await chromium.launch({headless:false});
const context=await browser.newContext({viewport:{width:options.width,height:options.height},recordVideo:{dir,size:{width:options.width,height:options.height}}});
const page=await context.newPage();
const events:MotionEvent[]=[];
let start=0,stopping=false,bridgeCount=0;
const sourceCounts:Record<string,number>={};const pageUrls:string[]=[];
context.on("page",p=>{pageUrls.push(p.url());p.on("framenavigated",f=>{if(f===p.mainFrame())pageUrls.push(f.url())})});
await context.exposeBinding("__tiloRecordEvent",async(source,raw:unknown)=>{
 bridgeCount++;
 const sourceUrl=source.frame.url();sourceCounts[sourceUrl]=(sourceCounts[sourceUrl]||0)+1;
 if(raw&&typeof raw==="object"&&(raw as {probe?:boolean}).probe)return;
 const ev=normalizeRecorderEvent(raw,{width:options.width,height:options.height});
 if(!start||!ev)return;
 if(source.frame!==page.mainFrame()){
  try{const frameElement=await source.frame.frameElement();const rect=await frameElement.boundingBox();if(!rect)return;ev.x+=rect.x;ev.y+=rect.y}catch{return}
 }
 events.push({...ev,x:Math.max(0,Math.min(options.width,ev.x)),y:Math.max(0,Math.min(options.height,ev.y)),t:Math.max(0,(Date.now()-start)/1000)});
});
await context.addInitScript(installRecorderListeners);
async function collectFrameStats(){return Promise.all(page.frames().map(async frame=>({url:frame.url(),stats:await frame.evaluate(()=>({installed:!!(window as typeof window & {__tiloRecorderActive?:boolean}).__tiloRecorderActive,counts:(window as typeof window & {__tiloRecorderStats?:Record<string,number>}).__tiloRecorderStats??null})).catch(()=>null)})))}
let frameStats:Awaited<ReturnType<typeof collectFrameStats>>=[];
async function finish(){
 if(stopping)return;stopping=true;
 const duration=Math.max(1,(Date.now()-start)/1000);
 try{
  const video=page.video();
  await context.close();
  if(video)await copyFile(await video.path(),join(dir,"capture.webm"));
  await writeFile(join(dir,"events.json"),JSON.stringify(events,null,2));
  const summary=recordingEventSummary(events);
  await writeFile(join(dir,"event-diagnostics.json"),JSON.stringify({bridgeCount,summary,url:options.url,sourceCounts,pageUrls,frameStats},null,2));
  console.log("RECORDING_EVENTS",JSON.stringify(summary));
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
 const bindingPresent=await page.evaluate(async()=>{const w=window as unknown as {__tiloRecordEvent?:(event:unknown)=>Promise<void>};if(typeof w.__tiloRecordEvent!=="function")return false;await w.__tiloRecordEvent({probe:true});return true});
 if(!bindingPresent||bridgeCount===0)throw Error("Event bridge self-test failed; capture would produce empty events.json");
 for(const frame of page.frames())await frame.evaluate(installRecorderListeners).catch(()=>{});
 start=Date.now();console.log("RECORDING_READY",options.id)}
catch(e){console.error("RECORDING_FAILED",e);await browser.close();process.exit(1)}
