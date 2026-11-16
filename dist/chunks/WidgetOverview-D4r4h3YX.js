import { f as e, g as t, n, s as r } from "./data-RAdPmcHZ.js";
import { can as i, navigate as a, t as o } from "@letterncms/sdk";
import { Button as s, Skeleton as c, Sparkline as l, Stat as u, Widget as d } from "@letterncms/ui";
import { jsx as f, jsxs as p } from "react/jsx-runtime";
// admin/src/WidgetOverview.tsx
function m() {
	let m = t({ period: "30d" }), h = m.data, g = h?.series[0], _ = h?.mode === "counts";
	return /* @__PURE__ */ f(d, {
		action: {
			label: o("View Analytics"),
			to: "/analytics"
		},
		query: m,
		skeleton: /* @__PURE__ */ p("div", {
			className: "space-y-4 pt-2",
			children: [/* @__PURE__ */ f("div", {
				className: "grid grid-cols-3 gap-4",
				children: [
					0,
					1,
					2
				].map((e) => /* @__PURE__ */ f(c, { className: "h-12" }, e))
			}), /* @__PURE__ */ f(c, { className: "h-14" })]
		}),
		empty: h && !h.tracked && {
			icon: "chart",
			title: h.enabled ? o("No visits yet") : o("Analytics is off"),
			action: !h.enabled && i("settings.manage") && /* @__PURE__ */ f(s, {
				size: "sm",
				onClick: () => a("/analytics?tab=settings"),
				children: o("Open Settings")
			})
		},
		children: h && /* @__PURE__ */ p("div", {
			className: "pt-1",
			children: [
				/* @__PURE__ */ p("div", {
					className: "grid grid-cols-2 gap-x-6 gap-y-4 @md:grid-cols-3",
					children: [
						_ || /* @__PURE__ */ f(u, {
							label: o("Visitors"),
							value: r("visitors", h.visitors),
							delta: n(h.visitors, h.previous.visitors)
						}),
						/* @__PURE__ */ f(u, {
							label: o("Page Views"),
							value: r("views", h.views),
							delta: n(h.views, h.previous.views)
						}),
						_ || /* @__PURE__ */ f(u, {
							label: o("Visit Duration"),
							value: r("visitDuration", h.visitDuration),
							delta: n(h.visitDuration, h.previous.visitDuration),
							className: "hidden @md:block"
						})
					]
				}),
				/* @__PURE__ */ f(l, {
					values: h.series.map((e) => (_ ? e.views : e.visitors) ?? 0),
					label: o(_ ? "Page Views per Day" : "Visitors per Day"),
					className: "mt-5 h-14 w-full"
				}),
				/* @__PURE__ */ p("div", {
					className: "mt-1.5 flex justify-between text-2xs text-faint",
					children: [
						/* @__PURE__ */ f("span", { children: g && e(g.date) }),
						/* @__PURE__ */ f("span", { children: o("Last 30 days") }),
						/* @__PURE__ */ f("span", { children: o("Today") })
					]
				})
			]
		})
	});
}
export { m as default };
