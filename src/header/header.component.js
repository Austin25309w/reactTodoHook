import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.css'

const Header = () => (
    <div className='header_container'>
        
        <Link to='/reactTodoHook/' className='option'>HOME </Link>
        <Link className="option" to='/reactTodoHook/calculator'>
            CALCULATOR </Link>
        <Link className='option' to='/reactTodoHook/todo'>
            TODO </Link>
        <Link className='option' to='/reactTodoHook/carloan'>
        CAR LOAN </Link>
        <Link className='option' to='/reactTodoHook/mortage'>
            MORTGAGE </Link>
    </div>
)

export default Header