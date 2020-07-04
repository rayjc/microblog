import React from 'react';
import { v4 as uuidv4 } from 'uuid';


const PostComments = ({ comments, removeComment }) => (
  <div>
    {comments.length ?
      <ul className="list-unstyled">
        {comments.map((c, idx) =>
          <li key={uuidv4()} className="my-2 text-muted">
            <button className="btn text-danger mr-2" onClick={() => removeComment(idx)}>
              <i className="fas fa-times"></i>
            </button>
            {c}
          </li>
        )}
      </ul> :
      <p className="font-italic">No comments yet!</p>
    }
  </div>
)


export default PostComments;