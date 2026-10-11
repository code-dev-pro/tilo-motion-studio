import "dotenv/config";
import {scenarios,type ScenarioName} from "./scenarios";
import {formatSchema} from "./core";
import {capture} from "./capture";
import {render} from "./render";
import {getProject} from "./project";
async function main(){
 const [command,...args]=process.argv.slice(2);
 const option=(name:string,fallback:string)=>{const i=args.indexOf("--"+name);return i>=0?args[i+1]:fallback};
 const projectId=option("project","");
 const project=projectId?await getProject(projectId):undefined;
 const name=(project?.scenario||option("scenario","fixture")) as ScenarioName;
 if(!Object.hasOwn(scenarios,name))throw Error("Unknown scenario: "+name);
 const s=scenarios[name],format=formatSchema.parse(project?.format||option("format","landscape"));
 if(!["capture","render","all","batch"].includes(command))throw Error("Usage: capture|render|all|batch --scenario fixture --format portrait [--project id]");
 if(command==="capture"||command==="all"||command==="batch")console.log("Captured:",await capture(s,process.env.TILO_BASE_URL||"http://localhost:4173"));
 if(command==="render"||command==="all")console.log("Rendered:",await render(s,format,project));
 if(command==="batch")for(const f of formatSchema.options)console.log("Rendered:",await render(s,f,project?{...project,format:f}:undefined));
}
main().catch(e=>{console.error(e);process.exitCode=1});
