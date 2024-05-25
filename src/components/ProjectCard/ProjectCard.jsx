import PropTypes from 'prop-types';
import styles from './ProjectCard.module.css';

function ProjectCard({ src, img, title, desc }) {
  return (
    <div className={styles.project}>
      <a href={src} target="_blank">
        <img src={img} alt={title} />
      </a>
      <h3>
        <p>{title}</p>
      </h3>
      <p className={styles.desc}>{desc}</p>
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
