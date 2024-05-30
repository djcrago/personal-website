import { Link } from 'react-router-dom';
import GitHub from '../../assets/github.svg';
import LinkedIn from '../../assets/linkedin.svg';
import styles from './Contact.module.css';

function Contact() {
  return (
    <div className={styles.contact}>
      <h2>Contact Me</h2>
      <div className={styles.contactInfo}>
        <div className={styles.personalInfo}>
          <p>Email: dexter18crago@gmail.com</p>
          <p>Phone: (406) 241-7556</p>
        </div>

        <div className={styles.socialInfo}>
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
      </div>
    </div>
  );
}

export default Contact;
