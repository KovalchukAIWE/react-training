import React from 'react';
import logo from '../../images/logo.jpg';

const Marketing = () => {
  return (
    <div class="market">
    <div class="market__image-wrapper">
        <div class="market__image">
        <div class="market-text">
        <img class="market-text__logo" src={ logo } alt="logo" />
        <h1 class="market-text__title">Marketing strategy</h1>
        <div class="market-links">
            <div class="market-links__item">
              <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="35" cy="35" r="35" fill="#2299EF"/>
                <path d="M35 17.5L40.4075 28.455L52.5 30.2225L43.75 38.745L45.815 50.785L35 45.0975L24.185 50.785L26.25 38.745L17.5 30.2225L29.5925 28.455L35 17.5Z" stroke="white" stroke-width="5.14286" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <div class="market-links__text">
                <h2 class="market-links__subtitle">Advertising</h2>
                <h3 class="market-links__description">Reach COOs quickly</h3>
              </div>
            </div>
            <div class="market-links__item">
              <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="35" cy="35" r="35" fill="#2299EF"/>
                <path d="M35 17.5L40.4075 28.455L52.5 30.2225L43.75 38.745L45.815 50.785L35 45.0975L24.185 50.785L26.25 38.745L17.5 30.2225L29.5925 28.455L35 17.5Z" stroke="white" stroke-width="5.14286" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <div class="market-links__text">
                <h2 class="market-links__subtitle">Organic search</h2>   
                <h3 class="market-links__description">With a focus on long-tail keywords</h3>
              </div>
            </div>
            <div class="market-links__item">
              <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="35" cy="35" r="35" fill="#2299EF"/>
                <path d="M35 17.5L40.4075 28.455L52.5 30.2225L43.75 38.745L45.815 50.785L35 45.0975L24.185 50.785L26.25 38.745L17.5 30.2225L29.5925 28.455L35 17.5Z" stroke="white" stroke-width="5.14286" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            <div class="market-links__text">
              <h2 class="market-links__subtitle">Content marketing</h2>  
              <h3 class="market-links__description">Providing useful, niche content</h3>
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
