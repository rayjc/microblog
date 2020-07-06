import {
  ADD_COMMENT, ADD_POST, REMOVE_COMMENT, REMOVE_POST, UPDATE_POST, LOAD_POST,
  LOAD_TITLES, ADD_TITLE, UPDATE_TITLE, REMOVE_TITLE,
  SHOW_ERROR, RESET_ERROR, START_LOAD, RESET_LOAD,
} from './actionTypes';
import PostApi from '../api/PostApi';


/* Actions for postsReducers */
/** post: { title, description, body, votes } */
function addPost(postId, post) {
  return {
    type: ADD_POST,
    postId,
    post,
  }
}

/** post: { title, description, body } */
function storePost(post) {
  return async function(dispatch) {
    dispatch(resetError());
    dispatch(startLoad());

    try {
      const { id, ...data } = await PostApi.createPost(post);
      // add post to postsReducer
      dispatch(addPost(id, data));
      // add partial post to titlesReducer
      dispatch(addTitle({
        id, title: data.title, description: data.description, votes: data.votes
      }));
    } catch (error) {
      console.error(error);
      dispatch(showError(`Cannot create post: ${post}`));
    }

    dispatch(resetLoad());
  }
}

function removePost(postId) {
  return {
    type: REMOVE_POST,
    postId,
  }
}

/** post: { title, description, body } */
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
/** titles: [{ id, title, description, votes }, ...] */
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

/** title: { id, title, description, votes } */
function addTitle(title) {
  return { type: ADD_TITLE, title, };
}

/** title: { id, title, description, votes } */
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


export {
  addComment, storePost, removeComment, removePost, updatePost, fetchPost,
  fetchTitles,
};