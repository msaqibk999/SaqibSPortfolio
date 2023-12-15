import React from 'react'
import styles from '../moduleCSS/Home.module.css'
import img from './../23-08-05-20-55-18-642_deco.jpg'

export default function Home() {

  const handleContactMeClick = () => {
    const emailAddress = 'mohdsaqibk999@gmail.com';
    const subject = 'Inquiry from your website';
    const body = 'Hello Mohd Saqib,\n\nI would like to get in touch with you.';

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <>
        <div className={styles.mainContainer} id='home'>
          <div className={styles.backgroundContainer}></div>
            <img src={img} alt="dp" className={styles.dp}/>
            <div className={styles.infoContainer}>
            <div className={`${styles.banner} yellow`}>I'M MOHD SAQIB KHAN.</div>
            <div className={`${styles.designation}`}>Software Engineer</div>
              <div className={styles.info}>Designing the future with code, where innovation and creativity merge seamlessly.</div>
              <div className={styles.linkContainer}>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <button className={styles.btn} ></button>
            </div>
        </div>
    </>
  )
}
