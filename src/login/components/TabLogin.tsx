import { default as React, useState, ChangeEvent } from "react";

import { Box, Button, Grid, Paper, TextField } from "@material-ui/core";

export default function TabLogin() {
	const [values, setValues] = useState({
		name: "",
		password: "",
	});

	const handleChange = (field: string) => (event: ChangeEvent<HTMLInputElement>) => {
		setValues({ ...values, [field]: event.target.value });
	};

	const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	return(
		<Paper>
			<Box p={3}>
				<form onSubmit={handleSubmit} autoComplete="off" noValidate>
					<Box mt={1}>
						<TextField
							label="Username or Email"
							value={values.name}
							onChange={handleChange("name")}
							margin="normal"
							variant="outlined"
							fullWidth
						/>
					</Box>
					<Box mt={2}>
						<TextField
							label="Password"
							type="password"
							value={values.password}
							onChange={handleChange("password")}
							margin="normal"
							variant="outlined"
							fullWidth
						/>
					</Box>

					<Box mt={3} mb={1}>
						<Grid container spacing={3}>
							<Grid item xs={2}></Grid>
							<Grid item xs={2}></Grid>
							<Grid item xs={2}></Grid>
							<Grid item xs={6}>
								<Button type="submit"
									size="large"
									variant="contained"
									color="primary"
									fullWidth>Login</Button>
							</Grid>
						</Grid>
					</Box>

				</form>
			</Box>
		</Paper>
	);
}
