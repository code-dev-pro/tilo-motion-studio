import {describe,it,expect} from "vitest";
import {mapVideoPoint} from "../src/cursor-coordinate-map";
import {cursorPosition,cursorMotionPresets} from "../src/cursor-motion";
import type {MotionEvent} from "../src/cinematic";
describe("cursor coordinate accuracy",()=>{
 it("maps matching capture and video aspect ratios",()=>expect(mapVideoPoint(800,450,{width:1600,height:900},{width:800,height:450})).toEqual({x:400,y:225}));
 it("accounts for letterboxing with contain",()=>expect(mapVideoPoint(800,450,{width:1600,height:900},{width:900,height:900})).toEqual({x:450,y:450}));
 it("accounts for cropping with cover",()=>expect(mapVideoPoint(0,0,{width:1600,height:900},{width:900,height:900},"cover")).toEqual({x:-350,y:0}));
 it("pins click coordinates despite smooth lag",()=>{const events:MotionEvent[]=[{t:0,type:"move",x:10,y:10},{t:1,type:"move",x:100,y:100},{t:1.04,type:"click",x:140,y:120}];const p=cursorPosition(events,1.04,cursorMotionPresets.fluid);expect(p?.x).toBe(140);expect(p?.y).toBe(120)});
 it("preserves click anchor shortly after click",()=>{const events:MotionEvent[]=[{t:1,type:"move",x:50,y:50},{t:1.04,type:"click",x:140,y:120}];expect(cursorPosition(events,1.08,cursorMotionPresets.smooth)?.x).toBe(140)});
});
