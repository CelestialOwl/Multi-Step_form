import React, { Component } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetail";
import Confirm from "./Confirm";
import Success from "./Sucess";

export class UserForm extends Component {
	state = {
		step: 1,
		firstName: "",
		lastName: "",
		email: "",
		occupation: "",
		city: "",
		bio: "",
	};

	//Proceed to the next step
	nextStep = () => {
		const { step } = this.state;
		this.setState({
			step: step + 1,
		});
	};

	//goback to the previous step
	prevStep = () => {
		const { step } = this.state;
		this.setState({
			step: step - 1,
		});
	};

	//handle fields change
	HandleChange = (input) => (e) => {
		this.setState({ [input]: e.target.value });
	};

	render() {
		const { step } = this.state;
		const { firstName, lastName, email, occupation, city, bio } = this.state;
		const values = { firstName, lastName, email, occupation, city, bio };
		switch (step) {
			case 1:
				return (
					<FormUserDetails
						nextStep={this.nextStep}
						HandleChange={this.HandleChange}
						values={values}
					/>
				);
			case 2:
				return (
					<FormPersonalDetails
						nextStep={this.nextStep}
						HandleChange={this.HandleChange}
						values={values}
						prevStep={this.prevStep}
					/>
				);

			case 3:
				return (
					<Confirm
						nextStep={this.nextStep}
						values={values}
						prevStep={this.prevStep}
					/>
				);
			case 4:
				return <Success />;
		}
	}
}

export default UserForm;
