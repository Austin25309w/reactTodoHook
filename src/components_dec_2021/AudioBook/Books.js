import React, {Component} from 'react';

class Books extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputValue: ''
        }
    }

    updateInputValue(evt){
        this.setState({
            inputValue: evt.target.value
        })
    }

    render(){
        return(
           <div>
                {this.props.text}
                <button onClick ={this.props.deleteMethod}>x</button>
                <input 
                    value = {this.props.newBookName}
                    onChange = {evt => this.updateInputValue(evt)} 
                    />
                <button onClick ={() => this.props.editMethod(this.state.inputValue)}>edit</button>
           </div>

            )
    }
}

export default Books