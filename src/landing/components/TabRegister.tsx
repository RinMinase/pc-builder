import { default as React } from "react";
import { useForm } from "react-hook-form";

import { Box, Button, Fab, Grid, Paper, TextField } from "@material-ui/core";
import { Email, Facebook, GitHub } from "@material-ui/icons";
import { isEmail } from "validator";

export default function TabRegister() {
	const { register, handleSubmit, errors, watch } = useForm();
	const onSubmit = (_values: object) => {
		// submit
	};

	return(
		<Paper>
			<Box p={3}>
				<form onSubmit={handleSubmit(onSubmit)} autoComplete="off" noValidate>
					<Box mt={1}></Box>
					<TextField
						label="Email"
						name={"email"}
						inputRef={ register({ required: true, validate: (value) => isEmail(value) })}
						margin="normal"
						variant="outlined"
						helperText={
							errors.email ?
							(errors.email as any).type === "required" ? "Email is required" :
							(errors.email as any).type === "validate" ? "Email is invalid" : "" : ""
						}
						error={ !!errors.email }
						fullWidth
						required
					/>
					<TextField
						label="Username"
						name={"user"}
						inputRef={register({ required: true, minLength: 6, maxLength: 12 })}
						margin="normal"
						variant="outlined"
						helperText={
							errors.user ?
							(errors.user as any).type === "required" ? "Username is required" :
							(errors.user as any).type === "minLength" ?
								"Username should be 6 to 12 characters" :
							(errors.user as any).type === "maxLength" ?
								"Username should be 6 to 12 characters" : "" : ""
						}
						error={ !!errors.user }
						fullWidth
						required
					/>
					<TextField
						label="Password"
						type="password"
						name={"password"}
						inputRef={register({ required: true, minLength: 6, maxLength: 12 })}
						margin="normal"
						variant="outlined"
						helperText={
							errors.password ?
							(errors.password as any).type === "required" ? "Password is required" :
							(errors.password as any).type === "minLength" ?
								"Password should be 6 to 12 characters" :
							(errors.password as any).type === "maxLength" ?
								"Password should be 6 to 12 characters" : "" : ""
						}
						error={ !!errors.password }
						fullWidth
						required
					/>
					<TextField
						label="Confirm Password"
						type="password"
						name={"confirmPassword"}
						inputRef={register({
							required: true,
							validate: (value) => value === watch("password"),
						})}
						margin="normal"
						variant="outlined"
						helperText={
							errors.confirmPassword ?
							(errors.confirmPassword as any).type === "required" ?
								"Please re-type your password" :
							(errors.confirmPassword as any).type === "validate" ?
								"Your passwords does not match" : "" : ""
						}
						error={ !!errors.confirmPassword }
						fullWidth
						required
					/>

					<Box mt={3} mb={1}>
						<Grid container spacing={3}>
							<Grid item xs={2}>
								<Fab color="primary" size="medium">
									<Email />
								</Fab>
							</Grid>
							<Grid item xs={2}>
								<Fab color="primary" size="medium">
									<Facebook />
								</Fab>
							</Grid>
							<Grid item xs={2}>
								<Fab color="primary" size="medium">
									<GitHub />
								</Fab>
							</Grid>
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
