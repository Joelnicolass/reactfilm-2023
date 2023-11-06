import { AuthProvider } from "../auth/provider/auth_provider";

const RootProvider = ({ children }) => {
  return (
    <AuthProvider
      fallback={
        <div>
          <h1>Cargando...</h1>
        </div>
      }
    >
      {children}
    </AuthProvider>
  );
};

export default RootProvider;
