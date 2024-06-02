// App.jsx
import React, { useState } from 'react';
import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";

function App() {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'es' : 'en'));
  };

  return (
    <div className={styles.App}>
      <Navbar toggleLanguage={toggleLanguage} language={language} />
      <Hero language={language} />
      <About language={language} />
      <Experience language={language} />
      <Projects language={language} />
      <Contact  language={language} />
    </div>
  );
}

export default App;

