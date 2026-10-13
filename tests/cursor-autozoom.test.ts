import {describe,it,expect} from "vitest";
import {cursorPosition,cursorMotionPresets} from "../src/cursor-motion";
import {buildCameraTrack} from "../src/cinematic-v2";
import type {MotionEvent} from "../src/cinematic";
const events:MotionEvent[]=[{t:0,type:"move",x:10,y:20},{t:.5,type:"move",x:110,y:120},{t:4,type:"move",x:300,y:400},{t:4.1,type:"click",x:300,y:400}];
describe("cinematic cursor motion",()=>{
 it("returns null with no positions",()=>expect(cursorPosition([],1,cursorMotionPresets.smooth)).toBeNull());
 it("interpolates between nearby samples",()=>{const p=cursorPosition(events,.25,{lag:0,smoothing:0,maxGap:1});expect(p?.x).toBeCloseTo(60)});
 it("does not fly through a long inactivity gap",()=>{const p=cursorPosition(events,2,{lag:0,smoothing:0,maxGap:.6});expect(p?.x).toBe(110)});
 it("reports the latest real event for idle hiding",()=>expect(cursorPosition(events,2,cursorMotionPresets.smooth)?.lastEventTime).toBe(.5));
 it("keeps click timing",()=>expect(cursorPosition(events,4.1,cursorMotionPresets.precise)?.click).toBe(true));
});
describe("automatic click zoom",()=>{
 it("does not add duplicate timestamps",()=>{const keys=buildCameraTrack([{t:1,type:"click",x:50,y:50}],4,{width:100,height:100});expect(new Set(keys.map(k=>k.t)).size).toBe(keys.length)});
 it("throttles closely spaced clicks",()=>{const clicks=[1,1.1,1.2].map(t=>({t,type:"click" as const,x:100,y:100}));const keys=buildCameraTrack(clicks,7,{width:200,height:200});expect(keys.filter(k=>k.scale>1)).toHaveLength(2)});
 it("clamps focus to viewport",()=>{const keys=buildCameraTrack([{t:2,type:"click",x:5000,y:-100}],8,{width:100,height:100});expect(keys.every(k=>k.x<=.88&&k.y>=.12)).toBe(true)});
});
