import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import { Form } from "./Form";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
        <Form />
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/daniel-rinaudo/" target="_blank">daniel-rinaudo</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/danielr0101" target="_blank">danielr0101</a>
        </li>
      </ul>
    </footer>
  );
};
