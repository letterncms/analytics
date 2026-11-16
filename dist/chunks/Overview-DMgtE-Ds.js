import { c as e, d as t, g as n, h as r, n as i, s as a, t as o } from "./data-RAdPmcHZ.js";
import { n as s, t as c } from "./Toolbar-BSarLZwN.js";
import { i as l, n as u, r as d, t as f } from "./Panel-WS3tO0br.js";
import { locale as p, t as m, useTab as h } from "@letterncms/sdk";
import { Button as g, Notice as _, Skeleton as v, Stat as y, Tooltip as b, cn as x } from "@letterncms/ui";
import { jsx as S, jsxs as C } from "react/jsx-runtime";
// admin/src/Overview.tsx
var w = Object.keys(o);
function T() {
	let p = r(), [T, O] = h(w, "metric"), k = n(p.input, { compare: !0 }), A = k.data, j = A?.mode === "counts", M = e(A, p.filters), N = M.includes(T) ? T : M[0], P = p.period === "custom" ? m("Compared with the same number of days before") : m("Compared with the {period} before", { period: t[p.period]().toLowerCase() }), F = d();
	return /* @__PURE__ */ C("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ C("div", {
				className: "flex flex-wrap items-center justify-between gap-2",
				children: [/* @__PURE__ */ S(c, {}), /* @__PURE__ */ C("div", {
					className: "ml-auto flex items-center gap-2",
					children: [A && !!A.current && /* @__PURE__ */ S(D, { count: A.current }), /* @__PURE__ */ S(s, { counting: j })]
				})]
			}),
			A?.unavailable && /* @__PURE__ */ S(_, {
				tone: "neutral",
				title: m("Counting page views only: the numbers can be narrowed to pages, not to this.")
			}),
			/* @__PURE__ */ C("div", { children: [/* @__PURE__ */ S("div", {
				className: x("grid grid-cols-2 gap-x-4 gap-y-5", M.length > 3 ? "md:grid-cols-3 xl:grid-cols-6" : "md:grid-cols-3"),
				children: M.map((e) => {
					let t = o[e];
					if (!A) return /* @__PURE__ */ C("div", { children: [/* @__PURE__ */ S("p", {
						className: "m-0 text-xs text-muted",
						children: t.label()
					}), /* @__PURE__ */ S(v, { className: "mt-2 h-7 w-20" })] }, e);
					let n = p.period === "realtime" ? null : i(A[e], A.previous[e]), r = /* @__PURE__ */ S(y, {
						label: t.label(),
						value: a(e, A[e]),
						delta: n,
						good: t.good
					}), s = M.length > 1 ? /* @__PURE__ */ S(g, {
						variant: "ghost",
						"aria-pressed": N === e,
						onClick: () => O(e),
						className: x("flex h-auto! w-full justify-start rounded-none! border-t-2 px-0! pb-1 pt-2 text-left font-normal hover:bg-transparent active:bg-transparent", N === e ? "border-ink" : "border-border"),
						children: r
					}) : r;
					return n === null ? /* @__PURE__ */ S("div", { children: s }, e) : /* @__PURE__ */ S(b, {
						content: P,
						children: /* @__PURE__ */ S("div", { children: s })
					}, e);
				})
			}), /* @__PURE__ */ S("div", {
				className: "mt-6",
				children: A ? A.series.length > 1 ? /* @__PURE__ */ S(l, {
					points: A.series.map((e) => ({
						date: e.date,
						value: e[N] ?? 0
					})),
					previous: p.period === "realtime" ? void 0 : A.previousSeries?.map((e) => ({
						date: e.date,
						value: e[N] ?? 0
					})),
					interval: A.interval,
					format: (e) => a(N, e),
					label: o[N].label(),
					whole: !!o[N].whole,
					pending: k.isPlaceholderData
				}, `${N}-${A.interval}`) : null : /* @__PURE__ */ S(v, { className: "h-[240px] w-full rounded-md" })
			})] }),
			A && (j ? /* @__PURE__ */ C("div", {
				className: "grid min-w-0 gap-x-8 gap-y-8 md:grid-cols-2",
				children: [
					/* @__PURE__ */ S(u, {
						title: m("Pages"),
						input: p.input,
						tabs: [{
							dimension: "pages",
							label: m("Top Pages"),
							name: m("Page"),
							filter: "page",
							columns: [F.views, F.share]
						}]
					}),
					/* @__PURE__ */ S(u, {
						hideSingle: !0,
						title: m("Languages"),
						input: p.input,
						tabs: [{
							dimension: "languages",
							label: m("Languages"),
							name: m("Language"),
							columns: [F.views, F.share]
						}]
					}),
					/* @__PURE__ */ S(u, {
						title: m("Goals"),
						input: p.input,
						tabs: [{
							dimension: "goals",
							label: m("Goals"),
							name: m("Goal"),
							columns: [F.events]
						}]
					})
				]
			}) : /* @__PURE__ */ C("div", {
				className: "grid min-w-0 gap-x-8 gap-y-8 md:grid-cols-2",
				children: [
					/* @__PURE__ */ S(u, {
						title: m("Sources"),
						input: p.input,
						tabs: [
							{
								dimension: "channels",
								label: m("Channels"),
								name: m("Channel"),
								filter: "channel",
								columns: [F.visitors, F.bounce]
							},
							{
								dimension: "sources",
								label: m("Sources"),
								name: m("Source"),
								filter: "source",
								columns: [F.visitors, F.bounce]
							},
							{
								dimension: "campaigns",
								label: m("Campaigns"),
								name: m("Campaign"),
								filter: "campaign",
								columns: [F.visitors, F.bounce]
							}
						]
					}),
					/* @__PURE__ */ S(u, {
						title: m("Pages"),
						input: p.input,
						tabs: [
							{
								dimension: "pages",
								label: m("Top Pages"),
								name: m("Page"),
								filter: "page",
								columns: [
									F.visitors,
									F.time,
									F.scroll
								]
							},
							{
								dimension: "entries",
								label: m("Entry Pages"),
								name: m("Page"),
								filter: "entry",
								columns: [F.visitors, F.bounce]
							},
							{
								dimension: "exits",
								label: m("Exit Pages"),
								name: m("Page"),
								filter: "exit",
								columns: [F.visitors]
							}
						]
					}),
					/* @__PURE__ */ S(u, {
						title: m("Countries"),
						input: p.input,
						tabs: [{
							dimension: "countries",
							label: m("Countries"),
							name: m("Country"),
							filter: "country",
							columns: [F.visitors, F.share]
						}]
					}),
					/* @__PURE__ */ S(u, {
						title: m("Devices"),
						input: p.input,
						tabs: [
							{
								dimension: "devices",
								label: m("Type"),
								name: m("Device"),
								filter: "device",
								columns: [F.visitors, F.share],
								icon: (e) => /* @__PURE__ */ S(f, { item: e })
							},
							{
								dimension: "browsers",
								label: m("Browser"),
								name: m("Browser"),
								filter: "browser",
								columns: [F.visitors, F.share]
							},
							{
								dimension: "os",
								label: m("System"),
								name: m("System"),
								filter: "os",
								columns: [F.visitors, F.share]
							}
						]
					}),
					/* @__PURE__ */ S(E, { input: p.input }, p.filters.some((e) => e.dimension === "goal") ? "props" : "goals"),
					/* @__PURE__ */ S(u, {
						hideSingle: !0,
						title: m("Languages"),
						input: p.input,
						tabs: [{
							dimension: "languages",
							label: m("Languages"),
							name: m("Language"),
							columns: [F.views, F.share]
						}]
					})
				]
			}))
		]
	});
}
function E({ input: e }) {
	let t = r().filters.find((e) => e.dimension === "goal" && e.op === "is"), n = d();
	return t ? /* @__PURE__ */ S(u, {
		title: m("Goals"),
		input: e,
		tabs: [{
			dimension: "props",
			label: m("Details"),
			name: m("Detail"),
			columns: [n.visitors, n.events]
		}]
	}) : /* @__PURE__ */ S(u, {
		title: m("Goals"),
		input: e,
		tabs: [{
			dimension: "goals",
			label: m("Goals"),
			name: m("Goal"),
			filter: "goal",
			columns: [
				n.visitors,
				n.events,
				n.conversion
			]
		}]
	});
}
function D({ count: e }) {
	return /* @__PURE__ */ S(b, {
		content: m("Visitors active in the last five minutes"),
		children: /* @__PURE__ */ C("span", {
			className: "mr-1 flex items-center gap-1.5 text-xs text-muted",
			children: [/* @__PURE__ */ C("span", {
				className: "relative flex size-1.5",
				children: [/* @__PURE__ */ S("span", { className: "absolute inset-0 animate-ping rounded-full bg-success opacity-50 motion-reduce:hidden" }), /* @__PURE__ */ S("span", { className: "relative size-1.5 rounded-full bg-success" })]
			}), m("{count} on the site now", { count: e.toLocaleString(p()) })]
		})
	});
}
export { T as default };
