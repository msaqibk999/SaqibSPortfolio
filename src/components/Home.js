import React, {useState, useEffect} from 'react'
import { Blurhash } from 'react-blurhash';
import styles from '../moduleCSS/Home.module.css'
import src from '../media/me.jpg'
import { LuMail } from "react-icons/lu";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { ReactComponent as Sun } from "../media/Sun.svg"
import { ReactComponent as Moon } from "../media/Moon.svg"
import openLink from '../helpers/openLink';

export default function Home() {

  const[imageLoaded, setImageLoaded] = useState(false);
  
  useEffect(()=> {
      const img = new Image();
      img.onload = () => {
        setImageLoaded(true);
      }
      img.src = src
  },[])

  const handleContactMeClick = () => {
    const emailAddress = 'mohdsaqibk999@gmail.com';
    const subject = 'Inquiry from your website';
    const body = 'Hello Mohd Saqib,\n\nI would like to get in touch with you.';

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  const handleLinkClick = (value) => {
    if(value === 'mail') handleContactMeClick();
    else if(value === 'git') openLink('https://github.com/msaqibk999');
    else if(value === 'linkedIn') openLink('https://www.linkedin.com/in/saqibkhan999/');
    else return;
  }

  const toggletheme = (event) => {
    if(event.target.checked){
      document.querySelector("body").setAttribute("data-theme","dark")
      localStorage.setItem("theme","dark")
    }
    else{
      document.querySelector("body").setAttribute("data-theme","light")
      localStorage.setItem("theme","light")
    }
  }

  return (
    <>
        <div className={styles.mainContainer} id='home'>
          <div className={styles.backgroundContainer}></div>
          <div className={styles.dp}>
          {imageLoaded ? (
                    <img 
                        src={src}
                        alt='img'
                        height="100%"
                        width="100%"
                        style={{objectFit: "cover"}}
                    />):(
                        <Blurhash
                            hash='LRH_rY?vUENG*J?vxGWEyYNf$RMe'
                            width="100%"
                            height="100%"
                            resolutionX={32}
                            resolutionY={32}
                            punch={1}
                        />
                  )}
          </div>
            <div className={styles.infoContainer}>
            <div className={`${styles.banner} yellow`}>I'M MOHD SAQIB KHAN.</div>
            <div className={`${styles.designation}`}>Software Engineer</div>
              <div className={styles.info}>Designing the future with code, where innovation and creativity merge seamlessly.</div>
              <div className={styles.linkContainer}>
                <button className={styles.link} onClick={() => handleLinkClick('mail')}><LuMail /></button>
                <button className={styles.link} onClick={() => handleLinkClick('git')}><FaGithub /></button>
                <button className={styles.link} onClick={() => handleLinkClick('linkedIn')}><FaLinkedinIn /></button>
              </div>
              <button className={styles.btn} onClick={handleContactMeClick}></button>
            </div>
            <div className={styles.dark_mode}>
                <input
                    className={styles.dark_mode_input}
                    type='checkbox'
                    id='darkmode-toggle'
                    onChange={toggletheme}
                    defaultChecked
                />
                <label className={styles.dark_mode_label} htmlFor='darkmode-toggle'>
                    <Sun className={styles.sun}/>
                    <Moon className={styles.moon}/>
                </label>
            </div>
        </div>
    </>
  )
}
