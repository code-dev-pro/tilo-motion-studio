import {describe,it,expect} from "vitest";
import {normalizeRecorderEvent,recordingEventSummary} from "../src/recorder-events";
describe("manual recorder events",()=>{
 const viewport={width:1600,height:900};
 it("accepts pointer motion",()=>expect(normalizeRecorderEvent({type:"move",x:200,y:300},viewport)).toEqual({type:"move",x:200,y:300}));
 it("clamps pointer to capture viewport",()=>expect(normalizeRecorderEvent({type:"click",x:2000,y:-10},viewport)).toEqual({type:"click",x:1600,y:0}));
 it("rejects nonfinite coordinates",()=>expect(normalizeRecorderEvent({type:"move",x:NaN,y:5},viewport)).toBeNull());
 it("keeps wheel delta",()=>expect(normalizeRecorderEvent({type:"scroll",x:10,y:20,deltaY:50},viewport)?.deltaY).toBe(50));
 it("counts actual events",()=>expect(recordingEventSummary([{t:0,type:"move",x:1,y:2},{t:1,type:"click",x:1,y:2}])).toEqual({total:2,moves:1,clicks:1,scrolls:0}));
});
