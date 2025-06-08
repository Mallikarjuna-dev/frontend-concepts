import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [city, setCity] = useState("");
    const navigate = useNavigate();

    const handleSearch = () => {
        if (city.trim()) {
            navigate(`/weather/${city}`);
        }
    };

    return (
        <div>
            <h1>Weather Search</h1>
            <input
                type="text"
                value={city}
                placeholder="Enter city name"
                onChange={(e) => setCity(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
}

export default Home;
