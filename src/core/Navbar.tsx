import React from "react";
import { Link } from "react-router-dom";

import { AppBar, IconButton, MenuItem, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

export default function Navbar() {
	return(
		<div>
			<AppBar position="fixed">
				<Toolbar>
					<IconButton edge="start" color="inherit">
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" style={{ flexGrow: 1 }}>
						<MenuItem component={Link} to={"/"} style={{ paddingLeft: "8px" }}>PC Builder</MenuItem>
					</Typography>

					<MenuItem component={Link} to={"/home"}>Home</MenuItem>
					<MenuItem component={Link} to={"/about"}>About</MenuItem>
				</Toolbar>
			</AppBar>
		</div>
	);
}
