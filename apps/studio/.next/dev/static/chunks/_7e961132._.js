(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/studio/lib/motion-tokens.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Motion presets are shared by the gallery and future registry consumers. */ __turbopack_context__.s([
    "motionTokens",
    ()=>motionTokens
]);
const motionTokens = {
    duration: {
        instant: 0.12,
        fast: 0.16,
        exit: 0.18,
        standard: 0.24,
        considered: 0.48
    },
    ease: {
        enter: [
            0.16,
            1,
            0.3,
            1
        ],
        exit: [
            0.7,
            0,
            0.84,
            0
        ],
        standard: [
            0.22,
            1,
            0.36,
            1
        ],
        /** For elements that move while already on screen. */ inOut: [
            0.65,
            0,
            0.35,
            1
        ]
    },
    spring: {
        responsive: {
            type: "spring",
            stiffness: 520,
            damping: 38
        },
        gentle: {
            type: "spring",
            stiffness: 340,
            damping: 34
        },
        /** Presses, toggles, thumbs, and small indicators. Settles fast with a hint of life. */ snappy: {
            type: "spring",
            visualDuration: 0.26,
            bounce: 0.12
        },
        /** Panels, height changes, and layout shifts. Critically damped, never overshoots. */ smooth: {
            type: "spring",
            visualDuration: 0.4,
            bounce: 0
        },
        /** Shape morphs, shared layout highlights, and width changes that follow new content. */ morph: {
            type: "spring",
            visualDuration: 0.42,
            bounce: 0.16
        }
    },
    /** Stagger steps in seconds. Keep total stagger under roughly 0.4s. */ stagger: {
        char: 0.016,
        word: 0.04,
        line: 0.08,
        item: 0.035
    },
    /** Blur radii in px for text and content crossfades. Keep blur small and brief. */ blur: {
        subtle: 2,
        soft: 4,
        text: 8
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/studio/components/arc/button/button.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "button": "button-module__aQO0OG__button",
  "danger": "button-module__aQO0OG__danger",
  "ghost": "button-module__aQO0OG__ghost",
  "labelContent": "button-module__aQO0OG__labelContent",
  "labelPhase": "button-module__aQO0OG__labelPhase",
  "labelSlot": "button-module__aQO0OG__labelSlot",
  "lg": "button-module__aQO0OG__lg",
  "loader": "button-module__aQO0OG__loader",
  "loadingLabel": "button-module__aQO0OG__loadingLabel",
  "md": "button-module__aQO0OG__md",
  "primary": "button-module__aQO0OG__primary",
  "secondary": "button-module__aQO0OG__secondary",
  "sm": "button-module__aQO0OG__sm",
  "spin": "button-module__aQO0OG__spin",
  "spinner": "button-module__aQO0OG__spinner",
});
}),
"[project]/apps/studio/components/arc/button/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.7_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.7_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/framer-motion@12.43.0_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/framer-motion@12.43.0_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/framer-motion/dist/es/animation/animate/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion@12.43.0_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$use$2d$presence$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/framer-motion@12.43.0_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/framer-motion@12.43.0_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/framer-motion@12.43.0_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$lib$2f$motion$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/studio/lib/motion-tokens.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$button$2f$button$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/apps/studio/components/arc/button/button.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
/** Icon buttons press a little deeper, wide buttons a little less, so every size reads as the same push. */ const pressVariants = {
    pressed: (button)=>{
        const width = button.current?.offsetWidth ?? 0;
        return {
            scale: width > 220 ? .985 : width && width <= 48 ? .96 : .97,
            transition: {
                duration: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$lib$2f$motion$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionTokens"].duration.instant,
                ease: [
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$lib$2f$motion$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionTokens"].ease.standard
                ]
            }
        };
    }
};
const rest = {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)"
};
/** Text rises about .3em out of a soft blur; the outgoing label lifts away a little faster. */ const textIn = {
    opacity: 0,
    y: 4,
    filter: `blur(${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$lib$2f$motion$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionTokens"].blur.soft}px)`
};
const textOut = {
    opacity: 0,
    y: -3,
    filter: `blur(${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$lib$2f$motion$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionTokens"].blur.soft}px)`,
    transition: {
        duration: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$lib$2f$motion$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionTokens"].duration.fast,
        ease: [
            ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$lib$2f$motion$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionTokens"].ease.standard
        ]
    }
};
const iconIn = {
    opacity: 0,
    scale: .6,
    filter: `blur(${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$lib$2f$motion$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionTokens"].blur.subtle}px)`
};
const iconOut = {
    opacity: 0,
    scale: .6,
    filter: `blur(${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$lib$2f$motion$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionTokens"].blur.subtle}px)`,
    transition: {
        duration: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$lib$2f$motion$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionTokens"].duration.fast,
        ease: [
            ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$lib$2f$motion$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionTokens"].ease.standard
        ]
    }
};
const fadeIn = {
    ...rest,
    opacity: 0
};
const fadeOut = {
    opacity: 0,
    transition: {
        duration: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$lib$2f$motion$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionTokens"].duration.instant
    }
};
/** Scale rides the spring; opacity and blur tween so blur never overshoots below zero. */ const iconEnter = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$lib$2f$motion$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionTokens"].spring.snappy,
    opacity: {
        duration: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$lib$2f$motion$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionTokens"].duration.fast,
        ease: [
            ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$lib$2f$motion$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionTokens"].ease.enter
        ]
    },
    filter: {
        duration: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$lib$2f$motion$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionTokens"].duration.fast,
        ease: [
            ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$lib$2f$motion$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionTokens"].ease.enter
        ]
    }
};
/** A key for the label content: text plus element names, so a new label or icon crossfades while prop-only updates stay in place. */ function labelKey(node) {
    if (node == null || typeof node === "boolean") return "";
    if (typeof node === "string" || typeof node === "number" || typeof node === "bigint") return String(node);
    if (Array.isArray(node)) return node.map(labelKey).join("");
    if (!/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(node)) return "";
    const type = node.type;
    return `<${typeof type === "string" ? type : type?.displayName ?? type?.name ?? ""}>${labelKey(node.props.children)}`;
}
/** Springs the slot to the natural width of the incoming label when it changes, so a new label never snaps the button's size.
 *  The outgoing label is popped out of flow at once, so it never holds the old width. Other resizes (a late web font, a parent reflow) jump straight to the new width, so nothing wobbles on first paint. */ function useMorphWidth(content, key, reduced) {
    _s();
    const width = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])("auto");
    const lastKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(key), armedUntil = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "useMorphWidth.useLayoutEffect": ()=>{
            if (lastKey.current === key) return;
            lastKey.current = key;
            armedUntil.current = performance.now() + 700;
        }
    }["useMorphWidth.useLayoutEffect"], [
        key
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMorphWidth.useEffect": ()=>{
            const node = content.current, slot = node?.parentElement;
            if (!node || !slot || typeof ResizeObserver === "undefined") return;
            let measured = false;
            const observer = new ResizeObserver({
                "useMorphWidth.useEffect": ([entry])=>{
                    if (!entry) return;
                    const next = entry.contentRect.width;
                    if (!next || !measured || reduced || performance.now() > armedUntil.current) {
                        measured = next > 0;
                        width.jump(next || "auto");
                        delete slot.dataset.morphing;
                        return;
                    }
                    slot.dataset.morphing = "";
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animate"])(width, next, {
                        ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$lib$2f$motion$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionTokens"].spring.morph,
                        onComplete: {
                            "useMorphWidth.useEffect": ()=>{
                                delete slot.dataset.morphing;
                            }
                        }["useMorphWidth.useEffect"]
                    });
                }
            }["useMorphWidth.useEffect"]);
            observer.observe(node);
            return ({
                "useMorphWidth.useEffect": ()=>observer.disconnect()
            })["useMorphWidth.useEffect"];
        }
    }["useMorphWidth.useEffect"], [
        content,
        reduced,
        width
    ]);
    return width;
}
_s(useMorphWidth, "bTRRfKTOwbb7ODuTi0GHy1ZwpB8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"]
    ];
});
function LabelPhase({ children, icon, reduced, ref }) {
    _s1();
    const present = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$use$2d$presence$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsPresent"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].span, {
        ref: ref,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$button$2f$button$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].labelPhase,
        "aria-hidden": present ? undefined : true,
        initial: reduced ? fadeIn : icon ? iconIn : textIn,
        animate: rest,
        exit: reduced ? fadeOut : icon ? iconOut : textOut,
        transition: reduced ? {
            duration: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$lib$2f$motion$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionTokens"].duration.instant
        } : icon ? iconEnter : {
            duration: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$lib$2f$motion$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionTokens"].duration.standard,
            ease: [
                ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$lib$2f$motion$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionTokens"].ease.enter
            ]
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/studio/components/arc/button/button.tsx",
        lineNumber: 77,
        columnNumber: 10
    }, this);
}
_s1(LabelPhase, "2UrM/gPf11GNo77z0IU0ArVg2HU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$use$2d$presence$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsPresent"]
    ];
});
_c = LabelPhase;
const Button = /*#__PURE__*/ _s2((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c1 = _s2(function Button({ className, variant = "primary", size = "md", loading = false, disabled, children, onClick, ...props }, ref) {
    _s2();
    const reduceMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])() ?? false;
    const buttonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const contentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const key = labelKey(children);
    const width = useMorphWidth(contentRef, key, reduceMotion);
    const setRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Button.Button.useCallback[setRefs]": (node)=>{
            buttonRef.current = node;
            if (typeof ref === "function") ref(node);
            else if (ref) ref.current = node;
        }
    }["Button.Button.useCallback[setRefs]"], [
        ref
    ]);
    // A trigger that anchors a menu, popover, or dialog keeps its rect still while pressed, so the layer never measures a scaled anchor.
    // Radix triggers (asChild) pass aria-haspopup or data-state through; the stylesheet repeats the guard.
    const popup = props["aria-haspopup"];
    const anchorsLayer = popup !== undefined && popup !== false && popup !== "false" || props.role === "combobox" || props["data-state"] !== undefined;
    const inert = disabled || loading || props["aria-disabled"] === true || props["aria-disabled"] === "true";
    const classes = [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$button$2f$button$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button,
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$button$2f$button$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][variant],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$button$2f$button$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][size],
        className
    ].filter(Boolean).join(" ");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].button, {
        ref: setRefs,
        tabIndex: props.tabIndex ?? 0,
        className: classes,
        disabled: disabled,
        "aria-busy": loading || undefined,
        custom: buttonRef,
        variants: pressVariants,
        whileTap: reduceMotion || anchorsLayer || inert ? undefined : "pressed",
        transition: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$lib$2f$motion$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionTokens"].spring.snappy,
        ...props,
        // Loading keeps the button focusable (a disabled button would drop keyboard focus mid-action) and swallows presses instead.
        "aria-disabled": loading || props["aria-disabled"] || undefined,
        onClick: loading ? (event)=>event.preventDefault() : onClick,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                initial: false,
                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].span, {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$button$2f$button$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loader,
                    "aria-hidden": "true",
                    initial: reduceMotion ? {
                        opacity: 0
                    } : {
                        opacity: 0,
                        scale: .6
                    },
                    animate: {
                        opacity: 1,
                        scale: 1
                    },
                    exit: reduceMotion ? fadeOut : {
                        ...iconOut,
                        scale: .8
                    },
                    transition: reduceMotion ? {
                        duration: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$lib$2f$motion$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionTokens"].duration.instant
                    } : iconEnter,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$button$2f$button$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].spinner
                    }, void 0, false, {
                        fileName: "[project]/apps/studio/components/arc/button/button.tsx",
                        lineNumber: 117,
                        columnNumber: 336
                    }, this)
                }, "loader", false, {
                    fileName: "[project]/apps/studio/components/arc/button/button.tsx",
                    lineNumber: 117,
                    columnNumber: 20
                }, this) : null
            }, void 0, false, {
                fileName: "[project]/apps/studio/components/arc/button/button.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].span, {
                className: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$button$2f$button$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].labelSlot,
                    loading ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$button$2f$button$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loadingLabel : ""
                ].filter(Boolean).join(" "),
                style: {
                    width
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    ref: contentRef,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$button$2f$button$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].labelContent,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        mode: "popLayout",
                        initial: false,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LabelPhase, {
                            icon: !/\S/.test(key.replace(/<[^>]*>/g, "")),
                            reduced: reduceMotion,
                            children: children
                        }, key, false, {
                            fileName: "[project]/apps/studio/components/arc/button/button.tsx",
                            lineNumber: 122,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/studio/components/arc/button/button.tsx",
                        lineNumber: 121,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/studio/components/arc/button/button.tsx",
                    lineNumber: 120,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/studio/components/arc/button/button.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/studio/components/arc/button/button.tsx",
        lineNumber: 101,
        columnNumber: 5
    }, this);
}, "Q+fe3cVzWsBqobwbijxNDyTNh0c=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"],
        useMorphWidth
    ];
})), "Q+fe3cVzWsBqobwbijxNDyTNh0c=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"],
        useMorphWidth
    ];
});
_c2 = Button;
Button.displayName = "Button";
const __TURBOPACK__default__export__ = Button;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "LabelPhase");
__turbopack_context__.k.register(_c1, "Button$forwardRef");
__turbopack_context__.k.register(_c2, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/studio/components/arc/slider/slider.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "body": "slider-module___NXRZa__body",
  "bubble": "slider-module___NXRZa__bubble",
  "bubbleAnchor": "slider-module___NXRZa__bubbleAnchor",
  "column": "slider-module___NXRZa__column",
  "control": "slider-module___NXRZa__control",
  "dash": "slider-module___NXRZa__dash",
  "end": "slider-module___NXRZa__end",
  "fill": "slider-module___NXRZa__fill",
  "glyph": "slider-module___NXRZa__glyph",
  "header": "slider-module___NXRZa__header",
  "label": "slider-module___NXRZa__label",
  "markLabel": "slider-module___NXRZa__markLabel",
  "marks": "slider-module___NXRZa__marks",
  "number": "slider-module___NXRZa__number",
  "readout": "slider-module___NXRZa__readout",
  "root": "slider-module___NXRZa__root",
  "sizer": "slider-module___NXRZa__sizer",
  "start": "slider-module___NXRZa__start",
  "symbol": "slider-module___NXRZa__symbol",
  "thumb": "slider-module___NXRZa__thumb",
  "thumbLayer": "slider-module___NXRZa__thumbLayer",
  "thumbs": "slider-module___NXRZa__thumbs",
  "tick": "slider-module___NXRZa__tick",
  "track": "slider-module___NXRZa__track",
});
}),
"[project]/apps/studio/components/arc/slider/slider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Slider",
    ()=>Slider,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.7_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.7_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/framer-motion@12.43.0_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/framer-motion@12.43.0_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/framer-motion/dist/es/animation/animate/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion@12.43.0_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/framer-motion@12.43.0_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/framer-motion@12.43.0_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/framer-motion@12.43.0_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$lib$2f$motion$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/studio/lib/motion-tokens.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$slider$2f$slider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/apps/studio/components/arc/slider/slider.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const { spring, duration, blur } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$lib$2f$motion$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionTokens"];
const enterEase = [
    ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$lib$2f$motion$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionTokens"].ease.enter
];
const exitEase = [
    ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$lib$2f$motion$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionTokens"].ease.standard
];
const DIGITS = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
];
/** Motion drops velocity on time-defined springs, so anything a gesture hands off to runs the same spring written as stiffness and damping.
 *  Positions are percentages of the track, so the rest thresholds are set far below a pixel. */ const physical = ({ visualDuration, bounce })=>{
    const root = 2 * Math.PI / (visualDuration * 1.2);
    return {
        type: "spring",
        stiffness: root * root,
        damping: 2 * (1 - bounce) * root,
        restDelta: .002,
        restSpeed: .02
    };
};
const thumbSpring = physical(spring.snappy);
const kickSpring = physical(spring.morph);
/** Pixels of rubber-band travel past a limit, the velocity of a key press at a limit, and the pixel size of a step that release momentum may choose. */ const STRETCH = 9, BUMP_PX = 150, SNAP_PX = 12;
/** iOS style resistance: travel past a limit gives less and less, and never more than `limit` pixels. */ const rubber = (distance, limit = STRETCH)=>Math.sign(distance) * (1 - 1 / (Math.abs(distance) * .55 / limit + 1)) * limit;
/** Where a release is heading, from a scroll-like deceleration (rate .99), in the same units as the velocity. */ const project = (velocity)=>velocity * .099;
const decimalsOf = (value)=>(String(value).split(".")[1] ?? "").length;
const clamp = (value, low, high)=>Math.min(high, Math.max(low, value));
const isDigit = (char)=>char >= "0" && char <= "9";
/** Digits are keyed by place value and the text around them by side, so $950 → $1,000 opens a column and a comma while the rest roll. */ function partsOf(text) {
    const chars = [
        ...text
    ];
    const first = chars.findIndex(isDigit);
    const last = chars.length - 1 - [
        ...chars
    ].reverse().findIndex(isDigit);
    let place = chars.filter(isDigit).length;
    return chars.map((char, index)=>{
        if (first < 0 || index < first) return {
            key: `p${index}${char}`,
            text: char
        };
        if (index > last) return {
            key: `s${chars.length - index}${char}`,
            text: char
        };
        if (isDigit(char)) return {
            key: `d${--place}`,
            digit: Number(char)
        };
        return {
            key: `g${place}${char}`,
            text: char
        };
    });
}
/* A new column opens its width while it rises in the direction of change; a leaving one closes on a spring that never passes zero. */ const slot = {
    enter: (direction)=>({
            width: 0,
            scale: .6,
            opacity: 0,
            y: `${direction * .3}em`,
            filter: `blur(${blur.soft}px)`
        }),
    center: {
        width: "auto",
        scale: 1,
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transitionEnd: {
            filter: "none"
        },
        transition: {
            width: spring.morph,
            scale: spring.morph,
            opacity: spring.morph,
            y: spring.snappy,
            filter: {
                duration: duration.standard,
                ease: enterEase
            }
        }
    },
    exit: (direction)=>({
            width: 0,
            scale: .6,
            opacity: 0,
            y: `${direction * -.3}em`,
            filter: `blur(${blur.subtle}px)`,
            transition: {
                width: spring.smooth,
                scale: spring.smooth,
                y: {
                    duration: duration.fast,
                    ease: exitEase
                },
                opacity: {
                    duration: duration.instant
                },
                filter: {
                    duration: duration.instant
                }
            }
        })
};
/* Reduced motion keeps a short fade and no travel. Its resting state matches `slot`, so either branch hydrates the same markup. */ const still = {
    enter: {
        width: "auto",
        scale: 1,
        opacity: 0,
        y: 0,
        filter: "none"
    },
    center: {
        width: "auto",
        scale: 1,
        opacity: 1,
        y: 0,
        filter: "none",
        transition: {
            duration: duration.instant
        }
    },
    exit: {
        width: 0,
        opacity: 0,
        transition: {
            duration: 0
        }
    }
};
/** One digit on the wheel. Its distance from the wheel position sets where it sits, how clear it is, and whether it shows. */ function Glyph({ position, digit }) {
    _s();
    const offset = (current)=>((digit - current) % 10 + 15) % 10 - 5;
    const y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(position, {
        "Glyph.useTransform[y]": (current)=>`${offset(current) * 1.05}em`
    }["Glyph.useTransform[y]"]);
    const opacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(position, {
        "Glyph.useTransform[opacity]": (current)=>Math.max(0, 1 - Math.abs(offset(current)) ** 1.5 * 1.1)
    }["Glyph.useTransform[opacity]"]);
    const visibility = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(position, {
        "Glyph.useTransform[visibility]": (current)=>Math.abs(offset(current)) >= 1 ? "hidden" : "visible"
    }["Glyph.useTransform[visibility]"]);
    const filter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(position, {
        "Glyph.useTransform[filter]": (current)=>{
            const distance = Math.abs(offset(current));
            return distance < .02 || distance >= 1 ? "none" : `blur(${(distance * blur.soft * .75).toFixed(2)}px)`;
        }
    }["Glyph.useTransform[filter]"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].span, {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$slider$2f$slider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].glyph,
        style: {
            y,
            opacity,
            filter,
            visibility
        },
        children: digit
    }, void 0, false, {
        fileName: "[project]/apps/studio/components/arc/slider/slider.tsx",
        lineNumber: 96,
        columnNumber: 10
    }, this);
}
_s(Glyph, "6IyGylzxpDF2Jb6tyVYJN4JOpEc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c = Glyph;
/** An odometer wheel. It turns the way the value moved, wraps 9 → 0, and retargets mid spin while a drag keeps it busy. */ function Wheel({ digit, direction }) {
    _s1();
    const reduced = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const position = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(digit);
    const wheel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        digit,
        target: digit
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "Wheel.useLayoutEffect": ()=>{
            const state = wheel.current;
            if (state.digit === digit) return;
            state.target += direction > 0 ? (digit - state.digit + 10) % 10 : -((state.digit - digit + 10) % 10);
            state.digit = digit;
            if (reduced) position.jump(state.target);
            else (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animate"])(position, state.target, thumbSpring);
        }
    }["Wheel.useLayoutEffect"], [
        digit,
        direction,
        position,
        reduced
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$slider$2f$slider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sizer,
                children: "0"
            }, void 0, false, {
                fileName: "[project]/apps/studio/components/arc/slider/slider.tsx",
                lineNumber: 112,
                columnNumber: 12
            }, this),
            DIGITS.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Glyph, {
                    position: position,
                    digit: item
                }, item, false, {
                    fileName: "[project]/apps/studio/components/arc/slider/slider.tsx",
                    lineNumber: 112,
                    columnNumber: 71
                }, this))
        ]
    }, void 0, true);
}
_s1(Wheel, "cT5nVGvoXc21HCV2vNo4DVsGMxE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"]
    ];
});
_c1 = Wheel;
/** A formatted value whose digits roll in the direction it moved and whose width follows new columns on a spring. */ function RollingNumber({ value, text }) {
    _s2();
    const reduced = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const [trail, setTrail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        value,
        direction: 1
    });
    if (trail.value !== value) setTrail({
        value,
        direction: value > trail.value ? 1 : -1
    });
    const direction = trail.value === value ? trail.direction : value > trail.value ? 1 : -1;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$slider$2f$slider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].number,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            initial: false,
            custom: direction,
            children: partsOf(text).map((part)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].span, {
                    className: "digit" in part ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$slider$2f$slider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].column : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$slider$2f$slider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].symbol,
                    custom: direction,
                    variants: reduced ? still : slot,
                    initial: "enter",
                    animate: "center",
                    exit: "exit",
                    children: "digit" in part ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Wheel, {
                        digit: part.digit,
                        direction: direction
                    }, void 0, false, {
                        fileName: "[project]/apps/studio/components/arc/slider/slider.tsx",
                        lineNumber: 122,
                        columnNumber: 24
                    }, this) : part.text
                }, part.key, false, {
                    fileName: "[project]/apps/studio/components/arc/slider/slider.tsx",
                    lineNumber: 121,
                    columnNumber: 121
                }, this))
        }, void 0, false, {
            fileName: "[project]/apps/studio/components/arc/slider/slider.tsx",
            lineNumber: 121,
            columnNumber: 42
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/studio/components/arc/slider/slider.tsx",
        lineNumber: 121,
        columnNumber: 10
    }, this);
}
_s2(RollingNumber, "Q4gVet1hTYG67d7Hmid+p81b0vM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c2 = RollingNumber;
const bubbleIn = {
    opacity: 0,
    scale: .6,
    y: 6,
    filter: `blur(${blur.subtle}px)`
};
const bubbleRest = {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transitionEnd: {
        filter: "none"
    }
};
const bubbleOut = {
    opacity: 0,
    scale: .8,
    y: 4,
    filter: `blur(${blur.subtle}px)`,
    transition: {
        duration: duration.instant,
        ease: exitEase
    }
};
const bubbleEnter = {
    ...spring.snappy,
    opacity: {
        duration: duration.fast,
        ease: enterEase
    },
    filter: {
        duration: duration.fast,
        ease: enterEase
    }
};
/** The thumb rides a layer as wide as the track, so a percentage transform places it with no measuring, on the server too. */ function Thumb({ quiet, index, shown, value, text, low, high, ariaLabel, labelledBy, active, lifted, bubble, disabled, onKeyDown, onFocus, onBlur }) {
    _s3();
    const reduced = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(shown, {
        "Thumb.useTransform[x]": (current)=>`${current - 100}%`
    }["Thumb.useTransform[x]"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$slider$2f$slider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].thumbLayer,
        style: {
            x,
            zIndex: active ? 2 : 1
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                role: "slider",
                "data-thumb": "",
                "data-index": index,
                "data-active": lifted || undefined,
                "data-quiet": quiet || undefined,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$slider$2f$slider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].thumb,
                tabIndex: disabled ? -1 : 0,
                "aria-label": ariaLabel,
                "aria-labelledby": ariaLabel ? undefined : labelledBy,
                "aria-valuemin": low,
                "aria-valuemax": high,
                "aria-valuenow": value,
                "aria-valuetext": text,
                "aria-orientation": "horizontal",
                "aria-disabled": disabled || undefined,
                initial: false,
                animate: {
                    scale: lifted ? 1.16 : 1
                },
                transition: reduced ? {
                    duration: 0
                } : spring.snappy,
                onKeyDown: onKeyDown,
                onFocus: onFocus,
                onBlur: onBlur
            }, void 0, false, {
                fileName: "[project]/apps/studio/components/arc/slider/slider.tsx",
                lineNumber: 138,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].span, {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$slider$2f$slider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bubbleAnchor,
                style: {
                    "--at": shown
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    children: bubble && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].span, {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$slider$2f$slider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bubble,
                        "aria-hidden": "true",
                        initial: reduced ? {
                            opacity: 0
                        } : bubbleIn,
                        animate: bubbleRest,
                        exit: reduced ? {
                            opacity: 0,
                            transition: {
                                duration: duration.instant
                            }
                        } : bubbleOut,
                        transition: reduced ? {
                            duration: duration.instant
                        } : bubbleEnter,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RollingNumber, {
                            value: value,
                            text: text
                        }, void 0, false, {
                            fileName: "[project]/apps/studio/components/arc/slider/slider.tsx",
                            lineNumber: 143,
                            columnNumber: 9
                        }, this)
                    }, "bubble", false, {
                        fileName: "[project]/apps/studio/components/arc/slider/slider.tsx",
                        lineNumber: 142,
                        columnNumber: 35
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/studio/components/arc/slider/slider.tsx",
                    lineNumber: 142,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/studio/components/arc/slider/slider.tsx",
                lineNumber: 141,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/studio/components/arc/slider/slider.tsx",
        lineNumber: 137,
        columnNumber: 10
    }, this);
}
_s3(Thumb, "kimaR7lRHT+WBvhinjw68/PRCNA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c3 = Thumb;
function Slider({ label, value, defaultValue, onValueChange, onValueCommit, min = 0, max = 100, step: stepProp = 1, largeStep, marks, minStepsBetweenThumbs = 0, format, showValue = true, thumbLabels, start, end, name, disabled, className }) {
    _s4();
    const reduced = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const labelId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const step = stepProp > 0 ? stepProp : 1;
    const span = max - min || 1;
    const isRange = Array.isArray(value ?? defaultValue);
    const toArray = (input)=>input === undefined ? [
            min,
            max
        ].slice(0, isRange ? 2 : 1) : Array.isArray(input) ? [
            input[0],
            input[1]
        ] : [
            input
        ];
    const [internal, setInternal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "Slider.useState": ()=>toArray(defaultValue)
    }["Slider.useState"]);
    const values = value === undefined ? internal : toArray(value);
    const decimals = Math.max(decimalsOf(step), decimalsOf(min));
    const formatValue = format ?? ((input)=>input.toLocaleString("en-US", {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals
        }));
    const gap = isRange ? minStepsBetweenThumbs * step : 0;
    const pct = (input)=>(input - min) / span * 100;
    const valueAt = (percent)=>min + percent / 100 * span;
    const snap = (input)=>Number((min + Math.round((input - min) / step) * step).toFixed(decimals));
    const lowOf = (index, current)=>index === 1 ? current[0] + gap : min;
    const highOf = (index, current)=>index === 0 && isRange ? current[1] - gap : max;
    const settle = (index, input, current)=>clamp(snap(clamp(input, min, max)), lowOf(index, current), highOf(index, current));
    const trackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const thumbsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const latest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(values);
    const goal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(values.map(pct));
    const drag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pointerFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const lingerTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const [dragging, setDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [keyFocus, setKeyFocus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [linger, setLinger] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [lastActive, setLastActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(isRange ? 1 : 0);
    const [quiet, setQuiet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Each thumb is a committed position plus a catch-up offset: a pressed track springs the offset to zero while the pointer moves the
    // position 1:1, so the thumb glides to the finger and never lags behind it.
    const pos0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(pct(values[0])), pos1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(pct(values[1] ?? values[0]));
    const lag0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0), lag1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const shown0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])({
        "Slider.useTransform[shown0]": ()=>pos0.get() + lag0.get()
    }["Slider.useTransform[shown0]"]);
    const shown1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])({
        "Slider.useTransform[shown1]": ()=>pos1.get() + lag1.get()
    }["Slider.useTransform[shown1]"]);
    const clipPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])({
        "Slider.useTransform[clipPath]": ()=>{
            const from = isRange ? clamp(shown0.get(), 0, 100) : 0;
            const to = clamp((isRange ? shown1 : shown0).get(), 0, 100);
            return `inset(0 ${(100 - to).toFixed(3)}% 0 ${from.toFixed(3)}% round 999px)`;
        }
    }["Slider.useTransform[clipPath]"]);
    const thumbs = [
        {
            pos: pos0,
            lag: lag0,
            shown: shown0
        },
        {
            pos: pos1,
            lag: lag1,
            shown: shown1
        }
    ];
    const emit = (next)=>isRange ? [
            next[0],
            next[1]
        ] : next[0];
    function commit(index, next) {
        const current = latest.current;
        if (current[index] === next) return;
        const updated = current.map((item, at)=>at === index ? next : item);
        latest.current = updated;
        if (value === undefined) setInternal(updated);
        onValueChange?.(emit(updated));
    }
    // Values that arrive from outside a drag (keys, props, a clicked mark) spring the thumb to their place.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "Slider.useLayoutEffect": ()=>{
            latest.current = values;
            values.forEach({
                "Slider.useLayoutEffect": (item, index)=>{
                    const target = pct(item), thumb = thumbs[index];
                    if (drag.current?.index === index || goal.current[index] === target) return;
                    goal.current[index] = target;
                    const from = thumb.pos.get() + thumb.lag.get();
                    thumb.lag.jump(0);
                    thumb.pos.jump(from);
                    if (reduced) thumb.pos.jump(target);
                    else (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animate"])(thumb.pos, target, thumbSpring);
                }
            }["Slider.useLayoutEffect"]);
        }
    }["Slider.useLayoutEffect"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Slider.useEffect": ()=>({
                "Slider.useEffect": ()=>window.clearTimeout(lingerTimer.current)
            })["Slider.useEffect"]
    }["Slider.useEffect"], []);
    const thumbNode = (index)=>thumbsRef.current?.querySelector(`[data-index="${index}"]`);
    /** Focus that follows a pointer keeps the thumb quiet: no ring and no bubble until a key is pressed. */ function focusFromPointer(index) {
        const node = thumbNode(index);
        if (!node || document.activeElement === node) return;
        setQuiet(index);
        pointerFocus.current = true;
        node.focus({
            preventScroll: true
        });
        pointerFocus.current = false;
    }
    const trackWidth = ()=>trackRef.current?.getBoundingClientRect().width || 1;
    function nearest(at, current) {
        if (!isRange) return 0;
        const low = Math.abs(at - pct(current[0])), high = Math.abs(at - pct(current[1]));
        return low === high ? at < pct(current[0]) ? 0 : 1 : low < high ? 0 : 1;
    }
    function holdBubble(index) {
        window.clearTimeout(lingerTimer.current);
        setLinger(index);
        lingerTimer.current = window.setTimeout(()=>setLinger(null), 700);
    }
    /** Starts tracking one thumb. A press on the track springs the thumb over from where it was; a grabbed thumb keeps its grab offset. */ function begin(state, index, at, press) {
        const thumb = thumbs[index];
        const from = thumb.pos.get() + thumb.lag.get();
        state.index = index;
        state.grab = press ? 0 : at - from;
        thumb.lag.jump(0);
        thumb.pos.jump(from);
        setDragging(index);
        setLastActive(index);
        window.clearTimeout(lingerTimer.current);
        setLinger(null);
        focusFromPointer(index);
        if (press) follow(state, at, 0, true);
    }
    /** Places the dragged thumb under the pointer, with resistance past its limits, and commits the stepped value beneath it. */ function follow(state, at, time, press = false) {
        const index = state.index;
        if (index === null) return;
        const thumb = thumbs[index], current = latest.current, width = trackWidth();
        const raw = at - state.grab;
        const low = pct(lowOf(index, current)), high = pct(highOf(index, current));
        const edge = clamp(raw, low, high);
        const placed = reduced ? edge : edge + rubber((raw - edge) / 100 * width) / width * 100;
        if (press && !reduced) {
            const from = thumb.pos.get();
            thumb.pos.jump(placed);
            thumb.lag.jump(from - placed);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animate"])(thumb.lag, 0, thumbSpring);
        } else thumb.pos.set(placed);
        state.raw = raw;
        state.samples.push({
            t: time,
            p: placed
        });
        if (state.samples.length > 6) state.samples.shift();
        commit(index, settle(index, valueAt(raw), current));
    }
    function onPointerDown(event) {
        if (disabled || event.button !== 0 || !event.isPrimary) return;
        const rect = trackRef.current?.getBoundingClientRect();
        if (!rect) return;
        const at = (event.clientX - rect.left) / (rect.width || 1) * 100;
        const grabbed = event.target.closest("[data-thumb]");
        const current = latest.current;
        event.currentTarget.setPointerCapture(event.pointerId);
        const state = {
            pointer: event.pointerId,
            index: null,
            grab: 0,
            x: event.clientX,
            raw: at,
            samples: []
        };
        drag.current = state;
        // Stacked range thumbs wait for the first movement to decide which one the pointer means.
        if (grabbed && isRange && current[0] === current[1]) {
            focusFromPointer(Number(grabbed.dataset.index));
            return;
        }
        begin(state, grabbed ? Number(grabbed.dataset.index) : nearest(at, current), at, !grabbed);
        state.samples = [
            {
                t: event.timeStamp,
                p: thumbs[state.index ?? 0].pos.get()
            }
        ];
    }
    function onPointerMove(event) {
        const state = drag.current;
        if (!state || state.pointer !== event.pointerId) return;
        const rect = trackRef.current?.getBoundingClientRect();
        if (!rect) return;
        const at = (event.clientX - rect.left) / (rect.width || 1) * 100;
        if (state.index === null) {
            const dx = event.clientX - state.x;
            if (Math.abs(dx) < 2) return;
            begin(state, dx < 0 ? 0 : 1, at - dx / (rect.width || 1) * 100, false);
        }
        follow(state, at, event.timeStamp);
    }
    function onPointerEnd(event) {
        const state = drag.current;
        if (!state || state.pointer !== event.pointerId) return;
        drag.current = null;
        const index = state.index;
        if (index === null) return;
        const thumb = thumbs[index], current = latest.current, width = trackWidth();
        // Velocity from the last few frames, in percent per second; a pointer that paused before letting go carries none.
        const samples = state.samples, first = samples[0], last = samples[samples.length - 1];
        const elapsed = last && first ? (last.t - first.t) / 1000 : 0;
        // A release during the catch-up spring keeps that spring's speed too.
        const velocity = (last && first && elapsed > .008 && event.timeStamp - last.t < 60 ? (last.p - first.p) / elapsed : 0) + thumb.lag.getVelocity();
        // On a coarse grid the release momentum may carry the thumb one step further, never more.
        const stepPct = step / span * 100;
        const carry = event.type === "pointerup" && stepPct / 100 * width >= SNAP_PX ? clamp(project(velocity), -stepPct, stepPct) : 0;
        const next = settle(index, valueAt(state.raw + carry), current);
        const from = thumb.pos.get() + thumb.lag.get(), target = pct(next);
        thumb.lag.jump(0);
        thumb.pos.jump(from);
        goal.current[index] = target;
        if (reduced) thumb.pos.jump(target);
        else (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animate"])(thumb.pos, target, {
            ...thumbSpring,
            velocity
        });
        commit(index, next);
        setDragging(null);
        holdBubble(index);
        onValueCommit?.(emit(latest.current));
    }
    function onKeyDown(index, event) {
        if (disabled) return;
        const current = latest.current, now = current[index];
        const large = largeStep ?? Math.max(step, snap(min + span / 10) - min);
        const moves = {
            ArrowRight: step,
            ArrowUp: step,
            ArrowLeft: -step,
            ArrowDown: -step,
            PageUp: large,
            PageDown: -large
        };
        let wanted;
        if (event.key === "Home") wanted = lowOf(index, current);
        else if (event.key === "End") wanted = highOf(index, current);
        else if (event.key in moves) wanted = now + (event.shiftKey && /^Arrow/.test(event.key) ? Math.sign(moves[event.key]) * large : moves[event.key]);
        else return;
        event.preventDefault();
        setKeyFocus(index);
        setQuiet(null);
        setLastActive(index);
        const next = settle(index, wanted, current);
        // At a limit the thumb strains toward the press and springs home, so the key still answers.
        if (next === now) {
            const toward = Math.sign(wanted - now);
            if (toward && !reduced) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animate"])(thumbs[index].pos, goal.current[index], {
                ...kickSpring,
                velocity: toward * BUMP_PX / trackWidth() * 100
            });
            return;
        }
        commit(index, next);
        onValueCommit?.(emit(latest.current));
    }
    function jumpTo(target) {
        if (disabled) return;
        const current = latest.current, index = nearest(pct(target), current);
        const next = settle(index, target, current);
        setLastActive(index);
        focusFromPointer(index);
        if (next === current[index]) return;
        commit(index, next);
        onValueCommit?.(emit(latest.current));
    }
    const markList = (marks ?? []).map((mark)=>typeof mark === "number" ? {
            value: mark
        } : mark).filter((mark)=>mark.value >= min && mark.value <= max);
    const ticks = markList.filter((mark)=>mark.value > min && mark.value < max);
    const labelled = markList.filter((mark)=>mark.label);
    const inRange = (mark)=>isRange ? mark >= values[0] && mark <= values[1] : mark <= values[0];
    const names = thumbLabels ?? [
        `${label}, minimum`,
        `${label}, maximum`
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: [
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$slider$2f$slider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].root,
            className
        ].filter(Boolean).join(" "),
        "data-disabled": disabled || undefined,
        "data-dragging": dragging !== null || undefined,
        "data-marks": labelled.length > 0 || undefined,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$slider$2f$slider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        id: labelId,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$slider$2f$slider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/apps/studio/components/arc/slider/slider.tsx",
                        lineNumber: 377,
                        columnNumber: 7
                    }, this),
                    showValue && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$slider$2f$slider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].readout,
                        "aria-hidden": "true",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RollingNumber, {
                                value: values[0],
                                text: formatValue(values[0])
                            }, void 0, false, {
                                fileName: "[project]/apps/studio/components/arc/slider/slider.tsx",
                                lineNumber: 379,
                                columnNumber: 9
                            }, this),
                            isRange && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$slider$2f$slider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dash,
                                        children: "–"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/studio/components/arc/slider/slider.tsx",
                                        lineNumber: 380,
                                        columnNumber: 23
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RollingNumber, {
                                        value: values[1],
                                        text: formatValue(values[1])
                                    }, void 0, false, {
                                        fileName: "[project]/apps/studio/components/arc/slider/slider.tsx",
                                        lineNumber: 380,
                                        columnNumber: 61
                                    }, this)
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/studio/components/arc/slider/slider.tsx",
                        lineNumber: 378,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/studio/components/arc/slider/slider.tsx",
                lineNumber: 376,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$slider$2f$slider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].body,
                children: [
                    start && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$slider$2f$slider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].start,
                        children: start
                    }, void 0, false, {
                        fileName: "[project]/apps/studio/components/arc/slider/slider.tsx",
                        lineNumber: 384,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$slider$2f$slider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].control,
                        onPointerDown: onPointerDown,
                        onPointerMove: onPointerMove,
                        onPointerUp: onPointerEnd,
                        onPointerCancel: onPointerEnd,
                        onLostPointerCapture: onPointerEnd,
                        onMouseDown: (event)=>event.preventDefault(),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: trackRef,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$slider$2f$slider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].track,
                                children: [
                                    ticks.map((mark)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$slider$2f$slider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tick,
                                            style: {
                                                left: `${pct(mark.value)}%`
                                            }
                                        }, mark.value, false, {
                                            fileName: "[project]/apps/studio/components/arc/slider/slider.tsx",
                                            lineNumber: 387,
                                            columnNumber: 30
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$slider$2f$slider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fill,
                                        style: {
                                            clipPath
                                        },
                                        children: ticks.map((mark)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$slider$2f$slider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tick,
                                                style: {
                                                    left: `${pct(mark.value)}%`
                                                }
                                            }, mark.value, false, {
                                                fileName: "[project]/apps/studio/components/arc/slider/slider.tsx",
                                                lineNumber: 388,
                                                columnNumber: 87
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/apps/studio/components/arc/slider/slider.tsx",
                                        lineNumber: 388,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/studio/components/arc/slider/slider.tsx",
                                lineNumber: 386,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: thumbsRef,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$slider$2f$slider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].thumbs,
                                children: values.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Thumb, {
                                        quiet: quiet === index,
                                        index: index,
                                        shown: thumbs[index].shown,
                                        value: item,
                                        text: formatValue(item),
                                        low: lowOf(index, values),
                                        high: highOf(index, values),
                                        ariaLabel: isRange ? names[index] : undefined,
                                        labelledBy: labelId,
                                        active: lastActive === index,
                                        lifted: dragging === index,
                                        bubble: dragging === index || keyFocus === index || linger === index,
                                        disabled: disabled,
                                        onKeyDown: (event)=>onKeyDown(index, event),
                                        onFocus: (event)=>{
                                            if (!pointerFocus.current && event.currentTarget.matches(":focus-visible")) setKeyFocus(index);
                                        },
                                        onBlur: ()=>{
                                            setKeyFocus((current)=>current === index ? null : current);
                                            setQuiet((current)=>current === index ? null : current);
                                        }
                                    }, index, false, {
                                        fileName: "[project]/apps/studio/components/arc/slider/slider.tsx",
                                        lineNumber: 391,
                                        columnNumber: 40
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/apps/studio/components/arc/slider/slider.tsx",
                                lineNumber: 390,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/studio/components/arc/slider/slider.tsx",
                        lineNumber: 385,
                        columnNumber: 7
                    }, this),
                    end && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$slider$2f$slider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].end,
                        children: end
                    }, void 0, false, {
                        fileName: "[project]/apps/studio/components/arc/slider/slider.tsx",
                        lineNumber: 396,
                        columnNumber: 15
                    }, this),
                    labelled.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$slider$2f$slider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].marks,
                        "aria-hidden": "true",
                        children: labelled.map((mark)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$slider$2f$slider$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].markLabel,
                                "data-on": inRange(mark.value) || undefined,
                                "data-edge": mark.value === min ? "start" : mark.value === max ? "end" : undefined,
                                style: {
                                    left: `${pct(mark.value)}%`
                                },
                                onClick: ()=>jumpTo(mark.value),
                                children: mark.label
                            }, mark.value, false, {
                                fileName: "[project]/apps/studio/components/arc/slider/slider.tsx",
                                lineNumber: 398,
                                columnNumber: 31
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/apps/studio/components/arc/slider/slider.tsx",
                        lineNumber: 397,
                        columnNumber: 31
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/studio/components/arc/slider/slider.tsx",
                lineNumber: 383,
                columnNumber: 5
            }, this),
            name && values.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "hidden",
                    name: name,
                    value: item,
                    disabled: disabled
                }, index, false, {
                    fileName: "[project]/apps/studio/components/arc/slider/slider.tsx",
                    lineNumber: 401,
                    columnNumber: 42
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/studio/components/arc/slider/slider.tsx",
        lineNumber: 375,
        columnNumber: 10
    }, this);
}
_s4(Slider, "OFiXHGBmsce/xRzx4hwZ/xznXh8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c4 = Slider;
const __TURBOPACK__default__export__ = Slider;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "Glyph");
__turbopack_context__.k.register(_c1, "Wheel");
__turbopack_context__.k.register(_c2, "RollingNumber");
__turbopack_context__.k.register(_c3, "Thumb");
__turbopack_context__.k.register(_c4, "Slider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/studio/components/arc/switch/switch.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "label": "switch-module__0ife0W__label",
  "switch": "switch-module__0ife0W__switch",
  "thumb": "switch-module__0ife0W__thumb",
  "track": "switch-module__0ife0W__track",
});
}),
"[project]/apps/studio/components/arc/switch/switch.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Switch",
    ()=>Switch,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.7_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.7_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$switch$40$1$2e$4$2e$1_$40$types$2b$react$40$19$2e$3$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@radix-ui+react-switch@1.4.1_@types+react@19.3.0_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/@radix-ui/react-switch/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/framer-motion@12.43.0_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/framer-motion/dist/es/animation/animate/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion@12.43.0_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/framer-motion@12.43.0_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/framer-motion@12.43.0_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$lib$2f$motion$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/studio/lib/motion-tokens.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$switch$2f$switch$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/apps/studio/components/arc/switch/switch.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
