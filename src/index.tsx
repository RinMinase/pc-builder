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

	const handleSidebarOpen = () => {
		setOpenSidebar(true);
	};

	const handleSidebarClose = () => {
		setOpenSidebar(false);
	};

	const isDesktop = useMediaQuery(useTheme().breakpoints.up("lg"));
	const shouldOpenSidebar = !isDesktop && openSidebar;

	return(
		<div>
			<Navbar onSidebarOpen={handleSidebarOpen} />
			<Sidebar onClose={handleSidebarClose} open={shouldOpenSidebar} variant="temporary" />
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
