import { locale as e, t, useAbility as n } from "@letterncms/sdk";
import { keepPreviousData as r } from "@tanstack/react-query";
// admin/src/data.ts
var i = [
	"30d",
	"7d",
	"90d"
], a = [
	{
		key: "visitors",
		label: () => t("Visitors"),
		good: "up"
	},
	{
		key: "views",
		label: () => t("Page Views"),
		good: "up",
		counts: !0
	},
	{
		key: "viewsPerVisit",
		label: () => t("Views per Visit"),
		good: "up"
	},
	{
		key: "bounceRate",
		label: () => t("Bounce Rate"),
		good: "down"
	}
];
function o(t, n) {
	return n === null ? "–" : t === "bounceRate" ? new Intl.NumberFormat(e(), {
		style: "percent",
		maximumFractionDigits: 0
	}).format(n) : t === "viewsPerVisit" ? new Intl.NumberFormat(e(), {
		minimumFractionDigits: 1,
		maximumFractionDigits: 1
	}).format(n) : new Intl.NumberFormat(e()).format(n);
}
function s(e, t) {
	return e !== null && t !== null && t > 0 ? (e - t) / t : null;
}
function c(e) {
	return n("analytics/summary", { period: e }, {
		placeholderData: r,
		refetchInterval: 6e4
	});
}
function l(t) {
	return (/* @__PURE__ */ new Date(`${t}T12:00:00`)).toLocaleDateString(e(), {
		month: "short",
		day: "numeric"
	});
}
function u(t) {
	return (/* @__PURE__ */ new Date(`${t}T12:00:00`)).toLocaleDateString(e(), {
		weekday: "short",
		month: "short",
		day: "numeric",
		year: "numeric"
	});
}
export { u as a, o as i, i as n, l as o, s as r, c as s, a as t };
