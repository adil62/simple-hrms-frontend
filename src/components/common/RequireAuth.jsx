import React from 'react';
import { Navigate } from 'react-router-dom';
import routes from '../../routes';
import useAuth from '../../hooks/useAuth';

function RequireAuth({ children }) {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? (
    children
  ) : (
    <Navigate to={`/${routes.auth.login}`} />
  );
}

export default RequireAuth;
