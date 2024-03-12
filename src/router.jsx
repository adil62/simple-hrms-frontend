import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ErrorPage from './components/ErrorPage';
import Root from './Root';
import routes from './routes';
import RequireAuth from './components/common/RequireAuth';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path={routes.root}
      element={<Root />}
      errorElement={<ErrorPage />}
    >
      <Route index element={<Login />} />
      <Route path={routes.auth.login} element={<Login />} />
      <Route
        path={routes.dashboard.index}
        element={(
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        )}
      />
    </Route>,
  ),
);

export default router;