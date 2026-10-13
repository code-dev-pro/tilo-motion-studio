export type SceneSettings = {fit:'contain'|'cover';scale:number;offsetX:number;offsetY:number};
export const defaultScene:SceneSettings={fit:'contain',scale:1,offsetX:0,offsetY:0};
export function clampScene(s:SceneSettings):SceneSettings {return {fit:s.fit,scale:Math.max(.5,Math.min(1.5,s.scale)),offsetX:Math.max(-1,Math.min(1,s.offsetX)),offsetY:Math.max(-1,Math.min(1,s.offsetY))};}
export function timelineTime(x:number,left:number,width:number,duration:number,snap=.1){const t=Math.max(0,Math.min(duration,(x-left)/Math.max(1,width)*duration));return Math.round(t/snap)*snap;}
