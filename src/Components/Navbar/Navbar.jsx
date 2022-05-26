import React from 'react';
import './Navbar.css'

const Navbar = ({ updateRoute }) => {
	return(
		<div className='Navigation'>
			<div className='subnav'>
				<button onClick={() => updateRoute('/home')} >Home</button>
				<p> | </p>
				<button onClick={() => updateRoute('/about')}>About Us</button>
				<p> | </p>
				<button onClick={() => updateRoute('/contact')}>Contact Info</button>
				<p> | </p>
				<button onClick={() => updateRoute('/book')}>Book Appointment</button>
			</div>
			<div className='subnav'>
				<button onClick={() => updateRoute('/signin')} >Log in</button>
				<p> | </p>
				<button onClick={() => updateRoute('/register')}>Register</button>
			</div>
		</div>
		)
}

export default Navbar;