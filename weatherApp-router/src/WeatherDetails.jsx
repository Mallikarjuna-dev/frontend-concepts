import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const API_KEY = "2481c81f1fdca72203f12f5d2ff0a075";

const WeatherDetails = () => {
    const { city } = useParams();
    const [weather, setWeather] = useState(null);

    const fetchWeather = async () => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
        const result = await response.json();
        setWeather(result);
    }

    useEffect(() => {
        fetchWeather();
    }, [city]);

    if (!weather) return <div className="p-4">Loading...</div>;
    if (weather.cod !== 200) return <div className="p-4 text-red-500">City not found.</div>;

    const { main, weather: weatherInfo } = weather;

    return (
        <div>
            <h2>Weather in {city}</h2>
            <p>Temperature: {main.temp} °C</p>
            <p>Humidity: {main.humidity} %</p>
            <p>Condition: {weatherInfo[0].description}</p>

            <div>
                <iframe
                    title="map"
                    width="100%"
                    height="300"
                    loading="lazy"
                    allowFullScreen
                    src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAnJy_3istWtnnjei0cUIFjhmnqXkV556k&q=${city}`}>
                </iframe>
            </div>
        </div>
    );
}

export default WeatherDetails;
