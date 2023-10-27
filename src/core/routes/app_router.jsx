import { createBrowserRouter } from 'react-router-dom';
import LoginView from '../../features/login/views/login_view';
import HomeView from '../../features/home/views/home_view';
import PrivateRoute from '../../core/auth/components/private_route/private_route';
import PublicRoute from '../auth/components/public_route/public_route';
import PrivateLayout from '../layouts/private_layout/private_layout';

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: (
      <PrivateRoute>
        <PrivateLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: '',
        element: <HomeView />,
      },
      {
        path: 'action',
        element: <h1>action</h1>,
      },
    ],
  },

  {
    path: '/login',
    element: (
      <PublicRoute>
        <LoginView />
      </PublicRoute>
    ),
  },
]);
