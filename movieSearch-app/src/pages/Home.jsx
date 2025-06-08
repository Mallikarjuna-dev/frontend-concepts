import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const API_KEY = "f02f58ca";

const Home = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const searchMovies = async () => {
        setLoading(true);
        try {
            const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
            const data = await response.json();
            if (data.Response === "True") {
                setResults(data.Search);
            } else {
                setResults([]);
                setError(data.Error);
            }
        } catch (err) {
            setError("Something went wrong.", err);
        }
        setLoading(false);
    };

    return (
        <div style={{ padding: "1rem" }}>
            <h2>Search Movies</h2>
            <input
                type="text"
                value={query}
                placeholder="Enter movie title..."
                onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={searchMovies}>Search</button>

            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}

            {results.map((movie) => (
                <div key={movie.imdbID} style={{ marginTop: "1rem" }}>
                    <h3>{movie.Title} ({movie.Year})</h3>
                    <Link to={`/movie/${movie.imdbID}`}>View Details</Link>
                </div>
            ))}
        </div>
    );
};

export default Home;
