import {React, useState, useEffect} from 'react'
import './Weather.css'

export default function Weather() {

    // States
    const [apiData, setApiData] = useState({});
    const [getState, setGetState] = useState('Vietnam');
    const [state, setState] = useState('Macau');

        // apiKey and url
        // const apiKey = process.env.REACT_APP_API_KEY;
        const apiKey = '9286f41bc54b818d2219904215784e8a'
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${apiKey}`;

    useEffect(() => {
        fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => setApiData(data));
    }, [apiUrl]);

    const inputHandler = (e) => {
        setGetState(e.target.value);
    };

    const submitHandler = () => {
        setState(getState);
        
    };

    const kelvinToFarenheit = (k) => {
        return Math.round(((((k - 273.15) * 9)/5) +32 ));
    }

    useEffect( () => {
        setState(getState)
    } )



    return (
        <div>
            <div>
                <input className='calculatorInputs' type="text" onChange={inputHandler} value= {getState}/>
                {/* <button onClick={submitHandler}>Search</button> */}
            </div>

            <div>
                <div className='weatherapi'>
                    {apiData.main ? (
                        <div>
                            <img src={`http://openweathermap.org/img/w/${apiData.weather[0].icon}.png`}
                                alt = "weather status icon"
                            />
                            <p>{kelvinToFarenheit(apiData.main.temp)}&deg; F</p>
                            <p>{apiData.name}</p>
                            {/* <strong>{kelvinToFarenheit(apiData.main.temp_min)}&deg: C</strong>
                            <strong>{kelvinToFarenheit(apiData.main.temp_max)}&deg: C</strong>
                            <strong>{apiData.weather[0].main}</strong> */}
                            {/* <strong>{countries.getName(apiData.sys.country, 'en', {select: 'official'})}</strong> */}
                        </div>
                    ) : <h1>Loading</h1>}
                </div>
            </div>

        </div>
    )
}


// https://dev.to/imshines/a-simple-weather-app-using-react-and-openweathermap-api-10m2