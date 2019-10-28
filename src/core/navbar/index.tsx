import * as React from "react";
import { Link } from "react-router-dom";

import { AppBar, IconButton, MenuItem, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import style from "./index.scss";

export default function Navbar() {
	return(
		<div>
			<AppBar position="static">
				<Toolbar>
					<IconButton edge="start" color="inherit" className={style.menuButton}>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" className={style.title}>PC Builder</Typography>

					<MenuItem component={Link} to={"/home"}>Home</MenuItem>
					<MenuItem component={Link} to={"/about"}>About</MenuItem>
				</Toolbar>
			</AppBar>
		</div>
	);
}
