import {bundle} from "@remotion/bundler";
import {renderMedia,selectComposition} from "@remotion/renderer";
import {resolve,join,relative,sep} from "node:path";
import {access,readFile} from "node:fs/promises";
import {sizes,type Format,type Scenario} from "./core";
import {cameraFromClicks,type MotionEvent} from "./cinematic";
import {startMediaServer} from "./media";
import type {StudioProject} from "./project";
export async function render(s:Scenario,format:Format,project?:StudioProject){
 const root=resolve("output"),dir=join(root,s.id),source=join(dir,"capture.webm");
 await access(source);
 const events:MotionEvent[]=JSON.parse(await readFile(join(dir,"events.json"),"utf8").catch(()=>"[]"));
 const media=await startMediaServer(root);
 try{
  const serveUrl=await bundle({entryPoint:resolve("src/remotion-entry.tsx")});
  let audioSrc:string|undefined;
  if(project?.audio.path){
   const path=resolve(root,project.audio.path),rel=relative(root,path);
   if(rel===".."||rel.startsWith(".."+sep))throw Error("Audio path must be within output");
   await access(path);audioSrc=media.url+"/"+rel.split(sep).map(encodeURIComponent).join("/");
  }
  const props={
   src:media.url+"/"+encodeURIComponent(s.id)+"/capture.webm",
   title:s.title,intro:s.video.intro,outro:s.video.outro,zoom:project?.zoom??s.video.zoom,
   events,camera:project?.camera.length?project.camera:project?.autoZoom===false?[]:cameraFromClicks(events,s.video.duration,s.viewport),
   viewport:s.viewport,project,audioSrc
  };
  const c=await selectComposition({serveUrl,id:"TiloPromo",inputProps:props});
  const dest=join(dir,format+".mp4");
  await renderMedia({serveUrl,composition:{...c,...sizes[format],fps:s.video.fps,durationInFrames:Math.ceil(s.video.duration*s.video.fps)},codec:"h264",outputLocation:dest,inputProps:props});
  return dest;
 }finally{await media.close()}
}
