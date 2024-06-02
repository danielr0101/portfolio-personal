import React, { useState } from "react";
import emailjs from "emailjs-com";
import styles from "./Form.module.css";

export const Form = ({ language }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
      'service_vp9elwo', 
      'template_o2tbkxb', 
      event.target,
      '9Jt6SwsZWBJHRd_gd' 
    )
    .then((result) => {
        console.log(result.text);
        setIsSubmitting(false);
        event.target.reset(); 
      }, (error) => {
        console.log(error.text);
        setIsSubmitting(false);
      });
  };

  const labels = {
    name: {
      en: "Name",
      es: "Nombre",
    },
    email: {
      en: "Email",
      es: "Correo electrónico",
    },
    subject: {
      en: "Subject",
      es: "Asunto",
    },
    comments: {
      en: "Comment",
      es: "Comentario",
    },
    submit: {
      en: "Submit",
      es: "Enviar",
    },
    sending: {
      en: "Sending...",
      es: "Enviando...",
    },
  };

  return (
    <section className={styles.formContent}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">{labels.name[language]}</label>
        <input type="text" name="name" id="name" required />

        <label htmlFor="email">{labels.email[language]}</label>
        <input type="email" name="email" id="email" required />

        <label htmlFor="subject">{labels.subject[language]}</label>
        <input type="text" name="subject" id="subject" required />

        <label htmlFor="comments">{labels.comments[language]}</label>
        <textarea name="comments" id="comments" cols="30" rows="5" required></textarea>

        <input className={styles.btn} type="submit" value={labels.submit[language]} disabled={isSubmitting} />

        {isSubmitting && <p className={styles.loadingMessage}>{labels.sending[language]}</p>}
      </form>
    </section>
  );
};
