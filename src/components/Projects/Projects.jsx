import React from "react";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = ({ language }) => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>{language === 'en' ? 'Projects' : 'Proyectos'}</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} language={language} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
