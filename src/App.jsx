import { RouterProvider } from 'react-router-dom';
import { appRouter } from './core/routes/app_router';
import RootProvider from './core/providers/root_provider/root_provider';

const App = () => {
  return (
    <RootProvider>
      <RouterProvider router={appRouter} />
    </RootProvider>
  );
};

export default App;
