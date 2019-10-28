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

		const invalidFields = {
			email: false,
			user: false,
			password: false,
			confirmPassword: false,
		};

		if (!validator.equals(form.password, form.confirmPassword)) {
			invalidFields.confirmPassword = true;
		}

		if (!validator.isEmail(form.email)) {
			invalidFields.email = true;
		}

		if (!validator.isLength(form.user, { min: 6, max: 12 })) {
			invalidFields.user = true;
		}

		if (!validator.isLength(form.password, { min: 6, max: 12 })) {
			invalidFields.password = true;
		}

		setFormErrors({ ...formErrors, ...invalidFields });
		const hasNoErrors: boolean = !Object.values(invalidFields).includes(true);

		if (hasNoErrors) {
			// Form Success
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
						helperText={ formErrors.email ? "Email is invalid" : "" }
						error={ formErrors.email }
						fullWidth
						required
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
						required
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
						required
					/>
					<TextField
						label="Confirm Password"
						type="password"
						value={form.confirmPassword}
						onChange={handleChange("confirmPassword")}
						margin="normal"
						variant="outlined"
						helperText={ formErrors.confirmPassword ? "Please make sure your passwords match" : "" }
						error={ formErrors.confirmPassword }
						fullWidth
						required
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
