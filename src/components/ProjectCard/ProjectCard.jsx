import PropTypes from 'prop-types';
import GitHub from '../../assets/github.svg';
import styles from './ProjectCard.module.css';
import { Link } from 'react-router-dom';

function ProjectCard({ src, img, title, desc, tech, live }) {
  return (
    <Link className={styles.link} to={live} target="_blank">
      <div className={styles.project}>
        <h3>{title}</h3>
        <p className={styles.tech}>{tech}</p>
        <img className={styles.projectImg} src={img} alt={title} />
        <div className={styles.descLogoContainer}>
          <p className={styles.desc}>{desc}</p>
          <Link to={src} target="_blank">
            <img className={styles.gitHubLogo} src={GitHub} />
          </Link>
        </div>
      </div>
    </Link>
  );
}

ProjectCard.propTypes = {
  src: PropTypes.string,
  img: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
  tech: PropTypes.string,
  live: PropTypes.string,
};

export default ProjectCard;
