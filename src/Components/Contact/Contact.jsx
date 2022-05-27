import React from 'react';
import './Contact.css'

const Contact = () => {
	return (
		<div className='contact'>
			<div className='contact-head'>
				<h1>Contact information</h1>
			</div>
				<div className='contact-methods'>
				<div className='contact-info' >
					<p>Phone: </p>
					<p> (519) 330-7412</p>
				</div>
				<div className='contact-info' >
					<p>Email:</p>
					<p>Kurstie_Sylvester@hotmail.com</p>
				</div>
				<div className='contact-info' >
					<p>Facebook: </p>
					<p><a href="https://www.facebook.com/KSEquineK9Massage/">
					facebook.com/KSEquineK9Massage</a></p>
				</div>
			</div>
		</div>	
		);
}

export default Contact;
