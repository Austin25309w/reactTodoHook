import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import './TodoList.css'
import DisplayItem from './DisplayItem'
import Count from './Count';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items:[]
    }
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  
    
  }
  
  addItem(e){
    if(this._inputElement.value !== ''){
      var newItem = {
        text: this._inputElement.value,
        key: Date.now()
      }
    
    this.setState((prevState) => {
      return{
        items: prevState.items.concat(newItem)
      }
    })
    this._inputElement.value = "";
    }
    console.log(this.state.items);

    e.preventDefault();
  }



  deleteItem(key){
    var filteredItems = this.state.items.filter(function(item){
      return (item.key !== key);
    });
    this.setState({
      items: filteredItems
    })
  }

  //handleChange
  //handleSubmit

  
  editItem(key){
    var findItems = this.state.items.filter(function(item){
      return(item.key === key);
    })
    this.setState({
      items: findItems
    })

  }
 



  render() {
    return (
      <div className="todoListMain">
        <header className="header">

          <img src={logo} className="App-logo" alt="logo" />
          <a>
            Todo 2021
          </a>

          <form onSubmit= {this.addItem}>
                
                    <input ref={(a) => this._inputElement = a} 
                    placeholder="enter task">
                    </input> 
                    <button type="submit"> add </button>
                
          </form>
        
        
        <DisplayItem entries = {this.state.items}
                     delete = {this.deleteItem} 
                     edit = {this.editItem} />

        <Count/>

        </header>
      </div>
    );
  }
   
  }
  

export default Todo;
