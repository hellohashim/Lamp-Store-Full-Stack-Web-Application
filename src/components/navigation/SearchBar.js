import React, { useState } from 'react';
import style from "./SearchBar.module.css";
import search_icon from '../../assets/search-icon.png';
import { allLamps } from '../main/LampsData.js'; 
import { useNavigate } from 'react-router-dom'; // Add this import

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate(); // Initialize navigate
  const flatLamps = Object.values(allLamps).flat();

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 1) {
      const filtered = flatLamps.filter(lamp =>
        lamp.name.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filtered.slice(0, 5));
    } else {
      setResults([]);
    }
  };

  const selectSearch = (term) => {
    setQuery(term);
    setResults([]);
    if (typeof onSearch === 'function') {
      onSearch(term);
    }
    navigate(`/?search=${encodeURIComponent(term)}`);
  };

  return (
    <div className={`flex-grow-1 d-flex justify-content-center ${style["nav-search-bar-container"]}`}>
      <form 
        className={style["nav-search-bar"]} 
        onSubmit={(e) => { e.preventDefault(); selectSearch(query); }}
      >
        <div className={`input-group ${style["search-bar-group"]}`}>
          <input
            type="search"
            value={query}
            onChange={handleSearch}
            className={`form-control border-0 text-dark ${style["nav-search-bar-text"]}`}
            placeholder="Search for Lamps..."
          />
          <button className={`btn border-0 ${style["nav-search-bar-button"]}`} type="submit">
            <img src={search_icon} alt="search" className={style["nav-search-bar-icon"]} />
          </button>
        </div>

        {/* Results Dropdown using CSS Module classes */}
        {results.length > 0 && (
          <ul className={style["search-results-dropdown"]}>
            {results.map(lamp => (
              <li 
                key={lamp.id} 
                className={style["result-item"]} 
                onClick={() => selectSearch(lamp.name)}
              >
                <span className={style["result-name"]}>{lamp.name}</span>
              </li>
            ))}
          </ul>
        )}
      </form>
    </div>
  );
}

export default SearchBar;