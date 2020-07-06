import React from 'react';


const PostComments = ({ comments, removeComment }) => (
  <div>
    {comments.length !== 0 ?
      <ul className="list-unstyled">
        {comments.map(c =>
          <li key={c.id} className="my-2 text-muted">
            <button className="btn text-danger mr-2" onClick={() => removeComment(c.id)}>
              <i className="fas fa-times"></i>
            </button>
            {c.text}
          </li>
        )}
      </ul> :
      <p className="font-italic">No comments yet!</p>
    }
  </div>
)


export default PostComments;