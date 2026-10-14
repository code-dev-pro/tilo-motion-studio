(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/@remotion+player@4.0.535_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/@remotion/player/dist/esm/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Player",
    ()=>Player,
    "PlayerInternals",
    ()=>PlayerInternals,
    "Thumbnail",
    ()=>Thumbnail
]);
// src/_check-rsc.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.7_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// src/icons.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.7_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
// src/calculate-scale.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/remotion@4.0.535_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/remotion/dist/esm/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$no$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/remotion@4.0.535_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/remotion/dist/esm/no-react.mjs [app-client] (ecmascript)");
"use client";
;
if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"] !== "function") {
    const err = [
        'Remotion requires React.createContext, but it is "undefined".',
        'If you are in a React Server Component, turn it into a client component by adding "use client" at the top of the file.',
        "",
        "Before:",
        '  import {Player} from "@remotion/player";',
        "",
        "After:",
        '  "use client";',
        '  import {Player} from "@remotion/player";'
    ];
    throw new Error(err.join(`
`));
}
;
var ICON_SIZE = 25;
var fullscreenIconSize = 16;
var PlayIcon = ()=>{
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("svg", {
        width: ICON_SIZE,
        height: ICON_SIZE,
        viewBox: "0 0 25 25",
        fill: "none",
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
            d: "M8 6.375C7.40904 8.17576 7.06921 10.2486 7.01438 12.3871C6.95955 14.5255 7.19163 16.6547 7.6875 18.5625C9.95364 18.2995 12.116 17.6164 14.009 16.5655C15.902 15.5147 17.4755 14.124 18.6088 12.5C17.5158 10.8949 15.9949 9.51103 14.1585 8.45082C12.3222 7.3906 10.2174 6.68116 8 6.375Z",
            fill: "white",
            stroke: "white",
            strokeWidth: "6.25",
            strokeLinejoin: "round"
        })
    });
};
var PauseIcon = ()=>{
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("svg", {
        viewBox: "0 0 100 100",
        width: ICON_SIZE,
        height: ICON_SIZE,
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("rect", {
                x: "25",
                y: "20",
                width: "20",
                height: "60",
                fill: "#fff",
                ry: "5",
                rx: "5"
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("rect", {
                x: "55",
                y: "20",
                width: "20",
                height: "60",
                fill: "#fff",
                ry: "5",
                rx: "5"
            })
        ]
    });
};
var FullscreenIcon = ({ isFullscreen })=>{
    const strokeWidth = 6;
    const viewSize = 32;
    const out = isFullscreen ? 0 : strokeWidth / 2;
    const middleInset = isFullscreen ? strokeWidth * 1.6 : strokeWidth / 2;
    const inset = isFullscreen ? strokeWidth * 1.6 : strokeWidth * 2;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("svg", {
        viewBox: `0 0 ${viewSize} ${viewSize}`,
        height: fullscreenIconSize,
        width: fullscreenIconSize,
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
                d: `
				M ${out} ${inset}
				L ${middleInset} ${middleInset}
				L ${inset} ${out}
				`,
                stroke: "#fff",
                strokeWidth,
                fill: "none"
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
                d: `
				M ${viewSize - out} ${inset}
				L ${viewSize - middleInset} ${middleInset}
				L ${viewSize - inset} ${out}
				`,
                stroke: "#fff",
                strokeWidth,
                fill: "none"
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
                d: `
				M ${out} ${viewSize - inset}
				L ${middleInset} ${viewSize - middleInset}
				L ${inset} ${viewSize - out}
				`,
                stroke: "#fff",
                strokeWidth,
                fill: "none"
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
                d: `
				M ${viewSize - out} ${viewSize - inset}
				L ${viewSize - middleInset} ${viewSize - middleInset}
				L ${viewSize - inset} ${viewSize - out}
				`,
                stroke: "#fff",
                strokeWidth,
                fill: "none"
            })
        ]
    });
};
var VolumeOffIcon = ()=>{
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("svg", {
        width: ICON_SIZE,
        height: ICON_SIZE,
        viewBox: "0 0 24 24",
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
            d: "M3.63 3.63a.996.996 0 000 1.41L7.29 8.7 7 9H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71v-4.17l4.18 4.18c-.49.37-1.02.68-1.6.91-.36.15-.58.53-.58.92 0 .72.73 1.18 1.39.91.8-.33 1.55-.77 2.22-1.31l1.34 1.34a.996.996 0 101.41-1.41L5.05 3.63c-.39-.39-1.02-.39-1.42 0zM19 12c0 .82-.15 1.61-.41 2.34l1.53 1.53c.56-1.17.88-2.48.88-3.87 0-3.83-2.4-7.11-5.78-8.4-.59-.23-1.22.23-1.22.86v.19c0 .38.25.71.61.85C17.18 6.54 19 9.06 19 12zm-8.71-6.29l-.17.17L12 7.76V6.41c0-.89-1.08-1.33-1.71-.7zM16.5 12A4.5 4.5 0 0014 7.97v1.79l2.48 2.48c.01-.08.02-.16.02-.24z",
            fill: "#fff"
        })
    });
};
var VolumeOnIcon = ()=>{
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("svg", {
        width: ICON_SIZE,
        height: ICON_SIZE,
        viewBox: "0 0 24 24",
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
            d: "M3 10v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71V6.41c0-.89-1.08-1.34-1.71-.71L7 9H4c-.55 0-1 .45-1 1zm13.5 2A4.5 4.5 0 0014 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 4.45v.2c0 .38.25.71.6.85C17.18 6.53 19 9.06 19 12s-1.82 5.47-4.4 6.5c-.36.14-.6.47-.6.85v.2c0 .63.63 1.07 1.21.85C18.6 19.11 21 15.84 21 12s-2.4-7.11-5.79-8.4c-.58-.23-1.21.22-1.21.85z",
            fill: "#fff"
        })
    });
};
;
var className = "__remotion_buffering_indicator";
var remotionBufferingAnimation = "__remotion_buffering_animation";
var playerStyle = {
    width: ICON_SIZE,
    height: ICON_SIZE,
    overflow: "hidden",
    lineHeight: "normal",
    fontSize: "inherit"
};
var studioStyle = {
    width: 14,
    height: 14,
    overflow: "hidden",
    lineHeight: "normal",
    fontSize: "inherit"
};
var BufferingIndicator = ({ type, color = "white" })=>{
    const style = type === "player" ? playerStyle : studioStyle;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("style", {
                type: "text/css",
                children: `
				@keyframes ${remotionBufferingAnimation} {
          0% {
            rotate: 0deg;
          }
          100% {
            rotate: 360deg;
          }
        }
        
        .${className} {
            animation: ${remotionBufferingAnimation} 1s linear infinite;
        }        
			`
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                style,
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("svg", {
                    viewBox: type === "player" ? "0 0 22 22" : "0 0 18 18",
                    style,
                    className,
                    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
                        d: type === "player" ? "M 11 4 A 7 7 0 0 1 15.1145 16.66312" : "M 9 2 A 7 7 0 0 1 13.1145 14.66312",
                        stroke: color,
                        strokeLinecap: "round",
                        fill: "none",
                        strokeWidth: 3
                    })
                })
            })
        ]
    });
};
;
// src/utils/calculate-player-size.ts
var calculatePlayerSize = ({ currentSize, width, height, compositionWidth, compositionHeight })=>{
    if (width !== undefined && height === undefined) {
        return {
            aspectRatio: [
                compositionWidth,
                compositionHeight
            ].join("/")
        };
    }
    if (height !== undefined && width === undefined) {
        return {
            aspectRatio: [
                compositionWidth,
                compositionHeight
            ].join("/")
        };
    }
    if (!currentSize) {
        return {
            width: compositionWidth,
            height: compositionHeight
        };
    }
    return {
        width: compositionWidth,
        height: compositionHeight
    };
};
// src/calculate-scale.ts
var calculateCanvasTransformation = ({ previewSize, compositionWidth, compositionHeight, canvasSize })=>{
    const scale = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Internals"].calculateScale({
        canvasSize,
        compositionHeight,
        compositionWidth,
        previewSize
    });
    const correction = 0 - (1 - scale) / 2;
    const xCorrection = correction * compositionWidth;
    const yCorrection = correction * compositionHeight;
    const width = compositionWidth * scale;
    const height = compositionHeight * scale;
    const centerX = canvasSize.width / 2 - width / 2;
    const centerY = canvasSize.height / 2 - height / 2;
    return {
        centerX,
        centerY,
        xCorrection,
        yCorrection,
        scale
    };
};
var calculateOuterStyle = ({ config, style, canvasSize, overflowVisible, layout })=>{
    if (!config) {
        return {};
    }
    return {
        position: "relative",
        overflow: overflowVisible ? "visible" : "hidden",
        ...calculatePlayerSize({
            compositionHeight: config.height,
            compositionWidth: config.width,
            currentSize: canvasSize,
            height: style?.height,
            width: style?.width
        }),
        opacity: layout ? 1 : 0,
        ...style
    };
};
var calculateContainerStyle = ({ config, layout, scale, overflowVisible })=>{
    if (!config) {
        return {};
    }
    if (!layout) {
        return {
            position: "absolute",
            width: config.width,
            height: config.height,
            display: "flex",
            transform: `scale(${scale})`,
            overflow: overflowVisible ? "visible" : "hidden"
        };
    }
    return {
        position: "absolute",
        width: config.width,
        height: config.height,
        display: "flex",
        transform: `scale(${scale})`,
        marginLeft: layout.xCorrection,
        marginTop: layout.yCorrection,
        overflow: overflowVisible ? "visible" : "hidden"
    };
};
var calculateOuter = ({ layout, scale, config, overflowVisible })=>{
    if (!config) {
        return {};
    }
    if (!layout) {
        return {
            width: config.width * scale,
            height: config.height * scale,
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            overflow: overflowVisible ? "visible" : "hidden"
        };
    }
    const { centerX, centerY } = layout;
    return {
        width: config.width * scale,
        height: config.height * scale,
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        left: centerX,
        top: centerY,
        overflow: overflowVisible ? "visible" : "hidden"
    };
};
;
var CanvasOverlayContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
var CanvasContentContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
;
var PlayerEventEmitterContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext(undefined);
var ThumbnailEmitterContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext(undefined);
;
// src/event-emitter.ts
class PlayerEmitter {
    listeners = {
        ended: [],
        error: [],
        pause: [],
        play: [],
        ratechange: [],
        scalechange: [],
        seeked: [],
        timeupdate: [],
        frameupdate: [],
        fullscreenchange: [],
        volumechange: [],
        mutechange: [],
        waiting: [],
        resume: []
    };
    addEventListener(name, callback) {
        this.listeners[name].push(callback);
    }
    removeEventListener(name, callback) {
        this.listeners[name] = this.listeners[name].filter((l)=>l !== callback);
    }
    dispatchEvent(dispatchName, context) {
        this.listeners[dispatchName].forEach((callback)=>{
            callback({
                detail: context
            });
        });
    }
    dispatchSeek = (frame)=>{
        this.dispatchEvent("seeked", {
            frame
        });
    };
    dispatchVolumeChange = (volume)=>{
        this.dispatchEvent("volumechange", {
            volume
        });
    };
    dispatchPause = ()=>{
        this.dispatchEvent("pause", undefined);
    };
    dispatchPlay = ()=>{
        this.dispatchEvent("play", undefined);
    };
    dispatchEnded = ()=>{
        this.dispatchEvent("ended", undefined);
    };
    dispatchRateChange = (playbackRate)=>{
        this.dispatchEvent("ratechange", {
            playbackRate
        });
    };
    dispatchScaleChange = (scale)=>{
        this.dispatchEvent("scalechange", {
            scale
        });
    };
    dispatchError = (error)=>{
        this.dispatchEvent("error", {
            error
        });
    };
    dispatchTimeUpdate = (event)=>{
        this.dispatchEvent("timeupdate", event);
    };
    dispatchFrameUpdate = (event)=>{
        this.dispatchEvent("frameupdate", event);
    };
    dispatchFullscreenChange = (event)=>{
        this.dispatchEvent("fullscreenchange", event);
    };
    dispatchMuteChange = (event)=>{
        this.dispatchEvent("mutechange", event);
    };
    dispatchWaiting = (event)=>{
        this.dispatchEvent("waiting", event);
    };
    dispatchResume = (event)=>{
        this.dispatchEvent("resume", event);
    };
}
class ThumbnailEmitter {
    listeners = {
        error: [],
        waiting: [],
        resume: []
    };
    addEventListener(name, callback) {
        this.listeners[name].push(callback);
    }
    removeEventListener(name, callback) {
        this.listeners[name] = this.listeners[name].filter((l)=>l !== callback);
    }
    dispatchEvent(dispatchName, context) {
        this.listeners[dispatchName].forEach((callback)=>{
            callback({
                detail: context
            });
        });
    }
    dispatchError = (error)=>{
        this.dispatchEvent("error", {
            error
        });
    };
    dispatchWaiting = (event)=>{
        this.dispatchEvent("waiting", event);
    };
    dispatchResume = (event)=>{
        this.dispatchEvent("resume", event);
    };
}
;
;
var useBufferStateEmitter = (emitter)=>{
    const { subscribeBuffering } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Internals"].SetTimelineContext);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "useBufferStateEmitter.useLayoutEffect": ()=>{
            return subscribeBuffering({
                "useBufferStateEmitter.useLayoutEffect": (state)=>{
                    if (state.buffering) {
                        emitter.dispatchWaiting({});
                    } else {
                        emitter.dispatchResume({});
                    }
                }
            }["useBufferStateEmitter.useLayoutEffect"]);
        }
    }["useBufferStateEmitter.useLayoutEffect"], [
        emitter,
        subscribeBuffering
    ]);
};
;
var PlayerEmitterProvider = ({ children, currentPlaybackRate })=>{
    const [emitter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "PlayerEmitterProvider.useState": ()=>new PlayerEmitter
    }["PlayerEmitterProvider.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PlayerEmitterProvider.useEffect": ()=>{
            if (currentPlaybackRate) {
                emitter.dispatchRateChange(currentPlaybackRate);
            }
        }
    }["PlayerEmitterProvider.useEffect"], [
        emitter,
        currentPlaybackRate
    ]);
    useBufferStateEmitter(emitter);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(PlayerEventEmitterContext.Provider, {
        value: emitter,
        children
    });
};
;
var TimelineSequenceObserverContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext(null);
;
var useHoverState = (ref, hideControlsWhenPointerDoesntMove)=>{
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useHoverState.useEffect2": ()=>{
            const { current } = ref;
            if (!current) {
                return;
            }
            let hoverTimeout;
            const addHoverTimeout = {
                "useHoverState.useEffect2.addHoverTimeout": ()=>{
                    if (hideControlsWhenPointerDoesntMove) {
                        clearTimeout(hoverTimeout);
                        hoverTimeout = setTimeout({
                            "useHoverState.useEffect2.addHoverTimeout": ()=>{
                                setHovered(false);
                            }
                        }["useHoverState.useEffect2.addHoverTimeout"], hideControlsWhenPointerDoesntMove === true ? 3000 : hideControlsWhenPointerDoesntMove);
                    }
                }
            }["useHoverState.useEffect2.addHoverTimeout"];
            const onHover = {
                "useHoverState.useEffect2.onHover": ()=>{
                    setHovered(true);
                    addHoverTimeout();
                }
            }["useHoverState.useEffect2.onHover"];
            const onLeave = {
                "useHoverState.useEffect2.onLeave": ()=>{
                    setHovered(false);
                    clearTimeout(hoverTimeout);
                }
            }["useHoverState.useEffect2.onLeave"];
            const onMove = {
                "useHoverState.useEffect2.onMove": ()=>{
                    setHovered(true);
                    addHoverTimeout();
                }
            }["useHoverState.useEffect2.onMove"];
            current.addEventListener("mouseenter", onHover);
            current.addEventListener("mouseleave", onLeave);
            current.addEventListener("mousemove", onMove);
            return ({
                "useHoverState.useEffect2": ()=>{
                    current.removeEventListener("mouseenter", onHover);
                    current.removeEventListener("mouseleave", onLeave);
                    current.removeEventListener("mousemove", onMove);
                    clearTimeout(hoverTimeout);
                }
            })["useHoverState.useEffect2"];
        }
    }["useHoverState.useEffect2"], [
        hideControlsWhenPointerDoesntMove,
        ref
    ]);
    return hovered;
};
;
;
;
;
;
;
;
var usePlayerMethods = ()=>{
    const seekFrame = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Internals"].Timeline.useTimelineSeekFrame();
    const { setPlaying, frameRef, audioAndVideoTags, isPlaying: readIsPlaying, isBuffering } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Internals"].SetTimelineContext);
    const audioContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Internals"].SharedAudioContext);
    const audioTagsContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Internals"].SharedAudioTagsContext);
    const environment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRemotionEnvironment"])();
    const video = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Internals"].useVideo();
    const config = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Internals"].useUnsafeVideoConfig();
    const emitter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(PlayerEventEmitterContext);
    const playStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const fallbackFrame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const nextPlayIsAutoPlayAttempt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    if (!emitter) {
        throw new TypeError("Expected Player event emitter context");
    }
    const getCurrentFrame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePlayerMethods.useCallback[getCurrentFrame]": ()=>{
            if (!video) {
                return fallbackFrame.current ?? (typeof window === "undefined" ? 0 : window.remotion_initialFrame ?? 0);
            }
            const unclamped = frameRef.current[video.id] ?? (environment.isPlayer ? 0 : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Internals"].Timeline.getFrameForComposition(video.id));
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Internals"].Timeline.clampFrameToCompositionRange(unclamped, video.durationInFrames);
        }
    }["usePlayerMethods.useCallback[getCurrentFrame]"], [
        environment.isPlayer,
        frameRef,
        video
    ]);
    const seek = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePlayerMethods.useCallback[seek]": (newFrame)=>{
            const frameToSeekTo = config ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Internals"].TimelinePosition.clampFrameToCompositionRange(newFrame, config.durationInFrames) : Math.max(0, newFrame);
            fallbackFrame.current = frameToSeekTo;
            if (video?.id) {
                seekFrame({
                    "usePlayerMethods.useCallback[seek]": (currentFrames)=>currentFrames[video.id] === frameToSeekTo ? currentFrames : {
                            ...currentFrames,
                            [video.id]: frameToSeekTo
                        }
                }["usePlayerMethods.useCallback[seek]"]);
                if (frameRef.current[video.id] !== frameToSeekTo) {
                    frameRef.current = {
                        ...frameRef.current,
                        [video.id]: frameToSeekTo
                    };
                }
            }
            emitter.dispatchSeek(frameToSeekTo);
        }
    }["usePlayerMethods.useCallback[seek]"], [
        config,
        emitter,
        frameRef,
        seekFrame,
        video?.id
    ]);
    const play = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePlayerMethods.useCallback[play]": (e)=>{
            const isAutoPlayAttempt = nextPlayIsAutoPlayAttempt.current;
            nextPlayIsAutoPlayAttempt.current = false;
            if (readIsPlaying()) {
                return;
            }
            const lastFrameForPlayback = (config?.durationInFrames ?? 1) - 1;
            if (getCurrentFrame() === lastFrameForPlayback) {
                seek(0);
            }
            if (isAutoPlayAttempt) {
                audioContext?.resumeAsAutoPlay();
            } else {
                audioContext?.resume();
            }
            if (audioTagsContext && audioTagsContext.numberOfAudioTags > 0 && e) {
                audioTagsContext.playAllAudios();
            }
            audioAndVideoTags.current.forEach({
                "usePlayerMethods.useCallback[play]": (tag)=>tag.play("player play() was called and playing audio from a click")
            }["usePlayerMethods.useCallback[play]"]);
            setPlaying(true);
            playStart.current = getCurrentFrame();
            emitter.dispatchPlay();
        }
    }["usePlayerMethods.useCallback[play]"], [
        audioAndVideoTags,
        audioContext,
        audioTagsContext,
        config?.durationInFrames,
        emitter,
        getCurrentFrame,
        readIsPlaying,
        seek,
        setPlaying
    ]);
    const playAsAutoPlay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePlayerMethods.useCallback[playAsAutoPlay]": ()=>{
            nextPlayIsAutoPlayAttempt.current = true;
            play();
        }
    }["usePlayerMethods.useCallback[playAsAutoPlay]"], [
        play
    ]);
    const pause = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePlayerMethods.useCallback[pause]": ()=>{
            if (readIsPlaying()) {
                setPlaying(false);
                emitter.dispatchPause();
                audioContext?.suspend();
            }
        }
    }["usePlayerMethods.useCallback[pause]"], [
        audioContext,
        emitter,
        readIsPlaying,
        setPlaying
    ]);
    const pauseAndReturnToPlayStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePlayerMethods.useCallback[pauseAndReturnToPlayStart]": ()=>{
            if (readIsPlaying()) {
                setPlaying(false);
                fallbackFrame.current = playStart.current;
                if (config) {
                    seekFrame({
                        "usePlayerMethods.useCallback[pauseAndReturnToPlayStart]": (currentFrames)=>({
                                ...currentFrames,
                                [config.id]: playStart.current
                            })
                    }["usePlayerMethods.useCallback[pauseAndReturnToPlayStart]"]);
                    frameRef.current = {
                        ...frameRef.current,
                        [config.id]: playStart.current
                    };
                    emitter.dispatchPause();
                }
            }
        }
    }["usePlayerMethods.useCallback[pauseAndReturnToPlayStart]"], [
        config,
        emitter,
        frameRef,
        readIsPlaying,
        setPlaying,
        seekFrame
    ]);
    const videoId = video?.id;
    const lastFrame = (config?.durationInFrames ?? 1) - 1;
    const frameBack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePlayerMethods.useCallback[frameBack]": (frames)=>{
            if (!videoId) {
                return null;
            }
            if (readIsPlaying()) {
                return;
            }
            const previousFrame = frameRef.current[videoId] ?? window.remotion_initialFrame ?? 0;
            const newFrame = Math.max(0, previousFrame - frames);
            if (previousFrame === newFrame) {
                return;
            }
            seekFrame({
                "usePlayerMethods.useCallback[frameBack]": (currentFrames)=>currentFrames[videoId] === newFrame ? currentFrames : {
                        ...currentFrames,
                        [videoId]: newFrame
                    }
            }["usePlayerMethods.useCallback[frameBack]"]);
            frameRef.current = {
                ...frameRef.current,
                [videoId]: newFrame
            };
        }
    }["usePlayerMethods.useCallback[frameBack]"], [
        frameRef,
        readIsPlaying,
        seekFrame,
        videoId
    ]);
    const frameForward = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePlayerMethods.useCallback[frameForward]": (frames)=>{
            if (!videoId) {
                return null;
            }
            if (readIsPlaying()) {
                return;
            }
            const previousFrame = frameRef.current[videoId] ?? window.remotion_initialFrame ?? 0;
            const newFrame = Math.min(lastFrame, previousFrame + frames);
            if (previousFrame === newFrame) {
                return;
            }
            seekFrame({
                "usePlayerMethods.useCallback[frameForward]": (currentFrames)=>currentFrames[videoId] === newFrame ? currentFrames : {
                        ...currentFrames,
                        [videoId]: newFrame
                    }
            }["usePlayerMethods.useCallback[frameForward]"]);
            frameRef.current = {
                ...frameRef.current,
                [videoId]: newFrame
            };
        }
    }["usePlayerMethods.useCallback[frameForward]"], [
        frameRef,
        lastFrame,
        readIsPlaying,
        seekFrame,
        videoId
    ]);
    const toggle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePlayerMethods.useCallback[toggle]": (e)=>{
            if (readIsPlaying()) {
                pause();
            } else {
                play(e);
            }
        }
    }["usePlayerMethods.useCallback[toggle]"], [
        pause,
        play,
        readIsPlaying
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "usePlayerMethods.useMemo": ()=>{
            return {
                frameBack,
                frameForward,
                emitter,
                play,
                playAsAutoPlay,
                pause,
                seek,
                getCurrentFrame,
                isPlaying: readIsPlaying,
                isBuffering,
                pauseAndReturnToPlayStart,
                toggle
            };
        }
    }["usePlayerMethods.useMemo"], [
        emitter,
        frameBack,
        frameForward,
        getCurrentFrame,
        readIsPlaying,
        pause,
        pauseAndReturnToPlayStart,
        play,
        playAsAutoPlay,
        isBuffering,
        seek,
        toggle
    ]);
};
// src/browser-mediasession.ts
var useBrowserMediaSession = ({ browserMediaControlsBehavior, videoConfig, playbackRate })=>{
    const playing = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Internals"].usePlaying();
    const { pause, play, emitter, getCurrentFrame, seek } = usePlayerMethods();
    const hasEverPlayed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useBrowserMediaSession.useEffect3": ()=>{
            if (playing) {
                hasEverPlayed.current = true;
            }
            if (!navigator.mediaSession) {
                return;
            }
            if (browserMediaControlsBehavior.mode === "do-nothing") {
                return;
            }
            if (playing) {
                navigator.mediaSession.playbackState = "playing";
            } else if (hasEverPlayed.current) {
                navigator.mediaSession.playbackState = "paused";
            }
        }
    }["useBrowserMediaSession.useEffect3"], [
        browserMediaControlsBehavior.mode,
        playing
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useBrowserMediaSession.useEffect3": ()=>{
            if (!navigator.mediaSession) {
                return;
            }
            if (browserMediaControlsBehavior.mode === "do-nothing") {
                return;
            }
            const onTimeUpdate = {
                "useBrowserMediaSession.useEffect3.onTimeUpdate": ()=>{
                    if (!videoConfig) {
                        return;
                    }
                    if (navigator.mediaSession) {
                        navigator.mediaSession.setPositionState({
                            duration: videoConfig.durationInFrames / videoConfig.fps,
                            playbackRate,
                            position: getCurrentFrame() / videoConfig.fps
                        });
                    }
                }
            }["useBrowserMediaSession.useEffect3.onTimeUpdate"];
            emitter.addEventListener("timeupdate", onTimeUpdate);
            return ({
                "useBrowserMediaSession.useEffect3": ()=>{
                    emitter.removeEventListener("timeupdate", onTimeUpdate);
                }
            })["useBrowserMediaSession.useEffect3"];
        }
    }["useBrowserMediaSession.useEffect3"], [
        browserMediaControlsBehavior.mode,
        emitter,
        getCurrentFrame,
        playbackRate,
        videoConfig
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useBrowserMediaSession.useEffect3": ()=>{
            if (!navigator.mediaSession) {
                return;
            }
            if (browserMediaControlsBehavior.mode === "do-nothing") {
                return;
            }
            navigator.mediaSession.setActionHandler("play", {
                "useBrowserMediaSession.useEffect3": ()=>{
                    if (browserMediaControlsBehavior.mode === "register-media-session") {
                        play();
                    }
                }
            }["useBrowserMediaSession.useEffect3"]);
            navigator.mediaSession.setActionHandler("pause", {
                "useBrowserMediaSession.useEffect3": ()=>{
                    if (browserMediaControlsBehavior.mode === "register-media-session") {
                        pause();
                    }
                }
            }["useBrowserMediaSession.useEffect3"]);
            navigator.mediaSession.setActionHandler("seekto", {
                "useBrowserMediaSession.useEffect3": (event)=>{
                    if (browserMediaControlsBehavior.mode === "register-media-session" && event.seekTime !== undefined && videoConfig) {
                        seek(Math.round(event.seekTime * videoConfig.fps));
                    }
                }
            }["useBrowserMediaSession.useEffect3"]);
            navigator.mediaSession.setActionHandler("seekbackward", {
                "useBrowserMediaSession.useEffect3": ()=>{
                    if (browserMediaControlsBehavior.mode === "register-media-session" && videoConfig) {
                        seek(Math.max(0, Math.round((getCurrentFrame() - 10) * videoConfig.fps)));
                    }
                }
            }["useBrowserMediaSession.useEffect3"]);
            navigator.mediaSession.setActionHandler("seekforward", {
                "useBrowserMediaSession.useEffect3": ()=>{
                    if (browserMediaControlsBehavior.mode === "register-media-session" && videoConfig) {
                        seek(Math.max(videoConfig.durationInFrames - 1, Math.round((getCurrentFrame() + 10) * videoConfig.fps)));
                    }
                }
            }["useBrowserMediaSession.useEffect3"]);
            navigator.mediaSession.setActionHandler("previoustrack", {
                "useBrowserMediaSession.useEffect3": ()=>{
                    if (browserMediaControlsBehavior.mode === "register-media-session") {
                        seek(0);
                    }
                }
            }["useBrowserMediaSession.useEffect3"]);
            return ({
                "useBrowserMediaSession.useEffect3": ()=>{
                    navigator.mediaSession.metadata = null;
                    navigator.mediaSession.setActionHandler("play", null);
                    navigator.mediaSession.setActionHandler("pause", null);
                    navigator.mediaSession.setActionHandler("seekto", null);
                    navigator.mediaSession.setActionHandler("seekbackward", null);
                    navigator.mediaSession.setActionHandler("seekforward", null);
                    navigator.mediaSession.setActionHandler("previoustrack", null);
                }
            })["useBrowserMediaSession.useEffect3"];
        }
    }["useBrowserMediaSession.useEffect3"], [
        browserMediaControlsBehavior.mode,
        getCurrentFrame,
        pause,
        play,
        seek,
        videoConfig
    ]);
};
// src/calculate-next-frame.ts
var calculateNextFrame = ({ time, currentFrame: startFrame, playbackSpeed, fps, actualLastFrame, actualFirstFrame, framesAdvanced, shouldLoop })=>{
    const op = playbackSpeed < 0 ? Math.ceil : Math.floor;
    const framesToAdvance = op(time * playbackSpeed / (1000 / fps)) - framesAdvanced;
    const nextFrame = framesToAdvance + startFrame;
    const isCurrentFrameOutside = startFrame > actualLastFrame || startFrame < actualFirstFrame;
    const isNextFrameOutside = nextFrame > actualLastFrame || nextFrame < actualFirstFrame;
    const hasEnded = !shouldLoop && isNextFrameOutside && !isCurrentFrameOutside;
    if (playbackSpeed > 0) {
        if (isNextFrameOutside) {
            return {
                nextFrame: actualFirstFrame,
                framesToAdvance,
                hasEnded
            };
        }
        return {
            nextFrame,
            framesToAdvance,
            hasEnded
        };
    }
    if (isNextFrameOutside) {
        return {
            nextFrame: actualLastFrame,
            framesToAdvance,
            hasEnded
        };
    }
    return {
        nextFrame,
        framesToAdvance,
        hasEnded
    };
};
;
var getIsBackgrounded = ()=>{
    if (typeof document === "undefined") {
        return false;
    }
    return document.visibilityState === "hidden";
};
var useIsBackgrounded = ()=>{
    const isBackgrounded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(getIsBackgrounded());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useIsBackgrounded.useEffect4": ()=>{
            const onVisibilityChange = {
                "useIsBackgrounded.useEffect4.onVisibilityChange": ()=>{
                    isBackgrounded.current = getIsBackgrounded();
                }
            }["useIsBackgrounded.useEffect4.onVisibilityChange"];
            document.addEventListener("visibilitychange", onVisibilityChange);
            return ({
                "useIsBackgrounded.useEffect4": ()=>{
                    document.removeEventListener("visibilitychange", onVisibilityChange);
                }
            })["useIsBackgrounded.useEffect4"];
        }
    }["useIsBackgrounded.useEffect4"], []);
    return isBackgrounded;
};
;
var setGlobalTimeAnchor = ({ audioContext, audioSyncAnchor, absoluteTimeInSeconds, globalPlaybackRate, logLevel, force })=>{
    const newAnchor = audioContext.currentTime - absoluteTimeInSeconds / globalPlaybackRate;
    const shift = newAnchor - audioSyncAnchor.value;
    const tolerance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Internals"].getAudioSyncAnchorTolerance(audioContext);
    if (Math.abs(shift) < tolerance && !force) {
        return false;
    }
    if (Math.abs(shift) < Number.EPSILON) {
        return false;
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Internals"].Log.verbose({
        logLevel,
        tag: "audio-scheduling"
    }, "Anchor " + (force ? "forcibly " : "") + "changed from %s to %s with shift %s", audioSyncAnchor.value, newAnchor, shift);
    audioSyncAnchor.value = newAnchor;
    return true;
};
// src/use-playback.ts
var shouldForceAnchorChange = (newState)=>{
    if (newState === "suspended" || newState === "running-to-suspended") {
        return true;
    }
    if (newState === "closed" || newState === "interrupted" || newState === "running" || newState === "suspended-to-running") {
        return false;
    }
    throw new Error(`Unexpected audio context state: ${newState}`);
};
var usePlayback = ({ loop, playbackRate, moveToBeginningWhenEnded, inFrame, outFrame, browserMediaControlsBehavior, getCurrentFrame, muted })=>{
    const config = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Internals"].useUnsafeVideoConfig();
    const frame = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Internals"].Timeline.useTimelinePosition();
    const playing = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Internals"].usePlaying();
    const { pause, emitter, isPlaying } = usePlayerMethods();
    const setFrameFromPlayback = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Internals"].Timeline.useTimelineSetFrameWithoutSeek();
    const sharedAudioContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Internals"].SharedAudioContext);
    const { setPlayerMuted } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Internals"].SetMediaVolumeContext);
    const { isBuffering, subscribeBuffering } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Internals"].SetTimelineContext);
    const logLevel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Internals"].useLogLevel();
    const isBackgroundedRef = useIsBackgrounded();
    const lastTimeUpdateTimestamp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    useBrowserMediaSession({
        browserMediaControlsBehavior,
        playbackRate,
        videoConfig: config
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "usePlayback.useLayoutEffect2": ()=>{
            if (!sharedAudioContext) {
                return;
            }
            if (!sharedAudioContext.audioContext) {
                return;
            }
            if (!config) {
                return;
            }
            if (muted) {
                return;
            }
            const changed = setGlobalTimeAnchor({
                audioContext: sharedAudioContext.audioContext,
                audioSyncAnchor: sharedAudioContext.audioSyncAnchor,
                absoluteTimeInSeconds: frame / config.fps,
                globalPlaybackRate: playbackRate,
                logLevel,
                force: false
            });
            if (changed) {
                sharedAudioContext.audioSyncAnchorEmitter.dispatch("changed");
            }
        }
    }["usePlayback.useLayoutEffect2"], [
        config,
        frame,
        logLevel,
        playbackRate,
        sharedAudioContext,
        muted
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "usePlayback.useLayoutEffect2": ()=>{
            const audioContext = sharedAudioContext?.audioContext;
            if (!audioContext) {
                return;
            }
            if (!config) {
                return;
            }
            if (muted) {
                return;
            }
            const callback = {
                "usePlayback.useLayoutEffect2.callback": ()=>{
                    const newState = sharedAudioContext?.getAudioContextState();
                    if (newState && shouldForceAnchorChange(newState)) {
                        const changed = setGlobalTimeAnchor({
                            audioContext,
                            audioSyncAnchor: sharedAudioContext.audioSyncAnchor,
                            absoluteTimeInSeconds: getCurrentFrame() / config.fps,
                            globalPlaybackRate: playbackRate,
                            logLevel,
                            force: true
                        });
                        if (changed) {
                            sharedAudioContext.audioSyncAnchorEmitter.dispatch("changed");
                        }
                    }
                }
            }["usePlayback.useLayoutEffect2.callback"];
            audioContext?.addEventListener("statechange", callback);
            return ({
                "usePlayback.useLayoutEffect2": ()=>{
                    audioContext?.removeEventListener("statechange", callback);
                }
            })["usePlayback.useLayoutEffect2"];
        }
    }["usePlayback.useLayoutEffect2"], [
        config,
        getCurrentFrame,
        logLevel,
        muted,
        playbackRate,
        sharedAudioContext
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "usePlayback.useEffect5": ()=>{
            if (!config) {
                return;
            }
            if (!playing) {
                sharedAudioContext?.suspend?.();
                return;
            }
            if (sharedAudioContext?._experimentalKeepAudioContextAlive && sharedAudioContext.audioContext && !muted) {
                const changed = setGlobalTimeAnchor({
                    audioContext: sharedAudioContext.audioContext,
                    audioSyncAnchor: sharedAudioContext.audioSyncAnchor,
                    absoluteTimeInSeconds: getCurrentFrame() / config.fps,
                    globalPlaybackRate: playbackRate,
                    logLevel,
                    force: true
                });
                if (changed) {
                    sharedAudioContext.audioSyncAnchorEmitter.dispatch("changed");
                }
            }
            let hasBeenStopped = false;
            let audioContextFailed = false;
            let reqAnimFrameCall = null;
            let startedTime = performance.now();
            let framesAdvanced = 0;
            const cancelQueuedFrame = {
                "usePlayback.useEffect5.cancelQueuedFrame": ()=>{
                    if (reqAnimFrameCall !== null) {
                        if (reqAnimFrameCall.type === "raf") {
                            cancelAnimationFrame(reqAnimFrameCall.id);
                        } else {
                            clearTimeout(reqAnimFrameCall.id);
                        }
                    }
                }
            }["usePlayback.useEffect5.cancelQueuedFrame"];
            const stop = {
                "usePlayback.useEffect5.stop": ()=>{
                    hasBeenStopped = true;
                    cancelQueuedFrame();
                }
            }["usePlayback.useEffect5.stop"];
            const callback = {
                "usePlayback.useEffect5.callback": ()=>{
                    if (hasBeenStopped) {
                        return;
                    }
                    if (!isPlaying()) {
                        sharedAudioContext?.suspend?.();
                        return;
                    }
                    if (!muted && !audioContextFailed && !isBuffering()) {
                        sharedAudioContext?.resume?.();
                    }
                    const time = performance.now() - startedTime;
                    const actualLastFrame = outFrame ?? config.durationInFrames - 1;
                    const actualFirstFrame = inFrame ?? 0;
                    const currentFrame = getCurrentFrame();
                    const { nextFrame, framesToAdvance, hasEnded } = calculateNextFrame({
                        time,
                        currentFrame,
                        playbackSpeed: playbackRate,
                        fps: config.fps,
                        actualFirstFrame,
                        actualLastFrame,
                        framesAdvanced,
                        shouldLoop: loop
                    });
                    framesAdvanced += framesToAdvance;
                    const frameToDisplay = hasEnded && !moveToBeginningWhenEnded ? playbackRate > 0 ? actualLastFrame : actualFirstFrame : nextFrame;
                    if (frameToDisplay !== getCurrentFrame() && !isBuffering()) {
                        setFrameFromPlayback({
                            "usePlayback.useEffect5.callback": (c)=>({
                                    ...c,
                                    [config.id]: frameToDisplay
                                })
                        }["usePlayback.useEffect5.callback"]);
                    }
                    if (hasEnded) {
                        stop();
                        pause();
                        emitter.dispatchEnded();
                        return;
                    }
                    queueNextFrame();
                }
            }["usePlayback.useEffect5.callback"];
            const queueNextFrame = {
                "usePlayback.useEffect5.queueNextFrame": ()=>{
                    if (hasBeenStopped) {
                        return;
                    }
                    const getIsResumingAudioContext = audioContextFailed ? null : sharedAudioContext?.getIsResumingAudioContext?.() ?? null;
                    if (getIsResumingAudioContext !== null && !muted) {
                        getIsResumingAudioContext.then({
                            "usePlayback.useEffect5.queueNextFrame": (result)=>{
                                if (hasBeenStopped) {
                                    return;
                                }
                                if (result === "failed") {
                                    audioContextFailed = true;
                                    sharedAudioContext?.suspend();
                                    setPlayerMuted(true);
                                }
                                startedTime = performance.now();
                                framesAdvanced = 0;
                                queueNextFrame();
                            }
                        }["usePlayback.useEffect5.queueNextFrame"]);
                        return;
                    }
                    if (isBuffering()) {
                        if (!muted && !audioContextFailed) {
                            sharedAudioContext?.suspend?.();
                        }
                        const unsubscribe = subscribeBuffering({
                            "usePlayback.useEffect5.queueNextFrame.unsubscribe": (state)=>{
                                if (state.buffering) {
                                    return;
                                }
                                unsubscribe();
                                if (!muted && !audioContextFailed && sharedAudioContext?._experimentalKeepAudioContextAlive) {
                                    sharedAudioContext.resume();
                                }
                                startedTime = performance.now();
                                framesAdvanced = 0;
                                queueNextFrame();
                            }
                        }["usePlayback.useEffect5.queueNextFrame.unsubscribe"]);
                        return;
                    }
                    if (isBackgroundedRef.current) {
                        reqAnimFrameCall = {
                            type: "timeout",
                            id: setTimeout(callback, 1000 / config.fps)
                        };
                        return;
                    }
                    reqAnimFrameCall = {
                        type: "raf",
                        id: requestAnimationFrame(callback)
                    };
                }
            }["usePlayback.useEffect5.queueNextFrame"];
            queueNextFrame();
            const onVisibilityChange = {
                "usePlayback.useEffect5.onVisibilityChange": ()=>{
                    if (document.visibilityState === "visible") {
                        return;
                    }
                    cancelQueuedFrame();
                    callback();
                }
            }["usePlayback.useEffect5.onVisibilityChange"];
            window.addEventListener("visibilitychange", onVisibilityChange);
            return ({
                "usePlayback.useEffect5": ()=>{
                    window.removeEventListener("visibilitychange", onVisibilityChange);
                    stop();
                }
            })["usePlayback.useEffect5"];
        }
    }["usePlayback.useEffect5"], [
        config,
        loop,
        pause,
        playing,
        setFrameFromPlayback,
        emitter,
        playbackRate,
        inFrame,
        outFrame,
        moveToBeginningWhenEnded,
        isBackgroundedRef,
        getCurrentFrame,
        isBuffering,
        isPlaying,
        sharedAudioContext,
        setPlayerMuted,
        subscribeBuffering,
        logLevel,
        muted
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "usePlayback.useEffect5": ()=>{
            const now = performance.now();
            const timeSinceLastUpdate = now - lastTimeUpdateTimestamp.current;
            if (timeSinceLastUpdate >= 250) {
                emitter.dispatchTimeUpdate({
                    frame
                });
                lastTimeUpdateTimestamp.current = now;
                return;
            }
            const timeoutId = setTimeout({
                "usePlayback.useEffect5.timeoutId": ()=>{
                    emitter.dispatchTimeUpdate({
                        frame
                    });
                    lastTimeUpdateTimestamp.current = performance.now();
                }
            }["usePlayback.useEffect5.timeoutId"], 250 - timeSinceLastUpdate);
            return ({
                "usePlayback.useEffect5": ()=>clearTimeout(timeoutId)
            })["usePlayback.useEffect5"];
        }
    }["usePlayback.useEffect5"], [
        emitter,
        frame
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "usePlayback.useEffect5": ()=>{
            emitter.dispatchFrameUpdate({
                frame
            });
        }
    }["usePlayback.useEffect5"], [
        emitter,
        frame
    ]);
};
;
var elementSizeHooks = [];
var updateAllElementsSizes = ()=>{
    for (const listener of elementSizeHooks){
        listener();
    }
};
var getElement = (source)=>{
    if (!source) {
        return null;
    }
    if ("current" in source) {
        return source.current;
    }
    return source;
};
var useElementSize = (source, options)=>{
    const [size, setSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useElementSize.useState3": ()=>{
            const element = getElement(source);
            if (!element) {
                return null;
            }
            const rect = element.getClientRects();
            if (!rect[0]) {
                return null;
            }
            return {
                width: rect[0].width,
                height: rect[0].height,
                left: rect[0].x,
                top: rect[0].y,
                windowSize: {
                    height: window.innerHeight,
                    width: window.innerWidth
                }
            };
        }
    }["useElementSize.useState3"]);
    const observer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useElementSize.useMemo2[observer]": ()=>{
            if (typeof ResizeObserver === "undefined") {
                return null;
            }
            return new ResizeObserver({
                "useElementSize.useMemo2[observer]": (entries)=>{
                    const { contentRect, target } = entries[0];
                    const newSize = target.getClientRects();
                    if (!newSize?.[0]) {
                        setSize(null);
                        return;
                    }
                    const probableCssParentScaleX = contentRect.width === 0 ? 1 : newSize[0].width / contentRect.width;
                    const probableCssParentScaleY = contentRect.height === 0 ? 1 : newSize[0].height / contentRect.height;
                    const width = options.shouldApplyCssTransforms || probableCssParentScaleX === 0 ? newSize[0].width : newSize[0].width * (1 / probableCssParentScaleX);
                    const height = options.shouldApplyCssTransforms || probableCssParentScaleY === 0 ? newSize[0].height : newSize[0].height * (1 / probableCssParentScaleY);
                    setSize({
                        "useElementSize.useMemo2[observer]": (prevState)=>{
                            const isSame = prevState && prevState.width === width && prevState.height === height && prevState.left === newSize[0].x && prevState.top === newSize[0].y && prevState.windowSize.height === window.innerHeight && prevState.windowSize.width === window.innerWidth;
                            if (isSame) {
                                return prevState;
                            }
                            return {
                                width,
                                height,
                                left: newSize[0].x,
                                top: newSize[0].y,
                                windowSize: {
                                    height: window.innerHeight,
                                    width: window.innerWidth
                                }
                            };
                        }
                    }["useElementSize.useMemo2[observer]"]);
                }
            }["useElementSize.useMemo2[observer]"]);
        }
    }["useElementSize.useMemo2[observer]"], [
        options.shouldApplyCssTransforms
    ]);
    const updateSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useElementSize.useCallback2[updateSize]": ()=>{
            const element = getElement(source);
            if (!element) {
                return;
            }
            const rect = element.getClientRects();
            if (!rect[0]) {
                setSize(null);
                return;
            }
            setSize({
                "useElementSize.useCallback2[updateSize]": (prevState)=>{
                    const isSame = prevState && prevState.width === rect[0].width && prevState.height === rect[0].height && prevState.left === rect[0].x && prevState.top === rect[0].y && prevState.windowSize.height === window.innerHeight && prevState.windowSize.width === window.innerWidth;
                    if (isSame) {
                        return prevState;
                    }
                    return {
                        width: rect[0].width,
                        height: rect[0].height,
                        left: rect[0].x,
                        top: rect[0].y,
                        windowSize: {
                            height: window.innerHeight,
                            width: window.innerWidth
                        }
                    };
                }
            }["useElementSize.useCallback2[updateSize]"]);
        }
    }["useElementSize.useCallback2[updateSize]"], [
        source
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useElementSize.useEffect6": ()=>{
            updateSize();
        }
    }["useElementSize.useEffect6"], [
        updateSize
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useElementSize.useEffect6": ()=>{
            if (!observer) {
                return;
            }
            const element = getElement(source);
            if (element) {
                observer.observe(element);
            }
            return ({
                "useElementSize.useEffect6": ()=>{
                    if (element) {
                        observer.unobserve(element);
                    }
                }
            })["useElementSize.useEffect6"];
        }
    }["useElementSize.useEffect6"], [
        observer,
        source
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useElementSize.useEffect6": ()=>{
            if (!options.triggerOnWindowResize) {
                return;
            }
            window.addEventListener("resize", updateSize);
            return ({
                "useElementSize.useEffect6": ()=>{
                    window.removeEventListener("resize", updateSize);
                }
            })["useElementSize.useEffect6"];
        }
    }["useElementSize.useEffect6"], [
        options.triggerOnWindowResize,
        updateSize
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useElementSize.useEffect6": ()=>{
            elementSizeHooks.push(updateSize);
            return ({
                "useElementSize.useEffect6": ()=>{
                    elementSizeHooks = elementSizeHooks.filter({
                        "useElementSize.useEffect6": (e)=>e !== updateSize
                    }["useElementSize.useEffect6"]);
                }
            })["useElementSize.useEffect6"];
        }
    }["useElementSize.useEffect6"], [
        updateSize
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useElementSize.useMemo2": ()=>{
            if (!size) {
                return null;
            }
            return {
                ...size,
                refresh: updateSize
            };
        }
    }["useElementSize.useMemo2"], [
        size,
        updateSize
    ]);
};
;
;
;
// src/player-css-classname.ts
var playerCssClassname = (override)=>{
    return override ?? "__remotion-player";
};
;
;
;
;
var errorStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    height: "100%",
    width: "100%"
};
class ErrorBoundary extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Component {
    state = {
        hasError: null
    };
    static getDerivedStateFromError(error) {
        return {
            hasError: error
        };
    }
    componentDidCatch(error) {
        this.props.onError(error);
    }
    render() {
        if (this.state.hasError) {
            return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                style: errorStyle,
                children: this.props.errorFallback({
                    error: this.state.hasError
                })
            });
        }
        return this.props.children;
    }
}
;
;
var getHashOfDomain = async ()=>{
    if (typeof window === "undefined") {
        return null;
    }
    if (typeof window.crypto === "undefined") {
        return null;
    }
    if (typeof window.crypto.subtle === "undefined") {
        return null;
    }
    try {
        const hashBuffer = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(window.location.hostname));
        return Array.from(new Uint8Array(hashBuffer)).map((b)=>b.toString(16).padStart(2, "0")).join("");
    } catch  {
        return null;
    }
};
var style = {
    backgroundColor: "red",
    position: "absolute",
    padding: 12,
    fontFamily: "Arial"
};
var DOMAIN_BLACKLIST = [
    "28d262b44cc61fa750f1686b16ad0604dabfe193fbc263eec05c89b7ad4c2cd6",
    "4db1b0a94be33165dfefcb3ba03d04c7a2666dd27c496d3dc9fa41858e94925e",
    "fbc48530bbf245da790f63675e84e06bab38c3b114fab07eb350025119922bdc",
    "7baf10a8932757b1b3a22b3fce10a048747ac2f8eaf638603487e3705b07eb83",
    "8a6c21a598d8c667272b5207c051b85997bf5b45d5fb712378be3f27cd72c6a6",
    "a2f7aaac9c50a9255e7fc376110c4e0bfe153722dc66ed3c5d3bf2a135f65518"
];
var ran = false;
var RenderWarningIfBlacklist = ()=>{
    const [unlicensed, setUnlicensed] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RenderWarningIfBlacklist.useEffect7": ()=>{
            if (ran) {
                return;
            }
            ran = true;
            getHashOfDomain().then({
                "RenderWarningIfBlacklist.useEffect7": (hash)=>{
                    if (hash && DOMAIN_BLACKLIST.includes(hash)) {
                        setUnlicensed(true);
                    }
                }
            }["RenderWarningIfBlacklist.useEffect7"]).catch({
                "RenderWarningIfBlacklist.useEffect7": ()=>{}
            }["RenderWarningIfBlacklist.useEffect7"]);
        }
    }["RenderWarningIfBlacklist.useEffect7"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RenderWarningIfBlacklist.useEffect7": ()=>{
            if (!unlicensed) {
                return;
            }
            const ensureBanner = {
                "RenderWarningIfBlacklist.useEffect7.ensureBanner": ()=>{
                    const banner = document.querySelector(".warning-banner");
                    if (!banner) {
                        const div = document.createElement("div");
                        div.className = "warning-banner";
                        Object.assign(div.style, style, {
                            zIndex: "9999",
                            cssText: `${style.cssText} !important;`
                        });
                        div.innerHTML = `
	        <a href="https://github.com/remotion-dev/remotion/pull/4589" style="color: white;">
	          Remotion Unlicensed – Contact hi@remotion.dev
	        </a>
	      `;
                        document.body.appendChild(div);
                    }
                }
            }["RenderWarningIfBlacklist.useEffect7.ensureBanner"];
            const observer = new MutationObserver({
                "RenderWarningIfBlacklist.useEffect7": ()=>ensureBanner()
            }["RenderWarningIfBlacklist.useEffect7"]);
            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
            return ({
                "RenderWarningIfBlacklist.useEffect7": ()=>{
                    observer.disconnect();
                }
            })["RenderWarningIfBlacklist.useEffect7"];
        }
    }["RenderWarningIfBlacklist.useEffect7"], [
        unlicensed
    ]);
    if (!unlicensed) {
        return null;
    }
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        style,
        className: "warning-banner",
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("a", {
            style: {
                color: "white"
            },
            href: "https://github.com/remotion-dev/remotion/pull/4589",
            children: "Remotion Unlicensed – Contact hi@remotion.dev"
        })
    });
};
;
;
var DefaultPlayPauseButton = ({ playing, buffering })=>{
    if (playing && buffering) {
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(BufferingIndicator, {
            type: "player"
        });
    }
    if (playing) {
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(PauseIcon, {});
    }
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(PlayIcon, {});
};
;
;
;
;
;
var KNOB_SIZE = 12;
var BAR_HEIGHT = 5;
var DefaultVolumeSlider = ({ volume, isVertical, onBlur, inputRef, setVolume })=>{
    const sliderContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DefaultVolumeSlider.useMemo3[sliderContainer]": ()=>{
            const paddingLeft = 5;
            const common = {
                paddingLeft,
                height: ICON_SIZE,
                width: VOLUME_SLIDER_WIDTH,
                display: "inline-flex",
                alignItems: "center"
            };
            if (isVertical) {
                return {
                    ...common,
                    position: "absolute",
                    transform: `rotate(-90deg) translateX(${VOLUME_SLIDER_WIDTH / 2 + ICON_SIZE / 2}px)`
                };
            }
            return {
                ...common
            };
        }
    }["DefaultVolumeSlider.useMemo3[sliderContainer]"], [
        isVertical
    ]);
    const randomId = typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useId === "undefined" ? "volume-slider" : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useId();
    const [randomClass] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "DefaultVolumeSlider.useState4": ()=>`__remotion-volume-slider-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["random"])(randomId)}`.replace(".", "")
    }["DefaultVolumeSlider.useState4"]);
    const onVolumeChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DefaultVolumeSlider.useCallback3[onVolumeChange]": (e)=>{
            setVolume(parseFloat(e.target.value));
        }
    }["DefaultVolumeSlider.useCallback3[onVolumeChange]"], [
        setVolume
    ]);
    const inputStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DefaultVolumeSlider.useMemo3[inputStyle]": ()=>{
            const commonStyle = {
                WebkitAppearance: "none",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: BAR_HEIGHT / 2,
                cursor: "pointer",
                height: BAR_HEIGHT,
                width: VOLUME_SLIDER_WIDTH,
                backgroundImage: `linear-gradient(
				to right,
				white ${volume * 100}%, rgba(255, 255, 255, 0) ${volume * 100}%
			)`
            };
            if (isVertical) {
                return {
                    ...commonStyle,
                    bottom: ICON_SIZE + VOLUME_SLIDER_WIDTH / 2
                };
            }
            return commonStyle;
        }
    }["DefaultVolumeSlider.useMemo3[inputStyle]"], [
        isVertical,
        volume
    ]);
    const sliderStyle = `
	.${randomClass}::-webkit-slider-thumb {
		-webkit-appearance: none;
		background-color: white;
		border-radius: ${KNOB_SIZE / 2}px;
		box-shadow: 0 0 2px black;
		height: ${KNOB_SIZE}px;
		width: ${KNOB_SIZE}px;
	}

	.${randomClass}::-moz-range-thumb {
		-webkit-appearance: none;
		background-color: white;
		border-radius: ${KNOB_SIZE / 2}px;
		box-shadow: 0 0 2px black;
		height: ${KNOB_SIZE}px;
		width: ${KNOB_SIZE}px;
	}
`;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        style: sliderContainer,
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("style", {
                dangerouslySetInnerHTML: {
                    __html: sliderStyle
                }
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("input", {
                ref: inputRef,
                "aria-label": "Change volume",
                className: randomClass,
                max: 1,
                min: 0,
                onBlur,
                onChange: onVolumeChange,
                step: 0.01,
                type: "range",
                value: volume,
                style: inputStyle
            })
        ]
    });
};
var renderDefaultVolumeSlider = (props)=>{
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(DefaultVolumeSlider, {
        ...props
    });
};
;
var VOLUME_SLIDER_WIDTH = 100;
var MediaVolumeSlider = ({ displayVerticalVolumeSlider, renderMuteButton, renderVolumeSlider })=>{
    const [playerMuted, setPlayerMuted] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Internals"].usePlayerMutedState();
    const [mediaVolume, setMediaVolume] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Internals"].useMediaVolumeState();
    const [focused, setFocused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const parentDivRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hover = useHoverState(parentDivRef, false);
    const onBlur = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MediaVolumeSlider.useCallback4[onBlur]": ()=>{
            setTimeout({
                "MediaVolumeSlider.useCallback4[onBlur]": ()=>{
                    if (inputRef.current && document.activeElement !== inputRef.current) {
                        setFocused(false);
                    }
                }
            }["MediaVolumeSlider.useCallback4[onBlur]"], 10);
        }
    }["MediaVolumeSlider.useCallback4[onBlur]"], []);
    const isVolume0 = mediaVolume === 0;
    const onClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MediaVolumeSlider.useCallback4[onClick]": ()=>{
            if (isVolume0) {
                setMediaVolume(1);
                setPlayerMuted(false);
                return;
            }
            setPlayerMuted({
                "MediaVolumeSlider.useCallback4[onClick]": (mute)=>!mute
            }["MediaVolumeSlider.useCallback4[onClick]"]);
        }
    }["MediaVolumeSlider.useCallback4[onClick]"], [
        isVolume0,
        setPlayerMuted,
        setMediaVolume
    ]);
    const parentDivStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MediaVolumeSlider.useMemo4[parentDivStyle]": ()=>{
            return {
                display: "inline-flex",
                background: "none",
                border: "none",
                justifyContent: "center",
                alignItems: "center",
                touchAction: "none",
                ...displayVerticalVolumeSlider && {
                    position: "relative"
                }
            };
        }
    }["MediaVolumeSlider.useMemo4[parentDivStyle]"], [
        displayVerticalVolumeSlider
    ]);
    const volumeContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MediaVolumeSlider.useMemo4[volumeContainer]": ()=>{
            return {
                display: "inline",
                width: ICON_SIZE,
                height: ICON_SIZE,
                cursor: "pointer",
                appearance: "none",
                background: "none",
                border: "none",
                padding: 0
            };
        }
    }["MediaVolumeSlider.useMemo4[volumeContainer]"], []);
    const renderDefaultMuteButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MediaVolumeSlider.useCallback4[renderDefaultMuteButton]": ({ muted, volume })=>{
            const isMutedOrZero = muted || volume === 0;
            return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("button", {
                "aria-label": isMutedOrZero ? "Unmute sound" : "Mute sound",
                title: isMutedOrZero ? "Unmute sound" : "Mute sound",
                onClick,
                onBlur,
                onFocus: {
                    "MediaVolumeSlider.useCallback4[renderDefaultMuteButton]": ()=>setFocused(true)
                }["MediaVolumeSlider.useCallback4[renderDefaultMuteButton]"],
                style: volumeContainer,
                type: "button",
                children: isMutedOrZero ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(VolumeOffIcon, {}) : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(VolumeOnIcon, {})
            });
        }
    }["MediaVolumeSlider.useCallback4[renderDefaultMuteButton]"], [
        onBlur,
        onClick,
        volumeContainer
    ]);
    const muteButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MediaVolumeSlider.useMemo4[muteButton]": ()=>{
            return renderMuteButton ? renderMuteButton({
                muted: playerMuted,
                volume: mediaVolume
            }) : renderDefaultMuteButton({
                muted: playerMuted,
                volume: mediaVolume
            });
        }
    }["MediaVolumeSlider.useMemo4[muteButton]"], [
        playerMuted,
        mediaVolume,
        renderDefaultMuteButton,
        renderMuteButton
    ]);
    const volumeSlider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MediaVolumeSlider.useMemo4[volumeSlider]": ()=>{
            return (focused || hover) && !playerMuted && !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Internals"].isIosSafari() ? (renderVolumeSlider ?? renderDefaultVolumeSlider)({
                isVertical: displayVerticalVolumeSlider,
                volume: mediaVolume,
                onBlur: {
                    "MediaVolumeSlider.useMemo4[volumeSlider]": ()=>setFocused(false)
                }["MediaVolumeSlider.useMemo4[volumeSlider]"],
                inputRef,
                setVolume: setMediaVolume
            }) : null;
        }
    }["MediaVolumeSlider.useMemo4[volumeSlider]"], [
        displayVerticalVolumeSlider,
        focused,
        hover,
        playerMuted,
        mediaVolume,
        renderVolumeSlider,
        setMediaVolume
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        ref: parentDivRef,
        style: parentDivStyle,
        children: [
            muteButton,
            volumeSlider
        ]
    });
};
;
;
;
function useComponentVisible(initialIsVisible) {
    const [isComponentVisible, setIsComponentVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialIsVisible);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useComponentVisible.useEffect8": ()=>{
            const handleClickOutside = {
                "useComponentVisible.useEffect8.handleClickOutside": (event)=>{
                    if (ref.current && !ref.current.contains(event.target)) {
                        setIsComponentVisible(false);
                    }
                }
            }["useComponentVisible.useEffect8.handleClickOutside"];
            document.addEventListener("pointerup", handleClickOutside, true);
            return ({
                "useComponentVisible.useEffect8": ()=>{
                    document.removeEventListener("pointerup", handleClickOutside, true);
                }
            })["useComponentVisible.useEffect8"];
        }
    }["useComponentVisible.useEffect8"], []);
    return {
        ref,
        isComponentVisible,
        setIsComponentVisible
    };
}
;
var BOTTOM = 35;
var THRESHOLD = 70;
var rateDiv = {
    height: 30,
    paddingRight: 15,
    paddingLeft: 12,
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
};
var checkmarkContainer = {
    width: 22,
    display: "flex",
    alignItems: "center"
};
var checkmarkStyle = {
    width: 14,
    height: 14,
    color: "black"
};
var Checkmark = ()=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("svg", {
        viewBox: "0 0 512 512",
        style: checkmarkStyle,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("path", {
            fill: "currentColor",
            d: "M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z"
        })
    });
