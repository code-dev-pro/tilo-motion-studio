import {describe,it,expect} from "vitest";
import {cursorPosition,cursorMotionPresets} from "../src/cursor-motion";
import type {MotionEvent} from "../src/cinematic";
describe("cursor visual timing",()=>{
 const points:MotionEvent[]=[{t:0,type:"move",x:0,y:20},{t:.1,type:"drag",x:100,y:20},{t:.2,type:"drag",x:200,y:20},{t:.3,type:"drag",x:300,y:20}];
 it.each(["precise","subtle","smooth","fluid"] as const)("has no artificial delay in %s mode",mode=>{
  expect(cursorPosition(points,.15,cursorMotionPresets[mode])?.x).toBeCloseTo(150);
  expect(cursorPosition(points,.2,cursorMotionPresets[mode])?.x).toBeCloseTo(200);
 });
});
