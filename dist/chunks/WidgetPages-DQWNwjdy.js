import { m as e, r as t } from "./data-RAdPmcHZ.js";
import { t as n } from "@letterncms/sdk";
import { BarRow as r, Widget as i, WidgetSkeleton as a } from "@letterncms/ui";
import { jsx as o } from "react/jsx-runtime";
// admin/src/WidgetPages.tsx
function s() {
	let s = e({ period: "30d" }, "pages", 6), c = s.data?.items ?? [];
	return /* @__PURE__ */ o(i, {
		action: {
			label: n("View Analytics"),
			to: "/analytics"
		},
		query: s,
		skeleton: /* @__PURE__ */ o(a, { rows: 6 }),
		empty: s.data && !c.length && {
			icon: "file-text",
			title: n("No visits in this period")
		},
		children: /* @__PURE__ */ o("ul", {
			className: "m-0 list-none space-y-0.5 p-0 pt-1",
			children: c.map((e) => /* @__PURE__ */ o("li", { children: /* @__PURE__ */ o(r, {
				label: e.label,
				share: e.share,
				value: t(e.visitors ?? e.views),
				to: `/analytics?f=${encodeURIComponent(`page:is:${e.key}`)}`
			}) }, e.key ?? ""))
		})
	});
}
export { s as default };
