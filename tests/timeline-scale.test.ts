import {describe,it,expect} from "vitest";
import {safeTimelineDuration,timelinePercentage,timeFromTimelinePointer,rulerTicks} from "../src/timeline-scale";
import {trimClip,duration as clipDuration} from "../src/timeline";
describe("fixed timeline scale",()=>{
 it("keeps source time axis when movie is shortened",()=>{expect(safeTimelineDuration(12,7)).toBe(12);expect(timelinePercentage(7,12)).toBeCloseTo(58.333333)});
 it("can expand scale for a longer edit",()=>expect(safeTimelineDuration(12,15)).toBe(15));
 it("maps pointer drag against ruler and clamps to playable duration",()=>{expect(timeFromTimelinePointer(500,100,800,12,7)).toBe(6);expect(timeFromTimelinePointer(900,100,800,12,7)).toBe(7)});
 it("handles invalid geometry safely",()=>expect(timeFromTimelinePointer(500,100,0,12,7)).toBe(0));
 it("preserves time axis when trimming right edge",()=>{const source=12;const clips=[{id:"a",sourceIn:0,sourceOut:12,start:0}];const trimmed=trimClip(clips,"a","right",-5,source);expect(clipDuration(trimmed[0])).toBe(7);expect(safeTimelineDuration(source,clipDuration(trimmed[0]))).toBe(12)});
 it("generates stable ruler ticks",()=>expect(rulerTicks(12)).toEqual(Array.from({length:13},(_,i)=>i)));
});
