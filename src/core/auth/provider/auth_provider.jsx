import { useEffect, useState } from "react";
import { AuthContext } from "../context/auth_context";
import { AppStorage } from "../../base/app_storage";
import { authApi } from "../../datasource/remote/auth/auth_api";

export const AUTH_KEY = "isLoggedIn";

export const AuthProvider = ({ children, fallback }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const saveLoginState = async (state) => AppStorage.save(AUTH_KEY, state);
  const getLoginState = async () => AppStorage.get(AUTH_KEY);
  const removeLoginState = async () => AppStorage.remove(AUTH_KEY);

  useEffect(() => {
    const initAuth = async () => {
      try {
        const loginState = await getLoginState();
        if (!loginState) return;

        setIsLoggedIn(loginState);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    initAuth();
  }, []);

  const login = async (email, password) => {
    /* await authApi.post("/login", {
      email,
      password,
    }); */

    setIsLoggedIn(true);
    saveLoginState(true);
  };

  const logout = async () => {
    setIsLoggedIn(false);
    removeLoginState();
  };

  useEffect(() => {
    // ESTO OCURRE ANTES DE ENVIAR LA SOLICITUD AL SV
    authApi.interceptors.request.use(
      async (config) => {
        // se puede hacer cualquier cosa con el objeto de la request antes de enviarlo al sv
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // ESTO OCURRE DESPUES DE RECIBIR LA SOLICITUD DEL SV
    authApi.interceptors.response.use(
      (response) => response,
      async (error) => {
        // se puede hacer cualquier cosa con el objeto del error de la response
        if (error.response.status === 401) await logout();

        return Promise.reject(error);
      }
    );
  }, []);

  if (fallback && isLoading) return fallback;

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
