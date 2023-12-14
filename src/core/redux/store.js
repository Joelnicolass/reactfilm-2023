import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/auth_slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
