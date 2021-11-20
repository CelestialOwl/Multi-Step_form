import React, { Component } from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { orange } from "@mui/material/colors";

const theme = createTheme({
	status: {
		danger: orange[500],
	},
});

export class Success extends Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
				<React.Fragment>
					<AppBar>
						<Typography mx='auto' variant='h6' component='div'>
							Success
						</Typography>
					</AppBar>
					<h1>Thank you for your submission</h1>
					<p>You will get an email with further instructions</p>
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

export default Success;
