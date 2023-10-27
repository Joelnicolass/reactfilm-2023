import React, { useEffect, useState } from 'react';
import { AuthContext } from '../context/auth_context';

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isLogged, setIsLogged] = useState(false);

  const login = async () => {
    const url = 'https://random-data-api.com/api/v2/users';
    const response = await fetch(url);
    const dataUser = await response.json();

    setIsLogged(true);
    setUser(dataUser);
    localStorage.setItem('isLogged', true);
    localStorage.setItem('user', JSON.stringify(dataUser));
  };

  const logout = async () => {
    setIsLogged(false);
    setUser({});

    localStorage.removeItem('isLogged');
    localStorage.removeItem('user');
  };

  useEffect(() => {
    const isLogged = localStorage.getItem('isLogged');
    const user = localStorage.getItem('user');

    if (user) setUser(JSON.parse(user));
    if (isLogged) setIsLogged(true);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isLogged,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
