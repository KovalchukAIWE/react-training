import React from 'react';

import styles from './Team.module.scss';

import charlie from '../../images/team-charlie.jpeg';
import sandra from '../../images/team-sandra.jpeg';
import alta from '../../images/team-alta.jpeg';
import joe from '../../images/team-joe.jpeg';
import { LogoDark } from '../../components/Logo/Logo';

const Team = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <LogoDark />
      </div>
    <div className={styles.text}>
      <h1 className={styles.text__title}>Meet the Team</h1>
      <h2 className={styles.text__description}>A description about your team goes here. Talk about your values, mission, 
        and anything else you think would be helpful or relevant for investors to know. A description about your team goes here.</h2>
    </div>
    <div className={styles.teammates}>
      <div className={styles.teammates__card}>
        <img className={styles.teammates__photo} src={ charlie } alt="Charlie" />
        <div className={styles.teammates__description}>
          <div className={styles.teammates__name}>Charlie Kelly</div>
          <div className={styles.teammates__role}>CEO</div>
        </div>
      </div>
      <div className={styles.teammates__card}>
        <img className={styles.teammates__photo} src={ sandra } alt="Sandra" />
        <div className={styles.teammates__description}>
          <div className={styles.teammates__name}>Sandra Alta</div>
          <div className={styles.teammates__role}>CMO</div>
        </div>
      </div>
      <div className={styles.teammates__card}>
        <img className={styles.teammates__photo} src={ alta } alt="Sandra" />
        <div className={styles.teammates__description}>
          <div className={styles.teammates__name}>Sandra Alta</div>
          <div className={styles.teammates__role}>CMO</div>
        </div>
      </div>
      <div className={styles.teammates__card}>
        <img className={styles.teammates__photo} src={ joe } alt="Joe" />
        <div className={styles.teammates__description}>
          <div className={styles.teammates__name}>Joe Black</div>
          <div className={styles.teammates__role}>CMO</div>
        </div>
      </div>
    </div>
  </div>
  );
}

export { Team };