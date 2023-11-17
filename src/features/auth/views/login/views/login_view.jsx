import React, { useState } from "react";
import { useAuth } from "../../../hook/use_auth";

const LoginView = () => {
  const { login } = useAuth();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    try {
      const form = e.target;
      const formData = new FormData(form);
      const { email, password } = Object.fromEntries(formData);

      form.reset();

      await login(email, password);
    } catch (error) {
      setError(error.response.data.msg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1>ReactFilms</h1>

      <form onSubmit={handleSubmit}>
        <input type="email" name="email" />
        <input type="password" name="password" />
        <button type="submit">Iniciar Sesión</button>
        <p>{error}</p>
      </form>
    </div>
  );
};

export default LoginView;
