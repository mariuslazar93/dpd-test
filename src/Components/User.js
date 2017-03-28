import React from 'react';
import { Link } from 'react-router';

const User = (props) => {
  return (
    <Link to={`/posts/${props.index+1}`}>
      <div className="user-item">
        <h2>{props.user.id}. {props.user.name}</h2>
        <span>username: {props.user.username}</span><br/>
        <span>email: {props.user.email}</span>
      </div>
    </Link>
  );
}

export default User;
