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

export default function Sidebar(props: any) {
	const { onClose, open } = props;

	return(
		<Drawer anchor="left"
			onClose={onClose}
			open={open}
			classes={{ paper: "sidebar" }}>
			<Grid container direction="column" alignItems="center">
				<Avatar className="avatar">
					<AccountCircle className="avatar" />
				</Avatar>
				<Typography variant="h5" className="mt-1">User</Typography>
			</Grid>
			<Divider className="mt-2" />
			<List>
				<ListItem disableGutters>
					<ListItemIcon><Dashboard /></ListItemIcon>
					<ListItemText primary="Home" />
				</ListItem>
			</List>
		</Drawer>
	);
}
