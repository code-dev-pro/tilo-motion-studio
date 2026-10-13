import {bundle} from "@remotion/bundler";
import {renderMedia,selectComposition} from "@remotion/renderer";
import {resolve,join} from "node:path";
import {access,readFile} from "node:fs/promises";
import {pathToFileURL} from "node:url";
import {sizes,type Format,type Scenario} from "./core";
import {cameraFromClicks,type MotionEvent} from "./cinematic";
export async function render(s:Scenario,format:Format){
 const dir=resolve("output",s.id),source=join(dir,"capture.webm");
 await access(source);
 const events:MotionEvent[]=JSON.parse(await readFile(join(dir,"events.json"),"utf8").catch(()=>"[]"));
 const serveUrl=await bundle({entryPoint:resolve("src/remotion-entry.tsx")});
 const props={src:pathToFileURL(source).href,title:s.title,intro:s.video.intro,outro:s.video.outro,zoom:s.video.zoom,events,camera:cameraFromClicks(events,s.video.duration,s.viewport),viewport:s.viewport};
 const c=await selectComposition({serveUrl,id:"TiloPromo",inputProps:props});
 const dest=join(dir,format+".mp4");
 await renderMedia({serveUrl,composition:{...c,...sizes[format],fps:s.video.fps,durationInFrames:Math.ceil(s.video.duration*s.video.fps)},codec:"h264",outputLocation:dest,inputProps:props});
 return dest;
}
