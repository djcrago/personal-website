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
              A full-stack software developer ready to add value to your team.
            </p>
            <p>
              Hello! I&rsquo;m Dexter, a full stack software engineer with a
              strong grasp of programming and code design fundamentals,
              experience building 30+ projects from scratch, and a strong drive
              to continue learning and improving my skills.
            </p>
          </div>
          <img className={styles.portrait} src={Portrait} alt="Dexter Crago" />
        </section>
        <hr />
        <section>
          <p>
            For the past year I have been working through{' '}
            <Link
              className={styles.link}
              to="https://www.theodinproject.com/"
              target="_blank"
            >
              The Odin Project
            </Link>
            , a &ldquo;high quality coding education maintained by an open
            source community.&rdquo; During this program I&rsquo;ve developed
            many{' '}
            <Link className={styles.link} to="/portfolio">
              projects
            </Link>
            , from a simple calculator to complex full stack web applications{' '}
            <Link
              className={styles.link}
              to="https://youtu.be/6_v0XxLySDE"
              target="_blank"
            >
              (like this one)
            </Link>
            , that have prepared me to start adding value to your team right
            away.
          </p>
          <p>
            With a background in science education, I bring with me the ability
            to break down large problems into smaller, more manageable pieces,
            brainstorming solutions to a problem and then testing those
            solutions and iterating on them, and communicating complex technical
            concepts to both technical and non-technical audiences.
          </p>
          <p>
            Other things that will make me a great addition to your team are my
            love for cause-and-effect logical thinking, great communication
            skills that make me a better team player and better able to serve
            clients, a strong work ethic that makes me reliable and focused on
            the task at hand, and a strong commitment to continue learning and
            improving my skills. I also enjoy hiking, pickleball and chess, have
            traveled the pacific northwest in a camper, and am passionate about
            volunteering with at-risk youth.
          </p>
          <p></p>
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
            to see more of the cool stuff I&rsquo;ve made
          </p>
        </section>
      </div>
      <hr />
      <Footer />
    </>
  );
}

export default App;
