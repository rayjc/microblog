import React, { useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import './PostDetail.css';
import EditPostForm from './EditPostForm';
import PostComments from './PostComments';
import PostCommentForm from './PostCommentForm';
import { useSelector, useDispatch } from 'react-redux';
import { addComment, removeComment, removePost } from './reducers/actions';


const PostDetail = () => {
  const { id } = useParams();
  const posts = useSelector(state => state.posts);
  const dispatch = useDispatch();
  const post = posts[id];
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing(!isEditing);

  if (!post) {
    return <Redirect to="/" />
  }

  return (
    isEditing ?
      <EditPostForm postId={id} post={post} toggleEdit={toggleEdit} /> :
      <div className="PostDetail">
        <h3 className="row">
          {post.title}
          <span className="ml-auto">
            <button className="btn text-primary" onClick={() => setIsEditing(true)}><i className="fas fa-edit"></i></button>
            <button className="btn text-danger" onClick={() => dispatch(removePost(id))}><i className="fas fa-times"></i></button>
          </span>
        </h3>
        <h5 className="text-muted">{post.description}</h5>
        <p className="blockquote">{post.body}</p>
        <hr />
        <PostComments comments={post.comments} removeComment={(commentId) => dispatch(removeComment(id, commentId))} />
        <PostCommentForm addComment={(comment) => dispatch(addComment(id, comment))} />
      </div>
  )
}


export default PostDetail;