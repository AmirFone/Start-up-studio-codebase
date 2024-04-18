import React, { useState, useEffect } from 'react';
import './SearchHealthData.css';
import { fakeData } from './fakeData';

const searchQueries = [
  'Find a doctor or specialist',
  'Check common symptoms online',
  'Locate nearby pharmacies easily',
  'Review your latest test results',
];

function SearchHealthData() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [placeholderText, setPlaceholderText] = useState('');
  const [placeholderOpacity, setPlaceholderOpacity] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setPlaceholderOpacity(0);
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * searchQueries.length);
        setPlaceholderText(searchQueries[randomIndex]);
        setPlaceholderOpacity(1);
      }, 500);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.trim() !== '') {
      const results = fakeData.filter(
        item => item.title.toLowerCase().includes(query.toLowerCase()) ||
                item.category.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <section className="search-health-wallet">
      <h2>Smart Health Search</h2>
      <div className="search-input-container">
        <input
          type="text"
          aria-label="Search"
          placeholder={placeholderText}
          value={searchQuery}
          onChange={handleSearch}
          className="search-input"
          style={{opacity: placeholderOpacity}}
        />
        {searchResults.length > 0 && (
          <ul className="search-results">
            {searchResults.map((result) => (
              <li key={result.id}>
                <span className="result-title">{result.title}</span>
                <span className="result-category">{result.category}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export default SearchHealthData;
