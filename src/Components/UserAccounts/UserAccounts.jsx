import React, { Component } from 'react';
import './UserAccounts.css'

class UserAccounts extends Component {
		constructor(props){
			super(props);
			this.state = {
        firstName: '',
        lastName: '',
        phone: '',
        address: '',
        postal: '',
        email: '',
        password: ''
			}
		}

		firstNameVar = ''
		lastNameVar = ''
		phoneVar = ''
		addressVar = ''
		postalVar = ''
		emailVar = ''
		passwordVar = ''
	
		updateEmail = (event) => {
			this.emailVar = event.target.value
		}
		updatePassword = (event) => {
			this.passwordVar = event.target.value
		} 
		updateFirstName = (event) => {
			this.firstNameVar = event.target.value
		}
		updateLastName = (event) => {
			this.lastNameVar = event.target.value
		}
		updatePhone = (event) => {
			this.phoneVar = event.target.value
		}
		updateAddress = (event) => {
			this.addressVar = event.target.value
		}
		updatePostal = (event) => {
			this.postalVar = event.target.value
		}


		submitRegister = () => {
			this.setState({ firstName: this.firstNameVar })
			this.setState({ lastName: this.lastNameVar })
			this.setState({ phone: this.phoneVar })
			this.setState({ address: this.addressVar })
			this.setState({ postal: this.postalVar })
			this.setState({ email: this.emailVar })
			this.setState({ password: this.passwordVar })

			if (this.state.email !== '' && this.state.password !== ''
				&& this.state.firstName !== '' && this.state.lastName !== ''
				&& this.state.phone !== '' && this.state.address !== ''
				&& this.state.postal !== '') {
				this.props.updateRoute('/')
			}
			
		}

		submitSignin = () => {
			this.setState({ email: this.emailVar })
			this.setState({ password: this.passwordVar })
			
			if (this.state.email !== '' && this.state.password !== '') {
				this.props.updateRoute('/')
			}
			
		}




		render() {

	const display = () => {
			const { selection } = this.props;
			if(selection === '/signin')
			return(
				<article className="signin">
					<main className="field-title">
						<div className="measure">
							<fieldset id="sign_up" className="signup">
								<legend>Signin</legend>

								<div className='signin-fields'>
									<label  htmlFor="email-address">Email</label>
									<input  type="email" onChange={this.updateEmail}
									name="email-address" id="email-address" /> 
								</div>

								<div className='signin-fields'>
									<label  htmlFor="password">Password</label>
									<input  type="password" onChange={this.updatePassword}
									name="password" id="password" />
								</div>

								<div className='submit-button'>
									<button className='submit' onClick={this.submitSignin} >Submit
									</button>
								</div>
							</fieldset>
						</div>
					</main>
				</article>
				);
			else if (selection === '/register') {
				return (
				<article className="signin">
					<main className="field-title">
						<div className="measure">
							<fieldset id="register" className="register">
								<legend>Register</legend>
								<div className='user-info'>

									<div className='register-fields'>
										<label htmlFor="first-name">First Name</label>
										<input type="text" onChange={this.updateFirstName}
										name="first-name" id="first-name" /> 
									</div>

									<div className='register-fields'>
										<label htmlFor="last-name">last Name</label>
										<input type="text" onChange={this.updateLastName}
										name="last-name" id="last-name" /> 
									</div>

									<div className='register-fields'>
										<label htmlFor="phone">Phone Number</label>
										<input type="text" onChange={this.updatePhone}
										name="phone" id="phone" /> 
									</div>

									<div className='register-fields'>
										<label htmlFor="address">Street Address</label>
										<input type="text" onChange={this.updateAddress}
										name="address" id="address" /> 
									</div>

									<div className='register-fields'>
										<label htmlFor="postal-code">Postal Code</label>
										<input type="text" onChange={this.updatePostal}
										name="postal-code" id="postal-code" /> 
									</div>

								</div>
								<h3>The following will be used to log in:</h3>
								<div className='registration-info'>
									<div className='register-fields'>
										<label htmlFor="email-address">Email</label>
										<input type="email" onChange={this.updateEmail}
										name="email-address" id="email-address" /> 
									</div>
									<div className='register-fields'>
										<label htmlFor="password">Password</label>
										<input type="password" onChange={this.updatePassword}
										name="password" id="password" />
									</div>
								</div>
								<div className='submit-button'>
									<button className='submit' onClick={this.submitRegister} >Submit
									</button>
								</div>
							</fieldset>
						</div>
					</main>
				</article>
					);
			}
		}

		// console.log(this.state)

		return (
			<div className="user-fields">
				{display()}
			</div>
			);
	}
}

export default UserAccounts;