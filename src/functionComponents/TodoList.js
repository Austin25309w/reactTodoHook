import React from 'react'
import Todo from '../functionComponents/Todo'

export default function TodoList({todos, toggleTodo, setTodos }) {
    return (
         todos.map(todo => {
             return <Todo key ={todo.id} 
                            toggleTodo={toggleTodo} 
                            todos = {todos}
                            todo={todo}
                            setTodos = {setTodos}/>
         })
    )
}
 