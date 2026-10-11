import {bundle} from "@remotion/bundler";
import {renderMedia,selectComposition} from "@remotion/renderer";
import {resolve,join} from "node:path";
import {access} from "node:fs/promises";
import {pathToFileURL} from "node:url";
import {sizes,type Format,type Scenario} from "./core";
export async function render(s:Scenario,format:Format){
 const dir=resolve("output",s.id),source=join(dir,"capture.webm");
 await access(source);
 const serveUrl=await bundle({entryPoint:resolve("src/remotion-entry.tsx")});
 const props={src:pathToFileURL(source).href,title:s.title,intro:s.video.intro,outro:s.video.outro,zoom:s.video.zoom};
 const c=await selectComposition({serveUrl,id:"TiloPromo",inputProps:props});
 const dest=join(dir,format+".mp4");
 await renderMedia({serveUrl,composition:{...c,...sizes[format],fps:s.video.fps,durationInFrames:Math.ceil(s.video.duration*s.video.fps)},codec:"h264",outputLocation:dest,inputProps:props});
 return dest;
}
