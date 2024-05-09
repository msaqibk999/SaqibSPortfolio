import React, { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";
import styles from "../moduleCSS/Home.module.css";
import src from "../media/me.jpg";
import { SiLeetcode } from "react-icons/si";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import openLink from "../helpers/openLink";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { Reveal } from "./Reveal";
import { ReactComponent as Sun } from "../media/Sun.svg";
import { ReactComponent as Moon } from "../media/Moon.svg";

export default function Home() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = src;
  }, []);

  const handleContactMeClick = () => {
    const emailAddress = "mohdsaqibk999@gmail.com";
    const subject = "Inquiry from your website";
    const body = "Hello Mohd Saqib,\n\nI would like to get in touch with you.";

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  const handleLinkClick = (value) => {
    if (value === "leetcode") openLink("https://leetcode.com/u/khanSaqib999/");
    else if (value === "git") openLink("https://github.com/msaqibk999");
    else if (value === "linkedIn")
      openLink("https://www.linkedin.com/in/saqibkhan999/");
    else return;
  };

  const toggletheme = (event) => {
    if (event.target.checked) {
      document.querySelector("body").setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.querySelector("body").setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <>
      <LazyMotion features={domAnimation}>
        <div className={styles.mainContainer} id="home">
          <div className={styles.backgroundContainer}></div>
          <m.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.dp}
          >
            {imageLoaded ? (
              <img src={src} alt="img" className={styles.myImg} />
            ) : (
              <Blurhash
                hash="LRH_rY?vUENG*J?vxGWEyYNf$RMe"
                width="100%"
                height="100%"
                resolutionX={32}
                resolutionY={32}
                punch={1}
              />
            )}
          </m.div>
          <div className={styles.infoContainer}>
            <Reveal isSlider={true} width="fit-content">
              <div className={`${styles.banner} yellow`}>
                I'M MOHD SAQIB KHAN
              </div>
            </Reveal>
            <Reveal isSlider={true} width="fit-content">
              <div className={`${styles.designation}`}>Software Engineer</div>
            </Reveal>
            <Reveal isSlider={true} width="fit-content">
              <div className={styles.info}>
                Designing the future with code, where innovation and creativity
                merge seamlessly.
              </div>
            </Reveal>
            <div className={styles.linkContainer}>
              <m.button
                initial={{ x: "100vw" }}
                animate={{ x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                  type: "spring",
                  stiffness: 40,
                }}
                className={styles.link}
                onClick={() => handleLinkClick("linkedIn")}
              >
                <FaLinkedinIn />
              </m.button>
              <m.button
                initial={{ x: "100vw" }}
                animate={{ x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.25,
                  type: "spring",
                  stiffness: 40,
                }}
                className={styles.link}
                onClick={() => handleLinkClick("git")}
              >
                <FaGithub />
              </m.button>
              <m.button
                initial={{ x: "100vw" }}
                animate={{ x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.4,
                  type: "spring",
                  stiffness: 40,
                }}
                className={styles.link}
                onClick={() => handleLinkClick("leetcode")}
              >
                <SiLeetcode />
              </m.button>
            </div>
            <Reveal width="100%">
              <m.button
                className={styles.btn}
                onClick={handleContactMeClick}
              ></m.button>
            </Reveal>
          </div>
          <m.div
            initial={{ y: "-100vw" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              type: "spring",
              stiffness: 40,
            }}
            className={styles.dark_mode}
          >
            <input
              className={styles.dark_mode_input}
              type="checkbox"
              id="darkmode-toggle"
              onChange={toggletheme}
              defaultChecked
            />
            <label className={styles.dark_mode_label} htmlFor="darkmode-toggle">
              <Sun className={styles.sun} />
              <Moon className={styles.moon} />
            </label>
          </m.div>
        </div>
      </LazyMotion>
    </>
  );
}
