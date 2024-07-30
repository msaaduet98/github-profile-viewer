import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './ProfilePage.css';

const ProfilePage = () => {
  const { username } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUser(response.data);
    };
    fetchUser();
  }, [username]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-page">
      <img src={user.avatar_url} alt={user.login} />
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
      <p>
        <a href={user.html_url} target="_blank" rel="noopener noreferrer">
          View Profile on GitHub
        </a>
      </p>
    </div>
  );
};

export default ProfilePage;
