import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.css'
import Time from '../Time/Time';

const Header = () => (
    <div className='header_container'>

        <div className='headerA'>
                <Link to='/reactTodoHook/' className='option'>HOME </Link>
                    <div className='dropup'>
                        <Link className="option" to='/reactTodoHook/calculator'>
    
                        <div className='dropup-content'>
                            <Link to='/reactTodoHook/calculator'>Calculator</Link>
                            <Link to='/reactTodoHook/aprcalculator'>APR Cal</Link>
                            <Link to='/reactTodoHook/carloancalculator'>Car Loan</Link>
                        </div>

                            CALCULATION </Link>
                    </div>
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