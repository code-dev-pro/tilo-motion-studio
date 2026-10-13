import {chromium,type Page} from "playwright";
import {mkdir,copyFile,writeFile} from "node:fs/promises";
import {resolve,join} from "node:path";
import type {Scenario} from "./core";
import type {MotionEvent} from "./cinematic";

export async function perform(page:Page,a:Scenario["actions"][number],base:string,record?:(event:Omit<MotionEvent,"t">)=>void){
 switch(a.type){
 case "navigate": {
  const u=new URL(a.path,base);
  if(u.origin!==new URL(base).origin)throw Error("Cross-origin navigation refused");
  const response=await page.goto(u.href,{waitUntil:"domcontentloaded",timeout:15000});
  if(response&&response.status()>=400)throw Error(`Navigation failed: HTTP ${response.status()} at ${u.href}`);
  break;
 }
 case "click":{
  const box=await page.locator(a.selector).boundingBox({timeout:5000}).catch(()=>{throw Error(`Missing click target "${a.selector}" on ${page.url()}. For fixture, start: python3 -m http.server 4173 --directory fixture`)});
  if(!box)throw Error("Click target not visible");
  const x=box.x+box.width/2,y=box.y+box.height/2;
  record?.({type:"move",x,y});
  await page.mouse.click(x,y);
  record?.({type:"click",x,y});break;
 }
 case "wait":await page.waitForTimeout(a.ms);break;
 case "drag":{
  const b=await page.locator(a.selector).boundingBox({timeout:5000}).catch(()=>{throw Error(`Missing drag target "${a.selector}" on ${page.url()}`)});
  if(!b)throw Error("Target not visible");
  const x=b.x+b.width/2,y=b.y+b.height/2;
  record?.({type:"move",x,y});
  await page.mouse.move(x,y);await page.mouse.down();
  const steps=a.steps;
  for(let i=1;i<=steps;i++){
   const f=i/steps,px=x+(a.x-x)*f,py=y+(a.y-y)*f;
   await page.mouse.move(px,py);record?.({type:"drag",x:px,y:py});
  }
  await page.mouse.up();break;
 }
 case "bridge":await page.evaluate(async ({method,args})=>{
  const api=(window as unknown as {__TILO_DEMO__?:Record<string,(...x:unknown[])=>Promise<void>>}).__TILO_DEMO__;
  if(!api?.[method])throw Error("Demo Bridge unavailable: "+method);
  const fn:((...params:unknown[])=>Promise<void>)=api[method];
  await fn(...args);
 },{method:a.method,args:a.args});break;
 }
}
export async function capture(s:Scenario,base:string){
 const dir=resolve("output",s.id);await mkdir(dir,{recursive:true});
 const browser=await chromium.launch({headless:process.env.CAPTURE_HEADLESS!=="false"});
 const events:MotionEvent[]=[];
 try{
  const context=await browser.newContext({viewport:s.viewport,recordVideo:{dir,size:s.viewport}});
  const page=await context.newPage();
  let start=Date.now();
  try{
   // Begin timing after browser context creation; timestamps match the recorded clip approximately.
   start=Date.now();
   for(const a of s.actions)await perform(page,a,base,e=>events.push({...e,t:(Date.now()-start)/1000}));
   await page.waitForTimeout(Math.max(0,s.video.duration*1000-(Date.now()-start)));
  }finally{
   const v=page.video();await context.close();
   if(v)await copyFile(await v.path(),join(dir,"capture.webm"));
  }
  await writeFile(join(dir,"events.json"),JSON.stringify(events,null,2));
  await writeFile(join(dir,"manifest.json"),JSON.stringify({scenario:s.id,viewport:s.viewport,source:"capture.webm",events:"events.json"},null,2));
  return join(dir,"capture.webm");
 }finally{await browser.close();}
}
