import React, { Component } from "react";


class Movie extends Component{
    constructor(props){
        super(props);
        this.state= {
            inputValue: ''
        };
    }
    updateInputValue(evt) {
        this.setState({
            inputValue: evt.target.value
        });
    }

    render(){
        return(
            <div>
                {this.props.text}
                
                <input value={this.props.newMovieName} 
                    onChange={evt => this.updateInputValue(evt)}
                /> 
                <button onClick={this.props.deleteMethod}>X</button>
                <button onClick={() => this.props.editMethod(this.state.inputValue)}>edit</button>


            </div>
        );
    }
}

export default Movie;