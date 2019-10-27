import * as React from "react";

import { Box, Grid, Typography } from "@material-ui/core";

export default function ParallaxMiddle() {
	return(
		<Grid container spacing={3}>
			<Grid item xs={12}>
				<Box mt={16} mb={2}>
					<Typography align="center" variant="h4">Estimate your budgets</Typography>
				</Box>
				<Box mt={4} mb={24}>
					<Typography align="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod feugiat malesuada.</Typography>
					<Typography align="center">Morbi blandit nisl eu faucibus eleifend. Fusce dapibus facilisis nisl vitae scelerisque.</Typography>
					<Typography align="center"> Suspendisse vitae diam interdum, vehicula tellus eu, posuere massa.</Typography>
				</Box>
			</Grid>
		</Grid>
	);
}
