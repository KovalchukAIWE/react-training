import React from 'react';
import logo from '../../images/logo.jpg';

const CoverAlt = () => {
  return (
  <div class="cover-alt">
    <div class="cover-alt__image-wrapper">
      <div class="cover-alt__image"></div>
    </div>
    <div class="cover-text">
      <img class="cover-text__logo" src={ logo } alt="logo" />
      <h1 class="cover-text__title">Company Name</h1>
      <h2 class="cover-text__subtitle">Give a short, strong elevator pitch here.</h2>
      </div>
  </div>
  );
}

export default CoverAlt;
