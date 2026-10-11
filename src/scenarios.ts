import {defineScenario} from "./core";
export const scenarios={
 fixture:defineScenario({id:"fixture",title:"Tilo en action",actions:[
 {type:"navigate",path:"/"},{type:"wait",ms:500},{type:"click",selector:"#demo-button"},{type:"wait",ms:1200}
 ],video:{duration:5,intro:"Découvrez Tilo",outro:"Apprendre autrement"}}),
 "moon-phases":defineScenario({id:"moon-phases",title:"Les phases de la Lune",actions:[
 {type:"navigate",path:"/demo/moon-phases"},{type:"wait",ms:1200}
 ],video:{duration:8,intro:"Explorer la Lune en 3D",outro:"Découvrez Tilo"}})
};
export type ScenarioName=keyof typeof scenarios;
