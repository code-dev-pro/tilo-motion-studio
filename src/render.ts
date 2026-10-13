import {bundle} from "@remotion/bundler";
import {renderMedia,selectComposition} from "@remotion/renderer";
import {resolve,join} from "node:path";
import {access,readFile} from "node:fs/promises";
import {sizes,type Format,type Scenario} from "./core";
import type {MotionEvent} from "./cinematic";
import {buildCameraTrack} from "./cinematic-v2";
import {startMediaServer} from "./media";

export async function render(s:Scenario,format:Format){
 const root=resolve("output"),dir=join(root,s.id),source=join(dir,"capture.webm");
 await access(source);
 const events:MotionEvent[]=JSON.parse(await readFile(join(dir,"events.json"),"utf8").catch(()=>"[]"));
 const media=await startMediaServer(root);
 try{
  const serveUrl=await bundle({entryPoint:resolve("src/remotion-entry.tsx")});
  const props={
   src:`${media.baseUrl}/${encodeURIComponent(s.id)}/capture.webm`,
   title:s.title,intro:s.video.intro,outro:s.video.outro,zoom:s.video.zoom,
   events,camera:buildCameraTrack(events,s.video.duration,s.viewport),viewport:s.viewport
  };
  const composition=await selectComposition({serveUrl,id:"TiloPromo",inputProps:props});
  const dest=join(dir,format+".mp4");
  await renderMedia({serveUrl,composition:{...composition,...sizes[format],fps:s.video.fps,durationInFrames:Math.ceil(s.video.duration*s.video.fps)},codec:"h264",outputLocation:dest,inputProps:props});
  return dest;
 }finally{await media.close()}
}
