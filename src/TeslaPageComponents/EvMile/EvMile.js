import React from 'react';
import './EvMile.css'


// const MilageCalculation = (props) => {
//     let milage = props.input * 3.3
//     return milage;
// }


class EvMile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            input: 0,
            time: 0,
            toRight: '',
        }
        this.changeStyle = this.changeStyle.bind(this);
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value});
    }

    changeStyle(){
        this.setState({ toRight : 'box2'}, () => console.log(this.state.toRight))
    }



    milageCalculation = () => {
        let milage = (this.state.input * (this.state.time /60)) * 3.3;
        return milage;
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }

render(){
    // const mile = this.state.input;
    return < div className="ev_component">
        <div className={this.toRight}> 
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
                        <h3>Your EV will gain about <span className="mile">{  `${parseInt(this.milageCalculation(this.state.input)) === 0 ? '___' : '⚡' + parseInt(this.milageCalculation(this.state.input))}`  }</span> miles </h3>
                        <h3>After charging for<span className='mile'> {`${this.state.time === 0 ? '___' : '⚡' + this.state.time}`} </span>  minutes</h3>
                    </div>
                </form>
                {/* <button className='moveButton' onClick={() => this.changeStyle()}>move to passenger ></button> */}
        </div>
            
            
    </div>
}
}

export default EvMile;


// https://www.inchcalculator.com/electric-vehicle-charging-time-calculator/#:~:text=To%20calculate%20the%20time%20it,car%2C%20use%20the%20following%20formula.&text=In%20other%20words%2C%20the%20time,is%20the%20average%20power%20efficiency.