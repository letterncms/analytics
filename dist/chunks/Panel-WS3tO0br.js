import { _ as e, h as t, i as n, l as r, m as i, p as a, r as o, u as s } from "./data-RAdPmcHZ.js";
import { t as c } from "@letterncms/sdk";
import { useEffect as l, useId as u, useRef as d, useState as f } from "react";
import { BarRow as p, Button as m, EmptyState as h, Icon as g, QueryError as _, Section as v, Segmented as y, Skeleton as b, Tooltip as x, cn as S } from "@letterncms/ui";
import { jsx as C, jsxs as w } from "react/jsx-runtime";
// admin/src/Chart.tsx
var T = {
	top: 12,
	right: 12,
	bottom: 28,
	left: 48
};
function E(e, t) {
	if (e <= 0) return t ? [
		0,
		1,
		2
	] : [
		0,
		1,
		2,
		3
	];
	if (t && e < 4) return Array.from({ length: Math.max(2, Math.ceil(e)) + 1 }, (e, t) => t);
	let n = 10 ** Math.floor(Math.log10(e / 4)), r = [
		1,
		2,
		2.5,
		5,
		10,
		20
	].map((e) => e * n).filter((e) => !t || Number.isInteger(e)).map((t) => ({
		step: t,
		count: Math.ceil(e / t)
	})).filter((e) => e.count >= 2 && e.count <= 4).sort((e, t) => e.step * e.count - t.step * t.count || e.count - t.count)[0] ?? {
		step: Math.ceil(e / 3),
		count: 3
	};
	return Array.from({ length: r.count + 1 }, (e, t) => Number((t * r.step).toPrecision(12)));
}
function D({ points: e, previous: t, interval: n = "day", format: r, label: i, height: o = 240, pending: s, whole: p = !1 }) {
	let m = d(null), [h, g] = f(0), [_, v] = f(null), y = u();
	l(() => {
		let e = m.current;
		if (!e) return;
		let t = new ResizeObserver(([e]) => g(e.contentRect.width));
		return t.observe(e), () => t.disconnect();
	}, []);
	let b = e.length, x = e.map((e) => e.value), D = (t ?? []).slice(0, Math.max(b, 1)), O = E(Math.max(...x, ...D.map((e) => e.value), 0), p), k = O[O.length - 1], A = Math.max(0, h - T.left - T.right), j = o - T.top - T.bottom, M = (e) => T.left + (b <= 1 ? A / 2 : e / (b - 1) * A), N = (e) => T.top + j - (k > 0 ? e / k * j : 0), P = e.map((e, t) => `${t ? "L" : "M"}${M(t).toFixed(1)},${N(e.value).toFixed(1)}`).join(""), F = b > 1 ? `${P}L${M(b - 1).toFixed(1)},${N(0)}L${M(0).toFixed(1)},${N(0)}Z` : "", I = D.length > 1 ? D.map((e, t) => `${t ? "L" : "M"}${M(t).toFixed(1)},${N(e.value).toFixed(1)}`).join("") : "", L = Math.max(2, Math.min(b, Math.floor(A / 84))), R = Math.max(1, Math.ceil((b - 1) / Math.max(1, L - 1))), z = Array.from({ length: Math.ceil(b / R) }, (e, t) => b - 1 - t * R).reverse(), B = (e) => {
		let t = e.currentTarget.getBoundingClientRect(), n = (e.clientX - t.left) / Math.max(1, t.width);
		v(Math.max(0, Math.min(b - 1, Math.round(n * (b - 1)))));
	}, V = (e) => {
		(e.key === "ArrowLeft" || e.key === "ArrowRight" || e.key === "Home" || e.key === "End") && (e.preventDefault(), v((t) => {
			if (e.key === "Home") return 0;
			if (e.key === "End") return b - 1;
			let n = t ?? b - 1;
			return Math.max(0, Math.min(b - 1, n + (e.key === "ArrowLeft" ? -1 : 1)));
		}));
	}, H = _ === null ? null : e[_], U = _ === null ? void 0 : D[_], W = b > 0 && H === e[b - 1] && n !== "minute";
	return /* @__PURE__ */ w("div", {
		ref: m,
		className: S("relative select-none transition-opacity duration-move", s && "opacity-60"),
		children: [
			h > 0 && /* @__PURE__ */ w("svg", {
				width: h,
				height: o,
				role: "img",
				"aria-label": i,
				tabIndex: 0,
				onKeyDown: V,
				onBlur: () => v(null),
				className: "block overflow-visible text-ink outline-none focus-visible:[&_.cms-focus]:stroke-focus",
				children: [
					/* @__PURE__ */ C("defs", { children: /* @__PURE__ */ w("linearGradient", {
						id: y,
						x1: "0",
						x2: "0",
						y1: "0",
						y2: "1",
						children: [/* @__PURE__ */ C("stop", {
							offset: "0",
							stopColor: "currentColor",
							stopOpacity: "0.1"
						}), /* @__PURE__ */ C("stop", {
							offset: "1",
							stopColor: "currentColor",
							stopOpacity: "0"
						})]
					}) }),
					O.map((e) => /* @__PURE__ */ w("g", { children: [/* @__PURE__ */ C("line", {
						x1: T.left,
						x2: h - T.right,
						y1: N(e),
						y2: N(e),
						stroke: "var(--cms-border)",
						strokeWidth: 1,
						shapeRendering: "crispEdges"
					}), /* @__PURE__ */ C("text", {
						x: T.left - 10,
						y: N(e),
						dy: "0.32em",
						textAnchor: "end",
						className: "fill-faint text-2xs tabular-nums",
						children: r(e)
					})] }, e)),
					z.map((t) => /* @__PURE__ */ C("text", {
						x: M(t),
						y: o - 8,
						textAnchor: t === 0 && b > 1 ? "start" : t === b - 1 && b > 1 ? "end" : "middle",
						className: "fill-faint text-2xs tabular-nums",
						children: a(e[t].date, n)
					}, t)),
					I && /* @__PURE__ */ C("path", {
						d: I,
						fill: "none",
						stroke: "var(--cms-border-strong)",
						strokeWidth: 1.5,
						strokeDasharray: "4 4",
						strokeLinejoin: "round"
					}),
					F && /* @__PURE__ */ C("path", {
						d: F,
						fill: `url(#${y})`
					}),
					/* @__PURE__ */ C("path", {
						d: P,
						fill: "none",
						stroke: "currentColor",
						strokeWidth: 2,
						strokeLinejoin: "round",
						strokeLinecap: "round"
					}),
					H && _ !== null && /* @__PURE__ */ w("g", {
						pointerEvents: "none",
						children: [/* @__PURE__ */ C("line", {
							className: "cms-focus",
							x1: M(_),
							x2: M(_),
							y1: T.top,
							y2: T.top + j,
							stroke: "var(--cms-border-strong)",
							strokeWidth: 1,
							shapeRendering: "crispEdges"
						}), /* @__PURE__ */ C("circle", {
							cx: M(_),
							cy: N(H.value),
							r: 4,
							fill: "currentColor",
							stroke: "var(--cms-bg)",
							strokeWidth: 2
						})]
					}),
					/* @__PURE__ */ C("rect", {
						x: T.left,
						y: 0,
						width: A,
						height: o,
						fill: "transparent",
						onPointerMove: B,
						onPointerDown: B,
						onPointerLeave: () => v(null)
					})
				]
			}),
			H && _ !== null && /* @__PURE__ */ w("div", {
				role: "status",
				className: "pointer-events-none absolute top-0 z-raised min-w-36 -translate-x-1/2 rounded-md border border-border-float bg-bg px-3 py-2 shadow-pop",
				style: { left: Math.max(T.left + 64, Math.min(h - 64, M(_))) },
				children: [
					/* @__PURE__ */ C("p", {
						className: "m-0 text-2xs text-muted",
						children: W ? c("So far") : a(H.date, n, !0)
					}),
					/* @__PURE__ */ w("p", {
						className: "m-0 mt-1 flex items-center gap-2 text-xs text-muted",
						children: [
							/* @__PURE__ */ C("span", { className: "h-0.5 w-3 rounded-full bg-ink" }),
							/* @__PURE__ */ C("span", {
								className: "text-sm font-semibold tabular-nums text-ink",
								children: r(H.value)
							}),
							i
						]
					}),
					U && /* @__PURE__ */ w("p", {
						className: "m-0 mt-1 flex items-center gap-2 text-xs text-muted",
						children: [
							/* @__PURE__ */ C("span", { className: "w-3 border-t border-dashed border-border-strong" }),
							/* @__PURE__ */ C("span", {
								className: "tabular-nums",
								children: r(U.value)
							}),
							a(U.date, n, !0)
						]
					})
				]
			}),
			/* @__PURE__ */ w("table", {
				className: "sr-only",
				children: [/* @__PURE__ */ C("caption", { children: i }), /* @__PURE__ */ C("tbody", { children: e.map((e) => /* @__PURE__ */ w("tr", { children: [/* @__PURE__ */ C("th", {
					scope: "row",
					children: a(e.date, n, !0)
				}), /* @__PURE__ */ C("td", { children: r(e.value) })] }, e.date)) })]
			})
		]
	});
}
// admin/src/Panel.tsx
var O = () => ({
	visitors: {
		label: c("Visitors"),
		value: (e) => o(e.visitors),
		title: (e) => r(e.visitors)
	},
	views: {
		label: c("Page Views"),
		value: (e) => o(e.views),
		title: (e) => r(e.views)
	},
	share: {
		label: c("Share"),
		value: (e) => s(e.share),
		wide: !0
	},
	time: {
		label: c("Time on Page"),
		value: (e) => n(e.timeOnPage),
		wide: !0
	},
	scroll: {
		label: c("Scroll Depth"),
		value: (e) => e.scrollDepth === null || e.scrollDepth === void 0 ? "–" : s(e.scrollDepth / 100),
		wide: !0
	},
	bounce: {
		label: c("Bounce Rate"),
		value: (e) => s(e.bounceRate),
		wide: !0
	},
	events: {
		label: c("Times"),
		value: (e) => o(e.events),
		title: (e) => r(e.events),
		wide: !0
	},
	conversion: {
		label: c("Conversion Rate"),
		value: (e) => s(e.conversionRate, 1),
		wide: !0
	}
});
function k({ title: n, tabs: r, input: a, limit: o = 8, hideSingle: s = !1 }) {
	let [l, u] = f(r[0].dimension), [d, g] = f(!1), T = r.find((e) => e.dimension === l) ?? r[0], E = d ? 50 : o, D = i(a, T.dimension, E), O = t(), k = D.data?.items ?? [];
	if (s && D.data && !D.isPlaceholderData && k.length <= 1) return null;
	let j = r.length > 1 ? /* @__PURE__ */ C(y, {
		size: "xs",
		"aria-label": n,
		value: T.dimension,
		onChange: (e) => {
			u(e), g(!1);
		},
		options: r.map((e) => ({
			value: e.dimension,
			label: e.label
		}))
	}) : void 0;
	return /* @__PURE__ */ C(v, {
		title: n,
		actions: j,
		className: "@container min-w-0",
		children: D.isError ? /* @__PURE__ */ C(_, {
			compact: !0,
			title: c("Couldn’t load {title}", { title: n.toLowerCase() }),
			onRetry: () => D.refetch(),
			retrying: D.isFetching
		}) : D.data ? k.length === 0 ? /* @__PURE__ */ C(h, {
			compact: !0,
			icon: "chart",
			title: c("No visits in this period")
		}) : /* @__PURE__ */ w("div", {
			className: S("transition-opacity duration-move", D.isPlaceholderData && "opacity-60"),
			children: [
				/* @__PURE__ */ w("div", {
					className: "mb-1 flex items-center gap-3 text-2xs font-medium text-faint",
					children: [/* @__PURE__ */ C("span", {
						className: "flex-1 pl-2",
						children: T.name
					}), /* @__PURE__ */ C(A, {
						columns: T.columns,
						render: (e) => e.label
					})]
				}),
				/* @__PURE__ */ C("ul", {
					className: "m-0 list-none space-y-0.5 p-0",
					children: k.map((t) => {
						let n = e(T.dimension, t), r = T.filter && O.filters.some((e) => e.dimension === T.filter && e.value === t.key && e.op === "is");
						return /* @__PURE__ */ C("li", {
							className: "min-w-0",
							children: /* @__PURE__ */ C(p, {
								label: /* @__PURE__ */ w("span", {
									className: "flex min-w-0 items-baseline gap-2",
									children: [
										/* @__PURE__ */ C("span", {
											className: S("truncate", r && "font-medium"),
											children: n
										}),
										t.path && t.path !== n && /* @__PURE__ */ C("span", {
											className: "hidden shrink truncate font-mono text-2xs text-faint @sm:inline",
											children: t.path
										}),
										t.prop && /* @__PURE__ */ C("span", {
											className: "shrink-0 text-2xs text-faint",
											children: t.prop
										})
									]
								}),
								icon: T.icon?.(t),
								share: t.share,
								value: /* @__PURE__ */ C(A, {
									columns: T.columns,
									item: t,
									render: (e, t) => e.title ? /* @__PURE__ */ C(x, {
										content: e.title(t),
										children: /* @__PURE__ */ C("span", { children: e.value(t) })
									}) : e.value(t)
								}),
								to: T.filter && !r ? O.linkWith({
									dimension: T.filter,
									op: "is",
									value: t.key
								}) : void 0
							})
						}, `${t.key ?? ""}|${t.prop ?? ""}`);
					})
				}),
				(k.length >= E || d) && /* @__PURE__ */ C(m, {
					variant: "ghost",
					size: "sm",
					className: "mt-1",
					onClick: () => g(!d),
					children: c(d ? "Show Fewer" : "Show More")
				})
			]
		}) : /* @__PURE__ */ C("div", {
			className: "space-y-1.5",
			children: Array.from({ length: 5 }, (e, t) => /* @__PURE__ */ C(b, { className: "h-8" }, t))
		})
	});
}
function A({ columns: e, item: t, render: n }) {
	return /* @__PURE__ */ C("span", {
		className: "flex shrink-0 items-center gap-3 pr-1",
		children: e.map((e, r) => /* @__PURE__ */ C("span", {
			className: S("w-16 text-right tabular-nums", e.wide && r > 0 && "hidden @md:inline-block", !e.wide || r === 0 ? "inline-block" : ""),
			children: n(e, t)
		}, e.label))
	});
}
function j({ item: e }) {
	return e.icon ? /* @__PURE__ */ C(g, {
		name: e.icon,
		size: 14,
		className: "shrink-0 text-muted"
	}) : null;
}
export { D as i, k as n, O as r, j as t };
