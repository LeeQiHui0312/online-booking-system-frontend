import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../services/api';

const RegisterPage = () => {
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const history = useHistory();

  const handleRegister = async () => {
    await api.post('/auth/register', { username, password, name });
    history.push('/login');
  };

  return (
    <div>
      <h1>Register</h1>
      <label>
        username:
        <input type="username" value={username} onChange={e => setusername(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </label>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default RegisterPage;
