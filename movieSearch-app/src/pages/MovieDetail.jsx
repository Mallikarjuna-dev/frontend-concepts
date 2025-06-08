import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const API_KEY = "f02f58ca";

const MovieDetail = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchMovie = async () => {
        setLoading(true);
        try {
            const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`);
            const data = await response.json();
            if (data.Response === "True") {
                setMovie(data);
            } else {
                setError(data.Error);
            }
        } catch (err) {
            setError("Something went wrong.", err);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchMovie();
    }, [id]);

    if (loading) return <p>Loading movie...</p>;
    if (error) return <p style={{ color: "red" }}>{error}</p>;
    if (!movie) return null;

    return (
        <div style={{ padding: "1rem" }}>
            <h2>{movie.Title} ({movie.Year})</h2>
            <img src={movie.Poster} alt={movie.Title} style={{ width: "200px" }} />
            <p><strong>Genre:</strong> {movie.Genre}</p>
            <p><strong>Plot:</strong> {movie.Plot}</p>
        </div>
    );
};

export default MovieDetail;
