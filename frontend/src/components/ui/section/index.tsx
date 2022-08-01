import { FC, ReactNode } from 'react';

import styles from './section.module.scss';

type SectionProps = {
  title?: string;
  children: ReactNode;
};
const Section: FC<SectionProps> = ({ title, children }) => (
  <section className={styles.section}>
    {title && <h3 className={styles.section__title}>{title}</h3>}
    {children}
  </section>
);

export default Section;
