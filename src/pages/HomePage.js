import React, { useState } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import './HomePage.css';

const HomePage = () => {
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState([]);

  const handleSearch = async () => {
    const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
    setUsers(response.data.items);
  };

  return (
    <div className="home-page">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for GitHub profiles..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="cards-container">
        {users.map(user => (
          <Card key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
