import React,{useState,useEffect, use} from 'react'
import './Weather.css'


export default function MiniWeather() {
    // States
    const [apiData, setApiData] = useState({});
    const [getState, setGetState] = useState('hayward');
    const [state, setState] = useState('hayward');
    const [location, setLocation] = useState('')
    const [timestamp, setTimeStamp ] = useState(0)

        // apiWeatherKey and url
    const apiWeatherKey = '9286f41bc54b818d2219904215784e8a';
    const apiWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${apiWeatherKey}`;

    // apiOpenCageKey
    const apiOpenCageKey = 'ac3a73995fd7413ead6a987e527797b8';
    const apiOpenCageUrl = `https://api.opencagedata.com/geocode/v1/json?q=LAT+LNG&key=${apiOpenCageKey}`


    useEffect(()=> {
        fetch(apiWeatherUrl)
        .then((res) => res.json())
        .then((data) => setApiData(data));

        const interval = setInterval(()=> {
            fetch(apiWeatherUrl)
            .then((res) => res.json())
            .then((data) => setApiData(data));

            let times = new Date()
            setTimeStamp(times.toLocaleString())
        }, 300000)

        return () => clearInterval(interval)
    
    }, [apiWeatherUrl]);

    useEffect(() =>{
        fetch(apiOpenCageUrl)
        .then((res) => res.json())
        .then((data) => setLocation(data))
    }, [apiOpenCageUrl])





    const kelvinToFarenheit = (k) => {
        return Math.round(((((k -273.15)*9)/5)+32));
    }

    return (
        <div>
            {apiData.main ? (
                <div>
                    <img src={`http://openweathermap.org/img/w/${apiData.weather[0].icon}.png`}
                                alt = "weather status icon"
                            />
                            <span>{kelvinToFarenheit(apiData.main.temp)}&deg; F</span>
                            <span>{apiData.name}</span>
                            <span className='lastupdate'>Last updated: {timestamp === 0 ? 'now' : timestamp }</span>
                            {/* <span>{location}123 </span>  */}
                </div>
            ): <h1>LOADING</h1>
            }
            
        </div>
    )
}
