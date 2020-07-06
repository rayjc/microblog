import {
  ADD_COMMENT, ADD_POST, REMOVE_COMMENT, REMOVE_POST, UPDATE_POST, LOAD_POST,
  LOAD_TITLES, ADD_TITLE, UPDATE_TITLE, REMOVE_TITLE,
  SHOW_ERROR, RESET_ERROR, START_LOAD, RESET_LOAD,
} from './actionTypes';
import PostApi from '../api/PostApi';


/* Actions for postsReducers */
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

function loadPost(id, post) {
  return {
    type: LOAD_POST,
    id,
    post,
  }
}

function fetchPost(id) {
  return async function(dispatch) {
    dispatch(resetError());
    dispatch(startLoad());

    try {
      const { id: postId, ...post } = await PostApi.getPost(id);
      dispatch(loadPost(postId, post));
    } catch (error) {
      console.error(error);
      dispatch(showError("Cannot get list of titles."));
    }

    dispatch(resetLoad());
  }
}


/* Actions for titlesReducer */
function loadTitles(titles) {
  return {
    type: LOAD_TITLES,
    titles,
  }
}

function fetchTitles() {
  return async function(dispatch) {
    dispatch(resetError());
    dispatch(startLoad());

    try {
      const titles = await PostApi.getPosts();
      dispatch(loadTitles(titles));
    } catch (error) {
      console.error(error);
      dispatch(showError("Cannot get list of titles."));
    }

    dispatch(resetLoad());
  };
}

function addTitle(title) {
  return { type: ADD_TITLE, title, };
}

function updateTitle(title) {
  return { type: UPDATE_TITLE, title, };
}

function removeTitle(id) {
  return { type: REMOVE_TITLE, id };
}


/* Actions for statusReducer */
function showError(msg) {
  return { type: SHOW_ERROR, msg };
}

function resetError() {
  return { type: RESET_ERROR };
}

function startLoad() {
  return { type: START_LOAD };
}

function resetLoad() {
  return { type: RESET_LOAD };
}


export { addComment, addPost, removeComment, removePost, updatePost, fetchTitles, fetchPost };