import React from 'react';

class EditTodo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items: this.props.items,
            edit: false
        }
    }

    editHandler(e){
        this.setState({
            edit: true,
            
        })
    }
    render(){
        return<button onClick={this.editHandler}>Edit Item</button>
    }
}

export default EditTodo;