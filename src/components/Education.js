import React, {useEffect, useRef} from 'react'
import styles from '../moduleCSS/Education.module.css'
import Lottie from 'lottie-web'
import { FaUniversity } from "react-icons/fa";

export default function Education() {

  const animContainer = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: animContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../media/grad.json')
    })
  }, [])

  return (
      <div className={styles.mainContainer} id='education'>
        <h1 className={styles.heading}>Education</h1>
        <div className={styles.subContainer}>
          <div className={styles.animeContainer} ref={animContainer}></div>
          <section className={styles.info}>
              <div className={styles.edu}>
                <div className={styles.circle}><FaUniversity /></div>
                <div className={styles.date}><hr />Aug, 2019 - July, 2023</div>
                <h1>Bachelor of Engineering (Computer Science)</h1>
                <span>Chitkara University</span>
                <ul><li>Graduated with CGPA of 9.85 out of 10.</li></ul>
              </div>
              <div className={styles.edu}>
                <div className={styles.circle}><FaUniversity /></div>
                <div className={styles.date}><hr />2017 - 2018</div>
                <h1>Senior Secondary Education (12th)</h1>
                <span>Rainbow School</span>
              </div>
          </section>
        </div>
      </div>
  )
}
