import {
  ADD_COMMENT, ADD_POST, REMOVE_COMMENT, REMOVE_POST, UPDATE_POST, LOAD_POST, UPDATE_POST_VOTE,
  LOAD_TITLES, ADD_TITLE, UPDATE_TITLE, REMOVE_TITLE, UPDATE_TITLE_VOTE,
  SHOW_ERROR, RESET_ERROR, START_LOAD, RESET_LOAD,
} from './actionTypes';
import PostApi from '../api/PostApi';
import CommentApi from '../api/CommentApi';


/* Actions for postsReducers */
/** post: { title, description, body, votes } */
function addPost(postId, post) {
  return {
    type: ADD_POST,
    postId,
    post,
  }
}

/** 
 * Create a new post on backend via API;
 * add this post to posts and titles in redux.
 * 
 * post: { title, description, body } */
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

function fullRemovePost(id) {
  return async function(dispatch) {
    dispatch(resetError());
    dispatch(startLoad());

    try {
      await PostApi.removePost(id);
      // update post in postsReducer
      dispatch(removePost(id));
      // update post in titlesReducer
      dispatch(removeTitle(id));
    } catch (error) {
      console.error(error);
      dispatch(showError(`Cannot remove post(${id})`));
    }

    dispatch(resetLoad());
  }
}

/** post: { title, description, body, votes } */
function updatePost(postId, post) {
  return {
    type: UPDATE_POST,
    postId,
    post,
  }
}

/** 
 * Update post on backend via API;
 * update this post in redux (posts and titles).
 * 
 * post: {title, description, body}
 */
function fullUpdatePost(id, post) {
  return async function(dispatch) {
    dispatch(resetError());
    dispatch(startLoad());

    try {
      const { id: postId, ...data } = await PostApi.updatePost(id, post);
      // update post in postsReducer
      dispatch(updatePost(postId, data));
      // update post in titlesReducer
      dispatch(updateTitle({
        id: postId, title: data.title, description: data.description, votes: data.votes
      }));
    } catch (error) {
      console.error(error);
      dispatch(showError(`Cannot update post(${id}): ${post}`));
    }

    dispatch(resetLoad());
  }
}

function addComment(postId, comment) {
  return {
    type: ADD_COMMENT,
    postId,
    comment,
  }
}

/**
 * Create comment under post with postId;
 * update posts in redux.
 * @param {Number} postId 
 * @param {String} comment 
 */
function storeComment(postId, comment) {
  return async function(dispatch) {
    dispatch(resetError());
    dispatch(startLoad());

    try {
      const data = await CommentApi.createComment(comment, postId);
      // add comment to postsReducer
      dispatch(addComment(postId, data));
    } catch (error) {
      console.error(error);
      dispatch(showError(`Cannot create comment(${comment}) under post:${postId}`));
    }

    dispatch(resetLoad());
  }
}

function removeComment(postId, commentId) {
  return {
    type: REMOVE_COMMENT,
    postId,
    commentId,
  }
}

/**
 * Remove comment under post with postId;
 * update posts in redux.
 * @param {Number} postId 
 * @param {Number} commentId 
 */
function fullRemoveComment(postId, commentId) {
  return async function(dispatch) {
    dispatch(resetError());
    dispatch(startLoad());

    try {
      await CommentApi.removeComment(commentId, postId);
      // remove comment in postsReducer
      dispatch(removeComment(postId, commentId));
    } catch (error) {
      console.error(error);
      dispatch(showError(`Cannot remove comment(${commentId}) under post(${postId}))`));
    }

    dispatch(resetLoad());
  }
}

function updatePostVote(postId, isIncrement) {
  return { type: UPDATE_POST_VOTE, postId, isIncrement };
}

function updateTitleVote(postId, isIncrement) {
  return { type: UPDATE_TITLE_VOTE, postId, isIncrement };
}

/**
 * Up/down vote post with postId in backend;
 * update votes in posts and titles.
 * @param {Number} postId 
 * @param {Boolean} isIncrement 
 */
function fullUpdateVote(postId, isIncrement) {
  return async function(dispatch) {
    dispatch(resetError());
    dispatch(startLoad());

    try {
      await PostApi.updateVote(postId, isIncrement);
      // update vote in postsReducer
      dispatch(updatePostVote(postId, isIncrement));
      // update vote in titlesReducer
      dispatch(updateTitleVote(postId, isIncrement));
    } catch (error) {
      console.error(error);
      dispatch(showError(`Cannot update vote under post(${postId}))`));
    }

    dispatch(resetLoad());
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
  storeComment, storePost, fullRemoveComment, fullRemovePost, fullUpdatePost, fetchPost,
  fetchTitles, fullUpdateVote
};