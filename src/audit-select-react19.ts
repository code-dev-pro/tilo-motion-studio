import {chromium} from "playwright";
import {spawn,type ChildProcess} from "node:child_process";
import {setTimeout as sleep} from "node:timers/promises";
const url="http://127.0.0.1:3333";
let server:ChildProcess|undefined;
async function main(){
 server=spawn("pnpm",["--filter","@tilo/studio","start"],{stdio:"pipe",detached:process.platform!=="win32"});
 for(let i=0;i<90;i++){try{if((await fetch(url)).ok)break}catch{}await sleep(500)}
 const browser=await chromium.launch({headless:true});
 try{
  const page=await browser.newPage();
  const warnings:string[]=[];
  page.on("console",m=>{if(m.type()==="error"&&m.text().includes("element.ref"))warnings.push(m.text())});
  page.on("pageerror",e=>{if(e.message.includes("element.ref"))warnings.push(e.message)});
  await page.goto(url,{waitUntil:"domcontentloaded"});
  const triggers=page.getByRole("combobox");
  const count=await triggers.count();
  if(count===0)throw Error("No select triggers found in Studio");
  for(let i=0;i<Math.min(3,count);i++){
   const trigger=triggers.nth(i);
   if(!await trigger.isVisible())continue;
   await trigger.click();
   await page.waitForTimeout(150);
   await page.keyboard.press("Escape");
  }
  if(warnings.length)throw Error("React 19 ref warning: "+warnings.join("\n"));
  console.log("React 19 Radix Select: no element.ref warnings — PASS");
 }finally{await browser.close()}
}
main().catch(e=>{console.error(e);process.exitCode=1}).finally(async()=>{if(server){try{if(process.platform!=="win32"&&server.pid)process.kill(-server.pid,"SIGTERM");else server.kill("SIGTERM")}catch{}}});
