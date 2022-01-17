import React from 'react';
import {Link} from 'react-router-dom';
import Weather from '../Weather/Weather';

class HomePage extends React.Component {
    constructor(){
        super()
        var today = new Date(),
        date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

        this.state = {
            currentTime: Date().toLocaleUpperCase(),
            currentDate: date,
            time: new Date().toLocaleString()
            
        }
    }

    componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount(){
        clearInterval(this.intervalID);
    }
    tick(){
        this.setState({
            time: new Date().toLocaleString()
        });
    }

    render(){

        return (
            <div>
                <h1> Home Page</h1>
                <h2>{this.state.currentDate} { this.state.time} </h2>
                <Weather/>
                <h2> google bookmark</h2>
            </div>
        )
    }
}
export default HomePage;