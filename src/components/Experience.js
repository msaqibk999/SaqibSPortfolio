import React from 'react'
import styles from '../moduleCSS/Experience.module.css'
import { BsFillSuitcaseLgFill } from "react-icons/bs";
import {ReactComponent as ByjusLogo} from "../media/byjus_logo.svg"
import openLink from '../helpers/openLink';
import { Reveal } from './Reveal';

export default function Experience() {

  const handleRedirect = (url) => {
    console.log(url)
    openLink(url)
  }

  return (
      <div className={styles.mainContainer} id='experience'>
        <h1 className={styles.heading}>Experience</h1>
          <div className={styles.content1}>
            <section className={styles.exp1}>
              <div className={styles.exp1Container}>
                  <div className={styles.circle}><BsFillSuitcaseLgFill /></div>
                  <span className={styles.date}>July, 2023 - Present <hr /></span>
                  <Reveal isSlider={true} width='fit-content'><ByjusLogo className={styles.byjusLogo} onClick={() => handleRedirect('https://byjus.com/')}/></Reveal>
                  <Reveal isSlider={true} width='fit-content'><h1 className={styles.designation}>Software Engineer</h1></Reveal>
                  <ul>
                    <Reveal isSlider={true} width='fit-content'><li><b>Fusion Proxy :</b> Engineered with Node.js and Express.js to optimize requisites (pre, post,test) for associated divisions such as Aakash, Byjus Neo, and Tutor Plus.</li></Reveal>
                    <Reveal isSlider={true} width='fit-content'><li>Coordinated concurrent requests to services, resulting in a reduction of overall response times from an average of 5 seconds to 2 seconds.</li></Reveal>
                    <Reveal isSlider={true} width='fit-content'><li>Implemented io Redis to streamline multiple requests in a single connection, resulting in a 50% reduction in data retrieval response times from 3 seconds to 1.5 seconds.</li></Reveal>
                    <Reveal isSlider={true} width='fit-content'><li>Conducted thorough testing, debugging, and continuous maintenance to ensure sustained system reliability.</li></Reveal>
                    <Reveal isSlider={true} width='fit-content'><li><b>K3 (Disney + Byju's):</b> Provided pivotal support for the backend infrastructure of K3 (Disney + Byju's), leveraging the robust Ruby on Rails framework.</li></Reveal>
                    <Reveal isSlider={true} width='fit-content'><li>Collaborated closely with the product team, implementing changes and enhancements to align the backend with the product vision.</li></Reveal>
                    <Reveal isSlider={true} width='fit-content'><li>Database Migration: Executed a pivotal database migration initiative, resulting in substantial monthly savings of $500 for both K3India and K3 Global teams.</li></Reveal>
                  </ul>
              </div>
            </section>
          </div>
          <Reveal duration={0.5} overflow={null}>
          <div className={styles.content2}>
            <section className={styles.exp2}>
              <div className={styles.exp2Container}>
                  <div className={`${styles.circle} ${styles.circle2}`}><BsFillSuitcaseLgFill /></div>
                  <span className={styles.date2}><hr /> Jan, 2023 - July, 2023</span>
                  <Reveal isSlider={true} width='fit-content'><img src="https://grdp.co/cdn-cgi/image/width=145,height=40,quality=80,f=auto/https://gs-post-images.grdp.co/2021/9/group-img1630501108025-27.png-rs-high-webp.png"
                                                                            alt="Byjus Exam Prep" onClick={() => handleRedirect('https://byjusexamprep.com/')}/></Reveal>
                  <Reveal isSlider={true} width='fit-content'><h1 className={styles.designation}>Software Engineer</h1></Reveal>
                  <ul>
                    <Reveal isSlider={true} width='fit-content'><li><b>Funnel Optimization and CAT college predictor:</b> Optimized funnels and applied new user engagement strategies, resulting in a substantial 15% increase in lead generation.</li></Reveal>
                    <Reveal isSlider={true} width='fit-content'><li>Built a CAT college predictor page, empowering users to accurately assess their eligibility for colleges based on academic performance, leading to a 25% boost in informed decision-making and user interaction.</li></Reveal>
                    <Reveal isSlider={true} width='fit-content'><li><b>Revamped Workshop Page:</b> Revamped Workshop Page for diverse states based on user login statuses and actions, achieving a notable 10% post-registration drop-off reduction with engaging hook implementation.</li></Reveal>
                    <Reveal isSlider={true} width='fit-content'><li><b>CSIR NET Eligibility Calculator:</b> Developed and integrated an eligibility calculator for lectureship and JRF, leading to a notable 25% increase in website traffic and an impressive 30% rise in signups.</li></Reveal>
                    <Reveal isSlider={true} width='fit-content'><li><b>SEO Enhancement and Web Vitals Optimization:</b> Enhanced SEO and optimized web vitals, focusing on improving CLS and other metrics to enhance website accessibility and performance, contributing to an overall improved user experience.</li></Reveal>
                  </ul>
              </div>
            </section>
          </div>
          </Reveal>
      </div>
  )
}
