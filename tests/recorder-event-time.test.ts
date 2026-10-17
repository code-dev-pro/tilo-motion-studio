import {describe,it,expect} from "vitest";
import {recorderEventTime} from "../src/recorder-event-time";
describe("source event timing",()=>{
 it("uses browser event timestamp instead of delayed Playwright receipt",()=>expect(recorderEventTime({epochMs:1010},1000,1090)).toBeCloseTo(.01));
 it("falls back to receipt time for older event formats",()=>expect(recorderEventTime({type:"drag"},1000,1090)).toBeCloseTo(.09));
 it("clamps pre-recording events to zero",()=>expect(recorderEventTime({epochMs:950},1000,1090)).toBe(0));
});
