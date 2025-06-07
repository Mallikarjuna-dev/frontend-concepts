import React, { useState } from 'react';
import { useSearch } from '../contexts/SearchContext';
import debounce from 'lodash.debounce';

function Home() {
    const { state, dispatch } = useSearch();
    const [loading, setLoading] = useState(false);

    const fetchCountries = async (q) => {
        setLoading(true);
        try {
            const res = await fetch(`https://api.first.org/data/v1/countries`);
            const data = await res.json();
            const filtered = Object.values(data.data).filter((country) =>
                country.country.toLowerCase().includes(q.toLowerCase())
            );
            dispatch({ type: 'SET_RESULTS', payload: filtered });
        } catch (err) {
            alert('Error fetching countries', err);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = debounce((e) => {
        dispatch({ type: 'SET_QUERY', payload: e.target.value });
        fetchCountries(e.target.value);
    }, 500);

    return (
        <div className="p-4">
            <input type="text" onChange={handleSearch} placeholder="Search Countries..." />
            {loading ? <p>Loading...</p> : (
                <ul>
                    {state.results.slice((state.page - 1) * 10, state.page * 10).map((country, i) => (
                        <li key={i}>{country.country}</li>
                    ))}
                </ul>
            )}
            {state.mode === 'pagination' && (
                <div className="flex gap-2">
                    <button onClick={() => dispatch({ type: 'SET_PAGE', payload: state.page - 1 })} disabled={state.page === 1}>Prev</button>
                    <button onClick={() => dispatch({ type: 'SET_PAGE', payload: state.page + 1 })}>Next</button>
                </div>
            )}
            <div>
                <button onClick={() => dispatch({ type: 'SET_MODE', payload: state.mode === 'pagination' ? 'infinite' : 'pagination' })}>
                    Toggle Mode ({state.mode})
                </button>
            </div>
        </div>
    );
}

export default Home;