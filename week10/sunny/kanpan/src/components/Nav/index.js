import React from 'react';
import icon from '../../icon/Oval.png';
import avatar from '../../image/avatar.jpg';
import './index.css';

const Nav = () => {
	return (
		<nav className='nav'>
			<img src={icon} alt='icon' />
			<div className='nav-right'>
				<img src={avatar} alt='avatar' />
				<span>Sunny Wang</span>
			</div>
		</nav>
	);
};

export default Nav;
