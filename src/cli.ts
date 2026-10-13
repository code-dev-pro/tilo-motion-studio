import "dotenv/config";
import {scenarios,type ScenarioName} from "./scenarios";
import {formatSchema} from "./core";
import {capture} from "./capture";
import {render} from "./render";
import {readFile} from "node:fs/promises";
import {resolve} from "node:path";
import {scenarioSchema} from "./core";
async function main(){
 const [command,...args]=process.argv.slice(2);
 const option=(name:string,fallback:string)=>{const i=args.indexOf("--"+name);return i>=0?args[i+1]:fallback};
 const manual=option("recording","");
 const name=option("scenario","fixture") as ScenarioName;
 if(!manual&&!Object.hasOwn(scenarios,name))throw Error("Unknown scenario: "+name);
 const s=manual?scenarioSchema.parse(JSON.parse(await readFile(resolve("output",manual,"scenario.json"),"utf8"))):scenarios[name];
 const format=formatSchema.parse(option("format","landscape"));
 if(!["capture","render","all"].includes(command))throw Error("Usage: capture|render|all --scenario fixture --format portrait");
 if(command!=="render"&&manual)throw Error("Manual recording is already captured; use render");
 if(command!=="render")console.log("Captured:",await capture(s,process.env.TILO_BASE_URL||"http://localhost:4173"));
 if(command!=="capture")console.log("Rendered:",await render(s,format));
}
main().catch(e=>{console.error(e);process.exitCode=1});
