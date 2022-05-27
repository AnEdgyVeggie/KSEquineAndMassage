import React from 'react';
import './Home.css';
import profile from './profile.jpg';

const Home = () => {
	return(
			<div className='home'>
				<div className='mission-statement'>
					<h1>Our mission is to improve the health and welfare of our 
					clients' dogs and horses through a combination of massage, 
					technology, experience and most importantly, compassion.</h1>
					<img alt='profileimg' src={profile} />
				</div>
				<div>
					<p className='brief'>
					Owned and operated by a lifelong equestrian, lover of dogs, and 
					registered veterinary technician, KS Equine & K9 Massage provides services
					to extend the lives and comfort of your beloved animals! KS equine and K9 
					was founded by Kurstie Sylvester out of Brigden, Ontario with an idea of 
					providing health services to animals that often are overlooked. KS Equine
					and K9 provides services that help with the recovery, relaxation, and general
					wellbeing of your animals.
					</p>
				</div>
			</div>
		)
}

export default Home;