'use client'
import { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setError('');

    // Validation
    if (!username || !password) {
      setError('Username and password required');
      return;
    }

    // Mock authentication
    if (username === 'admin' && password === 'admin123') {
      setIsLoggedIn(true); // success
    } else {
      setError('Invalid username or password'); // error
    }
  };

  if (isLoggedIn) {
    return (
      <div>
        <h2 id="success">Dashboard Entered</h2>
        <p>Login successful</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Login</h2>

      <input
        id="username"
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <br />

      <input
        id="password"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />

      <button id="login-btn" onClick={handleLogin}>
        Login
      </button>

      {error && (
        <p id="error-msg" style={{ color: 'red' }}>
          {error}
        </p>
      )}
    </div>
  );
};

export default Login;
