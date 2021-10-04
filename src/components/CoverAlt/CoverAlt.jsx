import React from 'react';

import styles from './CoverAlt.module.scss';

import logo from '../../images/logo.jpg';

const CoverAlt = () => {
  return (
  <div className={styles.wrapper}>
    <div className={styles.imageWrapper}>
      <div className={styles.image}></div>
    </div>
    <div className={styles.text}>
    <img className={styles.logo} src={ logo } alt="logo" />
    <h1 className={styles.text__title}>Company Name</h1>
    <h2 className={styles.text__subtitle}>Give a short, strong elevator pitch here.</h2>
    </div>
  </div>
  );
}

export { CoverAlt };
