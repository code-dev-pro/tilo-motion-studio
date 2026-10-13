import {chromium} from "playwright";
import {recorderInitScript} from "./recorder-init-script";
type Stats={pointermove:number;mousemove:number;pointerdown:number;mousedown:number;wheel:number;delivered:number;failed:number};
type Result={name:string;url:string;bridgeCount:number;events:unknown[];stats:Stats|null;domProbe:{before:number;after:number};mouseProbe:{before:number;after:number};errors:string[]};
async function run(name:string,url?:string):Promise<Result>{
 const browser=await chromium.launch({headless:true});
 const context=await browser.newContext({viewport:{width:1000,height:700}});
 const events:unknown[]=[];const errors:string[]=[];
 await context.exposeBinding("__tiloRecordEvent",(_source,ev:unknown)=>{events.push(ev)});
 await context.addInitScript({content:recorderInitScript});
 const page=await context.newPage();
 page.on("pageerror",e=>errors.push("pageerror: "+e.message));
 page.on("console",m=>{if(m.type()==="error")errors.push("console: "+m.text())});
 try{
  if(url)await page.goto(url,{waitUntil:"domcontentloaded",timeout:20000});
  else await page.setContent('<!doctype html><html><body style="height:1200px"><button id="test" style="margin:150px">Test pointer</button></body></html>');
  await page.evaluate((script)=>{(0,eval)(script)},recorderInitScript);
  const stats=async()=>page.evaluate(()=>{const w=window as typeof window & {__tiloRecorderStats?:Stats};return w.__tiloRecorderStats??null});
  const beforeDom=events.length;
  await page.evaluate(()=>{
   const el=document.querySelector("button")??document.body;
   el.dispatchEvent(new PointerEvent("pointermove",{bubbles:true,clientX:200,clientY:200,pointerType:"mouse",pointerId:1}));
   el.dispatchEvent(new MouseEvent("mousemove",{bubbles:true,clientX:210,clientY:210}));
  });
  await page.waitForTimeout(100);
  const afterDom=events.length,beforeMouse=events.length;
  await page.mouse.move(220,230);await page.mouse.move(300,310,{steps:5});
  await page.mouse.click(250,250);
  await page.waitForTimeout(150);
  return {name,url:page.url(),bridgeCount:events.length,events:events.slice(0,8),stats:await stats(),domProbe:{before:beforeDom,after:afterDom},mouseProbe:{before:beforeMouse,after:events.length},errors};
 }finally{await browser.close()}
}
async function main(){
 const results=[await run("minimal"),await run("tilo",process.env.TILO_BASE_URL||"http://localhost:3000/fr")];
 console.log(JSON.stringify(results,null,2));
 if(results[0].bridgeCount===0)process.exitCode=1;
}
main().catch(e=>{console.error(e);process.exitCode=1});
