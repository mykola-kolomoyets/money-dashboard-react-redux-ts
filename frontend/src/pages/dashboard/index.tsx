import { FC } from 'react';

import Header from '../../components/layout/header';
import Navbar from '../../components/layout/navbar';

import DashboardRoutes from './routes';

import styles from './dashboard.module.scss';

const DashboardPages: FC = () => (
  <main className={styles.dashboard}>
    <section className={styles.dashboard__container}>
      <section className={styles.dashboard__left}>
        <Navbar />
      </section>

      <section className={styles.dashboard__right}>
        <Header />

        <DashboardRoutes />
      </section>
    </section>
  </main>
);

export default DashboardPages;
