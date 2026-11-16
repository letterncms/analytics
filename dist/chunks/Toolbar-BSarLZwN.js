import { d as e, h as t, o as n } from "./data-RAdPmcHZ.js";
import { locale as r, t as i } from "@letterncms/sdk";
import { useState as a } from "react";
import { Button as o, DateInput as s, Field as c, Icon as l, IconButton as u, Popover as d, Tooltip as f } from "@letterncms/ui";
import { jsx as p, jsxs as m } from "react/jsx-runtime";
// admin/src/Toolbar.tsx
var h = [
	"realtime",
	"today",
	"yesterday",
	"7d",
	"30d",
	"90d",
	"12mo"
];
function g({ counting: n = !1 }) {
	let u = t(), [f, g] = a(!1), [_, v] = a({
		from: u.from ?? null,
		to: u.to ?? null
	}), y = (/* @__PURE__ */ new Date()).toLocaleDateString("sv"), b = (e) => (/* @__PURE__ */ new Date(`${e}T12:00:00`)).toLocaleDateString(r(), {
		month: "short",
		day: "numeric",
		year: "numeric"
	}), x = u.period === "custom" && u.from && u.to ? `${b(u.from)} – ${b(u.to)}` : e[u.period](), S = !!_.from && !!_.to && _.from <= _.to && _.to <= y, C = (e, t) => {
		u.setPeriod(e, t), g(!1);
	};
	return /* @__PURE__ */ m(d, {
		open: f,
		onOpenChange: g,
		align: "end",
		className: "w-80 p-1.5",
		trigger: /* @__PURE__ */ p(o, {
			variant: "secondary",
			size: "sm",
			icon: "calendar",
			children: x
		}),
		children: [/* @__PURE__ */ p("div", {
			role: "group",
			"aria-label": i("Period"),
			className: "flex flex-col",
			children: h.filter((e) => !n || e !== "realtime").map((t) => /* @__PURE__ */ m(o, {
				variant: "ghost",
				size: "sm",
				"aria-pressed": u.period === t,
				onClick: () => C(t),
				className: "w-full justify-start font-normal",
				children: [/* @__PURE__ */ p("span", {
					className: "flex-1 text-left",
					children: e[t]()
				}), u.period === t && /* @__PURE__ */ p(l, {
					name: "check",
					size: 14
				})]
			}, t))
		}), /* @__PURE__ */ m("form", {
			className: "mt-1.5 space-y-3 border-t border-border px-1.5 pb-1.5 pt-3",
			onSubmit: (e) => {
				e.preventDefault(), S && C("custom", {
					from: _.from,
					to: _.to
				});
			},
			children: [/* @__PURE__ */ m("div", {
				className: "grid grid-cols-2 gap-2",
				children: [/* @__PURE__ */ p(c, {
					label: i("From||date"),
					children: /* @__PURE__ */ p(s, {
						size: "sm",
						value: _.from,
						onChange: (e) => v((t) => ({
							...t,
							from: e
						})),
						"aria-label": i("From||date")
					})
				}), /* @__PURE__ */ p(c, {
					label: i("To||date"),
					children: /* @__PURE__ */ p(s, {
						size: "sm",
						value: _.to,
						onChange: (e) => v((t) => ({
							...t,
							to: e
						})),
						"aria-label": i("To||date")
					})
				})]
			}), /* @__PURE__ */ p(o, {
				type: "submit",
				size: "sm",
				variant: u.period === "custom" ? "primary" : "secondary",
				disabled: !S,
				className: "w-full",
				children: i("Show Period")
			})]
		})]
	});
}
function _() {
	let e = t();
	return e.filters.length ? /* @__PURE__ */ m("div", {
		className: "flex min-w-0 flex-wrap items-center gap-1.5",
		children: [e.filters.map((t, r) => {
			let a = n(t);
			return /* @__PURE__ */ m("span", {
				className: "inline-flex h-7 max-w-full items-center gap-0.5 rounded-sm bg-active pl-2.5 text-sm text-text",
				children: [/* @__PURE__ */ p("span", {
					className: "truncate",
					children: a
				}), /* @__PURE__ */ p(f, {
					content: i("Remove Filter"),
					children: /* @__PURE__ */ p(u, {
						icon: "close",
						size: "xs",
						variant: "ghost",
						label: i("Remove {filter}", { filter: a }),
						title: void 0,
						onClick: () => e.setFilters(e.filters.filter((e, t) => t !== r))
					})
				})]
			}, `${t.dimension}-${r}`);
		}), e.filters.length > 1 && /* @__PURE__ */ p(o, {
			variant: "ghost",
			size: "sm",
			onClick: () => e.setFilters([]),
			children: i("Clear Filters")
		})]
	}) : null;
}
export { g as n, _ as t };
