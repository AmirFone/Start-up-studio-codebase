// SearchHealthData.js
import React, { useState, useEffect } from 'react';
import './SearchHealthData.css';

const searchQueries = [
  'Find a doctor',
  'Check symptoms',
  'Locate nearby pharmacies',
  'Review test results',
];

const fakeData = [
  { id: 1, title: 'Dr. John Doe', category: 'Cardiologist' },
  { id: 2, title: 'Headache', category: 'Symptom' },
  { id: 3, title: 'XYZ Pharmacy', category: 'Pharmacy' },
  { id: 4, title: 'Blood Test Results', category: 'Test Results' },
  { id: 5, title: 'Dr. Jane Smith', category: 'Dermatologist' },
  { id: 6, title: 'Fever', category: 'Symptom' },
  { id: 7, title: 'ABC Pharmacy', category: 'Pharmacy' },
  { id: 8, title: 'MRI Scan Report', category: 'Test Results' },
];

function SearchHealthData() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [defaultText, setDefaultText] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * searchQueries.length);
      setDefaultText(searchQueries[randomIndex]);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() !== '') {
      const results = fakeData.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
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
          placeholder={defaultText}
          value={searchQuery}
          onChange={handleSearch}
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