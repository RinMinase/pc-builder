import React from "react";
import { Link } from "react-router-dom";

import { AppBar, Hidden, IconButton, MenuItem, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

export default function Navbar(props: any) {
	const { onSidebarOpen } = props;

	return(
		<div>
			<AppBar position="fixed">
				<Toolbar>
					<Typography variant="h6" style={{ flexGrow: 1 }}>
						<MenuItem component={Link}
							to={"/"}
							style={{ paddingLeft: "8px" }}>PC Builder</MenuItem>
					</Typography>

					<Hidden mdDown>
						<MenuItem component={Link} to={"/home"}>Home</MenuItem>
						<MenuItem component={Link} to={"/about"}>About</MenuItem>
					</Hidden>
					<Hidden lgUp>
						<IconButton edge="start" color="inherit" onClick={onSidebarOpen}>
							<MenuIcon />
						</IconButton>
					</Hidden>
				</Toolbar>
			</AppBar>
		</div>
	);
}
