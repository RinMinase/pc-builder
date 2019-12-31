import * as React from "react";

import { Grid, Link, Typography } from "@material-ui/core";
import { Favorite, GitHub } from "@material-ui/icons";

export default function ParallaxFooter() {
	return(
		<Grid container spacing={3}>
			<Grid item xs={12}>
				<Typography align="center">
					<Favorite color="error" />
					<span>&nbsp;Open Source</span>
				</Typography>
				<Typography align="center">
					<GitHub />
					<span>&nbsp;&nbsp;</span>
					<Link href="https://github.com/RinMinase/pc-builder"
						target="_blank"
						rel="noopener">View on GitHub</Link>
				</Typography>
			</Grid>
		</Grid>
	);
}
