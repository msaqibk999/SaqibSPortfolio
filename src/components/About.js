import React, { useEffect, useRef } from 'react';
import styles from '../moduleCSS/About.module.css';
import Lottie from 'lottie-web';
import { Reveal } from './Reveal';
import { FaDownload } from 'react-icons/fa';

const personalInfo = {
  name: 'Mohd Saqib',
  age: '23 years',
  phone: '+91-9319319595',
  nationality: 'Indian',
  languages: 'English, Hindi, Arabic',
  address: 'Saharanpur, Uttar Pradesh',
};

const aboutText = `"Coding on the server, styling on the client, and turning caffeine into code – I'm the Full Stack Wizard weaving digital dreams into reality✨"`;

export default function About() {
  const animContainer1 = useRef(null);
  const animContainer2 = useRef(null);

  useEffect(() => {
    const loadAnimation = (container, animationData) => {
      Lottie.loadAnimation({
        container,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData,
      });
    };

    loadAnimation(animContainer1.current, require('../media/skills.json'));
    loadAnimation(animContainer2.current, require('../media/webdev.json'));
  }, []);

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
              {Object.entries(personalInfo).map(([label, value]) => (
                <tr key={label} className={styles.label}>
                  <td>{label.charAt(0).toUpperCase() + label.slice(1)}:</td>
                  <td>
                    <Reveal isSlider={true} width='fit-content'>{value}</Reveal>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={handleDownload} className={styles.downloadBtn}>
            <span className={styles.btnText}>DOWNLOAD CV</span>
            <span className={styles.downIcon}><FaDownload /></span>
          </button>
        </div>
        <div className={styles.about}>
          <h2 className={styles.tableHead}>What I do?</h2>
          <Reveal isSlider={true} width='fit-content'><span className={styles.label}>{aboutText}</span></Reveal>
          <ul>
            {['Build Single Page Applications in React/Next.js', 'Rich UI pages for better user experience in React/Next.js', 'Building RESTful APIs in NodeJS & Rails Framework'].map((text, index) => (
              <li key={index}>
                <Reveal isSlider={true} width='fit-content'>{text}</Reveal>
              </li>
            ))}
          </ul>
        </div>
        <div className={`${styles.animContainer} ${styles.anime2}`} ref={animContainer2}></div>
      </div>
    </div>
  );
}