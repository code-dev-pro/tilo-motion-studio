import {describe,it,expect} from "vitest";
import {cursorPosition,cursorMotionPresets} from "../src/cursor-motion";
import type {MotionEvent} from "../src/cinematic";
describe("slider tracking accuracy",()=>{
 const events:MotionEvent[]=[
  {type:"click",t:1,x:100,y:200},
  {type:"drag",t:1.02,x:120,y:200},
  {type:"drag",t:1.04,x:160,y:200},
  {type:"drag",t:1.06,x:200,y:200},
  {type:"drag",t:1.08,x:240,y:200},
  {type:"move",t:1.1,x:240,y:200}
 ];
 it("does not apply cinematic lag at a drag sample",()=>expect(cursorPosition(events,1.06,cursorMotionPresets.fluid)?.x).toBeCloseTo(200));
 it("interpolates linearly between slider samples",()=>expect(cursorPosition(events,1.05,cursorMotionPresets.fluid)?.x).toBeCloseTo(180));
 it("tracks final drag point without smoothing",()=>expect(cursorPosition(events,1.08,cursorMotionPresets.smooth)?.x).toBeCloseTo(240));
 it("retains click anchor at pointer down",()=>expect(cursorPosition(events,1,cursorMotionPresets.fluid)?.x).toBe(100));
});
