import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import { Form } from "./Form";

export const Contact = ({ language }) => {
  const titles = {
    en: "Contact",
    es: "Contacto",
  };

  const messages = {
    en: "Feel free to reach out!",
    es: "¡No dudes en ponerte en contacto!",
  };

  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>{titles[language]}</h2>
        <p>{messages[language]}</p>
        <Form language={language} />
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/daniel-rinaudo/" target="_blank" rel="noopener noreferrer">daniel-rinaudo</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/danielr0101" target="_blank" rel="noopener noreferrer">danielr0101</a>
        </li>
      </ul>
    </footer>
  );
};
