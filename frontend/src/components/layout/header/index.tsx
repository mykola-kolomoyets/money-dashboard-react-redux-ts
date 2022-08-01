import { FC } from 'react';

import styles from './header.module.scss';
import CalendarIcon from '../../icons/calendar';
import ProfileIcon from '../../icons/profile';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <section className={styles.header__left}>
        <div className={styles.header__greeting}>
          <h4 className={styles.header__title}>Hi! Mykola Kolomoyets</h4>
          <h4 className={styles.header__subtitle}>Welcome back!</h4>
        </div>

        <div className={styles.header__date}>
          <CalendarIcon size={30} />

          <p>{new Date().toDateString()}</p>
        </div>
      </section>

      <section className={styles.header__right}>
        <div className={styles.header__avatar}>
          <ProfileIcon size={36} />

          <p>Mykola</p>
        </div>
      </section>
    </header>
  );
};

export default Header;
