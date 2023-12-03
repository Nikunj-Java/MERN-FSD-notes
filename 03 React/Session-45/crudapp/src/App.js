// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', body: '' });
  const [editingPost, setEditingPost]=useState(null);

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

  //update
  const editPost=(post)=>{
    //set the post
    setEditingPost(post);
    setNewPost({title: post.title,body:post.body});
  }
  //update the post
  const updatePost=async()=>{
    try {
      const response=await axios.put(`http://localhost:3001/posts/${editingPost.id}`,newPost);
      setPosts(posts.map(post=>(post.id===editingPost.id ? response.data :post)));
      setEditingPost(null);
      setNewPost({title:'',body:''});
      
    } catch (error) {
      console.log('Error Updating Post: ',error);
    }
  }

  return (
    <div className="container mt-5">
      <h1 className="mb-4">CRUD Admin App</h1>
      <ul className="list-group">
        {posts.map(post => (
          <li key={post.id} className='list-group-item d-flex justify-content-between align-items-center'>
            <div>
            <strong>{post.title}</strong>: {post.body}
            </div>
            <button className='btn btn-warning mr-2' onClick={() => editPost(post)}>Edit</button>
          
            <button className='btn btn-danger' onClick={() => deletePost(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
      {editingPost ? (
 <div className="mt-4">
 <input
   type="text"
   className="form-control"
   placeholder="Title"
   value={newPost.title}
   onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
 />
 <input  
   type="text"
   placeholder="Body"
   className="form-control mt-2"
   value={newPost.body}
   onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
 />
 <button className='btn btn-primary mt-2' onClick={updatePost}>Update Post</button>

</div>
      ):(
        <div className="mt-4">
        <input
          type="text"
          className="form-control"
          placeholder="Title"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        />
        <input  
          type="text"
          placeholder="Body"
          className="form-control mt-2"
          value={newPost.body}
          onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
        />
        
        <button className='btn btn-primary mt-2' onClick={addPost}>Add Post</button>
      </div>
      )
    }
     
    </div>
  );
}

export default App;