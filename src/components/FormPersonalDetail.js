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

export class FormPersonalDetails extends Component {
	continue = (e) => {
		e.preventDefault();
		this.props.nextStep();
	};
	back = (e) => {
		e.preventDefault();
		this.props.prevStep();
	};

	render() {
		const { values, HandleChange } = this.props;
		return (
			<ThemeProvider theme={theme}>
				<React.Fragment>
					<AppBar>
						<Typography mx='auto' variant='h6' component='div'>
							Enter personal Details
						</Typography>
					</AppBar>
					<TextField
						placeholder='Enter your occupation'
						onChange={HandleChange("occupation")}
						defaultValue={values.occupation}
					/>
					<br />
					<TextField
						placeholder='Enter your City'
						onChange={HandleChange("city")}
						defaultValue={values.city}
					/>
					<br />
					<TextField
						placeholder='Enter your Bio'
						onChange={HandleChange("bio")}
						defaultValue={values.bio}
					/>
					<br />
					<RaisedButton
						variant={"contained"}
						style={styles.button}
						onClick={this.continue}>
						continue
					</RaisedButton>
					<RaisedButton
						variant={"contained"}
						color={"secondary"}
						style={styles.button}
						onClick={this.back}>
						back
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

export default FormPersonalDetails;
