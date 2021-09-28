import React from 'react';
import logo from '../../images/logo.jpg';

const CoverPrimary = () => {
  return (
    <div class="cover-primary">
    <div class="cover-primary__image-wrapper">
        <div class="cover-primary__image"></div>
    </div>
    <div class="text-wrapper">
        <img class="text-wrapper__logo" src={ logo } alt="logo" />
        <h1 class="text-wrapper__title">Company Name</h1>
        <h2 class="text-wrapper__subtitle">Intriguing summary goes here. Keep it short & sweet. 
            Describe the problem you are solving. Focus on the pain point.</h2>
        <div class="links">
            <div class="links__item">
                <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="35" cy="35" r="35" fill="#2299EF"/>
                    <path d="M31.5 36.7499C32.2515 37.7547 33.2104 38.586 34.3115 39.1876C35.4126 39.7892 36.6301 40.1469 37.8816 40.2365C39.1331 40.3262 40.3893 40.1456 41.5649 39.7071C42.7404 39.2685 43.808 38.5823 44.695 37.6949L49.945 32.4449C51.5389 30.7947 52.4208 28.5844 52.4009 26.2902C52.381 23.996 51.4607 21.8013 49.8384 20.179C48.2161 18.5567 46.0215 17.6365 43.7273 17.6165C41.433 17.5966 39.2228 18.4786 37.5725 20.0724L34.5625 23.0649" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M38.4999 33.2499C37.7483 32.2452 36.7895 31.4138 35.6884 30.8123C34.5873 30.2107 33.3697 29.853 32.1182 29.7633C30.8667 29.6737 29.6106 29.8543 28.435 30.2928C27.2594 30.7313 26.1919 31.4175 25.3049 32.3049L20.0549 37.5549C18.461 39.2052 17.579 41.4154 17.599 43.7097C17.6189 46.0039 18.5391 48.1985 20.1614 49.8208C21.7838 51.4431 23.9784 52.3634 26.2726 52.3833C28.5668 52.4032 30.7771 51.5213 32.4274 49.9274L35.4199 46.9349" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <a class="links__text" href="#">
                    website.com
                </a>
            </div>
            <div class="links__item">
                <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="35" cy="35" r="35" fill="#2299EF"/>
                    <path d="M54.25 19.25C52.5742 20.4321 50.7187 21.3362 48.755 21.9275C47.701 20.7157 46.3003 19.8567 44.7423 19.4669C43.1843 19.077 41.5441 19.1751 40.0436 19.7478C38.5432 20.3205 37.2548 21.3402 36.3527 22.669C35.4507 23.9978 34.9785 25.5716 35 27.1775V28.9275C31.9246 29.0073 28.8772 28.3252 26.1293 26.9421C23.3813 25.5589 21.0181 23.5176 19.25 21C19.25 21 12.25 36.75 28 43.75C24.3959 46.1965 20.1025 47.4231 15.75 47.25C31.5 56 50.75 47.25 50.75 27.125C50.7484 26.6376 50.7015 26.1513 50.61 25.6725C52.3961 23.9111 53.6564 21.6873 54.25 19.25V19.25Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <a class="links__text" href="#">
                    @companyhandle
                </a>
            </div>
            <div class="links__item">
                <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="35" cy="35" r="35" fill="#2299EF"/>
                    <path d="M44.5 16.5H39.25C36.9294 16.5 34.7038 17.4219 33.0628 19.0628C31.4219 20.7038 30.5 22.9294 30.5 25.25V30.5H25.25V37.5H30.5V51.5H37.5V37.5H42.75L44.5 30.5H37.5V25.25C37.5 24.7859 37.6844 24.3408 38.0126 24.0126C38.3408 23.6844 38.7859 23.5 39.25 23.5H44.5V16.5Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <a class="links__text" href="#">
                    @handle
                </a>
            </div>
        </div>
    </div>
  </div>
  );
}

export default CoverPrimary;
