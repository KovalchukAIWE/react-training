import React from 'react';

import styles from './Background.module.scss';

const Background = () => {
  return (
    <div className={styles.background}>
      <h1 className={styles.background__text}>Introducing: the next generation of online payments.</h1>
    </div>
  );
}

export { Background };
