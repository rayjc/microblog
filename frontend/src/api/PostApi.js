import ApiHelper from './ApiHelper';


class PostApi {
  static async getPosts() {
    const res = await ApiHelper.request('posts');
    return res.posts;
  }

  static async getPost(id) {
    let res = await ApiHelper.request(`posts/${id}`);
    return res.post;
  }

  static async createPost(post) {
    const res = await ApiHelper.request('posts', post, "post");
    return res.post;
  }

  static async updateVote(id, isIncrement = true) {
    const res = await ApiHelper.request(`posts/${id}/${isIncrement ? 'up' : 'down'}`, undefined, "post");
    return res.votes;
  }

  static async updatePost(id, post) {
    const res = await ApiHelper.request(`posts/${id}`, post, "put");
    return res.post
  }

  static async removePost(id) {
    const res = await ApiHelper.request(`posts/${id}`, undefined, "delete");
    return res.message;
  }
}


export default PostApi;