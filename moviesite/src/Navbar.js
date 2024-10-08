import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="logo">
				<h2>MovieWebsite</h2>
			</div>
			<ul className="nav-links">
				<li><Link to="/">Home</Link></li>
				<li><Link to="/movies">Movie List</Link></li>
				<li><Link to="/about">About Us</Link></li>
				<li><Link to="/contact">Contact Us</Link></li>
			</ul>
		</nav>
	);
};

export default Navbar;
