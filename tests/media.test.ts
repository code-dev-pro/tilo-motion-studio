import {describe,it,expect} from "vitest";
import {mkdtemp,writeFile,rm,mkdir} from "node:fs/promises";
import {tmpdir} from "node:os";
import {join} from "node:path";
import {startMediaServer} from "../src/media";
describe("local media server",()=>{
 it("serves a video over HTTP and supports byte ranges",async()=>{
  const root=await mkdtemp(join(tmpdir(),"tilo-media-"));
  await mkdir(join(root,"fixture"));
  await writeFile(join(root,"fixture","capture.webm"),Buffer.from("0123456789"));
  const media=await startMediaServer(root);
  try{
   const response=await fetch(media.baseUrl+"/fixture/capture.webm");
   expect(response.status).toBe(200);
   expect(await response.text()).toBe("0123456789");
   const range=await fetch(media.baseUrl+"/fixture/capture.webm",{headers:{Range:"bytes=2-5"}});
   expect(range.status).toBe(206);
   expect(await range.text()).toBe("2345");
   const blocked=await fetch(media.baseUrl+"/fixture/secret.txt");
   expect(blocked.status).toBe(403);
  }finally{await media.close();await rm(root,{recursive:true,force:true})}
 });
});
