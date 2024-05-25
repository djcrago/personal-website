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

function PortfolioPage() {
  return (
    <>
      <Header />
      <p>Here are some of the things I&rsquo;ve been working on.</p>
      <div className={styles.projects}>
        <ProjectCard
          src="https://github.com/djcrago/blog-api"
          img={BlogApi}
          title="Blog Api"
          desc='This repository houses three connected projects that make up an example blog website. A backend API (the "backend" directory), a website where visitors can read and comment on blog posts (the "frontend-user" directory), and a website for the blog author to create, edit, and delete blog posts (the "frontend-owner" directory).'
        />
        <ProjectCard
          src="https://github.com/djcrago/members-only"
          img={MembersOnly}
          title="Members Only"
          desc="This repository houses an example messaging board website where users are given different abilities and permissions based on the status of their account."
        />
        <ProjectCard
          src="https://github.com/djcrago/inventory-application"
          img={InventoryApplication}
          title="Inventory Application"
          desc="This repository houses an example inventory management website where employees can create, update, and delete inventory items."
        />
        <ProjectCard
          src="https://github.com/djcrago/shopping-cart"
          img={ShoppingCart}
          title="Shopping Cart"
          desc="This repository houses an example e-commerce website where users can add and remove items from their cart."
        />
        <ProjectCard
          src="https://github.com/djcrago/memory-card"
          img={MemoryCard}
          title="Memory Card"
          desc="This repository houses a memory card game React website."
        />
        <ProjectCard
          src="https://github.com/djcrago/weather-app"
          img={WeatherApp}
          title="Weather App"
          desc="This repository houses a weather app that provides real-time data for any location in the world."
        />
        <ProjectCard
          src="https://github.com/djcrago/library"
          img={Library}
          title="Library"
          desc="This repository houses a library app where users can make a book list."
        />
        <ProjectCard
          src="https://github.com/djcrago/todo-list"
          img={TodoList}
          title="Todo List"
          desc="This repository houses a todo app where users can create todo items and different projects to place those todo items in."
        />
        <ProjectCard
          src="https://github.com/djcrago/etch-a-sketch"
          img={EtchASketch}
          title="Etch A Sketch"
          desc="This repository houses a etch-a-sketch app where users can draw in random colors on a grid of a size of their choosing."
        />
        <ProjectCard
          src="https://github.com/djcrago/calculator"
          img={Calculator}
          title="Calculator"
          desc="This repository houses a calculator app."
        />
      </div>
      <p>
        More examples of my code can be found on{' '}
        <a href="https://github.com/djcrago">my GitHub</a>
      </p>
    </>
  );
}

export default PortfolioPage;
