import React, { useEffect, useState } from 'react';
import { useDebounce } from '../utils/debounce';

const CountryList = () => {
    const [search, setSearch] = useState('');
    const debouncedSearch = useDebounce(search, 500);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://api.first.org/data/v1/countries')
            .then((res) => res.json())
            .then((res) => {
                const countries = Object.values(res.data);
                setData(
                    countries.filter((c) =>
                        c.country.toLowerCase().includes(debouncedSearch.toLowerCase())
                    )
                );
            });
    }, [debouncedSearch]);

    return (
        <div className="p-4">
            <input
                className="border p-2 w-full mb-4"
                placeholder="Search countries..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <ul>
                {data.map((country, idx) => (
                    <li key={idx} className="border-b py-2">{country.country}</li>
                ))}
            </ul>
        </div>
    );
};

export default CountryList;