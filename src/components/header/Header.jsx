import React from 'react';

import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

const Header = () => (
  <div className={styles.header}>
    <nav className={styles.nav}>
      <ul className={styles.nav__items}>
        <Link to="/Bg" className={styles.nav__item}>
          Home
        </Link>
        <Link to="/BgDifferent" className={styles.nav__item}>
          BG different
        </Link>
        <Link to="/BgPrimary" className={styles.nav__item}>
          BG primary
        </Link>
        <Link to="/BgLight" className={styles.nav__item}>
          BG light
        </Link>
        <Link to="/OurMission" className={styles.nav__item}>
          Our mission
        </Link>
        <Link to="/Team" className={styles.nav__item}>
          Team
        </Link>
        <Link to="/CoverPrimary" className={styles.nav__item}>
          Cover primary
        </Link>
        <Link to="/CoverAlt" className={styles.nav__item}>
          Cover alt
        </Link>
        <Link to="/Cover" className={styles.nav__item}>
          Cover
        </Link>
        <Link to="/Marketing" className={styles.nav__item}>
          Marketing
        </Link>
        <Link to="/Competitive" className={styles.nav__item}>
          Competitive
        </Link>
        <Link to="/Customer" className={styles.nav__item}>
          Customer
        </Link>
        <Link to="/NotFound" className={styles.nav__item}>
          404
        </Link>
        <Link to="/Blocks" className={styles.nav__item}>
          Tezos Block
        </Link>
      </ul>
    </nav>
  </div>
);

export default Header;
