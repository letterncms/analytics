import { g as e, h as t, l as n, n as r, r as i, s as a, u as o } from "./data-RAdPmcHZ.js";
import { n as s, t as c } from "./Toolbar-BSarLZwN.js";
import { i as l, n as u, r as d } from "./Panel-WS3tO0br.js";
import { can as f, locale as p, navigate as m, t as h, useAbility as g } from "@letterncms/sdk";
import { useState as _ } from "react";
import { Badge as v, BarRow as y, Button as b, EmptyState as x, Notice as S, QueryError as C, Section as w, Segmented as T, Skeleton as E, Stat as D, Tooltip as O, cn as k } from "@letterncms/ui";
import { keepPreviousData as A } from "@tanstack/react-query";
import { Fragment as j, jsx as M, jsxs as N } from "react/jsx-runtime";
// admin/src/Search.tsx
var P = [
	{
		key: "clicks",
		label: () => h("Clicks"),
		good: "up",
		value: (e) => n(e)
	},
	{
		key: "impressions",
		label: () => h("Impressions"),
		good: "up",
		value: (e) => n(e)
	},
	{
		key: "ctr",
		label: () => h("Click-Through Rate"),
		good: "up",
		value: (e) => o(e, 1)
	},
	{
		key: "position",
		label: () => h("Average Position"),
		good: "down",
		value: (e) => e === null ? "–" : new Intl.NumberFormat(p(), { maximumFractionDigits: 1 }).format(e)
	}
];
function F() {
	return /* @__PURE__ */ N("div", {
		className: "space-y-10",
		children: [
			/* @__PURE__ */ N("div", {
				className: "flex flex-wrap items-center justify-between gap-2",
				children: [/* @__PURE__ */ M(c, {}), /* @__PURE__ */ M("div", {
					className: "ml-auto",
					children: /* @__PURE__ */ M(s, {})
				})]
			}),
			/* @__PURE__ */ M(L, {}),
			/* @__PURE__ */ M(z, {}),
			/* @__PURE__ */ M(H, {})
		]
	});
}
function I(e) {
	return e.find((e) => e.dimension === "page" && e.op === "is" && e.value && !e.value.includes("*"))?.value ?? void 0;
}
function L() {
	let e = t(), n = g("analytics/search", { report: "status" }, { staleTime: 6e4 }), i = I(e.filters), a = {
		...e.range,
		...i ? { page: i } : {}
	}, o = n.data?.connected === !0, s = g("analytics/search", {
		...a,
		report: "summary"
	}, {
		enabled: o,
		placeholderData: A
	}), [c, u] = _("clicks"), [d, p] = _("queries"), v = f("settings.manage") && /* @__PURE__ */ M(b, {
		size: "sm",
		onClick: () => m("/analytics?tab=settings"),
		children: h("Open Settings")
	});
	if (n.isError) return /* @__PURE__ */ M(w, {
		title: h("Google Search"),
		children: /* @__PURE__ */ M(C, {
			compact: !0,
			title: h("Couldn’t reach Search Console"),
			onRetry: () => n.refetch(),
			retrying: n.isFetching
		})
	});
	if (!n.data) return /* @__PURE__ */ M(w, {
		title: h("Google Search"),
		children: /* @__PURE__ */ M(E, { className: "h-48" })
	});
	if (!o) {
		let e = n.data.problem;
		return /* @__PURE__ */ M(w, {
			title: h("Google Search"),
			children: e === null ? /* @__PURE__ */ M(x, {
				compact: !0,
				icon: "search",
				title: h("Search Console isn’t connected"),
				action: f("settings.manage") && /* @__PURE__ */ M(b, {
					size: "sm",
					onClick: () => m("/analytics?tab=settings"),
					children: h("Connect Search Console")
				})
			}) : /* @__PURE__ */ M(S, {
				tone: e === "unreachable" ? "warning" : "danger",
				title: {
					key: h("Google doesn’t accept the Search Console key."),
					access: h("The service account can’t read this site’s Search Console property."),
					unreachable: h("Search Console can’t be reached right now.")
				}[e],
				action: v
			})
		});
	}
	let y = s.data, O = P.find((e) => e.key === c);
	return /* @__PURE__ */ M(w, {
		title: h("Google Search"),
		actions: y && /* @__PURE__ */ M("span", {
			className: "truncate text-xs text-faint",
			children: y.property
		}),
		children: s.isError ? /* @__PURE__ */ M(C, {
			compact: !0,
			title: h("Couldn’t load Google Search"),
			onRetry: () => s.refetch(),
			retrying: s.isFetching
		}) : /* @__PURE__ */ N(j, { children: [
			/* @__PURE__ */ M("div", {
				className: "grid grid-cols-2 gap-x-4 gap-y-5 md:grid-cols-4",
				children: P.map((e) => y ? /* @__PURE__ */ M(b, {
					variant: "ghost",
					"aria-pressed": c === e.key,
					onClick: () => u(e.key),
					className: k("flex h-auto! w-full justify-start rounded-none! border-t-2 px-0! pb-1 pt-2 text-left font-normal hover:bg-transparent active:bg-transparent", c === e.key ? "border-ink" : "border-border"),
					children: /* @__PURE__ */ M(D, {
						label: e.label(),
						value: e.value(y[e.key]),
						delta: r(y[e.key], y.previous[e.key]),
						good: e.good
					})
				}, e.key) : /* @__PURE__ */ N("div", { children: [/* @__PURE__ */ M("p", {
					className: "m-0 text-xs text-muted",
					children: e.label()
				}), /* @__PURE__ */ M(E, { className: "mt-2 h-7 w-20" })] }, e.key))
			}),
			/* @__PURE__ */ M("div", {
				className: "mt-6",
				children: y ? y.series.length > 1 && /* @__PURE__ */ M(l, {
					height: 200,
					interval: y.interval,
					points: y.series.map((e) => ({
						date: e.date,
						value: e[c] ?? 0
					})),
					format: (e) => O.value(e),
					label: O.label(),
					whole: c === "clicks" || c === "impressions",
					pending: s.isPlaceholderData
				}, c) : /* @__PURE__ */ M(E, { className: "h-[200px] w-full rounded-md" })
			}),
			/* @__PURE__ */ N("div", {
				className: "mt-8",
				children: [/* @__PURE__ */ M("div", {
					className: "mb-3",
					children: /* @__PURE__ */ M(T, {
						size: "xs",
						"aria-label": h("Google Search"),
						value: d,
						onChange: p,
						options: [{
							value: "queries",
							label: h("Searches")
						}, ...i ? [] : [{
							value: "pages",
							label: h("Pages")
						}, {
							value: "opportunities",
							label: h("Close to the Top")
						}]]
					})
				}), /* @__PURE__ */ M(R, {
					report: i && d !== "queries" ? "queries" : d,
					input: a
				})]
			})
		] })
	});
}
function R({ report: e, input: r }) {
	let a = t(), s = g("analytics/search", {
		...r,
		report: e,
		limit: 10
	}, { placeholderData: A }), c = s.data?.items ?? [], l = Math.max(1, ...c.map((t) => e === "opportunities" ? t.impressions : t.clicks));
	return s.isError ? /* @__PURE__ */ M(C, {
		compact: !0,
		title: h("Couldn’t load Google Search"),
		onRetry: () => s.refetch(),
		retrying: s.isFetching
	}) : s.data ? c.length ? /* @__PURE__ */ N("div", {
		className: k("transition-opacity duration-move", s.isPlaceholderData && "opacity-60"),
		children: [/* @__PURE__ */ N("div", {
			className: "mb-1 flex items-center gap-3 text-2xs font-medium text-faint",
			children: [
				/* @__PURE__ */ M("span", {
					className: "flex-1 pl-2",
					children: h(e === "pages" ? "Page" : "Search Term")
				}),
				/* @__PURE__ */ M("span", {
					className: "w-16 text-right",
					children: h(e === "opportunities" ? "Impressions" : "Clicks")
				}),
				/* @__PURE__ */ M("span", {
					className: "hidden w-16 text-right @md:inline-block md:inline-block",
					children: h("Position")
				})
			]
		}), /* @__PURE__ */ M("ul", {
			className: "m-0 list-none space-y-0.5 p-0",
			children: c.map((t) => /* @__PURE__ */ M("li", {
				className: "min-w-0",
				children: /* @__PURE__ */ M(y, {
					share: (e === "opportunities" ? t.impressions : t.clicks) / l,
					label: /* @__PURE__ */ N("span", {
						className: "flex min-w-0 items-baseline gap-2",
						children: [
							/* @__PURE__ */ M("span", {
								className: "truncate",
								children: t.label
							}),
							e === "opportunities" && /* @__PURE__ */ M("span", {
								className: "hidden truncate text-2xs text-faint md:inline",
								children: t.page
							}),
							e === "opportunities" && /* @__PURE__ */ M(v, {
								tone: t.kind === "top-ten" ? "success" : "neutral",
								children: t.kind === "top-ten" ? h("Page One") : h("Page Two")
							})
						]
					}),
					value: /* @__PURE__ */ N("span", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ M(O, {
							content: h("{clicks} clicks of {impressions} impressions ({ctr})", {
								clicks: n(t.clicks),
								impressions: n(t.impressions),
								ctr: o(t.ctr, 1)
							}),
							children: /* @__PURE__ */ M("span", {
								className: "inline-block w-16 text-right",
								children: i(e === "opportunities" ? t.impressions : t.clicks)
							})
						}), /* @__PURE__ */ M("span", {
							className: "hidden w-16 text-right md:inline-block",
							children: t.position === null ? "–" : new Intl.NumberFormat(p(), { maximumFractionDigits: 1 }).format(t.position)
						})]
					}),
					to: e === "pages" && t.path ? a.linkWith({
						dimension: "page",
						op: "is",
						value: t.path
					}) : void 0,
					href: e !== "pages" && t.url ? t.url : void 0
				})
			}, t.key))
		})]
	}) : /* @__PURE__ */ M(x, {
		compact: !0,
		icon: "search",
		title: h(e === "opportunities" ? "No searches close to the top" : "No searches in this period")
	}) : /* @__PURE__ */ M("div", {
		className: "space-y-1.5",
		children: Array.from({ length: 5 }, (e, t) => /* @__PURE__ */ M(E, { className: "h-8" }, t))
	});
}
function z() {
	let n = t(), i = {
		...n.input,
		filters: [...n.filters.filter((e) => e.dimension !== "channel"), {
			dimension: "channel",
			op: "is",
			value: "ai"
		}]
	}, o = e(i, { refetch: 12e4 }), s = o.data, c = d();
	return s?.mode === "counts" ? null : /* @__PURE__ */ M(w, {
		title: h("AI Assistants"),
		actions: s && /* @__PURE__ */ M(D, {
			size: "sm",
			label: h("Visitors"),
			value: a("visitors", s.visitors),
			delta: r(s.visitors, s.previous.visitors),
			className: "text-right"
		}),
		children: o.isError ? /* @__PURE__ */ M(C, {
			compact: !0,
			title: h("Couldn’t load the AI assistants"),
			onRetry: () => o.refetch(),
			retrying: o.isFetching
		}) : /* @__PURE__ */ N("div", {
			className: "grid min-w-0 gap-8 md:grid-cols-2",
			children: [/* @__PURE__ */ M(u, {
				title: h("Assistants"),
				input: i,
				tabs: [{
					dimension: "sources",
					label: h("Assistants"),
					name: h("Assistant"),
					filter: "source",
					columns: [c.visitors, c.share]
				}]
			}), /* @__PURE__ */ M(u, {
				title: h("Landing Pages"),
				input: i,
				tabs: [{
					dimension: "entries",
					label: h("Landing Pages"),
					name: h("Page"),
					filter: "entry",
					columns: [c.visitors, c.bounce]
				}]
			})]
		})
	});
}
var B = {
	good: "success",
	"needs-improvement": "warning",
	poor: "danger"
}, V = () => ({
	good: h("Good"),
	"needs-improvement": h("Needs Improvement"),
	poor: h("Poor")
});
function H() {
	let r = t(), i = g("analytics/vitals", {
		...r.input,
		limit: 8
	}, { placeholderData: A }), a = e(r.input), o = i.data, s = (e) => e === null ? "–" : e >= 1e3 ? h("{count} s", { count: new Intl.NumberFormat(p(), { maximumFractionDigits: 1 }).format(e / 1e3) }) : h("{count} ms", { count: n(e) }), c = (e) => e === null ? "–" : new Intl.NumberFormat(p(), { maximumFractionDigits: 2 }).format(e);
	if (a.data?.mode === "counts") return null;
	let l = Math.max(0, ...(o?.pages ?? []).map((e) => e.lcp ?? 0)), u = o && [
		{
			label: h("Largest Contentful Paint"),
			short: h("Loading"),
			value: s(o.site.lcp),
			rating: o.site.lcpRating
		},
		{
			label: h("Interaction to Next Paint"),
			short: h("Responding"),
			value: s(o.site.inp),
			rating: o.site.inpRating
		},
		{
			label: h("Cumulative Layout Shift"),
			short: h("Steadiness"),
			value: c(o.site.cls),
			rating: o.site.clsRating
		}
	];
	return /* @__PURE__ */ M(w, {
		title: h("Page Speed"),
		children: i.isError ? /* @__PURE__ */ M(C, {
			compact: !0,
			title: h("Couldn’t load the page speed"),
			onRetry: () => i.refetch(),
			retrying: i.isFetching
		}) : o ? o.site.samples === 0 ? /* @__PURE__ */ M(x, {
			compact: !0,
			icon: "gauge",
			title: h("No speed measured in this period")
		}) : /* @__PURE__ */ N("div", {
			className: k("transition-opacity duration-move", i.isPlaceholderData && "opacity-60"),
			children: [
				/* @__PURE__ */ M("div", {
					className: "grid grid-cols-1 gap-4 sm:grid-cols-3",
					children: u.map((e) => /* @__PURE__ */ M(O, {
						content: e.label,
						children: /* @__PURE__ */ N("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ M(D, {
								label: e.short,
								value: e.value
							}), e.rating && /* @__PURE__ */ M(v, {
								tone: B[e.rating],
								className: "mt-2",
								children: V()[e.rating]
							})]
						})
					}, e.label))
				}),
				/* @__PURE__ */ N("div", {
					className: "mb-1 mt-8 flex items-center gap-3 text-2xs font-medium text-faint",
					children: [
						/* @__PURE__ */ M("span", {
							className: "flex-1 pl-2",
							children: h("Page")
						}),
						/* @__PURE__ */ M("span", {
							className: "w-16 text-right",
							children: h("Loading")
						}),
						/* @__PURE__ */ M("span", {
							className: "hidden w-20 text-right md:inline-block",
							children: h("Responding")
						}),
						/* @__PURE__ */ M("span", {
							className: "hidden w-20 text-right md:inline-block",
							children: h("Steadiness")
						}),
						/* @__PURE__ */ M("span", {
							className: "w-36 pr-1 text-right",
							children: h("Rating")
						})
					]
				}),
				/* @__PURE__ */ M("ul", {
					className: "m-0 list-none space-y-0.5 p-0",
					children: o.pages.map((e) => /* @__PURE__ */ M("li", {
						className: "min-w-0",
						children: /* @__PURE__ */ M(y, {
							share: l > 0 ? (e.lcp ?? 0) / l : 0,
							label: /* @__PURE__ */ M("span", {
								className: "truncate",
								children: e.label
							}),
							to: r.linkWith({
								dimension: "page",
								op: "is",
								value: e.path
							}),
							value: /* @__PURE__ */ N("span", {
								className: "flex items-center gap-3",
								children: [
									/* @__PURE__ */ M("span", {
										className: "w-16 text-right",
										children: s(e.lcp)
									}),
									/* @__PURE__ */ M("span", {
										className: "hidden w-20 text-right md:inline-block",
										children: s(e.inp)
									}),
									/* @__PURE__ */ M("span", {
										className: "hidden w-20 text-right md:inline-block",
										children: c(e.cls)
									}),
									/* @__PURE__ */ M("span", {
										className: "flex w-36 justify-end",
										children: e.rating ? /* @__PURE__ */ M(v, {
											tone: B[e.rating],
											children: V()[e.rating]
										}) : /* @__PURE__ */ M(O, {
											content: h("Fewer than 10 visits measured"),
											children: /* @__PURE__ */ M("span", { children: h("{count} measured", { count: e.samples }) })
										})
									})
								]
							})
						})
					}, e.key))
				})
			]
		}) : /* @__PURE__ */ M(E, { className: "h-40" })
	});
}
export { F as default };
