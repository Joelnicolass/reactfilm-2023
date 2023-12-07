import { AuthProvider } from "../../features/auth/provider/auth_provider";
import FavoritesProvider from "./favorites/favorites_provider";

const RootProvider = ({ children }) => {
  return (
    <AuthProvider
      fallback={
        <div>
          <h1>Cargando...</h1>
        </div>
      }
    >
      <FavoritesProvider>{children}</FavoritesProvider>
    </AuthProvider>
  );
};

export default RootProvider;
