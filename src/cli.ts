import "dotenv/config";
import {scenarios,type ScenarioName} from "./scenarios";
import {formatSchema} from "./core";
import {capture} from "./capture";
import {render} from "./render";
async function main(){
 const [command,...args]=process.argv.slice(2);
 const option=(name:string,fallback:string)=>{const i=args.indexOf("--"+name);return i>=0?args[i+1]:fallback};
 const name=option("scenario","fixture") as ScenarioName;
 if(!Object.hasOwn(scenarios,name))throw Error("Unknown scenario: "+name);
 const s=scenarios[name],format=formatSchema.parse(option("format","landscape"));
 if(!["capture","render","all"].includes(command))throw Error("Usage: capture|render|all --scenario fixture --format portrait");
 if(command!=="render")console.log("Captured:",await capture(s,process.env.TILO_BASE_URL||"http://localhost:4173"));
 if(command!=="capture")console.log("Rendered:",await render(s,format));
}
main().catch(e=>{console.error(e);process.exitCode=1});
