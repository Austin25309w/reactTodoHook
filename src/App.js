import React from 'react';
import './App.css'
import Calculator from './TeslaPageComponents/calculator_2022/Calculator';
import FunctionTodo from './TeslaPageComponents/Todo/FunctionTodo';
import HomePage from './TeslaPageComponents/pages/homepage';
import { Switch, Route } from 'react-router-dom';
import Header from './TeslaPageComponents/header/header.component';
import AprCalculator from './TeslaPageComponents/aprCalculator/AprCalculator';
import CarLoan from './TeslaPageComponents/CarLoan/CarLoan';
import EvMile from './TeslaPageComponents/EvMile/EvMile';
import StocksComponent from './TeslaPageComponents/Stocks/StocksComponent';
import HackerNews from './TeslaPageComponents/Hacker_News/HackerNews';


function App() {
    return (
        <div className='App'>
        <Switch>
            <Route exact path='/reactTodoHook/' component = { HomePage }/>
            <Route path = '/reactTodoHook/calculator' component = { Calculator }/>
            <Route path= '/reactTodoHook/aprcalculator' component = { AprCalculator}/>
            <Route path= '/reactTodoHook/carloancalculator' component = { CarLoan}/>
            <Route path = '/reactTodoHook/todo' component ={ FunctionTodo }/>
            <Route path = '/reactTodoHook/evmiles' component ={ EvMile }/>
            <Route path = '/reactTodoHook/stocks' component ={ StocksComponent }/>
            <Route path = '/reactTodoHook/news' component ={ HackerNews }/>

            
        </Switch>
        <Header/>
        </div>
       
    )
}

export default App


// https://bit.ly/3FEfd1w