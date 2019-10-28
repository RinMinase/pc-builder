import { default as React, useState, ChangeEvent } from "react";

import { Box, Button, Grid, Paper, TextField } from "@material-ui/core";
import validator from "validator";

export default function TabRegister() {
	const [form, setForm] = useState({
		email: "",
		user: "",
		password: "",
		confirmPassword: "",
	});

	const [formErrors, setFormErrors] = useState({
		email: false,
		user: false,
		password: false,
		confirmPassword: false,
	});

	const handleChange = (field: string) => (event: ChangeEvent<HTMLInputElement>) => {
		setForm({ ...form, [field]: event.target.value });
	};

	const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
		event.preventDefault();
		let hasNoErrors: boolean = true;

		if (!validator.equals(form.password, form.confirmPassword)) {
			console.log("invalid confirm");
			setFormErrors({ ...formErrors, confirmPassword: true });
			hasNoErrors = false;
		}

		if (!validator.isEmail(form.email)) {
			console.log("invalid email");
			setFormErrors({ ...formErrors, email: true });
			hasNoErrors = false;
		}

		if (!validator.isLength(form.user, { min: 6, max: 12 })) {
			console.log("invalid user");
			setFormErrors({ ...formErrors, user: true });
			hasNoErrors = false;
		}

		if (!validator.isLength(form.password, { min: 6, max: 12 })) {
			console.log("invalid pw");
			setFormErrors({ ...formErrors, password: true });
			hasNoErrors = false;
		}

		if (hasNoErrors) {
			console.log("form success");
		}
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
						error={ formErrors.email }
						fullWidth
					/>
					<TextField
						label="Username"
						value={form.user}
						onChange={handleChange("user")}
						margin="normal"
						variant="outlined"
						helperText={ formErrors.user ? "Should be 6-12 characters long" : "" }
						error={ formErrors.user }
						fullWidth
					/>
					<TextField
						label="Password"
						type="password"
						value={form.password}
						onChange={handleChange("password")}
						margin="normal"
						variant="outlined"
						helperText={ formErrors.password ? "Should be 6-12 characters long" : "" }
						error={ formErrors.password }
						fullWidth
					/>
					<TextField
						label="Confirm Password"
						type="password"
						value={form.confirmPassword}
						onChange={handleChange("confirmPassword")}
						margin="normal"
						variant="outlined"
						error={ formErrors.confirmPassword }
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
									color="secondary"
									fullWidth>Register</Button>
							</Grid>
						</Grid>
					</Box>

				</form>
			</Box>
		</Paper>
	);
}
