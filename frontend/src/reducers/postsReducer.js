import {
  ADD_COMMENT, ADD_POST, REMOVE_COMMENT, REMOVE_POST, UPDATE_POST, LOAD_POST, UPDATE_POST_VOTE
} from './actionTypes';


const INITIAL_STATE = {
  something: {
    title: "test", description: "test",
    body: "Duis laborum dolor et labore velit fugiat qui amet Lorem tempor incididunt nulla. Occaecat minim excepteur excepteur mollit laborum deserunt aute irure Lorem elit et. Anim et do do nulla velit ea est eu. Esse veniam incididunt fugiat proident deserunt. Veniam mollit mollit aliquip velit pariatur. Amet aliqua exercitation aliquip eiusmod dolore exercitation consequat enim laborum quis magna.",
    comments: [{ id: 0, text: "comment1" }, { id: 1, text: "Consectetur consequat cupidatat quis pariatur Lorem sint culpa aliquip ullamco." }],
  }
};

function postsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_POST:
      return { ...state, [action.postId]: { ...action.post, comments: [] } };

    case REMOVE_POST:
      // extract post to be removed
      const { [action.postId]: removedPost, ...posts } = state;
      return { ...posts };

    case UPDATE_POST:
      // extract post to be updated
      const { [action.postId]: postToUpdate, ...remainingPosts } = state;
      // replact post to be updated with payload
      return {
        ...remainingPosts,
        [action.postId]: {
          ...action.post,
          comments: [...postToUpdate.comments]
        }
      };

    case LOAD_POST:
      return { ...state, [action.id]: { ...action.post } };

    case ADD_COMMENT:
      // extract post to be updated
      const { [action.postId]: postToComment, ...unchangedPosts } = state;
      // extract comments and parts unrelated to comments
      const { comments, ...remainingPost } = postToComment;
      return {
        ...unchangedPosts,
        [action.postId]: {
          ...remainingPost, comments: [...comments, action.comment]
        }
      };

    case REMOVE_COMMENT:
      const { [action.postId]: postToUncomment, ...leftoverPosts } = state;
      const { comments: oldComments, ...leftOverPart } = postToUncomment;
      const newComments = oldComments.filter(c => c.id !== action.commentId);
      return {
        ...leftoverPosts,
        [action.postId]: {
          ...leftOverPart, comments: newComments
        }
      }

    case UPDATE_POST_VOTE:
      if (!state.hasOwnProperty(action.postId)) {
        return state;
      }
      const { [action.postId]: votedPost, ...unvotedPosts } = state;
      const { votes, ...votedPostParts } = votedPost;
      const newVotes = action.isIncrement ? votes + 1 : votes - 1;
      return {
        ...unvotedPosts,
        [action.postId]: {
          ...votedPostParts, votes: newVotes
        }
      }

    default:
      return state;
  }
}


export default postsReducer;