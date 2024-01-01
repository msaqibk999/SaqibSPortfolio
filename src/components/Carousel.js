// Carousel.js

import React, { useState, useEffect, useCallback, useRef } from 'react';
import styles from '../moduleCSS/Carousel.module.css';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const Carousel = ({ items, autoSlideInterval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (items.length + 1));
  }, [items.length]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, autoSlideInterval);

    return () => clearInterval(intervalId);
  }, [autoSlideInterval, nextSlide]);

  const handleTransitionEnd = () => {
    if (currentIndex === items.length) {
      // Reset to the first item without transition
      containerRef.current.style.transitionDuration = '0ms';
      setCurrentIndex(0);

      // Set a delay before re-enabling transition for smooth looping
      setTimeout(() => {
        containerRef.current.style.transitionDuration = '500ms';
      }, 0);
    }
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        // Reset to the last item without transition
        containerRef.current.style.transitionDuration = '0ms';
        setCurrentIndex(items.length);

        // Set a delay before re-enabling transition for smooth looping
        setTimeout(() => {
          containerRef.current.style.transitionDuration = '500ms';
        }, 0);
      }
      return (prevIndex - 1 + items.length) % (items.length + 1);
    });
  };

  return (
    <div className={styles.carouselContainer}>
      <div
        ref={containerRef}
        className={styles.carousel}
        onTransitionEnd={handleTransitionEnd}
      >
        <div
          className={styles.slidesContainer}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <button className={styles.prevButton} onClick={prevSlide}>
        <BsChevronLeft />
      </button>
      <button className={styles.nextButton} onClick={nextSlide}>
        <BsChevronRight />
      </button>
    </div>
  );
};

export default Carousel;
