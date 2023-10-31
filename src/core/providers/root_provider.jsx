import React from "react";
import { AuthProvider } from "../auth/provider/auth_provider";

const RootProvider = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default RootProvider;
