import { prefetchAbility as e, registry as t } from "@letterncms/sdk";
import { lazy as n } from "react";
t.routes.set("/analytics", {
	path: "/analytics",
	component: n(() => import("./chunks/AnalyticsScreen-CIjzY0ju.js")),
	load: (t, { query: n }) => e("analytics/summary", { period: [
		"7d",
		"30d",
		"90d"
	].includes(n.period) ? n.period : "30d" })
}), t.widgets.set("analytics-overview", n(() => import("./chunks/WidgetOverview-BbRC2XBQ.js")));
