"use client";
import type {ReactElement,ReactNode} from "react";
import * as RadixTooltip from "@radix-ui/react-tooltip";
type Props={content:ReactNode;children:ReactElement;side?:"top"|"bottom"|"left"|"right"};
export function Tooltip({content,children,side="top"}:Props){
 return <RadixTooltip.Provider delayDuration={250}><RadixTooltip.Root><RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger><RadixTooltip.Portal><RadixTooltip.Content side={side} sideOffset={8} className="tilo-tooltip">{content}<RadixTooltip.Arrow className="tilo-tooltip-arrow"/></RadixTooltip.Content></RadixTooltip.Portal></RadixTooltip.Root></RadixTooltip.Provider>;
}
