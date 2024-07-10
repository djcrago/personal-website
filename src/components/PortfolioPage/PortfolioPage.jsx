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
        <h2>My Current Projects</h2>
        <p></p>
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
          <ProjectCard
            src="https://github.com/djcrago/memory-card"
            img={MemoryCard}
            title="Memory Card"
            desc="Memory Card is a memorization game where users try to click on an image of a dog only once. All dogs images are randomly received from a Rest API."
            tech="HTML, CSS, JS, React, Rest API"
            live="https://sensational-hamster-8997a6.netlify.app/"
          />
          <ProjectCard
            src="https://github.com/djcrago/weather-app"
            img={WeatherApp}
            title="Weather App"
            desc="Weather App provides real-time, metric or imperial, data for any location in the world, and displays simple graphics related to the current conditions."
            tech="HTML, CSS, JS, Rest API"
            live="https://djcrago.github.io/weather-app/"
          />
          <ProjectCard
            src="https://github.com/djcrago/library"
            img={Library}
            title="Library"
            desc="Library is a app where users can organize and keep track of books they have and haven't read yet."
            tech="HTML, CSS, JS"
            live="https://djcrago.github.io/library/"
          />
          <ProjectCard
            src="https://github.com/djcrago/todo-list"
            img={TodoList}
            title="Todo List"
            desc="Todo List is a todo app where users can organize and track due dates, priority, and a time estimate for their tasks in different custom projects."
            tech="HTML, CSS, JS"
            live="https://djcrago.github.io/todo-list/"
          />
          <ProjectCard
            src="https://github.com/djcrago/etch-a-sketch"
            img={EtchASketch}
            title="Etch A Sketch"
            desc="Etch A Sketch is a drawing app where users can trace designs with their mouse in random colors on a grid of a size of their choosing."
            tech="HTML, CSS, JS"
            live="https://djcrago.github.io/etch-a-sketch/"
          />
          <ProjectCard
            src="https://github.com/djcrago/calculator"
            img={Calculator}
            title="Calculator"
            desc="Calculator is a calculator app that can perform basic math operations (addition, subtraction, multiplication, and division)."
            tech="HTML, CSS, JS"
            live="https://djcrago.github.io/calculator/"
          />
        </div>
        <p></p>
        <p>
          More examples of my work can be found on{' '}
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
