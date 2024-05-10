import React, { useRef, useState, useEffect } from "react";
import styles from "../moduleCSS/EmailForm.module.css";
import { ReactComponent as Loader } from "../media/LoaderBtn.svg";
import emailjs from "@emailjs/browser";
import Lottie from "lottie-web";

const EmailForm = () => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    user_name: false,
    user_email: false,
    message: false,
  });
  const [showSuccess, setShowsuccess] = useState(false);
  const form = useRef();
  const checkContainer = useRef();

  useEffect(() => {
    const loadAnimation = (container, animationData) => {
      Lottie.loadAnimation({
        container,
        renderer: "svg",
        loop: false,
        autoplay: true,
        animationData,
      });
    };

    loadAnimation(checkContainer.current, require("../media/check.json"));
  }, [showSuccess]);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(form.current);

    let formErrors = {};
    formData.forEach((value, key) => {
      if (!value.trim()) {
        formErrors[key] = true;
      }
    });

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setLoading(false);
      return;
    }

    setErrors({
      user_name: false,
      user_email: false,
      message: false,
    });

    emailjs
      .sendForm("service_0u7hk08", "template_j2sxda4", form.current, {
        publicKey: "ytvqVzIgETyyqyqVG",
      })
      .then(
        () => {
          form.current.reset();
          setShowsuccess(true);
          setTimeout(() => {
            setShowsuccess(false);
            setLoading(false);
          }, 1500);
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send message. Please try again later.");
          setLoading(false);
        }
      );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: value.trim() > 0 ? true : false,
    }));
  };

  const handleHover = (e, type) => {
    if (type === "in") {
      e.target.value = "🚀";
      return;
    }
    if (type === "out") {
      e.target.value = "Send";
      return;
    }
  };

  return (
    <form className={styles.form} ref={form} onSubmit={sendEmail}>
      <div className={styles.formSection}>
        <label className={styles.label}>Name:</label>
        <input
          className={`${styles.input} ${errors.user_name ? styles.error : ""}`}
          type="text"
          name="user_name"
          placeholder="Enter your name"
          onChange={handleInputChange}
        />
        {errors.user_name && (
          <div className={styles.errorMsg}>Please fill the Name</div>
        )}
      </div>
      <div className={styles.formSection}>
        <label className={styles.label}>Email:</label>
        <input
          className={`${styles.input} ${errors.user_email ? styles.error : ""}`}
          type="email"
          name="user_email"
          placeholder="Enter your email"
          onChange={handleInputChange}
        />
        {errors.user_email && (
          <div className={styles.errorMsg}>Please fill the Email</div>
        )}
      </div>
      <div className={styles.formSection}>
        <label className={styles.label}>Message:</label>
        <textarea
          className={`${styles.textArea} ${errors.message ? styles.error : ""}`}
          name="message"
          placeholder="Enter your message"
          onChange={handleInputChange}
        />
        {errors.message && (
          <div className={styles.errorMsg}>Please enter your message</div>
        )}
      </div>
      <div className={styles.submitBtnWrapper}>
        {loading ? (
          <div className={styles.btnLoader}>
            {showSuccess ? (
              <div className={styles.checkContainer} ref={checkContainer}></div>
            ) : (
              <Loader className={styles.loader} />
            )}
          </div>
        ) : (
          <input
            className={styles.submitBtn}
            type="submit"
            value="Send"
            onMouseOver={(e) => handleHover(e, "in")}
            onMouseLeave={(e) => handleHover(e, "out")}
          />
        )}
      </div>
    </form>
  );
};

export default EmailForm;
