import React from 'react';
// import ReactDOM from 'react-dom';


class List extends React.Component {
    
    constructor(props){
        super(props);

        this.state = {
            edit: false,
            id: null,
            items: [
                {id: '1', title: 'Buy Milk', done: false, date: new Date()},
                {id: '2', title: 'Meeting with Ali', done: false, date: new Date()},
                {id: '3', title: 'Tea break', done: false, date: new Date()},
                {id: '4', title: 'Go for a run.', done: false, date: new Date()},
            ],  
            add: true
        };
    }


    onEditHandle(e){
        this.setState({
            edit: true,
            add: false,
            id: arguments[0],
            title: arguments[1],
        })
    }

    onUpdateHandle(e){
        e.preventDefault();

        this.setState({
            items: this.state.items.map( item => {
                if(item.id === this.state.id){
                    item['title'] = e.target.updatedItem.value;
                    return item;
                }
                return item;
            })
        });
        this.setState({ edit: false });
    }

    
    onDeleteHandle(){
        let id = arguments[0];
        this.setState({
            items: this.state.items.filter(item => {
                if(item.id !== id){
                    return item;
                }
            })
        })
    }

    onSubmitHandle(e){
        e.preventDefault();
        this.setState({
            items: [...this.state.items, { id: Date.now(), title: e.target.item.value, done: false, date: new Date()}]
        });
        e.target.item.value = '';
        
    }
    onCompleteHandle(){
        let id = arguments[0];
        this.setState({
            items: this.state.items.map( item => {
                if(item.id === id){
                    // const currentState = this.state.item['done']
                    item['done'] = !item['done'];
                    return item;
                }
                return item;
            })
        });
    }

    renderEditForm(){
        if(this.state.edit){

            return <form onSubmit={this.onUpdateHandle.bind(this)}>
                <input type="text" name="updatedItem" className="item" defaultValue={this.state.title} />
                <button id="update-add-item">Update</button>
            </form>
        }
    }

    render(){
    return (
        <div className='todoListMain'>
            <h1>Todos</h1>
            <div>
            {this.renderEditForm()}

            </div>

            <form onSubmit={this.onSubmitHandle.bind(this)}>
                <input placeholder= "Enter task" type="text" name="item" className="item"/>
                <button className="btn-add-item">Add Item</button>
            </form>
            <ul style ={{ listStyleType: "none"}} className="theList">
                {this.state.items.map(item => (
                    <li key={item.id} className={ item.done ? 'done': 'hidden'} >
                        {item.title}
                        <li className ="action_buttons">
                            <button onClick={this.onDeleteHandle.bind(this, item.id)}>Delete</button>
                            
                            <button onClick={this.onEditHandle.bind(this, item.id, item.title)}>Edit</button>
                            <button onClick={this.onCompleteHandle.bind(this, item.id )}>Complete</button>
                        </li>
                    </li>
                ))}
            </ul>

        </div>
    )
    }
}

export default List;