import React,{useEffect, useRef} from 'react';
import styles from '../moduleCSS/About.module.css';
import { FaDownload } from "react-icons/fa";
import Lottie from 'lottie-web';

export default function About() {

  const animContainer1 = useRef(null);
  const animContainer2 = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: animContainer1.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../media/skills.json')
    });

    Lottie.loadAnimation({
      container: animContainer2.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../media/webdev.json')
    })

  }, [])

  const handleDownload = () => {
    const documentPath = '/MohdSaqibResume.pdf';
    const link = document.createElement('a');
    link.href = documentPath;
    link.download = 'Saqib\'sCV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
      <div className={styles.mainContainer} id='about'>
        <h1 className={styles.heading}>ABOUT ME</h1>
        <div className={styles.content}>
        <div className={styles.animContainer} ref={animContainer1}></div>
          <div className={styles.info}>
            <h2 className={styles.tableHead}>PERSONAL INFOS</h2>
            <table className={styles.table}>
              <tbody>
                <tr className={styles.label}><td className={styles.label}>Name:</td><td className={styles.data}>Mohd Saqib</td></tr>
                <tr><td className={styles.label}>Age:</td><td className={styles.data}>23 years</td></tr>
                <tr><td className={styles.label}>Phone:</td><td className={styles.data}>+91-9319319595</td></tr>
                <tr><td className={styles.label}>Nationality:</td><td className={styles.data}>Indian</td></tr>
                <tr><td className={styles.label}>Languages:</td><td className={styles.data}>English, Hindi, Arabic</td></tr>
                <tr><td className={styles.label}>Address:</td><td className={styles.data}>Saharanpur, Uttar Pradesh</td></tr>
              </tbody>
            </table>
            <button onClick={handleDownload} className={styles.downloadBtn}><span className={styles.btnText}>DOWNLOAD CV</span><span className={styles.downIcon}><FaDownload /></span></button>
          </div>
          <div className={styles.about}>
            <h2 className={styles.tableHead}>What I do?</h2>
            <span className={styles.label}>"Coding on the server, styling on the client, and turning caffeine into code – I'm the Full Stack Wizard weaving digital dreams into reality✨"</span>
            <ul>
              <li>Build Single Page Applications in React/Next.js</li>
              <li>Rich UI pages for better user experice in React/Next.js</li>
              <li>Building RESTful APIs in NodeJS & Rails Framework</li>
            </ul>
          </div>
          <div className={styles.animContainer} ref={animContainer2}></div>
        </div>
      </div>
  );
}
