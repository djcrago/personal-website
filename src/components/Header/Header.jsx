import styles from './Header.module.css';

function Header() {
  return (
    <div>
      <h1>
        <a href="/">Dexter Crago</a>
      </h1>
      <nav className={styles.links}>
        <a href="/portfolio">Portfolio</a>
        <a href="/resume">Resume</a>
        <a href="/contact">Contact</a>
      </nav>
    </div>
  );
}

export default Header;
