
import React, { useState } from 'react';

import { searchMovies, IMAGE_BASE_URL } from '../../api';

import './SearchBar.css';



const SearchBar = () => {

  const [query, setQuery] = useState('');

  const [results, setResults] = useState([]);

  const [isOpen, setIsOpen] = useState(false);



  const handleSearch = async (e) => {

    const value = e.target.value;

    setQuery(value);

    if (value.trim().length < 2) {

      setResults([]);

      return;

    }

    try {

      const data = await searchMovies(value);

      setResults(data.slice(0, 8));

    } catch (err) {

      console.error('Search error:', err);

    }

  };



  return (

    <div className="search-bar">

      <div className="search-input-wrapper">

        <input

          type="text"

          placeholder="Search movies..."

          value={query}

          onChange={handleSearch}

          onFocus={() => setIsOpen(true)}

          onBlur={() => setTimeout(() => setIsOpen(false), 200)}

        />

      </div>

      {isOpen && results.length > 0 && (

        <div className="search-results">

          {results.map((movie) => (

            <div key={movie.id} className="search-result-item">

              {movie.poster_path && (

                <img

                  src={`${IMAGE_BASE_URL}${movie.poster_path}`}

                  alt={movie.title}

                />

              )}

              <div className="search-result-info">

                <p className="result-title">{movie.title}</p>

                <p className="result-year">

                  {movie.release_date ? movie.release_date.split('-')[0] : 'N/A'}

                </p>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>

  );

};



export default SearchBar; 

