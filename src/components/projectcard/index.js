import React from "react";
import styles from "./styles.module.css";

const ProjectCard = props => {
  const {
    customCardStyles,
    customImageStyles,
    onClick,
    projectImage,
    projectName,
    projectType,
    projectId,
  } = props;
  return (
    <div
      className={[styles.projectCardContainerStyle, customCardStyles].join(" ")}
      onClick={onClick}
    >
      <div
        className={[styles.projectImageContainerStyles, customImageStyles].join(
          " "
        )}
      >
        <img
          src={projectImage}
          alt="feature"
          className={styles.imageWidthStyles}
        />
      </div>
      <p className={styles.projectNameTextStyles}>
        {`${projectId} - ${projectName}`}
        <span>({projectType})</span>
      </p>
    </div>
  );
};

export default ProjectCard;
