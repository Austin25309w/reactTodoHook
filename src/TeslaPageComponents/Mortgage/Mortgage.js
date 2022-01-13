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

            <h2>Principle</h2>
            <input></input>
            <h2>Rate</h2>
            <input></input>
            <h2>Term</h2>
            <select>
                <option>10 years</option>
                <option>15 years</option>
                <option>30 years </option>
            </select>
        </div>)
    }
}

export default Mortgage

// P = principle
// r = R / 12
// n = 30years fixed  x 12 = 310 

// monthly payment = Pr / 1- 1/1 - 1/(1-r)^n