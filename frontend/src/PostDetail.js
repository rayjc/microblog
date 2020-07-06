import React, { useState, useEffect } from 'react';
import { useParams, Redirect, useHistory } from 'react-router-dom';
import './PostDetail.css';
import EditPostForm from './EditPostForm';
import PostComments from './PostComments';
import PostCommentForm from './PostCommentForm';
import Loading from './Loading';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { addComment, removeComment, fullRemovePost, fetchPost } from './reducers/actions';


const PostDetail = () => {
  const { id } = useParams();
  const posts = useSelector(state => state.posts, shallowEqual);
  const status = useSelector(state => state.status);
  const dispatch = useDispatch();
  const post = posts[id];
  const [isEditing, setIsEditing] = useState(false);
  const history = useHistory();

  const toggleEdit = () => setIsEditing(!isEditing);

  useEffect(() => {
    if (!posts.hasOwnProperty(id)) {
      // load post to redux
      dispatch(fetchPost(id));
    }
  }, [id, dispatch, posts]);

  const handleRemove = () => {
    history.push('/');
    dispatch(fullRemovePost(+id));
  }

  if (status.error) {
    return <Redirect to="/" />
  } else if (!post) {
    return <Loading />
  }

  return (
    isEditing ?
      <EditPostForm postId={id} post={post} toggleEdit={toggleEdit} /> :
      <div className="PostDetail">
        <h3 className="row">
          {post.title}
          <span className="ml-auto">
            <button className="btn text-primary" onClick={() => setIsEditing(true)}><i className="fas fa-edit"></i></button>
            <button className="btn text-danger" onClick={handleRemove}><i className="fas fa-times"></i></button>
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