import {describe,it,expect} from "vitest";
import {recorderInitScript} from "../src/recorder-init-script";
describe("standalone recorder script",()=>{
 it("parses as browser JavaScript",()=>expect(()=>new Function(recorderInitScript)).not.toThrow());
 it("does not depend on esbuild helper",()=>expect(recorderInitScript).not.toContain("__name"));
 it("registers move and click handlers",()=>{expect(recorderInitScript).toContain("pointermove");expect(recorderInitScript).toContain("pointerdown")});
});
