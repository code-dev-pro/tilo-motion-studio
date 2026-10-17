import {mkdtemp,rm} from "node:fs/promises";
import {tmpdir} from "node:os";
import {join} from "node:path";
import {execFile} from "node:child_process";
import {promisify} from "node:util";
import {detectMarkerEnd,trimCapturePreroll,videoDuration} from "./capture-clock";
const exec=promisify(execFile);
const dir=await mkdtemp(join(tmpdir(),"motion-clock-"));
try{
 const file=join(dir,"test.webm");
 await exec("ffmpeg",["-y","-loglevel","error","-f","lavfi","-i","color=c=black:s=320x180:r=30:d=2","-vf","drawbox=x=0:y=0:w=48:h=48:color=magenta:t=fill:enable='between(t,0.5,1.0)'","-c:v","libvpx","-b:v","600k",file],{timeout:30000});
 const end=await detectMarkerEnd(file);
 if(end===null||Math.abs(end-1)>0.12)throw Error("Marker end was not detected correctly: "+end);
 await trimCapturePreroll(file,end);
 const duration=await videoDuration(file);
 if(Math.abs(duration-1)>0.2)throw Error("Trimmed WebM duration unexpected: "+duration);
 if(await detectMarkerEnd(file)!==null)throw Error("Calibration marker remains in trimmed capture");
 console.log("Capture clock FFmpeg integration — PASS",JSON.stringify({end,duration}));
}finally{await rm(dir,{recursive:true,force:true})}
