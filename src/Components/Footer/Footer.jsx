import React from 'react';
import './Footer.css';
import Facebook from './facebook.png'
import Instagram from './instagram.png'

const Footer = () => {
	return (
		<div className='footer'>
			<div className='text-links'>
				<a className='text-link' 
				href='https://www.facebook.com/KSEquineK9Massage/'>Facebook</a>
				<a className='text-link' 
				href='https://www.instagram.com/ks_equine_k9_massage/'>Instagram</a>+
			</div>
			<div className='img-links'>
				<a  href='https://www.facebook.com/KSEquineK9Massage/' >
				<img className='img-link' src={Facebook} /> </a>
				<a  href='https://www.instagram.com/ks_equine_k9_massage/' >
				<img className='img-link' src={Instagram} /> </a>
			</div>
		</div>
		);
}

export default Footer;