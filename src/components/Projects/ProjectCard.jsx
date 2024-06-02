import React from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({ project, language }) => {
  const { title, imageSrc, description, skills, source } = project;
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title[language]}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title[language]}</h3>
      <p className={styles.description}>{description[language]}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a href={source} className={styles.link} target="_blank" rel="noopener noreferrer">
          Source
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;