/** Track inner width (42 - 6 padding) minus the 18px thumb; keep in sync with switch.module.css. */ const size = 18;
const travel = 18;
/** How far the thumb widens toward the other side while pressed. */ const stretch = 5;
/** Critically damped: the thumb lands on its end without overshooting the state it reports. */ const glide = {
    type: "spring",
    visualDuration: 0.3,
    bounce: 0
};
const Switch = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = _s(function Switch({ label, className, checked, defaultChecked, onCheckedChange, onPointerDown, onPointerUp, onPointerLeave, onPointerCancel, onKeyDown, onKeyUp, onBlur, ...props }, ref) {
    _s();
    const reduceMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const [internal, setInternal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultChecked ?? false);
    const [pressed, setPressed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const on = checked ?? internal;
    // A brief stretch along the travel, so the thumb reads as moving mass rather than a sliding dot.
    const scaleX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(1);
    const shown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(on);
    // A pointer or Space press already stretched the thumb, so its release should not add a second stretch on top.
    const releasedAt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(-Infinity);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Switch.Switch.useEffect": ()=>{
            if (shown.current === on) return;
            shown.current = on;
            const fromPress = performance.now() - releasedAt.current < 250;
            if (reduceMotion || fromPress) return;
            const controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animate"])(scaleX, [
                1,
                1.16,
                1
            ], {
                duration: 0.34,
                times: [
                    0,
                    0.4,
                    1
                ],
                ease: [
                    "easeOut",
                    "easeInOut"
                ]
            });
            return ({
                "Switch.Switch.useEffect": ()=>controls.stop()
            })["Switch.Switch.useEffect"];
        }
    }["Switch.Switch.useEffect"], [
        on,
        reduceMotion,
        scaleX
    ]);
    const extra = pressed && !reduceMotion && !props.disabled ? stretch : 0;
    const classes = [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$switch$2f$switch$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].switch,
        className
    ].filter(Boolean).join(" ");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$switch$40$1$2e$4$2e$1_$40$types$2b$react$40$19$2e$3$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ...props,
        ref: ref,
        checked: on,
        onCheckedChange: (next)=>{
            if (checked === undefined) setInternal(next);
            onCheckedChange?.(next);
        },
        onPointerDown: (event)=>{
            onPointerDown?.(event);
            if (event.button === 0) setPressed(true);
        },
        onPointerUp: (event)=>{
            onPointerUp?.(event);
            if (pressed && !props.disabled) releasedAt.current = performance.now();
            setPressed(false);
        },
        onPointerLeave: (event)=>{
            onPointerLeave?.(event);
            setPressed(false);
        },
        onPointerCancel: (event)=>{
            onPointerCancel?.(event);
            setPressed(false);
        },
        onKeyDown: (event)=>{
            onKeyDown?.(event);
            if (event.key === " ") setPressed(true);
        },
        onKeyUp: (event)=>{
            onKeyUp?.(event);
            if (pressed && !props.disabled) releasedAt.current = performance.now();
            setPressed(false);
        },
        onBlur: (event)=>{
            onBlur?.(event);
            setPressed(false);
        },
        className: classes,
        "aria-label": props["aria-label"] ?? label,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$switch$2f$switch$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].track,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].span, {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$switch$2f$switch$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].thumb,
                    style: {
                        scaleX
                    },
                    initial: false,
                    animate: {
                        x: on ? travel - extra : 0,
                        width: size + extra
                    },
                    transition: reduceMotion ? {
                        duration: 0
                    } : {
                        x: glide,
                        width: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$lib$2f$motion$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionTokens"].spring.snappy
                    }
                }, void 0, false, {
                    fileName: "[project]/apps/studio/components/arc/switch/switch.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/studio/components/arc/switch/switch.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            label ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$switch$2f$switch$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                children: label
            }, void 0, false, {
                fileName: "[project]/apps/studio/components/arc/switch/switch.tsx",
                lineNumber: 67,
                columnNumber: 16
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/apps/studio/components/arc/switch/switch.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}, "4a8aSnWqtpkyXWHgQ+VHM0yS8Yw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"]
    ];
})), "4a8aSnWqtpkyXWHgQ+VHM0yS8Yw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"]
    ];
});
_c1 = Switch;
Switch.displayName = "Switch";
const __TURBOPACK__default__export__ = Switch;
var _c, _c1;
__turbopack_context__.k.register(_c, "Switch$forwardRef");
__turbopack_context__.k.register(_c1, "Switch");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/studio/app/audio-inspector.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AudioInspector",
    ()=>AudioInspector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.7_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.7_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$button$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/studio/components/arc/button/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$slider$2f$slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/studio/components/arc/slider/slider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$switch$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/studio/components/arc/switch/switch.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function AudioInspector({ recording, duration, tracks, onChange, mixer, onMixerChange }) {
    _s();
    const input = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const microphone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const micStream = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const chunks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const [recordingVoice, setRecordingVoice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [kind, setKind] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("ambience");
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const patch = (id, next)=>onChange(tracks.map((t)=>t.id === id ? {
                ...t,
                ...next
            } : t));
    async function startVoice() {
        try {
            setError("");
            const stream = await navigator.mediaDevices.getUserMedia({
                audio: true
            });
            micStream.current = stream;
            chunks.current = [];
            const mime = MediaRecorder.isTypeSupported("audio/webm") ? "audio/webm" : "";
            const recorder = new MediaRecorder(stream, mime ? {
                mimeType: mime
            } : undefined);
            microphone.current = recorder;
            recorder.ondataavailable = (e)=>{
                if (e.data.size) chunks.current.push(e.data);
            };
            recorder.onstop = ()=>{
                const file = new File(chunks.current, "commentaire.webm", {
                    type: recorder.mimeType || "audio/webm"
                });
                stream.getTracks().forEach((t)=>t.stop());
                micStream.current = null;
                setRecordingVoice(false);
                void upload(file, "voiceover");
            };
            recorder.start();
            setRecordingVoice(true);
        } catch (e) {
            setError("Microphone inaccessible : " + String(e));
        }
    }
    function stopVoice() {
        if (microphone.current?.state === "recording") microphone.current.stop();
    }
    async function upload(file, overrideKind) {
        setBusy(true);
        setError("");
        try {
            if (!recording) throw Error("Sélectionne une capture avant d'ajouter un son.");
            if (tracks.length >= 32) throw Error("Limite de 32 pistes atteinte.");
            const form = new FormData();
            form.set("file", file);
            const response = await fetch("/api/audio/" + encodeURIComponent(recording), {
                method: "POST",
                body: form
            });
            const data = await response.json();
            if (!response.ok) throw Error(data.error || "Import impossible");
            const audio = new window.Audio(data.url);
            const measured = await new Promise((resolve)=>{
                audio.onloadedmetadata = ()=>resolve(Number.isFinite(audio.duration) ? audio.duration : duration);
                audio.onerror = ()=>resolve(duration);
            });
            const id = "track-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 7);
            onChange([
                ...tracks,
                {
                    id,
                    file: data.file,
                    kind: overrideKind ?? kind,
                    name: file.name.slice(0, 100),
                    start: 0,
                    trimStart: 0,
                    duration: Math.max(.1, Math.min(measured, duration)),
                    volume: (overrideKind ?? kind) === "ambience" ? .3 : 1,
                    muted: false,
                    solo: false,
                    fadeIn: (overrideKind ?? kind) === "ambience" ? .8 : 0,
                    fadeOut: (overrideKind ?? kind) === "ambience" ? .8 : 0,
                    loop: (overrideKind ?? kind) === "ambience"
                }
            ]);
        } catch (e) {
            setError(String(e));
        } finally{
            setBusy(false);
            if (input.current) input.current.value = "";
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "audio-inspector",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "section-title",
                children: "Audio & narration"
            }, void 0, false, {
                fileName: "[project]/apps/studio/app/audio-inspector.tsx",
                lineNumber: 36,
                columnNumber: 3
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "audio-track-editor",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "Mixage général"
                    }, void 0, false, {
                        fileName: "[project]/apps/studio/app/audio-inspector.tsx",
                        lineNumber: 37,
                        columnNumber: 39
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$slider$2f$slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                        label: "Volume master",
                        min: 0,
                        max: 2,
                        step: .01,
                        value: mixer.masterVolume,
                        onValueChange: (masterVolume)=>onMixerChange({
                                ...mixer,
                                masterVolume
                            }),
                        format: (v)=>Math.round(v * 100) + " %"
                    }, void 0, false, {
                        fileName: "[project]/apps/studio/app/audio-inspector.tsx",
                        lineNumber: 37,
                        columnNumber: 70
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "toggle",
                        children: [
                            "Ducking automatique ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$switch$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Switch"], {
                                checked: mixer.duckingEnabled,
                                onCheckedChange: (duckingEnabled)=>onMixerChange({
                                        ...mixer,
                                        duckingEnabled
                                    }),
                                "aria-label": "Ducking automatique"
                            }, void 0, false, {
                                fileName: "[project]/apps/studio/app/audio-inspector.tsx",
                                lineNumber: 37,
                                columnNumber: 303
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/studio/app/audio-inspector.tsx",
                        lineNumber: 37,
                        columnNumber: 259
                    }, this),
                    mixer.duckingEnabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$slider$2f$slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                                label: "Musique sous la voix",
                                min: 0,
                                max: 1,
                                step: .01,
                                value: mixer.duckingLevel,
                                onValueChange: (duckingLevel)=>onMixerChange({
                                        ...mixer,
                                        duckingLevel
                                    }),
                                format: (v)=>Math.round(v * 100) + " %"
                            }, void 0, false, {
                                fileName: "[project]/apps/studio/app/audio-inspector.tsx",
                                lineNumber: 37,
                                columnNumber: 482
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$slider$2f$slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                                label: "Attaque",
                                min: .01,
                                max: 3,
                                step: .01,
                                value: mixer.attack,
                                onValueChange: (attack)=>onMixerChange({
                                        ...mixer,
                                        attack
                                    }),
                                format: (v)=>v.toFixed(2) + " s"
                            }, void 0, false, {
                                fileName: "[project]/apps/studio/app/audio-inspector.tsx",
                                lineNumber: 37,
                                columnNumber: 678
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$slider$2f$slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                                label: "Relâchement",
                                min: .01,
                                max: 3,
                                step: .01,
                                value: mixer.release,
                                onValueChange: (release)=>onMixerChange({
                                        ...mixer,
                                        release
                                    }),
                                format: (v)=>v.toFixed(2) + " s"
                            }, void 0, false, {
                                fileName: "[project]/apps/studio/app/audio-inspector.tsx",
                                lineNumber: 37,
                                columnNumber: 840
                            }, this)
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/studio/app/audio-inspector.tsx",
                lineNumber: 37,
                columnNumber: 3
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "tabbar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "tab " + (kind === "ambience" ? "active" : ""),
                        onClick: ()=>setKind("ambience"),
                        children: "Ambiance"
                    }, void 0, false, {
                        fileName: "[project]/apps/studio/app/audio-inspector.tsx",
                        lineNumber: 38,
                        columnNumber: 27
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "tab " + (kind === "voiceover" ? "active" : ""),
                        onClick: ()=>setKind("voiceover"),
                        children: "Commentaire"
                    }, void 0, false, {
                        fileName: "[project]/apps/studio/app/audio-inspector.tsx",
                        lineNumber: 38,
                        columnNumber: 137
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/studio/app/audio-inspector.tsx",
                lineNumber: 38,
                columnNumber: 3
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ref: input,
                type: "file",
                accept: ".mp3,.wav,.m4a,.ogg,.webm,audio/*",
                hidden: true,
                onChange: (e)=>{
                    const f = e.target.files?.[0];
                    if (f) void upload(f);
                }
            }, void 0, false, {
                fileName: "[project]/apps/studio/app/audio-inspector.tsx",
                lineNumber: 39,
                columnNumber: 3
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$button$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: "secondary",
                disabled: busy || !recording,
                onClick: ()=>input.current?.click(),
                children: busy ? "Import…" : kind === "ambience" ? "Ajouter une ambiance" : "Ajouter un commentaire audio"
            }, void 0, false, {
                fileName: "[project]/apps/studio/app/audio-inspector.tsx",
                lineNumber: 40,
                columnNumber: 3
            }, this),
            kind === "voiceover" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$button$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                variant: recordingVoice ? "danger" : "secondary",
                disabled: busy || !recording,
                onClick: ()=>recordingVoice ? stopVoice() : void startVoice(),
                children: recordingVoice ? "■ Terminer le commentaire" : "🎙 Enregistrer au microphone"
            }, void 0, false, {
                fileName: "[project]/apps/studio/app/audio-inspector.tsx",
                lineNumber: 41,
                columnNumber: 24
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "hint",
                children: "MP3, WAV, M4A, OGG ou WebM · 30 Mo maximum. Fichiers conservés dans le projet."
            }, void 0, false, {
                fileName: "[project]/apps/studio/app/audio-inspector.tsx",
                lineNumber: 42,
                columnNumber: 3
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                role: "alert",
                style: {
                    color: "var(--text-secondary)"
                },
                children: error
            }, void 0, false, {
                fileName: "[project]/apps/studio/app/audio-inspector.tsx",
                lineNumber: 43,
                columnNumber: 11
            }, this),
            tracks.map((track)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "audio-track-editor",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "section-title",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: [
                                        track.kind === "ambience" ? "♫" : "🎙",
                                        " ",
                                        track.name
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/studio/app/audio-inspector.tsx",
                                    lineNumber: 45,
                                    columnNumber: 35
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn icon",
                                    title: "Supprimer la piste",
                                    onClick: ()=>onChange(tracks.filter((t)=>t.id !== track.id)),
                                    children: "×"
                                }, void 0, false, {
                                    fileName: "[project]/apps/studio/app/audio-inspector.tsx",
                                    lineNumber: 45,
                                    columnNumber: 99
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/studio/app/audio-inspector.tsx",
                            lineNumber: 45,
                            columnNumber: 4
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "toggle",
                            children: [
                                "Solo ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$switch$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Switch"], {
                                    "aria-label": "Solo " + track.name,
                                    checked: track.solo,
                                    onCheckedChange: (solo)=>patch(track.id, {
                                            solo
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/apps/studio/app/audio-inspector.tsx",
                                    lineNumber: 46,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/studio/app/audio-inspector.tsx",
                            lineNumber: 46,
                            columnNumber: 4
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "toggle",
                            children: [
                                "Activer ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$switch$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Switch"], {
                                    "aria-label": "Activer " + track.name,
                                    checked: !track.muted,
                                    onCheckedChange: (v)=>patch(track.id, {
                                            muted: !v
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/apps/studio/app/audio-inspector.tsx",
                                    lineNumber: 47,
                                    columnNumber: 36
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/studio/app/audio-inspector.tsx",
                            lineNumber: 47,
                            columnNumber: 4
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$slider$2f$slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                            label: "Volume",
                            min: 0,
                            max: 2,
                            step: .01,
                            value: track.volume,
                            format: (v)=>Math.round(v * 100) + " %",
                            onValueChange: (volume)=>patch(track.id, {
                                    volume
                                })
                        }, void 0, false, {
                            fileName: "[project]/apps/studio/app/audio-inspector.tsx",
                            lineNumber: 48,
                            columnNumber: 4
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$slider$2f$slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                            label: "Début",
                            min: 0,
                            max: Math.max(duration, 1),
                            step: .1,
                            value: Math.min(track.start, Math.max(duration, 1)),
                            format: (v)=>v.toFixed(1) + " s",
                            onValueChange: (start)=>patch(track.id, {
                                    start
                                })
                        }, void 0, false, {
                            fileName: "[project]/apps/studio/app/audio-inspector.tsx",
                            lineNumber: 49,
                            columnNumber: 4
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$slider$2f$slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                            label: "Durée",
                            min: .1,
                            max: Math.max(.1, duration - track.start),
                            step: .1,
                            value: Math.min(track.duration, Math.max(.1, duration - track.start)),
                            format: (v)=>v.toFixed(1) + " s",
                            onValueChange: (duration)=>patch(track.id, {
                                    duration
                                })
                        }, void 0, false, {
                            fileName: "[project]/apps/studio/app/audio-inspector.tsx",
                            lineNumber: 50,
                            columnNumber: 4
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$slider$2f$slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                            label: "Fondu entrée",
                            min: 0,
                            max: 5,
                            step: .1,
                            value: track.fadeIn,
                            format: (v)=>v.toFixed(1) + " s",
                            onValueChange: (fadeIn)=>patch(track.id, {
                                    fadeIn
                                })
                        }, void 0, false, {
                            fileName: "[project]/apps/studio/app/audio-inspector.tsx",
                            lineNumber: 51,
                            columnNumber: 4
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$slider$2f$slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                            label: "Fondu sortie",
                            min: 0,
                            max: 5,
                            step: .1,
                            value: track.fadeOut,
                            format: (v)=>v.toFixed(1) + " s",
                            onValueChange: (fadeOut)=>patch(track.id, {
                                    fadeOut
                                })
                        }, void 0, false, {
                            fileName: "[project]/apps/studio/app/audio-inspector.tsx",
                            lineNumber: 52,
                            columnNumber: 4
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "toggle",
                            children: [
                                "Boucle ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$switch$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Switch"], {
                                    "aria-label": "Boucle " + track.name,
                                    checked: track.loop,
                                    onCheckedChange: (loop)=>patch(track.id, {
                                            loop
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/apps/studio/app/audio-inspector.tsx",
                                    lineNumber: 53,
                                    columnNumber: 35
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/studio/app/audio-inspector.tsx",
                            lineNumber: 53,
                            columnNumber: 4
                        }, this)
                    ]
                }, track.id, true, {
                    fileName: "[project]/apps/studio/app/audio-inspector.tsx",
                    lineNumber: 44,
                    columnNumber: 22
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/studio/app/audio-inspector.tsx",
        lineNumber: 35,
        columnNumber: 9
    }, this);
}
_s(AudioInspector, "rgkF0Hr0MGDELJh8wYpIsFoKOfo=");
_c = AudioInspector;
var _c;
__turbopack_context__.k.register(_c, "AudioInspector");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/studio/app/tooltip.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tooltip",
    ()=>Tooltip
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.7_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$tooltip$40$1$2e$4$2e$1_$40$types$2b$react$40$19$2e$3$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@radix-ui+react-tooltip@1.4.1_@types+react@19.3.0_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/@radix-ui/react-tooltip/dist/index.mjs [app-client] (ecmascript)");
"use client";
;
;
function Tooltip({ content, children, side = "top" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$tooltip$40$1$2e$4$2e$1_$40$types$2b$react$40$19$2e$3$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Provider"], {
        delayDuration: 250,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$tooltip$40$1$2e$4$2e$1_$40$types$2b$react$40$19$2e$3$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$tooltip$40$1$2e$4$2e$1_$40$types$2b$react$40$19$2e$3$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
                    asChild: true,
                    children: children
                }, void 0, false, {
                    fileName: "[project]/apps/studio/app/tooltip.tsx",
                    lineNumber: 6,
                    columnNumber: 71
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$tooltip$40$1$2e$4$2e$1_$40$types$2b$react$40$19$2e$3$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$tooltip$40$1$2e$4$2e$1_$40$types$2b$react$40$19$2e$3$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                        side: side,
                        sideOffset: 8,
                        className: "tilo-tooltip",
                        children: [
                            content,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$tooltip$40$1$2e$4$2e$1_$40$types$2b$react$40$19$2e$3$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Arrow"], {
                                className: "tilo-tooltip-arrow"
                            }, void 0, false, {
                                fileName: "[project]/apps/studio/app/tooltip.tsx",
                                lineNumber: 6,
                                columnNumber: 238
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/studio/app/tooltip.tsx",
                        lineNumber: 6,
                        columnNumber: 155
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/studio/app/tooltip.tsx",
                    lineNumber: 6,
                    columnNumber: 134
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/studio/app/tooltip.tsx",
            lineNumber: 6,
            columnNumber: 52
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/studio/app/tooltip.tsx",
        lineNumber: 6,
        columnNumber: 9
    }, this);
}
_c = Tooltip;
var _c;
__turbopack_context__.k.register(_c, "Tooltip");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/bezier.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "bezierProgress",
    ()=>bezierProgress,
    "clamp",
    ()=>clamp,
    "cubic",
    ()=>cubic,
    "defaultBezier",
    ()=>defaultBezier,
    "normalizeHandles",
    ()=>normalizeHandles
]);
const defaultBezier = {
    x1: .25,
    y1: .1,
    x2: .25,
    y2: 1
};
const clamp = (n, min = 0, max = 1)=>Math.min(max, Math.max(min, n));
function cubic(a, b, c, t) {
    const u = 1 - t;
    return 3 * u * u * t * a + 3 * u * t * t * b + t * t * t * c;
}
function bezierProgress(progress, handles) {
    const x = clamp(progress);
    if (x <= 0) return 0;
    if (x >= 1) return 1;
    let lo = 0, hi = 1;
    for(let i = 0; i < 28; i++){
        const mid = (lo + hi) / 2;
        if (cubic(handles.x1, handles.x2, 1, mid) < x) lo = mid;
        else hi = mid;
    }
    return cubic(handles.y1, handles.y2, 1, (lo + hi) / 2);
}
function normalizeHandles(h) {
    return {
        x1: clamp(h.x1),
        y1: clamp(h.y1, -2, 3),
        x2: clamp(h.x2),
        y2: clamp(h.y2, -2, 3)
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/property-animation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "animatedPropertySchema",
    ()=>animatedPropertySchema,
    "animationTrackSchema",
    ()=>animationTrackSchema,
    "animationTracksSchema",
    ()=>animationTracksSchema,
    "movePropertyKeyframe",
    ()=>movePropertyKeyframe,
    "propertyDefaults",
    ()=>propertyDefaults,
    "propertyKeyframeSchema",
    ()=>propertyKeyframeSchema,
    "removePropertyKeyframe",
    ()=>removePropertyKeyframe,
    "sampleProperty",
    ()=>sampleProperty,
    "setPropertyBezier",
    ()=>setPropertyBezier,
    "setPropertyEasing",
    ()=>setPropertyEasing,
    "upsertPropertyKeyframe",
    ()=>upsertPropertyKeyframe
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$bezier$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/bezier.ts [app-client] (ecmascript)");
;
;
const animatedPropertySchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
    "x",
    "y",
    "scale",
    "rotation",
    "opacity"
]);
const propertyKeyframeSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    t: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0).max(86400),
    value: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().finite(),
    easing: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "linear",
        "ease-in",
        "ease-out",
        "ease-in-out",
        "bezier"
    ]).default("ease-in-out"),
    bezier: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        x1: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0).max(1),
        y1: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(-2).max(3),
        x2: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0).max(1),
        y2: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(-2).max(3)
    }).optional()
});
const animationTrackSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().regex(/^[a-z0-9-]+$/),
    property: animatedPropertySchema,
    keyframes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(propertyKeyframeSchema).max(300)
});
const animationTracksSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(animationTrackSchema).max(20).default([]);
const propertyDefaults = {
    x: 0,
    y: 0,
    scale: 1,
    rotation: 0,
    opacity: 1
};
function sampleProperty(track, time, defaultValue) {
    const keys = track?.keyframes.slice().sort((a, b)=>a.t - b.t) || [];
    if (!keys.length) return defaultValue;
    if (time <= keys[0].t) return keys[0].value;
    for(let i = 1; i < keys.length; i++){
        const a = keys[i - 1], b = keys[i];
        if (time > b.t) continue;
        const u = Math.max(0, Math.min(1, (time - a.t) / Math.max(.00001, b.t - a.t)));
        const eased = b.easing === "bezier" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$bezier$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bezierProgress"])(u, b.bezier ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$bezier$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultBezier"]) : b.easing === "linear" ? u : b.easing === "ease-in" ? u * u : b.easing === "ease-out" ? 1 - (1 - u) * (1 - u) : u * u * (3 - 2 * u);
        return a.value + (b.value - a.value) * eased;
    }
    return keys[keys.length - 1].value;
}
function upsertPropertyKeyframe(tracks, property, t, value) {
    const id = "property-" + property, time = Math.max(0, Math.round(t * 30) / 30);
    const existing = tracks.find((track)=>track.property === property);
    const key = {
        t: time,
        value,
        easing: "ease-in-out"
    };
    if (!existing) return [
        ...tracks,
        {
            id,
            property,
            keyframes: [
                key
            ]
        }
    ];
    return tracks.map((track)=>track.property !== property ? track : {
            ...track,
            keyframes: [
                ...track.keyframes.filter((k)=>Math.abs(k.t - time) > 1 / 60),
                key
            ].sort((a, b)=>a.t - b.t)
        });
}
function movePropertyKeyframe(tracks, property, index, time) {
    return tracks.map((track)=>{
        if (track.property !== property || index < 0 || index >= track.keyframes.length) return track;
        const next = track.keyframes.map((k, i)=>i === index ? {
                ...k,
                t: Math.max(0, Math.round(time * 30) / 30)
            } : k);
        return {
            ...track,
            keyframes: next
        };
    });
}
function setPropertyEasing(tracks, property, index, easing) {
    return tracks.map((track)=>track.property === property ? {
            ...track,
            keyframes: track.keyframes.map((k, i)=>i === index ? {
                    ...k,
                    easing
                } : k)
        } : track);
}
function removePropertyKeyframe(tracks, property, index) {
    return tracks.map((track)=>track.property === property ? {
            ...track,
            keyframes: track.keyframes.filter((_, i)=>i !== index)
        } : track);
}
function setPropertyBezier(tracks, property, index, handles) {
    const bezier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$bezier$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeHandles"])(handles);
    return tracks.map((track)=>track.property === property ? {
            ...track,
            keyframes: track.keyframes.map((k, i)=>i === index ? {
                    ...k,
                    easing: "bezier",
                    bezier
                } : k)
        } : track);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/studio/app/animation-inspector.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimationInspector",
    ()=>AnimationInspector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.7_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$slider$2f$slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/studio/components/arc/slider/slider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$app$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/studio/app/tooltip.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$property$2d$animation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/property-animation.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
const properties = [
    [
        "x",
        "Position X",
        -1000,
        1000,
        1
    ],
    [
        "y",
        "Position Y",
        -1000,
        1000,
        1
    ],
    [
        "scale",
        "Échelle",
        .1,
        3,
        .01
    ],
    [
        "rotation",
        "Rotation",
        -180,
        180,
        1
    ],
    [
        "opacity",
        "Opacité",
        0,
        1,
        .01
    ]
];
function AnimationInspector({ tracks, time, onChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "animation-inspector",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "section-title",
                children: "Animation"
            }, void 0, false, {
                fileName: "[project]/apps/studio/app/animation-inspector.tsx",
                lineNumber: 8,
                columnNumber: 50
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "hint",
                children: "Déplace la tête de lecture puis ajuste une propriété pour créer une keyframe."
            }, void 0, false, {
                fileName: "[project]/apps/studio/app/animation-inspector.tsx",
                lineNumber: 8,
                columnNumber: 96
            }, this),
            properties.map(([property, label, min, max, step])=>{
                const track = tracks.find((t)=>t.property === property);
                const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$property$2d$animation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sampleProperty"])(track, time, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$property$2d$animation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["propertyDefaults"][property]);
                const active = track?.keyframes.some((k)=>Math.abs(k.t - time) < 1 / 60);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "animation-property-row",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$slider$2f$slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                            label: label,
                            min: min,
                            max: max,
                            step: step,
                            value: value,
                            onValueChange: (v)=>onChange((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$property$2d$animation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["upsertPropertyKeyframe"])(tracks, property, time, v))
                        }, void 0, false, {
                            fileName: "[project]/apps/studio/app/animation-inspector.tsx",
                            lineNumber: 10,
                            columnNumber: 64
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$app$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                            content: active ? "Keyframe présente" : "Ajouter une keyframe",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn icon property-diamond " + (active ? "active" : ""),
                                "aria-label": "Ajouter une keyframe " + label,
                                onClick: ()=>onChange((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$property$2d$animation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["upsertPropertyKeyframe"])(tracks, property, time, value)),
                                children: "◆"
                            }, void 0, false, {
                                fileName: "[project]/apps/studio/app/animation-inspector.tsx",
                                lineNumber: 10,
                                columnNumber: 278
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/studio/app/animation-inspector.tsx",
                            lineNumber: 10,
                            columnNumber: 209
                        }, this)
                    ]
                }, property, true, {
                    fileName: "[project]/apps/studio/app/animation-inspector.tsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, this);
            })
        ]
    }, void 0, true, {
        fileName: "[project]/apps/studio/app/animation-inspector.tsx",
        lineNumber: 8,
        columnNumber: 9
    }, this);
}
_c = AnimationInspector;
var _c;
__turbopack_context__.k.register(_c, "AnimationInspector");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/studio/app/property-timeline-track.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PropertyTimelineTrack",
    ()=>PropertyTimelineTrack
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.7_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.7_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$property$2d$animation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/property-animation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$app$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/studio/app/tooltip.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function PropertyTimelineTrack({ track, tracks, duration, onChange, onSelect }) {
    _s();
    const drag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    function start(e, index) {
        const rect = e.currentTarget.parentElement?.getBoundingClientRect();
        if (!rect) return;
        drag.current = {
            index,
            rect
        };
        e.currentTarget.setPointerCapture(e.pointerId);
        onSelect(track.property, index);
    }
    function move(e) {
        if (!drag.current) return;
        const { index, rect } = drag.current;
        const time = Math.max(0, Math.min(duration, (e.clientX - rect.left) / Math.max(1, rect.width) * duration));
        onChange((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$property$2d$animation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["movePropertyKeyframe"])(tracks, track.property, index, time));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "track",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "track-label",
                children: track.property
            }, void 0, false, {
                fileName: "[project]/apps/studio/app/property-timeline-track.tsx",
                lineNumber: 20,
                columnNumber: 32
            }, this),
            track.keyframes.map((key, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$app$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                    content: track.property + " · " + key.value + " · " + key.t.toFixed(2) + " s",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "keyframe",
                        "aria-label": "Modifier keyframe " + track.property,
                        style: {
                            left: Math.min(100, key.t / duration * 100) + "%",
                            background: "var(--accent)"
                        },
                        onPointerDown: (e)=>start(e, index),
                        onPointerMove: move,
                        onPointerUp: (e)=>{
                            move(e);
                            drag.current = null;
                        },
                        onPointerCancel: ()=>{
                            drag.current = null;
                        },
                        onClick: ()=>onSelect(track.property, index)
                    }, void 0, false, {
                        fileName: "[project]/apps/studio/app/property-timeline-track.tsx",
                        lineNumber: 20,
                        columnNumber: 209
                    }, this)
                }, index, false, {
                    fileName: "[project]/apps/studio/app/property-timeline-track.tsx",
                    lineNumber: 20,
                    columnNumber: 119
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/studio/app/property-timeline-track.tsx",
        lineNumber: 20,
        columnNumber: 9
    }, this);
}
_s(PropertyTimelineTrack, "gIddYogjP+VVdD1QmmHwmANJEG4=");
_c = PropertyTimelineTrack;
var _c;
__turbopack_context__.k.register(_c, "PropertyTimelineTrack");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/studio/app/bezier-curve-editor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BezierCurveEditor",
    ()=>BezierCurveEditor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.7_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.7_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$bezier$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/bezier.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function BezierCurveEditor({ handles, onChange }) {
    _s();
    const svg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const active = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const h = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$bezier$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeHandles"])(handles);
    const point = (x, y)=>({
            x: 10 + x * 180,
            y: 190 - y * 180
        });
    const a = point(h.x1, h.y1), b = point(h.x2, h.y2);
    function move(e) {
        if (!active.current || !svg.current) return;
        const r = svg.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(1, ((e.clientX - r.left) / r.width * 200 - 10) / 180));
        const y = Math.max(-2, Math.min(3, (190 - (e.clientY - r.top) / r.height * 200) / 180));
        onChange(active.current === "in" ? {
            ...h,
            x1: x,
            y1: y
        } : {
            ...h,
            x2: x,
            y2: y
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bezier-curve-editor",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ref: svg,
                viewBox: "0 0 200 200",
                "aria-label": "Courbe de vitesse Bézier",
                role: "img",
                onPointerMove: move,
                onPointerUp: (e)=>{
                    move(e);
                    active.current = null;
                    e.currentTarget.releasePointerCapture(e.pointerId);
                },
                onPointerCancel: ()=>{
                    active.current = null;
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "0",
                        y: "0",
                        width: "200",
                        height: "200",
                        rx: "8",
                        fill: "#242424"
                    }, void 0, false, {
                        fileName: "[project]/apps/studio/app/bezier-curve-editor.tsx",
                        lineNumber: 20,
                        columnNumber: 3
                    }, this),
                    [
                        .25,
                        .5,
                        .75
                    ].map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            stroke: "#414141",
                            strokeWidth: ".65",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: 10 + v * 180,
                                    x2: 10 + v * 180,
                                    y1: "10",
                                    y2: "190"
                                }, void 0, false, {
                                    fileName: "[project]/apps/studio/app/bezier-curve-editor.tsx",
                                    lineNumber: 21,
                                    columnNumber: 70
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "10",
                                    x2: "190",
                                    y1: 10 + v * 180,
                                    y2: 10 + v * 180
                                }, void 0, false, {
                                    fileName: "[project]/apps/studio/app/bezier-curve-editor.tsx",
                                    lineNumber: 21,
                                    columnNumber: 122
                                }, this)
                            ]
                        }, v, true, {
                            fileName: "[project]/apps/studio/app/bezier-curve-editor.tsx",
                            lineNumber: 21,
                            columnNumber: 24
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M10 190 L190 10",
                        stroke: "#777",
                        strokeWidth: "1",
                        strokeDasharray: "3 5",
                        fill: "none"
                    }, void 0, false, {
                        fileName: "[project]/apps/studio/app/bezier-curve-editor.tsx",
                        lineNumber: 22,
                        columnNumber: 3
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: `M10 190 L${a.x} ${a.y} M190 10 L${b.x} ${b.y}`,
                        stroke: "#9A9A9A",
                        strokeWidth: "1.6",
                        strokeDasharray: "5 4",
                        fill: "none"
                    }, void 0, false, {
                        fileName: "[project]/apps/studio/app/bezier-curve-editor.tsx",
                        lineNumber: 23,
                        columnNumber: 3
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: `M10 190 C${a.x} ${a.y} ${b.x} ${b.y} 190 10`,
                        stroke: "#F5F5F5",
                        strokeWidth: "3.5",
                        strokeLinecap: "round",
                        fill: "none"
                    }, void 0, false, {
                        fileName: "[project]/apps/studio/app/bezier-curve-editor.tsx",
                        lineNumber: 24,
                        columnNumber: 3
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "10",
                        cy: "190",
                        r: "4",
                        fill: "#fff"
                    }, void 0, false, {
                        fileName: "[project]/apps/studio/app/bezier-curve-editor.tsx",
                        lineNumber: 25,
                        columnNumber: 3
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "190",
                        cy: "10",
                        r: "4",
                        fill: "#fff"
                    }, void 0, false, {
                        fileName: "[project]/apps/studio/app/bezier-curve-editor.tsx",
                        lineNumber: 25,
                        columnNumber: 47
                    }, this),
                    [
                        [
                            "in",
                            a
                        ],
                        [
                            "out",
                            b
                        ]
                    ].map(([id, p])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: p.x,
                            cy: p.y,
                            r: "8",
                            fill: "#292929",
                            stroke: "#FFFFFF",
                            strokeWidth: "2.5",
                            style: {
                                cursor: "grab",
                                touchAction: "none"
                            },
                            onPointerDown: (e)=>{
                                e.preventDefault();
                                e.stopPropagation();
                                active.current = id;
                                svg.current?.setPointerCapture(e.pointerId);
                            }
                        }, id, false, {
                            fileName: "[project]/apps/studio/app/bezier-curve-editor.tsx",
                            lineNumber: 26,
                            columnNumber: 50
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/studio/app/bezier-curve-editor.tsx",
                lineNumber: 19,
                columnNumber: 46
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bezier-readout",
                children: [
                    "P1 (",
                    h.x1.toFixed(2),
                    ", ",
                    h.y1.toFixed(2),
                    ") · P2 (",
                    h.x2.toFixed(2),
                    ", ",
                    h.y2.toFixed(2),
                    ")"
                ]
            }, void 0, true, {
                fileName: "[project]/apps/studio/app/bezier-curve-editor.tsx",
                lineNumber: 27,
                columnNumber: 8
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/studio/app/bezier-curve-editor.tsx",
        lineNumber: 19,
        columnNumber: 9
    }, this);
}
_s(BezierCurveEditor, "fSdAlq/QlGF939m6kgkQgj0fLdw=");
_c = BezierCurveEditor;
var _c;
__turbopack_context__.k.register(_c, "BezierCurveEditor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/studio/app/scene-position-overlay.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScenePositionOverlay",
    ()=>ScenePositionOverlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.7_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.7_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$property$2d$animation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/property-animation.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ScenePositionOverlay({ tracks, time, width, height, onChange }) {
    _s();
    const origin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$property$2d$animation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sampleProperty"])(tracks.find((t)=>t.property === "x"), time, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$property$2d$animation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["propertyDefaults"].x);
    const y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$property$2d$animation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sampleProperty"])(tracks.find((t)=>t.property === "y"), time, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$property$2d$animation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["propertyDefaults"].y);
    function move(e) {
        if (!origin.current) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const dx = (e.clientX - origin.current.px) / Math.max(1, rect.width) * width;
        const dy = (e.clientY - origin.current.py) / Math.max(1, rect.height) * height;
        const tx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$property$2d$animation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["upsertPropertyKeyframe"])(tracks, "x", time, Math.round(origin.current.x + dx));
        onChange((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$property$2d$animation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["upsertPropertyKeyframe"])(tx, "y", time, Math.round(origin.current.y + dy)));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "scene-position-overlay",
        role: "application",
        "aria-label": "Déplacer la fenêtre vidéo",
        onPointerDown: (e)=>{
            origin.current = {
                x,
                y,
                px: e.clientX,
                py: e.clientY
            };
            e.currentTarget.setPointerCapture(e.pointerId);
        },
        onPointerMove: move,
        onPointerUp: (e)=>{
            move(e);
            origin.current = null;
        },
        onPointerCancel: ()=>{
            origin.current = null;
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "scene-position-label",
                children: [
                    "Déplacer la fenêtre · X ",
                    Math.round(x),
                    " · Y ",
                    Math.round(y)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/studio/app/scene-position-overlay.tsx",
                lineNumber: 19,
                columnNumber: 3
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "scene-position-crosshair",
                "aria-hidden": "true",
                children: "+"
            }, void 0, false, {
                fileName: "[project]/apps/studio/app/scene-position-overlay.tsx",
                lineNumber: 20,
                columnNumber: 3
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/studio/app/scene-position-overlay.tsx",
        lineNumber: 18,
        columnNumber: 9
    }, this);
}
_s(ScenePositionOverlay, "e+C4Xr/smGPBLOksszM9hpIe1PI=");
_c = ScenePositionOverlay;
var _c;
__turbopack_context__.k.register(_c, "ScenePositionOverlay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/spatial-path.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "spatialPath",
    ()=>spatialPath,
    "spatialPoints",
    ()=>spatialPoints
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$property$2d$animation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/property-animation.ts [app-client] (ecmascript)");
;
function spatialPoints(tracks) {
    const x = tracks.find((a)=>a.property === "x"), y = tracks.find((a)=>a.property === "y");
    const times = [
        ...new Set([
            ...x?.keyframes || [],
            ...y?.keyframes || []
        ].map((k)=>k.t))
    ].sort((a, b)=>a - b);
    return times.map((t)=>({
            t,
            x: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$property$2d$animation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sampleProperty"])(x, t, 0),
            y: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$property$2d$animation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sampleProperty"])(y, t, 0)
        }));
}
function spatialPath(points, width, height) {
    if (!points.length) return "";
    const coord = (p)=>({
            x: width / 2 + p.x,
            y: height / 2 + p.y
        });
    const pts = points.map(coord);
    let d = "M" + pts[0].x + " " + pts[0].y;
    for(let i = 0; i < pts.length - 1; i++){
        const p0 = pts[Math.max(0, i - 1)], p1 = pts[i], p2 = pts[i + 1], p3 = pts[Math.min(pts.length - 1, i + 2)];
        const c1 = {
            x: p1.x + (p2.x - p0.x) / 6,
            y: p1.y + (p2.y - p0.y) / 6
        };
        const c2 = {
            x: p2.x - (p3.x - p1.x) / 6,
            y: p2.y - (p3.y - p1.y) / 6
        };
        d += " C" + c1.x + " " + c1.y + " " + c2.x + " " + c2.y + " " + p2.x + " " + p2.y;
    }
    return d;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/spatial-handles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cubicPoint",
    ()=>cubicPoint,
    "spatialHandleSchema",
    ()=>spatialHandleSchema,
    "spatialHandlesSchema",
    ()=>spatialHandlesSchema,
    "spatialPosition",
    ()=>spatialPosition,
    "updateSpatialHandle",
    ()=>updateSpatialHandle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z>");
;
const spatialHandleSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    t: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0),
    outX: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().finite(),
    outY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().finite(),
    inX: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().finite(),
    inY: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().finite()
});
const spatialHandlesSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(spatialHandleSchema).max(300).default([]);
function cubicPoint(a, b, c, d, u) {
    const v = 1 - u;
    return v * v * v * a + 3 * v * v * u * b + 3 * v * u * u * c + u * u * u * d;
}
function spatialPosition(points, handles, time) {
    const p = [
        ...points
    ].sort((a, b)=>a.t - b.t);
    if (!p.length) return {
        x: 0,
        y: 0
    };
    if (time <= p[0].t) return {
        x: p[0].x,
        y: p[0].y
    };
    for(let i = 1; i < p.length; i++){
        const a = p[i - 1], b = p[i];
        if (time > b.t) continue;
        const u = Math.max(0, Math.min(1, (time - a.t) / (b.t - a.t || 1)));
        const h1 = handles.find((h)=>Math.abs(h.t - a.t) < 1 / 60), h2 = handles.find((h)=>Math.abs(h.t - b.t) < 1 / 60);
        return {
            x: cubicPoint(a.x, a.x + (h1?.outX ?? (b.x - a.x) / 3), b.x + (h2?.inX ?? -(b.x - a.x) / 3), b.x, u),
            y: cubicPoint(a.y, a.y + (h1?.outY ?? (b.y - a.y) / 3), b.y + (h2?.inY ?? -(b.y - a.y) / 3), b.y, u)
        };
    }
    return {
        x: p[p.length - 1].x,
        y: p[p.length - 1].y
    };
}
function updateSpatialHandle(handles, point, kind, x, y) {
    const existing = handles.find((h)=>Math.abs(h.t - point.t) < 1 / 60) ?? {
        t: point.t,
        inX: 0,
        inY: 0,
        outX: 0,
        outY: 0
    };
    const next = {
        ...existing,
        [kind + "X"]: x - point.x,
        [kind + "Y"]: y - point.y
    };
    return [
        ...handles.filter((h)=>Math.abs(h.t - point.t) >= 1 / 60),
        next
    ].sort((a, b)=>a.t - b.t);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/studio/app/spatial-path-overlay.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SpatialPathOverlay",
    ()=>SpatialPathOverlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.7_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.7_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$property$2d$animation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/property-animation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$spatial$2d$path$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/spatial-path.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$spatial$2d$handles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/spatial-handles.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function SpatialPathOverlay({ tracks, handles, time, width, height, onChange, onHandlesChange, onSeek, onGestureStart, onGestureEnd }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), drag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const points = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$spatial$2d$path$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spatialPoints"])(tracks), current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$spatial$2d$handles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spatialPosition"])(points, handles, time);
    const pos = (e)=>{
        const r = ref.current?.getBoundingClientRect();
        if (!r) return null;
        return {
            x: (e.clientX - r.left) / r.width * width - width / 2,
            y: (e.clientY - r.top) / r.height * height - height / 2
        };
    };
    const coord = (p)=>({
            x: width / 2 + p.x,
            y: height / 2 + p.y
        });
    function update(e) {
        const g = drag.current, p = pos(e);
        if (!g || !p) return;
        const point = points.find((a)=>a.t === g.t);
        if (!point) return;
        if (g.kind === "point") {
            const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$property$2d$animation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["upsertPropertyKeyframe"])(tracks, "x", g.t, Math.round(p.x));
            onChange((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$property$2d$animation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["upsertPropertyKeyframe"])(next, "y", g.t, Math.round(p.y)));
        } else onHandlesChange((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$spatial$2d$handles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateSpatialHandle"])(handles, point, g.kind, p.x, p.y));
    }
    const path = points.length ? "M" + coord(points[0]).x + " " + coord(points[0]).y + points.slice(1).map((p, i)=>{
        const prev = points[i], a = handles.find((h)=>h.t === prev.t), b = handles.find((h)=>h.t === p.t), dx = (p.x - prev.x) / 3, dy = (p.y - prev.y) / 3;
        const c1 = coord({
            x: prev.x + (a?.outX ?? dx),
            y: prev.y + (a?.outY ?? dy)
        }), c2 = coord({
            x: p.x + (b?.inX ?? -dx),
            y: p.y + (b?.inY ?? -dy)
        }), end = coord(p);
        return " C" + c1.x + " " + c1.y + " " + c2.x + " " + c2.y + " " + end.x + " " + end.y;
    }).join("") : "";
    function handlePointer(e, t, kind) {
        e.preventDefault();
        e.stopPropagation();
        onGestureStart();
        drag.current = {
            t,
            kind
        };
        ref.current?.setPointerCapture(e.pointerId);
        onSeek(t);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ref: ref,
        className: "spatial-path-overlay",
        viewBox: `0 0 ${width} ${height}`,
        preserveAspectRatio: "none",
        "aria-label": "Trajectoire spatiale avec tangentes",
        onPointerMove: update,
        onPointerUp: (e)=>{
            update(e);
            drag.current = null;
            onGestureEnd();
        },
        onPointerCancel: ()=>{
            drag.current = null;
            onGestureEnd();
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: path,
                fill: "none",
                stroke: "#FFF",
                strokeWidth: "2.5",
                strokeDasharray: "8 6",
                pointerEvents: "none"
            }, void 0, false, {
                fileName: "[project]/apps/studio/app/spatial-path-overlay.tsx",
                lineNumber: 24,
                columnNumber: 3
            }, this),
            points.map((p, i)=>{
                const h = handles.find((a)=>a.t === p.t), base = coord(p);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        [
                            "in",
                            "out"
                        ].map((kind)=>{
                            const other = points[i + (kind === "in" ? -1 : 1)];
                            if (!other) return null;
                            const dx = (other.x - p.x) / 3, dy = (other.y - p.y) / 3;
                            const v = coord({
                                x: p.x + (h?.[kind + "X"] ?? dx),
                                y: p.y + (h?.[kind + "Y"] ?? dy)
                            });
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: base.x,
                                        y1: base.y,
                                        x2: v.x,
                                        y2: v.y,
                                        stroke: "#BBB",
                                        strokeWidth: "1.5",
                                        strokeDasharray: "5 4",
                                        pointerEvents: "none"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/studio/app/spatial-path-overlay.tsx",
                                        lineNumber: 26,
                                        columnNumber: 269
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: v.x,
                                        cy: v.y,
                                        r: "9",
                                        fill: "#777",
                                        stroke: "#FFF",
                                        strokeWidth: "2",
                                        onPointerDown: (e)=>handlePointer(e, p.t, kind),
                                        style: {
                                            cursor: "grab",
                                            pointerEvents: "all"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/apps/studio/app/spatial-path-overlay.tsx",
                                        lineNumber: 26,
                                        columnNumber: 393
                                    }, this)
                                ]
                            }, kind, true, {
                                fileName: "[project]/apps/studio/app/spatial-path-overlay.tsx",
                                lineNumber: 26,
                                columnNumber: 255
                            }, this);
                        }),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: base.x,
                            cy: base.y,
                            r: "13",
                            fill: "#222",
                            stroke: "#FFF",
                            strokeWidth: "3",
                            onPointerDown: (e)=>handlePointer(e, p.t, "point"),
                            style: {
                                cursor: "grab",
                                pointerEvents: "all"
                            }
                        }, void 0, false, {
                            fileName: "[project]/apps/studio/app/spatial-path-overlay.tsx",
                            lineNumber: 27,
                            columnNumber: 4
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            x: base.x,
                            y: base.y + 4,
                            fontSize: "11",
                            fill: "#FFF",
                            textAnchor: "middle",
                            pointerEvents: "none",
                            children: i + 1
                        }, void 0, false, {
                            fileName: "[project]/apps/studio/app/spatial-path-overlay.tsx",
                            lineNumber: 27,
                            columnNumber: 178
                        }, this)
                    ]
                }, p.t, true, {
                    fileName: "[project]/apps/studio/app/spatial-path-overlay.tsx",
                    lineNumber: 25,
                    columnNumber: 79
                }, this);
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: width / 2 + current.x,
                cy: height / 2 + current.y,
                r: "6",
                fill: "#FFF",
                stroke: "#222",
                strokeWidth: "2",
                pointerEvents: "none"
            }, void 0, false, {
                fileName: "[project]/apps/studio/app/spatial-path-overlay.tsx",
                lineNumber: 29,
                columnNumber: 3
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/studio/app/spatial-path-overlay.tsx",
        lineNumber: 23,
        columnNumber: 9
    }, this);
}
_s(SpatialPathOverlay, "OtZFh8bnLe4YIx0q+CDhchW1/o8=");
_c = SpatialPathOverlay;
var _c;
__turbopack_context__.k.register(_c, "SpatialPathOverlay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/timeline.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "arrange",
    ()=>arrange,
    "clipSchema",
    ()=>clipSchema,
    "duration",
    ()=>duration,
    "moveClip",
    ()=>moveClip,
    "removeClip",
    ()=>removeClip,
    "sourceTimeAt",
    ()=>sourceTimeAt,
    "splitClip",
    ()=>splitClip,
    "trimClip",
    ()=>trimClip,
    "validateClips",
    ()=>validateClips
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z>");
;
const clipSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().regex(/^[a-z0-9-]+$/),
    sourceIn: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nonnegative(),
    sourceOut: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().positive(),
    start: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().nonnegative()
}).refine((c)=>c.sourceOut > c.sourceIn);
const duration = (c)=>c.sourceOut - c.sourceIn;
const arrange = (clips)=>{
    let t = 0;
    return clips.map((c)=>{
        const next = {
            ...c,
            start: t
        };
        t += duration(c);
        return next;
    });
};
const validateClips = (clips, sourceDuration)=>clips.map((c)=>{
        const parsed = clipSchema.parse(c);
        if (c.sourceOut > sourceDuration + .001) throw Error("Clip exceeds source duration");
        return parsed;
    });
