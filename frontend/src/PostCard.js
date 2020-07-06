import React from 'react';
import { Link } from 'react-router-dom';


const PostCard = ({ id, title, description }) => (
  <div className="PostCard card">
    <div className="card-body">
      <h5 className="card-title text-center"><Link to={`/posts/${id}`}>{title}</Link></h5>
      <h6 className="card-subtitle mb-2">{description}</h6>
    </div>
  </div>
)


export default PostCard;