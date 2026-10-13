export function pointerDeltaSeconds(deltaX:number,trackWidth:number,duration:number):number{
 if(!Number.isFinite(deltaX)||!Number.isFinite(trackWidth)||trackWidth<=0||!Number.isFinite(duration)||duration<=0)return 0;
 return deltaX/trackWidth*duration;
}
