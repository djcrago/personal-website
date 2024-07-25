import Header from './components/Header/Header';
import Portrait from './assets/portrait-picture.png';
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
              Hello! I&rsquo;m Dexter, a full stack software engineer with a
              strong grasp of programming and code design principles, a
              portfolio of 30+ projects built from scratch, and a strong
              commitment to continue learning and improving my skills as a
              developer.
            </p>
          </div>
          <img className={styles.portrait} src={Portrait} alt="Dexter Crago" />
        </section>
        <hr />
        <section>
          <p>
            I have a software engineering and development background, after
            completing a full stack curriculum from{' '}
            <Link
              className={styles.link}
              to="https://www.theodinproject.com/"
              target="_blank"
            >
              The Odin Project
            </Link>
            , and doing contract work as a software engineer for{' '}
            <Link
              className={styles.link}
              to="https://outlier.ai/"
              target="_blank"
            >
              Outlier
            </Link>
            .
          </p>
          <p>
            In the Odin Project I became able to confidently and independently
            build a full stack website.
          </p>
          <p>
            <li>Responsive Frontends: HTML, CSS, JavaScript, and React.js</li>
            <li>Backend Servers: Node.js, Express.js, and REST APIs</li>
            <li>Database Management: MongooseODM and MongoDB</li>
            <li>Testing: Jest</li>
            <li>Authentication: Passport.js and JWT</li>
            <li>Version Control: Git</li>
          </p>
          <p>
            Other aspects of my training included a strong foundation in
            programming fundamentals, code design principles, fundamental data
            structures and algorithms, and object-oriented design principles.
            Additionally, I developed an agile mindset and a practice of always
            writing clear, efficient, and maintainable code that follows
            industry best practices and coding standards.
          </p>
          <p>
            After my education I accepted contract work as a software engineer
            with Outlier, a company concerned with building generative AI
            models. Aspects of my contract work have included evaluating the
            quality of AI-generated code, engaging in a cycle of feedback and
            improvement, solving coding problems, and writing functional and
            efficient code.
          </p>
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
            I am detail-oriented, organized, self-disciplined, take ownership of
            my own work, and have a strong work ethic, all of which makes me
            reliable and keeps me focused on the task at hand. I also have great
            communication skills that make me a better team player and better
            able to serve clients.
          </p>

          <p>
            I also enjoy hiking, pickleball and chess, have traveled the pacific
            northwest in a camper, and am passionate about volunteering with
            at-risk youth.
          </p>
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
