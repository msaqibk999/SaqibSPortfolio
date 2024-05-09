import React, { useRef, useState } from "react";
import styles from "../moduleCSS/EmailForm.module.css";
import { ReactComponent as Loader } from "../media/LoaderBtn.svg";
import emailjs from "@emailjs/browser";

const EmailForm = () => {
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    const name = form.current.user_name.value;
    const email = form.current.user_email.value;
    const message = form.current.message.value;

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      setLoading(false);
      return;
    }

    emailjs
      .sendForm("service_0u7hk08", "template_j2sxda4", form.current, {
        publicKey: "ytvqVzIgETyyqyqVG",
      })
      .then(
        () => {
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setLoading(false);
        }
      );
  };

  return (
    <form className={styles.form} ref={form} onSubmit={sendEmail}>
      <div className={styles.formSection}>
        <label className={styles.label}>Name:</label>
        <input
          className={styles.input}
          type="text"
          name="user_name"
          placeholder="Enter your name"
        />
      </div>
      <div className={styles.formSection}>
        <label className={styles.label}>Email:</label>
        <input
          className={styles.input}
          type="email"
          name="user_email"
          placeholder="Enter your email"
        />
      </div>
      <div className={styles.formSection}>
        <label className={styles.label}>Message:</label>
        <textarea
          className={styles.textArea}
          name="message"
          placeholder="Enter your message"
        />
      </div>
      <div className={styles.submitBtnWrapper}>
        {loading ? (
          <div className={styles.btnLoader}>
            <Loader className={styles.loader} />
          </div>
        ) : (
          <input className={styles.submitBtn} type="submit" value="Send" />
        )}
      </div>
    </form>
  );
};

export default EmailForm;
