import React from 'react';


// const MilageCalculation = (props) => {
//     let milage = props.input * 3.3
//     return milage;
// }


class EvMile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            input: 0,
            time: 0
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value});
    }


    milageCalculation = () => {
        console.log('input',this.state.input, 'time', this.state.time)
        let milage = (this.state.input * (this.state.time /60)) * 3.3;
        return milage;
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }

render(){
    // const mile = this.state.input;
    return < div className="ev_component">
            <h1>Electric Vehicle Mile calculator</h1>
            <h3>Please enter charging speed in kW/h</h3>
            <form >
                <input placeholder="Enter charging speed" 
                    name = "input"
                    // type = "text"
                    onChange={this.handleChange}
                    className= "calculatorInputs"/><span> kW</span>
                    <br/>
                <input placeholder="Enter charging time" 
                    // type = "text"
                    name = "time"
                    onChange={this.handleChange}
                    className= "calculatorInputs"/><span> minutes</span>
                {/* <input className ="btn-add-item" type="submit" value="Submit"/> */}
                <div>
                    <h3>Your EV will gain about <span className="mile">{  parseInt(this.milageCalculation(this.state.input)) }</span> miles after charging for {this.state.time} minutes</h3>
                </div>
            </form>
            
    </div>
}
}

export default EvMile;