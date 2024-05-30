import PropTypes from 'prop-types';
import GitHub from '../../assets/github.svg';
import styles from './ProjectCard.module.css';
import { Link } from 'react-router-dom';

function ProjectCard({ src, img, title, desc, live }) {
  return (
    <div className={styles.project}>
      <Link to={live} target="_blank">
        <img className={styles.projectImg} src={img} alt={title} />
      </Link>
      <h3>
        <p>{title}</p>
      </h3>
      <div className={styles.descLogoContainer}>
        <p className={styles.desc}>{desc}</p>
        <Link to={src} target="_blank">
          <img className={styles.gitHubLogo} src={GitHub} />
        </Link>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  src: PropTypes.string,
  img: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
  live: PropTypes.string,
};

export default ProjectCard;
