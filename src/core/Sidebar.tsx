import React from "react";

import {
	Avatar,
	Divider,
	Drawer,
	Grid,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
} from "@material-ui/core";
import { AccountCircle, Dashboard } from "@material-ui/icons";

export default function Sidebar() {
	return(
		<Drawer anchor="left"
			open={true}
			variant="persistent"
			classes={{ paper: "sidebar" }}>
			<Grid container direction="column" alignItems="center">
				<Avatar style={{ width: 60, height: 60 }} >
					<AccountCircle style={{ width: 60, height: 60 }} />
				</Avatar>
				<Typography variant="h5" style={{ marginTop: 8 }}>User</Typography>
				<Divider />
				<List>
					<ListItem disableGutters>
						<ListItemIcon><Dashboard /></ListItemIcon>
						<ListItemText primary="Home" />
					</ListItem>
				</List>
			</Grid>
		</Drawer>
	);
}
