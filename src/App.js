import React from 'react';
import Calculator from './TeslaPageComponents/calculator_2022/Calculator';
import FunctionTodo from './TeslaPageComponents/Todo/FunctionTodo';
import HomePage from './TeslaPageComponents/pages/homepage';
import { Switch, Route } from 'react-router-dom';
import Header from './TeslaPageComponents/header/header.component';
import AprCalculator from './TeslaPageComponents/aprCalculator/AprCalculator';
import CarLoan from './TeslaPageComponents/CarLoan/CarLoan';
import './App.css'

function App() {
    return (
        <div className='App'>
        <Switch>
            <Route exact path='/reactTodoHook/' component = { HomePage }/>
            <Route path = '/reactTodoHook/calculator' component = { Calculator }/>
            <Route path= '/reactTodoHook/aprcalculator' component = { AprCalculator}/>
            <Route path= '/reactTodoHook/carloancalculator' component = { CarLoan}/>
            <Route path = '/reactTodoHook/todo' component ={ FunctionTodo }/>
        </Switch>
        <Header/>
        </div>
       
    )
}

export default App