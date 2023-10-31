import React from "react";
import { useAuth } from "../../../core/auth/hook/use_auth";

const HomeView = () => {
  const { logout, isLoggedIn } = useAuth();

  console.log(isLoggedIn);

  return (
    <div>
      <h1>HOME</h1>

      <button onClick={logout}>Cerrar Sesión</button>
    </div>
  );
};

export default HomeView;
