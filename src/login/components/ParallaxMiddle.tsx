import * as React from "react";

import { Grid, Typography } from "@material-ui/core";

export default function ParallaxMiddle() {
	return(
		<>
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Typography align="center">Middle</Typography>
				</Grid>
			</Grid>
		</>
	);
}
