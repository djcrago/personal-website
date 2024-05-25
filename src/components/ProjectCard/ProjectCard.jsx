import PropTypes from 'prop-types';
import GitHub from '../../assets/github.svg';
import styles from './ProjectCard.module.css';

function ProjectCard({ src, img, title, desc, live }) {
  return (
    <div className={styles.project}>
      <a href={live} target="_blank">
        <img className={styles.projectImg} src={img} alt={title} />
      </a>
      <h3>
        <p>{title}</p>
      </h3>
      <div className={styles.descLogoContainer}>
        <p className={styles.desc}>{desc}</p>
        <a href={src} target="_blank">
          <img className={styles.gitHubLogo} src={GitHub} />
        </a>
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
