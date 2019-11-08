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
// import { makeStyles } from "@material-ui/styles";

// const useStyles = makeStyles((theme: any) => ({
// 	divider: {
// 		marginTop: theme.spacing(2),
// 	},
// 	username: {
// 		marginTop: theme.spacing(1),
// 	},
// }));

export default function Sidebar(props: any) {
	const { onClose, open } = props;
	// const styles = useStyles(props);

	return(
		<Drawer anchor="left"
			onClose={onClose}
			open={open}
			classes={{ paper: "sidebar" }}>
			<Grid container direction="column" alignItems="center">
				<Avatar className="avatar">
					<AccountCircle className="avatar" />
				</Avatar>
				<Typography variant="h5" className="mt-2">User</Typography>
			</Grid>
			<Divider className="mt-3" />
			<List>
				<ListItem disableGutters>
					<ListItemIcon><Dashboard /></ListItemIcon>
					<ListItemText primary="Home" />
				</ListItem>
			</List>
		</Drawer>
	);
}
