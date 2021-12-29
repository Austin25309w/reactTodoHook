import React, { Component } from "react";

class TodoItems extends Component {
    constructor(props) {
        super(props);
        this.createTasks = this.createTasks.bind(this);
        this.state = {
            items: this.props.entries
        }
    }

    delete(key){
        this.props.delete(key);
    }

    createTasks(item) {
    return <li onClick={() => this.delete(item.key)}
                key={item.key}>{item.text}</li>
    }

    render(){
        // var todoEntries = this.props.entries;
        // var listItems = todoEntries.map(this.createTasks);

        return (
            <ul className="theList">
                {/* {listItems} */}
                <ul>
                        {this.state.items.map( gadget => (
                            <li key={gadget.id}>
                                {gadget.name}
                            </li>
                        ))}
                    </ul>
            </ul>
        );
    }
}

export default TodoItems;