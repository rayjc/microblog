import React, { useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import './PostDetail.css';
import EditPostForm from './EditPostForm';
import PostComments from './PostComments';
import PostCommentForm from './PostCommentForm';


const PostDetail = ({ posts, updatePost, removePost, comments, addComment, removeComment }) => {
  const { id } = useParams();
  const post = posts.find(p => p.id === id);
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing(!isEditing);

  if (!post) {
    return <Redirect to="/" />
  }

  return (
    isEditing ?
      <EditPostForm post={post} updatePost={updatePost} toggleEdit={toggleEdit} /> :
      <div className="PostDetail">
        <h3 className="row">
          {post.title}
          <span className="ml-auto">
            <button className="btn text-primary" onClick={() => setIsEditing(true)}><i className="fas fa-edit"></i></button>
            <button className="btn text-danger" onClick={() => removePost(id)}><i className="fas fa-times"></i></button>
          </span>
        </h3>
        <h5 className="text-muted">{post.overview}</h5>
        <p className="blockquote">{post.body}</p>
        <hr />
        <PostComments comments={comments[id]} removeComment={(idx) => removeComment(post.id, idx)} />
        <PostCommentForm addComment={(comment) => addComment(post.id, comment)} />
      </div>
  )
}


export default PostDetail;