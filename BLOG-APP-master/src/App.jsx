import React, { useState } from 'react';
import BlogPostList from './BlogPostList';
import BlogPostForm from './BlogPostForm';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [postToEdit, setPostToEdit] = useState(null);

  const handleSavePost = (post) => {
    if (postToEdit) {
      setPosts(posts.map(p => (p.id === post.id ? post : p)));
      setPostToEdit(null);
    } else {
      setPosts([...posts, post]);
    }
  };

  const handleEditPost = (post) => {
    setPostToEdit(post);
  };

  return (
    <div className="app">
      <h2>My Blog</h2>
      <BlogPostForm onSave={handleSavePost} postToEdit={postToEdit} />
      <BlogPostList posts={posts} onEdit={handleEditPost} />
    </div>
  );
};

export default App;
