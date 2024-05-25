import PropTypes from 'prop-types';
import styles from './ProjectCard.module.css';

function ProjectCard({ src, img, title, desc }) {
  return (
    <div className={styles.project}>
      <a href={src}>
        <img src={img} alt={title} />
      </a>
      <p>{title}</p>
      <p>{desc}</p>
    </div>
  );
}

ProjectCard.propTypes = {
  src: PropTypes.string,
  img: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
};

export default ProjectCard;
