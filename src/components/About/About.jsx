// About.jsx
import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = ({ language }) => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>
        {language === 'en' ? 'About' : 'Sobre mí'}
      </h2>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <img
            src={getImageUrl("about/aboutImage.png")}
            alt="Me sitting with a laptop"
            className={styles.aboutImage}
          />
          <div className={styles.imageCredit}>
            {language === 'en' ? 'Designed by' : 'Diseñado por'} <a href="https://www.freepik.es" target="_blank" rel="noopener noreferrer">Freepik</a>
          </div>
        </div>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>{language === 'en' ? 'Frontend Developer' : 'Desarrollador Frontend'}</h3>
              <p>
                {language === 'en'
                  ? "I'm a frontend developer with experience in building responsive and optimized sites"
                  : "Soy un desarrollador frontend con experiencia en la creación de sitios responsivos y optimizados"}
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>{language === 'en' ? 'Backend Developer' : 'Desarrollador Backend'}</h3>
              <p>
                {language === 'en'
                  ? "I have experience developing fast and optimised back-end systems and APIs"
                  : "Experiencia en el desarrollo de sistemas APIs backend rápidos y optimizados"}
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/gameIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>{language === 'en' ? 'Game Developer' : 'Desarrollador de Videojuegos'}</h3>
              <p>
                {language === 'en'
                  ? "I have experience in creating engaging and optimized video games."
                  : "Experiencia en la creación de videojuegos atractivos y optimizados."}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;


