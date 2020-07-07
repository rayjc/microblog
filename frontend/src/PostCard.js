import React from 'react';
import { Link } from 'react-router-dom';
import './PostCard.css';
import { useDispatch } from 'react-redux';
import { fullUpdateVote } from './reducers/actions';


const PostCard = ({ id, title, description, votes }) => {
  const dispatch = useDispatch();

  return (
    <div className="PostCard card">
      <div className="card-body">
        <h5 className="card-title text-center"><Link to={`/posts/${id}`}>{title}</Link></h5>
        <h6 className="card-subtitle mb-2">{description}</h6>
      </div>
      <div className="card-footer text-muted">
        {votes}
        <span className="ml-auto">
          <button className="btn text-success" onClick={() => dispatch(fullUpdateVote(id, true))}>
            <i className="far fa-thumbs-up"></i>
          </button>
          <button className="btn text-danger" onClick={() => dispatch(fullUpdateVote(id, false))}>
            <i className="far fa-thumbs-down"></i>
          </button>
        </span>
      </div>
    </div >
  )
}


export default PostCard;