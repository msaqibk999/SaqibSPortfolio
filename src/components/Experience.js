import React from 'react'
import styles from '../moduleCSS/Experience.module.css'
import { BsFillSuitcaseLgFill } from "react-icons/bs";
import bepLogo from '../media/BEP.png'
import {ReactComponent as ByjusLogo} from "../media/byjus_logo.svg"
import openLink from '../helpers/openLink';

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
                  <ByjusLogo className={styles.byjusLogo} onClick={() => handleRedirect('https://byjus.com/')}/>
                  <h1 className={styles.designation}>Software Engineer</h1>
                  <ul>
                    <li><b>Fusion Proxy :</b> Engineered with Node.js and Express.js to optimize requisites (pre, post,test) for associated divisions such as Aakash, Byjus Neo, and Tutor Plus.</li>
                    <li>Coordinated concurrent requests to services, resulting in a reduction of overall response times from an average of 5 seconds to 2 seconds.</li>
                    <li>Implemented io Redis to streamline multiple requests in a single connection, resulting in a 50% reduction in data retrieval response times from 3 seconds to 1.5 seconds.</li>
                    <li>Conducted thorough testing, debugging, and continuous maintenance to ensure sustained system reliability.</li>
                    <li><b>K3 (Disney + Byju's):</b> Provided pivotal support for the backend infrastructure of K3 (Disney + Byju's), leveraging the robust Ruby on Rails framework.</li>
                    <li>Collaborated closely with the product team, implementing changes and enhancements to align the backend with the product vision.</li>
                    <li>Database Migration: Executed a pivotal database migration initiative, resulting in substantial monthly savings of $500 for both K3India and K3 Global teams.</li>
                  </ul>
              </div>
            </section>
          </div>
          <div className={styles.content2}>
            <section className={styles.exp2}>
              <div className={styles.exp2Container}>
                  <div className={`${styles.circle} ${styles.circle2}`}><BsFillSuitcaseLgFill /></div>
                  <span className={styles.date2}><hr /> Jan, 2023 - July, 2023</span>
                  <img src={bepLogo} alt="" onClick={() => handleRedirect('https://byjusexamprep.com/')}/>
                  <h1 className={styles.designation}>Software Engineer</h1>
                  <ul>
                    <li><b>Funnel Optimization and CAT college predictor:</b> Optimized funnels and applied new user engagement strategies, resulting in a substantial 15% increase in lead generation.</li>
                    <li>Built a CAT college predictor page, empowering users to accurately assess their eligibility for colleges based on academic performance, leading to a 25% boost in informed decision-making and user interaction.</li>
                    <li><b>Revamped Workshop Page:</b> Revamped Workshop Page for diverse states based on user login statuses and actions, achieving a notable 10% post-registration drop-off reduction with engaging hook implementation.</li>
                    <li><b>CSIR NET Eligibility Calculator:</b> Developed and integrated an eligibility calculator for lectureship and JRF, leading to a notable 25% increase in website traffic and an impressive 30% rise in signups.</li>
                    <li><b>SEO Enhancement and Web Vitals Optimization:</b> Enhanced SEO and optimized web vitals, focusing on improving CLS and other metrics to enhance website accessibility and performance, contributing to an overall improved user experience.</li>
                  </ul>
              </div>
            </section>
          </div>
      </div>
  )
}
