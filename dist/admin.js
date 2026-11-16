import { _ as e, g as t, l as n, m as r, n as i, r as a, s as o, u as s } from "./chunks/data-RAdPmcHZ.js";
import { can as c, navigate as l, registry as u, t as d, useAbility as f } from "@letterncms/sdk";
import { lazy as p } from "react";
import { BarRow as m, Button as h, EmptyState as g, QueryError as _, Skeleton as v, Sparkline as y, Stat as b } from "@letterncms/ui";
import { keepPreviousData as x } from "@tanstack/react-query";
import { jsx as S, jsxs as C } from "react/jsx-runtime";
// admin/src/PagePanel.tsx
function w({ entry: u }) {
	let p = u?.uri ?? null, w = u && u.status === "published" && p, T = {
		period: "30d",
		filters: p ? [{
			dimension: "page",
			op: "is",
			value: p
		}] : []
	}, E = t(T, { refetch: 3e5 }), D = E.data, O = D?.mode === "counts", k = r(T, "sources", 4, !!w && D?.mode === "visitors"), A = f("analytics/search", { report: "status" }, {
		enabled: !!w && c("analytics.view"),
		staleTime: 3e5
	}), j = f("analytics/search", {
		period: "30d",
		report: "summary",
		page: p
	}, {
		enabled: !!w && A.data?.connected === !0,
		placeholderData: x
	}), M = p ? `/analytics?f=${encodeURIComponent(`page:is:${p}`)}` : "/analytics";
	if (!w) return /* @__PURE__ */ S(g, {
		compact: !0,
		icon: "chart",
		title: d("Counted once it is published")
	});
	if (E.isError) return /* @__PURE__ */ S(_, {
		compact: !0,
		title: d("Couldn’t load the numbers"),
		onRetry: () => E.refetch(),
		retrying: E.isFetching
	});
	if (!D) return /* @__PURE__ */ C("div", {
		className: "space-y-3 p-1",
		children: [/* @__PURE__ */ S(v, { className: "h-16" }), /* @__PURE__ */ S(v, { className: "h-12" })]
	});
	let N = O ? ["views"] : [
		"visitors",
		"views",
		"timeOnPage",
		"scrollDepth"
	];
	return /* @__PURE__ */ C("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ C("div", { children: [
				/* @__PURE__ */ S("p", {
					className: "m-0 mb-3 text-xs text-muted",
					children: d("Last 30 days")
				}),
				/* @__PURE__ */ S("div", {
					className: "grid grid-cols-2 gap-x-4 gap-y-4",
					children: N.map((e) => /* @__PURE__ */ S(b, {
						size: "sm",
						label: {
							visitors: d("Visitors"),
							views: d("Page Views"),
							timeOnPage: d("Time on Page"),
							scrollDepth: d("Scroll Depth")
						}[e],
						value: o(e, D[e]),
						delta: i(D[e], D.previous[e])
					}, e))
				}),
				/* @__PURE__ */ S(y, {
					values: D.series.map((e) => (O ? e.views : e.visitors) ?? 0),
					label: d(O ? "Page Views per Day" : "Visitors per Day"),
					className: "mt-4 h-10 w-full"
				})
			] }),
			!O && k.data && k.data.items.length > 0 && /* @__PURE__ */ C("div", { children: [/* @__PURE__ */ S("p", {
				className: "m-0 mb-2 text-xs font-medium text-muted",
				children: d("Sources")
			}), /* @__PURE__ */ S("ul", {
				className: "m-0 list-none space-y-0.5 p-0",
				children: k.data.items.map((t) => /* @__PURE__ */ S("li", { children: /* @__PURE__ */ S(m, {
					label: e("sources", t),
					share: t.share,
					value: a(t.visitors)
				}) }, t.key ?? ""))
			})] }),
			j.data && /* @__PURE__ */ C("div", { children: [
				/* @__PURE__ */ S("p", {
					className: "m-0 mb-2 text-xs font-medium text-muted",
					children: d("Google Search")
				}),
				/* @__PURE__ */ C("div", {
					className: "grid grid-cols-2 gap-x-4 gap-y-3",
					children: [/* @__PURE__ */ S(b, {
						size: "sm",
						label: d("Clicks"),
						value: n(j.data.clicks)
					}), /* @__PURE__ */ S(b, {
						size: "sm",
						label: d("Average Position"),
						value: j.data.position === null ? "–" : j.data.position.toFixed(1)
					})]
				}),
				/* @__PURE__ */ S("p", {
					className: "m-0 mt-2 text-xs text-muted",
					children: d("{impressions} impressions, {ctr} clicked", {
						impressions: a(j.data.impressions),
						ctr: s(j.data.ctr, 1)
					})
				})
			] }),
			/* @__PURE__ */ S(h, {
				variant: "secondary",
				size: "sm",
				className: "w-full",
				onClick: () => l(M),
				children: d("Open in Analytics")
			})
		]
	});
}
u.widgets.set("analytics-overview", p(() => import("./chunks/WidgetOverview-D4r4h3YX.js"))), u.widgets.set("analytics-now", p(() => import("./chunks/WidgetNow-0sBmdmd3.js"))), u.widgets.set("analytics-pages", p(() => import("./chunks/WidgetPages-DQWNwjdy.js"))), u.widgets.set("analytics-search", p(() => import("./chunks/WidgetSearch-shTxjsDA.js"))), u.components.set("analytics/overview", p(() => import("./chunks/Overview-DMgtE-Ds.js"))), u.components.set("analytics/journeys", p(() => import("./chunks/Journeys-Biuv18TN.js"))), u.components.set("analytics/search", p(() => import("./chunks/Search-Cy79IRou.js"))), u.panels.set("analytics", {
	slot: "entry.sidebar",
	label: "Analytics",
	icon: "chart",
	component: w,
	order: 30,
	when: (e) => !!e.collection?.route && !!e.entry && c("analytics.view")
});
