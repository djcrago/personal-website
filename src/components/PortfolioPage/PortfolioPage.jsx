import Header from '../Header/Header';
import ProjectCard from '../ProjectCard/ProjectCard';
import BlogApi from '../../assets/blog-api.png';
import MembersOnly from '../../assets/members-only.png';
import InventoryApplication from '../../assets/inventory-application.png';
import ShoppingCart from '../../assets/shopping-cart.png';
import MemoryCard from '../../assets/memory-card.png';
import WeatherApp from '../../assets/weather-app.png';
import Library from '../../assets/library.png';
import TodoList from '../../assets/todo-list.png';
import EtchASketch from '../../assets/etch-a-sketch.png';
import Calculator from '../../assets/calculator.png';
import styles from './PortfolioPage.module.css';
import Footer from '../Footer/Footer';
import { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import Contact from '../Contact/Contact';

function PortfolioPage() {
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
        <p>Here are some of the things I&rsquo;ve been working on</p>
        <div className={styles.projects}>
          <div className={styles.project}>
            <ProjectCard
              src="https://github.com/djcrago/blog-api"
              img={BlogApi}
              title="Blog Api"
              desc="Blog Api is three connected projects that make up an example blog website. A backend API, a website where visitors can read and comment on blog posts, and a website for the blog author to create, edit, and delete blog posts."
              live="https://djcrago.github.io/blog-api-user/"
            />
          </div>
          <div className={styles.project}>
            <ProjectCard
              src="https://github.com/djcrago/members-only"
              img={MembersOnly}
              title="Members Only"
              desc="Members Only is an example messaging board website where users are given different abilities and permissions based on the status of their account. For example, members can see the author and date of posts, and administrators can delete posts."
              live="https://tech-talk-members-only.fly.dev/users"
            />
          </div>
          <div className={styles.project}>
            <ProjectCard
              src="https://github.com/djcrago/inventory-application"
              img={InventoryApplication}
              title="Inventory Application"
              desc="Inventory Application is an example inventory management website where employees can create, update, and delete inventory items."
              live="https://little-family-inventory-management.fly.dev/inventory"
            />
          </div>
          <div className={styles.project}>
            <ProjectCard
              src="https://github.com/djcrago/shopping-cart"
              img={ShoppingCart}
              title="Shopping Cart"
              desc="Shopping Cart is an example React e-commerce website where users can add and remove items from their cart. All shop items are gathered from an API."
              live="https://djcrago-shopping-cart.netlify.app/"
            />
          </div>
          <div className={styles.project}>
            <ProjectCard
              src="https://github.com/djcrago/memory-card"
              img={MemoryCard}
              title="Memory Card"
              desc="Memory Card is a memory card game React website."
              live="https://sensational-hamster-8997a6.netlify.app/"
            />
          </div>
          <div className={styles.project}>
            <ProjectCard
              src="https://github.com/djcrago/weather-app"
              img={WeatherApp}
              title="Weather App"
              desc="Weather App is a weather app that provides real-time data for any location in the world."
              live="https://djcrago.github.io/weather-app/"
            />
          </div>
          <div className={styles.project}>
            <ProjectCard
              src="https://github.com/djcrago/library"
              img={Library}
              title="Library"
              desc="Library is a library app where users can make a book list."
              live="https://djcrago.github.io/library/"
            />
          </div>
          <div className={styles.project}>
            <ProjectCard
              src="https://github.com/djcrago/todo-list"
              img={TodoList}
              title="Todo List"
              desc="Todo List is a todo app where users can create todo items and different projects to place those todo items in."
              live="https://djcrago.github.io/todo-list/"
            />
          </div>
          <div className={styles.project}>
            <ProjectCard
              src="https://github.com/djcrago/etch-a-sketch"
              img={EtchASketch}
              title="Etch A Sketch"
              desc="Etch A Sketch is an etch-a-sketch app where users can draw in random colors on a grid of a size of their choosing."
              live="https://djcrago.github.io/etch-a-sketch/"
            />
          </div>
          <div className={styles.project}>
            <ProjectCard
              src="https://github.com/djcrago/calculator"
              img={Calculator}
              title="Calculator"
              desc="Calculator is a calculator app that can perform basic math operations."
              live="https://djcrago.github.io/calculator/"
            />
          </div>
        </div>
        <p></p>
        <p>
          More examples of my code can be found on{' '}
          <Link
            className={styles.link}
            to="https://github.com/djcrago"
            target="_blank"
          >
            my GitHub
          </Link>
        </p>
      </div>
      <hr />
      <Footer />
    </>
  );
}

export default PortfolioPage;
