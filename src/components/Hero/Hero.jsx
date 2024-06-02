// Hero.jsx
// Hero.jsx
import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = ({ language }) => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          {language === 'en' ? "Hi, I'm Daniel" : "Hola, soy Daniel"}
        </h1>
        <p className={styles.description}>
          {language === 'en' 
            ? "Analyst Programmer with extensive experience in web application development, desktop applications, and video games!" 
            : "¡Programador analista con amplia experiencia en el desarrollo de aplicaciones web, aplicaciones de escritorio y videojuegos!"}
        </p>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

