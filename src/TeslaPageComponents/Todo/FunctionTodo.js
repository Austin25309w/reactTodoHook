import React, { useState, useRef, useEffect } from 'react'
import TodoList from './TodoList'
import {v4 as uuidv4} from 'uuid'
// import Example from './Example'
// import ToggleComponent from './useToggle/ToggleComponent'
// import TimeoutComponent from './useTimeout/TimeoutComponent'
// import DebounceComponent from './useDebounce/DebounceComponent'
// import UpdateEffectComponent from './useUpdateEffect/UpdateEffectComponent'
// import ArrayComponent from './useArray/ArrayComponent'
// import Album from './Album'
// import Calculator from '../calculator_2022/Calculator'
import './functionComponents.css'
import UseReducerTodo from '../../functionComponents/useReducer/useReducerTodo';
import UseReducerCounter from '../../functionComponents/useReducer/useReducerCounter'

const LOCAL_STORAGE_KEY = 'todoApp.todos'

export default function FunctionTodo() {
    const[todos, setTodos] = useState([])
    const todoNameRef = useRef()
    const [todoEditing, setTodoEditing] = useState(null)
    const [editingText, setEditingText] = useState('')

    // to load retreive saved todos
    useEffect(() => { 
        const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if (storedTodos) setTodos(storedTodos)
    },[])

    // to save todos 
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos) )
    }, [todos])

    // to toggle complete or not complete, [...todos] to get a copy of list
    function toggleTodo(id){
        const newTodos = [...todos]
        const todo = newTodos.find(todo => todo.id === id)
        todo.complete = !todo.complete
        setTodos(newTodos) 
    }

    function handleAddTodo(e){
        const name = todoNameRef.current.value
         
        if(name === '') return
        setTodos(prevTodos => {
            return [...prevTodos, {id: uuidv4(), name: name, completed: false} ]

        })
        console.log(name)
        todoNameRef.current.value = null

    }
    function handleClearTodos(){
        const newTodos = todos.filter(todo => !todo.completed)
        setTodos(newTodos)
    }

 
    return (
        <div>
            
            <div className='todo'>
            <h1>Todo function</h1>
             <input ref = {todoNameRef} type = "text"/>
                <button onClick = {handleAddTodo}>Add todo</button>
                <button onClick = {handleClearTodos}>clear complete</button>
                {/* where the list starts */}
                <TodoList todos = {todos} 
                            toggleTodo={toggleTodo} 
                                setTodos={setTodos}
                                todoEditing = {todoEditing}
                                setTodoEditing = {setTodoEditing}
                                editingText = {editingText} 
                                setEditingText = {setEditingText}
                                /> 
                <div>{todos.filter(todo => !todo.complete).length} left to do </div>
            </div>
            {/* <UseReducerCounter/> */}
             {/* <UseReducerTodo/> */}
        </div>
    )
}



{/* <Example/>
<ToggleComponent/>
<TimeoutComponent/>
 <DebounceComponent/>
<UpdateEffectComponent/>
<ArrayComponent/>
<Album /> */}