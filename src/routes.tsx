import { default as React, Suspense, lazy } from "react";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Grid } from "@material-ui/core";

import App from "./";
import Navbar from "./core/navbar";

const routes = [{
	path: "/home",
	component: "./home",
}, {
	path: "/",
	component: "./login",
}];

function renderLoader() {
	return(
		<>
			<Navbar />
			<Grid
				container
				spacing={0}
				direction="column"
				justify="center"
				alignItems="center"
				style={{ minHeight: "100vh" }}>
				<div className="spinner round"></div>
			</Grid>
		</>
	);
}

export function Routes() {
	return(
		<Router history={createBrowserHistory()}>
			<Suspense fallback={renderLoader()}>
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
