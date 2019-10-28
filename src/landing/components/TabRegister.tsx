import { default as React, useState, ChangeEvent } from "react";

import { Box, Button, Grid, Paper, TextField } from "@material-ui/core";

export default function TabRegister() {
	const [form, setForm] = useState({
		email: "",
		user: "",
		password: "",
		confirmPassword: "",
	});

	const handleChange = (field: string) => (event: ChangeEvent<HTMLInputElement>) => {
		setForm({ ...form, [field]: event.target.value });
	};

	const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	return(
		<Paper>
			<Box p={3}>
				<form onSubmit={handleSubmit} autoComplete="off" noValidate>
					<Box mt={1}></Box>
					<TextField
						label="Email"
						value={form.email}
						onChange={handleChange("email")}
						margin="normal"
						variant="outlined"
						fullWidth
					/>
					<TextField
						label="Username"
						value={form.user}
						onChange={handleChange("user")}
						margin="normal"
						variant="outlined"
						fullWidth
					/>
					<TextField
						label="Password"
						type="password"
						value={form.password}
						onChange={handleChange("password")}
						margin="normal"
						variant="outlined"
						fullWidth
					/>
					<TextField
						label="Confirm Password"
						type="password"
						value={form.confirmPassword}
						onChange={handleChange("confirmPassword")}
						margin="normal"
						variant="outlined"
						fullWidth
					/>

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
									fullWidth>Register</Button>
							</Grid>
						</Grid>
					</Box>

				</form>
			</Box>
		</Paper>
	);
}
