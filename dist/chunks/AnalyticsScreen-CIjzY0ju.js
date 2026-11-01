import { a as e, c as t, i as n, n as r, o as i, r as a, s as o, t as s } from "./data-2PmQxBBe.js";
import { can as c, locale as l, navigate as u, t as d, useManifest as f, useTab as p } from "@letterncms/sdk";
import { useEffect as m, useId as h, useRef as g, useState as _ } from "react";
import { BarRow as v, Button as y, Delta as b, EmptyState as x, Icon as S, IconButton as C, Page as w, Segmented as T, Skeleton as E, Tooltip as D, Widget as O, cn as k, compactNumber as A } from "@letterncms/ui";
import { Fragment as j, jsx as M, jsxs as N } from "react/jsx-runtime";
// admin/src/Chart.tsx
var P = {
	top: 12,
	right: 12,
	bottom: 28,
	left: 48
};
function F(e, t) {
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
function I({ points: t, format: n, label: r, height: a = 240, pending: o }) {
	let s = g(null), [c, l] = _(0), [u, f] = _(null), p = h();
	m(() => {
		let e = s.current;
		if (!e) return;
		let t = new ResizeObserver(([e]) => l(e.contentRect.width));
		return t.observe(e), () => t.disconnect();
	}, []);
	let v = t.length, y = t.map((e) => e.value), b = F(Math.max(...y, 0), y.some((e) => !Number.isInteger(e)) || Math.max(...y, 0) < 3), x = b[b.length - 1], S = Math.max(0, c - P.left - P.right), C = a - P.top - P.bottom, w = (e) => P.left + (v <= 1 ? S / 2 : e / (v - 1) * S), T = (e) => P.top + C - (x > 0 ? e / x * C : 0), E = t.map((e, t) => `${t ? "L" : "M"}${w(t).toFixed(1)},${T(e.value).toFixed(1)}`).join(""), D = v > 1 ? `${E}L${w(v - 1).toFixed(1)},${T(0)}L${w(0).toFixed(1)},${T(0)}Z` : "", O = Math.max(2, Math.min(v, Math.floor(S / 84))), A = Math.max(1, Math.ceil((v - 1) / Math.max(1, O - 1))), j = Array.from({ length: Math.ceil(v / A) }, (e, t) => v - 1 - t * A).reverse(), I = (e) => {
		let t = e.currentTarget.getBoundingClientRect(), n = (e.clientX - t.left) / Math.max(1, t.width);
		f(Math.max(0, Math.min(v - 1, Math.round(n * (v - 1)))));
	}, L = (e) => {
		(e.key === "ArrowLeft" || e.key === "ArrowRight" || e.key === "Home" || e.key === "End") && (e.preventDefault(), f((t) => {
			if (e.key === "Home") return 0;
			if (e.key === "End") return v - 1;
			let n = t ?? v - 1;
			return Math.max(0, Math.min(v - 1, n + (e.key === "ArrowLeft" ? -1 : 1)));
		}));
	}, R = u === null ? null : t[u], z = v > 0 && R === t[v - 1];
	return /* @__PURE__ */ N("div", {
		ref: s,
		className: k("relative select-none transition-opacity duration-180", o && "opacity-60"),
		children: [
			c > 0 && /* @__PURE__ */ N("svg", {
				width: c,
				height: a,
				role: "img",
				"aria-label": r,
				tabIndex: 0,
				onKeyDown: L,
				onBlur: () => f(null),
				className: "block overflow-visible text-ink outline-none focus-visible:[&_.cms-focus]:stroke-focus",
				children: [
					/* @__PURE__ */ M("defs", { children: /* @__PURE__ */ N("linearGradient", {
						id: p,
						x1: "0",
						x2: "0",
						y1: "0",
						y2: "1",
						children: [/* @__PURE__ */ M("stop", {
							offset: "0",
							stopColor: "currentColor",
							stopOpacity: "0.1"
						}), /* @__PURE__ */ M("stop", {
							offset: "1",
							stopColor: "currentColor",
							stopOpacity: "0"
						})]
					}) }),
					b.map((e) => /* @__PURE__ */ N("g", { children: [/* @__PURE__ */ M("line", {
						x1: P.left,
						x2: c - P.right,
						y1: T(e),
						y2: T(e),
						stroke: "var(--cms-border)",
						strokeWidth: 1,
						shapeRendering: "crispEdges"
					}), /* @__PURE__ */ M("text", {
						x: P.left - 10,
						y: T(e),
						dy: "0.32em",
						textAnchor: "end",
						className: "fill-faint text-2xs tabular-nums",
						children: n(e)
					})] }, e)),
					j.map((e) => /* @__PURE__ */ M("text", {
						x: w(e),
						y: a - 8,
						textAnchor: e === 0 && v > 1 ? "start" : e === v - 1 && v > 1 ? "end" : "middle",
						className: "fill-faint text-2xs tabular-nums",
						children: i(t[e].date)
					}, e)),
					D && /* @__PURE__ */ M("path", {
						d: D,
						fill: `url(#${p})`
					}),
					/* @__PURE__ */ M("path", {
						d: E,
						fill: "none",
						stroke: "currentColor",
						strokeWidth: 2,
						strokeLinejoin: "round",
						strokeLinecap: "round"
					}),
					R && u !== null && /* @__PURE__ */ N("g", {
						pointerEvents: "none",
						children: [/* @__PURE__ */ M("line", {
							className: "cms-focus",
							x1: w(u),
							x2: w(u),
							y1: P.top,
							y2: P.top + C,
							stroke: "var(--cms-border-strong)",
							strokeWidth: 1,
							shapeRendering: "crispEdges"
						}), /* @__PURE__ */ M("circle", {
							cx: w(u),
							cy: T(R.value),
							r: 4,
							fill: "currentColor",
							stroke: "var(--cms-bg)",
							strokeWidth: 2
						})]
					}),
					/* @__PURE__ */ M("rect", {
						x: P.left,
						y: 0,
						width: S,
						height: a,
						fill: "transparent",
						onPointerMove: I,
						onPointerDown: I,
						onPointerLeave: () => f(null)
					})
				]
			}),
			R && u !== null && /* @__PURE__ */ N("div", {
				role: "status",
				className: "pointer-events-none absolute top-0 z-10 min-w-36 -translate-x-1/2 rounded-md border border-border-float bg-bg px-3 py-2 shadow-pop",
				style: { left: Math.max(P.left + 64, Math.min(c - 64, w(u))) },
				children: [/* @__PURE__ */ M("p", {
					className: "m-0 text-2xs text-muted",
					children: z ? d("Today so far") : e(R.date)
				}), /* @__PURE__ */ N("p", {
					className: "m-0 mt-1 flex items-center gap-2 text-xs text-muted",
					children: [
						/* @__PURE__ */ M("span", { className: "h-0.5 w-3 rounded-full bg-ink" }),
						/* @__PURE__ */ M("span", {
							className: "text-sm font-semibold tabular-nums text-ink",
							children: n(R.value)
						}),
						r
					]
				})]
			}),
			/* @__PURE__ */ N("table", {
				className: "sr-only",
				children: [/* @__PURE__ */ M("caption", { children: r }), /* @__PURE__ */ M("tbody", { children: t.map((t) => /* @__PURE__ */ N("tr", { children: [/* @__PURE__ */ M("th", {
					scope: "row",
					children: e(t.date)
				}), /* @__PURE__ */ M("td", { children: n(t.value) })] }, t.date)) })]
			})
		]
	});
}
// admin/src/AnalyticsScreen.tsx
var L = {
	"7d": () => d("7 days"),
	"30d": () => d("30 days"),
	"90d": () => d("90 days")
};
function R() {
	let [e, i] = p(r, "period"), [o, l] = p(s.map((e) => e.key), "metric"), f = t(e), m = f.data, h = m?.mode === "counts", g = h ? s.filter((e) => e.counts) : s, _ = h ? "views" : o, v = /* @__PURE__ */ N(j, { children: [
		m && !!m.current && /* @__PURE__ */ M(z, { count: m.current }),
		/* @__PURE__ */ M(T, {
			value: e,
			onChange: i,
			options: [
				"7d",
				"30d",
				"90d"
			].map((e) => ({
				value: e,
				label: L[e]()
			}))
		}),
		c("settings.manage") && /* @__PURE__ */ M(C, {
			icon: "settings",
			label: d("Analytics Settings"),
			onClick: () => u("/settings/analytics")
		})
	] });
	if (m && !m.tracked) return /* @__PURE__ */ M(w, {
		crumbs: [{
			label: d("Analytics"),
			icon: "chart"
		}],
		actions: c("settings.manage") && /* @__PURE__ */ M(C, {
			icon: "settings",
			label: d("Analytics Settings"),
			onClick: () => u("/settings/analytics")
		}),
		width: "default",
		children: m.enabled ? /* @__PURE__ */ M(x, {
			icon: "chart",
			title: d("No visits yet"),
			description: d("Visits appear here as people open your published site.")
		}) : /* @__PURE__ */ M(x, {
			icon: "chart",
			title: d("Analytics is off"),
			description: d("Turn it on to see who visits your site."),
			action: c("settings.manage") && /* @__PURE__ */ M(y, {
				variant: "primary",
				onClick: () => u("/settings/analytics"),
				children: d("Open Settings")
			})
		})
	});
	let D = s.find((e) => e.key === _);
	return /* @__PURE__ */ N(w, {
		crumbs: [{
			label: d("Analytics"),
			icon: "chart"
		}],
		actions: v,
		width: "default",
		children: [
			m && !m.enabled && /* @__PURE__ */ N("div", {
				className: "mb-6 flex items-center gap-2 rounded-md border border-border bg-surface px-3 py-2 text-sm text-muted",
				children: [
					/* @__PURE__ */ M(S, {
						name: "pause",
						size: 14,
						className: "text-faint"
					}),
					/* @__PURE__ */ M("span", {
						className: "flex-1",
						children: d("Counting visits is paused.")
					}),
					c("settings.manage") && /* @__PURE__ */ M(y, {
						size: "xs",
						variant: "ghost",
						onClick: () => u("/settings/analytics"),
						children: d("Settings")
					})
				]
			}),
			/* @__PURE__ */ M("div", {
				role: "tablist",
				"aria-label": d("Metric"),
				className: "grid grid-cols-2 border-b border-border md:grid-cols-4",
				children: g.map((e) => /* @__PURE__ */ N("button", {
					type: "button",
					role: "tab",
					"aria-selected": _ === e.key,
					onClick: () => l(e.key),
					className: k("group relative -mb-px border-b-2 py-3 pr-4 text-left outline-none transition-colors duration-120 focus-visible:bg-hover", _ === e.key ? "border-ink" : "border-transparent hover:border-border-strong"),
					children: [/* @__PURE__ */ M("span", {
						className: k("block text-xs transition-colors", _ === e.key ? "text-text" : "text-muted group-hover:text-text"),
						children: e.label()
					}), m ? /* @__PURE__ */ N("span", {
						className: "mt-1 flex items-baseline gap-2",
						children: [/* @__PURE__ */ M("span", {
							className: "text-2xl font-semibold tracking-[-0.02em] text-ink",
							children: n(e.key, m[e.key])
						}), a(m[e.key], m.previous[e.key]) !== null && /* @__PURE__ */ M(b, {
							value: a(m[e.key], m.previous[e.key]),
							good: e.good
						})]
					}) : /* @__PURE__ */ M(E, { className: "mt-2 h-6 w-20" })]
				}, e.key))
			}),
			/* @__PURE__ */ M("p", {
				className: "m-0 mt-2 text-2xs text-faint",
				children: d("Compared with the {period} before", { period: L[e]().toLowerCase() })
			}),
			/* @__PURE__ */ M("div", {
				className: "mt-6",
				children: m ? /* @__PURE__ */ M(I, {
					points: m.series.map((e) => ({
						date: e.date,
						value: e[_] ?? 0
					})),
					format: (e) => n(_, e),
					label: D.label(),
					pending: f.isPlaceholderData
				}, _) : /* @__PURE__ */ M(E, { className: "h-[240px] w-full rounded-md" })
			}),
			/* @__PURE__ */ N("div", {
				className: "mt-12 grid grid-cols-1 gap-x-10 gap-y-10 lg:grid-cols-2",
				children: [
					/* @__PURE__ */ M(H, {
						period: e,
						dimension: "pages",
						counting: h
					}),
					M(h ? U : W, { period: e }),
					h || /* @__PURE__ */ M(H, {
						period: e,
						dimension: "entries"
					}),
					h || /* @__PURE__ */ M(K, { period: e })
				]
			}),
			h && /* @__PURE__ */ N("p", {
				className: "m-0 mt-10 text-sm text-muted",
				children: [
					d("Counting page views only: nothing is read from the browser or kept about visitors."),
					" ",
					c("settings.manage") && /* @__PURE__ */ M("button", {
						type: "button",
						className: "underline underline-offset-2 hover:text-text",
						onClick: () => u("/settings/analytics"),
						children: d("Change what is counted")
					})
				]
			})
		]
	});
}
function z({ count: e }) {
	return /* @__PURE__ */ M(D, {
		content: d("Visitors active in the last five minutes"),
		children: /* @__PURE__ */ N("span", {
			className: "mr-2 flex items-center gap-1.5 text-xs text-muted",
			children: [/* @__PURE__ */ N("span", {
				className: "relative flex size-1.5",
				children: [/* @__PURE__ */ M("span", { className: "absolute inset-0 animate-ping rounded-full bg-success opacity-50 motion-reduce:hidden" }), /* @__PURE__ */ M("span", { className: "relative size-1.5 rounded-full bg-success" })]
			}), d("{count} on the site now", { count: e.toLocaleString(l()) })]
		})
	});
}
var B = (e) => e.visitors ?? e.views ?? 0;
function V({ title: e, icon: t, query: n, column: r, render: i, action: a }) {
	let o = n.data, s = Math.max(1, ...(o?.items ?? []).map(B));
	return /* @__PURE__ */ M(O, {
		title: e,
		icon: t,
		query: n,
		action: a ?? /* @__PURE__ */ M("span", {
			className: "text-2xs font-medium uppercase tracking-[0.04em] text-faint",
			children: r
		}),
		empty: o?.items.length === 0 && {
			icon: t,
			title: d("No visits in this period")
		},
		children: /* @__PURE__ */ M("div", {
			className: k("space-y-0.5 transition-opacity duration-180", n.isPlaceholderData && "opacity-60"),
			children: o?.items.map((e) => i(e, s, o.total))
		})
	});
}
function H({ period: e, dimension: t, counting: n = !1 }) {
	let r = f(), i = o(e, t), a = r.site.url?.replace(/\/$/, "") ?? "";
	return /* @__PURE__ */ M(V, {
		title: d(t === "pages" ? "Top Pages" : "Entry Pages"),
		icon: t === "pages" ? "file" : "arrow-right",
		column: d(n ? "Views" : "Visitors"),
		query: i,
		render: (e, t) => /* @__PURE__ */ M(v, {
			share: B(e) / t,
			href: a ? a + (e.path ?? "") : void 0,
			label: /* @__PURE__ */ N("span", {
				className: "flex min-w-0 items-baseline gap-2",
				children: [/* @__PURE__ */ M("span", {
					className: "truncate",
					children: e.label
				}), e.label !== e.path && /* @__PURE__ */ M("span", {
					className: "hidden truncate font-mono text-2xs text-faint sm:inline",
					children: e.path
				})]
			}),
			value: A(B(e))
		}, e.key)
	});
}
function U({ period: e }) {
	let t = o(e, "languages");
	return /* @__PURE__ */ M(V, {
		title: d("Languages"),
		icon: "translate",
		column: d("Views"),
		query: t,
		render: (e, t) => /* @__PURE__ */ M(v, {
			share: B(e) / t,
			label: e.label,
			value: A(B(e))
		}, e.key)
	});
}
function W({ period: e }) {
	let t = o(e, "sources");
	return /* @__PURE__ */ M(V, {
		title: d("Sources"),
		icon: "link",
		column: d("Visitors"),
		query: t,
		render: (e, t) => /* @__PURE__ */ M(v, {
			share: B(e) / t,
			label: e.key === null ? d("Direct") : e.label,
			value: A(B(e))
		}, e.key ?? "direct")
	});
}
var G = (e, t) => new Intl.NumberFormat(l(), {
	style: "percent",
	maximumFractionDigits: 0
}).format(t > 0 ? e / t : 0);
function K({ period: e }) {
	let [t, n] = p([
		"devices",
		"browsers",
		"os"
	], "devices"), r = o(e, t), i = {
		desktop: [() => d("Desktop"), "desktop"],
		mobile: [() => d("Mobile"), "phone"],
		tablet: [() => d("Tablet"), "tablet"]
	};
	return /* @__PURE__ */ M(V, {
		title: d("Devices"),
		icon: "desktop",
		column: "",
		query: r,
		action: /* @__PURE__ */ M(T, {
			size: "xs",
			value: t,
			onChange: n,
			options: [
				{
					value: "devices",
					label: d("Type")
				},
				{
					value: "browsers",
					label: d("Browser")
				},
				{
					value: "os",
					label: d("System")
				}
			]
		}),
		render: (e, n, r) => {
			let a = t === "devices" ? i[e.key ?? ""] : void 0;
			return /* @__PURE__ */ M(v, {
				share: B(e) / n,
				icon: a && /* @__PURE__ */ M(S, {
					name: a[1],
					size: 14,
					className: "shrink-0 text-faint"
				}),
				label: a ? a[0]() : e.key === "Other" ? d("Other") : e.label,
				value: G(B(e), r)
			}, e.key);
		}
	});
}
export { R as default };
