import * as React from "react";
import { Link } from "react-router-dom";

import { AppBar, Toolbar, IconButton, Typography, Button } from "@material-ui/core";
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
					<Typography variant="h6" className={style.title}>React Test App</Typography>

					<Link to="/home"><Button>Home</Button></Link>
					<Link to="/login"><Button>Login</Button></Link>
				</Toolbar>
			</AppBar>
		</div>
	);
}
