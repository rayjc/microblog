import { ADD_COMMENT, ADD_POST, REMOVE_COMMENT, REMOVE_POST, UPDATE_POST, LOAD_TITLES } from './actionTypes';
import PostApi from '../api/PostApi';


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

function loadTitles(titles) {
  return {
    type: LOAD_TITLES,
    titles,
  }
}

function fetchTitles() {
  return async function(dispatch) {
    try {
      const titles = await PostApi.getPosts();
      dispatch(loadTitles(titles));
    } catch (error) {
      console.error(error);
    }
  };
}

export { addComment, addPost, removeComment, removePost, updatePost, fetchTitles };