import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './ResumePage.module.css';
import { Link } from 'react-router-dom';

function ResumePage() {
  return (
    <>
      <Header />
      <hr />
      <div className={styles.main}>
        <h2 className={styles.resumeHeader}>Education</h2>
        <ul className={styles.resumeSection}>
          <li>
            <h3>Software Development</h3>
            <p>
              <em>The Odin Project</em>
            </p>
            <p>Aug 2023 - May 2024</p>
            <p>Project-based learning</p>
          </li>
          <li>
            <h3>High School Science Education</h3>
            <p>
              <em>Montana State University</em>
            </p>
            <p>Aug 2021 - May 2023</p>
          </li>
          <li>
            <h3>High School Science Education</h3>
            <p>
              <em>University of Montana</em>
            </p>
            <p>Aug 2018 - May 2021</p>
          </li>
          <li>
            <h3>High School Diploma</h3>
            <p>
              <em>Big Sky High School</em>
            </p>
            <p>Aug 2014 - June 2018</p>
            <p>International Baccalaureate Diploma</p>
          </li>
        </ul>
        <hr />
        <h2 className={styles.resumeHeader}>Professional Experience</h2>
        <ul className={styles.resumeSection}>
          <li>
            <h3>Stevensville High School</h3>
            <p>
              <em>Student Teacher</em>
            </p>
            <p>Jan 2023 - April 2023</p>
            <p>Responsible for over 100 students</p>
          </li>
          <li>
            <h3>Montana Club</h3>
            <p>
              <em>Server</em>
            </p>
            <p>Jun 2015 - Mar 2021</p>
            <p>Server at least 100 clients per day</p>
          </li>
          <li>
            <h3>City Life Community Center</h3>
            <p>
              <em>Youth Worker</em>
            </p>
            <p>Jun 2018 - Jun 2020</p>
            <p>Coordinated trips for 20+ students</p>
          </li>
        </ul>
        <hr />
        <h2 className={styles.resumeHeader}>Skills</h2>
        <ul className={styles.skillsSection}>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Git VCS</li>
          <li>React.js</li>
          <li>Jest</li>
          <li>JSON</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MongoDB</li>
          <li>Mongoose ODM</li>
          <li>REST APIs</li>
          <li>Passport.js</li>
          <li>JSON Web Token (JWT)</li>
        </ul>
        <hr />
        <h2 className={styles.resumeHeader}>Organizations</h2>
        <ul className={styles.organizationsSection}>
          <li className={styles.long}>
            <h3>Montana Indian Ministries</h3>
            <p>
              <em>Summer Camp Leader</em>
            </p>
            <p>Jun 2015 - present</p>
            <p>Co-led 50+ camp counselors</p>
          </li>
          <li className={styles.long}>
            <h3>Morning Star Elementary School</h3>
            <p>
              <em>Tech Club Leader</em>
            </p>
            <p>Feb 2022 - May 2022</p>
            <p>Led a weekly after school tech club for elementary students</p>
          </li>
        </ul>
        <hr />
        <div className={styles.pdfLink}>
          <p>
            If you&rsquo;d prefer to have the pdf version:{' '}
            <Link
              className={styles.link}
              to="../../../resume.pdf"
              target="_blank"
              download
            >
              Download my Resume
            </Link>
          </p>
        </div>
      </div>
      <hr />
      <Footer />
    </>
  );
}

export default ResumePage;
