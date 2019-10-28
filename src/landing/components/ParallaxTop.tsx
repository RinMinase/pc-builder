import { default as React, useState } from "react";

import { AppBar, Box, Grid, Hidden, Tab, Tabs, Typography } from "@material-ui/core";

import TabLogin from "./TabLogin";
import TabRegister from "./TabRegister";

function IntroductionPanel() {
	return(
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
	);
}

export default function ParallaxTop() {
	const [value, setValue] = useState(0);

	const handleTabChange = (_event: any, newValue: number) => {
		setValue(newValue);
	};

	return(
		<Grid container spacing={3}>

			<Hidden xsDown>
				<IntroductionPanel />
			</Hidden>

			<Grid item xs={12} sm={5}>

				<Hidden xsDown><Box mt={4} /></Hidden>

				<AppBar position="static">
					<Tabs onChange={handleTabChange} value={value} centered>
						<Tab label="Login" />
						<Tab label="Register" />
					</Tabs>
				</AppBar>

				{ value === 0 ? <TabLogin /> : null }
				{ value === 1 ? <TabRegister /> : null }
			</Grid>

			<Hidden smUp>
				<IntroductionPanel />
			</Hidden>

		</Grid>
	);
}