function splitClip(clips, id, time) {
    const index = clips.findIndex((c)=>c.id === id);
    if (index < 0) return clips;
    const c = clips[index], local = time - c.start;
    if (local <= .05 || local >= duration(c) - .05) return clips;
    const mid = c.sourceIn + local;
    return arrange([
        ...clips.slice(0, index),
        {
            ...c,
            sourceOut: mid
        },
        {
            ...c,
            id: c.id + "-split-" + Math.round(mid * 1000),
            sourceIn: mid
        },
        ...clips.slice(index + 1)
    ]);
}
function trimClip(clips, id, edge, delta, sourceDuration) {
    return arrange(clips.map((c)=>{
        if (c.id !== id) return c;
        const min = .1;
        if (edge === "left") return {
            ...c,
            sourceIn: Math.max(0, Math.min(c.sourceOut - min, c.sourceIn + delta))
        };
        return {
            ...c,
            sourceOut: Math.min(sourceDuration, Math.max(c.sourceIn + min, c.sourceOut + delta))
        };
    }));
}
function moveClip(clips, from, to) {
    if (from < 0 || from >= clips.length || to < 0 || to >= clips.length) return clips;
    const next = [
        ...clips
    ], item = next.splice(from, 1)[0];
    next.splice(to, 0, item);
    return arrange(next);
}
function removeClip(clips, id) {
    return arrange(clips.filter((c)=>c.id !== id));
}
function sourceTimeAt(clips, time) {
    const clip = clips.find((c)=>time >= c.start && time < c.start + duration(c));
    return clip ? clip.sourceIn + time - clip.start : null;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/trim-geometry.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "pointerDeltaSeconds",
    ()=>pointerDeltaSeconds
]);
function pointerDeltaSeconds(deltaX, trackWidth, duration) {
    if (!Number.isFinite(deltaX) || !Number.isFinite(trackWidth) || trackWidth <= 0 || !Number.isFinite(duration) || duration <= 0) return 0;
    return deltaX / trackWidth * duration;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/studio/app/video-timeline-clip.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VideoTimelineClip",
    ()=>VideoTimelineClip
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.7_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.7_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/timeline.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$trim$2d$geometry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/trim-geometry.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function VideoTimelineClip({ clip, clips, index, duration, sourceDuration, selected, onChange, onSelect, onDropClip }) {
    _s();
    const gesture = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    function update(e) {
        const g = gesture.current;
        if (!g) return;
        const delta = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$trim$2d$geometry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pointerDeltaSeconds"])(e.clientX - g.startX, g.trackWidth, duration);
        onChange((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trimClip"])(g.initial, clip.id, g.edge, delta, sourceDuration));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "clip video-timeline-clip " + (selected ? "selected" : ""),
        style: {
            left: clip.start / duration * 100 + "%",
            width: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["duration"])(clip) / duration * 100 + "%",
            right: "auto"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "video-clip-main",
                draggable: true,
                onDragStart: (e)=>{
                    e.dataTransfer.setData("text/plain", String(index));
                    e.dataTransfer.effectAllowed = "move";
                },
                onDragOver: (e)=>e.preventDefault(),
                onDrop: (e)=>{
                    e.preventDefault();
                    const from = Number(e.dataTransfer.getData("text/plain"));
                    if (Number.isInteger(from)) onDropClip(from, index);
                },
                onClick: onSelect,
                children: clip.id
            }, void 0, false, {
                fileName: "[project]/apps/studio/app/video-timeline-clip.tsx",
                lineNumber: 16,
                columnNumber: 3
            }, this),
            [
                "left",
                "right"
            ].map((edge)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    role: "slider",
                    tabIndex: 0,
                    "aria-label": edge === "left" ? "Raccourcir le début du clip" : "Raccourcir la fin du clip",
                    "aria-valuemin": 0,
                    "aria-valuemax": sourceDuration,
                    "aria-valuenow": edge === "left" ? clip.sourceIn : clip.sourceOut,
                    className: "video-trim-handle " + edge,
                    onPointerDown: (e)=>{
                        e.preventDefault();
                        e.stopPropagation();
                        const track = e.currentTarget.parentElement?.parentElement;
                        gesture.current = {
                            startX: e.clientX,
                            edge,
                            initial: clips,
                            trackWidth: Math.max(1, track?.getBoundingClientRect().width || 1)
                        };
                        e.currentTarget.setPointerCapture(e.pointerId);
                    },
                    onPointerMove: update,
                    onPointerUp: (e)=>{
                        update(e);
                        gesture.current = null;
                    },
                    onPointerCancel: ()=>{
                        gesture.current = null;
                    },
                    onKeyDown: (e)=>{
                        if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
                            e.preventDefault();
                            e.stopPropagation();
                            onChange((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trimClip"])(clips, clip.id, edge, e.key === "ArrowRight" ? 1 / 30 : -1 / 30, sourceDuration));
                        }
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": "true",
                        className: "video-trim-grip"
                    }, void 0, false, {
                        fileName: "[project]/apps/studio/app/video-timeline-clip.tsx",
                        lineNumber: 17,
                        columnNumber: 904
                    }, this)
                }, edge, false, {
                    fileName: "[project]/apps/studio/app/video-timeline-clip.tsx",
                    lineNumber: 17,
                    columnNumber: 42
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/studio/app/video-timeline-clip.tsx",
        lineNumber: 15,
        columnNumber: 9
    }, this);
}
_s(VideoTimelineClip, "4XT734KteY49/5n0tLzUhP2Fa7k=");
_c = VideoTimelineClip;
var _c;
__turbopack_context__.k.register(_c, "VideoTimelineClip");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/timeline-scale.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "rulerTicks",
    ()=>rulerTicks,
    "safeTimelineDuration",
    ()=>safeTimelineDuration,
    "timeFromTimelinePointer",
    ()=>timeFromTimelinePointer,
    "timelinePercentage",
    ()=>timelinePercentage
]);
const safeTimelineDuration = (sourceDuration, movieDuration)=>Math.max(.001, sourceDuration, movieDuration);
const timelinePercentage = (time, scaleDuration)=>Math.max(0, Math.min(100, time / Math.max(.001, scaleDuration) * 100));
const timeFromTimelinePointer = (clientX, rectLeft, rectWidth, scaleDuration, movieDuration)=>{
    if (!Number.isFinite(clientX) || rectWidth <= 0) return 0;
    return Math.max(0, Math.min(movieDuration, (clientX - rectLeft) / rectWidth * scaleDuration));
};
const rulerTicks = (scaleDuration, maxTicks = 24)=>{
    const step = Math.max(1, Math.ceil(scaleDuration / Math.max(1, maxTicks - 1)));
    const ticks = [];
    for(let t = 0; t <= scaleDuration; t += step)ticks.push(t);
    return ticks;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/studio/app/timeline-playhead.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TimelinePlayhead",
    ()=>TimelinePlayhead
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.7_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.7_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$timeline$2d$scale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/timeline-scale.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function TimelinePlayhead({ time, movieDuration, scaleDuration, onSeek }) {
    _s();
    const dragging = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const pointerTime = (e)=>{
        const surface = e.currentTarget.closest(".timeline-body");
        const ruler = surface?.querySelector(".ruler");
        const rect = ruler?.getBoundingClientRect();
        if (!rect) return;
        onSeek((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$timeline$2d$scale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeFromTimelinePointer"])(e.clientX, rect.left, rect.width, scaleDuration, movieDuration));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        className: "playhead playhead-draggable",
        "aria-label": "Déplacer la tête de lecture",
        "aria-valuetext": time.toFixed(2) + " secondes",
        style: {
            left: "calc(115px + (100% - 133px) * " + (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$timeline$2d$scale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timelinePercentage"])(time, scaleDuration) / 100 + ")"
        },
        onPointerDown: (e)=>{
            e.preventDefault();
            e.stopPropagation();
            dragging.current = true;
            e.currentTarget.setPointerCapture(e.pointerId);
            pointerTime(e);
        },
        onPointerMove: (e)=>{
            if (dragging.current) pointerTime(e);
        },
        onPointerUp: (e)=>{
            if (dragging.current) pointerTime(e);
            dragging.current = false;
        },
        onPointerCancel: ()=>{
            dragging.current = false;
        },
        onKeyDown: (e)=>{
            if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
                e.preventDefault();
                onSeek(time + (e.key === "ArrowRight" ? 1 : -1) / 30);
            } else if (e.key === "Home") {
                e.preventDefault();
                onSeek(0);
            } else if (e.key === "End") {
                e.preventDefault();
                onSeek(movieDuration);
            }
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "playhead-head",
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/apps/studio/app/timeline-playhead.tsx",
            lineNumber: 15,
            columnNumber: 820
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/studio/app/timeline-playhead.tsx",
        lineNumber: 15,
        columnNumber: 9
    }, this);
}
_s(TimelinePlayhead, "+EVpeuLA9Jyjz/MF+MslFCIw9DY=");
_c = TimelinePlayhead;
var _c;
__turbopack_context__.k.register(_c, "TimelinePlayhead");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/project-management.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "copyProjectName",
    ()=>copyProjectName,
    "projectIdPattern",
    ()=>projectIdPattern,
    "validProjectId",
    ()=>validProjectId
]);
const projectIdPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
function validProjectId(id) {
    return typeof id === "string" && id.length > 0 && id.length <= 80 && projectIdPattern.test(id);
}
function copyProjectName(id, existing) {
    let candidate = id + "-copy", index = 2;
    while(existing.includes(candidate)){
        candidate = id + "-copy-" + index;
        index++;
    }
    return candidate;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/studio/app/studio-feedback.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectDialog",
    ()=>ProjectDialog,
    "StudioToasts",
    ()=>StudioToasts,
    "useStudioNotices",
    ()=>useStudioNotices
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.7_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.7_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.468.0_react@19.3.0/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.468.0_react@19.3.0/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.468.0_react@19.3.0/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
function useStudioNotices() {
    _s();
    const [notices, setNotices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const notify = (message, kind = "info")=>setNotices((prev)=>[
                ...prev.slice(-3),
                {
                    id: Date.now() + Math.random(),
                    message,
                    kind
                }
            ]);
    const dismiss = (id)=>setNotices((prev)=>prev.filter((n)=>n.id !== id));
    return {
        notices,
        notify,
        dismiss
    };
}
_s(useStudioNotices, "8RgerrlOm7ctQ4QHqcIvhr1plIc=");
function StudioToasts({ notices, dismiss }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "studio-toast-stack",
        role: "region",
        "aria-label": "Notifications",
        children: notices.map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "studio-toast",
                "data-kind": n.kind,
                role: n.kind === "error" ? "alert" : "status",
                children: [
                    n.kind === "error" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                        size: 17
                    }, void 0, false, {
                        fileName: "[project]/apps/studio/app/studio-feedback.tsx",
                        lineNumber: 12,
                        columnNumber: 221
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                        size: 17
                    }, void 0, false, {
                        fileName: "[project]/apps/studio/app/studio-feedback.tsx",
                        lineNumber: 12,
                        columnNumber: 246
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: n.message
                    }, void 0, false, {
                        fileName: "[project]/apps/studio/app/studio-feedback.tsx",
                        lineNumber: 12,
                        columnNumber: 272
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        "aria-label": "Fermer la notification",
                        onClick: ()=>dismiss(n.id),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            size: 15
                        }, void 0, false, {
                            fileName: "[project]/apps/studio/app/studio-feedback.tsx",
                            lineNumber: 12,
                            columnNumber: 368
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/studio/app/studio-feedback.tsx",
                        lineNumber: 12,
                        columnNumber: 296
                    }, this)
                ]
            }, n.id, true, {
                fileName: "[project]/apps/studio/app/studio-feedback.tsx",
                lineNumber: 12,
                columnNumber: 102
            }, this))
    }, void 0, false, {
        fileName: "[project]/apps/studio/app/studio-feedback.tsx",
        lineNumber: 12,
        columnNumber: 9
    }, this);
}
_c = StudioToasts;
function ProjectDialog({ kind, name, initialName, busy, onCancel, onConfirm }) {
    _s1();
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialName);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectDialog.useEffect": ()=>{
            setValue(initialName);
        }
    }["ProjectDialog.useEffect"], [
        initialName,
        kind
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "studio-dialog-backdrop",
        onPointerDown: (e)=>{
            if (e.target === e.currentTarget && !busy) onCancel();
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "studio-dialog-title",
            className: "studio-dialog",
            onKeyDown: (e)=>{
                if (e.key === "Escape" && !busy) onCancel();
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    id: "studio-dialog-title",
                    children: kind === "delete" ? "Supprimer le projet" : "Dupliquer le projet"
                }, void 0, false, {
                    fileName: "[project]/apps/studio/app/studio-feedback.tsx",
                    lineNumber: 19,
                    columnNumber: 3
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: kind === "delete" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            "Supprimer définitivement ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: name
                            }, void 0, false, {
                                fileName: "[project]/apps/studio/app/studio-feedback.tsx",
                                lineNumber: 20,
                                columnNumber: 50
                            }, this),
                            " et tous ses médias ? Cette action est irréversible."
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            "Choisissez un nom pour la copie de ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: name
                            }, void 0, false, {
                                fileName: "[project]/apps/studio/app/studio-feedback.tsx",
                                lineNumber: 20,
                                columnNumber: 166
                            }, this),
                            "."
                        ]
                    }, void 0, true)
                }, void 0, false, {
                    fileName: "[project]/apps/studio/app/studio-feedback.tsx",
                    lineNumber: 20,
                    columnNumber: 3
                }, this),
                kind === "duplicate" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    children: [
                        "Nom de la copie",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            autoFocus: true,
                            value: value,
                            maxLength: 80,
                            onChange: (e)=>setValue(e.target.value),
                            onKeyDown: (e)=>{
                                if (e.key === "Enter") onConfirm(value);
                            }
                        }, void 0, false, {
                            fileName: "[project]/apps/studio/app/studio-feedback.tsx",
                            lineNumber: 21,
                            columnNumber: 46
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/studio/app/studio-feedback.tsx",
                    lineNumber: 21,
                    columnNumber: 24
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "studio-dialog-actions",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn",
                            disabled: busy,
                            onClick: onCancel,
                            children: "Annuler"
                        }, void 0, false, {
                            fileName: "[project]/apps/studio/app/studio-feedback.tsx",
                            lineNumber: 22,
                            columnNumber: 42
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn " + (kind === "delete" ? "danger" : "primary"),
                            disabled: busy || kind === "duplicate" && !value.trim(),
                            onClick: ()=>onConfirm(value),
                            children: kind === "delete" ? "Supprimer définitivement" : "Dupliquer"
                        }, void 0, false, {
                            fileName: "[project]/apps/studio/app/studio-feedback.tsx",
                            lineNumber: 22,
                            columnNumber: 117
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/studio/app/studio-feedback.tsx",
                    lineNumber: 22,
                    columnNumber: 3
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/studio/app/studio-feedback.tsx",
            lineNumber: 18,
            columnNumber: 118
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/studio/app/studio-feedback.tsx",
        lineNumber: 18,
        columnNumber: 9
    }, this);
}
_s1(ProjectDialog, "tv8Hh/EAgK4Jyy6zfTqXzYeH3gw=");
_c1 = ProjectDialog;
var _c, _c1;
__turbopack_context__.k.register(_c, "StudioToasts");
__turbopack_context__.k.register(_c1, "ProjectDialog");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/audio-editing.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clampAudioStart",
    ()=>clampAudioStart,
    "duckingGain",
    ()=>duckingGain,
    "mixedAudioGain",
    ()=>mixedAudioGain,
    "trimAudioEdge",
    ()=>trimAudioEdge,
    "waveformPeaks",
    ()=>waveformPeaks
]);
function clampAudioStart(start, movieDuration, clipDuration) {
    return Math.max(0, Math.min(Math.max(0, movieDuration - Math.min(clipDuration, movieDuration)), Math.round(start * 30) / 30));
}
function duckingGain(track, tracks, time, amount = .35, ramp = .25) {
    if (track.kind !== "ambience") return 1;
    const voices = tracks.filter((t)=>t.kind === "voiceover" && !t.muted);
    let gain = 1;
    for (const v of voices){
        const before = v.start - time, after = time - (v.start + v.duration);
        let influence = 0;
        if (before > 0 && before < ramp) influence = 1 - before / ramp;
        else if (after > 0 && after < ramp) influence = 1 - after / ramp;
        else if (time >= v.start && time <= v.start + v.duration) influence = 1;
        gain = Math.min(gain, 1 - influence * (1 - amount));
    }
    return gain;
}
function waveformPeaks(samples, bars = 80) {
    if (!samples.length) return Array(bars).fill(0);
    return Array.from({
        length: bars
    }, (_, i)=>{
        const start = Math.floor(i * samples.length / bars), end = Math.max(start + 1, Math.floor((i + 1) * samples.length / bars));
        let max = 0;
        for(let j = start; j < end && j < samples.length; j++)max = Math.max(max, Math.abs(samples[j]));
        return Math.min(1, max);
    });
}
function trimAudioEdge(track, edge, delta, movieDuration) {
    const snap = (n)=>Math.round(n * 30) / 30;
    if (edge === "left") {
        const change = snap(Math.max(-Math.min(track.start, track.trimStart), Math.min(track.duration - .1, delta)));
        return {
            ...track,
            start: Math.max(0, track.start + change),
            trimStart: Math.max(0, track.trimStart + change),
            duration: Math.max(.1, track.duration - change)
        };
    }
    const next = Math.max(.1, Math.min(movieDuration - track.start, track.duration + snap(delta)));
    return {
        ...track,
        duration: next
    };
}
function mixedAudioGain(track, tracks, time, mixer) {
    if (track.muted) return 0;
    const anySolo = tracks.some((t)=>t.solo && !t.muted);
    if (anySolo && !track.solo) return 0;
    const activeVoice = tracks.filter((t)=>t.kind === "voiceover" && !t.muted && (!anySolo || t.solo));
    let gain = 1;
    if (mixer.duckingEnabled && track.kind === "ambience") {
        for (const voice of activeVoice){
            const start = voice.start, end = voice.start + voice.duration;
            let influence = 0;
            if (time >= start && time <= end) influence = 1;
            else if (time < start && time >= start - mixer.attack) influence = (time - (start - mixer.attack)) / mixer.attack;
            else if (time > end && time <= end + mixer.release) influence = 1 - (time - end) / mixer.release;
            gain = Math.min(gain, 1 - influence * (1 - mixer.duckingLevel));
        }
    }
    return Math.max(0, Math.min(4, track.volume * mixer.masterVolume * gain));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/studio/app/audio-waveform-clip.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AudioWaveformClip",
    ()=>AudioWaveformClip
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.7_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.7_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$audio$2d$editing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/audio-editing.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$trim$2d$geometry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/trim-geometry.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function AudioWaveformClip({ track, recording, movieDuration, scaleDuration, onMove, onTrim, onSelect }) {
    _s();
    const [peaks, setPeaks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const gesture = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AudioWaveformClip.useEffect": ()=>{
            let cancelled = false;
            const controller = new AbortController();
            let ctx = null;
            ({
                "AudioWaveformClip.useEffect": async ()=>{
                    try {
                        const response = await fetch("/api/media/" + encodeURIComponent(recording) + "/" + encodeURIComponent(track.file), {
                            signal: controller.signal
                        });
                        if (!response.ok) throw Error("Audio unavailable");
                        const data = await response.arrayBuffer();
                        if (cancelled) return;
                        ctx = new AudioContext();
                        const decoded = await ctx.decodeAudioData(data);
                        if (!cancelled) setPeaks((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$audio$2d$editing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["waveformPeaks"])(decoded.getChannelData(0), 100));
                    } catch  {
                        if (!cancelled) setPeaks([]);
                    } finally{
                        if (ctx) void ctx.close();
                    }
                }
            })["AudioWaveformClip.useEffect"]();
            return ({
                "AudioWaveformClip.useEffect": ()=>{
                    cancelled = true;
                    controller.abort();
                    if (ctx) void ctx.close();
                }
            })["AudioWaveformClip.useEffect"];
        }
    }["AudioWaveformClip.useEffect"], [
        recording,
        track.file
    ]);
    function begin(e, kind) {
        e.preventDefault();
        e.stopPropagation();
        onSelect();
        const trackWidth = e.currentTarget.closest(".track")?.getBoundingClientRect().width || 1;
        gesture.current = {
            kind,
            x: e.clientX,
            initial: track,
            trackWidth
        };
        e.currentTarget.setPointerCapture(e.pointerId);
    }
    function update(e) {
        const g = gesture.current;
        if (!g) return;
        const delta = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$trim$2d$geometry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pointerDeltaSeconds"])(e.clientX - g.x, g.trackWidth, scaleDuration);
        if (g.kind === "move") onMove((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$audio$2d$editing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clampAudioStart"])(g.initial.start + delta, movieDuration, g.initial.duration));
        else onTrim((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$audio$2d$editing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trimAudioEdge"])(g.initial, g.kind, delta, movieDuration));
    }
    function end(e) {
        update(e);
        gesture.current = null;
    }
    const safeDuration = Math.max(.001, scaleDuration);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "clip audio-clip waveform-clip",
        style: {
            left: track.start / safeDuration * 100 + "%",
            width: Math.max(0, Math.min(track.duration, Math.max(0, movieDuration - track.start))) / safeDuration * 100 + "%",
            right: "auto"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "waveform-main",
                "aria-label": "Déplacer " + track.name,
                onClick: onSelect,
                onPointerDown: (e)=>begin(e, "move"),
                onPointerMove: update,
                onPointerUp: end,
                onPointerCancel: ()=>{
                    gesture.current = null;
                },
                children: [
                    peaks.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        viewBox: "0 0 100 28",
                        preserveAspectRatio: "none",
                        "aria-hidden": "true",
                        children: peaks.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: i + .5,
                                x2: i + .5,
                                y1: 14 - p * 12,
                                y2: 14 + p * 12,
                                stroke: "currentColor",
                                strokeWidth: ".7",
                                opacity: ".8"
                            }, i, false, {
                                fileName: "[project]/apps/studio/app/audio-waveform-clip.tsx",
                                lineNumber: 39,
                                columnNumber: 108
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/apps/studio/app/audio-waveform-clip.tsx",
                        lineNumber: 39,
                        columnNumber: 18
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "waveform-fallback",
                        children: "♫"
                    }, void 0, false, {
                        fileName: "[project]/apps/studio/app/audio-waveform-clip.tsx",
                        lineNumber: 39,
                        columnNumber: 230
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "waveform-title",
                        children: track.name
                    }, void 0, false, {
                        fileName: "[project]/apps/studio/app/audio-waveform-clip.tsx",
                        lineNumber: 40,
                        columnNumber: 4
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/studio/app/audio-waveform-clip.tsx",
                lineNumber: 38,
                columnNumber: 3
            }, this),
            [
                "left",
                "right"
            ].map((edge)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    role: "slider",
                    tabIndex: 0,
                    "aria-label": edge === "left" ? "Raccourcir le début de " + track.name : "Raccourcir la fin de " + track.name,
                    "aria-valuemin": 0,
                    "aria-valuemax": movieDuration,
                    "aria-valuenow": edge === "left" ? track.start : track.start + track.duration,
                    className: "audio-trim-handle " + edge,
                    onPointerDown: (e)=>begin(e, edge),
                    onPointerMove: update,
                    onPointerUp: end,
                    onPointerCancel: ()=>{
                        gesture.current = null;
                    },
                    onKeyDown: (e)=>{
                        if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
                        e.preventDefault();
                        e.stopPropagation();
                        onTrim((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$audio$2d$editing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trimAudioEdge"])(track, edge, (e.key === "ArrowRight" ? 1 : -1) / 30, movieDuration));
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "audio-trim-grip",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/apps/studio/app/audio-waveform-clip.tsx",
                        lineNumber: 42,
                        columnNumber: 645
                    }, this)
                }, edge, false, {
                    fileName: "[project]/apps/studio/app/audio-waveform-clip.tsx",
                    lineNumber: 42,
                    columnNumber: 42
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/studio/app/audio-waveform-clip.tsx",
        lineNumber: 37,
        columnNumber: 9
    }, this);
}
_s(AudioWaveformClip, "Be9rXMQFOZTZEi1gfs1KtMBzqjI=");
_c = AudioWaveformClip;
var _c;
__turbopack_context__.k.register(_c, "AudioWaveformClip");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/studio/components/arc/tabs/tabs.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "content": "tabs-module__QNaJCG__content",
  "list": "tabs-module__QNaJCG__list",
  "listShell": "tabs-module__QNaJCG__listShell",
  "root": "tabs-module__QNaJCG__root",
  "scrollButton": "tabs-module__QNaJCG__scrollButton",
  "scrollLeft": "tabs-module__QNaJCG__scrollLeft",
  "scrollRight": "tabs-module__QNaJCG__scrollRight",
  "selection": "tabs-module__QNaJCG__selection",
  "trigger": "tabs-module__QNaJCG__trigger",
  "triggerLabel": "tabs-module__QNaJCG__triggerLabel",
  "viewport": "tabs-module__QNaJCG__viewport",
});
}),
"[project]/apps/studio/components/arc/tabs/tabs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tabs",
    ()=>Tabs,
    "TabsContent",
    ()=>TabsContent,
    "TabsList",
    ()=>TabsList,
    "TabsTrigger",
    ()=>TabsTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.7_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.7_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$tabs$40$1$2e$2$2e$1_$40$types$2b$react$40$19$2e$3$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@radix-ui+react-tabs@1.2.1_@types+react@19.3.0_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/@radix-ui/react-tabs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.468.0_react@19.3.0/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.468.0_react@19.3.0/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/framer-motion@12.43.0_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$LayoutGroup$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/framer-motion@12.43.0_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/framer-motion/dist/es/components/LayoutGroup/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/framer-motion@12.43.0_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/framer-motion/dist/es/animation/animate/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion@12.43.0_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/framer-motion@12.43.0_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$lib$2f$motion$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/studio/lib/motion-tokens.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$tabs$2f$tabs$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/apps/studio/components/arc/tabs/tabs.module.css [app-client] (css module)");
