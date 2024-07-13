import api from './api';

export const login = async (username, password) => {
  const response = await api.post('/auth/login', { username, password });
  localStorage.setItem('token', response.data.token);
};

export const register = async (name, username, password) => {
  await api.post('/auth/register', { name, username, password });
};

export const logout = () => {
  localStorage.removeItem('token');
};
