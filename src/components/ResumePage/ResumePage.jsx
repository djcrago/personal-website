import Header from '../Header/Header';
import styles from './ResumePage.module.css';

function ResumePage() {
  return (
    <>
      <Header />
      {/* Include both information as HTML and a link to download a pdf */}
      <div className={styles.resume}></div>
    </>
  );
}

export default ResumePage;
