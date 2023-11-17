import { createBrowserRouter } from "react-router-dom";
import HomeView from "../../features/home/views/home_view";
import PrivateRoute from "../../features/auth/components/private_route";
import PublicRoute from "../../features/auth/components/public_route";
import LoginView from "../../features/auth/views/login/views/login_view";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <HomeView />
      </PrivateRoute>
    ),
  },
  {
    path: "/login",
    element: (
      <PublicRoute>
        <LoginView />
      </PublicRoute>
    ),
  },
  // 404
  {
    path: "*",
    element: <div>No se encontro la pagina</div>,
  },
]);
