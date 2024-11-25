import Header from './components/Header/Header';
import Portrait from './assets/portrait-picture.png';
import TOPLogo from './assets/top-logo.png';
import OutlierLogo from './assets/outlier-logo.png';
import CodecademyLogo from './assets/codecademy-logo.png';
import Belknap from './assets/belknap.jpeg';
import styles from './App.module.css';
import ProjectCard from './components/ProjectCard/ProjectCard';
import BlogApi from './assets/blog-api.png';
import MembersOnly from './assets/members-only.png';
import ShoppingCart from './assets/shopping-cart.png';
import InventoryApplication from './assets/inventory-application.png';
import Footer from './components/Footer/Footer';
import { Link } from 'react-router-dom';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <>
      <Header />
      <hr className={styles.topHr} />
      <Contact />
      <hr className={styles.bottomHr} />
      <div className={styles.main}>
        <section className={styles.aboutMe}>
          <div className={styles.intro}>
            <p className={styles.headline}>
              A full stack software engineer ready to add value to your team.
            </p>
            <p>
              Hello! I&rsquo;m Dexter, a full stack software developer with a
              portfolio of 30+ full stack websites and projects built from
              scratch, experience doing contract work as a software engineer for{' '}
              <Link
                className={styles.link}
                to="https://outlier.ai/"
                target="_blank"
              >
                Outlier AI
              </Link>
              , and a strong desire to continue learning and improving my skills
              as a developer. For example, after completing a full stack web
              development curriculum from the{' '}
              <Link
                className={styles.link}
                to="https://www.theodinproject.com/"
                target="_blank"
              >
                Odin Project
              </Link>
              , I&rsquo;ve gone on to do further learning (Java most recently)
              on the{' '}
              <Link
                className={styles.link}
                to="https://www.codecademy.com/learn"
                target="_blank"
              >
                Codecademy
              </Link>{' '}
              platform.
            </p>
          </div>
          <img className={styles.portrait} src={Portrait} alt="Dexter Crago" />
        </section>
        <hr />
        <section>
          <p>
            My software development experience comes from the{' '}
            <Link
              className={styles.link}
              to="https://www.theodinproject.com/"
              target="_blank"
            >
              Odin Project
            </Link>
            , doing contract work as a software engineer for{' '}
            <Link
              className={styles.link}
              to="https://outlier.ai/"
              target="_blank"
            >
              Outlier AI
            </Link>
            , and continuing education on the{' '}
            <Link
              className={styles.link}
              to="https://www.codecademy.com/learn"
              target="_blank"
            >
              Codecademy
            </Link>{' '}
            platform.
          </p>
          <p>
            The Odin Project provides a full stack web development curriculum.
            During that program I became able to confidently and independently
            build a full stack website from scratch using a variety of
            technologies.
          </p>
          <div className={styles.logoContainer}>
            <p>
              <li>Responsive Frontends: HTML, CSS, JavaScript, and React.js</li>
              <li>Backend Servers: Node.js, Express.js, and REST APIs</li>
              <li>Database Management: MongooseODM and MongoDB</li>
              <li>Authentication: Passport.js and JWT</li>
              <li>Other: Jest, Git, Webpack, VS Code, etc.</li>
            </p>
            <Link
              className={styles.link}
              to="https://www.theodinproject.com/"
              target="_blank"
            >
              <img
                className={styles.logo}
                src={TOPLogo}
                alt="The Odin Project logo. It is a cartoon headshot of the greek god Odin."
              />
            </Link>
          </div>
          <p>
            Other aspects of my training included a strong foundation in
            programming fundamentals, code design principles, fundamental data
            structures and algorithms, and object-oriented design principles.
            Additionally, I developed an agile mindset and a practice of always
            writing clear, efficient, and maintainable code that follows
            industry best practices and coding standards.
          </p>
          <p>~ ~ ~</p>
          <p>
            After my education I accepted contract work as a software engineer
            with Outlier AI, a company concerned with building generative AI
            models.
          </p>
          <div className={styles.logoContainer}>
            <Link
              className={styles.link}
              to="https://outlier.ai/"
              target="_blank"
            >
              <img
                className={styles.logo}
                src={OutlierLogo}
                alt="The Outlier Ai logo. It is two colored disks above the word 'Outlier'."
              />
            </Link>
            <p>
              <li>Evaluating the quality of AI-generated code</li>
              <li>Developing robust solutions to coding problems</li>
              <li>Coding to high functional and efficiency standards</li>
              <li>Testing and debugging coding solutions</li>
            </p>
          </div>
          <p>
            Projects have involved reviewing two code samples generated by an AI
            model, determining which code is better based on accuracy,
            efficiency, readability, and maintainability, and returning my
            analysis to the model for it to learn from.
          </p>
          <p>~ ~ ~</p>
          <p>
            Since then I&rsquo;ve continued to learn new technologies through
            the Codecademy platform. I&rsquo;m interested in learning a wider
            range of technologies to continue leveling up my abilities and gain
            a deeper understanding or different coding methodologies.
          </p>
          <div className={styles.logoContainer}>
            <p>
              <div className={styles.courseTitle}>Java:</div>
              <li>Objected-oriented programming</li>
              <li>Access, encapsulation, and static methods</li>
              <li>Inheritance and polymorphism</li>
            </p>
            <Link
              className={styles.link}
              to="https://www.codecademy.com/learn"
              target="_blank"
            >
              <img
                className={styles.logo}
                src={CodecademyLogo}
                alt="The Codecademy logo. It is a c in a black box."
              />
            </Link>
          </div>
          <p>~ ~ ~</p>
          <p>
            Before completing the Odin Project, I received my bachelor degree
            from Montana State University in science education. My education in
            logical thinking, the scientific method, how to learn and teach, and
            problem solving coincides with many aspects of software development.
          </p>
          <p>
            <li>
              Taking large problems and breaking them down into smaller, more
              manageable pieces
            </li>
            <li>
              Brainstorming solutions to a problem and then testing, analyzing,
              and iterating on those solutions
            </li>
            <li>
              Communicating complex technical concepts to both technical and
              non-technical audiences
            </li>
          </p>
          <p>
            Outside of education I&rsquo;ve also gained a variety of skills
            through the various positions I&rsquo;ve held before like
            communcation, organization, and time-management. I also believe in
            taking ownership over my own work (both the successes and mistakes),
            maintaining professional standards of communication and work, and
            treating others with respect.
          </p>
          <p>
            Additionally, I enjoy hiking, pickleball and chess, have traveled
            the pacific northwest in a camper, and am passionate about
            volunteering with at-risk youth (below is a picture of me passing
            out water balloons to kids at a summer camp I volunteer at).
          </p>{' '}
          <img
            className={styles.belknap}
            src={Belknap}
            alt="A picture of me passing out water balloons at a summer camp"
          />
          <p>
            If you want to know more about my background, check out my{' '}
            <Link className={styles.link} to="/resume">
              resume
            </Link>{' '}
            or{' '}
            <Link
              className={styles.link}
              to="https://www.linkedin.com/in/dexter-crago-62609b2b6/"
              target="_blank"
            >
              LinkedIn
            </Link>
            .
          </p>
        </section>
        <hr />
        <section>
          <p>
            Feel free to watch this{' '}
            <Link
              className={styles.link}
              to="https://youtu.be/6_v0XxLySDE"
              target="_blank"
            >
              video
            </Link>{' '}
            where I walk through one of my full-stack projects
          </p>
          <iframe
            src="https://youtube.com/embed/6_v0XxLySDE"
            allow="autoplay; encrypted-media; fullscreen"
            title="Blog API Video"
          ></iframe>
        </section>
        <hr />
        <section>
          <h2>Recent Projects</h2>
          <p>Here are a few things I&rsquo;ve been working on lately</p>
          <div className={styles.projects}>
            <ProjectCard
              src="https://github.com/djcrago/blog-api"
              img={BlogApi}
              title="Blog Api"
              desc="Blog Api is three connected projects that make up an example blog website. A backend API, a website where visitors can read and comment on blog posts, and a website for the blog author to create, edit, and delete blog posts."
              tech="HTML, CSS, JavaScript, NodeJS, ExpressJS, MongoDB"
              live="https://djcrago.github.io/blog-api-user/"
            />
            <ProjectCard
              src="https://github.com/djcrago/members-only"
              img={MembersOnly}
              title="Members Only"
              desc="Members Only is an example messaging board website where users are given different abilities and permissions based on their status. For example, members can see the author and date of posts, and administrators can delete posts."
              tech="JS, Pug, CSS, NodeJS, ExpressJS, MongoDB"
              live="https://tech-talk-members-only.fly.dev/users"
            />
            <ProjectCard
              src="https://github.com/djcrago/inventory-application"
              img={InventoryApplication}
              title="Inventory Application"
              desc="Inventory Application is an example inventory management website where employees can create, update, and delete inventory items and categories."
              tech="JS, Pug, CSS, NodeJS, ExpressJS, MongoDB"
              live="https://little-family-inventory-management.fly.dev/inventory"
            />
            <ProjectCard
              src="https://github.com/djcrago/shopping-cart"
              img={ShoppingCart}
              title="Shopping Cart"
              desc="Shopping Cart is an example e-commerce website where users can add and remove items from their cart. All shop items are received from a Rest API."
              tech="HTML, CSS, JS, React, Rest API"
              live="https://djcrago-shopping-cart.netlify.app/"
            />
          </div>
          <p></p>
          <p>
            Vist my{' '}
            <Link className={styles.link} to="/portfolio">
              portfolio page
            </Link>{' '}
            to see more of my work
          </p>
        </section>
      </div>
      <hr />
      <Footer />
    </>
  );
}

export default App;
