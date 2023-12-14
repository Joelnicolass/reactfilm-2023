import { useContext, useEffect } from "react";
import { AppStorage } from "../../../core/base/app_storage";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../../core/redux/slices/auth_slice";

export const AUTH_KEY = "isLoggedIn";

export const useAuth = () => {
  const { isLoggedIn } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  const saveLoginState = async (state) => AppStorage.save(AUTH_KEY, state);
  const getLoginState = async () => AppStorage.get(AUTH_KEY);
  const removeLoginState = async () => AppStorage.remove(AUTH_KEY);

  useEffect(() => {
    const initAuth = async () => {
      try {
        const loginState = await getLoginState();
        if (!loginState) return;

        dispatch(authActions.login());
      } catch (error) {
        console.log(error);
      }
    };

    initAuth();
  }, []);

  const login = async (email, password) => {
    dispatch(authActions.login());
    saveLoginState(true);
  };

  const logout = async () => {
    dispatch(authActions.logout());
    removeLoginState();
  };

  return {
    isLoggedIn,
    login,
    logout,
  };
};
