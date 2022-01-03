import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.css'

const Header = () => (
    <div className='header_container'>
        
        <Link to='/' className='option'>HOME </Link>
        <Link className="option" to='/calculator'>
            CALCULATOR </Link>
        <Link className='option' to='/todo'>
            TODO </Link>
    </div>
)

export default Header