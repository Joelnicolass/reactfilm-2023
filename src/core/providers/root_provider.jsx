import { AuthProvider } from "../../features/auth/provider/auth_provider";
import { store } from "../redux/store";
import FavoritesProvider from "./favorites/favorites_provider";

import { Provider } from "react-redux";

const RootProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <FavoritesProvider>{children}</FavoritesProvider>
    </Provider>
  );
};

export default RootProvider;
