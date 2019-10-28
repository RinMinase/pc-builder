import * as React from "react";

import ParallaxTop from "./components/ParallaxTop";
import ParallaxMiddle from "./components/ParallaxMiddle";
import ParallaxFooter from "./components/ParallaxFooter";

export default function Login() {
	return(
		<>
			<ParallaxTop></ParallaxTop>
			<ParallaxMiddle></ParallaxMiddle>
			<ParallaxFooter></ParallaxFooter>
		</>
	);
}
