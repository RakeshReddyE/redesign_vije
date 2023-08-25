import React from 'react';
import styles from './styles.module.css';
import { useNavigate } from 'react-router';

const ProjectCard = (props) => {
  const { customCardStyles, customImageStyles, onClick, project } = props;
  const navigate = useNavigate();
  return (
    <div
      className={[styles.projectCardContainerStyle, customCardStyles].join(' ')}
      onClick={() => navigate(`/projects/${project.name}`)}
    >
      <div
        className={[styles.projectImageContainerStyles, customImageStyles].join(
          ' '
        )}
      >
        <img
          src={project.image}
          alt="project photograph"
          className={styles.imageWidthStyles}
        />
        <img
          src={project.hoverImage}
          alt="project hovered photograph"
          className={styles.hoveredImageWidthStyles}
        />
      </div>
      <p className={styles.projectNameTextStyles}>
        {`${project.name}`}-<span>{project.type}</span>
      </p>
    </div>
  );
};

export default ProjectCard;
