import React, { Component } from 'react';
import TodoItems from './TodoItems';
import EditTodo from './EditTodo'
import './TodoList.css'

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    _id: '1',
                    name: 'Powercore+ 26800 45w PD',
                    category: 'Powerbank',
                    image: '/images/a1.jpg',
                    price: 129.99,
                    brand: 'Anker',
                    rating: 4.5,
                    numReview: 10, 
                    countInStock: 5
                },
                {
                    _id: '2',
                    name: 'Powercore ',
                    category: 'Powerbank',
                    image: '/images/a2.jpg',
                    price: 79.99,
                    brand: 'Anker',
                    rating: 4.5,
                    numReview: 10, 
                    countInStock: 6
                },
                {
                    _id: '3',
                    name: '61w USB-C charger',
                    category: 'Charger',
                    image: '/images/a3.jpg',
                    price: 25,
                    brand: 'RAVPower',
                    rating: 4.6,
                    numReview: 15, 
                    countInStock: 10
                },
                {
                    _id: '4',
                    name: 'SoundCore 2',
                    category: 'Speaker',
                    image: '/images/a4.jpg',
                    price: 39.99,
                    brand: 'Anker',
                    rating: 4.6,
                    numReview: 12, 
                    countInStock: 15
                }
            ]
        }

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(e){
        if (this._inputElement.value !== ""){
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };
        
            this.setState((prevState) => {
                return{
                    items: prevState.items.concat(newItem)
                };
            });
            this._inputElement.value = "";
        }
        console.log(this.state.items);

        e.preventDefault();
    }

    deleteItem(key){
        var filteredItems = this.state.items.filter(function (item){
            return (item.key !== key);
        })
        this.setState({
            items: filteredItems
        });
    }



    render(){
        return(
            <div className = "todoListMain">
                <div className = "header">
                    <form onSubmit= {this.addItem}>
                        <input placeholder = "Enter task"
                                ref={(a) => this._inputElement = a }/>
                        <button type = "submit">Add Item</button>
                        <EditTodo />
                    </form>
                    
                    <TodoItems entries= {this.state.items}
                                delete= {this.deleteItem}/>
                </div>
            </div>
        );
    }
}

export default TodoList;