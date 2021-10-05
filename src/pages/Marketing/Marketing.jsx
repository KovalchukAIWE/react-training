import React from 'react';

import styles from './Marketing.module.scss';

// import logo from '../../images/logo.jpg';
import { LogoDark } from '../../components/Logo/Logo';

const Marketing = () => {
  return (
    <div className={styles.wrapper}>
    <div className={styles.imageWrapper}>
        <div className={styles.image}>
        <div className={styles.text}>
        <div className={styles.logo}>
        <LogoDark />
      </div>
        <h1 className={styles.text__title}>Marketing strategy</h1>
        <div className={styles.links}>
            <div className={styles.links__item}>
              <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="35" cy="35" r="35" fill="#2299EF"/>
                <path d="M35 17.5L40.4075 28.455L52.5 30.2225L43.75 38.745L45.815 50.785L35 45.0975L24.185 50.785L26.25 38.745L17.5 30.2225L29.5925 28.455L35 17.5Z" stroke="white" stroke-width="5.14286" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <div className={styles.links__text}>
                <h2 className={styles.links__title}>Advertising</h2>
                <h3 className={styles.links__subtitle}>Reach COOs quickly</h3>
              </div>
            </div>
            <div className={styles.links__item}>
              <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="35" cy="35" r="35" fill="#2299EF"/>
                <path d="M35 17.5L40.4075 28.455L52.5 30.2225L43.75 38.745L45.815 50.785L35 45.0975L24.185 50.785L26.25 38.745L17.5 30.2225L29.5925 28.455L35 17.5Z" stroke="white" stroke-width="5.14286" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <div className={styles.links__text}>
                <h2 className={styles.links__title}>Organic search</h2>   
                <h3 className={styles.links__subtitle}>With a focus on long-tail keywords</h3>
              </div>
            </div>
            <div className={styles.links__item}>
              <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="35" cy="35" r="35" fill="#2299EF"/>
                <path d="M35 17.5L40.4075 28.455L52.5 30.2225L43.75 38.745L45.815 50.785L35 45.0975L24.185 50.785L26.25 38.745L17.5 30.2225L29.5925 28.455L35 17.5Z" stroke="white" stroke-width="5.14286" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            <div className={styles.links__text}>
              <h2 className={styles.links__title}>Content marketing</h2>  
              <h3 className={styles.links__subtitle}>Providing useful, niche content</h3>
            </div>
            </div>
        </div>
    </div>
        </div>
    </div>
    
  </div>
  );
}

export { Marketing };
