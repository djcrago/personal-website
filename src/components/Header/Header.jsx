import styles from './Header.module.css';

function Header() {
  return (
    <div>
      <h1>
        <a className={styles.link} href="/">
          Dexter Crago
        </a>
      </h1>
      <nav className={styles.links}>
        <a className={styles.link} href="/portfolio">
          Portfolio
        </a>
        <a className={styles.link} href="/resume">
          Resume
        </a>
      </nav>
    </div>
  );
}

export default Header;
