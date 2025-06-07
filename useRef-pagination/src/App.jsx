import React, { useEffect, useRef, useState } from 'react';
import './App.css';

const App = () => {
  const [allCharacters, setAllCharacters] = useState([]);
  const [currentCharacters, setCurrentCharacters] = useState([]);
  const currentPageRef = useRef(1);
  const charactersPerPage = 10;

  const fetchAllCharacters = async () => {
    try {
      let page = 1;
      let allData = [];
      while (true) {
        const res = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
        const data = await res.json();
        allData = [...allData, ...data.results];
        if (!data.info.next) break;
        page++;
      }
      setAllCharacters(allData);
    } catch (err) {
      console.error("Error fetching characters", err);
    }
  };

  useEffect(() => {
    fetchAllCharacters();
  }, []);

  useEffect(() => {
    const start = (currentPageRef.current - 1) * charactersPerPage;
    const end = start + charactersPerPage;
    setCurrentCharacters(allCharacters.slice(start, end));
  }, [allCharacters]);

  const totalPages = Math.ceil(allCharacters.length / charactersPerPage);

  const handlePageChange = (page) => {
    currentPageRef.current = page;
    const start = (page - 1) * charactersPerPage;
    const end = start + charactersPerPage;
    setCurrentCharacters(allCharacters.slice(start, end));
  };

  return (
    <div className="container">
      <h1>Rick and Morty Characters</h1>
      <div className="grid">
        {currentCharacters.map((char) => (
          <div className="card" key={char.id}>
            <img src={char.image} alt={char.name} />
            <h4>{char.name}</h4>
          </div>
        ))}
      </div>

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
          <button
            key={pageNum}
            onClick={() => handlePageChange(pageNum)}
            className={pageNum === currentPageRef.current ? 'active' : ''}
          >
            {pageNum}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
