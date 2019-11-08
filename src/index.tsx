import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./reducers";
import { Routes, DynamicRoute } from "./routes";
import Navbar from "./core/Navbar";
import Sidebar from "./core/Sidebar";

import "./global.scss";

export default function App(props: any) {
	return(
		<div>
			<Navbar />
			<Sidebar />
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
