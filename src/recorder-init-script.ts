/** Browser-side standalone JavaScript. Never serialize imported TS functions through Playwright. */
export const recorderInitScript = String.raw`
(() => {
 const w = window;
 if (w.__tiloRecorderAbort) w.__tiloRecorderAbort.abort();
 const controller = new AbortController();
 w.__tiloRecorderAbort = controller;
 const stats = {pointermove:0,mousemove:0,pointerdown:0,mousedown:0,wheel:0,delivered:0,failed:0};
 w.__tiloRecorderStats = stats;
 w.__tiloRecorderActive = true;
 let lastMove=0,lastPointer=0,lastDown=0,pointerHeld=false;
 function send(type,e) {
  const binding=w.__tiloRecordEvent;
  if(typeof binding!=="function"){stats.failed++;return}
  const payload={type,x:e.clientX,y:e.clientY};
  if(type==="scroll")payload.deltaY=e.deltaY;
  Promise.resolve(binding(payload)).then(()=>{stats.delivered++},()=>{stats.failed++});
 }
 const options={capture:true,signal:controller.signal};
 document.addEventListener("pointermove",e=>{stats.pointermove++;const now=performance.now();lastPointer=now;if(now-lastMove>=16){lastMove=now;send(pointerHeld||e.buttons?"drag":"move",e)}},options);
 document.addEventListener("mousemove",e=>{stats.mousemove++;const now=performance.now();if(now-lastPointer>=100&&now-lastMove>=16){lastMove=now;send(e.buttons?"drag":"move",e)}},options);
 document.addEventListener("pointerdown",e=>{stats.pointerdown++;lastDown=performance.now();pointerHeld=true;send("click",e)},options);
 document.addEventListener("pointerup",e=>{pointerHeld=false;send("drag",e)},options);
 document.addEventListener("pointercancel",()=>{pointerHeld=false},options);
 document.addEventListener("mousedown",e=>{stats.mousedown++;if(performance.now()-lastDown>100)send("click",e)},options);
 document.addEventListener("wheel",e=>{stats.wheel++;send("scroll",e)},{...options,passive:true});
})();
`;
