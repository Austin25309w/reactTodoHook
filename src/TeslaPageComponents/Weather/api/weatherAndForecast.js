import axios from 'axios';

async function getWeatherAndForecast(coordinates) {
    const response = await axios.get(
        "https://api.openweathermap.org/data/2.5/onecall?",
        {
            params: {
                lat: coordinates.lat,
                lon: coordinates.lng,
                exclude: "minutely, hourly, alerts",
                appid: "9286f41bc54b818d2219904215784e8a",
                units: "metric"
            }
        }
    );
    return response;
}

export default getWeatherAndForecast;