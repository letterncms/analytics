import { a as e, i as t, n, o as r, r as i, s as a, t as o } from "./data-BTiWt5A4.js";
import { locale as s, setQuery as c, t as l, useLocation as u, useTab as d } from "@letterncms/sdk";
import { useEffect as f, useId as p, useRef as m, useState as h } from "react";
import { Button as g, Segmented as _, Skeleton as v, Stat as y, Tooltip as b, cn as x } from "@letterncms/ui";
import { jsx as S, jsxs as C } from "react/jsx-runtime";
// admin/src/Chart.tsx
var w = {
	top: 12,
	right: 12,
	bottom: 28,
	left: 48
};
function T(e, t) {
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
function E({ points: t, format: n, label: i, height: a = 240, pending: o, whole: s = !1 }) {
	let c = m(null), [u, d] = h(0), [g, _] = h(null), v = p();
	f(() => {
		let e = c.current;
		if (!e) return;
		let t = new ResizeObserver(([e]) => d(e.contentRect.width));
		return t.observe(e), () => t.disconnect();
	}, []);
	let y = t.length, b = t.map((e) => e.value), E = T(Math.max(...b, 0), s), D = E[E.length - 1], O = Math.max(0, u - w.left - w.right), k = a - w.top - w.bottom, A = (e) => w.left + (y <= 1 ? O / 2 : e / (y - 1) * O), j = (e) => w.top + k - (D > 0 ? e / D * k : 0), M = t.map((e, t) => `${t ? "L" : "M"}${A(t).toFixed(1)},${j(e.value).toFixed(1)}`).join(""), N = y > 1 ? `${M}L${A(y - 1).toFixed(1)},${j(0)}L${A(0).toFixed(1)},${j(0)}Z` : "", P = Math.max(2, Math.min(y, Math.floor(O / 84))), F = Math.max(1, Math.ceil((y - 1) / Math.max(1, P - 1))), I = Array.from({ length: Math.ceil(y / F) }, (e, t) => y - 1 - t * F).reverse(), L = (e) => {
		let t = e.currentTarget.getBoundingClientRect(), n = (e.clientX - t.left) / Math.max(1, t.width);
		_(Math.max(0, Math.min(y - 1, Math.round(n * (y - 1)))));
	}, R = (e) => {
		(e.key === "ArrowLeft" || e.key === "ArrowRight" || e.key === "Home" || e.key === "End") && (e.preventDefault(), _((t) => {
			if (e.key === "Home") return 0;
			if (e.key === "End") return y - 1;
			let n = t ?? y - 1;
			return Math.max(0, Math.min(y - 1, n + (e.key === "ArrowLeft" ? -1 : 1)));
		}));
	}, z = g === null ? null : t[g], B = y > 0 && z === t[y - 1];
	return /* @__PURE__ */ C("div", {
		ref: c,
		className: x("relative select-none transition-opacity duration-move", o && "opacity-60"),
		children: [
			u > 0 && /* @__PURE__ */ C("svg", {
				width: u,
				height: a,
				role: "img",
				"aria-label": i,
				tabIndex: 0,
				onKeyDown: R,
				onBlur: () => _(null),
				className: "block overflow-visible text-ink outline-none focus-visible:[&_.cms-focus]:stroke-focus",
				children: [
					/* @__PURE__ */ S("defs", { children: /* @__PURE__ */ C("linearGradient", {
						id: v,
						x1: "0",
						x2: "0",
						y1: "0",
						y2: "1",
						children: [/* @__PURE__ */ S("stop", {
							offset: "0",
							stopColor: "currentColor",
							stopOpacity: "0.1"
						}), /* @__PURE__ */ S("stop", {
							offset: "1",
							stopColor: "currentColor",
							stopOpacity: "0"
						})]
					}) }),
					E.map((e) => /* @__PURE__ */ C("g", { children: [/* @__PURE__ */ S("line", {
						x1: w.left,
						x2: u - w.right,
						y1: j(e),
						y2: j(e),
						stroke: "var(--cms-border)",
						strokeWidth: 1,
						shapeRendering: "crispEdges"
					}), /* @__PURE__ */ S("text", {
						x: w.left - 10,
						y: j(e),
						dy: "0.32em",
						textAnchor: "end",
						className: "fill-faint text-2xs tabular-nums",
						children: n(e)
					})] }, e)),
					I.map((e) => /* @__PURE__ */ S("text", {
						x: A(e),
						y: a - 8,
						textAnchor: e === 0 && y > 1 ? "start" : e === y - 1 && y > 1 ? "end" : "middle",
						className: "fill-faint text-2xs tabular-nums",
						children: r(t[e].date)
					}, e)),
					N && /* @__PURE__ */ S("path", {
						d: N,
						fill: `url(#${v})`
					}),
					/* @__PURE__ */ S("path", {
						d: M,
						fill: "none",
						stroke: "currentColor",
						strokeWidth: 2,
						strokeLinejoin: "round",
						strokeLinecap: "round"
					}),
					z && g !== null && /* @__PURE__ */ C("g", {
						pointerEvents: "none",
						children: [/* @__PURE__ */ S("line", {
							className: "cms-focus",
							x1: A(g),
							x2: A(g),
							y1: w.top,
							y2: w.top + k,
							stroke: "var(--cms-border-strong)",
							strokeWidth: 1,
							shapeRendering: "crispEdges"
						}), /* @__PURE__ */ S("circle", {
							cx: A(g),
							cy: j(z.value),
							r: 4,
							fill: "currentColor",
							stroke: "var(--cms-bg)",
							strokeWidth: 2
						})]
					}),
					/* @__PURE__ */ S("rect", {
						x: w.left,
						y: 0,
						width: O,
						height: a,
						fill: "transparent",
						onPointerMove: L,
						onPointerDown: L,
						onPointerLeave: () => _(null)
					})
				]
			}),
			z && g !== null && /* @__PURE__ */ C("div", {
				role: "status",
				className: "pointer-events-none absolute top-0 z-raised min-w-36 -translate-x-1/2 rounded-md border border-border-float bg-bg px-3 py-2 shadow-pop",
				style: { left: Math.max(w.left + 64, Math.min(u - 64, A(g))) },
				children: [/* @__PURE__ */ S("p", {
					className: "m-0 text-2xs text-muted",
					children: B ? l("Today so far") : e(z.date)
				}), /* @__PURE__ */ C("p", {
					className: "m-0 mt-1 flex items-center gap-2 text-xs text-muted",
					children: [
						/* @__PURE__ */ S("span", { className: "h-0.5 w-3 rounded-full bg-ink" }),
						/* @__PURE__ */ S("span", {
							className: "text-sm font-semibold tabular-nums text-ink",
							children: n(z.value)
						}),
						i
					]
				})]
			}),
			/* @__PURE__ */ C("table", {
				className: "sr-only",
				children: [/* @__PURE__ */ S("caption", { children: i }), /* @__PURE__ */ S("tbody", { children: t.map((t) => /* @__PURE__ */ C("tr", { children: [/* @__PURE__ */ S("th", {
					scope: "row",
					children: e(t.date)
				}), /* @__PURE__ */ S("td", { children: n(t.value) })] }, t.date)) })]
			})
		]
	});
}
// admin/src/Overview.tsx
var D = {
	"7d": () => l("7 Days"),
	"30d": () => l("30 Days"),
	"90d": () => l("90 Days")
};
function O() {
	let [e, r] = d(n, "period"), s = u().query.period;
	f(() => {
		s !== void 0 && !n.includes(s) && c({ period: null });
	}, [s]);
	let [p, m] = d(o.map((e) => e.key), "metric"), h = a(e), w = h.data, T = w?.mode === "counts", O = T ? o.filter((e) => e.counts) : o, A = T ? "views" : p, j = o.find((e) => e.key === A), M = l("Compared with the {period} before", { period: D[e]().toLowerCase() });
	return /* @__PURE__ */ C("div", {
		className: "mb-10",
		children: [
			/* @__PURE__ */ C("div", {
				className: "mb-4 flex flex-wrap items-center justify-end gap-2",
				children: [w && !!w.current && /* @__PURE__ */ S(k, { count: w.current }), /* @__PURE__ */ S(_, {
					value: e,
					onChange: r,
					options: [
						"7d",
						"30d",
						"90d"
					].map((e) => ({
						value: e,
						label: D[e]()
					}))
				})]
			}),
			/* @__PURE__ */ S("div", {
				className: "grid grid-cols-2 gap-x-4 gap-y-5 md:grid-cols-4",
				children: O.map((e) => {
					if (!w) return /* @__PURE__ */ C("div", { children: [/* @__PURE__ */ S("p", {
						className: "m-0 text-xs text-muted",
						children: e.label()
					}), /* @__PURE__ */ S(v, { className: "mt-2 h-6 w-20" })] }, e.key);
					let n = i(w[e.key], w.previous[e.key]), r = /* @__PURE__ */ S(y, {
						label: e.label(),
						value: t(e.key, w[e.key]),
						delta: n,
						good: e.good
					}), a = O.length > 1 ? /* @__PURE__ */ S(g, {
						variant: "ghost",
						"aria-current": A === e.key ? "true" : void 0,
						onClick: () => m(e.key),
						className: x("flex h-auto! w-full justify-start rounded-none! border-t-2 px-0! pb-1 pt-2 text-left font-normal hover:bg-transparent active:bg-transparent", A === e.key ? "border-ink" : "border-border"),
						children: r
					}) : r;
					return n === null ? /* @__PURE__ */ S("div", { children: a }, e.key) : /* @__PURE__ */ S(b, {
						content: M,
						children: /* @__PURE__ */ S("div", { children: a })
					}, e.key);
				})
			}),
			/* @__PURE__ */ S("div", {
				className: "mt-6",
				children: w ? /* @__PURE__ */ S(E, {
					points: w.series.map((e) => ({
						date: e.date,
						value: e[A] ?? 0
					})),
					format: (e) => t(A, e),
					label: j.label(),
					whole: A === "visitors" || A === "views",
					pending: h.isPlaceholderData
				}, A) : /* @__PURE__ */ S(v, { className: "h-[240px] w-full rounded-md" })
			})
		]
	});
}
function k({ count: e }) {
	return /* @__PURE__ */ S(b, {
		content: l("Visitors active in the last five minutes"),
		children: /* @__PURE__ */ C("span", {
			className: "mr-2 flex items-center gap-1.5 text-xs text-muted",
			children: [/* @__PURE__ */ C("span", {
				className: "relative flex size-1.5",
				children: [/* @__PURE__ */ S("span", { className: "absolute inset-0 animate-ping rounded-full bg-success opacity-50 motion-reduce:hidden" }), /* @__PURE__ */ S("span", { className: "relative size-1.5 rounded-full bg-success" })]
			}), l("{count} on the site now", { count: e.toLocaleString(s()) })]
		})
	});
}
export { O as default };
