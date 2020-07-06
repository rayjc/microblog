import React, { useState } from 'react';


const PostCommentForm = ({ addComment }) => {
  const [comment, setComment] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addComment(comment);
    setComment("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="comment-input" style={{ display: 'none' }}>Comment</label>
      <input type="text" className="form-control" id="comment-input" name="comment" autoComplete='off'
        placeholder="New Comment" value={comment} onChange={(e) => setComment(e.target.value)} />
      <button type="submit" hidden>Add</button>
    </form>
  )
}


export default PostCommentForm;