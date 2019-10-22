import { default as React, Suspense, lazy } from "react";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import App from "./";

const routes = [{
	path: "/home",
	component: "./home",
}, {
	path: "/",
	component: "./login",
}];

export function Routes() {
	return(
		<Router history={createBrowserHistory()}>
			<Suspense fallback={<div className="spinner round"></div>}>
				<App routes={routes} />
			</Suspense>
		</Router>
	);
}

export function DynamicRoute(route: any) {
	if (!route.path && !route.component) return null;

	const Component = lazy(() => import(`${route.component}/`));

	return(<Route path={route.path} component={Component} />);
}
