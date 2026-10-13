import {describe,it,expect} from "vitest";
import {bezierProgress,normalizeHandles} from "../src/bezier";
describe("cubic bezier",()=>{
 it("preserves endpoints",()=>{const h={x1:.2,y1:.4,x2:.8,y2:.9};expect(bezierProgress(0,h)).toBe(0);expect(bezierProgress(1,h)).toBe(1)});
 it("supports linear curve",()=>expect(bezierProgress(.5,{x1:0,y1:0,x2:1,y2:1})).toBeCloseTo(.5,3));
 it("supports overshoot",()=>expect(bezierProgress(.85,{x1:.2,y1:0,x2:.5,y2:1.5})).toBeGreaterThan(1));
 it("normalizes handles",()=>expect(normalizeHandles({x1:-1,y1:4,x2:3,y2:-4})).toEqual({x1:0,y1:3,x2:1,y2:-2}));
});
