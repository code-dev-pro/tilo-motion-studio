export type TimelineHistory<T>={past:T[];present:T;future:T[]};
export const createHistory=<T,>(present:T):TimelineHistory<T>=>({past:[],present,future:[]});
export function commitHistory<T>(h:TimelineHistory<T>,next:T,limit=50):TimelineHistory<T>{
 if(JSON.stringify(h.present)===JSON.stringify(next))return h;
 return {past:[...h.past.slice(-(limit-1)),h.present],present:next,future:[]};
}
export function undoHistory<T>(h:TimelineHistory<T>):TimelineHistory<T>{
 if(!h.past.length)return h;
 return {past:h.past.slice(0,-1),present:h.past[h.past.length-1],future:[h.present,...h.future]};
}
export function redoHistory<T>(h:TimelineHistory<T>):TimelineHistory<T>{
 if(!h.future.length)return h;
 return {past:[...h.past,h.present],present:h.future[0],future:h.future.slice(1)};
}
export function snapTime(time:number,targets:number[],threshold=.12,enabled=true):number{
 const safe=Math.max(0,time);
 if(!enabled||!targets.length)return safe;
 let nearest=safe,distance=threshold;
 for(const target of targets){const diff=Math.abs(safe-target);if(diff<distance){nearest=target;distance=diff}}
 return nearest;
}
export function timelineTargets(clips:{start:number;sourceIn:number;sourceOut:number}[],audio:{start:number;duration:number}[],playhead:number):number[]{
 return [0,playhead,...clips.flatMap(c=>[c.start,c.start+c.sourceOut-c.sourceIn]),...audio.flatMap(a=>[a.start,a.start+a.duration])];
}
