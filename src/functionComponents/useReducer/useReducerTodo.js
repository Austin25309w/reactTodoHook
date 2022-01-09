/* eslint-disable default-case */
import {React, useReducer, useState} from 'react'
import UseReducerTodoItem from './useReducerTodoItem'

export const ACTIONS = {
    ADD_TODO: 'add-todo',
    TOGGLE_TODO: 'toggle-todo',
    DELETE_TODO: 'delete-todo'
}

function reducer(todos, action){
    switch(action.type){
        case ACTIONS.ADD_TODO:
            return[...todos, newTodo(action.payload.name)]
        case ACTIONS.TOGGLE_TODO:
            return todos.map(todo => {
                if(todo.id === action.payload.id){
                    return { ...todo, complete: !todo.complete}
                }
                return todo 
            })
        case ACTIONS.DELETE_TODO:
            return todos.filter(todo => todo.id !== action.payload.id)
        default:
            return todos        
    }
} 

function newTodo(name) {
    return {id: Date.now(), name: name, complete: false}
}

export default function useReducerTodo() {
    const [todos, dispatch] = useReducer(reducer,[])
    const [name, setName] = useState('')
    
    function handleSubmit(e){
        e.preventDefault()
        dispatch({type: ACTIONS.ADD_TODO, payload: { name: name}})
        setName('')
    }

    return (
        <div>
            <h1>useReducerTodo</h1>
            <form onSubmit={handleSubmit}>
                <input type='text' value={name} onChange={e => setName(e.target.value)}/>
            </form>
            {todos.map(todo => {
               return <UseReducerTodoItem key={todo.id} todo={todo} dispatch={dispatch}/>
            })}
        </div>
    )
}
