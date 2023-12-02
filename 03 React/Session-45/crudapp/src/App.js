// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', body: '' });

  useEffect(() => {
    // Fetch posts from the JSON server
    axios.get('http://localhost:3001/posts')
      .then(response => setPosts(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const addPost = async () => {
    // Create a new post
    try {
      const response = await axios.post('http://localhost:3001/posts', newPost);
      setPosts([...posts, response.data]);
      setNewPost({ title: '', body: '' });
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  const deletePost = async (id) => {
    // Delete a post
    try {
      await axios.delete(`http://localhost:3001/posts/${id}`);
      setPosts(posts.filter(post => post.id !== id));
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <div>
      <h1>CRUD Admin App</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <strong>{post.title}</strong>: {post.body}
            <button onClick={() => deletePost(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Body"
          value={newPost.body}
          onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
        />
        <button onClick={addPost}>Add Post</button>
      </div>
    </div>
  );
}

export default App;