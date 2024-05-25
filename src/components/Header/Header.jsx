import Icon from '@mdi/react';
import { mdiCircleSmall } from '@mdi/js';
import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles.header}>
      <h1>
        <a className={styles.h1} href="/">
          Dexter Crago
        </a>
      </h1>
      <nav>
        <a className={styles.link} href="/portfolio">
          Portfolio
        </a>
        <Icon className={styles.dot} path={mdiCircleSmall} size={1.5} />
        <a className={styles.link} href="/resume">
          Resume
        </a>
      </nav>
    </div>
  );
}

export default Header;
