import Button, { ButtonView } from "../../components/button";
import { hoc } from "../../utils/hoc";

import useDashboard from "./dashboard.hook";

import styles from "./dashboard.module.scss";

const Dashboard = hoc(useDashboard, ({ userName }) => (
  <section className={styles.dashboard}>
    <section className={styles.dashboard__left}>
      <div className={styles.dashboard__row}>
        <h2 className={styles.dashboard__title}>
          Welcome back, <strong>{userName}</strong>
        </h2>

        <Button view={ButtonView.primary}>Add new +</Button>
      </div>

      <div className={styles.dashboard__row}>Badges</div>
    </section>

    <section className={styles.dashboard__right}>
      <div className={styles.dashboard__row}>Profile</div>
      <div className={styles.dashboard__row}>Last Purchases</div>
    </section>
  </section>
));

export default Dashboard;
