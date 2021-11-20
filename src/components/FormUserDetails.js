import React, { Component } from "react";
import AppBar from "@mui/material/AppBar";
import TextField from "@mui/material/TextField";
import RaisedButton from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { orange } from "@mui/material/colors";

const theme = createTheme({
	status: {
		danger: orange[500],
	},
});

export class FormUserDetails extends Component {
	continue = (e) => {
		e.preventDefault();
		this.props.nextStep();
	};

	render() {
		const { values, HandleChange } = this.props;
		return (
			<ThemeProvider theme={theme}>
				<React.Fragment>
					<AppBar>
						<Typography mx='auto' variant='h6' component='div'>
							Hello
						</Typography>
					</AppBar>
					<TextField
						placeholder='First Name'
						onChange={HandleChange("firstName")}
						defaultValue={values.firstName}
					/>
					<br />
					<TextField
						placeholder='Last Name'
						onChange={HandleChange("lastName")}
						defaultValue={values.lastName}
					/>
					<br />
					<TextField
						placeholder='Enter your email'
						onChange={HandleChange("email")}
						defaultValue={values.email}
					/>
					<br />
					<RaisedButton
						variant={"contained"}
						style={styles.button}
						onClick={this.continue}>
						continue
					</RaisedButton>
				</React.Fragment>
			</ThemeProvider>
		);
	}
}
const styles = {
	button: {
		margin: 15,
	},
};

export default FormUserDetails;
