import React,{useState,useEffect} from 'react'


export default function MiniWeather() {
    // States
    const [apiData, setApiData] = useState({});
    const [getState, setGetState] = useState('hayward');
    const [state, setState] = useState('hayward');

        // apiKey and url
    const apiKey = '9286f41bc54b818d2219904215784e8a'
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${apiKey}`;

    useEffect(()=> {
        fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => setApiData(data));
    }, [apiUrl]);

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
                            <span> {apiData.name}</span>
                </div>
            ): <h1>LOADING</h1>
            }
            
        </div>
    )
}
