import React from 'react'

export default function Todo({ todo, todos, toggleTodo, setTodos, todoEditing, setTodoEditing, editingText, setEditingText }) {
    function handleTodoClick(){
        toggleTodo(todo.id)
    }

    function deleteTodo(id) {
        //get updated todo array
        const updatedTodo = [...todos].filter((todo) => todo.id !== id);
        setTodos(updatedTodo)
    }

    function editTodo(id){
        const updatedTodos = [...todos].map((todo) =>{
            if(todo.id === id){
                todo.name = editingText
            }
            return todo
        })
        setTodos(updatedTodos)
        setTodoEditing(null)
        setEditingText('')
    };

    return (
        <div>
            <label>
                <input 
                    type = "checkbox" 
                    checked = {todo.complete} 
                    onChange = {handleTodoClick}
                />
                {console.log(todo.text)}
                {todo.name}


                
                <button onClick = {() => deleteTodo(todo.id) }>delete</button>


                {todoEditing === todo.id
                ? 
                (<input type='text' 
                        onChange={(e) => setEditingText(e.target.value)} 
                        />) 
                            : (
                                <div>{null}</div>
                            )}

                { todoEditing === todo.id 
                    ? 
                (<button onClick = {() => editTodo(todo.id)}>Submit Edit</button>) 
                
                : 
                (<button onClick={() => setTodoEditing(todo.id)}>edit</button>)  }
                
                

                
            </label>
            
        </div>
    )
}
