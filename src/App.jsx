import Header from './components/Header/Header';
import Portrait from './assets/portrait.png';
import styles from './App.module.css';
import ContactPage from './components/Contact/Contact';

function App() {
  return (
    <>
      <Header />
      <div className={styles.main}>
        <div className={styles.aboutMe}>
          <p className={styles.headline}>
            A full-stack software developer ready to add value to your team.
          </p>
          <p>
            I&rsquo;m Dexter, a full-stack web developer with a strong grasp of
            programming fundamentals, lots of experience fixing my own code, and
            a strong drive to continue learning and improving my skills.
          </p>
        </div>
        <div>
          <img src={Portrait} alt="Dexter Crago" />
        </div>
        <div>
          <p>
            For the past year I have been working through{' '}
            <a href="https://www.theodinproject.com/">The Odin Project</a>, a
            &ldquo;high quality coding education maintained by an open source
            community.&rdquo; During this program I&rsquo;ve developed{' '}
            <a href="/portfolio">projects</a> from simple to complex that have
            prepared me to start adding value to your team right away.
          </p>
          <p>
            With a background in science education, I bring with me the ability
            to break down complex problems into smaller, more manageable pieces,
            a framework for solving problems and developing productive
            solutions, and a love for cause-and-effect logical thinking.
          </p>
          <p>
            Things that will make me a great addition to your team are my
            ability to learn efficiently and come up to speed quickly, great
            communication skills that benefits both your team and your clients,
            and a hard-working attitude that brings reliability and focus.
          </p>
        </div>
        <div>
          <p>
            Feel free to watch this video where I walk through one of my
            full-stack projects.
          </p>
          <a href="/">(NOT COMPLETED: Video)</a>
        </div>
        <ContactPage />
      </div>
    </>
  );
}

export default App;
