import React from 'react';
import PostCard from './PostCard';
import './PostList.css';
import { useSelector } from 'react-redux';


const PostList = () => {
  const posts = useSelector(state => state.titles);

  return (
    <div className="PostList">
      <h5>Welcome to <i>Microblog</i>, a platform to share information among minimalists!</h5>
      <div className="row justify-content-center">
        {posts.map(post =>
          <div key={post.id} className="col-4 my-3">
            <PostCard {...post} />
          </div>
        )}
      </div>
    </div>
  )
}


export default PostList;