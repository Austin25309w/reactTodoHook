import React from 'react';
import Calculator from './calculator_2022/Calculator';
import FunctionTodo from './functionComponents/FunctionTodo';
import HomePage from './pages/homepage';
import { Switch, Route } from 'react-router-dom';
import Header from './header/header.component';
import CarLoan from './CarLoan/CarLoan'
import Mortgage from './Mortgage/Mortgage'
import './App.css'

function App() {
    return (
        <div className='App'>
        
        <Switch>
            <Route exact path='/reactTodoHook/' component = { HomePage }/>
            <Route path = '/reactTodoHook/calculator' component = { Calculator }/>
            <Route path = '/reactTodoHook/todo' component ={ FunctionTodo }/>
            <Route path = '/reactTodoHook/carloan' component ={ CarLoan }/>
            <Route path = '/reactTodoHook/mortgage' component ={ Mortgage }/>
        </Switch>
        <Header/>
        </div>
       
    )
}

export default App