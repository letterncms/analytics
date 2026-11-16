import { locale as e, setQuery as t, t as n, useAbility as r, useLocation as i } from "@letterncms/sdk";
import { useMemo as a } from "react";
import { keepPreviousData as o } from "@tanstack/react-query";
// admin/src/data.ts
var s = [
	"30d",
	"realtime",
	"today",
	"yesterday",
	"7d",
	"90d",
	"12mo",
	"custom"
], c = {
	realtime: () => n("Last 30 Minutes"),
	today: () => n("Today"),
	yesterday: () => n("Yesterday"),
	"7d": () => n("Last 7 Days"),
	"30d": () => n("Last 30 Days"),
	"90d": () => n("Last 90 Days"),
	"12mo": () => n("Last 12 Months"),
	custom: () => n("Custom Period")
}, l = {
	visitors: {
		label: () => n("Visitors"),
		good: "up",
		whole: !0
	},
	visits: {
		label: () => n("Visits"),
		good: "up",
		whole: !0
	},
	views: {
		label: () => n("Page Views"),
		good: "up",
		whole: !0
	},
	viewsPerVisit: {
		label: () => n("Views per Visit"),
		good: "up"
	},
	bounceRate: {
		label: () => n("Bounce Rate"),
		good: "down"
	},
	visitDuration: {
		label: () => n("Visit Duration"),
		good: "up"
	},
	timeOnPage: {
		label: () => n("Time on Page"),
		good: "up"
	},
	scrollDepth: {
		label: () => n("Scroll Depth"),
		good: "up"
	},
	conversions: {
		label: () => n("Conversions"),
		good: "up",
		whole: !0
	},
	conversionRate: {
		label: () => n("Conversion Rate"),
		good: "up"
	}
};
function u(e, t) {
	return e?.mode === "counts" ? ["views"] : t.some((e) => e.dimension === "goal") ? [
		"conversions",
		"conversionRate",
		"visits",
		"views",
		"bounceRate",
		"visitDuration"
	] : t.some((e) => e.dimension === "page" && e.op !== "is_not") ? [
		"visitors",
		"visits",
		"views",
		"bounceRate",
		"timeOnPage",
		"scrollDepth"
	] : [
		"visitors",
		"visits",
		"views",
		"viewsPerVisit",
		"bounceRate",
		"visitDuration"
	];
}
function d(t) {
	return t == null ? "–" : new Intl.NumberFormat(e()).format(t);
}
function f(t) {
	return t == null ? "–" : new Intl.NumberFormat(e(), {
		notation: t >= 1e4 ? "compact" : "standard",
		maximumFractionDigits: 1
	}).format(t);
}
function p(t, n = 0) {
	return t == null ? "–" : new Intl.NumberFormat(e(), {
		style: "percent",
		maximumFractionDigits: n
	}).format(t);
}
function m(e) {
	if (e == null) return "–";
	let t = Math.round(e);
	if (t < 60) return n("{count}s", { count: t });
	let r = Math.floor(t / 3600), i = Math.floor(t % 3600 / 60), a = String(t % 60).padStart(2, "0");
	return r > 0 ? `${r}:${String(i).padStart(2, "0")}:${a}` : `${i}:${a}`;
}
function h(t, n) {
	if (n == null) return "–";
	switch (t) {
		case "bounceRate":
		case "conversionRate": return p(n, +(n > 0 && n < .1));
		case "scrollDepth": return p(n / 100);
		case "viewsPerVisit": return new Intl.NumberFormat(e(), {
			minimumFractionDigits: 1,
			maximumFractionDigits: 1
		}).format(n);
		case "visitDuration":
		case "timeOnPage": return m(n);
		default: return d(n);
	}
}
function g(e, t) {
	return e != null && t != null && t > 0 ? (e - t) / t : null;
}
function _(t, r, i = !1) {
	let a = r === "minute" || r === "hour" ? {
		hour: "numeric",
		minute: "2-digit",
		...i ? {
			weekday: "short",
			month: "short",
			day: "numeric"
		} : {}
	} : r === "month" ? {
		month: i ? "long" : "short",
		year: "numeric"
	} : {
		month: "short",
		day: "numeric",
		...i ? {
			weekday: "short",
			year: "numeric"
		} : {}
	}, o = (t.length === 7 ? /* @__PURE__ */ new Date(`${t}-01T12:00:00`) : t.length > 10 ? new Date(t.replace(" ", "T")) : /* @__PURE__ */ new Date(`${t}T12:00:00`)).toLocaleString(e(), a);
	return r === "week" && i ? n("Week of {date}", { date: o }) : o;
}
function v(e) {
	return _(e, "day");
}
function y(e) {
	return e ? e.split("\n").flatMap((e) => {
		let [t, n, ...r] = e.split(":");
		if (!t || ![
			"is",
			"is_not",
			"contains"
		].includes(n)) return [];
		let i = r.join(":");
		return [{
			dimension: t,
			op: n,
			value: i === "∅" ? null : i
		}];
	}) : [];
}
function b(e) {
	return e.length ? e.map((e) => `${e.dimension}:${e.op}:${e.value ?? "∅"}`).join("\n") : null;
}
function x() {
	let { query: e, path: n } = i(), r = s.includes(e.period) ? e.period : "30d", o = r === "custom" ? e.from : void 0, c = r === "custom" ? e.to : void 0, l = e.f, u = a(() => y(l), [l]), d = {
		period: r,
		...o ? { from: o } : {},
		...c ? { to: c } : {}
	}, f = (e) => {
		let t = new URLSearchParams(window.location.search), r = b([...u.filter((t) => t.dimension !== e.dimension), e]);
		return r ? t.set("f", r) : t.delete("f"), `${n}?${t.toString()}`;
	};
	return {
		period: r,
		from: o,
		to: c,
		filters: u,
		range: d,
		input: {
			...d,
			filters: u
		},
		setPeriod: (e, n) => t({
			period: e === "30d" ? null : e,
			from: n?.from ?? null,
			to: n?.to ?? null
		}, !1),
		setFilters: (e) => t({ f: b(e) }, !1),
		linkWith: f
	};
}
function S(e, t = {}) {
	let n = e.period === "realtime";
	return r("analytics/summary", {
		...e,
		...t.compare ? { compare: !0 } : {}
	}, {
		placeholderData: o,
		refetchInterval: t.refetch ?? (n ? 15e3 : 6e4)
	});
}
function C(e, t, n = 8, i = !0) {
	return r("analytics/breakdown", {
		...e,
		dimension: t,
		limit: n
	}, {
		placeholderData: o,
		enabled: i,
		refetchInterval: e.period === "realtime" ? 15e3 : 6e4
	});
}
function w(e, t) {
	let r = t.key;
	return e === "sources" && r === null ? n("Direct") : e === "countries" ? r ? D(r) : n("Unknown") : e === "channels" ? T[r ?? "direct"]?.() ?? t.label : e === "devices" ? {
		desktop: () => n("Desktop"),
		mobile: () => n("Mobile"),
		tablet: () => n("Tablet")
	}[r ?? ""]?.() ?? t.label : e === "goals" ? E(t.label) : t.label === "Other" ? n("Other") : t.label;
}
var T = {
	direct: () => n("Direct"),
	search: () => n("Search Engines"),
	ai: () => n("AI Assistants"),
	social: () => n("Social Networks"),
	email: () => n("Email"),
	paid: () => n("Paid Ads"),
	referral: () => n("Other Websites"),
	campaign: () => n("Campaigns")
};
function E(e) {
	return {
		"Outbound Link": () => n("Outbound Link"),
		"File Download": () => n("File Download"),
		"Form Sent": () => n("Form Sent"),
		"Page Not Found": () => n("Page Not Found")
	}[e]?.() ?? e;
}
function D(t) {
	try {
		return new Intl.DisplayNames([e()], { type: "region" }).of(t) ?? t;
	} catch {
		return t;
	}
}
function O(e) {
	let t = {
		page: () => n("Page"),
		goal: () => n("Goal"),
		entry: () => n("Entry Page"),
		exit: () => n("Exit Page"),
		channel: () => n("Channel"),
		source: () => n("Source"),
		medium: () => n("Medium||campaign"),
		campaign: () => n("Campaign"),
		country: () => n("Country"),
		device: () => n("Device"),
		browser: () => n("Browser"),
		os: () => n("System")
	}[e.dimension](), r = {
		page: "pages",
		goal: "goals",
		entry: "entries",
		exit: "exits",
		channel: "channels",
		source: "sources",
		medium: "sources",
		campaign: "campaigns",
		country: "countries",
		device: "devices",
		browser: "browsers",
		os: "os"
	}[e.dimension], i = w(r, {
		key: e.value,
		label: e.value ?? ""
	});
	return e.op === "is_not" ? n("{dimension} is not {value}", {
		dimension: t,
		value: i
	}) : e.op === "contains" ? n("{dimension} contains {value}", {
		dimension: t,
		value: i
	}) : n("{dimension}: {value}", {
		dimension: t,
		value: i
	});
}
export { w as _, E as a, u as c, c as d, v as f, S as g, x as h, m as i, d as l, C as m, g as n, O as o, _ as p, f as r, h as s, l as t, p as u };
