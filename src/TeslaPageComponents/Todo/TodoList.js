import React from 'react'
import Todo from './Todo'

export default function TodoList({todos, toggleTodo, setTodos, todoEditing, setTodoEditing , editingText, setEditingText }) {
    return (
         todos.map(todo => {
             return <Todo key ={todo.id} 
                            toggleTodo={toggleTodo} 
                            todos = {todos}
                            todo={todo}
                            setTodos = {setTodos}

                            todoEditing = {todoEditing}
                            setTodoEditing = {setTodoEditing}
                            editingText = {editingText}
                            setEditingText = {setEditingText}
                            
                            />
         })
    )
}
 