;
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
/** `direction` is +1 when the new tab sits after the old one; `panelHeightRef` holds the visible panel height so the next panel can morph from it; `leavingRectRef` pins the outgoing panel where it was on screen. */ const TabsContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    active: "",
    layoutId: "tabs",
    direction: 1,
    panelHeightRef: {
        current: null
    },
    leavingRectRef: {
        current: null
    }
});
function Tabs({ value, defaultValue, onValueChange, className, ...props }) {
    _s();
    const [internal, setInternal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultValue ?? "");
    const [direction, setDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const active = value ?? internal;
    const layoutId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const panelHeightRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const leavingRectRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    function handleChange(next) {
        const frame = root.current;
        leavingRectRef.current = frame?.querySelector(':scope > [role="tabpanel"][data-state="active"]')?.getBoundingClientRect() ?? null;
        const order = frame ? Array.from(frame.querySelectorAll('[role="tab"][data-value]')).filter((tab)=>tab.closest(`.${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$tabs$2f$tabs$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].root}`) === frame).map((tab)=>tab.dataset.value) : [];
        const from = order.indexOf(active), to = order.indexOf(next);
        if (from >= 0 && to >= 0 && from !== to) setDirection(to > from ? 1 : -1);
        if (value === undefined) setInternal(next);
        onValueChange?.(next);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TabsContext.Provider, {
        value: {
            active,
            layoutId,
            direction,
            panelHeightRef,
            leavingRectRef
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$LayoutGroup$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LayoutGroup"], {
            id: layoutId,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$tabs$40$1$2e$2$2e$1_$40$types$2b$react$40$19$2e$3$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
                ...props,
                ref: root,
                className: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$tabs$2f$tabs$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].root,
                    className
                ].filter(Boolean).join(" "),
                value: active,
                onValueChange: handleChange
            }, void 0, false, {
                fileName: "[project]/apps/studio/components/arc/tabs/tabs.tsx",
                lineNumber: 32,
                columnNumber: 131
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/studio/components/arc/tabs/tabs.tsx",
            lineNumber: 32,
            columnNumber: 104
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/studio/components/arc/tabs/tabs.tsx",
        lineNumber: 32,
        columnNumber: 10
    }, this);
}
_s(Tabs, "egx2n9DLy2DKmY+y8fl9teugIkk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c = Tabs;
function TabsList({ className, ...props }) {
    _s1();
    const { active } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(TabsContext);
    const reduced = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const shell = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const viewport = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const list = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [edges, setEdges] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        overflow: false,
        left: false,
        right: false
    });
    const update = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TabsList.useCallback[update]": ()=>{
            const frame = shell.current;
            const scroll = viewport.current;
            if (!frame || !scroll) return;
            const max = Math.max(0, scroll.scrollWidth - scroll.clientWidth);
            const next = {
                overflow: scroll.scrollWidth > frame.clientWidth + 1,
                left: scroll.scrollLeft > 1,
                right: scroll.scrollLeft < max - 1
            };
            setEdges({
                "TabsList.useCallback[update]": (previous)=>previous.overflow === next.overflow && previous.left === next.left && previous.right === next.right ? previous : next
            }["TabsList.useCallback[update]"]);
        }
    }["TabsList.useCallback[update]"], []);
    const reveal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TabsList.useCallback[reveal]": (tab)=>{
            const scroll = viewport.current;
            if (!scroll || !tab) return;
            const frame = scroll.getBoundingClientRect();
            const item = tab.getBoundingClientRect();
            const max = Math.max(0, scroll.scrollWidth - scroll.clientWidth);
            const left = frame.left + (scroll.scrollLeft > 1 ? 34 : 0);
            const right = frame.right - (scroll.scrollLeft < max - 1 ? 34 : 0);
            const delta = item.left < left ? item.left - left : item.right > right ? item.right - right : 0;
            if (delta) scroll.scrollBy({
                left: delta,
                behavior: reduced ? "instant" : "smooth"
            });
        }
    }["TabsList.useCallback[reveal]"], [
        reduced
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "TabsList.useLayoutEffect": ()=>{
            const frame = shell.current;
            const scroll = viewport.current;
            const content = list.current;
            if (!frame || !scroll || !content) return;
            const observer = new ResizeObserver(update);
            observer.observe(frame);
            observer.observe(scroll);
            observer.observe(content);
            scroll.addEventListener("scroll", update, {
                passive: true
            });
            update();
            return ({
                "TabsList.useLayoutEffect": ()=>{
                    observer.disconnect();
                    scroll.removeEventListener("scroll", update);
                }
            })["TabsList.useLayoutEffect"];
        }
    }["TabsList.useLayoutEffect"], [
        update
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "TabsList.useLayoutEffect": ()=>{
            reveal(list.current?.querySelector('[role="tab"][data-state="active"]') ?? null);
        }
    }["TabsList.useLayoutEffect"], [
        active,
        reveal
    ]);
    const scrollTabs = (direction)=>viewport.current?.scrollBy({
            left: direction * (viewport.current?.clientWidth ?? 0) * .75,
            behavior: reduced ? "instant" : "smooth"
        });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: shell,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$tabs$2f$tabs$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].listShell,
        "data-overflow": edges.overflow,
        "data-left": edges.left,
        "data-right": edges.right,
        children: [
            edges.overflow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$tabs$2f$tabs$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].scrollButton} ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$tabs$2f$tabs$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].scrollLeft}`,
                "aria-label": "Scroll tabs left",
                disabled: !edges.left,
                onClick: ()=>scrollTabs(-1),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                    width: 17,
                    height: 17,
                    "aria-hidden": "true"
                }, void 0, false, {
                    fileName: "[project]/apps/studio/components/arc/tabs/tabs.tsx",
                    lineNumber: 77,
                    columnNumber: 188
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/studio/components/arc/tabs/tabs.tsx",
                lineNumber: 77,
                columnNumber: 24
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
                ref: viewport,
                layoutScroll: true,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$tabs$2f$tabs$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].viewport,
                onFocusCapture: (event)=>{
                    if (event.target instanceof HTMLElement && event.target.getAttribute("role") === "tab") reveal(event.target);
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$tabs$40$1$2e$2$2e$1_$40$types$2b$react$40$19$2e$3$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["List"], {
                    ...props,
                    ref: list,
                    className: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$tabs$2f$tabs$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].list,
                        className
                    ].filter(Boolean).join(" ")
                }, void 0, false, {
                    fileName: "[project]/apps/studio/components/arc/tabs/tabs.tsx",
                    lineNumber: 79,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/studio/components/arc/tabs/tabs.tsx",
                lineNumber: 78,
                columnNumber: 5
            }, this),
            edges.overflow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$tabs$2f$tabs$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].scrollButton} ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$tabs$2f$tabs$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].scrollRight}`,
                "aria-label": "Scroll tabs right",
                disabled: !edges.right,
                onClick: ()=>scrollTabs(1),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                    width: 17,
                    height: 17,
                    "aria-hidden": "true"
                }, void 0, false, {
                    fileName: "[project]/apps/studio/components/arc/tabs/tabs.tsx",
                    lineNumber: 81,
                    columnNumber: 190
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/studio/components/arc/tabs/tabs.tsx",
                lineNumber: 81,
                columnNumber: 24
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/studio/components/arc/tabs/tabs.tsx",
        lineNumber: 76,
        columnNumber: 10
    }, this);
}
_s1(TabsList, "RnP/zjTAAbgBgDvj2mT5uPdydpY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c1 = TabsList;
function TabsTrigger({ className, children, value, ...props }) {
    _s2();
    const { active } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(TabsContext);
    const reduced = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    // The LayoutGroup in Tabs scopes the highlight to this instance, so it glides between triggers but never flies in from another tab set.
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$tabs$40$1$2e$2$2e$1_$40$types$2b$react$40$19$2e$3$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        ...props,
        value: value,
        "data-value": value,
        className: [
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$tabs$2f$tabs$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].trigger,
            className
        ].filter(Boolean).join(" "),
        children: [
            active === value && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].span, {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$tabs$2f$tabs$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].selection,
                layoutId: "selection",
                layoutDependency: active,
                transition: reduced ? {
                    duration: 0
                } : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$lib$2f$motion$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionTokens"].spring.morph,
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/apps/studio/components/arc/tabs/tabs.tsx",
                lineNumber: 90,
                columnNumber: 26
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$tabs$2f$tabs$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].triggerLabel,
                children: children
            }, void 0, false, {
                fileName: "[project]/apps/studio/components/arc/tabs/tabs.tsx",
                lineNumber: 91,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/studio/components/arc/tabs/tabs.tsx",
        lineNumber: 89,
        columnNumber: 10
    }, this);
}
_s2(TabsTrigger, "b3e5mVwWDeUJi1Ss7s7KRwXd6nw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c2 = TabsTrigger;
const panelMotion = {
    enter: (direction)=>({
            opacity: 0,
            x: direction * 8
        }),
    center: {
        opacity: 1,
        x: 0,
        transition: {
            opacity: {
                duration: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$lib$2f$motion$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionTokens"].duration.standard,
                ease: [
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$lib$2f$motion$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionTokens"].ease.enter
                ]
            },
            x: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$lib$2f$motion$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionTokens"].spring.smooth
        }
    },
    exit: (direction)=>({
            opacity: 0,
            x: direction * -6,
            transition: {
                duration: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$lib$2f$motion$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionTokens"].duration.instant,
                ease: [
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$lib$2f$motion$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionTokens"].ease.standard
                ]
            }
        })
};
/** Reduced motion: a short crossfade in place. Keys match panelMotion so server and client render identical styles. */ const panelFade = {
    enter: {
        opacity: 0,
        x: 0
    },
    center: {
        opacity: 1,
        x: 0,
        transition: {
            duration: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$lib$2f$motion$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionTokens"].duration.instant
        }
    },
    exit: {
        opacity: 0,
        x: 0,
        transition: {
            duration: .1
        }
    }
};
function TabsContent({ className, value, forceMount, children, ...props }) {
    _s3();
    const { active, direction, panelHeightRef, leavingRectRef } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(TabsContext);
    const reduced = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const panel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const selected = active === value;
    const classes = [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$tabs$2f$tabs$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
        className
    ].filter(Boolean).join(" ");
    // The incoming panel starts at the outgoing panel's height and settles at its own, so content below glides instead of jumping.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "TabsContent.useLayoutEffect": ()=>{
            const node = panel.current;
            if (!node || forceMount) return;
            // Outgoing: the tab root may have changed size around it, so pin the panel to where it was while it fades.
            if (!selected) {
                const before = leavingRectRef.current;
                const now = node.getBoundingClientRect();
                if (before) node.style.translate = `${before.left - now.left}px ${before.top - now.top}px`;
                node.inert = true;
                return;
            }
            node.style.translate = "";
            node.inert = false;
            const from = panelHeightRef.current;
            const to = node.offsetHeight;
            let controls;
            const release = {
                "TabsContent.useLayoutEffect.release": ()=>{
                    node.style.height = "";
                    node.style.overflow = "";
                }
            }["TabsContent.useLayoutEffect.release"];
            if (from !== null && Math.abs(from - to) > 1 && !reduced) {
                if (to > from) node.style.overflow = "clip";
                controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animate"])(node, {
                    height: [
                        from,
                        to
                    ]
                }, {
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$lib$2f$motion$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionTokens"].spring.smooth,
                    onComplete: release
                });
            }
            panelHeightRef.current = controls && from !== null ? from : to;
            const observer = new ResizeObserver({
                "TabsContent.useLayoutEffect": ()=>{
                    panelHeightRef.current = node.offsetHeight;
                }
            }["TabsContent.useLayoutEffect"]);
            observer.observe(node);
            return ({
                "TabsContent.useLayoutEffect": ()=>{
                    observer.disconnect();
                    controls?.stop();
                    release();
                }
            })["TabsContent.useLayoutEffect"];
        }
    }["TabsContent.useLayoutEffect"], [
        selected,
        reduced,
        forceMount,
        panelHeightRef,
        leavingRectRef
    ]);
    if (forceMount) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$tabs$40$1$2e$2$2e$1_$40$types$2b$react$40$19$2e$3$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
        ...props,
        value: value,
        forceMount: true,
        className: classes,
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/studio/components/arc/tabs/tabs.tsx",
        lineNumber: 133,
        columnNumber: 26
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        initial: false,
        mode: "popLayout",
        custom: direction,
        children: selected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$tabs$40$1$2e$2$2e$1_$40$types$2b$react$40$19$2e$3$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            ...props,
            key: value,
            value: value,
            forceMount: true,
            asChild: true,
            __source: {
                fileName: "[project]/apps/studio/components/arc/tabs/tabs.tsx",
                lineNumber: 135,
                columnNumber: 18
            },
            __self: this
        }, /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
            ref: panel,
            className: classes,
            custom: direction,
            variants: reduced ? panelFade : panelMotion,
            initial: "enter",
            animate: "center",
            exit: "exit",
            children: children
        }, void 0, false, {
            fileName: "[project]/apps/studio/components/arc/tabs/tabs.tsx",
            lineNumber: 136,
            columnNumber: 7
        }, this))
    }, void 0, false, {
        fileName: "[project]/apps/studio/components/arc/tabs/tabs.tsx",
        lineNumber: 134,
        columnNumber: 10
    }, this);
}
_s3(TabsContent, "vljn92chPfpSXmauPGnqkpBD4HU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c3 = TabsContent;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Tabs");
__turbopack_context__.k.register(_c1, "TabsList");
__turbopack_context__.k.register(_c2, "TabsTrigger");
__turbopack_context__.k.register(_c3, "TabsContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/studio/components/arc/select/select.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "chevron": "select-module__aXDxJa__chevron",
  "content": "select-module__aXDxJa__content",
  "field": "select-module__aXDxJa__field",
  "hint": "select-module__aXDxJa__hint",
  "indicator": "select-module__aXDxJa__indicator",
  "indicator-in": "select-module__aXDxJa__indicator-in",
  "item": "select-module__aXDxJa__item",
  "scrollButton": "select-module__aXDxJa__scrollButton",
  "select-fade": "select-module__aXDxJa__select-fade",
  "select-fade-out": "select-module__aXDxJa__select-fade-out",
  "select-in": "select-module__aXDxJa__select-in",
  "select-out": "select-module__aXDxJa__select-out",
  "srOnly": "select-module__aXDxJa__srOnly",
  "trigger": "select-module__aXDxJa__trigger",
  "valueText": "select-module__aXDxJa__valueText",
  "viewport": "select-module__aXDxJa__viewport",
});
}),
"[project]/apps/studio/components/arc/select/select.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Select",
    ()=>Select
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.7_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.7_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$select$40$2$2e$3$2e$7_$40$types$2b$react$40$19$2e$3$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@radix-ui+react-select@2.3.7_@types+react@19.3.0_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/@radix-ui/react-select/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/framer-motion@12.43.0_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion@12.43.0_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/framer-motion@12.43.0_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.468.0_react@19.3.0/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.468.0_react@19.3.0/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.468.0_react@19.3.0/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$lib$2f$motion$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/studio/lib/motion-tokens.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$select$2f$select$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/apps/studio/components/arc/select/select.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
/** The shown value rolls in the direction of the list: a later option rises from below, an earlier one drops from above. */ const valueRoll = {
    enter: (direction)=>({
            opacity: 0,
            y: `${direction * 0.35}em`,
            filter: `blur(${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$lib$2f$motion$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionTokens"].blur.soft}px)`
        }),
    center: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$lib$2f$motion$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionTokens"].duration.standard,
            ease: [
                ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$lib$2f$motion$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionTokens"].ease.enter
            ]
        }
    },
    exit: (direction)=>({
            opacity: 0,
            y: `${direction * -0.3}em`,
            filter: `blur(${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$lib$2f$motion$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionTokens"].blur.subtle}px)`,
            transition: {
                duration: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$lib$2f$motion$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionTokens"].duration.fast,
                ease: [
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$lib$2f$motion$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionTokens"].ease.standard
                ]
            }
        })
};
/** Reduced motion keeps a short crossfade; the resting state matches valueRoll so server and client markup agree. */ const valueFade = {
    enter: {
        opacity: 0
    },
    center: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$lib$2f$motion$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionTokens"].duration.instant
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$lib$2f$motion$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionTokens"].duration.instant
        }
    }
};
const Select = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = _s(function Select({ label, description, placeholder = "Select an option", options, id, className, disabled, onValueChange, ...rootProps }, ref) {
    _s();
    const generatedId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const controlId = id ?? generatedId;
    const hintId = description ? `${controlId}-description` : undefined;
    const reduceMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const [uncontrolledValue, setUncontrolledValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(rootProps.defaultValue ?? "");
    const currentValue = rootProps.value ?? uncontrolledValue;
    const index = options.findIndex((option)=>option.value === currentValue);
    const shown = currentValue ? options[index]?.label ?? "" : placeholder;
    const [previousIndex, setPreviousIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(index);
    const [direction, setDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    if (previousIndex !== index) {
        setPreviousIndex(index);
        setDirection(index > previousIndex ? 1 : -1);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$select$2f$select$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: controlId,
                children: label
            }, void 0, false, {
                fileName: "[project]/apps/studio/components/arc/select/select.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$select$40$2$2e$3$2e$7_$40$types$2b$react$40$19$2e$3$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
                ...rootProps,
                disabled: disabled,
                onValueChange: (next)=>{
                    setUncontrolledValue(next);
                    onValueChange?.(next);
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$select$40$2$2e$3$2e$7_$40$types$2b$react$40$19$2e$3$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
                        ref: ref,
                        id: controlId,
                        "aria-describedby": hintId,
                        className: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$select$2f$select$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].trigger,
                            className
                        ].filter(Boolean).join(" "),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$select$2f$select$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].srOnly,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$select$40$2$2e$3$2e$7_$40$types$2b$react$40$19$2e$3$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Value"], {
                                    placeholder: placeholder
                                }, void 0, false, {
                                    fileName: "[project]/apps/studio/components/arc/select/select.tsx",
                                    lineNumber: 57,
                                    columnNumber: 43
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/studio/components/arc/select/select.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$select$2f$select$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].valueText,
                                "aria-hidden": "true",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                    initial: false,
                                    custom: direction,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].span, {
                                        "data-placeholder": currentValue ? undefined : "",
                                        custom: direction,
                                        variants: reduceMotion ? valueFade : valueRoll,
                                        initial: "enter",
                                        animate: "center",
                                        exit: "exit",
                                        children: shown
                                    }, currentValue ? `value-${currentValue}` : "placeholder", false, {
                                        fileName: "[project]/apps/studio/components/arc/select/select.tsx",
                                        lineNumber: 60,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/studio/components/arc/select/select.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/studio/components/arc/select/select.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$select$40$2$2e$3$2e$7_$40$types$2b$react$40$19$2e$3$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$select$2f$select$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chevron,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                    size: 16,
                                    strokeWidth: 1.75,
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/apps/studio/components/arc/select/select.tsx",
                                    lineNumber: 64,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/studio/components/arc/select/select.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/studio/components/arc/select/select.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$select$40$2$2e$3$2e$7_$40$types$2b$react$40$19$2e$3$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$select$40$2$2e$3$2e$7_$40$types$2b$react$40$19$2e$3$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$select$2f$select$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
                            position: "popper",
                            sideOffset: 4,
                            collisionPadding: 12,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$select$40$2$2e$3$2e$7_$40$types$2b$react$40$19$2e$3$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollUpButton"], {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$select$2f$select$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].scrollButton,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                        size: 16,
                                        strokeWidth: 1.75,
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/studio/components/arc/select/select.tsx",
                                        lineNumber: 70,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/studio/components/arc/select/select.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$select$40$2$2e$3$2e$7_$40$types$2b$react$40$19$2e$3$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"], {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$select$2f$select$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].viewport,
                                    children: options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$select$40$2$2e$3$2e$7_$40$types$2b$react$40$19$2e$3$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
                                            value: option.value,
                                            disabled: option.disabled,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$select$2f$select$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].item,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$select$40$2$2e$3$2e$7_$40$types$2b$react$40$19$2e$3$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemText"], {
                                                    children: option.label
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/studio/components/arc/select/select.tsx",
                                                    lineNumber: 75,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$select$40$2$2e$3$2e$7_$40$types$2b$react$40$19$2e$3$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$select$2f$select$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].indicator,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                        size: 16,
                                                        strokeWidth: 1.75,
                                                        "aria-hidden": "true"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/studio/components/arc/select/select.tsx",
                                                        lineNumber: 77,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/studio/components/arc/select/select.tsx",
                                                    lineNumber: 76,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, option.value, true, {
                                            fileName: "[project]/apps/studio/components/arc/select/select.tsx",
                                            lineNumber: 74,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/apps/studio/components/arc/select/select.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$select$40$2$2e$3$2e$7_$40$types$2b$react$40$19$2e$3$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollDownButton"], {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$select$2f$select$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].scrollButton,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                        size: 16,
                                        strokeWidth: 1.75,
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/studio/components/arc/select/select.tsx",
                                        lineNumber: 83,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/studio/components/arc/select/select.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/studio/components/arc/select/select.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/studio/components/arc/select/select.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/studio/components/arc/select/select.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                id: hintId,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$select$2f$select$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hint,
                children: description
            }, void 0, false, {
                fileName: "[project]/apps/studio/components/arc/select/select.tsx",
                lineNumber: 88,
                columnNumber: 23
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/studio/components/arc/select/select.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}, "ZTMRKjwZ8uk1etra2OqmI00YD7I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
})), "ZTMRKjwZ8uk1etra2OqmI00YD7I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c1 = Select;
var _c, _c1;
__turbopack_context__.k.register(_c, "Select$forwardRef");
__turbopack_context__.k.register(_c1, "Select");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/studio/components/arc/resizable-panels/resizable-panels.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "content": "resizable-panels-module__pcaq3G__content",
  "grip": "resizable-panels-module__pcaq3G__grip",
  "group": "resizable-panels-module__pcaq3G__group",
  "handle": "resizable-panels-module__pcaq3G__handle",
  "panel": "resizable-panels-module__pcaq3G__panel",
  "restore": "resizable-panels-module__pcaq3G__restore",
});
}),
"[project]/apps/studio/components/arc/resizable-panels/resizable-panels.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ResizablePanel",
    ()=>ResizablePanel,
    "ResizablePanels",
    ()=>ResizablePanels,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.7_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.7_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/framer-motion@12.43.0_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/framer-motion@12.43.0_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/framer-motion/dist/es/animation/animate/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion@12.43.0_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/motion/dist/es/react.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$43$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/motion-dom@12.43.0/node_modules/motion-dom/dist/es/value/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/framer-motion@12.43.0_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/framer-motion@12.43.0_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.468.0_react@19.3.0/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.468.0_react@19.3.0/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$lib$2f$motion$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/studio/lib/motion-tokens.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$resizable$2d$panels$2f$resizable$2d$panels$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/apps/studio/components/arc/resizable-panels/resizable-panels.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const DEFAULT_MIN = 80;
