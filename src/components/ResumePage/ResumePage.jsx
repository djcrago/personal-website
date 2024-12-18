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
            <h3>Substitute Teacher</h3>
            <p>
              <em>Hellgate Elementary</em>
            </p>
            <p>Oct 2024 - present</p>
            <ul>
              <li>Adapting quickly to new expectations and roles</li>
              <li>Working collaboratively with a wide variety of staff</li>
              <li>Communication, communication, communication</li>
            </ul>
          </li>
          <li className={styles.sectionItem}>
            <h3>Software Engineer</h3>
            <p>
              <em>Outlier - Contract</em>
            </p>
            <p>June 2024 - present</p>
            <ul>
              <li>
                Working on multiple projects evaluating the quality of
                AI-generated code based on accuracy, maintainability,
                readability, etc.
              </li>
              <li>Developing robust solutions to coding problems</li>
              <li>Coding to high functional and efficiency standards</li>
              <li>Testing and debugging coding solutions</li>
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
              <li>Developed new teaching strategies and approaches</li>
              <li>Maintained an organized environment</li>
              <li>
                Descalated tense situations with students and coworkers when
                necessary
              </li>
            </ul>
          </li>
          <li className={styles.sectionItem}>
            <h3>Youth Worker</h3>
            <p>
              <em>Youth For Christ</em>
            </p>
            <p>Jun 2018 - Jun 2020</p>
            <ul>
              <li>
                Successfully started and operated a weekly lunch time program at
                a local high school
              </li>
              <li>
                Collaborated with diverse teams of 2 - 20 people from multiple
                background and organizations
              </li>
              <li>
                Found new methods of engaging student participation in
                after-school programs
              </li>
            </ul>
          </li>
        </ul>
        <hr />
        <h2 className={styles.resumeHeader}>Education</h2>
        <ul className={styles.resumeSection}>
          <li className={styles.sectionItem}>
            <h3>Learn Java</h3>
            <p>
              <em>Codecademy</em>
            </p>
            <p>Oct 2024 - Nov 2024</p>
            <ul>
              <li>14 coding projects</li>
              <li>Objected-oriented programming</li>
              <li>Access, encapsulation, and static methods</li>
              <li>Inheritance and polymorphism</li>
            </ul>
          </li>
          <li className={styles.sectionItem}>
            <h3>Full Stack Software Engineering</h3>
            <p>
              <em>The Odin Project</em>
            </p>
            <p>Aug 2023 - May 2024</p>
            <ul>
              <li>Created 30+ projects from scratch</li>
              <li>Strong proficiency in JavaScript</li>
              <li>Responsive and accessible frontends</li>
              <li>Secure and tested backends</li>
              <li>NoSQL database management</li>
              <li>Atomic commits</li>
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
              <li>Strong critical thinking and analysis skills</li>
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
          <li>Bash</li>
          <li>CSS3</li>
          <li>Debugging</li>
          <li>Express.js</li>
          <li>Git</li>
          <li>HTML5</li>
          <li>Java</li>
          <li>ES5+ JavaScript</li>
          <li>Jest</li>
          <li>JSON</li>
          <li>JWT</li>
          <li>MongoDB</li>
          <li>Mongoose ODM</li>
          <li>Node.js</li>
          <li>NoSQL</li>
          <li>Passport.js</li>
          <li>React.js</li>
          <li>REST APIs</li>
          <li>VS Code</li>
          <li>Webpack</li>
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
