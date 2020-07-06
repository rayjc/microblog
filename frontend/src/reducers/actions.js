import { ADD_COMMENT, ADD_POST, REMOVE_COMMENT, REMOVE_POST, UPDATE_POST } from './actionTypes';


function addPost(postId, post) {
  return {
    type: ADD_POST,
    postId,
    post,
  }
}

function removePost(postId) {
  return {
    type: REMOVE_POST,
    postId,
  }
}

function updatePost(postId, post) {
  return {
    type: UPDATE_POST,
    postId,
    post,
  }
}

function addComment(postId, comment) {
  return {
    type: ADD_COMMENT,
    postId,
    comment,
  }
}

function removeComment(postId, commentId) {
  return {
    type: REMOVE_COMMENT,
    postId,
    commentId,
  }
}


export { addComment, addPost, removeComment, removePost, updatePost };