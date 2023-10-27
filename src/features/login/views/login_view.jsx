import React from 'react';
import { useAuth } from '../../../core/auth/hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const LoginView = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  return (
    <div>
      <h1>Iniciar Sesión</h1>
      <button
        onClick={async () => {
          await login();
          navigate('/');
        }}
      >
        Ingresar
      </button>
    </div>
  );
};

export default LoginView;
