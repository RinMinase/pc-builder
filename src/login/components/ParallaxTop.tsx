import { default as React, useState } from "react";

import { AppBar, Box, Grid, Tab, Tabs, Typography } from "@material-ui/core";

import TabLogin from "./TabLogin";
import TabRegister from "./TabRegister";

export default function ParallaxTop() {
	const [value, setValue] = useState(0);

	const handleTabChange = (_event: any, newValue: number) => {
		setValue(newValue);
	};

	return(
		<Grid container spacing={3}>

			<Grid item xs={12} sm={7}>
				<Box mt={24} mb={2}>
					<Typography align="center" variant="h4">Build your ideal setup now!</Typography>
				</Box>
				<Box mt={6} mb={24}>
					<Typography align="center">
						<span>Lorem ipsum dolor sit amet, </span>
						<span>consectetur adipiscing elit.</span>
					</Typography>
					<Typography align="center">
						<span>Morbi blandit nisl eu faucibus eleifend. </span>
						<span>Fusce dapibus facilisis.</span>
					</Typography>
					<Typography align="center">
						<span>Suspendisse vitae diam interdum, </span>
						<span>vehicula tellus eu, posuere massa.</span>
					</Typography>
				</Box>
			</Grid>

			<Grid item xs={12} sm={5}>
				<div>
					<AppBar position="static">
						<Tabs onChange={handleTabChange} value={value} centered>
							<Tab label="Login" />
							<Tab label="Register" />
						</Tabs>
					</AppBar>

					<div hidden={value !== 0}>
						<TabLogin />
					</div>

					<div hidden={value !== 1}>
						<TabRegister />
					</div>
				</div>
			</Grid>

		</Grid>
	);
}