/** How far in px a pane can be pulled past a limit before it stops giving. */ const STRETCH = 44;
/** Keyboard steps in px; Shift takes the larger one. */ const STEP = 16, BIG_STEP = 64;
const clamp = (value, min, max)=>Math.min(max, Math.max(min, value));
/** Past a limit every pixel costs more, like pulling against elastic. */ const rubber = (overshoot)=>overshoot * STRETCH * .55 / (STRETCH + .55 * overshoot);
const band = (value, lo, hi)=>value < lo ? lo - rubber(lo - value) : value > hi ? hi + rubber(value - hi) : value;
/** A collapsible pane snaps closed once the pointer is this far below its minimum. */ const collapseAt = (min)=>min - Math.max(min * .5, 40);
/** Short momentum projection, used only to decide whether a flick collapses or restores a pane. */ const project = (velocity, rate = .99)=>velocity / 1000 * rate / (1 - rate);
const toShares = (values)=>{
    const total = values.reduce((sum, value)=>sum + value, 0) || 1;
    return values.map((value)=>value / total * 100);
};
const tabIn = {
    opacity: 0,
    scale: .6,
    filter: `blur(${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$lib$2f$motion$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionTokens"].blur.subtle}px)`
};
const tabRest = {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)"
};
const tabOut = {
    ...tabIn,
    transition: {
        duration: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$lib$2f$motion$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionTokens"].duration.fast,
        ease: [
            ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$lib$2f$motion$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionTokens"].ease.standard
        ]
    }
};
const tabEnter = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$lib$2f$motion$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionTokens"].spring.snappy,
    opacity: {
        duration: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$lib$2f$motion$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionTokens"].duration.fast,
        ease: [
            ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$lib$2f$motion$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionTokens"].ease.enter
        ]
    },
    filter: {
        duration: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$lib$2f$motion$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionTokens"].duration.fast,
        ease: [
            ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$lib$2f$motion$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionTokens"].ease.enter
        ]
    }
};
function velocityOf(samples, now) {
    const recent = samples.filter(([time])=>now - time <= 90);
    const first = recent[0], last = recent[recent.length - 1];
    if (!first || !last || recent.length < 2 || now - last[0] > 50) return 0;
    const [firstTime, firstX] = first, [lastTime, lastX] = last;
    return lastTime > firstTime ? (lastX - firstX) / ((lastTime - firstTime) / 1000) : 0;
}
function ResizablePanel({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
_c = ResizablePanel;
function ResizablePanels({ label, children, onLayoutChange, className }) {
    _s();
    const configs = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].toArray(children).filter((child)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(child)).map((child)=>child.props);
    const count = configs.length;
    const reduced = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])() ?? false;
    const startsCollapsed = (config)=>Boolean(config.collapsible && config.defaultCollapsed);
    // Sizes are flex-grow factors: the default shares before the first interaction, then px. Flex keeps them proportional as the group resizes.
    const [sizes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "ResizablePanels.useState": ()=>configs.map({
                "ResizablePanels.useState": (config)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$43$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionValue"])(startsCollapsed(config) ? 0 : config.defaultSize)
            }["ResizablePanels.useState"])
    }["ResizablePanels.useState"]);
    const [fades] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "ResizablePanels.useState": ()=>configs.map({
                "ResizablePanels.useState": (config)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$2d$dom$40$12$2e$43$2e$0$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$value$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionValue"])(startsCollapsed(config) ? 0 : 1)
            }["ResizablePanels.useState"])
    }["ResizablePanels.useState"]);
    const [collapsed, setCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "ResizablePanels.useState": ()=>configs.map(startsCollapsed)
    }["ResizablePanels.useState"]);
    const [free, setFree] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "ResizablePanels.useState": ()=>configs.map({
                "ResizablePanels.useState": ()=>false
            }["ResizablePanels.useState"])
    }["ResizablePanels.useState"]);
    const [resizing, setResizing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [shares, setShares] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "ResizablePanels.useState": ()=>toShares(configs.map({
                "ResizablePanels.useState": (config)=>startsCollapsed(config) ? 0 : config.defaultSize
            }["ResizablePanels.useState"]))
    }["ResizablePanels.useState"]);
    const [available, setAvailable] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const groupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const panelRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const restoreSizes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(configs.map({
        "ResizablePanels.useRef[restoreSizes]": ()=>null
    }["ResizablePanels.useRef[restoreSizes]"]));
    const running = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const goals = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const stale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    const drag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // A group narrower than every minimum together scales the minimums down in proportion, the same floor the CSS applies,
    // so the panes fill the group instead of overflowing it and a press never re-lays them out.
    const minTotal = configs.reduce((sum, config)=>sum + (config.minSize ?? DEFAULT_MIN), 0);
    const minOf = (index)=>{
        const min = configs[index]?.minSize ?? DEFAULT_MIN;
        return available > 0 && available < minTotal ? min * available / minTotal : min;
    };
    const maxOf = (index)=>configs[index]?.maxSize ?? Infinity;
    // Content fades as a pane is squeezed below its minimum, so a collapsing pane dissolves rather than crushes.
    const minKey = configs.map((_, index)=>minOf(index)).join();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ResizablePanels.useEffect": ()=>{
            const mins = minKey.split(",").map(Number);
            const stops = sizes.map({
                "ResizablePanels.useEffect.stops": (size, index)=>size.on("change", {
                        "ResizablePanels.useEffect.stops": (value)=>fades[index]?.set(clamp(value / Math.max(1, mins[index] ?? DEFAULT_MIN), 0, 1))
                    }["ResizablePanels.useEffect.stops"])
            }["ResizablePanels.useEffect.stops"]);
            return ({
                "ResizablePanels.useEffect": ()=>stops.forEach({
                        "ResizablePanels.useEffect": (stop)=>stop()
                    }["ResizablePanels.useEffect"])
            })["ResizablePanels.useEffect"];
        }
    }["ResizablePanels.useEffect"], [
        sizes,
        fades,
        minKey
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ResizablePanels.useEffect": ()=>{
            const group = groupRef.current;
            if (!group || typeof ResizeObserver === "undefined") return;
            const observer = new ResizeObserver({
                "ResizablePanels.useEffect": ()=>{
                    stale.current = true;
                    setAvailable(panelRefs.current.reduce({
                        "ResizablePanels.useEffect": (sum, node)=>sum + (node?.getBoundingClientRect().width ?? 0)
                    }["ResizablePanels.useEffect"], 0));
                }
            }["ResizablePanels.useEffect"]);
            observer.observe(group);
            return ({
                "ResizablePanels.useEffect": ()=>observer.disconnect()
            })["ResizablePanels.useEffect"];
        }
    }["ResizablePanels.useEffect"], []);
    /** Starts an interaction: stops anything in flight and makes sure the sizes are the px widths on screen, so nothing moves. */ function begin(involved) {
        token.current += 1;
        running.current.forEach((controls)=>controls.stop());
        running.current = [];
        // Only a group resize (or the first interaction) can put the sizes out of step with the screen; otherwise they are the truth,
        // even before a jump has painted.
        if (stale.current) {
            stale.current = false;
            const widths = panelRefs.current.slice(0, count).map((node)=>node?.getBoundingClientRect().width ?? 0);
            if (widths.some((width, index)=>Math.abs(width - sizes[index].get()) > .5)) widths.forEach((width, index)=>sizes[index].jump(width));
        }
        // Freed panes drop their CSS limits while JS owns them, so rubber-banding and collapsing can go past them.
        if (involved.some((index)=>!free[index])) setFree((current)=>current.map((value, index)=>value || involved.includes(index)));
        return sizes.map((size)=>size.get());
    }
    function commit() {
        const values = sizes.map((size)=>size.get());
        setFree(configs.map(()=>false));
        setShares(toShares(values));
        onLayoutChange?.(toShares(values));
    }
    /** Springs panes to new widths from wherever they are, keeping their velocity, then hands the limits back to CSS. */ function glide(targets, transition = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$lib$2f$motion$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionTokens"].spring.smooth) {
        const mine = token.current;
        const finals = targets.map((target, index)=>target ?? sizes[index].get());
        goals.current = finals;
        // Assistive technology hears the destination right away rather than after the spring's tail settles.
        setShares(toShares(finals));
        const moving = targets.flatMap((target, index)=>target === null || Math.abs(target - sizes[index].get()) < .01 ? [] : [
                [
                    index,
                    target
                ]
            ]);
        let pending = moving.length;
        const done = ()=>{
            if (token.current === mine) commit();
        };
        if (reduced || !pending) {
            moving.forEach(([index, target])=>sizes[index].jump(target));
            done();
            return;
        }
        running.current = moving.map(([index, target])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animate"])(sizes[index], target, {
                ...transition,
                onComplete: ()=>{
                    pending -= 1;
                    if (!pending) done();
                }
            }));
    }
    function limits(handle, a, b) {
        const pair = a + b;
        let lo = Math.max(minOf(handle), pair - maxOf(handle + 1)), hi = Math.min(maxOf(handle), pair - minOf(handle + 1));
        // A group too narrow for every minimum may already hold a pane below it; never yank it to the limit on grab.
        if (a > 0 && b > 0) {
            lo = Math.min(lo, a);
            hi = Math.max(hi, a);
        }
        if (lo > hi) lo = hi = clamp((lo + hi) / 2, 0, pair);
        return {
            pair,
            lo: clamp(lo, 0, pair),
            hi: clamp(hi, 0, pair)
        };
    }
    function resolve(handle, raw, pair, lo, hi) {
        if (configs[handle].collapsible && raw < collapseAt(minOf(handle))) return {
            mode: "before",
            size: 0
        };
        if (configs[handle + 1].collapsible && pair - raw < collapseAt(minOf(handle + 1))) return {
            mode: "after",
            size: pair
        };
        return {
            mode: "open",
            size: band(raw, lo, hi)
        };
    }
    function setCollapsedPair(handle, mode) {
        setCollapsed((current)=>current.map((value, index)=>index === handle ? mode === "before" : index === handle + 1 ? mode === "after" : value));
    }
    function remember(handle, a, b, mode) {
        if (mode === "before" && a > 0) restoreSizes.current[handle] = a;
        if (mode === "after" && b > 0) restoreSizes.current[handle + 1] = b;
    }
    function modeOf(handle) {
        return collapsed[handle] ? "before" : collapsed[handle + 1] ? "after" : "open";
    }
    /** Sets a pane pair to a new boundary. Any change of collapse state springs; everything else moves with the pointer. */ function moveBoundary(current, size) {
        const [a, b] = [
            sizes[current.handle],
            sizes[current.handle + 1]
        ];
        if (current.catching && !reduced) {
            if (Math.abs(a.get() - size) < .75) {
                current.catching = false;
                running.current.forEach((controls)=>controls.stop());
                running.current = [];
            } else {
                running.current = [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animate"])(a, size, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$lib$2f$motion$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionTokens"].spring.smooth),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animate$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animate"])(b, current.pair - size, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$lib$2f$motion$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionTokens"].spring.smooth)
                ];
                return;
            }
        }
        a.set(size);
        b.set(current.pair - size);
    }
    function onPointerDown(handle, event) {
        if (drag.current || event.pointerType === "mouse" && event.button !== 0) return;
        const values = begin([
            handle,
            handle + 1
        ]);
        const { pair, lo, hi } = limits(handle, values[handle], values[handle + 1]);
        event.currentTarget.setPointerCapture(event.pointerId);
        const mode = modeOf(handle);
        drag.current = {
            handle,
            pointer: event.pointerId,
            startX: event.clientX,
            a0: values[handle],
            b0: values[handle + 1],
            pair,
            lo,
            hi,
            mode,
            startMode: mode,
            moved: false,
            catching: false,
            samples: [
                [
                    event.timeStamp,
                    event.clientX
                ]
            ]
        };
    }
    function onPointerMove(event) {
        const current = drag.current;
        if (!current || current.pointer !== event.pointerId) return;
        const dx = event.clientX - current.startX;
        if (!current.moved) {
            if (Math.abs(dx) < 2) return;
            current.moved = true;
            setResizing(current.handle);
        }
        const next = resolve(current.handle, current.a0 + dx, current.pair, current.lo, current.hi);
        if (next.mode !== current.mode) {
            current.mode = next.mode;
            current.catching = true;
        }
        moveBoundary(current, next.size);
        current.samples.push([
            event.timeStamp,
            event.clientX
        ]);
        if (current.samples.length > 16) current.samples.shift();
    }
    function finish(event, cancelled) {
        const current = drag.current;
        if (!current || current.pointer !== event.pointerId) return;
        drag.current = null;
        setResizing(null);
        const { handle, pair, lo, hi } = current;
        if (!current.moved) {
            // A press on a divider that hides a pane brings it back.
            if (current.startMode !== "open" && !cancelled) restore(handle, current.startMode);
            else commit();
            return;
        }
        const raw = current.a0 + event.clientX - current.startX;
        const velocity = cancelled ? 0 : velocityOf(current.samples, event.timeStamp);
        const flung = resolve(handle, raw + project(velocity), pair, lo, hi);
        // A flick toward an edge collapses; a flick back out restores. Otherwise the divider stays where it was let go, inside its limits.
        const mode = cancelled ? current.startMode : flung.mode !== "open" ? flung.mode : "open";
        const size = mode === "before" ? 0 : mode === "after" ? pair : cancelled ? current.a0 : clamp(raw, lo, hi);
        remember(handle, current.a0, current.b0, mode);
        setCollapsedPair(handle, mode);
        glide(sizes.map((_, index)=>index === handle ? size : index === handle + 1 ? pair - size : null));
    }
    function restore(handle, side) {
        const values = begin([
            handle,
            handle + 1
        ]);
        const { pair, lo, hi } = limits(handle, values[handle], values[handle + 1]);
        const size = side === "before" ? clamp(restoreSizes.current[handle] ?? minOf(handle), lo, hi) : clamp(pair - (restoreSizes.current[handle + 1] ?? minOf(handle + 1)), lo, hi);
        setCollapsedPair(handle, "open");
        glide(sizes.map((_, index)=>index === handle ? size : index === handle + 1 ? pair - size : null));
    }
    function collapse(handle, side) {
        const values = begin([
            handle,
            handle + 1
        ]);
        const pair = values[handle] + values[handle + 1];
        remember(handle, values[handle], values[handle + 1], side);
        setCollapsedPair(handle, side);
        glide(sizes.map((_, index)=>index === handle ? side === "before" ? 0 : pair : index === handle + 1 ? side === "before" ? pair : 0 : null));
    }
    /** Resets to the default shares, fitted to the current width so every pane respects its limits. */ function reset() {
        const values = begin(configs.map((_, index)=>index));
        const total = values.reduce((sum, value)=>sum + value, 0);
        const wanted = configs.map((config)=>startsCollapsed(config) ? 0 : config.defaultSize);
        const targets = [
            ...wanted
        ];
        const frozen = wanted.map((value)=>value === 0);
        for(let pass = 0; pass < count; pass++){
            const fixed = targets.reduce((sum, value, index)=>frozen[index] ? sum + value : sum, 0);
            const share = wanted.reduce((sum, value, index)=>frozen[index] ? sum : sum + value, 0);
            let violated = false;
            targets.forEach((_, index)=>{
                if (frozen[index]) return;
                const size = share ? wanted[index] / share * (total - fixed) : 0;
                const bounded = clamp(size, minOf(index), maxOf(index));
                targets[index] = size;
                if (bounded !== size) {
                    targets[index] = bounded;
                    frozen[index] = true;
                    violated = true;
                }
            });
            if (!violated) break;
        }
        setCollapsed(configs.map(startsCollapsed));
        glide(targets);
    }
    function onKeyDown(handle, event) {
        const current = drag.current;
        if (event.key === "Escape" && current) {
            // Escape during a drag puts the divider back where it started.
            event.preventDefault();
            drag.current = null;
            setResizing(null);
            setCollapsedPair(handle, current.startMode);
            glide(sizes.map((_, index)=>index === handle ? current.a0 : index === handle + 1 ? current.b0 : null));
            return;
        }
        if (current || ![
            "ArrowLeft",
            "ArrowRight",
            "Home",
            "End",
            "Enter"
        ].includes(event.key)) return;
        event.preventDefault();
        const mode = modeOf(handle);
        const canCollapseBefore = Boolean(configs[handle].collapsible), canCollapseAfter = Boolean(configs[handle + 1].collapsible);
        if (event.key === "Enter") {
            if (mode !== "open") restore(handle, mode);
            else if (canCollapseBefore) collapse(handle, "before");
            else if (canCollapseAfter) collapse(handle, "after");
            return;
        }
        // Repeated presses build on where the divider is heading, not on where the spring happens to be this frame.
        const heading = goals.current && (sizes[handle].isAnimating() || sizes[handle + 1].isAnimating()) ? goals.current : null;
        const values = begin([
            handle,
            handle + 1
        ]);
        const pair = values[handle] + values[handle + 1];
        const a = heading ? clamp(heading[handle], 0, pair) : values[handle], step = event.shiftKey ? BIG_STEP : STEP;
        const { lo, hi } = limits(handle, a, pair - a);
        // Arrows walk out of a collapsed pane at its minimum, and past a limit into collapse when the pane allows it.
        if (event.key === "ArrowLeft" && mode === "after") return restoreTo(handle, hi, pair);
        if (event.key === "ArrowRight" && mode === "before") return restoreTo(handle, lo, pair);
        if (event.key === "ArrowLeft" && a <= lo + .5 && canCollapseBefore && mode === "open") return collapse(handle, "before");
        if (event.key === "ArrowRight" && a >= hi - .5 && canCollapseAfter && mode === "open") return collapse(handle, "after");
        if (mode !== "open") return;
        const size = event.key === "Home" ? lo : event.key === "End" ? hi : clamp(a + (event.key === "ArrowLeft" ? -step : step), lo, hi);
        glide(sizes.map((_, index)=>index === handle ? size : index === handle + 1 ? pair - size : null), event.key.startsWith("Arrow") ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$lib$2f$motion$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionTokens"].spring.snappy : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$lib$2f$motion$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionTokens"].spring.smooth);
    }
    function restoreTo(handle, size, pair) {
        setCollapsedPair(handle, "open");
        glide(sizes.map((_, index)=>index === handle ? size : index === handle + 1 ? pair - size : null));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: groupRef,
        className: [
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$resizable$2d$panels$2f$resizable$2d$panels$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].group,
            className
        ].filter(Boolean).join(" "),
        role: "group",
        "aria-label": label,
        "data-resizing": resizing !== null || undefined,
        children: configs.map((config, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    index > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Handle, {
                        before: configs[index - 1],
                        after: config,
                        share: shares[index - 1],
                        available: available,
                        limits: available ? limits(index - 1, shares[index - 1] / 100 * available, shares[index] / 100 * available) : null,
                        mode: collapsed[index - 1] ? "before" : collapsed[index] ? "after" : "open",
                        active: resizing === index - 1,
                        reduced: reduced,
                        onPointerDown: (event)=>onPointerDown(index - 1, event),
                        onPointerMove: onPointerMove,
                        onPointerUp: (event)=>finish(event, false),
                        onPointerCancel: (event)=>finish(event, true),
                        onKeyDown: (event)=>onKeyDown(index - 1, event),
                        onDoubleClick: reset
                    }, void 0, false, {
                        fileName: "[project]/apps/studio/components/arc/resizable-panels/resizable-panels.tsx",
                        lineNumber: 332,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Pane, {
                        config: config,
                        size: sizes[index],
                        fade: fades[index],
                        collapsed: collapsed[index],
                        free: free[index],
                        anchor: index === 0 && count > 1 ? "end" : "start",
                        minTotal: minTotal,
                        gaps: count - 1,
                        paneRef: (node)=>{
                            panelRefs.current[index] = node;
                        }
                    }, void 0, false, {
                        fileName: "[project]/apps/studio/components/arc/resizable-panels/resizable-panels.tsx",
                        lineNumber: 336,
                        columnNumber: 7
                    }, this)
                ]
            }, config.id, true, {
                fileName: "[project]/apps/studio/components/arc/resizable-panels/resizable-panels.tsx",
                lineNumber: 331,
                columnNumber: 37
            }, this))
    }, void 0, false, {
        fileName: "[project]/apps/studio/components/arc/resizable-panels/resizable-panels.tsx",
        lineNumber: 330,
        columnNumber: 10
    }, this);
}
_s(ResizablePanels, "7NoQQIFOTnZHsiXfWRW+r9m/Xbo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c1 = ResizablePanels;
function Pane({ config, size, fade, collapsed, free, anchor, minTotal, gaps, paneRef }) {
    _s1();
    const grow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(size, {
        "Pane.useTransform[grow]": (value)=>Math.max(0, value)
    }["Pane.useTransform[grow]"]);
    const min = config.minSize ?? DEFAULT_MIN;
    // The group is a size container: below the sum of the minimums, each floor becomes its share of the room between the dividers.
    const style = {
        flexGrow: grow,
        "--panel-min": `min(${min}px, (100cqw - ${gaps}px) * ${+(min / Math.max(1, minTotal)).toFixed(5)})`,
        "--panel-max": config.maxSize ? `${config.maxSize}px` : "none"
    };
    // The content stays anchored to the moving edge, so a closing pane slides away like a drawer instead of being crushed.
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
        ref: paneRef,
        id: config.id,
        className: [
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$resizable$2d$panels$2f$resizable$2d$panels$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panel,
            config.className
        ].filter(Boolean).join(" "),
        style: style,
        "data-collapsed": collapsed || undefined,
        "data-free": free || undefined,
        "data-anchor": anchor,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].div, {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$resizable$2d$panels$2f$resizable$2d$panels$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
            style: {
                opacity: fade
            },
            inert: collapsed,
            children: config.children
        }, void 0, false, {
            fileName: "[project]/apps/studio/components/arc/resizable-panels/resizable-panels.tsx",
            lineNumber: 348,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/studio/components/arc/resizable-panels/resizable-panels.tsx",
        lineNumber: 347,
        columnNumber: 10
    }, this);
}
_s1(Pane, "D4MRwRcnMyUSPSzLxc04a7DFq/Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c2 = Pane;
/** A one pixel divider with a wider grab area. It shows a grip while hovered or dragged, and a restore tab once a neighbouring pane is hidden. */ function Handle({ before, after, share, available, limits, mode, active, reduced, onPointerDown, onPointerMove, onPointerUp, onPointerCancel, onKeyDown, onDoubleClick }) {
    const now = Math.round(share);
    const min = limits && available ? Math.round(limits.lo / available * 100) : 0;
    const max = limits && available ? Math.round(limits.hi / available * 100) : 100;
    const hidden = mode === "before" ? before.label : mode === "after" ? after.label : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        role: "separator",
        tabIndex: 0,
        "aria-orientation": "vertical",
        "aria-controls": before.id,
        "aria-label": before.label,
        "aria-valuenow": now,
        "aria-valuemin": Math.min(min, now),
        "aria-valuemax": Math.max(max, now),
        "aria-valuetext": hidden ? `${hidden} hidden, press Enter to show` : `${now}%`,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$resizable$2d$panels$2f$resizable$2d$panels$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].handle,
        "data-collapsed": mode === "open" ? undefined : mode,
        "data-active": active || undefined,
        onPointerDown: onPointerDown,
        onPointerMove: onPointerMove,
        onPointerUp: onPointerUp,
        onPointerCancel: onPointerCancel,
        onKeyDown: onKeyDown,
        onDoubleClick: onDoubleClick,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$resizable$2d$panels$2f$resizable$2d$panels$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].grip,
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/apps/studio/components/arc/resizable-panels/resizable-panels.tsx",
                lineNumber: 367,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                initial: false,
                children: mode !== "open" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$motion$40$12$2e$43$2e$0_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$motion$2f$dist$2f$es$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["motion"].span, {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$resizable$2d$panels$2f$resizable$2d$panels$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].restore,
                    "data-side": mode,
                    "aria-hidden": "true",
                    initial: reduced ? {
                        opacity: 0
                    } : tabIn,
                    animate: tabRest,
                    exit: reduced ? {
                        opacity: 0,
                        transition: {
                            duration: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$lib$2f$motion$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionTokens"].duration.instant
                        }
                    } : tabOut,
                    transition: reduced ? {
                        duration: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$lib$2f$motion$2d$tokens$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motionTokens"].duration.instant
                    } : tabEnter,
                    children: mode === "before" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                        size: 14,
                        strokeWidth: 1.75
                    }, void 0, false, {
                        fileName: "[project]/apps/studio/components/arc/resizable-panels/resizable-panels.tsx",
                        lineNumber: 370,
                        columnNumber: 30
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                        size: 14,
                        strokeWidth: 1.75
                    }, void 0, false, {
                        fileName: "[project]/apps/studio/components/arc/resizable-panels/resizable-panels.tsx",
                        lineNumber: 370,
                        columnNumber: 78
                    }, this)
                }, mode, false, {
                    fileName: "[project]/apps/studio/components/arc/resizable-panels/resizable-panels.tsx",
                    lineNumber: 369,
                    columnNumber: 27
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/studio/components/arc/resizable-panels/resizable-panels.tsx",
                lineNumber: 368,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/studio/components/arc/resizable-panels/resizable-panels.tsx",
        lineNumber: 364,
        columnNumber: 10
    }, this);
}
_c3 = Handle;
const __TURBOPACK__default__export__ = ResizablePanels;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "ResizablePanel");
__turbopack_context__.k.register(_c1, "ResizablePanels");
__turbopack_context__.k.register(_c2, "Pane");
__turbopack_context__.k.register(_c3, "Handle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/cinematic-v2.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildCameraTrack",
    ()=>buildCameraTrack,
    "defaultCameraOptions",
    ()=>defaultCameraOptions,
    "easeCinematic",
    ()=>easeCinematic,
    "interpolateTrack",
    ()=>interpolateTrack,
    "smoothCursor",
    ()=>smoothCursor
]);
const defaultCameraOptions = {
    zoom: 1.48,
    lead: .32,
    hold: 1.15,
    release: .8,
    minGap: 1.9,
    maxZoom: 1.8
};
function easeCinematic(t) {
    const x = Math.max(0, Math.min(1, t));
    return x < .5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
}
function buildCameraTrack(events, duration, viewport, overrides = {}) {
    const o = {
        ...defaultCameraOptions,
        ...overrides
    }, end = Math.max(0, duration);
    const clicks = events.filter((e)=>e.type === "click" && Number.isFinite(e.t) && e.t >= 0 && e.t <= end && Number.isFinite(e.x) && Number.isFinite(e.y)).sort((a, b)=>a.t - b.t);
    const selected = [];
    for (const c of clicks){
        if (selected.length && c.t - selected[selected.length - 1].t < o.minGap) continue;
        selected.push(c);
    }
    const home = (t)=>({
            t,
            x: .5,
            y: .5,
            scale: 1
        });
    const keys = [
        home(0)
    ];
    let lastEnd = 0;
    for (const c of selected){
        const begin = Math.max(lastEnd, c.t - o.lead);
        const arrive = Math.max(begin + .01, c.t + .32);
        if (arrive >= end) break;
        const holdEnd = Math.min(end, arrive + o.hold);
        const releaseEnd = Math.min(end, holdEnd + o.release);
        const scale = Math.max(1, Math.min(o.maxZoom, o.zoom));
        const x = Math.max(.12, Math.min(.88, c.x / Math.max(1, viewport.width)));
        const y = Math.max(.12, Math.min(.88, c.y / Math.max(1, viewport.height)));
        // Never add duplicate-time keyframes; a hold at the exact end would overwrite the release.
        const candidates = [
            home(begin),
            {
                t: arrive,
                x,
                y,
                scale
            },
            {
                t: holdEnd,
                x,
                y,
                scale
            },
            home(releaseEnd)
        ];
        for (const key of candidates){
            if (key.t > keys[keys.length - 1].t + 1e-5) keys.push(key);
            else if (Math.abs(key.t - keys[keys.length - 1].t) < 1e-5) keys[keys.length - 1] = key;
        }
        lastEnd = releaseEnd;
    }
    if (end > keys[keys.length - 1].t + 1e-5) keys.push(home(end));
    return keys;
}
function interpolateTrack(keys, t) {
    if (!keys.length) return {
        t,
        x: .5,
        y: .5,
        scale: 1
    };
    if (t <= keys[0].t) return {
        ...keys[0],
        t
    };
    for(let i = 1; i < keys.length; i++){
        const a = keys[i - 1], b = keys[i];
        if (t <= b.t) {
            const k = easeCinematic((t - a.t) / Math.max(.0001, b.t - a.t));
            return {
                t,
                x: a.x + (b.x - a.x) * k,
                y: a.y + (b.y - a.y) * k,
                scale: a.scale + (b.scale - a.scale) * k
            };
        }
    }
    return {
        ...keys[keys.length - 1],
        t
    };
}
function smoothCursor(events, t, windowSeconds = .08) {
    const samples = events.filter((e)=>(e.type === "move" || e.type === "drag" || e.type === "click") && Math.abs(e.t - t) <= windowSeconds).sort((a, b)=>a.t - b.t);
    if (!samples.length) {
        const points = events.filter((e)=>e.type === "move" || e.type === "drag" || e.type === "click").sort((a, b)=>a.t - b.t);
        if (!points.length) return null;
        let i = points.findIndex((p)=>p.t >= t);
        if (i < 0) i = points.length - 1;
        const b = points[i], a = points[Math.max(0, i - 1)], k = easeCinematic((t - a.t) / Math.max(.001, b.t - a.t));
        return {
            x: a.x + (b.x - a.x) * k,
            y: a.y + (b.y - a.y) * k,
            click: events.some((e)=>e.type === "click" && Math.abs(e.t - t) < .14)
        };
    }
    const weights = samples.map((e)=>1 / (.012 + Math.abs(e.t - t)));
    const sum = weights.reduce((a, b)=>a + b, 0);
    return {
        x: samples.reduce((v, e, i)=>v + e.x * weights[i], 0) / sum,
        y: samples.reduce((v, e, i)=>v + e.y * weights[i], 0) / sum,
        click: events.some((e)=>e.type === "click" && Math.abs(e.t - t) < .14)
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/layout.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fitInside",
    ()=>fitInside
]);
function fitInside(source, bounds) {
    if (source.width <= 0 || source.height <= 0 || bounds.width <= 0 || bounds.height <= 0) throw Error("Dimensions must be positive");
    const factor = Math.min(bounds.width / source.width, bounds.height / source.height);
    return {
        width: source.width * factor,
        height: source.height * factor
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lighting-overlay.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LightingOverlay",
    ()=>LightingOverlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.7_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function LightingOverlay({ settings, width, height, time }) {
    if (settings.light === "none" || settings.opacity <= 0) return null;
    const blur = 2 + settings.softness * 32;
    const angle = settings.angle + Math.sin(time * .22) * 2;
    const stripes = (count, spacing, thickness, rotate)=>Array.from({
            length: count
        }, (_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: i * spacing - width,
                y: -height,
                width: thickness,
                height: height * 3,
                transform: `rotate(${rotate} ${width / 2} ${height / 2})`,
                fill: "#131827"
            }, i, false, {
                fileName: "[project]/src/lighting-overlay.tsx",
                lineNumber: 7,
                columnNumber: 111
            }, this));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: width,
        height: height,
        viewBox: `0 0 ${width} ${height}`,
        style: {
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            opacity: settings.opacity,
            mixBlendMode: "multiply",
            filter: `blur(${blur}px)`,
            transform: `rotate(${angle}deg) scale(1.25)`
        },
        children: [
            settings.light === "blinds" && Array.from({
                length: 14
            }, (_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: -width,
                    y: i * height / 10 - height / 4,
                    width: width * 3,
                    height: height / 22,
                    fill: "#10151e"
                }, i, false, {
                    fileName: "[project]/src/lighting-overlay.tsx",
                    lineNumber: 9,
                    columnNumber: 61
                }, this)),
            settings.light === "window" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: width * .22,
                        y: -height,
                        width: width * .1,
                        height: height * 3,
                        fill: "#10151e"
                    }, void 0, false, {
                        fileName: "[project]/src/lighting-overlay.tsx",
                        lineNumber: 10,
                        columnNumber: 33
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: width * .65,
                        y: -height,
                        width: width * .1,
                        height: height * 3,
                        fill: "#10151e"
                    }, void 0, false, {
                        fileName: "[project]/src/lighting-overlay.tsx",
                        lineNumber: 10,
                        columnNumber: 116
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: -width,
                        y: height * .48,
                        width: width * 3,
                        height: height * .08,
                        fill: "#10151e"
                    }, void 0, false, {
                        fileName: "[project]/src/lighting-overlay.tsx",
                        lineNumber: 10,
                        columnNumber: 199
                    }, this)
                ]
            }, void 0, true),
            settings.light === "rays" && stripes(12, width / 6, width / 12, 18),
            settings.light === "lattice" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    stripes(14, width / 8, width / 20, 25),
                    stripes(14, width / 8, width / 20, -65)
                ]
            }, void 0, true),
            settings.light === "curtain" && Array.from({
                length: 10
            }, (_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: `M ${i * width / 8 - width / 4} -100 Q ${i * width / 8} ${height / 2} ${i * width / 8 - width / 5} ${height + 100}`,
                    stroke: "#131827",
                    strokeWidth: width / 22,
                    fill: "none"
                }, i, false, {
                    fileName: "[project]/src/lighting-overlay.tsx",
                    lineNumber: 13,
                    columnNumber: 62
                }, this)),
            settings.light === "foliage" && Array.from({
                length: 32
            }, (_, i)=>{
                const x = i * 179 % width, y = i * 113 % height;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                    cx: x,
                    cy: y,
                    rx: width * .08,
                    ry: height * .025,
                    transform: `rotate(${i * 37} ${x} ${y})`,
                    fill: "#131827"
                }, i, false, {
                    fileName: "[project]/src/lighting-overlay.tsx",
                    lineNumber: 14,
                    columnNumber: 109
                }, this);
            })
        ]
    }, void 0, true, {
        fileName: "[project]/src/lighting-overlay.tsx",
        lineNumber: 8,
        columnNumber: 9
    }, this);
}
_c = LightingOverlay;
var _c;
__turbopack_context__.k.register(_c, "LightingOverlay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/environment.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultEnvironment",
    ()=>defaultEnvironment,
    "environmentSchema",
    ()=>environmentSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z>");
;
const environmentSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    padding: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().min(0).max(220).default(72),
    radius: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().min(0).max(70).default(24),
    light: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "none",
        "window",
        "blinds",
        "rays",
        "lattice",
        "foliage",
        "curtain"
    ]).default("none"),
    opacity: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0).max(1).default(.24),
    softness: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0).max(1).default(.5),
    angle: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(-180).max(180).default(-20),
    vignette: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0).max(1).default(.12),
    depth: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0).max(1).default(.45)
});
const defaultEnvironment = ()=>environmentSchema.parse({});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/backgrounds.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "backgroundCSS",
    ()=>backgroundCSS,
    "backgroundSchema",
    ()=>backgroundSchema,
    "defaultBackground",
    ()=>defaultBackground,
    "presetColors",
    ()=>presetColors
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z>");
;
const backgroundSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    mode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "color",
        "gradient",
        "preset"
    ]).default("gradient"),
    color: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().regex(/^#[0-9a-fA-F]{6}$/).default("#101827"),
    color2: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().regex(/^#[0-9a-fA-F]{6}$/).default("#405cb5"),
    angle: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0).max(360).default(135),
    preset: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "aurora",
        "sunset",
        "ocean",
        "violet",
        "graphite",
        "peach",
        "midnight",
        "mint",
        "ember"
    ]).default("aurora")
});
const defaultBackground = ()=>backgroundSchema.parse({});
const presetColors = {
    aurora: [
        "#071a34",
        "#3157bc",
        "#9c65b7"
    ],
    sunset: [
        "#25104e",
        "#ed6679",
        "#ffc58a"
    ],
    ocean: [
        "#081c3b",
        "#1367aa",
        "#3bd6cd"
    ],
    violet: [
        "#160f36",
        "#6236aa",
        "#e288cf"
    ],
    graphite: [
        "#090b11",
        "#293342",
        "#798393"
    ],
    peach: [
        "#4b214b",
        "#dc6677",
        "#f9caa0"
    ],
    midnight: [
        "#050916",
        "#112c63",
        "#5261b2"
    ],
    mint: [
        "#0b343a",
        "#2a958d",
        "#b7e3bd"
    ],
    ember: [
        "#2a0921",
        "#a43b43",
        "#f19a45"
    ]
};
function backgroundCSS(b) {
    if (b.mode === "color") return b.color;
    if (b.mode === "gradient") return `linear-gradient(${b.angle}deg,${b.color},${b.color2})`;
    const c = presetColors[b.preset];
    return `radial-gradient(ellipse at 20% 10%,${c[2]} 0%,transparent 52%),linear-gradient(${b.angle}deg,${c[0]},${c[1]})`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/cursor-motion.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cursorMotionPresets",
    ()=>cursorMotionPresets,
    "cursorPosition",
    ()=>cursorPosition
]);
const cursorMotionPresets = {
    precise: {
        lag: 0,
        smoothing: 0,
        maxGap: .35
    },
    subtle: {
        lag: .015,
        smoothing: .025,
        maxGap: .45
    },
    smooth: {
        lag: .035,
        smoothing: .055,
        maxGap: .55
    },
    fluid: {
        lag: .06,
        smoothing: .09,
        maxGap: .65
    }
};
const ease = (u)=>{
    const t = Math.max(0, Math.min(1, u));
    return t * t * (3 - 2 * t);
};
function cursorPosition(events, time, options) {
    const points = events.filter((e)=>[
            "move",
            "drag",
            "click"
        ].includes(e.type) && Number.isFinite(e.t) && Number.isFinite(e.x) && Number.isFinite(e.y)).sort((a, b)=>a.t - b.t);
    if (!points.length) return null;
    const t = Math.max(0, time - options.lag);
    let hi = points.findIndex((p)=>p.t >= t);
    if (hi < 0) hi = points.length;
    const before = points[Math.max(0, hi - 1)], after = points[Math.min(points.length - 1, hi)];
    let x = before.x, y = before.y;
    if (after !== before && after.t > before.t && after.t - before.t <= options.maxGap) {
        const u = ease((t - before.t) / (after.t - before.t));
        x = before.x + (after.x - before.x) * u;
        y = before.y + (after.y - before.y) * u;
    } else if (t <= points[0].t) {
        x = points[0].x;
        y = points[0].y;
    }
    if (options.smoothing > 0) {
        const near = points.filter((p)=>Math.abs(p.t - t) <= options.smoothing);
        if (near.length > 1) {
            const weights = near.map((p)=>1 / (.015 + Math.abs(p.t - t)));
            const sum = weights.reduce((a, b)=>a + b, 0);
            const avgX = near.reduce((a, p, i)=>a + p.x * weights[i], 0) / sum, avgY = near.reduce((a, p, i)=>a + p.y * weights[i], 0) / sum;
            x = x * .65 + avgX * .35;
            y = y * .65 + avgY * .35;
        }
    }
    const click = events.some((e)=>e.type === "click" && Math.abs(e.t - time) < .14);
    const last = points.filter((p)=>p.t <= time).at(-1)?.t ?? -Infinity;
    return {
        x,
        y,
        click,
        lastEventTime: last
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/cursor-overlay.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CursorOverlay",
    ()=>CursorOverlay,
    "cursorAt",
    ()=>cursorAt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.7_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cursor$2d$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cursor-motion.ts [app-client] (ecmascript)");
;
;
function cursorAt(events, time, mode) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cursor$2d$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cursorPosition"])(events, time, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cursor$2d$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cursorMotionPresets"][mode]);
}
function CursorOverlay({ events, time, width, height, viewport, settings }) {
    if (!settings.visible) return null;
    const p = cursorAt(events, time, settings.movement);
    if (!p) return null;
    const last = p.lastEventTime;
    const idle = settings.hideWhenIdle && time - last > 1.2;
    if (idle) return null;
    const size = 28 * settings.size;
    const x = p.x * width / viewport.width, y = p.y * height / viewport.height;
    const click = events.filter((e)=>e.type === "click" && e.t <= time).at(-1);
    const dt = click ? time - click.t : Infinity, active = dt >= 0 && dt < .55;
    const effect = settings.clickEffect;
    const circle = settings.style === "circle";
    const hand = settings.style === "hand";
    const white = settings.style === "white" || settings.style === "retro";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: "absolute",
            left: x,
            top: y,
            transform: "translate(-12%,-8%)",
            pointerEvents: "none",
            zIndex: 10,
            filter: "drop-shadow(0 2px 2px #0008)"
        },
        children: [
            active && effect !== "none" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    left: -size * .5,
                    top: -size * .5,
                    width: size * 2,
                    height: size * 2,
                    borderRadius: "50%",
                    border: "2px solid #9ab8ff",
                    background: effect === "pulse" ? "#a2baff55" : "transparent",
                    opacity: 1 - dt / .55,
                    transform: `scale(${effect === "pulse" ? 1 + dt : effect === "ripple" ? .5 + dt * 2 : 1})`
                }
            }, void 0, false, {
                fileName: "[project]/src/cursor-overlay.tsx",
                lineNumber: 23,
                columnNumber: 29
            }, this),
            active && effect === "confetti" && Array.from({
                length: 8
            }, (_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: "absolute",
                        left: Math.cos(i * Math.PI / 4) * dt * 95,
                        top: Math.sin(i * Math.PI / 4) * dt * 95,
                        width: 5,
                        height: 5,
                        borderRadius: i % 2 ? 0 : 5,
                        background: [
                            "#7c9cff",
                            "#ffd37b",
                            "#7be0cf"
                        ][i % 3],
                        opacity: 1 - dt / .55
                    }
                }, i, false, {
                    fileName: "[project]/src/cursor-overlay.tsx",
                    lineNumber: 24,
                    columnNumber: 62
                }, this)),
            circle ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: size,
                    height: size,
                    border: "2px solid white",
                    borderRadius: "50%",
                    background: "#ffffff33"
                }
            }, void 0, false, {
                fileName: "[project]/src/cursor-overlay.tsx",
                lineNumber: 25,
                columnNumber: 11
            }, this) : hand ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: size,
                height: size * 1.3,
                viewBox: "0 0 32 42",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M11 39 4 23q-2-5 3-6l4 5V5q0-5 5-5t5 5v14q6-5 9 3v11l-7 8Z",
                    fill: "white",
                    stroke: "#161b25",
                    strokeWidth: "2"
                }, void 0, false, {
                    fileName: "[project]/src/cursor-overlay.tsx",
                    lineNumber: 25,
                    columnNumber: 179
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/cursor-overlay.tsx",
                lineNumber: 25,
                columnNumber: 123
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: size,
                height: size * 1.3,
                viewBox: "0 0 32 40",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M3 2 L3 31 L10 24 L16 37 L22 34 L16 21 L27 21 Z",
                    fill: white ? "white" : "#151b2a",
                    stroke: white ? "#151b2a" : "white",
                    strokeWidth: settings.style === "retro" ? 3 : 2.2,
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/src/cursor-overlay.tsx",
                    lineNumber: 25,
                    columnNumber: 358
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/cursor-overlay.tsx",
                lineNumber: 25,
                columnNumber: 302
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/cursor-overlay.tsx",
        lineNumber: 22,
        columnNumber: 9
    }, this);
}
_c = CursorOverlay;
var _c;
__turbopack_context__.k.register(_c, "CursorOverlay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/cursor-settings.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cursorSettingsSchema",
    ()=>cursorSettingsSchema,
    "defaultCursorSettings",
    ()=>defaultCursorSettings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z>");
;
const cursorSettingsSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    visible: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().default(true),
    hideWhenIdle: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().default(false),
    style: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "default",
        "white",
        "hand",
        "circle",
        "modern",
        "retro"
    ]).default("modern"),
    size: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(.5).max(3).default(1.5),
    clickEffect: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "none",
        "ripple",
        "pulse",
        "confetti"
    ]).default("ripple"),
    movement: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "precise",
        "subtle",
        "smooth",
        "fluid"
    ]).default("smooth")
});
const defaultCursorSettings = ()=>cursorSettingsSchema.parse({});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/audio-mixer.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "audioMixerSchema",
    ()=>audioMixerSchema,
    "defaultAudioMixer",
    ()=>defaultAudioMixer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.6.7/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z>");
