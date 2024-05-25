import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './ResumePage.module.css';

function ResumePage() {
  return (
    <>
      <Header />
      <hr />
      {/* Include both information as HTML and a link to download a pdf */}
      <div className={styles.main}>
        <p>
          (NOT COMPLETED: Resume - Once I have finished my resume I will come
          back and include it here)
        </p>
        <hr />
        <p>
          If you&rsquo;d prefer to have the pdf version:{' '}
          <a className={styles.link} href="../../assets/resume.pdf">
            Download my Resume
          </a>
        </p>
      </div>
      <hr />
      <Footer />
    </>
  );
}

export default ResumePage;
