import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { useTheme, useMediaQuery } from "@material-ui/core";

import store from "./reducers";
import { Routes, DynamicRoute } from "./routes";
import Navbar from "./core/Navbar";
import Sidebar from "./core/Sidebar";

import "./global.scss";

export default function App(props: any) {
	const [openSidebar, setOpenSidebar] = useState(false);

	const isDesktop = useMediaQuery(useTheme().breakpoints.up("lg"));
	const isOpenSidebar = !isDesktop && openSidebar;

	return(
		<div>
			<Navbar onSidebarOpen={() => setOpenSidebar(true)} />
			<Sidebar onClose={() => setOpenSidebar(false)}
				open={isOpenSidebar}
				variant="temporary" />
			<div className="container">
				<Container routes={props.routes} />
			</div>
		</div>
	);
}

function Container(props: any) {
	return props.routes.map((route: any) => <DynamicRoute key={route.path} { ...route }/>);
}

ReactDOM.render(
	<Provider store={store}>
		<Routes />
	</Provider>,
	document.getElementById("app"),
);
