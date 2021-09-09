import React, { Component } from 'react';
import FlipMove from 'react-flip-move';


class DisplayItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            todoEditing: null,
            editingText: ""
        }
        this.createTasks = this.createTasks.bind(this);
    }
    createTasks(item){
        return <div>
            
            <li>{item.text}
                <button onClick = { () => this.delete(item.key)} 
                        key = {item.key}>delete</button>
                <button onClick = { () => this.edit(item.key)}
                        key = {item.key}>edit</button>
            </li>
        </div>
        
    }

    delete(key){
        console.log('Key is:' + key)
        this.props.delete(key);
    }

    

    edit(key){
    // find the id that is the same 
    let findItem = 
    console.log(this.props)
    
    
    
    }


    render(){
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);
    
        return (
            <ul className ="theList">
                <FlipMove duration = {250} easing = "ease-out">
                    
                    {listItems} 
                    
                    
                </FlipMove>
                
            </ul>
        )

    }  
    
}

export default DisplayItem;