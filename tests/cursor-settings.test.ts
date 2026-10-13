import {describe,it,expect} from "vitest";
import {cursorSettingsSchema,defaultCursorSettings} from "../src/cursor-settings";
describe("cursor settings",()=>{
 it("provides safe defaults",()=>expect(defaultCursorSettings().movement).toBe("smooth"));
 it("rejects oversized cursor",()=>expect(()=>cursorSettingsSchema.parse({size:9})).toThrow());
 it("accepts click effects",()=>expect(cursorSettingsSchema.parse({clickEffect:"confetti"}).clickEffect).toBe("confetti"));
});
