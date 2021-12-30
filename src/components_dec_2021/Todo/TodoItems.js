import React, { Component } from "react";

class TodoItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue:''
        }
        
    }
      // here should have add, delete, edit features
    updateInputValue(evt){
        this.setState({
            inputValue: evt.target.value
        })
    }



    render(){
        return (
           <div>
               {this.props.text}
               <button onClick={this.props.deleteMethod}>X</button>
               <input value={this.props.newTodoName}
                    onChange={evt => this.updateInputValue(evt)} 
                    />
                <button onClick={
                    () => this.props.editMethod(this.state.inputValue)}>
                        edit</button>
           </div>
        );
    }
}

export default TodoItems;