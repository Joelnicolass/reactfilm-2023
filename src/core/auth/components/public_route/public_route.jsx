import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const PublicRoute = ({ children }) => {
  const { isLogged } = useAuth();

  if (isLogged) return <Navigate to='/' />;

  return children;
};

export default PublicRoute;
