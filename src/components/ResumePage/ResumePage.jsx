import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './ResumePage.module.css';
import { Link } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import Contact from '../Contact/Contact';

function ResumePage() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Header />
      <hr className={styles.topHr} />
      <Contact />
      <hr className={styles.bottomHr} />
      <div className={styles.main}>
        <h2 className={styles.resumeHeader}>Professional Experience</h2>
        <ul className={styles.resumeSection}>
          <li className={styles.sectionItem}>
            <h3>Software Engineer - Contract</h3>
            <p>
              <em>Outlier</em>
            </p>
            <p>June 2024 - present</p>
            <ul>
              <li>Evaluating the quality of AI-generated code</li>
              <li>Engaging in a cycle of feedback and improvement</li>
              <li>Solving coding problems</li>
              <li>Writing functional and efficient code</li>
              <li>Writing test cases to confirm code works efficiently</li>
              <li>Creating instructions to help others</li>
            </ul>
          </li>
          <li className={styles.sectionItem}>
            <h3>Science Teacher</h3>
            <p>
              <em>Stevensville High School</em>
            </p>
            <p>Jan 2023 - April 2023</p>
            <ul>
              <li>Managed 100+ students across a variety of subjects</li>
              <li>Time management, organization, self-discipline</li>
              <li>Critical and creative thinking skills</li>
              <li>Conflict resolution skills</li>
              <li>Conducted, analyzed, and presented research</li>
            </ul>
          </li>
          <li className={styles.sectionItem}>
            <h3>Server</h3>
            <p>
              <em>Montana Club</em>
            </p>
            <p>Jun 2015 - Mar 2021</p>
            <ul>
              <li>Increased sales from $500 to $1000/day in one year</li>
              <li>
                Worked both in the front and in the back to better understand
                the whole operation
              </li>
              <li>Trusted with closing out registers containing $1000+</li>
              <li>Trained junior co-workers</li>
            </ul>
          </li>
          <li className={styles.sectionItem}>
            <h3>Youth Worker</h3>
            <p>
              <em>City Life Community Center</em>
            </p>
            <p>Jun 2018 - Jun 2020</p>
            <ul>
              <li>
                Working closely with a team to coordinate trips and events for
                20+ students
              </li>
              <li>Fully engaged in professional development</li>
              <li>Constantly considering how to better serve students</li>
              <li>Adaptable, teachable, and self-directed</li>
            </ul>
          </li>
        </ul>
        <hr />
        <h2 className={styles.resumeHeader}>Education</h2>
        <ul className={styles.resumeSection}>
          <li className={styles.sectionItem}>
            <h3>Full Stack Software Engineering</h3>
            <p>
              <em>The Odin Project</em>
            </p>
            <p>Aug 2023 - May 2024</p>
            <ul>
              <li>Created 30+ projects from scratch</li>
              <li>Creating frontends with HTML, CSS, JS, and React</li>
              <li>Creating backends with NodeJS and ExpressJS</li>
              <li>Managing MongoDB databases with Mongoose ODM</li>
              <li>Tests with Jest and authentication with PassportJS</li>
              <li>Version control with Git and sending data with JSON</li>
              <li>Creating and consuming REST APIs</li>
              <li>Fundamental data structures and algorithms</li>
              <li>Agile software development workflow</li>
              <li>
                Writing clean, efficient, and maintainable code that follows
                industry best practices and coding standards
              </li>
            </ul>
          </li>
          <li className={styles.sectionItem}>
            <h3>Bachelor of Science</h3>
            <p>
              <em>Montana State University</em>
            </p>
            <p>Aug 2021 - May 2023</p>
            <ul>
              <li>Secondary Education - Broadfield Science</li>
              <li>Strong logical reamsoning and analysis skills</li>
              <li>Able to easily break down large problems</li>
              <li>
                Great at communicating complex technical concepts to both
                technical and non-technical audiences
              </li>
              <li>Using a testing mindset to pinpoint issues</li>
              <li>Brainstorming creative solutions to a problem</li>
            </ul>
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
          <li>REST APIs</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>NoSQL</li>
          <li>JWT</li>
          <li>MongoDB</li>
          <li>Mongoose ODM</li>
          <li>Passport.js</li>
        </ul>
        <hr />
        <h2 className={styles.resumeHeader}>Volunteering</h2>
        <ul className={styles.organizationsSection}>
          <li className={styles.sectionItem}>
            <h3>Morning Star Elementary School</h3>
            <p>
              <em>Tech Club Leader</em>
            </p>
            <p>Feb 2022 - May 2022</p>
            <ul>
              <li>Teaching elementary students technology concepts</li>
            </ul>
          </li>
          <li className={styles.sectionItem}>
            <h3>Montana Indian Ministries</h3>
            <p>
              <em>Summer Camp Leader</em>
            </p>
            <p>Jun 2015 - present</p>

            <ul>
              <li>Managing and guiding 50+ camp counselors</li>
            </ul>
          </li>
        </ul>
        <hr />
        <div className={styles.pdfLink}>
          <p>
            <Link
              className={styles.link}
              to="../../../resume.pdf"
              target="_blank"
              download
            >
              Download my Resume
            </Link>{' '}
            (PDF)
          </p>
        </div>
      </div>
      <hr />
      <Footer />
    </>
  );
}

export default ResumePage;
