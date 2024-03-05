import React,{useEffect, useRef} from 'react';
import styles from '../moduleCSS/About.module.css';
import { FaDownload } from "react-icons/fa";
import Lottie from 'lottie-web';
import { Reveal } from './Reveal';

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

  const handleDownload = async () => {
    try {
      const documentPath = process.env.PUBLIC_URL + '/MohdSaqibResume.pdf';
  
      const response = await fetch(documentPath);
      const blob = await response.blob();
  
      const link = document.createElement('a');
      const objectURL = window.URL.createObjectURL(blob);
  
      link.href = objectURL;
      link.download = 'Saqib\'sCV.pdf';
  
      document.body.appendChild(link);
      link.click();
  
      document.body.removeChild(link);
      window.URL.revokeObjectURL(objectURL);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };
  

  return (
      <div className={styles.mainContainer} id='about'>
        <h1 className={styles.heading}>ABOUT ME</h1>
        <div className={styles.content}>
        <div className={`${styles.animContainer} ${styles.anime1}`} ref={animContainer1}></div>
          <div className={styles.info}>
            <h2 className={styles.tableHead}>PERSONAL INFOS</h2>
            <table className={styles.table}>
              <tbody>
                <tr className={styles.label}><td className={styles.label}>Name:</td><td className={styles.data}><Reveal isSlider={true} width='fit-content'>Mohd Saqib</Reveal></td></tr>
                <tr><td className={styles.label}>Age:</td><td className={styles.data}><Reveal isSlider={true} width='fit-content'>23 years</Reveal></td></tr>
                <tr><td className={styles.label}>Phone:</td><td className={styles.data}><Reveal isSlider={true} width='fit-content'>+91-9319319595</Reveal></td></tr>
                <tr><td className={styles.label}>Nationality:</td><td className={styles.data}><Reveal isSlider={true} width='fit-content'>Indian</Reveal></td></tr>
                <tr><td className={styles.label}>Languages:</td><td className={styles.data}><Reveal isSlider={true} width='fit-content'>English, Hindi, Arabic</Reveal></td></tr>
                <tr><td className={styles.label}>Address:</td><td className={styles.data}><Reveal isSlider={true} width='fit-content'>Saharanpur, Uttar Pradesh</Reveal></td></tr>
              </tbody>
            </table>
            <button onClick={handleDownload} className={styles.downloadBtn}><span className={styles.btnText}>DOWNLOAD CV</span><span className={styles.downIcon}><FaDownload /></span></button>
          </div>
          <div className={styles.about}>
            <h2 className={styles.tableHead}>What I do?</h2>
              <Reveal isSlider={true} width='fit-content'><span className={styles.label}>"Coding on the server, styling on the client, and turning caffeine into code – I'm the Full Stack Wizard weaving digital dreams into reality✨"</span></Reveal>
            <ul>
              <Reveal isSlider={true} width='fit-content'><li>Build Single Page Applications in React/Next.js</li></Reveal>
              <Reveal isSlider={true} width='fit-content'><li>Rich UI pages for better user experice in React/Next.js</li></Reveal>
              <Reveal isSlider={true} width='fit-content'><li>Building RESTful APIs in NodeJS & Rails Framework</li></Reveal>
            </ul>
          </div>
          <div className={`${styles.animContainer} ${styles.anime2}`} ref={animContainer2}></div>
        </div>
      </div>
  );
}
