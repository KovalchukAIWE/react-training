import React from 'react';

import styles from './Competitive.module.scss';

import { LogoDark } from '../../components/Logo/Logo';

const Competitive = () =>  {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <LogoDark />
      </div>
      <div className={styles.image}>
        <div className={styles.text}>
          <h1 className={styles.text__title}>The Competition</h1>
          <div className={styles.list}>
            <div className={styles.list__item}>
              <div className={styles.list__text}>
                <h2 className={styles.list__title}>Company1</h2>
                <h3 className={styles.list__subtitle}>Their reviews average 3.5, whereas we average 5 stars</h3>
              </div>
            </div>
            <div className={styles.list__item}>
              <div className={styles.list__text}>
                <h2 className={styles.list__title}>Company2</h2>   
                <h3 className={styles.list__subtitle}>Their reviews average 3.5, whereas we average 5 stars</h3>
              </div>
            </div>
            <div lassName={styles.list__item}>
            <div className={styles.list__text}>
              <h2 className={styles.list__title}>Company3</h2>  
              <h3 className={styles.list__subtitle}>Their reviews average 3.5, whereas we average 5 stars</h3>
            </div>
            <div lassName={styles.list__item}>
            <div className={styles.list__text}>
              <h2 className={styles.list__title}>Company4</h2>  
              <h3 className={styles.list__subtitle}>Their reviews average 3.5, whereas we average 5 stars</h3>
            </div>
            </div>
          </div>
        </div>
       </div>
      </div>
    </div>
  );
}

export { Competitive };