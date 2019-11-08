import { default as React } from "react";
import useForm from "react-hook-form";

import {
	Box,
	Button,
	Checkbox,
	FormControlLabel,
	Grid,
	Paper,
	TextField,
} from "@material-ui/core";

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
							<Grid container item xs={6}>
							<FormControlLabel
									className="ml-1"
									control={
										<Checkbox
											name="remember"
											inputRef={register}
											color="primary"
										/>
									}
									label="Remember me"
								/>
							</Grid>
							<Grid item xs={6}>
								<Button type="submit"
									size="large"
									variant="contained"
									color="primary"
									fullWidth>Login</Button>
							</Grid>
							<Grid item xs={4}></Grid>
							<Grid item xs={4}></Grid>
							<Grid item xs={4}></Grid>
						</Grid>
					</Box>

				</form>
			</Box>
		</Paper>
	);
}
