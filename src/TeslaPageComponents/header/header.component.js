import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.css'
import Time from '../Time/Time';

const Header = () => (
    <div className='header_container'>

        <div className='headerA'>
                <Link to='/reactTodoHook/' className='option'>HOME </Link>
                <Link className="option" to='/reactTodoHook/calculator'>
                    CALCULATOR </Link>
                <Link className='option' to='/reactTodoHook/todo'>
                    TODO </Link>
                <Link className='option' to='/reactTodoHook/expensemanager'>
                EXPENSE_MANAGER </Link>
        </div>

        <div className='bottomTime'>
                <Time/>
        </div>  
    </div>
    
)

export default Header