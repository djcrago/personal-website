import { Link } from 'react-router-dom';
import GitHub from '../../assets/github.svg';
import LinkedIn from '../../assets/linkedin.svg';
import Email from '../../assets/email.svg';
import styles from './Contact.module.css';

function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.contactContainer}>
        <img className={styles.logo} src={Email} />
        <p>dexter18crago@gmail.com</p>
      </div>
      <Link
        className={styles.contactContainer}
        to="https://www.linkedin.com/in/dexter-crago-62609b2b6/"
        target="_blank"
      >
        <img className={styles.logo} src={LinkedIn} />
        <p className={styles.link}>LinkedIn</p>
      </Link>
      <Link
        className={styles.contactContainer}
        to="https://github.com/djcrago"
        target="_blank"
      >
        <img className={styles.logo} src={GitHub} />
        <p className={styles.link}>GitHub</p>
      </Link>
    </div>
  );
}

export default Contact;
