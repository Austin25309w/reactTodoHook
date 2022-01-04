import React from 'react';

class Mortgage extends React.Component {
    constructor(){
        super()
        this.state = {
            title: 'Mortgage'
        }
    }
    render(){
        return (<div>
            <h1>{this.state.title}</h1>
            <h2> $$$$$$</h2>
        </div>)
    }
}

export default Mortgage