import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await fetch('http://localhost:5001/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),

        

      });

      if (response.ok) {
        alert('Registration successful! Please log in.');
        navigate('/');
      } else {
        alert('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error registering:', error);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
      <p className='button_test'>
        Already have an account? <a href="/">Login</a>
      </p>
    </div>
  );
};

export default RegisterPage;