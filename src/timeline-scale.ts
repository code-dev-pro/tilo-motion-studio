export const safeTimelineDuration=(sourceDuration:number,movieDuration:number)=>Math.max(.001,sourceDuration,movieDuration);
export const timelinePercentage=(time:number,scaleDuration:number)=>Math.max(0,Math.min(100,time/Math.max(.001,scaleDuration)*100));
export const timeFromTimelinePointer=(clientX:number,rectLeft:number,rectWidth:number,scaleDuration:number,movieDuration:number)=>{
 if(!Number.isFinite(clientX)||rectWidth<=0)return 0;
 return Math.max(0,Math.min(movieDuration,(clientX-rectLeft)/rectWidth*scaleDuration));
};
export const rulerTicks=(scaleDuration:number,maxTicks=24)=>{
 const step=Math.max(1,Math.ceil(scaleDuration/Math.max(1,maxTicks-1)));
 const ticks:number[]=[];
 for(let t=0;t<=scaleDuration;t+=step)ticks.push(t);
 return ticks;
};
