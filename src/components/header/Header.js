import React from 'react';

import styles from './Header.module.scss';

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className={styles.header}>
            <nav className={styles.nav}>
                <ul className={styles.nav__items}>
                    <Link to='/bg' className={styles.nav__item}>Home</Link>
                    <Link to='/bg-different' className={styles.nav__item}>BG different</Link>
                    <Link to='/bg-primary' className={styles.nav__item}>BG primary</Link>
                    <Link to='/bg-light' className={styles.nav__item}>BG light</Link>
                    <Link to='/our-mission' className={styles.nav__item}>Our mission</Link>
                    <Link to='/team' className={styles.nav__item}>Team</Link>
                    <Link to='/cover-primary' className={styles.nav__item}>Cover primary</Link>
                    <Link to='/cover-alt' className={styles.nav__item}>Cover alt</Link>
                    <Link to='/cover' className={styles.nav__item}>Cover</Link>
                    <Link to='/market-strategy' className={styles.nav__item}>Marketing</Link>
                    <Link to='/competitive' className={styles.nav__item}>Competitive</Link>
                    <Link to='/target-customer' className={styles.nav__item}>Customer</Link>
                </ul>
            </nav>
        </div>
    )
}

export default Header;