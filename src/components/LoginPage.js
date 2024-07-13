import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../services/api';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = async () => {
    const response = await api.post('/auth/login', { username, password });
    localStorage.setItem('token', response.data.token);
    history.push('/');
  };

  return (
    <div>
      <h1>Login</h1>
      <label>
        username:
        <input type="username" value={username} onChange={e => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </label>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