var formatPlaybackRate = (rate)=>{
    const str = rate.toString();
    return str.includes(".") ? str : str + ".0";
};
var PlaybackrateOption = ({ rate, onSelect, selectedRate, keyboardSelectedRate })=>{
    const onClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PlaybackrateOption.useCallback5[onClick]": (e)=>{
            e.stopPropagation();
            e.preventDefault();
            onSelect(rate);
        }
    }["PlaybackrateOption.useCallback5[onClick]"], [
        onSelect,
        rate
    ]);
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const onMouseEnter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PlaybackrateOption.useCallback5[onMouseEnter]": ()=>{
            setHovered(true);
        }
    }["PlaybackrateOption.useCallback5[onMouseEnter]"], []);
    const onMouseLeave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PlaybackrateOption.useCallback5[onMouseLeave]": ()=>{
            setHovered(false);
        }
    }["PlaybackrateOption.useCallback5[onMouseLeave]"], []);
    const isFocused = keyboardSelectedRate === rate;
    const actualStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PlaybackrateOption.useMemo5[actualStyle]": ()=>{
            return {
                ...rateDiv,
                backgroundColor: hovered || isFocused ? "#eee" : "transparent"
            };
        }
    }["PlaybackrateOption.useMemo5[actualStyle]"], [
        hovered,
        isFocused
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        onPointerEnter: onMouseEnter,
        onPointerLeave: onMouseLeave,
        tabIndex: 0,
        style: actualStyle,
        onClick,
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                style: checkmarkContainer,
                children: rate === selectedRate ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Checkmark, {}) : null
            }),
            formatPlaybackRate(rate),
            "x"
        ]
    }, rate);
};
var PlaybackPopup = ({ setIsComponentVisible, playbackRates, canvasSize })=>{
    const { setPlaybackRate, playbackRate } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Internals"].usePlaybackRate();
    const [keyboardSelectedRate, setKeyboardSelectedRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(playbackRate);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PlaybackPopup.useEffect9": ()=>{
            const listener = {
                "PlaybackPopup.useEffect9.listener": (e)=>{
                    e.preventDefault();
                    if (e.key === "ArrowUp") {
                        const currentIndex = playbackRates.findIndex({
                            "PlaybackPopup.useEffect9.listener.currentIndex": (rate)=>rate === keyboardSelectedRate
                        }["PlaybackPopup.useEffect9.listener.currentIndex"]);
                        if (currentIndex === 0) {
                            return;
                        }
                        if (currentIndex === -1) {
                            setKeyboardSelectedRate(playbackRates[0]);
                        } else {
                            setKeyboardSelectedRate(playbackRates[currentIndex - 1]);
                        }
                    } else if (e.key === "ArrowDown") {
                        const currentIndex = playbackRates.findIndex({
                            "PlaybackPopup.useEffect9.listener.currentIndex": (rate)=>rate === keyboardSelectedRate
                        }["PlaybackPopup.useEffect9.listener.currentIndex"]);
                        if (currentIndex === playbackRates.length - 1) {
                            return;
                        }
                        if (currentIndex === -1) {
                            setKeyboardSelectedRate(playbackRates[playbackRates.length - 1]);
                        } else {
                            setKeyboardSelectedRate(playbackRates[currentIndex + 1]);
                        }
                    } else if (e.key === "Enter") {
                        setPlaybackRate(keyboardSelectedRate);
                        setIsComponentVisible(false);
                    }
                }
            }["PlaybackPopup.useEffect9.listener"];
            window.addEventListener("keydown", listener);
            return ({
                "PlaybackPopup.useEffect9": ()=>{
                    window.removeEventListener("keydown", listener);
                }
            })["PlaybackPopup.useEffect9"];
        }
    }["PlaybackPopup.useEffect9"], [
        playbackRates,
        keyboardSelectedRate,
        setPlaybackRate,
        setIsComponentVisible
    ]);
    const onSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PlaybackPopup.useCallback5[onSelect]": (rate)=>{
            setPlaybackRate(rate);
            setIsComponentVisible(false);
        }
    }["PlaybackPopup.useCallback5[onSelect]"], [
        setIsComponentVisible,
        setPlaybackRate
    ]);
    const playbackPopup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PlaybackPopup.useMemo5[playbackPopup]": ()=>{
            return {
                position: "absolute",
                right: 0,
                width: 125,
                maxHeight: canvasSize.height - THRESHOLD - BOTTOM,
                bottom: 35,
                background: "#fff",
                borderRadius: 4,
                overflow: "auto",
                color: "black",
                textAlign: "left"
            };
        }
    }["PlaybackPopup.useMemo5[playbackPopup]"], [
        canvasSize.height
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        style: playbackPopup,
        children: playbackRates.map((rate)=>{
            return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(PlaybackrateOption, {
                selectedRate: playbackRate,
                onSelect,
                rate,
                keyboardSelectedRate
            }, rate);
        })
    });
};
var label = {
    fontSize: 13,
    fontWeight: "bold",
    color: "white",
    border: "2px solid white",
    borderRadius: 20,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 2,
    paddingBottom: 2
};
var playerButtonStyle = {
    appearance: "none",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 6,
    paddingBottom: 6,
    height: 37,
    display: "inline-flex",
    marginBottom: 0,
    marginTop: 0,
    alignItems: "center"
};
var button = {
    ...playerButtonStyle,
    position: "relative"
};
var PlaybackrateControl = ({ playbackRates, canvasSize })=>{
    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
    const { playbackRate } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Internals"].usePlaybackRate();
    const onClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PlaybackrateControl.useCallback5[onClick]": (e)=>{
            e.stopPropagation();
            e.preventDefault();
            setIsComponentVisible({
                "PlaybackrateControl.useCallback5[onClick]": (prevIsComponentVisible)=>!prevIsComponentVisible
            }["PlaybackrateControl.useCallback5[onClick]"]);
        }
    }["PlaybackrateControl.useCallback5[onClick]"], [
        setIsComponentVisible
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        ref,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("button", {
            type: "button",
            "aria-label": "Change playback rate",
            style: button,
            onClick,
            children: [
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                    style: label,
                    children: [
                        playbackRate,
                        "x"
                    ]
                }),
                isComponentVisible && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(PlaybackPopup, {
                    canvasSize,
                    playbackRates,
                    setIsComponentVisible
                })
            ]
        })
    });
};
;
;
;
var getFrameFromX = (clientX, durationInFrames, width)=>{
    const pos = clientX;
    const frame = Math.round((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["interpolate"])(pos, [
        0,
        width
    ], [
        0,
        durationInFrames - 1
    ], {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp"
    }));
    return frame;
};
var BAR_HEIGHT2 = 5;
var KNOB_SIZE2 = 12;
var VERTICAL_PADDING = 4;
var containerStyle = {
    userSelect: "none",
    WebkitUserSelect: "none",
    paddingTop: VERTICAL_PADDING,
    paddingBottom: VERTICAL_PADDING,
    boxSizing: "border-box",
    cursor: "pointer",
    position: "relative",
    touchAction: "none"
};
var barBackground = {
    height: BAR_HEIGHT2,
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    width: "100%",
    borderRadius: BAR_HEIGHT2 / 2
};
var findBodyInWhichDivIsLocated = (div)=>{
    let current = div;
    while(current.parentElement){
        current = current.parentElement;
    }
    return current;
};
var PlayerSeekBar = ({ durationInFrames, onSeekEnd, onSeekStart, inFrame, outFrame })=>{
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const barHovered = useHoverState(containerRef, false);
    const size = useElementSize(containerRef, {
        triggerOnWindowResize: true,
        shouldApplyCssTransforms: true
    });
    const { seek, play, pause, isPlaying } = usePlayerMethods();
    const frame = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Internals"].Timeline.useTimelinePosition();
    const [dragging, setDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        dragging: false
    });
    const width = size?.width ?? 0;
    const onPointerDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PlayerSeekBar.useCallback6[onPointerDown]": (e)=>{
            if (e.button !== 0) {
                return;
            }
            const posLeft = containerRef.current?.getBoundingClientRect().left;
            const _frame = getFrameFromX(e.clientX - posLeft, durationInFrames, width);
            const wasPlaying = isPlaying();
            pause();
            seek(_frame);
            setDragging({
                dragging: true,
                wasPlaying
            });
            onSeekStart();
        }
    }["PlayerSeekBar.useCallback6[onPointerDown]"], [
        durationInFrames,
        width,
        isPlaying,
        pause,
        seek,
        onSeekStart
    ]);
    const onPointerMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PlayerSeekBar.useCallback6[onPointerMove]": (e)=>{
            if (!size) {
                throw new Error("Player has no size");
            }
            if (!dragging.dragging) {
                return;
            }
            const posLeft = containerRef.current?.getBoundingClientRect().left;
            const _frame = getFrameFromX(e.clientX - posLeft, durationInFrames, size.width);
            seek(_frame);
        }
    }["PlayerSeekBar.useCallback6[onPointerMove]"], [
        dragging.dragging,
        durationInFrames,
        seek,
        size
    ]);
    const onPointerUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PlayerSeekBar.useCallback6[onPointerUp]": ()=>{
            setDragging({
                dragging: false
            });
            if (!dragging.dragging) {
                return;
            }
            if (dragging.wasPlaying) {
                play();
            } else {
                pause();
            }
            onSeekEnd();
        }
    }["PlayerSeekBar.useCallback6[onPointerUp]"], [
        dragging,
        onSeekEnd,
        pause,
        play
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PlayerSeekBar.useEffect10": ()=>{
            if (!dragging.dragging) {
                return;
            }
            const body = findBodyInWhichDivIsLocated(containerRef.current);
            body.addEventListener("pointermove", onPointerMove);
            body.addEventListener("pointerup", onPointerUp);
            return ({
                "PlayerSeekBar.useEffect10": ()=>{
                    body.removeEventListener("pointermove", onPointerMove);
                    body.removeEventListener("pointerup", onPointerUp);
                }
            })["PlayerSeekBar.useEffect10"];
        }
    }["PlayerSeekBar.useEffect10"], [
        dragging.dragging,
        onPointerMove,
        onPointerUp
    ]);
    const knobStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PlayerSeekBar.useMemo6[knobStyle]": ()=>{
            return {
                height: KNOB_SIZE2,
                width: KNOB_SIZE2,
                borderRadius: KNOB_SIZE2 / 2,
                position: "absolute",
                top: VERTICAL_PADDING - KNOB_SIZE2 / 2 + 5 / 2,
                backgroundColor: "white",
                left: Math.max(0, frame / Math.max(1, durationInFrames - 1) * width - KNOB_SIZE2 / 2),
                boxShadow: "0 0 2px black",
                opacity: Number(barHovered || dragging.dragging)
            };
        }
    }["PlayerSeekBar.useMemo6[knobStyle]"], [
        barHovered,
        dragging.dragging,
        durationInFrames,
        frame,
        width
    ]);
    const fillStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PlayerSeekBar.useMemo6[fillStyle]": ()=>{
            return {
                height: BAR_HEIGHT2,
                backgroundColor: "rgba(255, 255, 255, 1)",
                width: (frame - (inFrame ?? 0)) / (durationInFrames - 1) * width,
                marginLeft: (inFrame ?? 0) / (durationInFrames - 1) * width,
                borderRadius: BAR_HEIGHT2 / 2
            };
        }
    }["PlayerSeekBar.useMemo6[fillStyle]"], [
        durationInFrames,
        frame,
        inFrame,
        width
    ]);
    const active = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PlayerSeekBar.useMemo6[active]": ()=>{
            return {
                height: BAR_HEIGHT2,
                backgroundColor: "rgba(255, 255, 255, 0.25)",
                width: ((outFrame ?? durationInFrames - 1) - (inFrame ?? 0)) / (durationInFrames - 1) * 100 + "%",
                marginLeft: (inFrame ?? 0) / (durationInFrames - 1) * 100 + "%",
                borderRadius: BAR_HEIGHT2 / 2,
                position: "absolute"
            };
        }
    }["PlayerSeekBar.useMemo6[active]"], [
        durationInFrames,
        inFrame,
        outFrame
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        ref: containerRef,
        onPointerDown,
        style: containerStyle,
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                style: barBackground,
                children: [
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                        style: active
                    }),
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                        style: fillStyle
                    })
                ]
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                style: knobStyle
            })
        ]
    });
};
;
;
// src/format-time.ts
var formatTime = (timeInSeconds)=>{
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds - minutes * 60);
    return `${String(minutes)}:${String(seconds).padStart(2, "0")}`;
};
;
var PlayerTimeLabel = ({ durationInFrames, maxTimeLabelWidth, fps })=>{
    const frame = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Internals"].Timeline.useTimelinePosition();
    const timeLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PlayerTimeLabel.useMemo7[timeLabel]": ()=>{
            return {
                color: "white",
                fontFamily: "sans-serif",
                fontSize: 14,
                maxWidth: maxTimeLabelWidth === null ? undefined : maxTimeLabelWidth,
                overflow: "hidden",
                textOverflow: "ellipsis"
            };
        }
    }["PlayerTimeLabel.useMemo7[timeLabel]"], [
        maxTimeLabelWidth
    ]);
    const isLastFrame = frame === durationInFrames - 1;
    const frameToDisplay = isLastFrame ? frame + 1 : frame;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        style: timeLabel,
        children: [
            formatTime(frameToDisplay / fps),
            " / ",
            formatTime(durationInFrames / fps)
        ]
    });
};
;
var X_SPACER = 10;
var X_PADDING = 12;
var useVideoControlsResize = ({ allowFullscreen: allowFullScreen, playerWidth })=>{
    const resizeInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useVideoControlsResize.useMemo8[resizeInfo]": ()=>{
            const playPauseIconSize = ICON_SIZE;
            const volumeIconSize = ICON_SIZE;
            const _fullscreenIconSize = allowFullScreen ? fullscreenIconSize : 0;
            const elementsSize = volumeIconSize + playPauseIconSize + _fullscreenIconSize + X_PADDING * 2 + X_SPACER * 2;
            const maxTimeLabelWidth = playerWidth - elementsSize;
            const maxTimeLabelWidthWithoutNegativeValue = Math.max(maxTimeLabelWidth, 0);
            const availableTimeLabelWidthIfVolumeOpen = maxTimeLabelWidthWithoutNegativeValue - VOLUME_SLIDER_WIDTH;
            const computedLabelWidth = availableTimeLabelWidthIfVolumeOpen < VOLUME_SLIDER_WIDTH ? maxTimeLabelWidthWithoutNegativeValue : availableTimeLabelWidthIfVolumeOpen;
            const minWidthForHorizontalDisplay = computedLabelWidth + elementsSize + VOLUME_SLIDER_WIDTH;
            const displayVerticalVolumeSlider = playerWidth < minWidthForHorizontalDisplay;
            return {
                maxTimeLabelWidth: maxTimeLabelWidthWithoutNegativeValue === 0 ? null : maxTimeLabelWidthWithoutNegativeValue,
                displayVerticalVolumeSlider
            };
        }
    }["useVideoControlsResize.useMemo8[resizeInfo]"], [
        allowFullScreen,
        playerWidth
    ]);
    return resizeInfo;
};
;
var gradientSteps = [
    0,
    0.013,
    0.049,
    0.104,
    0.175,
    0.259,
    0.352,
    0.45,
    0.55,
    0.648,
    0.741,
    0.825,
    0.896,
    0.951,
    0.987
];
var gradientOpacities = [
    0,
    8.1,
    15.5,
    22.5,
    29,
    35.3,
    41.2,
    47.1,
    52.9,
    58.8,
    64.7,
    71,
    77.5,
    84.5,
    91.9
];
var globalGradientOpacity = 1 / 0.7;
var containerStyle2 = {
    boxSizing: "border-box",
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingTop: 40,
    paddingBottom: 10,
    backgroundImage: `linear-gradient(to bottom,${gradientSteps.map((g, i)=>{
        return `hsla(0, 0%, 0%, ${g}) ${gradientOpacities[i] * globalGradientOpacity}%`;
    }).join(", ")}, hsl(0, 0%, 0%) 100%)`,
    backgroundSize: "auto 145px",
    display: "flex",
    paddingRight: X_PADDING,
    paddingLeft: X_PADDING,
    flexDirection: "column",
    transition: "opacity 0.3s"
};
var controlsRow = {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    userSelect: "none",
    WebkitUserSelect: "none"
};
var leftPartStyle = {
    display: "flex",
    flexDirection: "row",
    userSelect: "none",
    WebkitUserSelect: "none",
    alignItems: "center"
};
var xSpacer = {
    width: 12
};
var ySpacer = {
    height: 8
};
var flex1 = {
    flex: 1
};
var fullscreen = {};
var Controls = ({ durationInFrames, isFullscreen, fps, showVolumeControls, onFullscreenButtonClick, allowFullscreen, onExitFullscreenButtonClick, spaceKeyToPlayOrPause, onSeekEnd, onSeekStart, inFrame, outFrame, initiallyShowControls, canvasSize, renderPlayPauseButton, renderFullscreenButton, alwaysShowControls, showPlaybackRateControl, containerRef, buffering, hideControlsWhenPointerDoesntMove, onPointerDown, onDoubleClick, renderMuteButton, renderVolumeSlider, playing, toggle, renderCustomControls })=>{
    const playButtonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [supportsFullscreen, setSupportsFullscreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const hovered = useHoverState(containerRef, hideControlsWhenPointerDoesntMove);
    const { maxTimeLabelWidth, displayVerticalVolumeSlider } = useVideoControlsResize({
        allowFullscreen,
        playerWidth: canvasSize?.width ?? 0
    });
    const [shouldShowInitially, setInitiallyShowControls] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "Controls.useState9": ()=>{
            if (typeof initiallyShowControls === "boolean") {
                return initiallyShowControls;
            }
            if (typeof initiallyShowControls === "number") {
                if (initiallyShowControls % 1 !== 0) {
                    throw new Error("initiallyShowControls must be an integer or a boolean");
                }
                if (Number.isNaN(initiallyShowControls)) {
                    throw new Error("initiallyShowControls must not be NaN");
                }
                if (!Number.isFinite(initiallyShowControls)) {
                    throw new Error("initiallyShowControls must be finite");
                }
                if (initiallyShowControls <= 0) {
                    throw new Error("initiallyShowControls must be a positive integer");
                }
                return initiallyShowControls;
            }
            throw new TypeError("initiallyShowControls must be a number or a boolean");
        }
    }["Controls.useState9"]);
    const containerCss = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Controls.useMemo9[containerCss]": ()=>{
            const shouldShow = hovered || !playing || shouldShowInitially || alwaysShowControls;
            return {
                ...containerStyle2,
                opacity: Number(shouldShow)
            };
        }
    }["Controls.useMemo9[containerCss]"], [
        hovered,
        shouldShowInitially,
        playing,
        alwaysShowControls
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Controls.useEffect11": ()=>{
            if (playButtonRef.current && spaceKeyToPlayOrPause) {
                playButtonRef.current.focus({
                    preventScroll: true
                });
            }
        }
    }["Controls.useEffect11"], [
        playing,
        spaceKeyToPlayOrPause
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Controls.useEffect11": ()=>{
            setSupportsFullscreen((typeof document !== "undefined" && (document.fullscreenEnabled || document.webkitFullscreenEnabled)) ?? false);
        }
    }["Controls.useEffect11"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Controls.useEffect11": ()=>{
            if (shouldShowInitially === false) {
                return;
            }
            const time = shouldShowInitially === true ? 2000 : shouldShowInitially;
            const timeout = setTimeout({
                "Controls.useEffect11.timeout": ()=>{
                    setInitiallyShowControls(false);
                }
            }["Controls.useEffect11.timeout"], time);
            return ({
                "Controls.useEffect11": ()=>{
                    clearInterval(timeout);
                }
            })["Controls.useEffect11"];
        }
    }["Controls.useEffect11"], [
        shouldShowInitially
    ]);
    const playbackRates = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Controls.useMemo9[playbackRates]": ()=>{
            if (showPlaybackRateControl === true) {
                return [
                    0.5,
                    0.8,
                    1,
                    1.2,
                    1.5,
                    1.8,
                    2,
                    2.5,
                    3
                ];
            }
            if (Array.isArray(showPlaybackRateControl)) {
                for (const rate of showPlaybackRateControl){
                    if (typeof rate !== "number") {
                        throw new Error("Every item in showPlaybackRateControl must be a number");
                    }
                    if (rate <= 0) {
                        throw new Error("Every item in showPlaybackRateControl must be positive");
                    }
                }
                return showPlaybackRateControl;
            }
            return null;
        }
    }["Controls.useMemo9[playbackRates]"], [
        showPlaybackRateControl
    ]);
    const customControlsElement = renderCustomControls ? renderCustomControls() : null;
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const flexRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const onPointerDownIfContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Controls.useCallback7[onPointerDownIfContainer]": (e)=>{
            if (e.target === ref.current || e.target === flexRef.current) {
                onPointerDown?.(e);
            }
        }
    }["Controls.useCallback7[onPointerDownIfContainer]"], [
        onPointerDown
    ]);
    const onDoubleClickIfContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Controls.useCallback7[onDoubleClickIfContainer]": (e)=>{
            if (e.target === ref.current || e.target === flexRef.current) {
                onDoubleClick?.(e);
            }
        }
    }["Controls.useCallback7[onDoubleClickIfContainer]"], [
        onDoubleClick
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        ref,
        style: containerCss,
        onPointerDown: onPointerDownIfContainer,
        onDoubleClick: onDoubleClickIfContainer,
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                ref: flexRef,
                style: controlsRow,
                children: [
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                        style: leftPartStyle,
                        children: [
                            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("button", {
                                ref: playButtonRef,
                                type: "button",
                                style: playerButtonStyle,
                                onClick: toggle,
                                "aria-label": playing ? "Pause video" : "Play video",
                                title: playing ? "Pause video" : "Play video",
                                children: renderPlayPauseButton === null ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(DefaultPlayPauseButton, {
                                    buffering,
                                    playing
                                }) : renderPlayPauseButton({
                                    playing,
                                    isBuffering: buffering
                                }) ?? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(DefaultPlayPauseButton, {
                                    buffering,
                                    playing
                                })
                            }),
                            showVolumeControls ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                        style: xSpacer
                                    }),
                                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(MediaVolumeSlider, {
                                        renderMuteButton,
                                        renderVolumeSlider,
                                        displayVerticalVolumeSlider
                                    })
                                ]
                            }) : null,
                            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                style: xSpacer
                            }),
                            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(PlayerTimeLabel, {
                                durationInFrames,
                                fps,
                                maxTimeLabelWidth
                            }),
                            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                style: xSpacer
                            })
                        ]
                    }),
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                        style: flex1
                    }),
                    customControlsElement,
                    customControlsElement && playbackRates && canvasSize ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                        style: xSpacer
                    }) : null,
                    playbackRates && canvasSize && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(PlaybackrateControl, {
                        canvasSize,
                        playbackRates
                    }),
                    playbackRates && supportsFullscreen && allowFullscreen ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                        style: xSpacer
                    }) : null,
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                        style: fullscreen,
                        children: supportsFullscreen && allowFullscreen ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("button", {
                            type: "button",
                            "aria-label": isFullscreen ? "Exit fullscreen" : "Enter Fullscreen",
                            title: isFullscreen ? "Exit fullscreen" : "Enter Fullscreen",
                            style: playerButtonStyle,
                            onClick: isFullscreen ? onExitFullscreenButtonClick : onFullscreenButtonClick,
                            children: renderFullscreenButton === null ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(FullscreenIcon, {
                                isFullscreen
                            }) : renderFullscreenButton({
                                isFullscreen
                            })
                        }) : null
                    })
                ]
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                style: ySpacer
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(PlayerSeekBar, {
                onSeekEnd,
                onSeekStart,
                durationInFrames,
                inFrame,
                outFrame
            })
        ]
    });
};
// src/utils/is-node.ts
var IS_NODE = typeof document === "undefined";
;
// src/utils/cancellable-promise.ts
var cancellablePromise = (promise)=>{
    let isCanceled = false;
    const wrappedPromise = new Promise((resolve, reject)=>{
        promise.then((value)=>{
            if (isCanceled) {
                reject({
                    isCanceled,
                    value
                });
                return;
            }
            resolve(value);
        }).catch((error)=>{
            reject({
                isCanceled,
                error
            });
        });
    });
    return {
        promise: wrappedPromise,
        cancel: ()=>{
            isCanceled = true;
        }
    };
};
// src/utils/delay.ts
var delay = (n)=>new Promise((resolve)=>setTimeout(resolve, n));
;
var useCancellablePromises = ()=>{
    const pendingPromises = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const appendPendingPromise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCancellablePromises.useCallback8[appendPendingPromise]": (promise)=>{
            pendingPromises.current = [
                ...pendingPromises.current,
                promise
            ];
        }
    }["useCancellablePromises.useCallback8[appendPendingPromise]"], []);
    const removePendingPromise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCancellablePromises.useCallback8[removePendingPromise]": (promise)=>{
            pendingPromises.current = pendingPromises.current.filter({
                "useCancellablePromises.useCallback8[removePendingPromise]": (p)=>p !== promise
            }["useCancellablePromises.useCallback8[removePendingPromise]"]);
        }
    }["useCancellablePromises.useCallback8[removePendingPromise]"], []);
    const clearPendingPromises = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useCancellablePromises.useCallback8[clearPendingPromises]": ()=>pendingPromises.current.map({
                "useCancellablePromises.useCallback8[clearPendingPromises]": (p)=>p.cancel()
            }["useCancellablePromises.useCallback8[clearPendingPromises]"])
    }["useCancellablePromises.useCallback8[clearPendingPromises]"], []);
    const api = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useCancellablePromises.useMemo10[api]": ()=>({
                appendPendingPromise,
                removePendingPromise,
                clearPendingPromises
            })
    }["useCancellablePromises.useMemo10[api]"], [
        appendPendingPromise,
        clearPendingPromises,
        removePendingPromise
    ]);
    return api;
};
// src/utils/use-click-prevention-on-double-click.ts
var useClickPreventionOnDoubleClick = (onClick, onDoubleClick, doubleClickToFullscreen)=>{
    const api = useCancellablePromises();
    const handleClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useClickPreventionOnDoubleClick.useCallback9[handleClick]": async (e)=>{
            if (e instanceof PointerEvent ? e.pointerType === "touch" : e.nativeEvent.pointerType === "touch") {
                onClick(e);
                return;
            }
            api.clearPendingPromises();
            const waitForClick = cancellablePromise(delay(200));
            api.appendPendingPromise(waitForClick);
            try {
                await waitForClick.promise;
                api.removePendingPromise(waitForClick);
                onClick(e);
            } catch (errorInfo) {
                const info = errorInfo;
                api.removePendingPromise(waitForClick);
                if (!info.isCanceled) {
                    throw info.error;
                }
            }
        }
    }["useClickPreventionOnDoubleClick.useCallback9[handleClick]"], [
        api,
        onClick
    ]);
    const handlePointerDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useClickPreventionOnDoubleClick.useCallback9[handlePointerDown]": ()=>{
            document.addEventListener("pointerup", {
                "useClickPreventionOnDoubleClick.useCallback9[handlePointerDown]": (newEvt)=>{
                    handleClick(newEvt);
                }
            }["useClickPreventionOnDoubleClick.useCallback9[handlePointerDown]"], {
                once: true
            });
        }
    }["useClickPreventionOnDoubleClick.useCallback9[handlePointerDown]"], [
        handleClick
    ]);
    const handleDoubleClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useClickPreventionOnDoubleClick.useCallback9[handleDoubleClick]": ()=>{
            api.clearPendingPromises();
            onDoubleClick();
        }
    }["useClickPreventionOnDoubleClick.useCallback9[handleDoubleClick]"], [
        api,
        onDoubleClick
    ]);
    const returnValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useClickPreventionOnDoubleClick.useMemo11[returnValue]": ()=>{
            if (!doubleClickToFullscreen) {
                return {
                    handlePointerDown: onClick,
                    handleDoubleClick: ({
                        "useClickPreventionOnDoubleClick.useMemo11[returnValue]": ()=>{
                            return;
                        }
                    })["useClickPreventionOnDoubleClick.useMemo11[returnValue]"]
                };
            }
            return {
                handlePointerDown,
                handleDoubleClick
            };
        }
    }["useClickPreventionOnDoubleClick.useMemo11[returnValue]"], [
        doubleClickToFullscreen,
        handleDoubleClick,
        handlePointerDown,
        onClick
    ]);
    return returnValue;
};
;
var reactVersion = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].version.split(".")[0];
if (reactVersion === "0") {
    throw new Error(`Version ${reactVersion} of "react" is not supported by Remotion`);
}
var doesReactVersionSupportSuspense = parseInt(reactVersion, 10) >= 18;
var PlayerUI = ({ controls, style, loop, autoPlay, allowFullscreen, inputProps, clickToPlay, showVolumeControls, doubleClickToFullscreen, spaceKeyToPlayOrPause, errorFallback, playbackRate, renderLoading, renderPoster, className, moveToBeginningWhenEnded, showPosterWhenUnplayed, showPosterWhenEnded, showPosterWhenPaused, showPosterWhenBuffering, showPosterWhenBufferingAndPaused, inFrame, outFrame, initiallyShowControls, renderFullscreen: renderFullscreenButton, renderPlayPauseButton, renderMuteButton, renderVolumeSlider, renderCustomControls, alwaysShowControls, showPlaybackRateControl, posterFillMode, bufferStateDelayInMilliseconds, hideControlsWhenPointerDoesntMove, overflowVisible, browserMediaControlsBehavior, overrideInternalClassName, noSuspense }, ref)=>{
    const config = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Internals"].useUnsafeVideoConfig();
    const video = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Internals"].useVideo();
    const container = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasSize = useElementSize(container, {
        triggerOnWindowResize: false,
        shouldApplyCssTransforms: false
    });
    const [hasPausedToResume, setHasPausedToResume] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [shouldAutoplay, setShouldAutoPlay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(autoPlay);
    const [isFullscreen, setIsFullscreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "PlayerUI.useState10": ()=>false
    }["PlayerUI.useState10"]);
    const [seeking, setSeeking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasPlayed, setHasPlayed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const supportsFullScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PlayerUI.useMemo12[supportsFullScreen]": ()=>{
            if (typeof document === "undefined") {
                return false;
            }
            return Boolean(document.fullscreenEnabled || document.webkitFullscreenEnabled);
        }
    }["PlayerUI.useMemo12[supportsFullScreen]"], []);
    const player = usePlayerMethods();
    const playing = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Internals"].usePlaying();
    const frame = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Internals"].Timeline.useTimelinePosition();
    const play = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PlayerUI.useCallback10[play]": (e)=>{
            if (player.isPlaying()) {
                return;
            }
            setHasPlayed(true);
            player.play(e);
        }
    }["PlayerUI.useCallback10[play]"], [
        player
    ]);
    const { playerMuted, mediaVolume } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Internals"].MediaVolumeContext);
    const canvasOverlay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(CanvasOverlayContext);
    const canvasContentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PlayerUI.useEffect12": ()=>{
            player.emitter.dispatchVolumeChange(mediaVolume);
        }
    }["PlayerUI.useEffect12"], [
        player.emitter,
        mediaVolume
    ]);
    const isMuted = playerMuted || mediaVolume === 0;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PlayerUI.useEffect12": ()=>{
            player.emitter.dispatchMuteChange({
                isMuted
            });
        }
    }["PlayerUI.useEffect12"], [
        player.emitter,
        isMuted
    ]);
    usePlayback({
        loop,
        playbackRate,
        moveToBeginningWhenEnded,
        inFrame,
        outFrame,
        getCurrentFrame: player.getCurrentFrame,
        browserMediaControlsBehavior,
        muted: isMuted
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PlayerUI.useEffect12": ()=>{
            if (hasPausedToResume && !playing) {
                setHasPausedToResume(false);
                play();
            }
        }
    }["PlayerUI.useEffect12"], [
        hasPausedToResume,
        play,
        playing
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PlayerUI.useEffect12": ()=>{
            const { current } = container;
            if (!current) {
                return;
            }
            const onFullscreenChange = {
                "PlayerUI.useEffect12.onFullscreenChange": ()=>{
                    const newValue = document.fullscreenElement === current || document.webkitFullscreenElement === current;
                    setIsFullscreen(newValue);
                }
            }["PlayerUI.useEffect12.onFullscreenChange"];
            document.addEventListener("fullscreenchange", onFullscreenChange);
            document.addEventListener("webkitfullscreenchange", onFullscreenChange);
            return ({
                "PlayerUI.useEffect12": ()=>{
                    document.removeEventListener("fullscreenchange", onFullscreenChange);
                    document.removeEventListener("webkitfullscreenchange", onFullscreenChange);
                }
            })["PlayerUI.useEffect12"];
        }
    }["PlayerUI.useEffect12"], []);
    const toggle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PlayerUI.useCallback10[toggle]": (e)=>{
            if (player.isPlaying()) {
                player.pause();
            } else {
                play(e);
            }
        }
    }["PlayerUI.useCallback10[toggle]"], [
        play,
        player
    ]);
    const requestFullscreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PlayerUI.useCallback10[requestFullscreen]": ()=>{
            if (!allowFullscreen) {
                throw new Error("allowFullscreen is false");
            }
            if (!supportsFullScreen) {
                throw new Error("Browser doesnt support fullscreen");
            }
            if (!container.current) {
                throw new Error("No player ref found");
            }
            if (container.current.webkitRequestFullScreen) {
                container.current.webkitRequestFullScreen();
            } else {
                container.current.requestFullscreen();
            }
        }
    }["PlayerUI.useCallback10[requestFullscreen]"], [
        allowFullscreen,
        supportsFullScreen
    ]);
    const exitFullscreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PlayerUI.useCallback10[exitFullscreen]": ()=>{
            if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else {
                document.exitFullscreen();
            }
        }
    }["PlayerUI.useCallback10[exitFullscreen]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PlayerUI.useEffect12": ()=>{
            const { current } = container;
            if (!current) {
                return;
            }
            const fullscreenChange = {
                "PlayerUI.useEffect12.fullscreenChange": ()=>{
                    const element = document.webkitFullscreenElement ?? document.fullscreenElement;
                    if (element && element === container.current) {
                        player.emitter.dispatchFullscreenChange({
                            isFullscreen: true
                        });
                    } else {
                        player.emitter.dispatchFullscreenChange({
                            isFullscreen: false
                        });
                    }
                }
            }["PlayerUI.useEffect12.fullscreenChange"];
            current.addEventListener("webkitfullscreenchange", fullscreenChange);
            current.addEventListener("fullscreenchange", fullscreenChange);
            return ({
                "PlayerUI.useEffect12": ()=>{
                    current.removeEventListener("webkitfullscreenchange", fullscreenChange);
                    current.removeEventListener("fullscreenchange", fullscreenChange);
                }
            })["PlayerUI.useEffect12"];
        }
    }["PlayerUI.useEffect12"], [
        player.emitter
    ]);
    const durationInFrames = config?.durationInFrames ?? 1;
    const layout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PlayerUI.useMemo12[layout]": ()=>{
            if (!config || !canvasSize) {
                return null;
            }
            return calculateCanvasTransformation({
                canvasSize,
                compositionHeight: config.height,
                compositionWidth: config.width,
                previewSize: "auto"
            });
        }
    }["PlayerUI.useMemo12[layout]"], [
        canvasSize,
        config
    ]);
    const scale = layout?.scale ?? 1;
    const canvasContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PlayerUI.useMemo12[canvasContent]": ()=>({
                rootRef: canvasContentRef,
                scale
            })
    }["PlayerUI.useMemo12[canvasContent]"], [
        scale
    ]);
    const initialScaleIgnored = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PlayerUI.useEffect12": ()=>{
            if (!initialScaleIgnored.current) {
                initialScaleIgnored.current = true;
                return;
            }
            player.emitter.dispatchScaleChange(scale);
        }
    }["PlayerUI.useEffect12"], [
        player.emitter,
        scale
    ]);
    const { setMediaVolume, setPlayerMuted } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Internals"].SetMediaVolumeContext);
    const [showBufferIndicator, setShowBufferState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PlayerUI.useEffect12": ()=>{
            let timeout = null;
            let stopped = false;
            const onBuffer = {
                "PlayerUI.useEffect12.onBuffer": ()=>{
                    stopped = false;
                    requestAnimationFrame({
                        "PlayerUI.useEffect12.onBuffer": ()=>{
                            if (bufferStateDelayInMilliseconds === 0) {
                                setShowBufferState(true);
                            } else {
                                timeout = setTimeout({
                                    "PlayerUI.useEffect12.onBuffer": ()=>{
                                        if (!stopped) {
                                            setShowBufferState(true);
                                        }
                                    }
                                }["PlayerUI.useEffect12.onBuffer"], bufferStateDelayInMilliseconds);
                            }
                        }
                    }["PlayerUI.useEffect12.onBuffer"]);
                }
            }["PlayerUI.useEffect12.onBuffer"];
            const onResume = {
                "PlayerUI.useEffect12.onResume": ()=>{
                    requestAnimationFrame({
                        "PlayerUI.useEffect12.onResume": ()=>{
                            stopped = true;
                            setShowBufferState(false);
                            if (timeout) {
                                clearTimeout(timeout);
                            }
                        }
                    }["PlayerUI.useEffect12.onResume"]);
                }
            }["PlayerUI.useEffect12.onResume"];
            player.emitter.addEventListener("waiting", onBuffer);
            player.emitter.addEventListener("resume", onResume);
            return ({
                "PlayerUI.useEffect12": ()=>{
                    player.emitter.removeEventListener("waiting", onBuffer);
                    player.emitter.removeEventListener("resume", onResume);
                    setShowBufferState(false);
                    if (timeout) {
                        clearTimeout(timeout);
                    }
                    stopped = true;
                }
            })["PlayerUI.useEffect12"];
        }
    }["PlayerUI.useEffect12"], [
        bufferStateDelayInMilliseconds,
        player.emitter
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, {
        "PlayerUI.useImperativeHandle": ()=>{
            const methods = {
                play,
                pause: {
                    "PlayerUI.useImperativeHandle": ()=>{
                        setHasPausedToResume(false);
                        player.pause();
                    }
                }["PlayerUI.useImperativeHandle"],
                toggle,
                getContainerNode: {
                    "PlayerUI.useImperativeHandle": ()=>container.current
                }["PlayerUI.useImperativeHandle"],
                getCurrentFrame: player.getCurrentFrame,
                isPlaying: player.isPlaying,
                seekTo: {
                    "PlayerUI.useImperativeHandle": (f)=>{
                        const lastFrame = durationInFrames - 1;
                        const frameToSeekTo = Math.max(0, Math.min(lastFrame, f));
                        if (player.isPlaying()) {
                            const pauseToResume = frameToSeekTo !== lastFrame || loop;
                            setHasPausedToResume(pauseToResume);
                            player.pause();
                        }
                        if (frameToSeekTo === lastFrame && !loop) {
                            player.emitter.dispatchEnded();
                        }
                        player.seek(frameToSeekTo);
                    }
                }["PlayerUI.useImperativeHandle"],
                isFullscreen: {
                    "PlayerUI.useImperativeHandle": ()=>{
                        const { current } = container;
                        if (!current) {
                            return false;
                        }
                        return document.fullscreenElement === current || document.webkitFullscreenElement === current;
                    }
                }["PlayerUI.useImperativeHandle"],
                requestFullscreen,
                exitFullscreen,
                getVolume: {
                    "PlayerUI.useImperativeHandle": ()=>{
                        if (playerMuted) {
                            return 0;
                        }
                        return mediaVolume;
                    }
                }["PlayerUI.useImperativeHandle"],
                setVolume: {
                    "PlayerUI.useImperativeHandle": (vol)=>{
                        if (typeof vol !== "number") {
                            throw new TypeError(`setVolume() takes a number, got value of type ${typeof vol}`);
                        }
                        if (isNaN(vol)) {
                            throw new TypeError(`setVolume() got a number that is NaN. Volume must be between 0 and 1.`);
                        }
                        if (vol < 0 || vol > 1) {
                            throw new TypeError(`setVolume() got a number that is out of range. Must be between 0 and 1, got ${vol}`);
                        }
                        setMediaVolume(vol);
                    }
                }["PlayerUI.useImperativeHandle"],
                isMuted: {
                    "PlayerUI.useImperativeHandle": ()=>isMuted
                }["PlayerUI.useImperativeHandle"],
                mute: {
                    "PlayerUI.useImperativeHandle": ()=>{
                        setPlayerMuted(true);
                    }
                }["PlayerUI.useImperativeHandle"],
                unmute: {
                    "PlayerUI.useImperativeHandle": ()=>{
                        setPlayerMuted(false);
                    }
                }["PlayerUI.useImperativeHandle"],
                getScale: {
                    "PlayerUI.useImperativeHandle": ()=>scale
                }["PlayerUI.useImperativeHandle"],
                pauseAndReturnToPlayStart: {
                    "PlayerUI.useImperativeHandle": ()=>{
                        player.pauseAndReturnToPlayStart();
                    }
                }["PlayerUI.useImperativeHandle"]
            };
            return Object.assign(player.emitter, methods);
        }
    }["PlayerUI.useImperativeHandle"], [
        durationInFrames,
        exitFullscreen,
        loop,
        playerMuted,
        isMuted,
        mediaVolume,
        player,
        play,
        requestFullscreen,
        setPlayerMuted,
        setMediaVolume,
        toggle,
        scale
    ]);
    const VideoComponent = video ? video.component : null;
    const outerStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PlayerUI.useMemo12[outerStyle]": ()=>{
            return calculateOuterStyle({
                canvasSize,
                config,
                style,
                overflowVisible,
                layout
            });
        }
    }["PlayerUI.useMemo12[outerStyle]"], [
        canvasSize,
        config,
        layout,
        overflowVisible,
        style
    ]);
    const outer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PlayerUI.useMemo12[outer]": ()=>{
            return calculateOuter({
                config,
                layout,
                scale,
                overflowVisible
            });
        }
    }["PlayerUI.useMemo12[outer]"], [
        config,
        layout,
        overflowVisible,
        scale
    ]);
    const containerStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PlayerUI.useMemo12[containerStyle]": ()=>{
            return calculateContainerStyle({
                config,
                layout,
                scale,
                overflowVisible
            });
        }
    }["PlayerUI.useMemo12[containerStyle]"], [
        config,
        layout,
        overflowVisible,
        scale
    ]);
    const playerPause = player.pause;
    const playerDispatchError = player.emitter.dispatchError;
    const onError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PlayerUI.useCallback10[onError]": (error)=>{
            playerPause();
            playerDispatchError(error);
        }
    }["PlayerUI.useCallback10[onError]"], [
        playerDispatchError,
        playerPause
    ]);
    const onFullscreenButtonClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PlayerUI.useCallback10[onFullscreenButtonClick]": (e)=>{
            e.stopPropagation();
            requestFullscreen();
        }
    }["PlayerUI.useCallback10[onFullscreenButtonClick]"], [
        requestFullscreen
    ]);
    const onExitFullscreenButtonClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PlayerUI.useCallback10[onExitFullscreenButtonClick]": (e)=>{
            e.stopPropagation();
            exitFullscreen();
        }
    }["PlayerUI.useCallback10[onExitFullscreenButtonClick]"], [
        exitFullscreen
    ]);
    const onSingleClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PlayerUI.useCallback10[onSingleClick]": (e)=>{
            const rightClick = e instanceof MouseEvent ? e.button === 2 : e.nativeEvent.button;
            if (rightClick) {
                return;
            }
            toggle(e);
        }
    }["PlayerUI.useCallback10[onSingleClick]"], [
        toggle
    ]);
    const onSeekStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PlayerUI.useCallback10[onSeekStart]": ()=>{
            setSeeking(true);
        }
    }["PlayerUI.useCallback10[onSeekStart]"], []);
    const onSeekEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PlayerUI.useCallback10[onSeekEnd]": ()=>{
            setSeeking(false);
        }
    }["PlayerUI.useCallback10[onSeekEnd]"], []);
    const onDoubleClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PlayerUI.useCallback10[onDoubleClick]": ()=>{
            if (isFullscreen) {
                exitFullscreen();
            } else {
                requestFullscreen();
            }
        }
    }["PlayerUI.useCallback10[onDoubleClick]"], [
        exitFullscreen,
        isFullscreen,
        requestFullscreen
    ]);
    const { handlePointerDown, handleDoubleClick } = useClickPreventionOnDoubleClick(onSingleClick, onDoubleClick, doubleClickToFullscreen && allowFullscreen && supportsFullScreen);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PlayerUI.useEffect12": ()=>{
            if (shouldAutoplay) {
                setHasPlayed(true);
                player.playAsAutoPlay();
                setShouldAutoPlay(false);
            }
        }
    }["PlayerUI.useEffect12"], [
        player,
        shouldAutoplay
    ]);
    const loadingMarkup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PlayerUI.useMemo12[loadingMarkup]": ()=>{
            return renderLoading ? renderLoading({
                height: outerStyle.height,
                width: outerStyle.width,
                isBuffering: showBufferIndicator
            }) : null;
        }
    }["PlayerUI.useMemo12[loadingMarkup]"], [
        outerStyle.height,
        outerStyle.width,
        renderLoading,
        showBufferIndicator
    ]);
    const currentScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PlayerUI.useMemo12[currentScale]": ()=>{
            return {
                type: "scale",
                scale
            };
        }
    }["PlayerUI.useMemo12[currentScale]"], [
        scale
    ]);
    if (!config) {
        return null;
    }
    const poster = renderPoster ? renderPoster({
        height: posterFillMode === "player-size" ? outerStyle.height : config.height,
        width: posterFillMode === "player-size" ? outerStyle.width : config.width,
        isBuffering: showBufferIndicator
    }) : null;
    if (poster === undefined) {
        throw new TypeError("renderPoster() must return a React element, but undefined was returned");
    }
    const shouldShowPoster = poster && [
        showPosterWhenPaused && !playing && !seeking,
        showPosterWhenEnded && frame === durationInFrames - 1 && !playing,
        showPosterWhenUnplayed && !hasPlayed && !playing,
        showPosterWhenBuffering && showBufferIndicator && playing,
        showPosterWhenBufferingAndPaused && showBufferIndicator && !playing
    ].some(Boolean);
    const { left, top, width, height, ...outerWithoutScale } = outer;
    const content = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                style: outer,
                onPointerDown: clickToPlay ? handlePointerDown : undefined,
                onDoubleClick: doubleClickToFullscreen ? handleDoubleClick : undefined,
                children: [
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                        ref: canvasContentRef,
                        style: containerStyle,
                        className: playerCssClassname(overrideInternalClassName),
                        children: [
                            VideoComponent ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ErrorBoundary, {
                                onError,
                                errorFallback,
                                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Internals"].CurrentScaleContext.Provider, {
                                    value: currentScale,
                                    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(CanvasOverlayContext.Provider, {
                                        value: null,
                                        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(VideoComponent, {
                                            ...video?.props ?? {},
                                            ...inputProps ?? {}
                                        })
                                    })
                                })
                            }) : null,
                            shouldShowPoster && posterFillMode === "composition-size" ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                style: {
                                    ...outerWithoutScale,
                                    width: config.width,
                                    height: config.height
                                },
                                onPointerDown: clickToPlay ? handlePointerDown : undefined,
                                onDoubleClick: doubleClickToFullscreen ? handleDoubleClick : undefined,
                                children: poster
                            }) : null
                        ]
                    }),
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(RenderWarningIfBlacklist, {}),
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(CanvasContentContext.Provider, {
                        value: canvasContent,
                        children: canvasOverlay
                    })
                ]
            }),
            shouldShowPoster && posterFillMode === "player-size" ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                style: outer,
                onPointerDown: clickToPlay ? handlePointerDown : undefined,
                onDoubleClick: doubleClickToFullscreen ? handleDoubleClick : undefined,
                children: poster
            }) : null,
            controls ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Controls, {
                fps: config.fps,
                playing,
                toggle,
                durationInFrames: config.durationInFrames,
                containerRef: container,
                onFullscreenButtonClick,
                isFullscreen,
                allowFullscreen,
                showVolumeControls,
                onExitFullscreenButtonClick,
                spaceKeyToPlayOrPause,
                onSeekEnd,
                onSeekStart,
                inFrame,
                outFrame,
                initiallyShowControls,
                canvasSize,
                renderFullscreenButton,
                renderPlayPauseButton,
                alwaysShowControls,
                showPlaybackRateControl,
                buffering: showBufferIndicator,
                hideControlsWhenPointerDoesntMove,
                onDoubleClick: doubleClickToFullscreen ? handleDoubleClick : undefined,
                onPointerDown: clickToPlay ? handlePointerDown : undefined,
                renderMuteButton,
                renderVolumeSlider,
                renderCustomControls
            }) : null
        ]
    });
    if (noSuspense || IS_NODE && !doesReactVersionSupportSuspense) {
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
            ref: container,
            style: outerStyle,
            className,
            children: content
        });
    }
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        ref: container,
        style: outerStyle,
        className,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
            fallback: loadingMarkup,
            children: content
        })
    });
};
var PlayerUI_default = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(PlayerUI);
;
;
;
var DEFAULT_VOLUME_PERSISTENCE_KEY = "remotion.volumePreference";
var persistVolume = (volume, logLevel, volumePersistenceKey)=>{
    if (typeof window === "undefined") {
        return;
    }
    try {
        window.localStorage.setItem(volumePersistenceKey ?? DEFAULT_VOLUME_PERSISTENCE_KEY, String(volume));
    } catch (e) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Internals"].Log.error({
            logLevel,
            tag: null
        }, "Could not persist volume", e);
    }
};
var getPreferredVolume = (volumePersistenceKey)=>{
    if (typeof window === "undefined") {
        return 1;
    }
    try {
        const val = window.localStorage.getItem(volumePersistenceKey ?? DEFAULT_VOLUME_PERSISTENCE_KEY);
        return val ? Number(val) : 1;
    } catch  {
        return 1;
    }
};
;
var PLAYER_COMP_ID = "player-comp";
var SharedPlayerContexts = ({ children, timelineContext, playbackRateContext, fps, compositionHeight, compositionWidth, durationInFrames, component, numberOfSharedAudioTags, initiallyMuted, logLevel, audioLatencyHint, sampleRate, volumePersistenceKey, initialVolume, inputProps, audioEnabled, _experimentalKeepAudioContextAlive })=>{
    const persistVolumeToStorage = initialVolume === undefined;
    const compositionManagerContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SharedPlayerContexts.useMemo13[compositionManagerContext]": ()=>{
            const context = {
                compositions: [
                    {
                        component,
                        durationInFrames,
                        height: compositionHeight,
                        width: compositionWidth,
                        fps,
                        id: PLAYER_COMP_ID,
                        order: null,
                        folderName: null,
                        parentFolderName: null,
                        schema: null,
                        calculateMetadata: null,
                        stack: null
                    }
                ],
                folders: [],
                currentAssetMetadata: null,
                currentCompositionMetadata: {
                    defaultCodec: null,
                    defaultOutName: null,
                    defaultPixelFormat: null,
                    defaultProResProfile: null,
                    defaultSampleRate: null,
                    defaultVideoImageFormat: null,
                    durationInFrames,
                    fps,
                    height: compositionHeight,
                    width: compositionWidth,
                    props: inputProps
                },
                canvasContent: {
                    type: "composition",
                    compositionId: "player-comp"
                }
            };
            return context;
        }
    }["SharedPlayerContexts.useMemo13[compositionManagerContext]"], [
        component,
        durationInFrames,
        compositionHeight,
        compositionWidth,
        fps,
        inputProps
    ]);
    const [playerMuted, setPlayerMuted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "SharedPlayerContexts.useState11": ()=>initiallyMuted
    }["SharedPlayerContexts.useState11"]);
    const [mediaVolume, setMediaVolume] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "SharedPlayerContexts.useState11": ()=>persistVolumeToStorage ? getPreferredVolume(volumePersistenceKey ?? null) : initialVolume
    }["SharedPlayerContexts.useState11"]);
    const mediaVolumeContextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SharedPlayerContexts.useMemo13[mediaVolumeContextValue]": ()=>{
            return {
                playerMuted,
                mediaVolume
            };
        }
    }["SharedPlayerContexts.useMemo13[mediaVolumeContextValue]"], [
        playerMuted,
        mediaVolume
    ]);
    const audioContextWasCreated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const shouldCreateAudioContext = audioContextWasCreated.current || audioEnabled && !playerMuted && mediaVolume > 0;
    audioContextWasCreated.current = shouldCreateAudioContext;
    const setMediaVolumeAndPersist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SharedPlayerContexts.useCallback11[setMediaVolumeAndPersist]": (vol)=>{
            setMediaVolume(vol);
            if (persistVolumeToStorage) {
                persistVolume(vol, logLevel, volumePersistenceKey ?? null);
            }
        }
    }["SharedPlayerContexts.useCallback11[setMediaVolumeAndPersist]"], [
        persistVolumeToStorage,
        logLevel,
        volumePersistenceKey
    ]);
    const setMediaVolumeContextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SharedPlayerContexts.useMemo13[setMediaVolumeContextValue]": ()=>{
            return {
                setPlayerMuted,
                setMediaVolume: setMediaVolumeAndPersist
            };
        }
    }["SharedPlayerContexts.useMemo13[setMediaVolumeContextValue]"], [
        setMediaVolumeAndPersist
    ]);
    const logLevelContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SharedPlayerContexts.useMemo13[logLevelContext]": ()=>{
            return {
                logLevel,
                mountTime: Date.now()
            };
        }
    }["SharedPlayerContexts.useMemo13[logLevelContext]"], [
        logLevel
    ]);
    const env = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SharedPlayerContexts.useMemo13[env]": ()=>{
            return {
                isPlayer: true,
                isRendering: false,
                isStudio: false,
                isClientSideRendering: false,
                isReadOnlyStudio: false
            };
        }
    }["SharedPlayerContexts.useMemo13[env]"], []);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Internals"].RemotionEnvironmentContext.Provider, {
        value: env,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Internals"].LogLevelContext.Provider, {
            value: logLevelContext,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Internals"].CanUseRemotionHooksProvider, {
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Internals"].AbsoluteTimeContext.Provider, {
                    value: timelineContext,
                    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Internals"].PlaybackRateContext.Provider, {
                        value: playbackRateContext,
                        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Internals"].TimelineContext.Provider, {
                            value: timelineContext,
                            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Internals"].CompositionManager.Provider, {
                                value: compositionManagerContext,
                                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Internals"].VideoProvider, {
                                    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Internals"].PrefetchProvider, {
                                        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Internals"].DurationsContextProvider, {
                                            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Internals"].MediaVolumeContext.Provider, {
                                                value: mediaVolumeContextValue,
                                                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Internals"].SetMediaVolumeContext.Provider, {
                                                    value: setMediaVolumeContextValue,
                                                    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Internals"].BufferingProvider, {
                                                        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Internals"].SharedAudioContextProvider, {
                                                            audioLatencyHint,
                                                            audioEnabled: shouldCreateAudioContext,
                                                            previewSampleRate: sampleRate,
                                                            _experimentalKeepAudioContextAlive,
                                                            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Internals"].SharedAudioTagsContextProvider, {
                                                                numberOfAudioTags: numberOfSharedAudioTags,
                                                                children
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    });
};
;
var warningShown = false;
var acknowledgeRemotionLicenseMessage = (acknowledge, logLevel)=>{
    if (acknowledge) {
        return;
    }
    if (warningShown) {
        return;
    }
    warningShown = true;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Internals"].Log.warn({
        logLevel,
        tag: null
    }, "Note: Some companies are required to obtain a license to use Remotion. See: https://remotion.dev/license\nPass the `acknowledgeRemotionLicense` prop to `<Player />` function to make this message disappear.");
};
// src/utils/validate-in-out-frame.ts
var validateSingleFrame = (frame, variableName)=>{
    if (typeof frame === "undefined" || frame === null) {
        return frame ?? null;
    }
    if (typeof frame !== "number") {
        throw new TypeError(`"${variableName}" must be a number, but is ${JSON.stringify(frame)}`);
    }
    if (Number.isNaN(frame)) {
        throw new TypeError(`"${variableName}" must not be NaN, but is ${JSON.stringify(frame)}`);
    }
    if (!Number.isFinite(frame)) {
        throw new TypeError(`"${variableName}" must be finite, but is ${JSON.stringify(frame)}`);
    }
    if (frame % 1 !== 0) {
        throw new TypeError(`"${variableName}" must be an integer, but is ${JSON.stringify(frame)}`);
    }
    return frame;
};
var validateInOutFrames = ({ inFrame, durationInFrames, outFrame })=>{
    const validatedInFrame = validateSingleFrame(inFrame, "inFrame");
    const validatedOutFrame = validateSingleFrame(outFrame, "outFrame");
    if (validatedInFrame === null && validatedOutFrame === null) {
        return;
    }
    if (validatedInFrame !== null && validatedInFrame > durationInFrames - 1) {
        throw new Error("inFrame must be less than (durationInFrames - 1), but is " + validatedInFrame);
    }
    if (validatedOutFrame !== null && validatedOutFrame > durationInFrames - 1) {
        throw new Error("outFrame must be less than (durationInFrames - 1), but is " + validatedOutFrame);
    }
    if (validatedInFrame !== null && validatedInFrame < 0) {
        throw new Error("inFrame must be greater than 0, but is " + validatedInFrame);
    }
    if (validatedOutFrame !== null && validatedOutFrame <= 0) {
        throw new Error(`outFrame must be greater than 0, but is ${validatedOutFrame}. If you want to render a single frame, use <Thumbnail /> instead.`);
    }
    if (validatedOutFrame !== null && validatedInFrame !== null && validatedOutFrame <= validatedInFrame) {
        throw new Error("outFrame must be greater than inFrame, but is " + validatedOutFrame + " <= " + validatedInFrame);
    }
};
// src/utils/validate-initial-frame.ts
var validateInitialFrame = ({ initialFrame, durationInFrames })=>{
    if (typeof durationInFrames !== "number") {
        throw new Error(`\`durationInFrames\` must be a number, but is ${JSON.stringify(durationInFrames)}`);
    }
    if (typeof initialFrame === "undefined") {
        return;
    }
    if (typeof initialFrame !== "number") {
        throw new Error(`\`initialFrame\` must be a number, but is ${JSON.stringify(initialFrame)}`);
    }
    if (Number.isNaN(initialFrame)) {
        throw new Error(`\`initialFrame\` must be a number, but is NaN`);
    }
    if (!Number.isFinite(initialFrame)) {
        throw new Error(`\`initialFrame\` must be a number, but is Infinity`);
    }
    if (initialFrame % 1 !== 0) {
        throw new Error(`\`initialFrame\` must be an integer, but is ${JSON.stringify(initialFrame)}`);
    }
    if (initialFrame > durationInFrames - 1) {
        throw new Error(`\`initialFrame\` must be less or equal than \`durationInFrames - 1\`, but is ${JSON.stringify(initialFrame)}`);
    }
};
// src/utils/validate-playbackrate.ts
var validatePlaybackRate = (playbackRate)=>{
    if (playbackRate === undefined) {
        return;
    }
    if (playbackRate > 10) {
        throw new Error(`The highest possible playback rate is 10. You passed: ${playbackRate}`);
    }
    if (playbackRate < -10) {
        throw new Error(`The lowest possible playback rate is -10. You passed: ${playbackRate}`);
    }
    if (playbackRate === 0) {
        throw new Error(`A playback rate of 0 is not supported.`);
    }
};
;
var validateFps = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$no$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NoReactInternals"].validateFps;
var validateDimension = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$no$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NoReactInternals"].validateDimension;
var validateDurationInFrames = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$no$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NoReactInternals"].validateDurationInFrames;
var validateDefaultAndInputProps = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$no$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NoReactInternals"].validateDefaultAndInputProps;
;
var componentOrNullIfLazy = (props)=>{
    if ("component" in props) {
        return props.component;
    }
    return null;
};
var TimelineSequenceObserverComponent = ({ onTimelineSequenceChange })=>{
    const registry = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Internals"].SequenceRegistryContext);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "TimelineSequenceObserverComponent.useLayoutEffect3": ()=>{
            if (registry === null) {
                throw new Error("Timeline sequence observer requires a sequence registry");
            }
            const publish = {
                "TimelineSequenceObserverComponent.useLayoutEffect3.publish": ()=>onTimelineSequenceChange(registry.getSnapshot())
            }["TimelineSequenceObserverComponent.useLayoutEffect3.publish"];
            const unsubscribe = registry.subscribe(publish);
            publish();
            return unsubscribe;
        }
    }["TimelineSequenceObserverComponent.useLayoutEffect3"], [
        onTimelineSequenceChange,
        registry
    ]);
    return null;
};
var PlayerFn = ({ durationInFrames, compositionHeight, compositionWidth, fps, inputProps, style, controls = false, loop = false, autoPlay = false, showVolumeControls = true, allowFullscreen = true, clickToPlay, doubleClickToFullscreen = false, spaceKeyToPlayOrPause = true, moveToBeginningWhenEnded = true, numberOfSharedAudioTags = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$no$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NoReactInternals"].ENABLE_V5_BREAKING_CHANGES ? 0 : 5, errorFallback = ()=>"⚠️", playbackRate = 1, renderLoading, className, showPosterWhenUnplayed, showPosterWhenEnded, showPosterWhenPaused, showPosterWhenBuffering, showPosterWhenBufferingAndPaused, initialFrame, renderPoster, inFrame, outFrame, initiallyShowControls, renderFullscreenButton, renderPlayPauseButton, renderVolumeSlider, renderCustomControls, alwaysShowControls = false, initiallyMuted = false, showPlaybackRateControl = false, posterFillMode = "player-size", bufferStateDelayInMilliseconds, defaultPremountInSeconds = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$no$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NoReactInternals"].DEFAULT_PREMOUNT_IN_SECONDS, hideControlsWhenPointerDoesntMove = true, overflowVisible = false, renderMuteButton, browserMediaControlsBehavior: passedBrowserMediaControlsBehavior, overrideInternalClassName, logLevel = "info", noSuspense, acknowledgeRemotionLicense, audioLatencyHint = "playback", sampleRate = 48000, volumePersistenceKey, initialVolume, _experimentalKeepAudioContextAlive = false, ...componentProps }, ref)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$no$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NoReactInternals"].validateDefaultPremountInSeconds(defaultPremountInSeconds);
    if (typeof window !== "undefined") {
        window.remotion_isPlayer = true;
    }
    const onTimelineSequenceChange = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(TimelineSequenceObserverContext);
    if (componentProps.defaultProps !== undefined) {
        throw new Error("The <Player /> component does not accept `defaultProps`, but some were passed. Use `inputProps` instead.");
    }
    const componentForValidation = componentOrNullIfLazy(componentProps);
    if (componentForValidation?.type === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Composition"]) {
        throw new TypeError(`'component' should not be an instance of <Composition/>. Pass the React component directly, and set the duration, fps and dimensions as separate props. See https://www.remotion.dev/docs/player/examples for an example.`);
    }
    if (componentForValidation === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Composition"]) {
        throw new TypeError(`'component' must not be the 'Composition' component. Pass your own React component directly, and set the duration, fps and dimensions as separate props. See https://www.remotion.dev/docs/player/examples for an example.`);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "PlayerFn.useState12": ()=>acknowledgeRemotionLicenseMessage(Boolean(acknowledgeRemotionLicense), logLevel)
    }["PlayerFn.useState12"]);
    const component = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Internals"].useLazyComponent({
        compProps: componentProps,
        componentName: "Player",
        noSuspense: Boolean(noSuspense)
    });
    validateInitialFrame({
        initialFrame,
        durationInFrames
    });
    const [frame, setFrame] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "PlayerFn.useState12": ()=>({
                [PLAYER_COMP_ID]: initialFrame ?? 0
            })
    }["PlayerFn.useState12"]);
    const seek = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Internals"].useTimelineSeek(setFrame);
    const frameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(frame);
    frameRef.current = frame;
    const rootRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const audioAndVideoTags = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const playingStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PlayerFn.useMemo14[playingStore]": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Internals"].createRuntimeValueStore({
                playing: false
            })
    }["PlayerFn.useMemo14[playingStore]"], []);
    const bufferingStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PlayerFn.useMemo14[bufferingStore]": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Internals"].createRuntimeValueStore({
                buffering: false
            })
    }["PlayerFn.useMemo14[bufferingStore]"], []);
    const readIsPlaying = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PlayerFn.useCallback12[readIsPlaying]": ()=>playingStore.store.getSnapshot().playing
    }["PlayerFn.useCallback12[readIsPlaying]"], [
        playingStore
    ]);
    const readIsBuffering = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PlayerFn.useCallback12[readIsBuffering]": ()=>bufferingStore.store.getSnapshot().buffering
    }["PlayerFn.useCallback12[readIsBuffering]"], [
        bufferingStore
    ]);
    const [currentPlaybackRate, setCurrentPlaybackRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(playbackRate);
    if (typeof compositionHeight !== "number") {
        throw new TypeError(`'compositionHeight' must be a number but got '${typeof compositionHeight}' instead`);
    }
    if (typeof compositionWidth !== "number") {
        throw new TypeError(`'compositionWidth' must be a number but got '${typeof compositionWidth}' instead`);
    }
    validateDimension(compositionHeight, "compositionHeight", "of the <Player /> component");
    validateDimension(compositionWidth, "compositionWidth", "of the <Player /> component");
    validateDurationInFrames(durationInFrames, {
        component: "of the <Player/> component",
        allowFloats: false
    });
    validateFps(fps, "as a prop of the <Player/> component", false);
    validateDefaultAndInputProps(inputProps, "inputProps", null);
    validateInOutFrames({
        durationInFrames,
        inFrame,
        outFrame
    });
    if (typeof controls !== "boolean" && typeof controls !== "undefined") {
        throw new TypeError(`'controls' must be a boolean or undefined but got '${typeof controls}' instead`);
    }
    if (typeof autoPlay !== "boolean" && typeof autoPlay !== "undefined") {
        throw new TypeError(`'autoPlay' must be a boolean or undefined but got '${typeof autoPlay}' instead`);
    }
    if (typeof loop !== "boolean" && typeof loop !== "undefined") {
        throw new TypeError(`'loop' must be a boolean or undefined but got '${typeof loop}' instead`);
    }
    if (typeof doubleClickToFullscreen !== "boolean" && typeof doubleClickToFullscreen !== "undefined") {
        throw new TypeError(`'doubleClickToFullscreen' must be a boolean or undefined but got '${typeof doubleClickToFullscreen}' instead`);
    }
    if (typeof showVolumeControls !== "boolean" && typeof showVolumeControls !== "undefined") {
        throw new TypeError(`'showVolumeControls' must be a boolean or undefined but got '${typeof showVolumeControls}' instead`);
    }
    if (typeof allowFullscreen !== "boolean" && typeof allowFullscreen !== "undefined") {
        throw new TypeError(`'allowFullscreen' must be a boolean or undefined but got '${typeof allowFullscreen}' instead`);
    }
    if (typeof clickToPlay !== "boolean" && typeof clickToPlay !== "undefined") {
        throw new TypeError(`'clickToPlay' must be a boolean or undefined but got '${typeof clickToPlay}' instead`);
    }
    if (typeof spaceKeyToPlayOrPause !== "boolean" && typeof spaceKeyToPlayOrPause !== "undefined") {
        throw new TypeError(`'spaceKeyToPlayOrPause' must be a boolean or undefined but got '${typeof spaceKeyToPlayOrPause}' instead`);
    }
    if (typeof sampleRate !== "number" || !Number.isFinite(sampleRate) || Number.isNaN(sampleRate) || sampleRate <= 0 || sampleRate % 1 !== 0) {
        throw new TypeError(`'sampleRate' must be a positive integer but got '${sampleRate}' instead`);
    }
    if (typeof initialVolume !== "undefined" && typeof initialVolume !== "number") {
        throw new TypeError(`'initialVolume' must be a number or undefined but got '${typeof initialVolume}' instead`);
    }
    if (typeof initialVolume === "number" && (!Number.isFinite(initialVolume) || Number.isNaN(initialVolume) || initialVolume < 0 || initialVolume > 1)) {
        throw new TypeError(`'initialVolume' must be between 0 and 1 but got '${initialVolume}' instead`);
    }
    if (typeof numberOfSharedAudioTags !== "number" || numberOfSharedAudioTags % 1 !== 0 || !Number.isFinite(numberOfSharedAudioTags) || Number.isNaN(numberOfSharedAudioTags) || numberOfSharedAudioTags < 0) {
        throw new TypeError(`'numberOfSharedAudioTags' must be an integer but got '${numberOfSharedAudioTags}' instead`);
    }
    validatePlaybackRate(currentPlaybackRate);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PlayerFn.useEffect13": ()=>{
            setCurrentPlaybackRate(playbackRate);
        }
    }["PlayerFn.useEffect13"], [
        playbackRate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, {
        "PlayerFn.useImperativeHandle2": ()=>rootRef.current
    }["PlayerFn.useImperativeHandle2"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "PlayerFn.useState12": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Internals"].playbackLogging({
                logLevel,
                message: `[player] Mounting <Player>. User agent = ${typeof navigator === "undefined" ? "server" : navigator.userAgent}`,
                tag: "player",
                mountTime: Date.now()
            });
        }
    }["PlayerFn.useState12"]);
    const timelineContextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PlayerFn.useMemo14[timelineContextValue]": ()=>{
            return {
                frame,
                isPlaying: readIsPlaying,
                isInsideFreeze: false,
                audioAndVideoTags
            };
        }
    }["PlayerFn.useMemo14[timelineContextValue]"], [
        frame,
        readIsPlaying
    ]);
    const playbackRateContextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PlayerFn.useMemo14[playbackRateContextValue]": ()=>{
            return {
                playbackRate: currentPlaybackRate,
                setPlaybackRate: setCurrentPlaybackRate
            };
        }
    }["PlayerFn.useMemo14[playbackRateContextValue]"], [
        currentPlaybackRate
    ]);
    const setTimelineContextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PlayerFn.useMemo14[setTimelineContextValue]": ()=>{
            return {
                setFrameWithoutSeek: setFrame,
                seek,
                setPlaying: ({
                    "PlayerFn.useMemo14[setTimelineContextValue]": (updater)=>{
                        const current = playingStore.store.getSnapshot().playing;
                        const next = typeof updater === "function" ? updater(current) : updater;
                        if (current !== next) {
                            playingStore.setSnapshot({
                                playing: next
                            });
                        }
                    }
                })["PlayerFn.useMemo14[setTimelineContextValue]"],
                setBuffering: ({
                    "PlayerFn.useMemo14[setTimelineContextValue]": (buffering)=>{
                        if (readIsBuffering() !== buffering) {
                            bufferingStore.setSnapshot({
                                buffering
                            });
                        }
                    }
                })["PlayerFn.useMemo14[setTimelineContextValue]"],
                subscribePlaying: playingStore.store.subscribe,
                subscribeBuffering: bufferingStore.store.subscribe,
                isPlaying: readIsPlaying,
                isBuffering: readIsBuffering,
                frameRef,
                audioAndVideoTags
            };
        }
    }["PlayerFn.useMemo14[setTimelineContextValue]"], [
        bufferingStore,
        seek,
        setFrame,
        frameRef,
        playingStore,
        readIsBuffering,
        readIsPlaying
    ]);
    if (typeof window !== "undefined") {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
            "PlayerFn.useLayoutEffect3": ()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Internals"].CSSUtils.injectCSS(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Internals"].CSSUtils.makeDefaultPreviewCSS(`.${playerCssClassname(overrideInternalClassName)}`, "#fff"));
            }
        }["PlayerFn.useLayoutEffect3"], [
            overrideInternalClassName
        ]);
    }
    const actualInputProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PlayerFn.useMemo14[actualInputProps]": ()=>inputProps ?? {}
    }["PlayerFn.useMemo14[actualInputProps]"], [
        inputProps
    ]);
    const browserMediaControlsBehavior = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PlayerFn.useMemo14[browserMediaControlsBehavior]": ()=>{
            return passedBrowserMediaControlsBehavior ?? {
                mode: "prevent-media-session"
            };
        }
    }["PlayerFn.useMemo14[browserMediaControlsBehavior]"], [
        passedBrowserMediaControlsBehavior
    ]);
    const player = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Internals"].IsPlayerContextProvider, {
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Internals"].SetTimelineContext.Provider, {
            value: setTimelineContextValue,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SharedPlayerContexts, {
                timelineContext: timelineContextValue,
                playbackRateContext: playbackRateContextValue,
                component,
                compositionHeight,
                compositionWidth,
                durationInFrames,
                fps,
                numberOfSharedAudioTags,
                initiallyMuted,
                logLevel,
                audioLatencyHint,
                sampleRate,
                _experimentalKeepAudioContextAlive,
                volumePersistenceKey,
                initialVolume,
                inputProps: actualInputProps,
                audioEnabled: true,
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(PlayerEmitterProvider, {
                    currentPlaybackRate,
                    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(PlayerUI_default, {
                        ref: rootRef,
                        posterFillMode,
                        renderLoading,
                        autoPlay: Boolean(autoPlay),
                        loop: Boolean(loop),
                        controls: Boolean(controls),
                        errorFallback,
                        style,
                        inputProps: actualInputProps,
                        allowFullscreen: Boolean(allowFullscreen),
                        moveToBeginningWhenEnded: Boolean(moveToBeginningWhenEnded),
                        clickToPlay: typeof clickToPlay === "boolean" ? clickToPlay : Boolean(controls),
                        showVolumeControls: Boolean(showVolumeControls),
                        doubleClickToFullscreen: Boolean(doubleClickToFullscreen),
                        spaceKeyToPlayOrPause: Boolean(spaceKeyToPlayOrPause),
                        playbackRate: currentPlaybackRate,
                        className: className ?? undefined,
                        showPosterWhenUnplayed: Boolean(showPosterWhenUnplayed),
                        showPosterWhenEnded: Boolean(showPosterWhenEnded),
                        showPosterWhenPaused: Boolean(showPosterWhenPaused),
                        showPosterWhenBuffering: Boolean(showPosterWhenBuffering),
                        showPosterWhenBufferingAndPaused: Boolean(showPosterWhenBufferingAndPaused),
                        renderPoster,
                        inFrame: inFrame ?? null,
                        outFrame: outFrame ?? null,
                        initiallyShowControls: initiallyShowControls ?? true,
                        renderFullscreen: renderFullscreenButton ?? null,
                        renderPlayPauseButton: renderPlayPauseButton ?? null,
                        renderMuteButton: renderMuteButton ?? null,
                        renderVolumeSlider: renderVolumeSlider ?? null,
                        renderCustomControls: renderCustomControls ?? null,
                        alwaysShowControls,
                        showPlaybackRateControl,
                        bufferStateDelayInMilliseconds: bufferStateDelayInMilliseconds ?? 300,
                        hideControlsWhenPointerDoesntMove,
                        overflowVisible,
                        browserMediaControlsBehavior,
                        overrideInternalClassName: overrideInternalClassName ?? undefined,
                        noSuspense: Boolean(noSuspense)
                    })
                })
            })
        })
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Internals"].DefaultPremountContext.Provider, {
        value: defaultPremountInSeconds,
        children: onTimelineSequenceChange ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Internals"].SequenceRegistrationContext.Provider, {
            value: true,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Internals"].SequenceManagerProvider, {
                children: [
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(TimelineSequenceObserverComponent, {
                        onTimelineSequenceChange
                    }),
                    player
                ]
            })
        }) : player
    });
};
var forward = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"];
var Player = forward(PlayerFn);
;
;
;
;
;
var useThumbnail = ()=>{
    const emitter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ThumbnailEmitterContext);
    if (!emitter) {
        throw new TypeError("Expected Player event emitter context");
    }
    const returnValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useThumbnail.useMemo15[returnValue]": ()=>{
            return {
                emitter
            };
        }
    }["useThumbnail.useMemo15[returnValue]"], [
        emitter
    ]);
    return returnValue;
};
;
var reactVersion2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].version.split(".")[0];
if (reactVersion2 === "0") {
    throw new Error(`Version ${reactVersion2} of "react" is not supported by Remotion`);
}
var doesReactVersionSupportSuspense2 = parseInt(reactVersion2, 10) >= 18;
var ThumbnailUI = ({ style, inputProps, errorFallback, renderLoading, className, overflowVisible, noSuspense, overrideInternalClassName }, ref)=>{
    const config = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Internals"].useUnsafeVideoConfig();
    const video = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Internals"].useVideo();
    const container = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasSize = useElementSize(container, {
        triggerOnWindowResize: false,
        shouldApplyCssTransforms: false
    });
    const layout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ThumbnailUI.useMemo16[layout]": ()=>{
            if (!config || !canvasSize) {
                return null;
            }
            return calculateCanvasTransformation({
                canvasSize,
                compositionHeight: config.height,
                compositionWidth: config.width,
                previewSize: "auto"
            });
        }
    }["ThumbnailUI.useMemo16[layout]"], [
        canvasSize,
        config
    ]);
    const scale = layout?.scale ?? 1;
    const thumbnail = useThumbnail();
    useBufferStateEmitter(thumbnail.emitter);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, {
        "ThumbnailUI.useImperativeHandle3": ()=>{
            const methods = {
                getContainerNode: {
                    "ThumbnailUI.useImperativeHandle3": ()=>container.current
                }["ThumbnailUI.useImperativeHandle3"],
                getScale: {
                    "ThumbnailUI.useImperativeHandle3": ()=>scale
                }["ThumbnailUI.useImperativeHandle3"]
            };
            return Object.assign(thumbnail.emitter, methods);
        }
    }["ThumbnailUI.useImperativeHandle3"], [
        scale,
        thumbnail.emitter
    ]);
    const VideoComponent = video ? video.component : null;
    const outerStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ThumbnailUI.useMemo16[outerStyle]": ()=>{
            return calculateOuterStyle({
                config,
                style,
                canvasSize,
                overflowVisible,
                layout
            });
        }
    }["ThumbnailUI.useMemo16[outerStyle]"], [
        canvasSize,
        config,
        layout,
        overflowVisible,
        style
    ]);
    const outer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ThumbnailUI.useMemo16[outer]": ()=>{
            return calculateOuter({
                config,
                layout,
                scale,
                overflowVisible
            });
        }
    }["ThumbnailUI.useMemo16[outer]"], [
        config,
        layout,
        overflowVisible,
        scale
    ]);
    const containerStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ThumbnailUI.useMemo16[containerStyle]": ()=>{
            return calculateContainerStyle({
                config,
                layout,
                scale,
                overflowVisible
            });
        }
    }["ThumbnailUI.useMemo16[containerStyle]"], [
        config,
        layout,
        overflowVisible,
        scale
    ]);
    const onError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ThumbnailUI.useCallback13[onError]": (error)=>{
            thumbnail.emitter.dispatchError(error);
        }
    }["ThumbnailUI.useCallback13[onError]"], [
        thumbnail.emitter
    ]);
    const loadingMarkup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ThumbnailUI.useMemo16[loadingMarkup]": ()=>{
            return renderLoading ? renderLoading({
                height: outerStyle.height,
                width: outerStyle.width,
                isBuffering: false
            }) : null;
        }
    }["ThumbnailUI.useMemo16[loadingMarkup]"], [
        outerStyle.height,
        outerStyle.width,
        renderLoading
    ]);
    const currentScaleContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ThumbnailUI.useMemo16[currentScaleContext]": ()=>{
            return {
                type: "scale",
                scale
            };
        }
    }["ThumbnailUI.useMemo16[currentScaleContext]"], [
        scale
    ]);
    if (!config) {
        return null;
    }
    const content = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        style: outer,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
            style: containerStyle,
            className: playerCssClassname(overrideInternalClassName),
            children: VideoComponent ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ErrorBoundary, {
                onError,
                errorFallback,
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Internals"].CurrentScaleContext.Provider, {
                    value: currentScaleContext,
                    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(VideoComponent, {
                        ...video?.props ?? {},
                        ...inputProps ?? {}
                    })
                })
            }) : null
        })
    });
    if (noSuspense || IS_NODE && !doesReactVersionSupportSuspense2) {
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
            ref: container,
            style: outerStyle,
            className,
            children: content
        });
    }
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        ref: container,
        style: outerStyle,
        className,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
            fallback: loadingMarkup,
            children: content
        })
    });
};
var ThumbnailUI_default = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(ThumbnailUI);
;
var ThumbnailFn = ({ frameToDisplay, style, inputProps, compositionHeight, compositionWidth, durationInFrames, fps, className, errorFallback = ()=>"⚠️", renderLoading, overflowVisible = false, overrideInternalClassName, logLevel = "info", noSuspense, ...componentProps }, ref)=>{
    if (typeof window !== "undefined") {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
            "ThumbnailFn.useLayoutEffect4": ()=>{
                window.remotion_isPlayer = true;
            }
        }["ThumbnailFn.useLayoutEffect4"], []);
    }
    const rootRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const audioAndVideoTags = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const bufferingStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ThumbnailFn.useMemo17[bufferingStore]": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Internals"].createRuntimeValueStore({
                buffering: false
            })
    }["ThumbnailFn.useMemo17[bufferingStore]"], []);
    const timelineState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ThumbnailFn.useMemo17[timelineState]": ()=>{
            const value = {
                isPlaying: {
                    "ThumbnailFn.useMemo17[timelineState]": ()=>false
                }["ThumbnailFn.useMemo17[timelineState]"],
                isInsideFreeze: false,
                frame: {
                    [PLAYER_COMP_ID]: frameToDisplay
                },
                audioAndVideoTags
            };
            return value;
        }
    }["ThumbnailFn.useMemo17[timelineState]"], [
        frameToDisplay
    ]);
    const playbackRateContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ThumbnailFn.useMemo17[playbackRateContext]": ()=>{
            return {
                playbackRate: 1,
                setPlaybackRate: ({
                    "ThumbnailFn.useMemo17[playbackRateContext]": ()=>{
                        throw new Error("thumbnail");
                    }
                })["ThumbnailFn.useMemo17[playbackRateContext]"]
            };
        }
    }["ThumbnailFn.useMemo17[playbackRateContext]"], []);
    const frameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(timelineState.frame);
    frameRef.current = timelineState.frame;
    const setTimelineContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ThumbnailFn.useMemo17[setTimelineContext]": ()=>{
            return {
                setFrameWithoutSeek: ({
                    "ThumbnailFn.useMemo17[setTimelineContext]": ()=>{
                        return;
                    }
                })["ThumbnailFn.useMemo17[setTimelineContext]"],
                seek: null,
                setPlaying: ({
                    "ThumbnailFn.useMemo17[setTimelineContext]": ()=>{
                        return;
                    }
                })["ThumbnailFn.useMemo17[setTimelineContext]"],
                setBuffering: ({
                    "ThumbnailFn.useMemo17[setTimelineContext]": (buffering)=>{
                        if (bufferingStore.store.getSnapshot().buffering !== buffering) {
                            bufferingStore.setSnapshot({
                                buffering
                            });
                        }
                    }
                })["ThumbnailFn.useMemo17[setTimelineContext]"],
                subscribePlaying: ({
                    "ThumbnailFn.useMemo17[setTimelineContext]": ()=>({
                            "ThumbnailFn.useMemo17[setTimelineContext]": ()=>{
                                return;
                            }
                        })["ThumbnailFn.useMemo17[setTimelineContext]"]
                })["ThumbnailFn.useMemo17[setTimelineContext]"],
                subscribeBuffering: bufferingStore.store.subscribe,
                isPlaying: ({
                    "ThumbnailFn.useMemo17[setTimelineContext]": ()=>false
                })["ThumbnailFn.useMemo17[setTimelineContext]"],
                isBuffering: ({
                    "ThumbnailFn.useMemo17[setTimelineContext]": ()=>bufferingStore.store.getSnapshot().buffering
                })["ThumbnailFn.useMemo17[setTimelineContext]"],
                frameRef,
                audioAndVideoTags
            };
        }
    }["ThumbnailFn.useMemo17[setTimelineContext]"], [
        bufferingStore
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, {
        "ThumbnailFn.useImperativeHandle4": ()=>rootRef.current
    }["ThumbnailFn.useImperativeHandle4"], []);
    const Component = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Internals"].useLazyComponent({
        compProps: componentProps,
        componentName: "Thumbnail",
        noSuspense: Boolean(noSuspense)
    });
    const [emitter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "ThumbnailFn.useState13": ()=>new ThumbnailEmitter
    }["ThumbnailFn.useState13"]);
    const passedInputProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ThumbnailFn.useMemo17[passedInputProps]": ()=>{
            return inputProps ?? {};
        }
    }["ThumbnailFn.useMemo17[passedInputProps]"], [
        inputProps
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Internals"].IsPlayerContextProvider, {
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Internals"].SetTimelineContext.Provider, {
            value: setTimelineContext,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SharedPlayerContexts, {
                timelineContext: timelineState,
                playbackRateContext,
                component: Component,
                compositionHeight,
                compositionWidth,
                durationInFrames,
                fps,
                numberOfSharedAudioTags: 0,
                initiallyMuted: true,
                logLevel,
                audioLatencyHint: "playback",
                sampleRate: 48000,
                inputProps: passedInputProps,
                audioEnabled: false,
                _experimentalKeepAudioContextAlive: false,
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ThumbnailEmitterContext.Provider, {
                    value: emitter,
                    children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ThumbnailUI_default, {
                        ref: rootRef,
                        className,
                        errorFallback,
                        inputProps: passedInputProps,
                        renderLoading,
                        style,
                        overflowVisible,
                        overrideInternalClassName,
                        noSuspense: Boolean(noSuspense)
                    })
                })
            })
        })
    });
};
var forward2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"];
var Thumbnail = forward2(ThumbnailFn);
// src/index.ts
var PlayerInternals = {
    PlayerEventEmitterContext,
    PlayerEmitter,
    usePlayerMethods,
    usePlayback,
    useElementSize,
    calculateCanvasTransformation,
    useHoverState,
    updateAllElementsSizes,
    PlayerEmitterProvider,
    BufferingIndicator,
    TimelineSequenceObserverContext,
    CanvasOverlayContext,
    CanvasContentContext
};
;
}),
]);

//# sourceMappingURL=5d329_%40remotion_player_dist_esm_index_mjs_11be14bf._.js.map