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
        <h2 className={styles.resumeHeader}>Education</h2>
        <ul className={styles.resumeSection}>
          <li className={styles.sectionItem}>
            <h3>Software Engineering</h3>
            <p>
              <em>The Odin Project</em>
            </p>
            <p>Aug 2023 - May 2024</p>
            <ul>
              <li>Full stack web development program</li>
              <li>Created 20+ projects from scratch</li>
              <li>Programming & computer science fundamentals</li>
              <li>Testing with Jest and refactoring code</li>
              <li>Authentication, authorization, and API endpoints</li>
              <li>Using Git extensively and working with databases</li>
            </ul>
          </li>
          <li className={styles.sectionItem}>
            <h3>Bachelor of Science</h3>
            <p>
              <em>Montana State University</em>
            </p>
            <p>Aug 2021 - May 2023</p>
            <ul>
              <li>Strong logical reasoning and analysis skills</li>
              <li>
                Communicating technical concepts to non-technical individuals
              </li>
              <li>Breaking down large problems into manageable pieces</li>
            </ul>
          </li>
        </ul>
        <hr />
        <h2 className={styles.resumeHeader}>Professional Experience</h2>
        <ul className={styles.resumeSection}>
          <li className={styles.sectionItem}>
            <h3>High School Science Teacher</h3>
            <p>
              <em>Stevensville High School</em>
            </p>
            <p>Jan 2023 - April 2023</p>
            <ul>
              <li>Time management, organization, self-discipline</li>
              <li>Responsible for teaching over 100 students</li>
              <li>Developing creative and engaging lesson plans</li>
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
              <li>Increased sales from $500/day to $1000/day in one year</li>
              <li>Developed new team workflows</li>
              <li>Responsible for 100+ clients per day</li>
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
              <li>Provided tutoring and mentoring for at-risk students</li>
              <li>
                Organized weekly gatherings; coordinating volunteers, meals, and
                supplies
              </li>
              <li>Engaging in professional development opportunities</li>
              <li>Adaptability, teachability, ability to work autonomously</li>
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
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
          <li>REST APIs</li>
          <li>Passport.js</li>
          <li>JWT</li>
        </ul>
        <hr />
        <h2 className={styles.resumeHeader}>Organizations</h2>
        <ul className={styles.organizationsSection}>
          <li className={styles.sectionItem}>
            <h3>Montana Indian Ministries</h3>
            <p>
              <em>Summer Camp Leader</em>
            </p>
            <p>Jun 2015 - present</p>

            <ul>
              <li>Managing and teaching 50+ camp counselors</li>
              <li>
                Responsible for the child safety on hikes, swimming, hatchet
                throwing, etc.
              </li>
              <li>Planning and running daily operations</li>
            </ul>
          </li>
          <li className={styles.sectionItem}>
            <h3>Morning Star Elementary School</h3>
            <p>
              <em>Tech Club Leader</em>
            </p>
            <p>Feb 2022 - May 2022</p>
            <ul>
              <li>
                Teaching elementary students math, science, technology, etc.
                concepts
              </li>
            </ul>
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
