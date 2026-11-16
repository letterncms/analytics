import { g as e, m as t, r as n } from "./data-RAdPmcHZ.js";
import { locale as r, t as i } from "@letterncms/sdk";
import { BarRow as a, Widget as o, WidgetSkeleton as s } from "@letterncms/ui";
import { jsx as c, jsxs as l } from "react/jsx-runtime";
// admin/src/WidgetNow.tsx
function u() {
	let u = e({ period: "realtime" }), d = u.data, f = d?.mode === "counts", p = t({ period: "realtime" }, "pages", 5, !!d && !f).data?.items ?? [];
	return /* @__PURE__ */ c(o, {
		action: {
			label: i("View Analytics"),
			to: "/analytics?period=realtime"
		},
		query: u,
		skeleton: /* @__PURE__ */ c(s, { rows: 4 }),
		empty: d && (f ? {
			icon: "activity",
			title: i("Counting page views only")
		} : d.views ? null : {
			icon: "activity",
			title: i("Nobody on the site right now")
		}),
		children: d && !f && /* @__PURE__ */ l("div", {
			className: "pt-1",
			children: [
				/* @__PURE__ */ l("p", {
					className: "m-0 flex items-baseline gap-2",
					children: [/* @__PURE__ */ c("span", {
						className: "text-2xl font-semibold tabular-nums text-ink",
						children: (d.current ?? 0).toLocaleString(r())
					}), /* @__PURE__ */ c("span", {
						className: "text-sm text-muted",
						children: i("on the site now")
					})]
				}),
				/* @__PURE__ */ c("p", {
					className: "m-0 mt-1 text-xs text-muted",
					children: i("{count} page views in the last 30 minutes", { count: (d.views ?? 0).toLocaleString(r()) })
				}),
				/* @__PURE__ */ c("ul", {
					className: "m-0 mt-4 list-none space-y-0.5 p-0",
					children: p.map((e) => /* @__PURE__ */ c("li", { children: /* @__PURE__ */ c(a, {
						label: e.label,
						share: e.share,
						value: n(e.visitors),
						to: `/analytics?period=realtime&f=${encodeURIComponent(`page:is:${e.key}`)}`
					}) }, e.key ?? ""))
				})
			]
		})
	});
}
export { u as default };
