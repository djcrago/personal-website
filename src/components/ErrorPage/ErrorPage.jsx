import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import styles from './ErrorPage.module.css';

function ErrorPage() {
  return (
    <>
      <Header />
      <hr />
      <h2 className={styles.errorMessage}>
        This page could not be found, please navigate using the links.
      </h2>
      <hr />
      <Footer />
    </>
  );
}

export default ErrorPage;
