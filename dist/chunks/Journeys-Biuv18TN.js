import { a as e, h as t, r as n, u as r } from "./data-RAdPmcHZ.js";
import { n as i, t as a } from "./Toolbar-BSarLZwN.js";
import { can as o, navigate as s, plural as c, t as l, useAbility as u } from "@letterncms/sdk";
import { useState as d } from "react";
import { BarRow as f, Button as p, EmptyState as m, Icon as h, QueryError as g, Section as _, Segmented as v, Skeleton as y, cn as b } from "@letterncms/ui";
import { keepPreviousData as x } from "@tanstack/react-query";
import { jsx as S, jsxs as C } from "react/jsx-runtime";
// admin/src/Journeys.tsx
function w() {
	let e = t().filters.find((e) => e.dimension === "page" && e.op === "is" && e.value && !e.value.includes("*"))?.value ?? null;
	return /* @__PURE__ */ C("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ C("div", {
				className: "flex flex-wrap items-center justify-between gap-2",
				children: [/* @__PURE__ */ S(a, {}), /* @__PURE__ */ S("div", {
					className: "ml-auto",
					children: /* @__PURE__ */ S(i, {})
				})]
			}),
			/* @__PURE__ */ S(T, {}),
			e ? /* @__PURE__ */ S(D, { page: e }) : /* @__PURE__ */ S(E, {})
		]
	});
}
function T() {
	let n = t(), i = u("analytics/goals"), a = i.data?.funnels ?? [], [h, w] = d(null), T = a.some((e) => e.name === h) ? h : a[0]?.name, E = u("analytics/funnel", {
		...n.input,
		funnel: T
	}, {
		enabled: !!T,
		placeholderData: x
	});
	if (i.isError) return /* @__PURE__ */ S(_, {
		title: l("Funnels"),
		children: /* @__PURE__ */ S(g, {
			compact: !0,
			title: l("Couldn’t load the funnels"),
			onRetry: () => i.refetch()
		})
	});
	if (!i.data) return /* @__PURE__ */ S(_, {
		title: l("Funnels"),
		children: /* @__PURE__ */ S(y, { className: "h-40" })
	});
	if (!a.length) return /* @__PURE__ */ S(_, {
		title: l("Funnels"),
		children: /* @__PURE__ */ S(m, {
			compact: !0,
			icon: "filter",
			title: l("No funnels yet"),
			action: o("settings.manage") && /* @__PURE__ */ S(p, {
				size: "sm",
				onClick: () => s("/analytics?tab=settings"),
				children: l("Add Funnel")
			})
		})
	});
	let D = E.data;
	return /* @__PURE__ */ S(_, {
		title: l("Funnels"),
		actions: a.length > 1 && /* @__PURE__ */ S(v, {
			size: "xs",
			value: T,
			onChange: w,
			options: a.map((e) => ({
				value: e.name,
				label: e.name
			})),
			"aria-label": l("Funnel")
		}),
		children: E.isError ? /* @__PURE__ */ S(g, {
			compact: !0,
			title: l("Couldn’t load the funnel"),
			onRetry: () => E.refetch(),
			retrying: E.isFetching
		}) : D ? /* @__PURE__ */ C("div", {
			className: b("transition-opacity duration-move", E.isPlaceholderData && "opacity-60"),
			children: [/* @__PURE__ */ S("p", {
				className: "m-0 mb-4 text-sm text-muted",
				children: l("{rate} of visitors went all the way", { rate: r(D.conversionRate, 1) })
			}), /* @__PURE__ */ S("ol", {
				className: "m-0 list-none space-y-3 p-0",
				children: D.steps.map((t, n) => /* @__PURE__ */ C("li", {
					className: "min-w-0",
					children: [/* @__PURE__ */ C("div", {
						className: "mb-1 flex items-baseline gap-2 text-xs text-muted",
						children: [
							/* @__PURE__ */ S("span", {
								className: "tabular-nums text-faint",
								children: n + 1
							}),
							/* @__PURE__ */ S("span", {
								className: b("truncate text-text", t.page && "font-mono text-xs"),
								children: t.page ?? e(t.label)
							}),
							n > 0 && t.dropoff > 0 && /* @__PURE__ */ S("span", {
								className: "ml-auto shrink-0 tabular-nums",
								children: l("{rate} dropped off", { rate: r(t.dropoff) })
							})
						]
					}), /* @__PURE__ */ S(f, {
						label: c(t.visitors, "{count} visitor", "{count} visitors"),
						share: t.share,
						value: r(t.share)
					})]
				}, n))
			})]
		}) : /* @__PURE__ */ S(y, { className: "h-40" })
	});
}
function E() {
	let e = t(), [r, i] = d("3"), a = u("analytics/paths", {
		...e.input,
		length: Number(r),
		limit: 10
	}, { placeholderData: x }), o = a.data?.paths ?? [], s = o[0]?.visitors ?? 0;
	return /* @__PURE__ */ S(_, {
		title: l("Common Paths"),
		actions: /* @__PURE__ */ S(v, {
			size: "xs",
			value: r,
			onChange: i,
			"aria-label": l("Pages per path"),
			options: [
				{
					value: "2",
					label: l("2 Pages")
				},
				{
					value: "3",
					label: l("3 Pages")
				},
				{
					value: "4",
					label: l("4 Pages")
				}
			]
		}),
		children: a.isError ? /* @__PURE__ */ S(g, {
			compact: !0,
			title: l("Couldn’t load the paths"),
			onRetry: () => a.refetch(),
			retrying: a.isFetching
		}) : a.data ? o.length ? /* @__PURE__ */ S("ul", {
			className: b("m-0 list-none space-y-0.5 p-0 transition-opacity duration-move", a.isPlaceholderData && "opacity-60"),
			children: o.map((t, r) => /* @__PURE__ */ S("li", {
				className: "min-w-0",
				children: /* @__PURE__ */ S(f, {
					share: s > 0 ? t.visitors / s : 0,
					value: n(t.visitors),
					label: /* @__PURE__ */ S("span", {
						className: "flex min-w-0 items-center gap-1.5",
						children: t.pages.map((e, t) => /* @__PURE__ */ C("span", {
							className: "flex min-w-0 items-center gap-1.5",
							children: [t > 0 && /* @__PURE__ */ S(h, {
								name: "chevron-right",
								size: 12,
								className: "shrink-0 text-faint"
							}), /* @__PURE__ */ S("span", {
								className: "truncate",
								children: e.label
							})]
						}, t))
					}),
					to: e.linkWith({
						dimension: "page",
						op: "is",
						value: t.pages[0].path
					})
				})
			}, r))
		}) : /* @__PURE__ */ S(m, {
			compact: !0,
			icon: "flow-arrow",
			title: l("No visits in this period")
		}) : /* @__PURE__ */ S("div", {
			className: "space-y-1.5",
			children: Array.from({ length: 5 }, (e, t) => /* @__PURE__ */ S(y, { className: "h-8" }, t))
		})
	});
}
function D({ page: e }) {
	let r = t(), i = u("analytics/paths", {
		...r.input,
		page: e,
		limit: 8
	}, { placeholderData: x }), a = (e, t, i) => {
		let a = (t ?? []).reduce((e, t) => e + t.visitors, 0);
		return /* @__PURE__ */ S(_, {
			title: e,
			children: t ? t.length ? /* @__PURE__ */ S("ul", {
				className: "m-0 list-none space-y-0.5 p-0",
				children: t.map((e) => /* @__PURE__ */ S("li", {
					className: "min-w-0",
					children: /* @__PURE__ */ S(f, {
						label: e.path === null ? i : e.label,
						share: a > 0 ? e.visitors / a : 0,
						value: n(e.visitors),
						to: e.path ? r.linkWith({
							dimension: "page",
							op: "is",
							value: e.path
						}) : void 0
					})
				}, e.key ?? ""))
			}) : /* @__PURE__ */ S(m, {
				compact: !0,
				icon: "flow-arrow",
				title: l("No visits in this period")
			}) : /* @__PURE__ */ S(y, { className: "h-32" })
		});
	};
	return i.isError ? /* @__PURE__ */ S(g, {
		compact: !0,
		title: l("Couldn’t load the paths"),
		onRetry: () => i.refetch(),
		retrying: i.isFetching
	}) : /* @__PURE__ */ C("div", {
		className: "grid min-w-0 gap-8 md:grid-cols-2",
		children: [a(l("Came From"), i.data?.before, l("Another website, or nowhere")), a(l("Went Next"), i.data?.after, l("Left the site"))]
	});
}
export { w as default };
