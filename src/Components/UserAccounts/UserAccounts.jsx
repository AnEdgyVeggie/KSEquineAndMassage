import React, { Component } from 'react';
import './UserAccounts.css'

class UserAccounts extends Component {
		constructor(props){
			super(props);
			this.state = {

			}
		}
	

		render() {

	const display = () => {
			console.log("made it")
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
									<input  type="email" 
									name="email-address" id="email-address" /> 
								</div>
								<div className='signin-fields'>
									<label  htmlFor="password">Password</label>
									<input  type="password" 
									name="password" id="password" />
								</div>
							</fieldset>
						</div>
					</main>
				</article>
				)

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
										<input type="text" 
										name="first-name" id="first-name" /> 
									</div>
									<div className='register-fields'>
										<label htmlFor="last-name">last Name</label>
										<input type="text" 
										name="last-name" id="last-name" /> 
									</div>
									<div className='register-fields'>
										<label htmlFor="phone">Phone Number</label>
										<input type="text" 
										name="phone" id="phone" /> 
									</div>
									<div className='register-fields'>
										<label htmlFor="address">Street Address</label>
										<input type="text" 
										name="address" id="address" /> 
									</div>
									<div className='register-fields'>
										<label htmlFor="postal-code">Postal Code</label>
										<input type="text" 
										name="postal-code" id="postal-code" /> 
									</div>
								</div>
								<h3>The following will be used to log in:</h3>
								<div className='registration-info'>
									<div className='register-fields'>
										<label htmlFor="email-address">Email</label>
										<input type="email" 
										name="email-address" id="email-address" /> 
									</div>
									<div className='register-fields'>
										<label htmlFor="password">Password</label>
										<input type="password" 
										name="password" id="password" />
									</div>
								</div>
							</fieldset>
						</div>
					</main>
				</article>
					)
			}
		}

		return (
			<div className="user-fields">
				{display()}
			</div>
			);
	}
}

export default UserAccounts;