import Contact from '../Contact/Contact';
import styles from './Footer.module.css';

function Footer() {
  return (
    <div className={styles.footer}>
      <h2>Contact Me</h2>
      <Contact />
    </div>
  );
}

export default Footer;
