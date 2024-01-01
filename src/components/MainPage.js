import React, { useState, useEffect } from 'react'
import Home from './Home'
import About from './About'
import Experience from './Experience'
import Education from './Education'
import Skills from './Skills'
import Projects from './Projects'
import styles from '../moduleCSS/MainPage.module.css'

export default function MainPage() {

    const [activeSection, setActiveSection] = useState('home');

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };

      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }

      const handleSetActiveSection = (sectionId) => {
        setActiveSection(sectionId);
      };
      useEffect(() => {
        const handleScroll = () => {
          const sections = ['home', 'about', 'experience', 'education', 'skills', 'projects'];
          const windowHeight = window.innerHeight;
      
          for (const sectionId of sections) {
            const section = document.getElementById(sectionId);
            if (section) {
              const rect = section.getBoundingClientRect();
      
              // Define a threshold as a percentage of the viewport height
              const threshold = 0.5; // Adjust as needed (e.g., 0.5 for center)
      
              // Calculate the boundary line based on the threshold
              const boundaryLine = windowHeight * threshold;
      
              // Check if the section is centered within the threshold
              if (Math.abs(rect.top - windowHeight / 2) <= boundaryLine) {
                handleSetActiveSection(sectionId);
                break;
              }
            }
          }
        };
      
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

  return (
    <>
    <div className={styles.navbar}>
        <div className={styles.nameHeader} onClick={scrollToTop}>Mohd Saqib</div>
        <div className={styles.navBtns}>
          <button className={`${styles.btn} ${activeSection === 'home' ? styles.activeBtn : ''}`} onClick={() => scrollToTop()}>Home</button>
          <button className={`${styles.btn} ${activeSection === 'about' ? styles.activeBtn : ''}`} onClick={() => scrollToSection('about')}>About</button>
          <button className={`${styles.btn} ${activeSection === 'experience' ? styles.activeBtn : ''}`} onClick={() => scrollToSection('experience')}>Experience</button>
          <button className={`${styles.btn} ${activeSection === 'education' ? styles.activeBtn : ''}`} onClick={() => scrollToSection('education')}>Education</button>
          <button className={`${styles.btn} ${activeSection === 'skills' ? styles.activeBtn : ''}`} onClick={() => scrollToSection('skills')}>Skills</button>
          <button className={`${styles.btn} ${activeSection === 'projects' ? styles.activeBtn : ''}`} onClick={() => scrollToSection('projects')}>Projects</button>
        </div>
        
    </div>
    <div className={styles.componentsContainer}>
        <Home />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
    </div>
    <div className={styles.footer}>

    </div>
    </>
  )
}