;
const audioMixerSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    duckingEnabled: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().default(true),
    duckingLevel: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0).max(1).default(.35),
    attack: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(.01).max(3).default(.25),
    release: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(.01).max(3).default(.4),
    masterVolume: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$6$2e$7$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0).max(2).default(1)
});
const defaultAudioMixer = ()=>audioMixerSchema.parse({});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/composition.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Promo",
    ()=>Promo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.7_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/remotion@4.0.535_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/remotion/dist/esm/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cinematic$2d$v2$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cinematic-v2.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/layout.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/timeline.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lighting$2d$overlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lighting-overlay.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$environment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/environment.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backgrounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/backgrounds.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cursor$2d$overlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cursor-overlay.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cursor$2d$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cursor-settings.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$audio$2d$editing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/audio-editing.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$audio$2d$mixer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/audio-mixer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$spatial$2d$handles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/spatial-handles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$spatial$2d$path$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/spatial-path.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$property$2d$animation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/property-animation.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function Promo({ src, title, intro, outro, zoom, events = [], camera = [], viewport = {
    width: 1920,
    height: 1080
}, settings, preview = false }) {
    _s();
    const f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCurrentFrame"])(), { fps, durationInFrames, width, height } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVideoConfig"])();
    const t = f / fps, duration = durationInFrames / fps;
    const sourceTime = settings?.clips?.length ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sourceTimeAt"])(settings.clips, t) : t;
    const cam = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cinematic$2d$v2$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["interpolateTrack"])(camera, sourceTime ?? t);
    const prop = (name)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$property$2d$animation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sampleProperty"])(settings?.animationTracks.find((a)=>a.property === name), t, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$property$2d$animation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["propertyDefaults"][name]);
    const spatial = settings?.spatialHandles?.length ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$spatial$2d$handles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spatialPosition"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$spatial$2d$path$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spatialPoints"])(settings.animationTracks), settings.spatialHandles, t) : null;
    const advanced = settings?.advancedCamera;
    const scene = settings?.scene;
    const environment = settings?.environment ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$environment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultEnvironment"])();
    const bounds = {
        width: Math.max(1, width - environment.padding * 2),
        height: Math.max(1, height - environment.padding * 2)
    };
    const frame = scene?.fit === "cover" ? {
        width: bounds.width,
        height: bounds.height
    } : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fitInside"])(viewport, bounds);
    const fw = frame.width * (scene?.scale ?? 1), fh = frame.height * (scene?.scale ?? 1);
    const totalScale = (advanced?.mode === "manual" ? advanced.amount : cam.scale) * (settings?.zoom ?? zoom);
    // Position the focal point at the center of the output frame after scaling.
    const focalX = advanced?.mode === "manual" ? advanced.targetX : cam.x;
    const focalY = advanced?.mode === "manual" ? advanced.targetY : cam.y;
    const tx = (.5 - focalX) * fw * totalScale + (scene?.offsetX ?? 0) * width * .25, ty = (.5 - focalY) * fh * totalScale + (scene?.offsetY ?? 0) * height * .25;
    const enter = Math.min(1, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["interpolate"])(t, [
        0,
        .5
    ], [
        0,
        1
    ], {
        extrapolateRight: "clamp"
    }));
    const exit = Math.min(1, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["interpolate"])(duration - t, [
        0,
        .6
    ], [
        0,
        1
    ], {
        extrapolateRight: "clamp"
    }));
    const opening = t < 1.6, closing = t > duration - 1.6;
    const overlayOpacity = opening ? Math.min(1, Math.max(0, (1.6 - t) / .4)) : closing ? Math.min(1, Math.max(0, (t - (duration - 1.6)) / .4)) : 0;
    const driftX = Math.sin(t * .28) * width * .012, driftY = Math.cos(t * .22) * height * .012;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbsoluteFill"], {
        style: {
            background: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backgrounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["backgroundCSS"])(settings?.canvasBackground ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backgrounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultBackground"])()),
            color: "white",
            fontFamily: "Arial,sans-serif",
            overflow: "hidden",
            alignItems: "center",
            justifyContent: "center"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbsoluteFill"], {
                style: {
                    background: "radial-gradient(circle at 75% 70%,#5365a52b,transparent 48%)",
                    transform: `translate(${driftX}px,${driftY}px) scale(1.08)`
                }
            }, void 0, false, {
                fileName: "[project]/src/composition.tsx",
                lineNumber: 45,
                columnNumber: 3
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    width: fw,
                    height: fh,
                    borderRadius: environment.radius,
                    overflow: "hidden",
                    background: "#111827",
                    boxShadow: settings?.shadow === false ? "none" : `0 ${25 + environment.depth * 70}px ${50 + environment.depth * 120}px #0009,0 16px 40px #0008,0 0 0 1px #ffffff32`,
                    opacity: prop("opacity"),
                    transform: `perspective(1800px) translate(${tx + (spatial?.x ?? prop("x"))}px,${ty + (spatial?.y ?? prop("y"))}px) rotateZ(${prop("rotation")}deg) rotateX(${advanced?.tiltX ?? 0}deg) rotateY(${advanced?.tiltY ?? 0}deg) rotateZ(${advanced?.spinZ ?? 0}deg) scale(${totalScale * prop("scale")}) translateY(${(1 - enter) * 25 + (1 - exit) * -15}px)`,
                    willChange: "transform"
                },
                children: [
                    settings?.clips?.length ? settings.clips.map((clip)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sequence"], {
                            from: Math.round(clip.start * fps),
                            durationInFrames: Math.max(1, Math.round((clip.sourceOut - clip.sourceIn) * fps)),
                            layout: "none",
                            children: preview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Video"], {
                                src: src,
                                muted: true,
                                playsInline: true,
                                startFrom: Math.round(clip.sourceIn * fps),
                                style: {
                                    width: "100%",
                                    height: "100%",
                                    objectFit: scene?.fit ?? "contain"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/composition.tsx",
                                lineNumber: 47,
                                columnNumber: 213
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OffthreadVideo"], {
                                src: src,
                                startFrom: Math.round(clip.sourceIn * fps),
                                style: {
                                    width: "100%",
                                    height: "100%",
                                    objectFit: scene?.fit ?? "contain"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/composition.tsx",
                                lineNumber: 47,
                                columnNumber: 361
                            }, this)
                        }, clip.id, false, {
                            fileName: "[project]/src/composition.tsx",
                            lineNumber: 47,
                            columnNumber: 54
                        }, this)) : preview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Video"], {
                        src: src,
                        muted: true,
                        playsInline: true,
                        style: {
                            width: "100%",
                            height: "100%",
                            objectFit: scene?.fit ?? "contain"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/composition.tsx",
                        lineNumber: 47,
                        columnNumber: 522
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OffthreadVideo"], {
                        src: src,
                        style: {
                            width: "100%",
                            height: "100%",
                            objectFit: scene?.fit ?? "contain"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/composition.tsx",
                        lineNumber: 47,
                        columnNumber: 628
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cursor$2d$overlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CursorOverlay"], {
                        events: events,
                        time: sourceTime ?? t,
                        width: fw,
                        height: fh,
                        viewport: viewport,
                        settings: {
                            ...settings?.cursorSettings ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cursor$2d$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultCursorSettings"])(),
                            visible: settings?.cursor !== false && (settings?.cursorSettings?.visible ?? true)
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/composition.tsx",
                        lineNumber: 48,
                        columnNumber: 4
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/composition.tsx",
                lineNumber: 46,
                columnNumber: 3
            }, this),
            settings?.audioTracks?.filter((track)=>!track.muted).map((track)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sequence"], {
                    from: Math.round(track.start * fps),
                    durationInFrames: Math.max(1, Math.round(track.duration * fps)),
                    layout: "none",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Audio"], {
                        src: src.slice(0, src.lastIndexOf("/") + 1) + track.file,
                        startFrom: Math.round(track.trimStart * fps),
                        loop: track.loop,
                        volume: (frame)=>{
                            const seconds = frame / fps;
                            const fadeIn = track.fadeIn > 0 ? Math.min(1, seconds / track.fadeIn) : 1;
                            const fadeOut = track.fadeOut > 0 ? Math.min(1, (track.duration - seconds) / track.fadeOut) : 1;
                            return Math.max(0, Math.min(fadeIn, fadeOut)) * (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$audio$2d$editing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixedAudioGain"])(track, settings.audioTracks, track.start + seconds, settings.audioMixer ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$audio$2d$mixer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultAudioMixer"])());
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/composition.tsx",
                        lineNumber: 50,
                        columnNumber: 202
                    }, this)
                }, track.id, false, {
                    fileName: "[project]/src/composition.tsx",
                    lineNumber: 50,
                    columnNumber: 66
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lighting$2d$overlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LightingOverlay"], {
                settings: environment,
                width: width,
                height: height,
                time: t
            }, void 0, false, {
                fileName: "[project]/src/composition.tsx",
                lineNumber: 51,
                columnNumber: 3
            }, this),
            environment.vignette > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbsoluteFill"], {
                style: {
                    pointerEvents: "none",
                    background: `radial-gradient(ellipse at center,transparent 35%,rgba(0,0,0,${environment.vignette}) 100%)`
                }
            }, void 0, false, {
                fileName: "[project]/src/composition.tsx",
                lineNumber: 52,
                columnNumber: 28
            }, this),
            (opening || closing) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AbsoluteFill"], {
                style: {
                    background: "linear-gradient(0deg,#071021e8,#07102190)",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: 48,
                    opacity: overlayOpacity
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: 24,
                            letterSpacing: 8,
                            marginBottom: 20,
                            opacity: .75
                        },
                        children: "TILO"
                    }, void 0, false, {
                        fileName: "[project]/src/composition.tsx",
                        lineNumber: 54,
                        columnNumber: 4
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: Math.min(64, width / 14),
                            fontWeight: 750,
                            letterSpacing: -1
                        },
                        children: opening ? settings?.intro || intro || title : settings?.outro || outro || "Découvrez Tilo"
                    }, void 0, false, {
                        fileName: "[project]/src/composition.tsx",
                        lineNumber: 55,
                        columnNumber: 4
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/composition.tsx",
                lineNumber: 53,
                columnNumber: 24
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/composition.tsx",
        lineNumber: 44,
        columnNumber: 9
    }, this);
}
_s(Promo, "4Z5s0LKvDcPMKUysmcF+cIvMXQY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCurrentFrame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$remotion$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$remotion$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVideoConfig"]
    ];
});
_c = Promo;
var _c;
__turbopack_context__.k.register(_c, "Promo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/scene.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clampScene",
    ()=>clampScene,
    "defaultScene",
    ()=>defaultScene,
    "timelineTime",
    ()=>timelineTime
]);
const defaultScene = {
    fit: 'contain',
    scale: 1,
    offsetX: 0,
    offsetY: 0
};
function clampScene(s) {
    return {
        fit: s.fit,
        scale: Math.max(.5, Math.min(1.5, s.scale)),
        offsetX: Math.max(-1, Math.min(1, s.offsetX)),
        offsetY: Math.max(-1, Math.min(1, s.offsetY))
    };
}
function timelineTime(x, left, width, duration, snap = .1) {
    const t = Math.max(0, Math.min(duration, (x - left) / Math.max(1, width) * duration));
    return Math.round(t / snap) * snap;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/timeline-pro.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "commitHistory",
    ()=>commitHistory,
    "createHistory",
    ()=>createHistory,
    "redoHistory",
    ()=>redoHistory,
    "snapTime",
    ()=>snapTime,
    "timelineTargets",
    ()=>timelineTargets,
    "undoHistory",
    ()=>undoHistory
]);
const createHistory = (present)=>({
        past: [],
        present,
        future: []
    });
