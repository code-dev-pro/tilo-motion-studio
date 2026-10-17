export function recorderEventTime(raw:unknown,startEpochMs:number,receivedEpochMs:number):number{
 const source=raw&&typeof raw==="object"?(raw as {epochMs?:unknown}).epochMs:undefined;
 const epoch=typeof source==="number"&&Number.isFinite(source)&&source>0?source:receivedEpochMs;
 return Math.max(0,(epoch-startEpochMs)/1000);
}
