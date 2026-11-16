import { l as e, n as t, r as n } from "./data-RAdPmcHZ.js";
import { can as r, navigate as i, t as a, useAbility as o } from "@letterncms/sdk";
import { BarRow as s, Button as c, Stat as l, Widget as u, WidgetSkeleton as d } from "@letterncms/ui";
import { jsx as f, jsxs as p } from "react/jsx-runtime";
// admin/src/WidgetSearch.tsx
function m() {
	let m = o("analytics/search", { report: "status" }, { staleTime: 3e5 }), h = m.data?.connected === !0, g = o("analytics/search", {
		period: "30d",
		report: "summary"
	}, { enabled: h }), _ = o("analytics/search", {
		period: "30d",
		report: "queries",
		limit: 5
	}, { enabled: h }), v = g.data, y = _.data?.items ?? [], b = Math.max(1, ...y.map((e) => e.clicks));
	return /* @__PURE__ */ f(u, {
		action: {
			label: a("View Search"),
			to: "/analytics?tab=search"
		},
		query: h ? g : m,
		skeleton: /* @__PURE__ */ f(d, { rows: 5 }),
		empty: m.data && !h && {
			icon: "search",
			title: m.data.problem ? a("Search Console needs attention") : a("Search Console isn’t connected"),
			action: r("settings.manage") && /* @__PURE__ */ f(c, {
				size: "sm",
				onClick: () => i("/analytics?tab=settings"),
				children: m.data.problem ? a("Open Settings") : a("Connect Search Console")
			})
		},
		children: v && /* @__PURE__ */ p("div", {
			className: "pt-1",
			children: [/* @__PURE__ */ p("div", {
				className: "grid grid-cols-2 gap-x-6",
				children: [/* @__PURE__ */ f(l, {
					label: a("Clicks"),
					value: e(v.clicks),
					delta: t(v.clicks, v.previous.clicks)
				}), /* @__PURE__ */ f(l, {
					label: a("Impressions"),
					value: n(v.impressions),
					delta: t(v.impressions, v.previous.impressions)
				})]
			}), /* @__PURE__ */ f("ul", {
				className: "m-0 mt-4 list-none space-y-0.5 p-0",
				children: y.map((e) => /* @__PURE__ */ f("li", { children: /* @__PURE__ */ f(s, {
					label: e.label,
					share: e.clicks / b,
					value: n(e.clicks)
				}) }, e.key))
			})]
		})
	});
}
export { m as default };
