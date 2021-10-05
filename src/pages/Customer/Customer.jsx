import React from 'react';

import styles from './Customer.module.scss';

// import logo from '../../images/logo.jpg';
import { LogoDark } from '../../components/Logo/Logo';

const Customer = () => {
  return (
  <div className={styles.wrapper}>
    <div className={styles.imageWrapper}>
      <div className={styles.image}></div>
    </div>
    <div className={styles.text}>
    <div className={styles.logo}>
        <LogoDark />
      </div>
      <h1 className={styles.text__title}>Target Customer</h1>
      <div className={styles.text__wrapper}>
        <div className={styles.text__card}>
          <h3 className={styles.text__subtitle}>Product Manager</h3>
          <h4 className={styles.text__description}>List an appealing fact about your target customer here.</h4>
        </div>
        <div className={styles.text__card}>
          <h3 className={styles.text__subtitle}>$200k+ Income</h3>
          <h4 className={styles.text__description}>List an appealing fact about your target customer here.</h4>
        </div>
        <div className={styles.text__card}>
          <h3 className={styles.text__subtitle}>Decision Maker</h3>
          <h4 className={styles.text__description}>List an appealing fact about your target customer here.</h4>
        </div>
        <div className={styles.text__card}>
          <h3 className={styles.text__subtitle}>Metro Area</h3>
          <h4 className={styles.text__description}>List an appealing fact about your target customer here.</h4>
        </div>
      </div>
      <h3 className={styles.text__subtitle}>In this city alone, there are 1M product managers.</h3>
      </div>
      
  </div>
  );
}

export { Customer };
