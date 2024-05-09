import React, { useEffect, useState, useRef } from "react";
import styles from "../moduleCSS/CircularProgressBar.module.css";

export const CircularProgressBar = ({
  children,
  progressEndValue,
  speed,
  skill,
}) => {
  const [progressValue, setProgressValue] = useState(0);
  const progressBarRef = useRef(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setVisible(true);
      }
    });
    observer.observe(progressBarRef.current);
    if (isVisible) {
      const progress = setInterval(() => {
        setProgressValue((prevProgress) => {
          if (prevProgress === progressEndValue) {
            clearInterval(progress);
            return prevProgress;
          }
          progressBarRef.current.style.background = `conic-gradient(
            #ffb400 ${progressValue * 3.6}deg,
            var(--body-color-primary) ${progressValue * 3.6}deg
        )`;
          return prevProgress + 1;
        });
      }, speed);
      observer.unobserve(progressBarRef.current);
      return () => {
        clearInterval(progress);
      };
    }
  }, [progressEndValue, speed, progressValue, isVisible]);

  return (
    <div className={styles.container}>
      <div className={styles.circular_progress} ref={progressBarRef}>
        <div className={styles.value_container}>{children}</div>
      </div>
      <div className={styles.info}>
        {" "}
        <span className={styles.name}>{skill}</span>{" "}
        <span className={styles.percentage}>{progressValue} %</span>
      </div>
    </div>
  );
};
