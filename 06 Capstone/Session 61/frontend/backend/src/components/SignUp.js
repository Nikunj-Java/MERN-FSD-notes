
import React, { useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';

function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const handleSignup = async () => {
    try {

      const response = await axios.post('http://localhost:5000/signup', { username, password });
      console.log(response.data);
      setMessage(response.data.message);

    } catch (error) {
      console.log(error.message);
      setMessage('Error Signing up! Try Again');
    }
  }

   
  return (
    <Router>

      <Routes>
        <Route path="/" element={loggedin ? <Dashboard /> : <Navigate to="/" />} />

      </Routes>

      <div className='row'>
        <div className='col'>
          <div className='container text-center'>


            <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWbCb2mH7L32qlZKWZR-msr8qrHY8Jm5VJdw&usqp=CAU" />
              <Card.Body>
                <Card.Title><h1 className='text-primary'>SignUp App</h1></Card.Title>
                <Card.Text>
                  Please Fill The Form
                  <div className='container'>
                    <div className='row mb-5'>
                      <input type='text' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className='row mb-5'>
                      <input type='text' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />

                    </div>

                  </div>
                </Card.Text>
                <div className='container'>
                  <button className='btn btn-success' onClick={handleSignup}>Sign Up</button>

                </div>
              </Card.Body>
            </Card>






          </div>

        </div>
  
        <div>

          <p className='text-danger'>{message}</p>
        </div>
      </div>
    </Router>
  );
}

export default SignUp;
