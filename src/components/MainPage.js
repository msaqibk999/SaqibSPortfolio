import React, { useState, useEffect, Suspense } from 'react'
import Home from './Home'
import styles from '../moduleCSS/MainPage.module.css'
import { IoLocationSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { HiHome } from "react-icons/hi2";
import { MdOutlinePermIdentity } from "react-icons/md";
import { GiOfficeChair } from "react-icons/gi";
import { FaUniversity } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";
import { Reveal } from './Reveal'
import {ReactComponent as Loading} from '../media/bouncing-circles.svg'


const About = React.lazy(() => import('./About'));
const Experience = React.lazy(() => import('./Experience'));
const Education = React.lazy(() => import('./Education'));
const Skills = React.lazy(() => import('./Skills'));
const Projects = React.lazy(() => import('./Projects'));



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
              const threshold = 0.5;
              const boundaryLine = windowHeight * threshold;
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
          <button className={`${styles.btn} ${activeSection === 'home' ? styles.activeBtn : ''}`} onClick={() => scrollToTop()}>
            <span className={styles.navText}>Home</span>
            <span className={styles.navIcon}><HiHome/></span>
          </button>
          <button className={`${styles.btn} ${activeSection === 'about' ? styles.activeBtn : ''}`} onClick={() => scrollToSection('about')}>
            <span className={styles.navText}>About</span>
            <span className={styles.navIcon}><MdOutlinePermIdentity/></span>
          </button>
          <button className={`${styles.btn} ${activeSection === 'experience' ? styles.activeBtn : ''}`} onClick={() => scrollToSection('experience')}>
            <span className={styles.navText}>Experience</span>
            <span className={styles.navIcon}><GiOfficeChair/></span>
          </button>
          <button className={`${styles.btn} ${activeSection === 'education' ? styles.activeBtn : ''}`} onClick={() => scrollToSection('education')}>
            <span className={styles.navText}>Education</span>
            <span className={styles.navIcon}><FaUniversity/></span>
          </button>
          <button className={`${styles.btn} ${activeSection === 'skills' ? styles.activeBtn : ''}`} onClick={() => scrollToSection('skills')}>
            <span className={styles.navText}>Skills</span>
            <span className={styles.navIcon}><GiSkills/></span>
          </button>
          <button className={`${styles.btn} ${activeSection === 'projects' ? styles.activeBtn : ''}`} onClick={() => scrollToSection('projects')}>
            <span className={styles.navText}>Projects</span>
            <span className={styles.navIcon}><GrProjects/></span>
          </button>
        </div>
        
    </div>
    <div className={styles.componentsContainer}>
        <div><Home /></div>
        <Suspense fallback={<Loading className={styles.loading}/>}>
          <Reveal duration={0.5}><About /></Reveal>
          <Reveal duration={0.5}><Experience /></Reveal>
          <Reveal duration={0.5}><Education /></Reveal>
          <Reveal duration={0.5}><Skills /></Reveal>
          <Reveal duration={0.5}><Projects /></Reveal>
        </Suspense>
    </div>
    <div className={styles.footer}>
        <span><IoLocationSharp />&nbsp;India</span>
        <span><IoMdMail />&nbsp;mohdsaqibk999@gmail.com</span>
    </div>
    </>
  )
}
