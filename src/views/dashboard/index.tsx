import Avatar from "components/avatar";
import Typography from "components/typography";
import { ParagraphView } from "components/typography/paragraph";
import { TitleTag } from "components/typography/title";
import Button, { ButtonView } from "../../components/button";
import { hoc } from "../../utils/hoc";

import useDashboard from "./dashboard.hook";

import styles from "./dashboard.module.scss";

const Dashboard = hoc(useDashboard, ({ userName }) => (
  <section className={styles.dashboard}>
    <section className={styles.dashboard__left}>
      <div className={styles.dashboard__row}>
        <Typography.Title Tag={TitleTag.h1}>
          Welcome back,{" "}
          <Typography.Paragraph view={ParagraphView.regular} bold>
            {userName}
          </Typography.Paragraph>
        </Typography.Title>

        <Button view={ButtonView.primary}>
          <Typography.Paragraph view={ParagraphView.button}>
            Add purchase
          </Typography.Paragraph>
        </Button>
      </div>

      <div className={styles.dashboard__row}>Badges</div>
    </section>

    <section className={styles.dashboard__right}>
      <div className={styles.dashboard__row}>
        <section className={styles.dashboard__inline}>
          <Typography.Paragraph view={ParagraphView.link}>
            Statistics
          </Typography.Paragraph>

          <Typography.Paragraph view={ParagraphView.link}>
            Profile
          </Typography.Paragraph>
        </section>

        <section>
          <Avatar name="Mykola" />
        </section>
      </div>
      <div className={styles.dashboard__row}>Last Purchases</div>
    </section>
  </section>
));

export default Dashboard;
