import React from 'react';
import styles from '../moduleCSS/Experience.module.css';
import { BsFillSuitcaseLgFill } from "react-icons/bs";
import { ReactComponent as ByjusLogo } from "../media/byjus_logo.svg";
import openLink from '../helpers/openLink';
import { Reveal } from './Reveal';

const experiences = [
  {
    date: 'July, 2023 - Present',
    company: 'Byjus',
    url: 'https://byjus.com/',
    description: [
      '<b>Fusion Proxy:</b> Engineered with Node.js and Express.js to optimize requisites (pre, post,test) for associated divisions such as Aakash, Byjus Neo, and Tutor Plus.',
      'Coordinated concurrent requests to services, resulting in a reduction of overall response times from an average of 5 seconds to 2 seconds.',
      'Implemented io Redis to streamline multiple requests in a single connection, resulting in a 50% reduction in data retrieval response times from 3 seconds to 1.5 seconds.',
      'Conducted thorough testing, debugging, and continuous maintenance to ensure sustained system reliability.',
      '<b>K3 (Disney + Byju\'s):</b> Provided pivotal support for the backend infrastructure of K3 (Disney + Byju\'s), leveraging the robust Ruby on Rails framework.',
      'Collaborated closely with the product team, implementing changes and enhancements to align the backend with the product vision.',
      '<b>Database Migration:</b> Executed a pivotal database migration initiative, resulting in substantial monthly savings of $500 for both K3India and K3 Global teams.'
    ]
  },
  {
    date: 'Jan, 2023 - July, 2023',
    company: 'Byjus Exam Prep',
    url: 'https://byjusexamprep.com/',
    description: [
      '<b>Funnel Optimization and CAT college predictor:</b> Optimized funnels and applied new user engagement strategies, resulting in a substantial 15% increase in lead generation.',
      'Built a CAT college predictor page, empowering users to accurately assess their eligibility for colleges based on academic performance, leading to a 25% boost in informed decision-making and user interaction.',
      '<b>Revamped Workshop Page:</b> Revamped Workshop Page for diverse states based on user login statuses and actions, achieving a notable 10% post-registration drop-off reduction with engaging hook implementation.',
      '<b>CSIR NET Eligibility Calculator:</b> Developed and integrated an eligibility calculator for lectureship and JRF, leading to a notable 25% increase in website traffic and an impressive 30% rise in signups.',
      '<b>SEO Enhancement and Web Vitals Optimization:</b> Enhanced SEO and optimized web vitals, focusing on improving CLS and other metrics to enhance website accessibility and performance, contributing to an overall improved user experience.'
    ]
  }
];

export default function Experience() {
  const handleRedirect = (url) => {
    openLink(url);
  };

  return (
    <div className={styles.mainContainer} id='experience'>
      <h1 className={styles.heading}>Experience</h1>
      {experiences.map((experience, index) => (
        <div key={index} className={`${styles.content} ${index % 2 === 0 ? styles.content1 : styles.content2}`}>
          <section className={`${styles.exp} ${index % 2 === 0 ? styles.exp1 : styles.exp2}`}>
            <div className={styles.expContainer}>
              <div className={`${styles.circle} ${index % 2 === 0 ? '' : styles.circle2}`} onClick={() => handleRedirect(experience.url)}>
                <BsFillSuitcaseLgFill />
              </div>
              <span className={index % 2 === 0 ? styles.date : styles.date2}>{experience.date}<hr /></span>
              <Reveal isSlider={true} width='fit-content'>
                {index % 2 === 0 ? (
                  <ByjusLogo className={styles.byjusLogo} onClick={() => handleRedirect(experience.url)} />
                ) : (
                  <img src="https://grdp.co/cdn-cgi/image/width=145,height=40,quality=80,f=auto/https://gs-post-images.grdp.co/2021/9/group-img1630501108025-27.png-rs-high-webp.png"
                    alt="Byjus Exam Prep" className={styles.byjusLogo} onClick={() => handleRedirect(experience.url)} />
                )}
              </Reveal>
              <Reveal isSlider={true} width='fit-content'><h1 className={styles.designation}>Software Engineer</h1></Reveal>
              <ul>
                {experience.description.map((desc, idx) => (
                  <Reveal key={idx} isSlider={true} width='fit-content'>
                    <li dangerouslySetInnerHTML={{ __html: `${desc}` }} />
                  </Reveal>
                ))}
              </ul>
            </div>
          </section>
        </div>
      ))}
    </div>
  );
}
