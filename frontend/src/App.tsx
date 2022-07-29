import React, { Suspense, lazy } from 'react';
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';

const DashboardPages = lazy(() => import('./pages/dashboard'));

import { dashboardPaths } from './utils/paths';

import './styles/app.scss';

const App = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route
            path={`${dashboardPaths.main}/*`}
            element={<DashboardPages />}
          />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
