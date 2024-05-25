import Header from '../Header/Header';
import styles from './ResumePage.module.css';

function ResumePage() {
  return (
    <>
      <Header />
      {/* Include both information as HTML and a link to download a pdf */}
      <div className={styles.resume}>
        <p>(NOT COMPLETED: Resume)</p>
        <p>
          (Once I have finished my resume I will come back and include it here)
        </p>
      </div>
    </>
  );
}

export default ResumePage;
