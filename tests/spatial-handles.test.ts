import {describe,it,expect} from "vitest";
import {spatialPosition,updateSpatialHandle,spatialHandlesSchema} from "../src/spatial-handles";
import {createHistory,commitHistory,undoHistory} from "../src/timeline-pro";
const points=[{t:0,x:0,y:0},{t:2,x:200,y:100}];
describe("spatial tangents and undo",()=>{
 it("uses default straight trajectory",()=>expect(spatialPosition(points,[],1)).toEqual({x:100,y:50}));
 it("moves trajectory with editable tangents",()=>{const h=updateSpatialHandle([],points[0],"out",0,200);expect(spatialPosition(points,h,1).y).toBeGreaterThan(50)});
 it("preserves endpoints",()=>expect(spatialPosition(points,[],2)).toEqual({x:200,y:100}));
 it("rejects invalid handles",()=>expect(()=>spatialHandlesSchema.parse([{t:-1,inX:0,inY:0,outX:0,outY:0}])).toThrow());
 it("groups gesture into one undo entry",()=>{const initial={x:0};const final={x:30};const h=commitHistory(createHistory(initial),final);expect(h.past).toHaveLength(1);expect(undoHistory(h).present).toEqual(initial)});
});
