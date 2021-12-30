import React, {Component} from 'react';

class Songs extends Component {
    constructor(props){
        super(props)
        this.state = {
            inputValue : ''
        }
    }

    updateInputValue(e){
        this.setState({
            inputValue: e.target.value
        })
        
        
    }

    render(){
        return(
            <div>
                {this.props.text}
                <button
                    onClick = {this.props.deleteMethod} >X</button>

                <input 
                    value = {this.props.newSongTitle}
                    onChange = { e => this.updateInputValue(e)}
                />
                <button
                    onClick = { () => this.props.editMethod(this.state.inputValue)}
                >edit</button>

            </div>
        )
    }
}

export default Songs;