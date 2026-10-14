import {describe,it,expect} from "vitest";
import {mkdtemp,mkdir,readFile,rm,stat,writeFile} from "node:fs/promises";
import {tmpdir} from "node:os";
import {join} from "node:path";
import {recoverRecordedVideo,writeJsonAtomic,verifyRecordingVideo} from "../src/recording-recovery";
describe("recording recovery",()=>{
 it("recovers the newest nonempty finalized WebM",async()=>{
  const dir=await mkdtemp(join(tmpdir(),"tilo-recovery-"));
  try{await writeFile(join(dir,"page-1.webm"),Buffer.alloc(200,1));await writeFile(join(dir,"page-2.webm"),Buffer.alloc(300,2));
   const path=await recoverRecordedVideo(dir);expect((await stat(path)).size).toBe(300);expect(await verifyRecordingVideo(path)).toBe(300);
  }finally{await rm(dir,{recursive:true,force:true})}
 });
 it("refuses recovery without valid video",async()=>{const dir=await mkdtemp(join(tmpdir(),"tilo-empty-"));try{await expect(recoverRecordedVideo(dir)).rejects.toThrow()}finally{await rm(dir,{recursive:true,force:true})}});
 it("writes metadata atomically",async()=>{const dir=await mkdtemp(join(tmpdir(),"tilo-atomic-"));try{const path=join(dir,"events.json");await writeJsonAtomic(path,[{type:"click",t:1}]);expect(JSON.parse(await readFile(path,"utf8"))).toHaveLength(1)}finally{await rm(dir,{recursive:true,force:true})}});
});
