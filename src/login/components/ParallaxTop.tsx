import * as React from "react";

import { Grid, Typography } from "@material-ui/core";

export default function ParallaxTop() {
	return(
		<>
			<Grid container spacing={3}>
				<Grid item xs={12} sm={6}>
					<Typography align="center">Introduction</Typography>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Typography align="center">Login / Register</Typography>
				</Grid>
			</Grid>
		</>
	);
}
