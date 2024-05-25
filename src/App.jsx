import Header from './components/Header/Header';
import Portrait from './assets/portrait.png';
import styles from './App.module.css';
import Contact from './components/Contact/Contact';
import ProjectCard from './components/ProjectCard/ProjectCard';

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
            <a href="https://www.theodinproject.com/">The Odin ProjectCard</a>,
            a &ldquo;high quality coding education maintained by an open source
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
        <div>
          <h2>Recent Projects</h2>
          <p>Here are a few of the things I&rsquo;ve been working on lately.</p>
          <div>
            <ProjectCard
              src="https://github.com/djcrago/blog-api"
              img=""
              title="Blog Api"
              desc='This repository houses three connected projects that make up an example blog website. A backend API (the "backend" directory), a website where visitors can read and comment on blog posts (the "frontend-user" directory), and a website for the blog author to create, edit, and delete blog posts (the "frontend-owner" directory).'
            />
            <ProjectCard
              src="https://github.com/djcrago/members-only"
              img=""
              title="Members Only"
              desc="This repository houses an example messaging board website where users are given different abilities and permissions based on the status of their account."
            />
            <ProjectCard
              src="https://github.com/djcrago/shopping-cart"
              img=""
              title="Shopping Cart"
              desc="This repository houses an example e-commerce website where users can add and remove items from their cart."
            />
            <ProjectCard
              src="https://github.com/djcrago/todo-list"
              img=""
              title="Todo List"
              desc="This repository houses a todo app where users can create todo items and different projects to place those todo items in."
            />
          </div>
          <p>
            If you&rsquo;re interested in seeing more of the cool stuff
            I&rsquo;ve made, visit my <a href="/portfolio">portfolio page</a>.
          </p>
        </div>
        <div>
          <p>
            Or if you want to know more about my background, check out my{' '}
            <a href="/resume">resume</a>.
          </p>
        </div>
        <Contact />
      </div>
    </>
  );
}

export default App;
