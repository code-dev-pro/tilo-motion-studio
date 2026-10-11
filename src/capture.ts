import {chromium,type Page} from "playwright";
import {mkdir,copyFile,writeFile} from "node:fs/promises";
import {resolve,join} from "node:path";
import type {Scenario} from "./core";
export async function perform(page:Page,a:Scenario["actions"][number],base:string){
 switch(a.type){
 case "navigate": {
  const u=new URL(a.path,base);
  if(u.origin!==new URL(base).origin)throw Error("Cross-origin navigation refused");
  await page.goto(u.href,{waitUntil:"networkidle"});break;
 }
 case "click":await page.locator(a.selector).click();break;
 case "wait":await page.waitForTimeout(a.ms);break;
 case "drag":{
  const b=await page.locator(a.selector).boundingBox();
  if(!b)throw Error("Target not visible");
  await page.mouse.move(b.x+b.width/2,b.y+b.height/2);
  await page.mouse.down();await page.mouse.move(a.x,a.y,{steps:a.steps});await page.mouse.up();break;
 }
 case "bridge":await page.evaluate(async ({method,args})=>{
  const api=(window as Window&{__TILO_DEMO__?:Record<string,(...x:any[])=>Promise<void>>}).__TILO_DEMO__;
  if(!api?.[method])throw Error("Demo Bridge unavailable: "+method);
  await api[method](...args);
 },{method:a.method,args:a.args});break;
 }
}
export async function capture(s:Scenario,base:string){
 const dir=resolve("output",s.id);await mkdir(dir,{recursive:true});
 const browser=await chromium.launch({headless:process.env.CAPTURE_HEADLESS!=="false"});
 try{
  const context=await browser.newContext({viewport:s.viewport,recordVideo:{dir,size:s.viewport}});
  const page=await context.newPage();
  try{
   const start=Date.now();
   for(const a of s.actions)await perform(page,a,base);
   await page.waitForTimeout(Math.max(0,s.video.duration*1000-(Date.now()-start)));
  }finally{
   const v=page.video();await context.close();
   if(v)await copyFile(await v.path(),join(dir,"capture.webm"));
  }
  await writeFile(join(dir,"manifest.json"),JSON.stringify({scenario:s.id,viewport:s.viewport,source:"capture.webm"},null,2));
  return join(dir,"capture.webm");
 }finally{await browser.close();}
}
