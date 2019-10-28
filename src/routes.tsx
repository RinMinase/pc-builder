import { default as React, Suspense, lazy } from "react";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Grid, createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import { green, indigo } from "@material-ui/core/colors";

import App from "./";
import Navbar from "./core/navbar";

const routes = [{
	path: "/home",
	component: "./home",
}, {
	path: "/",
	component: "./landing",
}];

const theme = createMuiTheme({
	palette: {
		primary: indigo,
		secondary: {
			main: green[400],
		},
	},
});

function renderLoader() {
	return(
		<MuiThemeProvider theme={theme}>
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
		</MuiThemeProvider>
	);
}

export function Routes() {
	return(
		<Router history={createBrowserHistory()}>
			<Suspense fallback={renderLoader()}>
				<MuiThemeProvider theme={theme}>
					<App routes={routes} />
				</MuiThemeProvider>
			</Suspense>
		</Router>
	);
}

export function DynamicRoute(route: any) {
	if (!route.path && !route.component) return null;

	const Component = lazy(() => import(`${route.component}/`));

	return(<Route path={route.path} component={Component} exact />);
}
