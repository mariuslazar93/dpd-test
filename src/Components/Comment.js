import React from 'react';
import { Link } from 'react-router';

const Comment = (props) => {
  return (
    <div key={props.index} className="comment-item">
      <h2>{props.comment.name}</h2>
      <p>{props.comment.body}</p>
    </div>
  )
}

export default Comment;
