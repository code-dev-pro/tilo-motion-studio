export function installRecorderListeners(){
 const w=window as typeof window & {__tiloRecordEvent?:(payload:unknown)=>Promise<void>;__tiloRecorderActive?:boolean;__tiloRecorderStats?:Record<string,number>;__tiloRecorderAbort?:AbortController};
 // Reinstall on every explicit call; the flag alone does not prove listeners work.
 w.__tiloRecorderAbort?.abort();const controller=new AbortController();w.__tiloRecorderAbort=controller;
 w.__tiloRecorderActive=true;
 const stats={pointermove:0,mousemove:0,pointerdown:0,mousedown:0,wheel:0,delivered:0,failed:0};
 w.__tiloRecorderStats=stats;
 let lastMove=0,lastPointer=0,lastDown=0;
 function send(type:"move"|"click"|"scroll",e:MouseEvent|PointerEvent|WheelEvent){
  if(typeof w.__tiloRecordEvent!=="function"){stats.failed++;return}
  const payload={type,x:e.clientX,y:e.clientY,...(type==="scroll"?{deltaY:(e as WheelEvent).deltaY}:{})};
  void w.__tiloRecordEvent(payload).then(()=>{stats.delivered++}).catch(()=>{stats.failed++});
 }
 document.addEventListener("pointermove",e=>{stats.pointermove++;lastPointer=performance.now();if(lastPointer-lastMove>32){lastMove=lastPointer;send("move",e)}},{capture:true,signal:controller.signal});
 w.addEventListener("mousemove",e=>{stats.mousemove++;const now=performance.now();if(now-lastPointer<100||now-lastMove<32)return;lastMove=now;send("move",e)},true);
 w.addEventListener("pointerdown",e=>{stats.pointerdown++;lastDown=performance.now();send("click",e)},true);
 w.addEventListener("mousedown",e=>{stats.mousedown++;if(performance.now()-lastDown>100)send("click",e)},true);
 w.addEventListener("wheel",e=>{stats.wheel++;send("scroll",e)}, {capture:true,passive:true,signal:controller.signal});
}
