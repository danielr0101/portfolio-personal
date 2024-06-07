// Navbar.jsx
import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import Switch from "../Switch/Switch";

export const Navbar = ({ toggleLanguage, language }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Daniel Rinaudo
      </a>
      <div className={styles.switch}>
        <Switch rounded={true} onToggle={toggleLanguage} />
      </div>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">{language === 'en' ? 'About' : 'SobreMí'}</a>
          </li>
          <li>
            <a href="#experience">{language === 'en' ? 'Experience' : 'Experiencia'}</a>
          </li>
          <li>
            <a href="#projects">{language === 'en' ? 'Projects' : 'Proyectos'}</a>
          </li>
          <li>
            <a href="#contact">{language === 'en' ? 'Contact' : 'Contacto'}</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

