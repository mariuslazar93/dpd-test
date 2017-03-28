import React from 'react';
import { Link } from 'react-router';

const Post = (props) => {
  return (
    <Link to={`/comments/${props.index+1}`}>
      <div className="post-item">
        <h2>{props.index+1}. {props.post.title}</h2>
        <p>{props.post.body}</p>
      </div>
    </Link>
  );
}

export default Post;
