import React from "react";
import styles from "./Form.module.css";

export const Form = () => {
  return (
    <section className={styles.formContent}>
      <form action="https://formsubmit.co/daniel.cba.103@gmail.com" method="post">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />

        <label htmlFor="subject">Affair</label>
        <input type="text" name="subject" id="subject" />

        <label htmlFor="comments">Comment</label>
        <textarea name="comments" id="comments" cols="30" rows="5"></textarea>

        <input className={styles.btn} type="submit" value="Enviar" />

        <input type="hidden" name="_next" value="http://127.0.0.1:5500/formulario/index.html" />

        <input type="hidden" name="_captcha" value="false" />
      </form>
    </section>
  );
};