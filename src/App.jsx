import Header from './components/Header/Header';
import Portrait from './assets/portrait.png';
import styles from './App.module.css';

function App() {
  return (
    <>
      <Header />
      <div className={styles.main}>
        <img src={Portrait} alt="Dexter Crago" />
      </div>
    </>
  );
}

export default App;
