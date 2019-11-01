import { default as React } from "react";
import useForm from "react-hook-form";

import { Box, Button, Grid, Paper, TextField } from "@material-ui/core";

export default function TabLogin() {
	const { register, handleSubmit } = useForm();
	const onSubmit = (_values: object) => {
		// submit
	};

	return(
		<Paper>
			<Box p={3}>
				<form onSubmit={handleSubmit(onSubmit)} autoComplete="off" noValidate>
					<Box mt={1}>
						<TextField
							label="Username or Email"
							name={"user"}
							inputRef={register}
							margin="normal"
							variant="outlined"
							fullWidth
						/>
					</Box>
					<Box mt={2}>
						<TextField
							label="Password"
							type="password"
							name="password"
							inputRef={register}
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
