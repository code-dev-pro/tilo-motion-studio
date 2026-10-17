import {describe,it,expect} from "vitest";
import {markerEndFromRGB,alignEvents} from "../src/capture-clock";
import {audioFadeEnvelope} from "../src/audio-editing";
describe("video/event clock calibration",()=>{
 it("detects end of a visible sync marker at 30fps",()=>{
  const rgb=Buffer.from([0,0,0,0,0,0,255,0,255,255,0,255,255,0,255,255,0,255,0,0,0]);
  expect(markerEndFromRGB(rgb)).toBeCloseTo(6/30);
 });
 it("rejects isolated magenta noise",()=>expect(markerEndFromRGB(Buffer.from([255,0,255,0,0,0]))).toBeNull());
 it("preserves ordering and original events",()=>{
  const input=[{t:2,x:20},{t:1,x:10}];
  expect(alignEvents(input,1)).toEqual([{t:2,x:10},{t:3,x:20}]);
  expect(input[0].t).toBe(2);
 });
});
describe("audio fade envelope",()=>{
 it("fades in from zero",()=>{expect(audioFadeEnvelope(0,10,2,2)).toBe(0);expect(audioFadeEnvelope(1,10,2,2)).toBeCloseTo(.5)});
 it("fades out at the end of a looping ambience track",()=>{expect(audioFadeEnvelope(9,10,2,2)).toBeCloseTo(.5);expect(audioFadeEnvelope(10,10,2,2)).toBe(0)});
 it("handles overlapping fades on short clips",()=>expect(audioFadeEnvelope(1,2,3,3)).toBeCloseTo(1/3));
 it("keeps unity gain without fades",()=>expect(audioFadeEnvelope(4,10,0,0)).toBe(1));
});
