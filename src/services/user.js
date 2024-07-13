import jwtDecode from 'jwt-decode';

const getToken = () => {
  return localStorage.getItem('accessToken'); // Assuming you store token in localStorage
};

const getCurrentUsername = () => {
  const token = getToken();
  if (token) {
    const decodedToken = jwtDecode(token);
    return decodedToken.sub; // Assuming 'sub' (subject) field contains the username
  }
  return null;
};

export default getCurrentUsername;