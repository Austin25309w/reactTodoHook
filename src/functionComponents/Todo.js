import React from 'react'

export default function Todo({ todo, todos, toggleTodo, setTodos }) {
    function handleTodoClick(){
        toggleTodo(todo.id)
    }

    function deleteTodo(id) {
        //get updated todo array
        const updatedTodo = [...todos].filter((todo) => todo.id !== id);
        setTodos(updatedTodo)
    }

    return (
        <div>
            <label>
                <input 
                    type = "checkbox" 
                    checked = {todo.complete} 
                    onChange = {handleTodoClick}
                />
                {todo.name}
                <button onClick = {() => deleteTodo(todo.id) }>delete</button>
            </label>
            
        </div>
    )
}
