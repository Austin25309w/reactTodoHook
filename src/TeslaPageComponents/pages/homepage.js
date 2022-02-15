import React from 'react';
import Weather from '../Weather/Weather';
import './homepage.css'

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

    switchDay = () => {
        let day = new Date().getDay()
        switch(day){
            case 0: return 'Sunday';
            case 1: return 'Monday';
            case 2: return 'Tuesday';
            case 3: return 'Wednesday';
            case 4: return 'Thursday';
            case 5: return 'Friday';
            case 6: return 'Saturday';
            default: return 'invalid'
        }
    }

    getCalendarDate = () => {
        let date = new Date();
        let month = date.getMonth()
        switch(month){
            case 0: return 'January';
            case 1: return 'February';
            case 2: return 'March';
            case 3: return 'April';
            case 4: return 'May';
            case 5: return 'June';
            case 6: return 'July';
            case 7: return 'August';
            case 8: return 'September';
            case 9: return 'October';
            case 10: return 'November';
            case 11: return 'December';
            default: return 'invalid'
        
        }
    }

    render(){
        const date = new Date();
        return (
            <div className='home'>
                <p> Today is...{ this.switchDay()} </p>
                <h3>{this.getCalendarDate() + ' ' + date.getDate() + ', ' + date.getFullYear()}</h3>
                <Weather/>
                {/* <h2> google bookmark</h2> */}
            </div>
        )
    }
}
export default HomePage;