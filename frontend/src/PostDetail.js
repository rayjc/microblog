import React, { useState, useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import './PostDetail.css';
import EditPostForm from './EditPostForm';
import PostComments from './PostComments';
import PostCommentForm from './PostCommentForm';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { addComment, removeComment, removePost, fetchPost } from './reducers/actions';


const PostDetail = () => {
  const { id } = useParams();
  const posts = useSelector(state => state.posts, shallowEqual);
  const status = useSelector(state => state.status);
  const dispatch = useDispatch();
  const post = posts[id];
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing(!isEditing);

  useEffect(() => {
    if (!posts.hasOwnProperty(id)) {
      // load post to redux
      dispatch(fetchPost(id));
    }
  }, [id, dispatch, posts]);

  if (status.error) {
    return <Redirect to="/" />
  } else if (!post) {
    return (
      <div className="text-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    )
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