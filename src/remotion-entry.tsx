import React from "react";
import {Composition,registerRoot} from "remotion";
import {Promo,type Props} from "./composition";
const Root=()=> <Composition id="TiloPromo" component={Promo} fps={30} durationInFrames={150} width={1920} height={1080} defaultProps={{src:"",title:"Tilo",intro:"",outro:"",zoom:1.06} satisfies Props}/>;
registerRoot(Root);
