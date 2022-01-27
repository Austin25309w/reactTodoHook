import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './header.styles.css'
import Time from '../Time/Time';
import Resizewindow from '../../functionComponents/resizeWindowWIdth/Resizewindow';
import MiniWeather from '../Weather/MiniWeather';


const Header = () => {
    const [calToggle, setCalToggle] = useState(false);
    const [menuToggle, setMenuToggle] = useState(false);


    const toggleCalculation = () => {
        setCalToggle(!calToggle)
        console.log('1')
    }
    

    const toggleMenu =() => {
        setMenuToggle(!menuToggle);
    }



 

    return (
    
        <div className='header_container'>
            {/* { menuToggle? 'headerA': 'headerA-hide'} */}
            <div className= {window.innerWidth < 450 ? menuToggle? 'headerA': 'headerA-hide' : 'headerA'}>
                    <Link onClick={toggleMenu} to='/reactTodoHook/' className='option'>HOME </Link>
                        <div className='dropup'>
                            <Link onClick={toggleCalculation}  className="option" >
        
                            <div  className={calToggle? 'dropup-content': 'dropup-content-off'}>
                                <Link  to='/reactTodoHook/calculator'>Calculator</Link>
                                <Link  to='/reactTodoHook/aprcalculator'>APR Cal</Link>
                                <Link  to='/reactTodoHook/carloancalculator' >Car Loan</Link>
                                <Link  to='/reactTodoHook/evmiles'>EV miles</Link>
                            </div>
    
                                CALCULATION </Link>
                        </div>
                    <Link onClick={toggleMenu} className='option' to='/reactTodoHook/todo'>
                        TODO </Link>
                        <Link onClick={toggleMenu} className='option' to='/reactTodoHook/stocks'>
                    STOCKS </Link>
                    <Link onClick={toggleMenu} className='option' to='/reactTodoHook/news'>
                    NEWS </Link>
            </div>
    
            <div className='bottomTime'>
                <span><Time/></span>
            </div>  
            <div className='bottomWeather'>
            <span><MiniWeather/> </span>
            </div>
            <div className='resizeWindow'><Resizewindow/></div>
            <button className='hamburgerMenu' onClick={toggleMenu}>Menu</button>
        </div>
        
    )
}



export default Header