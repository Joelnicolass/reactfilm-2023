import React from "react";
import { useAuth } from "../../../core/auth/hook/use_auth";

const LoginView = () => {
  const { login, isLoggedIn } = useAuth();

  console.log(isLoggedIn);

  return (
    <div>
      <h1>ReactFilms</h1>
      <button onClick={login}>Iniciar Sesión</button>
    </div>
  );
};

export default LoginView;
