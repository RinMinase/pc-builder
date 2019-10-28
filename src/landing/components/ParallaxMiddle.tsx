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
		</Grid>
	);
}
