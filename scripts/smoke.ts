import {createServer} from "node:http";
import {readFile,stat} from "node:fs/promises";
import {resolve} from "node:path";
import {capture} from "../src/capture";
import {render} from "../src/render";
import {scenarios} from "../src/scenarios";
const html=await readFile(resolve("fixture/index.html"));
const server=createServer((_req,res)=>{res.writeHead(200,{"Content-Type":"text/html; charset=utf-8"});res.end(html)});
await new Promise<void>(ok=>server.listen(0,"127.0.0.1",ok));
try{
 const address=server.address();
 if(!address||typeof address==="string")throw Error("Missing server port");
 const base=`http://127.0.0.1:${address.port}`;
 const webm=await capture(scenarios.fixture,base);
 if((await stat(webm)).size<1000)throw Error("Empty WebM capture");
 const mp4=await render(scenarios.fixture,"landscape");
 const bytes=await readFile(mp4);
 if(bytes.length<1000||bytes.toString("ascii",4,8)!=="ftyp")throw Error("Invalid MP4 output");
 console.log("SMOKE PASS",mp4,bytes.length,"bytes");
}finally{await new Promise<void>(ok=>server.close(()=>ok()))}
