import {describe,it,expect} from "vitest";
import {pointerDeltaSeconds} from "../src/trim-geometry";
import {trimClip} from "../src/timeline";
describe("video trim interaction",()=>{
 it("uses full timeline track width, not clip width",()=>expect(pointerDeltaSeconds(50,500,10)).toBe(1));
 it("handles zoomed track width",()=>expect(pointerDeltaSeconds(50,1000,10)).toBe(.5));
 it("rejects invalid widths",()=>expect(pointerDeltaSeconds(30,0,10)).toBe(0));
 it("trims source without stretching timeline",()=>{
  const original=[{id:"a",sourceIn:0,sourceOut:5,start:0},{id:"b",sourceIn:5,sourceOut:10,start:5}];
  const result=trimClip(original,"a","right",-1,10);
  expect(result[0].sourceOut).toBe(4);expect(result[1].start).toBe(4);expect(original[0].sourceOut).toBe(5);
 });
});
