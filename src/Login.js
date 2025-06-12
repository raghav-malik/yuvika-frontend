import React, { useState } from 'react';
import './Login.css';

function Login({ onLogin, setError }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Login attempt started');
    console.log('Username:', username);
    setLoading(true);
    setError('');

    const loginUrl = `${process.env.REACT_APP_BACKEND_URL || 'https://yuvika-backend-production.up.railway.app'}/users/login`;
    console.log('Attempting to login to:', loginUrl);

    try {
      console.log('Making fetch request...');
      const res = await fetch(loginUrl, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
      
      console.log('Response status:', res.status);
      console.log('Response headers:', Object.fromEntries(res.headers.entries()));
      
      const data = await res.json();
      console.log('Response data:', data);

      if (data.success) {
        console.log('Login successful');
        onLogin();
      } else {
        console.log('Login failed:', data.message);
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      console.error('Login error details:', {
        name: err.name,
        message: err.message,
        stack: err.stack
      });
      setError('Network error - ' + err.message);
    } finally {
      console.log('Login attempt finished');
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h2>Yuvi's Grievance Portal 💖</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
}

export default Login; 