function commitHistory(h, next, limit = 50) {
    if (JSON.stringify(h.present) === JSON.stringify(next)) return h;
    return {
        past: [
            ...h.past.slice(-(limit - 1)),
            h.present
        ],
        present: next,
        future: []
    };
}
function undoHistory(h) {
    if (!h.past.length) return h;
    return {
        past: h.past.slice(0, -1),
        present: h.past[h.past.length - 1],
        future: [
            h.present,
            ...h.future
        ]
    };
}
function redoHistory(h) {
    if (!h.future.length) return h;
    return {
        past: [
            ...h.past,
            h.present
        ],
        present: h.future[0],
        future: h.future.slice(1)
    };
}
function snapTime(time, targets, threshold = .12, enabled = true) {
    const safe = Math.max(0, time);
    if (!enabled || !targets.length) return safe;
    let nearest = safe, distance = threshold;
    for (const target of targets){
        const diff = Math.abs(safe - target);
        if (diff < distance) {
            nearest = target;
            distance = diff;
        }
    }
    return nearest;
}
function timelineTargets(clips, audio, playhead) {
    return [
        0,
        playhead,
        ...clips.flatMap((c)=>[
                c.start,
                c.start + c.sourceOut - c.sourceIn
            ]),
        ...audio.flatMap((a)=>[
                a.start,
                a.start + a.duration
            ])
    ];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/studio/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.7_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.0.7_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$remotion$2b$player$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f40$remotion$2f$player$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@remotion+player@4.0.535_react-dom@19.3.0_react@19.3.0__react@19.3.0/node_modules/@remotion/player/dist/esm/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$app$2f$audio$2d$inspector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/studio/app/audio-inspector.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$app$2f$animation$2d$inspector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/studio/app/animation-inspector.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$app$2f$property$2d$timeline$2d$track$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/studio/app/property-timeline-track.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$app$2f$bezier$2d$curve$2d$editor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/studio/app/bezier-curve-editor.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$property$2d$animation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/property-animation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$bezier$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/bezier.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$app$2f$scene$2d$position$2d$overlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/studio/app/scene-position-overlay.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$app$2f$spatial$2d$path$2d$overlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/studio/app/spatial-path-overlay.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$app$2f$video$2d$timeline$2d$clip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/studio/app/video-timeline-clip.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$app$2f$timeline$2d$playhead$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/studio/app/timeline-playhead.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$project$2d$management$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/project-management.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$timeline$2d$scale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/timeline-scale.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$app$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/studio/app/tooltip.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$app$2f$studio$2d$feedback$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/studio/app/studio-feedback.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$app$2f$audio$2d$waveform$2d$clip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/studio/app/audio-waveform-clip.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$button$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/studio/components/arc/button/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$switch$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/studio/components/arc/switch/switch.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$slider$2f$slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/studio/components/arc/slider/slider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$tabs$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/studio/components/arc/tabs/tabs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$select$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/studio/components/arc/select/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$resizable$2d$panels$2f$resizable$2d$panels$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/studio/components/arc/resizable-panels/resizable-panels.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clapperboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clapperboard$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.468.0_react@19.3.0/node_modules/lucide-react/dist/esm/icons/clapperboard.js [app-client] (ecmascript) <export default as Clapperboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.468.0_react@19.3.0/node_modules/lucide-react/dist/esm/icons/video.js [app-client] (ecmascript) <export default as Video>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.468.0_react@19.3.0/node_modules/lucide-react/dist/esm/icons/folder-open.js [app-client] (ecmascript) <export default as FolderOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.468.0_react@19.3.0/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.468.0_react@19.3.0/node_modules/lucide-react/dist/esm/icons/pause.js [app-client] (ecmascript) <export default as Pause>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Square$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.468.0_react@19.3.0/node_modules/lucide-react/dist/esm/icons/square.js [app-client] (ecmascript) <export default as Square>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.468.0_react@19.3.0/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.468.0_react@19.3.0/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.468.0_react@19.3.0/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.468.0_react@19.3.0/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.468.0_react@19.3.0/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.468.0_react@19.3.0/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.468.0_react@19.3.0/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mouse$2d$pointer$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MousePointer2$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.468.0_react@19.3.0/node_modules/lucide-react/dist/esm/icons/mouse-pointer-2.js [app-client] (ecmascript) <export default as MousePointer2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scan$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scan$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.468.0_react@19.3.0/node_modules/lucide-react/dist/esm/icons/scan.js [app-client] (ecmascript) <export default as Scan>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings2$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.468.0_react@19.3.0/node_modules/lucide-react/dist/esm/icons/settings-2.js [app-client] (ecmascript) <export default as Settings2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.468.0_react@19.3.0/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$film$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Film$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.468.0_react@19.3.0/node_modules/lucide-react/dist/esm/icons/film.js [app-client] (ecmascript) <export default as Film>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$composition$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/composition.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cinematic$2d$v2$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/cinematic-v2.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/timeline.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scene$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/scene.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$timeline$2d$pro$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/timeline-pro.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backgrounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/backgrounds.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const defaults = {
    spatialHandles: [],
    animationTracks: [],
    audioMixer: {
        duckingEnabled: true,
        duckingLevel: .35,
        attack: .25,
        release: .4,
        masterVolume: 1
    },
    audioTracks: [],
    canvasBackground: {
        mode: "gradient",
        color: "#101827",
        color2: "#405cb5",
        angle: 135,
        preset: "aurora"
    },
    advancedCamera: {
        mode: "auto",
        amount: 1.4,
        tiltX: 0,
        tiltY: 0,
        spinZ: 0,
        targetX: .5,
        targetY: .5,
        easing: "smooth"
    },
    environment: {
        padding: 72,
        radius: 24,
        light: "none",
        opacity: .24,
        softness: .5,
        angle: -20,
        vignette: .12,
        depth: .45
    },
    cursorSettings: {
        visible: true,
        hideWhenIdle: false,
        style: "modern",
        size: 1.5,
        clickEffect: "ripple",
        movement: "smooth"
    },
    clips: [],
    scene: {
        fit: "contain",
        scale: 1,
        offsetX: 0,
        offsetY: 0
    },
    intro: "Découvrez Tilo",
    outro: "Apprendre autrement",
    zoom: 1.06,
    autoZoom: true,
    cursor: true,
    background: "#101827",
    radius: 24,
    shadow: true,
    camera: []
};
const dimensions = {
    landscape: {
        width: 1920,
        height: 1080
    },
    portrait: {
        width: 1080,
        height: 1920
    },
    square: {
        width: 1080,
        height: 1080
    }
};
function Home() {
    _s();
    const [url, setUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("http://localhost:3000"), [captureId, setCaptureId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("tilo-demo"), [resolution, setResolution] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("1600x900");
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        state: "idle"
    }), [recordings, setRecordings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]), [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(""), [detail, setDetail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const history = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$timeline$2d$pro$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createHistory"])(defaults));
    const transaction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const latestSettings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(defaults);
    const [canUndo, setCanUndo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), [canRedo, setCanRedo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [snapEnabled, setSnapEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true), [timelineZoom, setTimelineZoom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [settings, setSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaults), [format, setFormat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("landscape"), [playhead, setPlayhead] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0), [playing, setPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Prêt");
    const [mediaError, setMediaError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [exporting, setExporting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { notices, notify, dismiss } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$app$2f$studio$2d$feedback$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStudioNotices"])();
    const [projectDialog, setProjectDialog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [paneSizes, setPaneSizes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        21,
        57,
        22
    ]);
    const [timelineHeight, setTimelineHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(230);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            try {
                const v = JSON.parse(localStorage.getItem("tilo:studio:panes") || "null");
                if (Array.isArray(v) && v.length === 3 && v.every({
                    "Home.useEffect": (n)=>typeof n === "number" && n >= 0 && n <= 100
                }["Home.useEffect"])) setPaneSizes(v);
                const h = Number(localStorage.getItem("tilo:studio:timeline-height"));
                if (Number.isFinite(h) && h >= 160 && h <= 600) setTimelineHeight(h);
            } catch  {}
        }
    }["Home.useEffect"], []);
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("camera"), [selectedKey, setSelectedKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const player = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), readySeen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const sourceDuration = Math.max(1, detail?.manifest.duration || detail?.scenario?.video?.duration || 5);
    const duration = settings.clips.length ? settings.clips.reduce((n, c)=>Math.max(n, c.start + (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["duration"])(c)), 0) : sourceDuration;
    const timelineScaleDuration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$timeline$2d$scale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeTimelineDuration"])(sourceDuration, duration);
    const fps = 30, dims = dimensions[format];
    const patch = (x)=>setSettings((s)=>{
            const next = {
                ...s,
                ...x
            };
            latestSettings.current = next;
            if (!transaction.current) history.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$timeline$2d$pro$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["commitHistory"])(history.current, next);
            setCanUndo(history.current.past.length > 0);
            setCanRedo(false);
            return next;
        });
    const beginTransaction = ()=>{
        transaction.current = latestSettings.current;
    };
    const endTransaction = ()=>{
        const initial = transaction.current;
        transaction.current = null;
        if (!initial) return;
        history.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$timeline$2d$pro$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["commitHistory"])({
            ...history.current,
            present: initial
        }, latestSettings.current);
        setCanUndo(history.current.past.length > 0);
        setCanRedo(false);
    };
    const undo = ()=>{
        history.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$timeline$2d$pro$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["undoHistory"])(history.current);
        latestSettings.current = history.current.present;
        setSettings(history.current.present);
        setCanUndo(history.current.past.length > 0);
        setCanRedo(history.current.future.length > 0);
    };
    const redo = ()=>{
        history.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$timeline$2d$pro$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["redoHistory"])(history.current);
        setSettings(history.current.present);
        setCanUndo(history.current.past.length > 0);
        setCanRedo(history.current.future.length > 0);
    };
    async function refresh() {
        const r = await fetch("/api/recordings");
        if (r.ok) setRecordings((await r.json()).recordings || []);
    }
    async function duplicateProject(id, name) {
        if (name === undefined) {
            setProjectDialog({
                kind: "duplicate",
                id,
                initialName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$project$2d$management$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["copyProjectName"])(id, recordings.map((r)=>r.id))
            });
            return;
        }
        const next = name.trim().toLowerCase();
        if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(next) || next.length > 80) {
            setMessage("Nom invalide : lettres minuscules, chiffres et tirets");
            return;
        }
        setBusy(true);
        try {
            const response = await fetch("/api/recordings/" + encodeURIComponent(id) + "/manage", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id: next
                })
            });
            const data = await response.json();
            if (!response.ok) throw Error(data.error || "Duplication impossible");
            await refresh();
            await load(data.id);
            setMessage("Projet dupliqué : " + data.id);
            notify("Projet dupliqué : " + data.id, "success");
        } catch (e) {
            setMessage(String(e));
            notify(String(e), "error");
        } finally{
            setBusy(false);
        }
    }
    async function deleteProject(id, confirmed = false) {
        if (status.state === "recording" && status.id === id) {
            setMessage("Arrête l’enregistrement avant de supprimer ce projet");
            return;
        }
        if (!confirmed) {
            setProjectDialog({
                kind: "delete",
                id,
                initialName: ""
            });
            return;
        }
        setBusy(true);
        try {
            const response = await fetch("/api/recordings/" + encodeURIComponent(id) + "/manage", {
                method: "DELETE",
                headers: {
                    "x-confirm-project-delete": id
                }
            });
            const data = await response.json();
            if (!response.ok) throw Error(data.error || "Suppression impossible");
            if (selected === id) {
                setSelected("");
                setDetail(null);
                setPlayhead(0);
                setSettings(defaults);
                latestSettings.current = defaults;
                history.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$timeline$2d$pro$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createHistory"])(defaults);
                setCanUndo(false);
                setCanRedo(false);
            }
            await refresh();
            setMessage("Projet supprimé : " + id);
            notify("Projet supprimé : " + id, "success");
        } catch (e) {
            setMessage(String(e));
        } finally{
            setBusy(false);
        }
    }
    async function load(id) {
        const r = await fetch("/api/recordings/" + id);
        if (!r.ok) {
            setMessage("Capture introuvable");
            return;
        }
        const d = await r.json();
        setSelected(id);
        setDetail(d);
        setMediaError("");
        const loaded = {
            ...defaults,
            ...d.settings,
            cursorSettings: d.settings.cursorSettings || defaults.cursorSettings,
            environment: d.settings.environment || defaults.environment,
            advancedCamera: d.settings.advancedCamera || defaults.advancedCamera,
            canvasBackground: d.settings.canvasBackground || defaults.canvasBackground,
            audioTracks: d.settings.audioTracks || [],
            audioMixer: d.settings.audioMixer || defaults.audioMixer,
            animationTracks: d.settings.animationTracks || [],
            spatialHandles: d.settings.spatialHandles || [],
            clips: d.settings.clips || [],
            scene: d.settings.scene || defaults.scene
        };
        latestSettings.current = loaded;
        setSettings(loaded);
        history.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$timeline$2d$pro$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createHistory"])(loaded);
        setCanUndo(false);
        setCanRedo(false);
        setSelectedKey(null);
        setSelectedClip(null);
        setSelectedClips([]);
        setPlayhead(0);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            void refresh();
            const timer = setInterval({
                "Home.useEffect.timer": ()=>{
                    void fetch("/api/record").then({
                        "Home.useEffect.timer": (r)=>r.json()
                    }["Home.useEffect.timer"]).then({
                        "Home.useEffect.timer": (s)=>{
                            setStatus(s);
                            if (s.state === "ready" && !readySeen.current) {
                                readySeen.current = true;
                                void refresh();
                                if (s.id) void load(s.id);
                            }
                            if (s.state !== "ready") readySeen.current = false;
                        }
                    }["Home.useEffect.timer"]).catch({
                        "Home.useEffect.timer": ()=>{}
                    }["Home.useEffect.timer"]);
                }
            }["Home.useEffect.timer"], 1500);
            return ({
                "Home.useEffect": ()=>clearInterval(timer)
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const ref = player.current;
            if (!ref) return;
            const frame = {
                "Home.useEffect.frame": (e)=>setPlayhead(e.detail.frame / fps)
            }["Home.useEffect.frame"];
            const play = {
                "Home.useEffect.play": ()=>setPlaying(true)
            }["Home.useEffect.play"], pause = {
                "Home.useEffect.pause": ()=>setPlaying(false)
            }["Home.useEffect.pause"];
            ref.addEventListener("frameupdate", frame);
            ref.addEventListener("play", play);
            ref.addEventListener("pause", pause);
            return ({
                "Home.useEffect": ()=>{
                    ref.removeEventListener("frameupdate", frame);
                    ref.removeEventListener("play", play);
                    ref.removeEventListener("pause", pause);
                }
            })["Home.useEffect"];
        }
    }["Home.useEffect"], [
        detail,
        format
    ]);
    const camera = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Home.useMemo[camera]": ()=>detail ? settings.camera.length ? settings.camera : settings.advancedCamera.mode === "manual" ? [] : settings.autoZoom ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$cinematic$2d$v2$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildCameraTrack"])(detail.events, duration, detail.manifest.viewport, {
                zoom: settings.advancedCamera.amount,
                maxZoom: 3
            }) : [] : []
    }["Home.useMemo[camera]"], [
        detail,
        settings.camera,
        settings.autoZoom,
        settings.advancedCamera,
        duration
    ]);
    const props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Home.useMemo[props]": ()=>({
                src: detail?.video || "",
                title: detail?.scenario?.title || "Tilo",
                intro: settings.intro,
                outro: settings.outro,
                zoom: 1,
                events: detail?.events || [],
                camera,
                viewport: detail?.manifest.viewport || {
                    width: 1600,
                    height: 900
                },
                settings,
                preview: true
            })
    }["Home.useMemo[props]"], [
        detail,
        camera,
        settings
    ]);
    const seek = (t)=>{
        const v = Math.max(0, Math.min(duration, t));
        setPlayhead(v);
        player.current?.seekTo(Math.round(v * fps));
    };
    async function record(action) {
        setBusy(true);
        try {
            const [width, height] = resolution.split("x").map(Number);
            const r = await fetch("/api/record", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    action,
                    options: {
                        url,
                        id: captureId,
                        width,
                        height
                    }
                })
            });
            const d = await r.json();
            if (!r.ok) throw Error(JSON.stringify(d.error));
            setStatus(d);
            setMessage(action === "start" ? "Manipule Tilo dans Chromium" : "Finalisation…");
            notify(action === "start" ? "Enregistrement démarré" : "Finalisation de la capture…", "info");
        } catch (e) {
            setMessage(String(e));
            notify(String(e), "error");
        } finally{
            setBusy(false);
        }
    }
    async function save() {
        if (!selected) return false;
        setBusy(true);
        try {
            const r = await fetch("/api/recordings/" + selected, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(settings)
            });
            if (!r.ok) throw Error(await r.text());
            setMessage("Réglages enregistrés");
            notify("Projet enregistré", "success");
            return true;
        } catch (e) {
            setMessage(String(e));
            notify(String(e), "error");
            return false;
        } finally{
            setBusy(false);
        }
    }
    async function exportVideo() {
        if (!selected || exporting) return;
        setExporting(true);
        setBusy(true);
        setMessage("Rendu MP4 en cours…");
        notify("Export MP4 démarré", "info");
        try {
            const saved = await fetch("/api/recordings/" + selected, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(settings)
            });
            if (!saved.ok) throw Error("Sauvegarde impossible");
            const response = await fetch("/api/render", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    recording: selected,
                    format
                })
            });
            const data = await response.json();
            if (!response.ok) {
                if (data.cancelled) {
                    setMessage("Export annulé");
                    notify("Export annulé", "info");
                    return;
                }
                throw Error(data.error || "Échec du rendu");
            }
            setMessage("Export terminé : " + data.output);
            notify("Export MP4 terminé", "success");
        } catch (e) {
            setMessage(String(e));
            notify("Erreur d’export : " + String(e), "error");
        } finally{
            setExporting(false);
            setBusy(false);
        }
    }
    async function cancelVideoExport() {
        try {
            const response = await fetch("/api/render", {
                method: "DELETE"
            });
            if (!response.ok) throw Error("Impossible d’annuler l’export");
            setMessage("Annulation de l’export…");
            notify("Annulation de l’export demandée", "info");
        } catch (e) {
            notify(String(e), "error");
        }
    }
    const addKey = ()=>{
        patch({
            camera: [
                ...camera.map((k)=>({
                        ...k
                    })),
                {
                    t: Math.round(playhead * 100) / 100,
                    x: .5,
                    y: .5,
                    scale: 1.4
                }
            ].sort((a, b)=>a.t - b.t)
        });
        setSelectedKey(null);
    };
    const editKey = (i, p)=>patch({
            camera: settings.camera.map((k, j)=>i === j ? {
                    ...k,
                    ...p
                } : k)
        });
    const updateCursor = (next)=>patch({
            cursorSettings: {
                ...settings.cursorSettings,
                ...next
            }
        });
    const updateEnvironment = (next)=>patch({
            environment: {
                ...settings.environment,
                ...next
            }
        });
    const updateBackground = (next)=>patch({
            canvasBackground: {
                ...settings.canvasBackground,
                ...next
            }
        });
    const updateAdvancedCamera = (next)=>patch({
            advancedCamera: {
                ...settings.advancedCamera,
                ...next
            }
        });
    const keys = settings.camera.length ? settings.camera : camera;
    const [dragging, setDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editScenePosition, setEditScenePosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showSpatialPath, setShowSpatialPath] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedPropertyKey, setSelectedPropertyKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedClip, setSelectedClip] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedClips, setSelectedClips] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const activeClips = settings.clips.length ? settings.clips : detail ? [
        {
            id: "clip-1",
            sourceIn: 0,
            sourceOut: sourceDuration,
            start: 0
        }
    ] : [];
    const ensureClips = ()=>settings.clips.length ? settings.clips : activeClips;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const handler = {
                "Home.useEffect.handler": (event)=>{
                    const target = event.target;
                    if (target?.closest("input,textarea,select,[contenteditable=true]")) return;
                    const mod = event.metaKey || event.ctrlKey;
                    if (mod && event.key.toLowerCase() === "z") {
                        event.preventDefault();
                        if (event.shiftKey) redo();
                        else undo();
                    } else if (mod && event.key.toLowerCase() === "y") {
                        event.preventDefault();
                        redo();
                    } else if (event.key === " ") {
                        event.preventDefault();
                        if (player.current) {
                            if (playing) player.current.pause();
                            else player.current.play();
                        }
                    } else if ((event.key === "Delete" || event.key === "Backspace") && selectedClip) {
                        event.preventDefault();
                        patch({
                            clips: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeClip"])(ensureClips(), selectedClip)
                        });
                        setSelectedClip(null);
                    }
                }
            }["Home.useEffect.handler"];
            window.addEventListener("keydown", handler);
            return ({
                "Home.useEffect": ()=>window.removeEventListener("keydown", handler)
            })["Home.useEffect"];
        }
    }["Home.useEffect"], [
        playing,
        selectedClip,
        settings,
        canUndo,
        canRedo
    ]);
    const splitAtPlayhead = ()=>{
        const clip = activeClips.find((c)=>playhead > c.start + .05 && playhead < c.start + (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["duration"])(c) - .05);
        if (clip) patch({
            clips: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitClip"])(ensureClips(), clip.id, playhead)
        });
    };
    const changeTrim = (edge, delta)=>{
        if (selectedClip) patch({
            clips: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trimClip"])(ensureClips(), selectedClip, edge, delta, sourceDuration)
        });
    };
    const dragKey = (index, e)=>{
        if (!settings.camera.length) return;
        const track = e.currentTarget.parentElement;
        if (!track) return;
        const rect = track.getBoundingClientRect();
        const update = (event)=>{
            const raw = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$scene$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timelineTime"])(event.clientX, rect.left, rect.width, timelineScaleDuration, .05);
            const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$timeline$2d$pro$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["snapTime"])(raw, (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$timeline$2d$pro$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timelineTargets"])(activeClips, settings.audioTracks, playhead), .12, snapEnabled);
            setSettings((prev)=>({
                    ...prev,
                    camera: prev.camera.map((k, i)=>i === index ? {
                            ...k,
                            t
                        } : k)
                }));
        };
        const finish = ()=>{
            window.removeEventListener("pointermove", update);
            window.removeEventListener("pointerup", finish);
            setSettings((current)=>{
                history.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$timeline$2d$pro$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["commitHistory"])(history.current, current);
                setCanUndo(history.current.past.length > 0);
                setCanRedo(false);
                return current;
            });
            setDragging(null);
        };
        history.current.present = settings;
        setDragging(index);
        setSelectedKey(index);
        window.addEventListener("pointermove", update);
        window.addEventListener("pointerup", finish);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "shell",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "topbar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "brand",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "brandmark",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clapperboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clapperboard$3e$__["Clapperboard"], {
                                    size: 17
                                }, void 0, false, {
                                    fileName: "[project]/apps/studio/app/page.tsx",
                                    lineNumber: 136,
                                    columnNumber: 81
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/studio/app/page.tsx",
                                lineNumber: 136,
                                columnNumber: 53
                            }, this),
                            "Tilo Motion Studio ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "pill",
                                children: selected || "Aucun projet"
                            }, void 0, false, {
                                fileName: "[project]/apps/studio/app/page.tsx",
                                lineNumber: 136,
                                columnNumber: 132
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/studio/app/page.tsx",
                        lineNumber: 136,
                        columnNumber: 30
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "topactions",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$button$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "secondary",
                                disabled: !selected || busy,
                                onClick: ()=>void save(),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                        size: 15
                                    }, void 0, false, {
                                        fileName: "[project]/apps/studio/app/page.tsx",
                                        lineNumber: 136,
                                        columnNumber: 306
                                    }, this),
                                    " Enregistrer"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/studio/app/page.tsx",
                                lineNumber: 136,
                                columnNumber: 222
                            }, this),
                            exporting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$button$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "secondary",
                                onClick: ()=>void cancelVideoExport(),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Square$3e$__["Square"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/apps/studio/app/page.tsx",
                                        lineNumber: 136,
                                        columnNumber: 428
                                    }, this),
                                    " Annuler l’export"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/studio/app/page.tsx",
                                lineNumber: 136,
                                columnNumber: 358
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$button$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "primary",
                                disabled: !selected || busy,
                                onClick: ()=>void exportVideo(),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                        size: 15
                                    }, void 0, false, {
                                        fileName: "[project]/apps/studio/app/page.tsx",
                                        lineNumber: 136,
                                        columnNumber: 566
                                    }, this),
                                    " Exporter"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/studio/app/page.tsx",
                                lineNumber: 136,
                                columnNumber: 477
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/studio/app/page.tsx",
                        lineNumber: 136,
                        columnNumber: 194
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/studio/app/page.tsx",
                lineNumber: 136,
                columnNumber: 3
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "workspace",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$resizable$2d$panels$2f$resizable$2d$panels$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResizablePanels"], {
                        label: "Motion Studio workspace",
                        onLayoutChange: (sizes)=>{
                            try {
                                localStorage.setItem("tilo:studio:panes", JSON.stringify(sizes));
                            } catch  {}
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$resizable$2d$panels$2f$resizable$2d$panels$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResizablePanel"], {
                                id: "library",
                                label: "Bibliothèque",
                                defaultSize: paneSizes[0],
                                minSize: 215,
                                collapsible: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                    className: "sidebar",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pane-header inline",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__["FolderOpen"], {
                                                    size: 15
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/studio/app/page.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 170
                                                }, this),
                                                " BIBLIOTHÈQUE"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/studio/app/page.tsx",
                                            lineNumber: 138,
                                            columnNumber: 134
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pane-content",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "section-title",
                                                    children: [
                                                        "Captures ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "btn icon",
                                                            onClick: ()=>void refresh(),
                                                            title: "Actualiser",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                                size: 14
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/studio/app/page.tsx",
                                                                lineNumber: 138,
                                                                columnNumber: 359
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                            lineNumber: 138,
                                                            columnNumber: 282
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/studio/app/page.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 242
                                                }, this),
                                                recordings.length ? recordings.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "recording-row " + (selected === r.id ? "active" : ""),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "recording-item " + (selected === r.id ? "active" : ""),
                                                                onClick: ()=>void load(r.id),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "thumbnail",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$film$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Film$3e$__["Film"], {
                                                                            size: 17
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                                            lineNumber: 138,
                                                                            columnNumber: 634
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/studio/app/page.tsx",
                                                                        lineNumber: 138,
                                                                        columnNumber: 606
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                children: r.id
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/apps/studio/app/page.tsx",
                                                                                lineNumber: 138,
                                                                                columnNumber: 664
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                                className: "muted",
                                                                                style: {
                                                                                    display: "block"
                                                                                },
                                                                                children: [
                                                                                    r.duration.toFixed(1),
                                                                                    " s"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/apps/studio/app/page.tsx",
                                                                                lineNumber: 138,
                                                                                columnNumber: 687
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/apps/studio/app/page.tsx",
                                                                        lineNumber: 138,
                                                                        columnNumber: 658
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/apps/studio/app/page.tsx",
                                                                lineNumber: 138,
                                                                columnNumber: 508
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "recording-actions",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$app$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                                        content: "Dupliquer ce projet",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            className: "btn icon",
                                                                            "aria-label": "Dupliquer " + r.id,
                                                                            disabled: busy,
                                                                            onClick: ()=>void duplicateProject(r.id),
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                                                size: 14
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/apps/studio/app/page.tsx",
                                                                                lineNumber: 138,
                                                                                columnNumber: 979
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                                            lineNumber: 138,
                                                                            columnNumber: 861
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/studio/app/page.tsx",
                                                                        lineNumber: 138,
                                                                        columnNumber: 822
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$app$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                                        content: "Supprimer définitivement ce projet",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            className: "btn icon",
                                                                            "aria-label": "Supprimer " + r.id,
                                                                            disabled: busy,
                                                                            onClick: ()=>void deleteProject(r.id),
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                                size: 14
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/apps/studio/app/page.tsx",
                                                                                lineNumber: 138,
                                                                                columnNumber: 1184
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                                            lineNumber: 138,
                                                                            columnNumber: 1069
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/studio/app/page.tsx",
                                                                        lineNumber: 138,
                                                                        columnNumber: 1015
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/apps/studio/app/page.tsx",
                                                                lineNumber: 138,
                                                                columnNumber: 787
                                                            }, this)
                                                        ]
                                                    }, r.id, true, {
                                                        fileName: "[project]/apps/studio/app/page.tsx",
                                                        lineNumber: 138,
                                                        columnNumber: 433
                                                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "empty",
                                                    children: "Aucune capture"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/studio/app/page.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 1236
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "divider"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/studio/app/page.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 1280
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "section-title",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                                                            size: 15
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                            lineNumber: 138,
                                                            columnNumber: 1337
                                                        }, this),
                                                        " Nouvel enregistrement"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/studio/app/page.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 1306
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "field",
                                                    children: [
                                                        "URL de Tilo",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            value: url,
                                                            onChange: (e)=>setUrl(e.target.value)
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                            lineNumber: 138,
                                                            columnNumber: 1419
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/studio/app/page.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 1383
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "field",
                                                    children: [
                                                        "Nom",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            value: captureId,
                                                            onChange: (e)=>setCaptureId(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, "-"))
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                            lineNumber: 138,
                                                            columnNumber: 1512
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/studio/app/page.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 1484
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$select$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                                    label: "Résolution de capture",
                                                    value: resolution,
                                                    onValueChange: setResolution,
                                                    options: [
                                                        {
                                                            value: "1600x900",
                                                            label: "1600 × 900 · HD+"
                                                        },
                                                        {
                                                            value: "1920x1080",
                                                            label: "1920 × 1080 · Full HD"
                                                        },
                                                        {
                                                            value: "1440x900",
                                                            label: "1440 × 900 · 16:10"
                                                        }
                                                    ]
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/studio/app/page.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 1630
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "capture-actions inline",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "btn primary",
                                                            disabled: busy || status.state === "recording" || status.state === "stopping",
                                                            onClick: ()=>void record("start"),
                                                            children: "● REC"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                            lineNumber: 138,
                                                            columnNumber: 1914
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "btn danger",
                                                            disabled: busy || status.state !== "recording",
                                                            onClick: ()=>void record("stop"),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Square$3e$__["Square"], {
                                                                    size: 13
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/studio/app/page.tsx",
                                                                    lineNumber: 138,
                                                                    columnNumber: 2175
                                                                }, this),
                                                                " Stop"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                            lineNumber: 138,
                                                            columnNumber: 2066
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/studio/app/page.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 1874
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "hint",
                                                    children: [
                                                        "État : ",
                                                        status.state,
                                                        ". Manipule Tilo dans Chromium."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/studio/app/page.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 2214
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/studio/app/page.tsx",
                                            lineNumber: 138,
                                            columnNumber: 212
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/studio/app/page.tsx",
                                    lineNumber: 138,
                                    columnNumber: 107
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/studio/app/page.tsx",
                                lineNumber: 138,
                                columnNumber: 4
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$resizable$2d$panels$2f$resizable$2d$panels$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResizablePanel"], {
                                id: "preview",
                                label: "Prévisualisation et timeline",
                                defaultSize: paneSizes[1],
                                minSize: 360,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "preview-head",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "inline",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scan$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scan$3e$__["Scan"], {
                                                            size: 15
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                            lineNumber: 139,
                                                            columnNumber: 206
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Prévisualisation"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                            lineNumber: 139,
                                                            columnNumber: 223
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "pill",
                                                            children: "Remotion"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                            lineNumber: 139,
                                                            columnNumber: 256
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/studio/app/page.tsx",
                                                    lineNumber: 139,
                                                    columnNumber: 182
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "inline",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "muted",
                                                            children: [
                                                                dims.width,
                                                                " × ",
                                                                dims.height
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                            lineNumber: 139,
                                                            columnNumber: 324
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$select$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                                            label: "Format de sortie",
                                                            value: format,
                                                            onValueChange: (v)=>setFormat(v),
                                                            options: [
                                                                {
                                                                    value: "landscape",
                                                                    label: "16:9"
                                                                },
                                                                {
                                                                    value: "portrait",
                                                                    label: "9:16"
                                                                },
                                                                {
                                                                    value: "square",
                                                                    label: "1:1"
                                                                }
                                                            ]
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                            lineNumber: 139,
                                                            columnNumber: 383
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/studio/app/page.tsx",
                                                    lineNumber: 139,
                                                    columnNumber: 300
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/studio/app/page.tsx",
                                            lineNumber: 139,
                                            columnNumber: 152
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "preview-tools",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "btn preview-tool " + (editScenePosition ? "active" : ""),
                                                    disabled: !detail,
                                                    onClick: ()=>{
                                                        player.current?.pause();
                                                        setEditScenePosition((v)=>!v);
                                                        setTab("animation");
                                                    },
                                                    children: editScenePosition ? "Terminer le déplacement" : "Déplacer la scène"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/studio/app/page.tsx",
                                                    lineNumber: 140,
                                                    columnNumber: 36
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "btn preview-tool " + (showSpatialPath ? "active" : ""),
                                                    disabled: !detail,
                                                    onClick: ()=>{
                                                        player.current?.pause();
                                                        setEditScenePosition(false);
                                                        setShowSpatialPath((v)=>!v);
                                                        setTab("animation");
                                                    },
                                                    children: showSpatialPath ? "Masquer la trajectoire" : "Trajectoire X/Y"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/studio/app/page.tsx",
                                                    lineNumber: 140,
                                                    columnNumber: 289
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/studio/app/page.tsx",
                                            lineNumber: 140,
                                            columnNumber: 5
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "preview-area",
                                            children: detail ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "preview-player",
                                                style: {
                                                    position: "relative"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$remotion$2b$player$40$4$2e$0$2e$535_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f40$remotion$2f$player$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Player"], {
                                                        ref: player,
                                                        component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$composition$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Promo"],
                                                        inputProps: props,
                                                        compositionWidth: dims.width,
                                                        compositionHeight: dims.height,
                                                        fps: fps,
                                                        durationInFrames: Math.ceil(duration * fps),
                                                        style: {
                                                            width: "100%",
                                                            maxWidth: "100%",
                                                            aspectRatio: dims.width + "/" + dims.height,
                                                            display: "block"
                                                        }
                                                    }, selected + format, false, {
                                                        fileName: "[project]/apps/studio/app/page.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 667
                                                    }, this),
                                                    editScenePosition && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$app$2f$scene$2d$position$2d$overlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScenePositionOverlay"], {
                                                        tracks: settings.animationTracks,
                                                        time: playhead,
                                                        width: dims.width,
                                                        height: dims.height,
                                                        onChange: (animationTracks)=>patch({
                                                                animationTracks
                                                            })
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/studio/app/page.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 977
                                                    }, this),
                                                    showSpatialPath && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$app$2f$spatial$2d$path$2d$overlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpatialPathOverlay"], {
                                                        tracks: settings.animationTracks,
                                                        handles: settings.spatialHandles,
                                                        time: playhead,
                                                        width: dims.width,
                                                        height: dims.height,
                                                        onChange: (animationTracks)=>patch({
                                                                animationTracks
                                                            }),
                                                        onHandlesChange: (spatialHandles)=>patch({
                                                                spatialHandles
                                                            }),
                                                        onGestureStart: beginTransaction,
                                                        onGestureEnd: endTransaction,
                                                        onSeek: seek
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/studio/app/page.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 1162
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/studio/app/page.tsx",
                                                lineNumber: 140,
                                                columnNumber: 605
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "empty",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$film$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Film$3e$__["Film"], {
                                                        size: 36
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/studio/app/page.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 1527
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        children: "Sélectionne une capture"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/studio/app/page.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 1544
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: "Enregistre Tilo ou ouvre une vidéo existante."
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/studio/app/page.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 1576
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/studio/app/page.tsx",
                                                lineNumber: 140,
                                                columnNumber: 1504
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/studio/app/page.tsx",
                                            lineNumber: 140,
                                            columnNumber: 567
                                        }, this),
                                        detail && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                padding: "8px 16px",
                                                display: "flex",
                                                gap: 12,
                                                alignItems: "center",
                                                justifyContent: "center"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: detail.video,
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    style: {
                                                        color: "#a5baff"
                                                    },
                                                    children: "Ouvrir la capture brute"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/studio/app/page.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 114
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: "#9cadc9"
                                                    },
                                                    children: [
                                                        detail.events.length,
                                                        " événements"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/studio/app/page.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 223
                                                }, this),
                                                mediaError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    role: "alert",
                                                    style: {
                                                        color: "#ffa7a7"
                                                    },
                                                    children: mediaError
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/studio/app/page.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 308
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/studio/app/page.tsx",
                                            lineNumber: 141,
                                            columnNumber: 14
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "transport",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "btn icon",
                                                    disabled: !detail,
                                                    onClick: ()=>seek(playhead - 1),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                        size: 18
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/studio/app/page.tsx",
                                                        lineNumber: 142,
                                                        columnNumber: 111
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/studio/app/page.tsx",
                                                    lineNumber: 142,
                                                    columnNumber: 32
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "btn primary icon",
                                                    disabled: !detail,
                                                    onClick: ()=>playing ? player.current?.pause() : player.current?.play(),
                                                    children: playing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/studio/app/page.tsx",
                                                        lineNumber: 142,
                                                        columnNumber: 278
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/studio/app/page.tsx",
                                                        lineNumber: 142,
                                                        columnNumber: 297
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/studio/app/page.tsx",
                                                    lineNumber: 142,
                                                    columnNumber: 144
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "btn icon",
                                                    disabled: !detail,
                                                    onClick: ()=>seek(playhead + 1),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                        size: 18
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/studio/app/page.tsx",
                                                        lineNumber: 142,
                                                        columnNumber: 403
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/studio/app/page.tsx",
                                                    lineNumber: 142,
                                                    columnNumber: 324
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "muted",
                                                    children: [
                                                        playhead.toFixed(2),
                                                        " / ",
                                                        duration.toFixed(2),
                                                        " s"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/studio/app/page.tsx",
                                                    lineNumber: 142,
                                                    columnNumber: 437
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/studio/app/page.tsx",
                                            lineNumber: 142,
                                            columnNumber: 5
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "timeline",
                                            style: {
                                                height: timelineHeight
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    role: "separator",
                                                    "aria-label": "Redimensionner la timeline",
                                                    "aria-orientation": "horizontal",
                                                    tabIndex: 0,
                                                    className: "timeline-resize-handle",
                                                    onKeyDown: (e)=>{
                                                        if (e.key === "ArrowUp" || e.key === "ArrowDown") {
                                                            e.preventDefault();
                                                            setTimelineHeight((v)=>{
                                                                const next = Math.max(160, Math.min(600, v + (e.key === "ArrowUp" ? 20 : -20)));
                                                                localStorage.setItem("tilo:studio:timeline-height", String(next));
                                                                return next;
                                                            });
                                                        }
                                                    },
                                                    onPointerDown: (e)=>{
                                                        e.preventDefault();
                                                        const originY = e.clientY, initial = timelineHeight;
                                                        const move = (ev)=>setTimelineHeight(Math.max(160, Math.min(600, initial + originY - ev.clientY)));
                                                        const end = (ev)=>{
                                                            const h = Math.max(160, Math.min(600, initial + originY - ev.clientY));
                                                            setTimelineHeight(h);
                                                            localStorage.setItem("tilo:studio:timeline-height", String(h));
                                                            window.removeEventListener("pointermove", move);
                                                            window.removeEventListener("pointerup", end);
                                                        };
                                                        window.addEventListener("pointermove", move);
                                                        window.addEventListener("pointerup", end);
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/studio/app/page.tsx",
                                                    lineNumber: 143,
                                                    columnNumber: 63
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "timeline-head",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "inline",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: "Timeline"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/studio/app/page.tsx",
                                                                    lineNumber: 143,
                                                                    columnNumber: 1052
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "pill",
                                                                    children: [
                                                                        fps,
                                                                        " FPS"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/apps/studio/app/page.tsx",
                                                                    lineNumber: 143,
                                                                    columnNumber: 1077
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$app$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                                    content: "Annuler · ⌘Z",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        className: "btn icon",
                                                                        "aria-label": "Annuler",
                                                                        disabled: !canUndo,
                                                                        onClick: undo,
                                                                        children: "↶"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/studio/app/page.tsx",
                                                                        lineNumber: 143,
                                                                        columnNumber: 1148
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/studio/app/page.tsx",
                                                                    lineNumber: 143,
                                                                    columnNumber: 1116
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$app$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                                    content: "Rétablir · ⌘⇧Z",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        className: "btn icon",
                                                                        "aria-label": "Rétablir",
                                                                        disabled: !canRedo,
                                                                        onClick: redo,
                                                                        children: "↷"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/studio/app/page.tsx",
                                                                        lineNumber: 143,
                                                                        columnNumber: 1287
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/studio/app/page.tsx",
                                                                    lineNumber: 143,
                                                                    columnNumber: 1253
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$app$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                                    content: "Activer ou désactiver l’aimantation",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        className: "btn " + (snapEnabled ? "active" : ""),
                                                                        onClick: ()=>setSnapEnabled((v)=>!v),
                                                                        children: "⌁ Snap"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/studio/app/page.tsx",
                                                                        lineNumber: 143,
                                                                        columnNumber: 1448
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/studio/app/page.tsx",
                                                                    lineNumber: 143,
                                                                    columnNumber: 1393
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "btn",
                                                                    onClick: ()=>setTimelineZoom((v)=>Math.max(1, v / 1.25)),
                                                                    children: "−"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/studio/app/page.tsx",
                                                                    lineNumber: 143,
                                                                    columnNumber: 1562
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "pill",
                                                                    children: [
                                                                        timelineZoom.toFixed(1),
                                                                        "×"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/apps/studio/app/page.tsx",
                                                                    lineNumber: 143,
                                                                    columnNumber: 1649
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "btn",
                                                                    onClick: ()=>setTimelineZoom((v)=>Math.min(8, v * 1.25)),
                                                                    children: "+"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/studio/app/page.tsx",
                                                                    lineNumber: 143,
                                                                    columnNumber: 1705
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "btn",
                                                                    disabled: !detail,
                                                                    onClick: splitAtPlayhead,
                                                                    children: "✂ Couper"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/studio/app/page.tsx",
                                                                    lineNumber: 143,
                                                                    columnNumber: 1792
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "btn",
                                                                    disabled: !selectedClip,
                                                                    onClick: ()=>{
                                                                        patch({
                                                                            clips: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["arrange"])(ensureClips().filter((c)=>!selectedClips.includes(c.id) && c.id !== selectedClip))
                                                                        });
                                                                        setSelectedClip(null);
                                                                        setSelectedClips([]);
                                                                    },
                                                                    children: "Supprimer"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/studio/app/page.tsx",
                                                                    lineNumber: 143,
                                                                    columnNumber: 1878
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                            lineNumber: 143,
                                                            columnNumber: 1028
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "btn",
                                                            disabled: !detail,
                                                            onClick: addKey,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                    size: 14
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/studio/app/page.tsx",
                                                                    lineNumber: 143,
                                                                    columnNumber: 2170
                                                                }, this),
                                                                " Keyframe caméra"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                            lineNumber: 143,
                                                            columnNumber: 2110
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/studio/app/page.tsx",
                                                    lineNumber: 143,
                                                    columnNumber: 997
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "timeline-scroll",
                                                    style: {
                                                        overflowX: "auto",
                                                        overflowY: "hidden",
                                                        width: "100%"
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "timeline-body",
                                                        style: {
                                                            minWidth: timelineZoom * 100 + "%"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "ruler",
                                                                onPointerDown: (e)=>{
                                                                    if (e.button !== 0) return;
                                                                    const element = e.currentTarget;
                                                                    const r = element.getBoundingClientRect();
                                                                    seek((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$timeline$2d$scale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeFromTimelinePointer"])(e.clientX, r.left, r.width, timelineScaleDuration, duration));
                                                                    element.setPointerCapture(e.pointerId);
                                                                },
                                                                onPointerMove: (e)=>{
                                                                    if (!e.currentTarget.hasPointerCapture(e.pointerId)) return;
                                                                    const r = e.currentTarget.getBoundingClientRect();
                                                                    seek((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$timeline$2d$scale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeFromTimelinePointer"])(e.clientX, r.left, r.width, timelineScaleDuration, duration));
                                                                },
                                                                onPointerUp: (e)=>{
                                                                    if (e.currentTarget.hasPointerCapture(e.pointerId)) e.currentTarget.releasePointerCapture(e.pointerId);
                                                                },
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$timeline$2d$scale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rulerTicks"])(timelineScaleDuration).map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "timeline-ruler-button",
                                                                        style: {
                                                                            left: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$timeline$2d$scale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timelinePercentage"])(t, timelineScaleDuration) + "%"
                                                                        },
                                                                        children: [
                                                                            t,
                                                                            "s"
                                                                        ]
                                                                    }, t, true, {
                                                                        fileName: "[project]/apps/studio/app/page.tsx",
                                                                        lineNumber: 144,
                                                                        columnNumber: 645
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/studio/app/page.tsx",
                                                                lineNumber: 144,
                                                                columnNumber: 6
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "track",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "track-label",
                                                                        children: "Vidéo"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/studio/app/page.tsx",
                                                                        lineNumber: 145,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    activeClips.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$app$2f$video$2d$timeline$2d$clip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VideoTimelineClip"], {
                                                                            clip: c,
                                                                            clips: ensureClips(),
                                                                            index: i,
                                                                            duration: timelineScaleDuration,
                                                                            sourceDuration: sourceDuration,
                                                                            selected: selectedClips.includes(c.id),
                                                                            onChange: (clips)=>patch({
                                                                                    clips
                                                                                }),
                                                                            onDropClip: (from, to)=>patch({
                                                                                    clips: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moveClip"])(ensureClips(), from, to)
                                                                                }),
                                                                            onSelect: (e)=>{
                                                                                if (e.shiftKey || e.metaKey || e.ctrlKey) setSelectedClips((prev)=>prev.includes(c.id) ? prev.filter((id)=>id !== c.id) : [
                                                                                        ...prev,
                                                                                        c.id
                                                                                    ]);
                                                                                else setSelectedClips([
                                                                                    c.id
                                                                                ]);
                                                                                setSelectedClip(c.id);
                                                                            }
                                                                        }, c.id, false, {
                                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                                            lineNumber: 145,
                                                                            columnNumber: 95
                                                                        }, this))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/apps/studio/app/page.tsx",
                                                                lineNumber: 145,
                                                                columnNumber: 6
                                                            }, this),
                                                            settings.audioTracks.map((track)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "track",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "track-label",
                                                                            children: track.kind === "ambience" ? "Ambiance" : "Voix"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                                            lineNumber: 146,
                                                                            columnNumber: 77
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$app$2f$audio$2d$waveform$2d$clip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AudioWaveformClip"], {
                                                                            track: track,
                                                                            recording: selected,
                                                                            movieDuration: duration,
                                                                            scaleDuration: timelineScaleDuration,
                                                                            onSelect: ()=>setTab("audio"),
                                                                            onMove: (start)=>patch({
                                                                                    audioTracks: settings.audioTracks.map((t)=>t.id === track.id ? {
                                                                                            ...t,
                                                                                            start
                                                                                        } : t)
                                                                                }),
                                                                            onTrim: (updated)=>patch({
                                                                                    audioTracks: settings.audioTracks.map((t)=>t.id === track.id ? updated : t)
                                                                                })
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                                            lineNumber: 146,
                                                                            columnNumber: 157
                                                                        }, this)
                                                                    ]
                                                                }, track.id, true, {
                                                                    fileName: "[project]/apps/studio/app/page.tsx",
                                                                    lineNumber: 146,
                                                                    columnNumber: 39
                                                                }, this)),
                                                            settings.animationTracks.map((track)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$app$2f$property$2d$timeline$2d$track$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PropertyTimelineTrack"], {
                                                                    track: track,
                                                                    tracks: settings.animationTracks,
                                                                    duration: timelineScaleDuration,
                                                                    onChange: (animationTracks)=>patch({
                                                                            animationTracks
                                                                        }),
                                                                    onSelect: (property, index)=>{
                                                                        setSelectedPropertyKey({
                                                                            property,
                                                                            index
                                                                        });
                                                                        setTab("animation");
                                                                    }
                                                                }, track.id, false, {
                                                                    fileName: "[project]/apps/studio/app/page.tsx",
                                                                    lineNumber: 147,
                                                                    columnNumber: 43
                                                                }, this)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "track",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "track-label",
                                                                        children: "Caméra"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/studio/app/page.tsx",
                                                                        lineNumber: 148,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    keys.map((k, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            className: "keyframe " + (selectedKey === i ? "selected" : ""),
                                                                            onPointerDown: (e)=>dragKey(i, e),
                                                                            title: k.t.toFixed(2) + "s / " + k.scale.toFixed(2) + "×",
                                                                            style: {
                                                                                left: Math.min(100, k.t / timelineScaleDuration * 100) + "%"
                                                                            },
                                                                            onClick: ()=>{
                                                                                if (settings.camera.length) setSelectedKey(i);
                                                                                seek(k.t);
                                                                            }
                                                                        }, i, false, {
                                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                                            lineNumber: 148,
                                                                            columnNumber: 89
                                                                        }, this))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/apps/studio/app/page.tsx",
                                                                lineNumber: 148,
                                                                columnNumber: 6
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "track",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "track-label",
                                                                        children: "Clics"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/studio/app/page.tsx",
                                                                        lineNumber: 149,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    (detail?.events || []).filter((e)=>e.type === "click").map((e, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            className: "keyframe",
                                                                            style: {
                                                                                left: Math.min(100, e.t / timelineScaleDuration * 100) + "%",
                                                                                background: "#62c3af"
                                                                            },
                                                                            title: e.t.toFixed(2) + "s",
                                                                            onClick: ()=>seek(e.t)
                                                                        }, i, false, {
                                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                                            lineNumber: 149,
                                                                            columnNumber: 132
                                                                        }, this))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/apps/studio/app/page.tsx",
                                                                lineNumber: 149,
                                                                columnNumber: 6
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$app$2f$timeline$2d$playhead$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TimelinePlayhead"], {
                                                                time: playhead,
                                                                movieDuration: duration,
                                                                scaleDuration: timelineScaleDuration,
                                                                onSeek: seek
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/studio/app/page.tsx",
                                                                lineNumber: 150,
                                                                columnNumber: 6
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/studio/app/page.tsx",
                                                        lineNumber: 143,
                                                        columnNumber: 2310
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/studio/app/page.tsx",
                                                    lineNumber: 143,
                                                    columnNumber: 2218
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/studio/app/page.tsx",
                                            lineNumber: 143,
                                            columnNumber: 5
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/studio/app/page.tsx",
                                    lineNumber: 139,
                                    columnNumber: 128
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/studio/app/page.tsx",
                                lineNumber: 139,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$resizable$2d$panels$2f$resizable$2d$panels$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResizablePanel"], {
                                id: "inspector",
                                label: "Inspecteur",
                                defaultSize: paneSizes[2],
                                minSize: 245,
                                collapsible: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                    className: "inspector",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pane-header inline",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings2$3e$__["Settings2"], {
                                                    size: 15
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/studio/app/page.tsx",
                                                    lineNumber: 153,
                                                    columnNumber: 189
                                                }, this),
                                                " INSPECTEUR"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/studio/app/page.tsx",
                                            lineNumber: 153,
                                            columnNumber: 153
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pane-content",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$tabs$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tabs"], {
                                                    value: tab,
                                                    onValueChange: (v)=>setTab(v),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$tabs$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsList"], {
                                                        children: [
                                                            "camera",
                                                            "scene",
                                                            "cursor",
                                                            "environment",
                                                            "background",
                                                            "audio",
                                                            "animation",
                                                            "style",
                                                            "titles"
                                                        ].map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$tabs$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                                                value: v,
                                                                children: {
                                                                    camera: "Caméra",
                                                                    scene: "Scène",
                                                                    cursor: "Curseur",
                                                                    environment: "Lumière",
                                                                    background: "Fond",
                                                                    audio: "Audio",
                                                                    animation: "Animation",
                                                                    style: "Style",
                                                                    titles: "Titres"
                                                                }[v]
                                                            }, v, false, {
                                                                fileName: "[project]/apps/studio/app/page.tsx",
                                                                lineNumber: 153,
                                                                columnNumber: 446
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/studio/app/page.tsx",
                                                        lineNumber: 153,
                                                        columnNumber: 322
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/studio/app/page.tsx",
                                                    lineNumber: 153,
                                                    columnNumber: 258
                                                }, this),
                                                tab === "camera" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "section-title",
                                                            children: "Zoom & Camera"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                            lineNumber: 154,
                                                            columnNumber: 24
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "tabbar",
                                                            children: [
                                                                "auto",
                                                                "manual",
                                                                "animate"
                                                            ].map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "tab " + (settings.advancedCamera.mode === v ? "active" : ""),
                                                                    onClick: ()=>updateAdvancedCamera({
                                                                            mode: v
                                                                        }),
                                                                    children: v
                                                                }, v, false, {
                                                                    fileName: "[project]/apps/studio/app/page.tsx",
                                                                    lineNumber: 154,
                                                                    columnNumber: 145
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                            lineNumber: 154,
                                                            columnNumber: 74
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$slider$2f$slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                                                            label: "Zoom amount",
                                                            min: 1,
                                                            max: 3,
                                                            step: .05,
                                                            value: settings.advancedCamera.amount,
                                                            onValueChange: (amount)=>updateAdvancedCamera({
                                                                    amount
                                                                }),
                                                            format: (v)=>v.toFixed(2) + "×"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                            lineNumber: 154,
                                                            columnNumber: 292
                                                        }, this),
                                                        settings.advancedCamera.mode === "manual" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "hint",
                                                                    children: "Cible manuelle : coordonnées normalisées de la capture."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/studio/app/page.tsx",
                                                                    lineNumber: 154,
                                                                    columnNumber: 518
                                                                }, this),
                                                                [
                                                                    "targetX",
                                                                    "targetY"
                                                                ].map((k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "field",
                                                                        children: [
                                                                            k,
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$slider$2f$slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                                                                                label: k,
                                                                                min: 0,
                                                                                max: 1,
                                                                                step: .01,
                                                                                value: settings.advancedCamera[k],
                                                                                onValueChange: (v)=>updateAdvancedCamera({
                                                                                        [k]: v
                                                                                    })
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/apps/studio/app/page.tsx",
                                                                                lineNumber: 154,
                                                                                columnNumber: 674
                                                                            }, this)
                                                                        ]
                                                                    }, k, true, {
                                                                        fileName: "[project]/apps/studio/app/page.tsx",
                                                                        lineNumber: 154,
                                                                        columnNumber: 638
                                                                    }, this))
                                                            ]
                                                        }, void 0, true),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "divider"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                            lineNumber: 154,
                                                            columnNumber: 821
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "section-title",
                                                            children: "3D Rotation"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                            lineNumber: 154,
                                                            columnNumber: 847
                                                        }, this),
                                                        [
                                                            "tiltX",
                                                            "tiltY",
                                                            "spinZ"
                                                        ].map((k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "field",
                                                                children: [
                                                                    k,
                                                                    " · ",
                                                                    settings.advancedCamera[k],
                                                                    "°",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$slider$2f$slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                                                                        label: k,
                                                                        min: -45,
                                                                        max: 45,
                                                                        value: settings.advancedCamera[k],
                                                                        onValueChange: (v)=>updateAdvancedCamera({
                                                                                [k]: v
                                                                            }),
                                                                        format: (v)=>v + "°"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/studio/app/page.tsx",
                                                                        lineNumber: 154,
                                                                        columnNumber: 1008
                                                                    }, this)
                                                                ]
                                                            }, k, true, {
                                                                fileName: "[project]/apps/studio/app/page.tsx",
                                                                lineNumber: 154,
                                                                columnNumber: 940
                                                            }, this)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "divider"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                            lineNumber: 154,
                                                            columnNumber: 1161
                                                        }, this)
                                                    ]
                                                }, void 0, true),
                                                tab === "camera" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "toggle",
                                                            children: [
                                                                "Zoom automatique",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$switch$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Switch"], {
                                                                    "aria-label": "Zoom automatique",
                                                                    checked: settings.autoZoom,
                                                                    onCheckedChange: (v)=>patch({
                                                                            autoZoom: v
                                                                        })
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/studio/app/page.tsx",
                                                                    lineNumber: 155,
                                                                    columnNumber: 64
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                            lineNumber: 155,
                                                            columnNumber: 24
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$slider$2f$slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                                                            label: "Zoom global",
                                                            min: 1,
                                                            max: 1.7,
                                                            step: .01,
                                                            value: settings.zoom,
                                                            onValueChange: (zoom)=>patch({
                                                                    zoom
                                                                }),
                                                            format: (v)=>v.toFixed(2) + "×"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                            lineNumber: 155,
                                                            columnNumber: 181
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "toggle",
                                                            children: [
                                                                "Curseur animé",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$switch$2f$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Switch"], {
                                                                    "aria-label": "Curseur animé",
                                                                    checked: settings.cursor,
                                                                    onCheckedChange: (v)=>patch({
                                                                            cursor: v
                                                                        })
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/studio/app/page.tsx",
                                                                    lineNumber: 155,
                                                                    columnNumber: 366
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                            lineNumber: 155,
                                                            columnNumber: 329
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "divider"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                            lineNumber: 155,
                                                            columnNumber: 476
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "section-title",
                                                            children: "Keyframe sélectionnée"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                            lineNumber: 155,
                                                            columnNumber: 502
                                                        }, this),
                                                        selectedKey !== null && settings.camera[selectedKey] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "field",
                                                                    children: [
                                                                        "Temps (s)",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "number",
                                                                            min: "0",
                                                                            max: duration,
                                                                            step: ".05",
                                                                            value: settings.camera[selectedKey].t,
                                                                            onChange: (e)=>editKey(selectedKey, {
                                                                                    t: Number(e.target.value)
                                                                                })
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                                            lineNumber: 155,
                                                                            columnNumber: 646
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/apps/studio/app/page.tsx",
                                                                    lineNumber: 155,
                                                                    columnNumber: 612
                                                                }, this),
                                                                [
                                                                    "x",
                                                                    "y",
                                                                    "scale"
                                                                ].map((k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "field",
                                                                        children: [
                                                                            k,
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "number",
                                                                                min: k === "scale" ? 1 : 0,
                                                                                max: k === "scale" ? 2 : 1,
                                                                                step: ".05",
                                                                                value: settings.camera[selectedKey][k],
                                                                                onChange: (e)=>editKey(selectedKey, {
                                                                                        [k]: Number(e.target.value)
                                                                                    })
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/apps/studio/app/page.tsx",
                                                                                lineNumber: 155,
                                                                                columnNumber: 884
                                                                            }, this)
                                                                        ]
                                                                    }, k, true, {
                                                                        fileName: "[project]/apps/studio/app/page.tsx",
                                                                        lineNumber: 155,
                                                                        columnNumber: 848
                                                                    }, this)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "btn danger",
                                                                    onClick: ()=>{
                                                                        patch({
                                                                            camera: settings.camera.filter((_, i)=>i !== selectedKey)
                                                                        });
                                                                        setSelectedKey(null);
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                            size: 14
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                                            lineNumber: 155,
                                                                            columnNumber: 1206
                                                                        }, this),
                                                                        " Supprimer"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/apps/studio/app/page.tsx",
                                                                    lineNumber: 155,
                                                                    columnNumber: 1075
                                                                }, this)
                                                            ]
                                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "hint",
                                                            children: "Clique sur un keyframe dans la timeline pour modifier son cadrage."
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                            lineNumber: 155,
                                                            columnNumber: 1248
                                                        }, this)
                                                    ]
                                                }, void 0, true),
                                                tab === "scene" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "section-title",
                                                            children: "Montage vidéo"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                            lineNumber: 156,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "hint",
                                                            children: "Sélectionne un clip sur la piste Vidéo pour le découper, le raccourcir ou le déplacer."
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                            lineNumber: 156,
                                                            columnNumber: 73
                                                        }, this),
                                                        selectedClip && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "inline",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            className: "btn",
                                                                            onClick: ()=>changeTrim("left", .25),
                                                                            children: "Début +0,25 s"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                                            lineNumber: 156,
                                                                            columnNumber: 224
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            className: "btn",
                                                                            onClick: ()=>changeTrim("right", -.25),
                                                                            children: "Fin −0,25 s"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                                            lineNumber: 156,
                                                                            columnNumber: 307
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/apps/studio/app/page.tsx",
                                                                    lineNumber: 156,
                                                                    columnNumber: 200
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "inline",
                                                                    style: {
                                                                        marginTop: 8
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            className: "btn",
                                                                            onClick: ()=>patch({
                                                                                    clips: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moveClip"])(ensureClips(), activeClips.findIndex((c)=>c.id === selectedClip), Math.max(0, activeClips.findIndex((c)=>c.id === selectedClip) - 1))
                                                                                }),
                                                                            children: "←"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                                            lineNumber: 156,
                                                                            columnNumber: 442
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            className: "btn",
                                                                            onClick: ()=>patch({
                                                                                    clips: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moveClip"])(ensureClips(), activeClips.findIndex((c)=>c.id === selectedClip), Math.min(activeClips.length - 1, activeClips.findIndex((c)=>c.id === selectedClip) + 1))
                                                                                }),
                                                                            children: "→"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                                            lineNumber: 156,
                                                                            columnNumber: 635
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/apps/studio/app/page.tsx",
                                                                    lineNumber: 156,
                                                                    columnNumber: 396
                                                                }, this)
                                                            ]
                                                        }, void 0, true),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "divider"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                            lineNumber: 156,
                                                            columnNumber: 857
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$select$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                                            label: "Ajustement",
                                                            value: settings.scene.fit,
                                                            onValueChange: (fit)=>patch({
                                                                    scene: {
                                                                        ...settings.scene,
                                                                        fit: fit
                                                                    }
                                                                }),
                                                            options: [
                                                                {
                                                                    value: "contain",
                                                                    label: "Tout afficher"
                                                                },
                                                                {
                                                                    value: "cover",
                                                                    label: "Remplir / recadrer"
                                                                }
                                                            ]
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                            lineNumber: 156,
                                                            columnNumber: 883
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "field",
                                                            children: [
                                                                "Échelle : ",
                                                                settings.scene.scale.toFixed(2),
                                                                "×",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$slider$2f$slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                                                                    label: "Échelle",
                                                                    min: .5,
                                                                    max: 1.5,
                                                                    step: .01,
                                                                    value: settings.scene.scale,
                                                                    onValueChange: (scale)=>patch({
                                                                            scene: {
                                                                                ...settings.scene,
                                                                                scale
                                                                            }
                                                                        })
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/studio/app/page.tsx",
                                                                    lineNumber: 156,
                                                                    columnNumber: 1193
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                            lineNumber: 156,
                                                            columnNumber: 1124
                                                        }, this),
                                                        [
                                                            "offsetX",
                                                            "offsetY"
                                                        ].map((k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "field",
                                                                children: [
                                                                    k === "offsetX" ? "Position horizontale" : "Position verticale",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$slider$2f$slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                                                                        label: k,
                                                                        min: -1,
                                                                        max: 1,
                                                                        step: .01,
                                                                        value: settings.scene[k],
                                                                        onValueChange: (v)=>patch({
                                                                                scene: {
                                                                                    ...settings.scene,
                                                                                    [k]: v
                                                                                }
                                                                            })
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/studio/app/page.tsx",
                                                                        lineNumber: 156,
                                                                        columnNumber: 1485
                                                                    }, this)
                                                                ]
                                                            }, k, true, {
                                                                fileName: "[project]/apps/studio/app/page.tsx",
                                                                lineNumber: 156,
                                                                columnNumber: 1393
                                                            }, this))
                                                    ]
                                                }, void 0, true),
                                                tab === "cursor" && detail && detail.events.filter((e)=>e.type === "move" || e.type === "click").length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    role: "status",
                                                    className: "hint",
                                                    children: "Aucun mouvement de souris enregistré dans cette capture. Vérifie events.json ou réalise une nouvelle capture en déplaçant le pointeur."
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/studio/app/page.tsx",
                                                    lineNumber: 157,
                                                    columnNumber: 101
                                                }, this),
                                                tab === "cursor" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "section-title",
                                                            children: "Cursor"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                            lineNumber: 158,
                                                            columnNumber: 24
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "toggle",
                                                            children: [
                                                                "Afficher le curseur",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "checkbox",
                                                                    checked: settings.cursorSettings.visible,
                                                                    onChange: (e)=>updateCursor({
                                                                            visible: e.target.checked
                                                                        })
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/studio/app/page.tsx",
                                                                    lineNumber: 158,
                                                                    columnNumber: 112
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                            lineNumber: 158,
                                                            columnNumber: 67
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "toggle",
                                                            children: [
                                                                "Masquer à l'arrêt",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "checkbox",
                                                                    checked: settings.cursorSettings.hideWhenIdle,
                                                                    onChange: (e)=>updateCursor({
                                                                            hideWhenIdle: e.target.checked
                                                                        })
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/studio/app/page.tsx",
                                                                    lineNumber: 158,
                                                                    columnNumber: 284
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                            lineNumber: 158,
                                                            columnNumber: 241
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "section-title",
                                                            children: "Style"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                            lineNumber: 158,
                                                            columnNumber: 423
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                display: "grid",
                                                                gridTemplateColumns: "repeat(3,minmax(0,1fr))",
                                                                gap: 6
                                                            },
                                                            children: [
                                                                "default",
                                                                "white",
                                                                "hand",
                                                                "circle",
                                                                "modern",
                                                                "retro"
                                                            ].map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "btn",
                                                                    style: {
                                                                        borderColor: settings.cursorSettings.style === v ? "#8da2ff" : undefined,
                                                                        background: settings.cursorSettings.style === v ? "#2d426d" : undefined,
                                                                        flexDirection: "column",
                                                                        padding: "14px 2px",
                                                                        textTransform: "capitalize"
                                                                    },
                                                                    onClick: ()=>updateCursor({
                                                                            style: v
                                                                        }),
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$3$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mouse$2d$pointer$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MousePointer2$3e$__["MousePointer2"], {
                                                                            size: 22
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                                            lineNumber: 158,
                                                                            columnNumber: 899
                                                                        }, this),
                                                                        v
                                                                    ]
                                                                }, v, true, {
                                                                    fileName: "[project]/apps/studio/app/page.tsx",
                                                                    lineNumber: 158,
                                                                    columnNumber: 619
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                            lineNumber: 158,
                                                            columnNumber: 465
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "field",
                                                            style: {
                                                                marginTop: 16
                                                            },
                                                            children: [
                                                                "Taille : ",
                                                                settings.cursorSettings.size.toFixed(1),
                                                                "×",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$slider$2f$slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                                                                    label: "Taille du curseur",
                                                                    min: .5,
                                                                    max: 3,
                                                                    step: .1,
                                                                    value: settings.cursorSettings.size,
                                                                    onValueChange: (size)=>updateCursor({
                                                                            size
                                                                        })
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/studio/app/page.tsx",
                                                                    lineNumber: 158,
                                                                    columnNumber: 1044
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                            lineNumber: 158,
                                                            columnNumber: 945
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "divider"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                            lineNumber: 158,
                                                            columnNumber: 1197
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "section-title",
                                                            children: "Effet de clic"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                            lineNumber: 158,
                                                            columnNumber: 1223
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "tabbar",
                                                            children: [
                                                                "none",
                                                                "ripple",
                                                                "pulse",
                                                                "confetti"
                                                            ].map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "tab " + (settings.cursorSettings.clickEffect === v ? "active" : ""),
                                                                    onClick: ()=>updateCursor({
                                                                            clickEffect: v
                                                                        }),
                                                                    children: v
                                                                }, v, false, {
                                                                    fileName: "[project]/apps/studio/app/page.tsx",
                                                                    lineNumber: 158,
                                                                    columnNumber: 1353
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                            lineNumber: 158,
                                                            columnNumber: 1273
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "section-title",
                                                            children: "Mouvement"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                            lineNumber: 158,
                                                            columnNumber: 1506
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "tabbar",
                                                            children: [
                                                                "precise",
                                                                "subtle",
                                                                "smooth",
                                                                "fluid"
                                                            ].map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "tab " + (settings.cursorSettings.movement === v ? "active" : ""),
                                                                    onClick: ()=>updateCursor({
                                                                            movement: v
                                                                        }),
                                                                    children: v
                                                                }, v, false, {
                                                                    fileName: "[project]/apps/studio/app/page.tsx",
                                                                    lineNumber: 158,
                                                                    columnNumber: 1633
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                            lineNumber: 158,
                                                            columnNumber: 1552
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "hint",
                                                            children: "Les réglages s'appliquent à la prévisualisation et à l'export."
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                            lineNumber: 158,
                                                            columnNumber: 1780
                                                        }, this)
                                                    ]
                                                }, void 0, true),
                                                tab === "environment" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "section-title",
                                                            children: "Video Frame"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                            lineNumber: 159,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$slider$2f$slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                                                            label: "Padding",
                                                            min: 0,
                                                            max: 220,
                                                            value: settings.environment.padding,
                                                            onValueChange: (padding)=>updateEnvironment({
                                                                    padding
                                                                }),
                                                            format: (v)=>v + " px"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                            lineNumber: 159,
                                                            columnNumber: 77
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$slider$2f$slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                                                            label: "Radius",
                                                            min: 0,
                                                            max: 70,
                                                            value: settings.environment.radius,
                                                            onValueChange: (radius)=>updateEnvironment({
                                                                    radius
                                                                }),
                                                            format: (v)=>v + " px"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                            lineNumber: 159,
                                                            columnNumber: 234
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "divider"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                            lineNumber: 159,
                                                            columnNumber: 386
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "section-title",
                                                            children: "Light & Shadow"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                            lineNumber: 159,
                                                            columnNumber: 412
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                display: "grid",
                                                                gridTemplateColumns: "repeat(3,minmax(0,1fr))",
                                                                gap: 6
                                                            },
                                                            children: [
                                                                "none",
                                                                "window",
                                                                "blinds",
                                                                "rays",
                                                                "lattice",
                                                                "foliage",
                                                                "curtain"
                                                            ].map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "btn",
                                                                    style: {
                                                                        borderColor: settings.environment.light === v ? "#8da2ff" : undefined,
                                                                        background: settings.environment.light === v ? "#2d426d" : undefined,
                                                                        textTransform: "capitalize",
                                                                        padding: "15px 3px"
                                                                    },
                                                                    onClick: ()=>updateEnvironment({
                                                                            light: v
                                                                        }),
                                                                    children: v
                                                                }, v, false, {
                                                                    fileName: "[project]/apps/studio/app/page.tsx",
                                                                    lineNumber: 159,
                                                                    columnNumber: 628
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                            lineNumber: 159,
                                                            columnNumber: 463
                                                        }, this),
                                                        [
                                                            "opacity",
                                                            "softness",
                                                            "vignette",
                                                            "depth"
                                                        ].map((k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "field",
                                                                style: {
                                                                    marginTop: 12,
                                                                    textTransform: "capitalize"
                                                                },
                                                                children: [
                                                                    k,
                                                                    " · ",
                                                                    Math.round(settings.environment[k] * 100),
                                                                    "%",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$slider$2f$slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                                                                        label: k,
                                                                        min: 0,
                                                                        max: 1,
                                                                        step: .01,
                                                                        value: settings.environment[k],
                                                                        onValueChange: (v)=>updateEnvironment({
                                                                                [k]: v
                                                                            }),
                                                                        format: (v)=>Math.round(v * 100) + "%"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/studio/app/page.tsx",
                                                                        lineNumber: 159,
                                                                        columnNumber: 1096
                                                                    }, this)
                                                                ]
                                                            }, k, true, {
                                                                fileName: "[project]/apps/studio/app/page.tsx",
                                                                lineNumber: 159,
                                                                columnNumber: 965
                                                            }, this)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "field",
                                                            children: [
                                                                "Light angle · ",
                                                                settings.environment.angle,
                                                                "°",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$slider$2f$slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                                                                    label: "Angle lumière",
                                                                    min: -180,
                                                                    max: 180,
                                                                    value: settings.environment.angle,
                                                                    onValueChange: (angle)=>updateEnvironment({
                                                                            angle
                                                                        })
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/studio/app/page.tsx",
                                                                    lineNumber: 159,
                                                                    columnNumber: 1335
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                            lineNumber: 159,
                                                            columnNumber: 1267
                                                        }, this)
                                                    ]
                                                }, void 0, true),
                                                tab === "background" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "section-title",
                                                            children: "Canvas & Background"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                            lineNumber: 160,
                                                            columnNumber: 28
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "tabbar",
                                                            children: [
                                                                "color",
                                                                "gradient",
                                                                "preset"
                                                            ].map((mode)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "tab " + (settings.canvasBackground.mode === mode ? "active" : ""),
                                                                    onClick: ()=>updateBackground({
                                                                            mode
                                                                        }),
                                                                    children: mode
                                                                }, mode, false, {
                                                                    fileName: "[project]/apps/studio/app/page.tsx",
                                                                    lineNumber: 160,
                                                                    columnNumber: 160
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                            lineNumber: 160,
                                                            columnNumber: 84
                                                        }, this),
                                                        settings.canvasBackground.mode === "preset" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "section-title",
                                                                    children: "Background presets"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/studio/app/page.tsx",
                                                                    lineNumber: 160,
                                                                    columnNumber: 358
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "background-grid",
                                                                    children: Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backgrounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["presetColors"]).map((preset)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            className: "background-tile " + (settings.canvasBackground.preset === preset ? "selected" : ""),
                                                                            onClick: ()=>updateBackground({
                                                                                    preset
                                                                                }),
                                                                            "aria-label": "Fond " + preset,
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "background-swatch",
                                                                                    style: {
                                                                                        background: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backgrounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["backgroundCSS"])({
                                                                                            ...settings.canvasBackground,
                                                                                            mode: "preset",
                                                                                            preset
                                                                                        })
                                                                                    }
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/apps/studio/app/page.tsx",
                                                                                    lineNumber: 160,
                                                                                    columnNumber: 700
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: preset
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/apps/studio/app/page.tsx",
                                                                                    lineNumber: 160,
                                                                                    columnNumber: 825
                                                                                }, this)
                                                                            ]
                                                                        }, preset, true, {
                                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                                            lineNumber: 160,
                                                                            columnNumber: 521
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/studio/app/page.tsx",
                                                                    lineNumber: 160,
                                                                    columnNumber: 413
                                                                }, this)
                                                            ]
                                                        }, void 0, true),
                                                        settings.canvasBackground.mode !== "preset" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "editor-input-row",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "field",
                                                                    children: [
                                                                        "Couleur 1",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "color",
                                                                            value: settings.canvasBackground.color,
                                                                            onChange: (e)=>updateBackground({
                                                                                    color: e.target.value
                                                                                })
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                                            lineNumber: 160,
                                                                            columnNumber: 979
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/apps/studio/app/page.tsx",
                                                                    lineNumber: 160,
                                                                    columnNumber: 945
                                                                }, this),
                                                                settings.canvasBackground.mode === "gradient" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "field",
                                                                    children: [
                                                                        "Couleur 2",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "color",
                                                                            value: settings.canvasBackground.color2,
                                                                            onChange: (e)=>updateBackground({
                                                                                    color2: e.target.value
                                                                                })
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                                            lineNumber: 160,
                                                                            columnNumber: 1183
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/apps/studio/app/page.tsx",
                                                                    lineNumber: 160,
                                                                    columnNumber: 1149
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                            lineNumber: 160,
                                                            columnNumber: 911
                                                        }, this),
                                                        settings.canvasBackground.mode !== "color" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "field",
                                                            children: [
                                                                "Angle · ",
                                                                settings.canvasBackground.angle,
                                                                "°",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$slider$2f$slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                                                                    label: "Angle fond",
                                                                    min: 0,
                                                                    max: 360,
                                                                    value: settings.canvasBackground.angle,
                                                                    onValueChange: (angle)=>updateBackground({
                                                                            angle
                                                                        })
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/studio/app/page.tsx",
                                                                    lineNumber: 160,
                                                                    columnNumber: 1427
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                            lineNumber: 160,
                                                            columnNumber: 1360
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "divider"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                            lineNumber: 160,
                                                            columnNumber: 1574
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "section-title",
                                                            children: "Preview"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                            lineNumber: 160,
                                                            columnNumber: 1600
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "background-preview",
                                                            style: {
                                                                background: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$backgrounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["backgroundCSS"])(settings.canvasBackground)
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                            lineNumber: 160,
                                                            columnNumber: 1644
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "hint",
                                                            children: "Le fond est appliqué à la scène et au rendu MP4."
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                            lineNumber: 160,
                                                            columnNumber: 1743
                                                        }, this)
                                                    ]
                                                }, void 0, true),
                                                tab === "style" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "field",
                                                            children: [
                                                                "Arrière-plan",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "color",
                                                                    value: settings.background,
                                                                    onChange: (e)=>patch({
                                                                            background: e.target.value
                                                                        })
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/studio/app/page.tsx",
                                                                    lineNumber: 161,
                                                                    columnNumber: 60
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                            lineNumber: 161,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "field",
                                                            children: [
                                                                "Arrondi : ",
                                                                settings.radius,
                                                                "px",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$slider$2f$slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                                                                    label: "Arrondi",
                                                                    min: 0,
                                                                    max: 48,
                                                                    value: settings.radius,
                                                                    onValueChange: (radius)=>patch({
                                                                            radius
                                                                        })
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/studio/app/page.tsx",
                                                                    lineNumber: 161,
                                                                    columnNumber: 220
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                            lineNumber: 161,
                                                            columnNumber: 166
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "toggle",
                                                            children: [
                                                                "Ombre portée",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "checkbox",
                                                                    checked: settings.shadow,
                                                                    onChange: (e)=>patch({
                                                                            shadow: e.target.checked
                                                                        })
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/studio/app/page.tsx",
                                                                    lineNumber: 161,
                                                                    columnNumber: 375
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                            lineNumber: 161,
                                                            columnNumber: 337
                                                        }, this)
                                                    ]
                                                }, void 0, true),
                                                tab === "animation" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$app$2f$animation$2d$inspector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimationInspector"], {
                                                    tracks: settings.animationTracks,
                                                    time: playhead,
                                                    onChange: (animationTracks)=>patch({
                                                            animationTracks
                                                        })
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/studio/app/page.tsx",
                                                    lineNumber: 162,
                                                    columnNumber: 25
                                                }, this),
                                                tab === "animation" && selectedPropertyKey && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "animation-keyframe-options",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "section-title",
                                                            children: "Keyframe sélectionnée"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                            lineNumber: 162,
                                                            columnNumber: 235
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$components$2f$arc$2f$select$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                                            label: "Interpolation",
                                                            value: settings.animationTracks.find((t)=>t.property === selectedPropertyKey.property)?.keyframes[selectedPropertyKey.index]?.easing || "ease-in-out",
                                                            onValueChange: (easing)=>patch({
                                                                    animationTracks: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$property$2d$animation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setPropertyEasing"])(settings.animationTracks, selectedPropertyKey.property, selectedPropertyKey.index, easing)
                                                                }),
                                                            options: [
                                                                {
                                                                    value: "linear",
                                                                    label: "Linéaire"
                                                                },
                                                                {
                                                                    value: "ease-in",
                                                                    label: "Accélération"
                                                                },
                                                                {
                                                                    value: "ease-out",
                                                                    label: "Décélération"
                                                                },
                                                                {
                                                                    value: "ease-in-out",
                                                                    label: "Fluide"
                                                                },
                                                                {
                                                                    value: "bezier",
                                                                    label: "Bézier personnalisée"
                                                                }
                                                            ]
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                            lineNumber: 162,
                                                            columnNumber: 293
                                                        }, this),
                                                        settings.animationTracks.find((t)=>t.property === selectedPropertyKey.property)?.keyframes[selectedPropertyKey.index]?.easing === "bezier" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$app$2f$bezier$2d$curve$2d$editor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BezierCurveEditor"], {
                                                            handles: settings.animationTracks.find((t)=>t.property === selectedPropertyKey.property)?.keyframes[selectedPropertyKey.index]?.bezier ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$bezier$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultBezier"],
                                                            onChange: (handles)=>patch({
                                                                    animationTracks: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$property$2d$animation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setPropertyBezier"])(settings.animationTracks, selectedPropertyKey.property, selectedPropertyKey.index, handles)
                                                                })
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                            lineNumber: 162,
                                                            columnNumber: 1026
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "btn",
                                                            onClick: ()=>{
                                                                patch({
                                                                    animationTracks: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$property$2d$animation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removePropertyKeyframe"])(settings.animationTracks, selectedPropertyKey.property, selectedPropertyKey.index)
                                                                });
                                                                setSelectedPropertyKey(null);
                                                            },
                                                            children: "Supprimer la keyframe"
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                            lineNumber: 162,
                                                            columnNumber: 1347
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/studio/app/page.tsx",
                                                    lineNumber: 162,
                                                    columnNumber: 191
                                                }, this),
                                                tab === "audio" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$app$2f$audio$2d$inspector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AudioInspector"], {
                                                    recording: selected,
                                                    duration: duration,
                                                    tracks: settings.audioTracks,
                                                    onChange: (audioTracks)=>patch({
                                                            audioTracks
                                                        }),
                                                    mixer: settings.audioMixer,
                                                    onMixerChange: (audioMixer)=>patch({
                                                            audioMixer
                                                        })
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/studio/app/page.tsx",
                                                    lineNumber: 163,
                                                    columnNumber: 21
                                                }, this),
                                                tab === "titles" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "field",
                                                            children: [
                                                                "Introduction",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    value: settings.intro,
                                                                    onChange: (e)=>patch({
                                                                            intro: e.target.value
                                                                        })
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/studio/app/page.tsx",
                                                                    lineNumber: 164,
                                                                    columnNumber: 61
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                            lineNumber: 164,
                                                            columnNumber: 24
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "field",
                                                            children: [
                                                                "Conclusion",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    value: settings.outro,
                                                                    onChange: (e)=>patch({
                                                                            outro: e.target.value
                                                                        })
                                                                }, void 0, false, {
                                                                    fileName: "[project]/apps/studio/app/page.tsx",
                                                                    lineNumber: 164,
                                                                    columnNumber: 179
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/studio/app/page.tsx",
                                                            lineNumber: 164,
                                                            columnNumber: 144
                                                        }, this)
                                                    ]
                                                }, void 0, true)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/studio/app/page.tsx",
                                            lineNumber: 153,
                                            columnNumber: 228
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/studio/app/page.tsx",
                                    lineNumber: 153,
                                    columnNumber: 124
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/studio/app/page.tsx",
                                lineNumber: 153,
                                columnNumber: 21
                            }, this)
                        ]
                    }, paneSizes.join("-"), true, {
                        fileName: "[project]/apps/studio/app/page.tsx",
                        lineNumber: 137,
                        columnNumber: 30
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$app$2f$studio$2d$feedback$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StudioToasts"], {
                        notices: notices,
                        dismiss: dismiss
                    }, void 0, false, {
                        fileName: "[project]/apps/studio/app/page.tsx",
                        lineNumber: 166,
                        columnNumber: 3
                    }, this),
                    projectDialog && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$app$2f$studio$2d$feedback$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProjectDialog"], {
                        kind: projectDialog.kind,
                        name: projectDialog.id,
                        initialName: projectDialog.initialName,
                        busy: busy,
                        onCancel: ()=>setProjectDialog(null),
                        onConfirm: (value)=>{
                            const d = projectDialog;
                            setProjectDialog(null);
                            if (d.kind === "delete") void deleteProject(d.id, true);
                            else void duplicateProject(d.id, value);
                        }
                    }, void 0, false, {
                        fileName: "[project]/apps/studio/app/page.tsx",
                        lineNumber: 166,
                        columnNumber: 70
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/studio/app/page.tsx",
                lineNumber: 137,
                columnNumber: 3
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "statusbar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: message
                    }, void 0, false, {
                        fileName: "[project]/apps/studio/app/page.tsx",
                        lineNumber: 167,
                        columnNumber: 39
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$3$2e$0_react$40$19$2e$3$2e$0_$5f$react$40$19$2e$3$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "Local · ",
                            selected || "Aucun projet"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/studio/app/page.tsx",
                        lineNumber: 167,
                        columnNumber: 61
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/studio/app/page.tsx",
                lineNumber: 167,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/studio/app/page.tsx",
        lineNumber: 135,
        columnNumber: 9
    }, this);
}
_s(Home, "qdjzMuZxX49NgFi+wuJpO73mDIE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$studio$2f$app$2f$studio$2d$feedback$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStudioNotices"]
    ];
});
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_7e961132._.js.map