import React from 'react';
import './index.scss';

const NavList = () => {
	return (
		<div className='nav-wrapper'>
			<div className='top-container'>
				<h4>PROJECT DASHBOARD</h4>
				<div className='profile'>
					<img
						src='https://image.moviecool.asia/person/qGprlQYGORj/photo.jpeg'
						alt=''
					/>
					<div className='text'>
						<h3>Will Wu</h3>
						<p>WEB DESIGNER</p>
					</div>
				</div>
			</div>
			<div className='list-container'>
				<ul className='menu'>
					<p>MENU</p>
					<li>Dashboard</li>
					<li>All Users</li>
					<li>Documents</li>
					<li>Conversations</li>
					<li>Projects</li>
					<li>Schedule</li>
					<li>Payments</li>
				</ul>
				<ul className='support'>
					<p>SUPPORT</p>
					<li>Need Help?</li>
					<li>Contact Us</li>
				</ul>
				<ul className='settings'>
					<p>SETTING</p>
					<li>Account</li>
					<li>Dark Mode</li>
					<li>Log Out</li>
				</ul>
			</div>
			<div className='footer'>
				<h5>Project Dashboard Inc.2020</h5>
				<p>
					Created with love for the community of designers and project manager
				</p>
			</div>
		</div>
	);
};

export default NavList;
