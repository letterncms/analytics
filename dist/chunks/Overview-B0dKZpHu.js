import { a as e, i as t, n, o as r, r as i, s as a, t as o } from "./data-BTiWt5A4.js";
import { locale as s, setQuery as c, t as l, useLocation as u, useTab as d } from "@letterncms/sdk";
import { useEffect as f, useId as p, useRef as m, useState as h } from "react";
import { Delta as g, Segmented as _, Skeleton as v, Tooltip as y, cn as b } from "@letterncms/ui";
import { jsx as x, jsxs as S } from "react/jsx-runtime";
// admin/src/Chart.tsx
var C = {
	top: 12,
	right: 12,
	bottom: 28,
	left: 48
};
function w(e, t) {
	if (e <= 0) return [
		0,
		1,
		2,
		3
	];
	let n = 10 ** Math.floor(Math.log10(e / 4)), r = [
		1,
		2,
		2.5,
		5,
		10,
		20
	].map((e) => e * n).filter((e) => t || Number.isInteger(e)).map((t) => ({
		step: t,
		count: Math.ceil(e / t)
	})).filter((e) => e.count >= 2 && e.count <= 4).sort((e, t) => e.step * e.count - t.step * t.count || e.count - t.count)[0] ?? {
		step: Math.ceil(e / 3),
		count: 3
	};
	return Array.from({ length: r.count + 1 }, (e, t) => Number((t * r.step).toPrecision(12)));
}
function T({ points: t, format: n, label: i, height: a = 240, pending: o }) {
	let s = m(null), [c, u] = h(0), [d, g] = h(null), _ = p();
	f(() => {
		let e = s.current;
		if (!e) return;
		let t = new ResizeObserver(([e]) => u(e.contentRect.width));
		return t.observe(e), () => t.disconnect();
	}, []);
	let v = t.length, y = t.map((e) => e.value), T = w(Math.max(...y, 0), y.some((e) => !Number.isInteger(e)) || Math.max(...y, 0) < 3), E = T[T.length - 1], D = Math.max(0, c - C.left - C.right), O = a - C.top - C.bottom, k = (e) => C.left + (v <= 1 ? D / 2 : e / (v - 1) * D), A = (e) => C.top + O - (E > 0 ? e / E * O : 0), j = t.map((e, t) => `${t ? "L" : "M"}${k(t).toFixed(1)},${A(e.value).toFixed(1)}`).join(""), M = v > 1 ? `${j}L${k(v - 1).toFixed(1)},${A(0)}L${k(0).toFixed(1)},${A(0)}Z` : "", N = Math.max(2, Math.min(v, Math.floor(D / 84))), P = Math.max(1, Math.ceil((v - 1) / Math.max(1, N - 1))), F = Array.from({ length: Math.ceil(v / P) }, (e, t) => v - 1 - t * P).reverse(), I = (e) => {
		let t = e.currentTarget.getBoundingClientRect(), n = (e.clientX - t.left) / Math.max(1, t.width);
		g(Math.max(0, Math.min(v - 1, Math.round(n * (v - 1)))));
	}, L = (e) => {
		(e.key === "ArrowLeft" || e.key === "ArrowRight" || e.key === "Home" || e.key === "End") && (e.preventDefault(), g((t) => {
			if (e.key === "Home") return 0;
			if (e.key === "End") return v - 1;
			let n = t ?? v - 1;
			return Math.max(0, Math.min(v - 1, n + (e.key === "ArrowLeft" ? -1 : 1)));
		}));
	}, R = d === null ? null : t[d], z = v > 0 && R === t[v - 1];
	return /* @__PURE__ */ S("div", {
		ref: s,
		className: b("relative select-none transition-opacity duration-180", o && "opacity-60"),
		children: [
			c > 0 && /* @__PURE__ */ S("svg", {
				width: c,
				height: a,
				role: "img",
				"aria-label": i,
				tabIndex: 0,
				onKeyDown: L,
				onBlur: () => g(null),
				className: "block overflow-visible text-ink outline-none focus-visible:[&_.cms-focus]:stroke-focus",
				children: [
					/* @__PURE__ */ x("defs", { children: /* @__PURE__ */ S("linearGradient", {
						id: _,
						x1: "0",
						x2: "0",
						y1: "0",
						y2: "1",
						children: [/* @__PURE__ */ x("stop", {
							offset: "0",
							stopColor: "currentColor",
							stopOpacity: "0.1"
						}), /* @__PURE__ */ x("stop", {
							offset: "1",
							stopColor: "currentColor",
							stopOpacity: "0"
						})]
					}) }),
					T.map((e) => /* @__PURE__ */ S("g", { children: [/* @__PURE__ */ x("line", {
						x1: C.left,
						x2: c - C.right,
						y1: A(e),
						y2: A(e),
						stroke: "var(--cms-border)",
						strokeWidth: 1,
						shapeRendering: "crispEdges"
					}), /* @__PURE__ */ x("text", {
						x: C.left - 10,
						y: A(e),
						dy: "0.32em",
						textAnchor: "end",
						className: "fill-faint text-2xs tabular-nums",
						children: n(e)
					})] }, e)),
					F.map((e) => /* @__PURE__ */ x("text", {
						x: k(e),
						y: a - 8,
						textAnchor: e === 0 && v > 1 ? "start" : e === v - 1 && v > 1 ? "end" : "middle",
						className: "fill-faint text-2xs tabular-nums",
						children: r(t[e].date)
					}, e)),
					M && /* @__PURE__ */ x("path", {
						d: M,
						fill: `url(#${_})`
					}),
					/* @__PURE__ */ x("path", {
						d: j,
						fill: "none",
						stroke: "currentColor",
						strokeWidth: 2,
						strokeLinejoin: "round",
						strokeLinecap: "round"
					}),
					R && d !== null && /* @__PURE__ */ S("g", {
						pointerEvents: "none",
						children: [/* @__PURE__ */ x("line", {
							className: "cms-focus",
							x1: k(d),
							x2: k(d),
							y1: C.top,
							y2: C.top + O,
							stroke: "var(--cms-border-strong)",
							strokeWidth: 1,
							shapeRendering: "crispEdges"
						}), /* @__PURE__ */ x("circle", {
							cx: k(d),
							cy: A(R.value),
							r: 4,
							fill: "currentColor",
							stroke: "var(--cms-bg)",
							strokeWidth: 2
						})]
					}),
					/* @__PURE__ */ x("rect", {
						x: C.left,
						y: 0,
						width: D,
						height: a,
						fill: "transparent",
						onPointerMove: I,
						onPointerDown: I,
						onPointerLeave: () => g(null)
					})
				]
			}),
			R && d !== null && /* @__PURE__ */ S("div", {
				role: "status",
				className: "pointer-events-none absolute top-0 z-10 min-w-36 -translate-x-1/2 rounded-md border border-border-float bg-bg px-3 py-2 shadow-pop",
				style: { left: Math.max(C.left + 64, Math.min(c - 64, k(d))) },
				children: [/* @__PURE__ */ x("p", {
					className: "m-0 text-2xs text-muted",
					children: z ? l("Today so far") : e(R.date)
				}), /* @__PURE__ */ S("p", {
					className: "m-0 mt-1 flex items-center gap-2 text-xs text-muted",
					children: [
						/* @__PURE__ */ x("span", { className: "h-0.5 w-3 rounded-full bg-ink" }),
						/* @__PURE__ */ x("span", {
							className: "text-sm font-semibold tabular-nums text-ink",
							children: n(R.value)
						}),
						i
					]
				})]
			}),
			/* @__PURE__ */ S("table", {
				className: "sr-only",
				children: [/* @__PURE__ */ x("caption", { children: i }), /* @__PURE__ */ x("tbody", { children: t.map((t) => /* @__PURE__ */ S("tr", { children: [/* @__PURE__ */ x("th", {
					scope: "row",
					children: e(t.date)
				}), /* @__PURE__ */ x("td", { children: n(t.value) })] }, t.date)) })]
			})
		]
	});
}
// admin/src/Overview.tsx
var E = {
	"7d": () => l("7 days"),
	"30d": () => l("30 days"),
	"90d": () => l("90 days")
};
function D() {
	let [e, r] = d(n, "period"), s = u().query.period;
	f(() => {
		s !== void 0 && !n.includes(s) && c({ period: null });
	}, [s]);
	let [p, m] = d(o.map((e) => e.key), "metric"), h = a(e), y = h.data, C = y?.mode === "counts", w = C ? o.filter((e) => e.counts) : o, D = C ? "views" : p, k = o.find((e) => e.key === D);
	return /* @__PURE__ */ S("div", {
		className: "mb-10",
		children: [
			/* @__PURE__ */ S("div", {
				className: "mb-2 flex flex-wrap items-center justify-end gap-2",
				children: [y && !!y.current && /* @__PURE__ */ x(O, { count: y.current }), /* @__PURE__ */ x(_, {
					value: e,
					onChange: r,
					options: [
						"7d",
						"30d",
						"90d"
					].map((e) => ({
						value: e,
						label: E[e]()
					}))
				})]
			}),
			/* @__PURE__ */ x("div", {
				role: "tablist",
				"aria-label": l("Metric"),
				className: "grid grid-cols-2 border-b border-border md:grid-cols-4",
				children: w.map((e) => /* @__PURE__ */ S("button", {
					type: "button",
					role: "tab",
					"aria-selected": D === e.key,
					onClick: () => m(e.key),
					className: b("group relative -mb-px border-b-2 py-3 pr-4 text-left outline-none transition-colors duration-120 focus-visible:bg-hover", D === e.key ? "border-ink" : "border-transparent hover:border-border-strong"),
					children: [/* @__PURE__ */ x("span", {
						className: b("block text-xs transition-colors", D === e.key ? "text-text" : "text-muted group-hover:text-text"),
						children: e.label()
					}), y ? /* @__PURE__ */ S("span", {
						className: "mt-1 flex items-baseline gap-2",
						children: [/* @__PURE__ */ x("span", {
							className: "text-2xl font-semibold tracking-[-0.02em] text-ink",
							children: t(e.key, y[e.key])
						}), i(y[e.key], y.previous[e.key]) !== null && /* @__PURE__ */ x(g, {
							value: i(y[e.key], y.previous[e.key]),
							good: e.good
						})]
					}) : /* @__PURE__ */ x(v, { className: "mt-2 h-6 w-20" })]
				}, e.key))
			}),
			/* @__PURE__ */ x("p", {
				className: "m-0 mt-2 text-2xs text-faint",
				children: l("Compared with the {period} before", { period: E[e]().toLowerCase() })
			}),
			/* @__PURE__ */ x("div", {
				className: "mt-6",
				children: y ? /* @__PURE__ */ x(T, {
					points: y.series.map((e) => ({
						date: e.date,
						value: e[D] ?? 0
					})),
					format: (e) => t(D, e),
					label: k.label(),
					pending: h.isPlaceholderData
				}, D) : /* @__PURE__ */ x(v, { className: "h-[240px] w-full rounded-md" })
			})
		]
	});
}
function O({ count: e }) {
	return /* @__PURE__ */ x(y, {
		content: l("Visitors active in the last five minutes"),
		children: /* @__PURE__ */ S("span", {
			className: "mr-2 flex items-center gap-1.5 text-xs text-muted",
			children: [/* @__PURE__ */ S("span", {
				className: "relative flex size-1.5",
				children: [/* @__PURE__ */ x("span", { className: "absolute inset-0 animate-ping rounded-full bg-success opacity-50 motion-reduce:hidden" }), /* @__PURE__ */ x("span", { className: "relative size-1.5 rounded-full bg-success" })]
			}), l("{count} on the site now", { count: e.toLocaleString(s()) })]
		})
	});
}
export { D as default };
