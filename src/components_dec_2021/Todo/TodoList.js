import React, { Component } from 'react';
import TodoItems from './TodoItems';
// import EditTodo from './EditTodo'
import '../TodoList.css'


class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            todoText: '',
            items: [],
        };
    }

    updateTodoText(todoText){
        this.setState({todoText: todoText.target.value});
    }

    addTodo(){
        if(this.state.todoText === ''){ return }
        let todoArr = this.state.items;
        todoArr.push(this.state.todoText);
        this.setState({todoText:''})
        this.textInput.focus();
    }

    handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            let todoArr = this.state.items;
            todoArr.push(this.state.todoText);
            this.setState({todoText: ''})
        }
    }

    deleteItem(index){
        const items = this.state.items;
        const newTodos = [
            ...items.slice(0, index),
            ...items.slice(index + 1)
        ];
        this.setState({
            items: newTodos
        })
    }

    editTodo(index, value){
        const items = this.state.items;
        const newItems = items.map((item, i) => {
            if(i !== index){
                return item 
            }
            return value;
        })
        this.setState({items: newItems});
    }



    

    render(){
        let todo = this.state.items.map((val,key) => {
            return (<TodoItems 
            key = {key}
            text = {val}
            deleteMethod = {() => this.deleteItem(key)}
            editMethod = {this.editTodo.bind(this, key)}
                />
                );
        });

        return(
            <div className = "todoListMain">
                <input type = 'text'
                    ref = { (input => {this.textInput = input;})}
                    className='header'
                    value={this.state.todoText}
                    onChange={todoText => this.updateTodoText(todoText)}
                    onKeyPress={this.handleKeyPress.bind(this)}
                />
                <button onClick={this.addTodo.bind(this)}>Add</button>
                {todo}
            </div>
        );
    }
}

export default TodoList;