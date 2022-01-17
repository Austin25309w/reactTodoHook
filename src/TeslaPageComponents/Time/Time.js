import React, { Component } from 'react';
import './Time.css';


export default class Time extends Component {
    constructor(){
        super()
        var today = new Date(),
        date = today.getFullYear() + '-' + (today.getMonth() + 1 + '-' + today.getDate());

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
        let date = new Date()
        let hours = date.getHours();
        let ampm = hours >= 12 ? ' pm' : ' am';
        hours = hours % 12;
        hours = hours ? hours : 12;
        let minutes = date.getMinutes() <= 9 ? '0' + date.getMinutes() : date.getMinutes() ;
        let seconds = date.getSeconds() <= 9 ? '0' + date.getSeconds() : date.getSeconds() ;
        
        this.setState({
            time: hours + ':' + minutes + ':' + seconds + ampm
        })
    }


    render() {
        return (
            <div className='timeA'>
                <p> {this.state.time}</p>
                
            </div>
        )
    }
}
