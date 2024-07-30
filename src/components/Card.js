import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ user }) => {
  return (
    <div className="card">
      <img src={user.avatar_url} alt={user.login} />
      <h4>
        <Link to={`/profile/${user.login}`}>
          <b>{user.login}</b>
        </Link>
      </h4>
    </div>
  );
};

export default Card;
