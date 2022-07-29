import { FC, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Main = lazy(() => import('./../../views/dashboard/main'));

import { dashboardPaths } from '../../utils/paths';

const DashboardRoutes: FC = () => (
  <Suspense fallback={<h1>Loading...</h1>}>
    <Routes>
      <Route path={dashboardPaths.dashboard} element={<Main />} />
    </Routes>
  </Suspense>
);

export default DashboardRoutes;
