import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';

export default () => {
  const [posts, setPosts] = useState({});
  
  const fetchPosts = async () => {
    const res = await axios.get('http://localhost:4002/posts');
    // take out only a data from response
    console.log(res.data)
    setPosts(res.data);
  };

  // [] run the function only one time
  useEffect(() => {
    fetchPosts();
  }, []);

  // console.log(posts);

  // Object.values(posts) - built in javascript fn that give us back an array of all the values inside of posts
  const renderedPosts = Object.values(posts).map(post => {
    return (
      <div
        className="card"
        style={{ width: '30%', marginBottom: '20px' }}
        key={post.id}
      >
        <div className="card-body">
          <h3>{post.title}</h3>
          <CommentList comments={post.comments} />
          <CommentCreate postId={post.id} />
          
        </div>
      </div>
    )
  })

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedPosts}
    </div>
  )
}