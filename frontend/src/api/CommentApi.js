import ApiHelper from './ApiHelper';


class CommentApi {
  static async getComments(postId) {
    const res = await ApiHelper.request(`posts/${postId}/comments`);
    return res.comments;
  }

  static async createComment(comment, postId) {
    const res = await ApiHelper.request(`posts/${postId}/comments`, { text: comment }, "post");
    return res.comment;
  }

  static async updateComment(commentId, comment, postId) {
    const res = await ApiHelper.request(`posts/${postId}/comments/${commentId}`, { text: comment }, "put");
    return res.comment
  }

  static async removeComment(commentId, postId) {
    const res = await ApiHelper.request(`posts/${postId}/comments/${commentId}`, undefined, "delete");
    return res.message;
  }
}


export default CommentApi;