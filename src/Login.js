import React, { useState } from 'react';
import { directLogin } from './directApi';
import './Login.css';

function Login({ onLogin, setError }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    console.log('Login attempt started with username:', username);
    
    try {
      // Use the direct API call with hardcoded URL
      const result = await directLogin(username, password);
      
      if (result.success) {
        console.log('Login successful!');
        onLogin();
      } else {
        console.log('Login failed:', result.message);
        setError(result.message || 'Invalid credentials');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Error: ' + (err.message || 'Unknown error'));
    } finally {
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