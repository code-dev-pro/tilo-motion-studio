import {describe,it,expect} from "vitest";
import {recordingOptions} from "../src/recording";
describe("manual recorder input",()=>{
 it("allows local Tilo",()=>expect(recordingOptions.parse({url:"http://localhost:3000",id:"demo"}).width).toBe(1600));
 it("rejects external URLs",()=>expect(()=>recordingOptions.parse({url:"https://example.com",id:"demo"})).toThrow());
 it("rejects path traversal",()=>expect(()=>recordingOptions.parse({url:"http://localhost:3000",id:"../bad"})).toThrow());
});
