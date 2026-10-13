import {describe,it,expect} from "vitest";
import {createHistory,commitHistory,undoHistory,redoHistory,snapTime,timelineTargets} from "../src/timeline-pro";
describe("Timeline Pro",()=>{
 it("undoes and redoes edits",()=>{const h=commitHistory(createHistory({x:1}),{x:2});expect(undoHistory(h).present.x).toBe(1);expect(redoHistory(undoHistory(h)).present.x).toBe(2)});
 it("clears redo after new edit",()=>expect(commitHistory(undoHistory(commitHistory(createHistory(1),2)),3).future).toEqual([]));
 it("ignores duplicate history entries",()=>expect(commitHistory(createHistory(1),1).past).toEqual([]));
 it("snaps to nearby clip edge",()=>expect(snapTime(4.94,[2,5],.1)).toBe(5));
 it("preserves time outside threshold",()=>expect(snapTime(4.5,[5],.1)).toBe(4.5));
 it("finds video and audio edges",()=>expect(timelineTargets([{start:0,sourceIn:0,sourceOut:3}],[{start:5,duration:2}],1)).toContain(7));
});
