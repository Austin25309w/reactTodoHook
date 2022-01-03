import React from 'react';
import Calculator from './calculator_2022/Calculator';
import FunctionTodo from './functionComponents/FunctionTodo';
import HomePage from './pages/homepage';
import { Switch, Route } from 'react-router-dom';
import Header from './header/header.component';
import './App.css'

function App() {
    return (
        <div className='App'>
        
        <Switch>
            <Route exact path='/' component = { HomePage }/>
            <Route path = '/calculator' component = { Calculator }/>
            <Route path = '/todo' component ={ FunctionTodo }/>
        </Switch>
        <Header/>
        </div>
       
    )
}

export default App