import Header from './components/Header/Header';
import Portrait from './assets/portrait-picture.png';
import styles from './App.module.css';
import ProjectCard from './components/ProjectCard/ProjectCard';
import BlogApi from './assets/blog-api.png';
import MembersOnly from './assets/members-only.png';
import ShoppingCart from './assets/shopping-cart.png';
import TodoList from './assets/todo-list.png';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <hr />
      <div className={styles.main}>
        <section className={styles.aboutMe}>
          <div className={styles.intro}>
            <p className={styles.headline}>
              A full-stack software developer ready to add value to your team.
            </p>
            <p>
              I&rsquo;m Dexter, a full-stack web developer with a strong grasp
              of programming fundamentals, lots of experience fixing my own
              code, and a strong drive to continue learning and improving my
              skills.
            </p>
          </div>
          <img className={styles.portrait} src={Portrait} alt="Dexter Crago" />
        </section>
        <hr />
        <section>
          <p>
            For the past year I have been working through{' '}
            <a
              className={styles.link}
              href="https://www.theodinproject.com/"
              target="_blank"
            >
              The Odin Project
            </a>
            , a &ldquo;high quality coding education maintained by an open
            source community.&rdquo; During this program I&rsquo;ve developed
            many{' '}
            <a className={styles.link} href="/portfolio">
              projects
            </a>{' '}
            from simple to complex that have prepared me to start adding value
            to your team right away.
          </p>
          <p>
            With a background in science education, I bring with me the ability
            to break down complex problems into smaller, more manageable pieces,
            a framework for solving problems and developing productive
            solutions, and a love for cause-and-effect logical thinking.
          </p>
          <p>
            Other things that will make me a great addition to your team are my
            ability to learn efficiently and come up to speed quickly, great
            communication skills that benefit both your team and your clients,
            and a hard-working attitude that brings reliability and focus.
          </p>
          <p></p>
          <p>
            If you want to know more about my background, check out my{' '}
            <a className={styles.link} href="/resume">
              resume
            </a>
            .
          </p>
        </section>
        <hr />
        <section>
          <p>
            Feel free to watch this video where I walk through one of my
            full-stack projects.
          </p>
          <iframe
            src=""
            allow="fullscreen"
            title="Blog API Video"
            width="640px"
            height="360px"
          ></iframe>
        </section>
        <hr />
        <section>
          <h2>Recent Projects</h2>
          <p>Here are a few of the things I&rsquo;ve been working on lately.</p>
          <div className={styles.projects}>
            <ProjectCard
              src="https://github.com/djcrago/blog-api"
              img={BlogApi}
              title="Blog Api"
              desc="Blog Api is three connected projects that make up an example blog website. A backend API, a website where visitors can read and comment on blog posts, and a website for the blog author to create, edit, and delete blog posts."
              live="https://djcrago.github.io/blog-api-user/"
            />
            <ProjectCard
              src="https://github.com/djcrago/members-only"
              img={MembersOnly}
              title="Members Only"
              desc="Members Only is an example messaging board website where users are given different abilities and permissions based on the status of their account. For example, members can see the author and date of posts, and administrators can delete posts."
              live="https://tech-talk-members-only.fly.dev/users"
            />
            <ProjectCard
              src="https://github.com/djcrago/shopping-cart"
              img={ShoppingCart}
              title="Shopping Cart"
              desc="Shopping Cart is an example React e-commerce website where users can add and remove items from their cart. All shop items are gathered from an API."
              live="https://djcrago-shopping-cart.netlify.app/"
            />
            <ProjectCard
              src="https://github.com/djcrago/todo-list"
              img={TodoList}
              title="Todo List"
              desc="Todo List is a todo app where users can create todo items and different projects to place those todo items in."
              live="https://djcrago.github.io/todo-list/"
            />
          </div>
          <p></p>
          <p>
            If you&rsquo;re interested in seeing more of the cool stuff
            I&rsquo;ve made, visit my{' '}
            <a className={styles.link} href="/portfolio">
              portfolio page
            </a>
            .
          </p>
        </section>
      </div>
      <hr />
      <Footer />
    </>
  );
}

export default App;
