import Icon from '@mdi/react';
import { mdiCircleSmall } from '@mdi/js';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className={styles.header}>
      <h1>
        <Link className={styles.h1} to="/">
          Dexter Crago
        </Link>
      </h1>
      <nav>
        <Link className={styles.link} to="/portfolio">
          Portfolio
        </Link>
        <Icon className={styles.dot} path={mdiCircleSmall} size={1.5} />
        <Link className={styles.link} to="/resume">
          Resume
        </Link>
      </nav>
    </div>
  );
}

export default Header;
