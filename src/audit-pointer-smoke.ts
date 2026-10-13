import {chromium} from "playwright";
import {recorderInitScript} from "./recorder-init-script";
async function main(){
 const browser=await chromium.launch({headless:true});
 try{
  const context=await browser.newContext({viewport:{width:800,height:600}});
  const events:{type:string;x:number;y:number}[]=[];
  await context.exposeBinding("__tiloRecordEvent",(_source,event:{type:string;x:number;y:number})=>{events.push(event)});
  await context.addInitScript({content:recorderInitScript});
  const page=await context.newPage();
  await page.setContent('<!doctype html><html><body><button id="test" style="position:absolute;left:100px;top:100px;width:180px;height:70px">Test</button></body></html>');
  await page.mouse.move(110,110);
  await page.mouse.move(160,120,{steps:5});
  await page.mouse.click(160,120);
  await page.waitForTimeout(150);
  const stats=await page.evaluate(()=>((window as typeof window & {__tiloRecorderStats?:Record<string,number>}).__tiloRecorderStats??null));
  const moves=events.filter(e=>e.type==="move").length,clicks=events.filter(e=>e.type==="click").length;
  console.log(JSON.stringify({moves,clicks,stats},null,2));
  if(moves<1||clicks!==1)throw Error("Pointer capture smoke failed: expected motion and exactly one click");
  if(!stats||stats.failed!==0)throw Error("Pointer listener delivery failed");
  await context.close();
 }finally{await browser.close()}
}
main().catch(error=>{console.error(error);process.exitCode=1});
