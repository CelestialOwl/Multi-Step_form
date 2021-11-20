import React, { Component } from "react";
import AppBar from "@mui/material/AppBar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import RaisedButton from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { orange } from "@mui/material/colors";

const theme = createTheme({
	status: {
		danger: orange[500],
	},
});

export class Confirm extends Component {
	continue = (e) => {
		e.preventDefault();
		this.props.nextStep();
	};
	back = (e) => {
		e.preventDefault();
		this.props.prevStep();
	};

	render() {
		const {
			values: { firstName, lastName, email, occupation, city, bio },
		} = this.props;
		return (
			<ThemeProvider theme={theme}>
				<React.Fragment>
					<AppBar>
						<Typography mx='auto' variant='h6' component='div'>
							Confirm User Details
						</Typography>
					</AppBar>

					<List>
						<ListItem>
							<ListItemText primary='First Name' secondary={firstName} />
						</ListItem>
						<ListItem>
							<ListItemText primary='Last Name' secondary={lastName} />
						</ListItem>
						<ListItem>
							<ListItemText primary='Email' secondary={email} />
						</ListItem>
						<ListItem>
							<ListItemText primary='Occupation' secondary={occupation} />
						</ListItem>
						<ListItem>
							<ListItemText primary='city' secondary={city} />
						</ListItem>
						<ListItem>
							<ListItemText primary='Bio' secondary={bio} />
						</ListItem>
					</List>
					<br />
					<RaisedButton
						variant={"contained"}
						style={styles.button}
						onClick={this.continue}>
						Confirm & Continue
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

export default Confirm;
