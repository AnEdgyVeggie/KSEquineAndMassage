import React from 'react';
import './About.css'
import Profile from './profile.jpg'
import Action from './action.jpg'

const About = () => {
	return(
		<div className='about'>
			<h1 className="intro">My name is Kurstie Sylvester.</h1>
			<div className='profile'>
				<p className='information' >I graduated from the D’arcy Lane Equine Massage 
				Program at Trios College. I am a registered equine 
				massage therapist (REMT) through the International 
				Federation of Equine Massage Therapists (IFREMT). 
				I worked at a small animal clinic as an Registered 
				Vet Technicion (RVT) for 7 years prior to deciding 
				to change careers and begin my massage business. I 
				have two horses (a quarter horse and an appendix), 
				and have competed in various western riding 
				disciplines since I was very young. I also have a 
				few crazy Jack Russell terriers. I have a love for 
				animals and it is very important to me to put their needs first!</p>
				<img alt='profileimg' src={Profile} />
			</div>
				<h2>What is it we do?</h2>
			<div className='service' >
				<img alt='serviceimg' src={Action} />
				<p className='information' >I offer equine and canine massage, pulsed electromagnetic 
				field therapy (PEMF), red light therapy, and I am taking 
				classes for kinesiology taping for dogs and horses. I am 
				also a registered veterinary technician (RVT) through the 
				Ontario Association of Veterinary Technicians (OAVT).  If 
				you have a concern with your horse or your dog, or would 
				just like to spoil them, please feel free to contact me</p>
			</div>
		</div>
		)
}

export default About;