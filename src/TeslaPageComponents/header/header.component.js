import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.css'
import Time from '../Time/Time';
import Resizewindow from '../../functionComponents/resizeWindowWIdth/Resizewindow';

const Header = () => (
    <div className='header_container'>

        <div className='headerA'>
                <Link to='/reactTodoHook/' className='option'>HOME </Link>
                    <div className='dropup'>
                        <Link className="option" >
    
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
                G-SUITE </Link>
        </div>

        <div className='bottomTime'>
                <Time/>   
        </div>  
        <div className='resizeWindow'><Resizewindow/></div>
    </div>
    
)

export default Header