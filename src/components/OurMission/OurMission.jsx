import React from 'react';
import logo from '../../images/logo.jpg';

const OurMission = () => {
  return (
  <div class="our-mission">
    <div class="our-mission__image-wrapper">
      <div class="our-mission__image"></div>
    </div>
    <div class="text-wrapper">
      <img class="text-wrapper__logo" src={ logo } alt="logo" />
        <h1 class="text-wrapper__title">Our Mission</h1>
        <div>
          <h2 class="text-wrapper__subtitle">Become the #1 Platform</h2>
          <h3 class="text-wrapper__description">There is an opportunity to become the go-to platform for product managers.</h3>
        </div>
        <div>
          <h2 class="text-wrapper__subtitle">Create a Great Community</h2>
          <h3 class="text-wrapper__description">We want to help others by creating a community where people can get answers to questions.</h3>
        </div>
        <div>
          <h2 class="text-wrapper__subtitle">Lead by Example</h2>
          <h3 class="text-wrapper__description">Our goal is to become the industry leader by fostering great relationships.</h3>
        </div>
      </div>
  </div>
  );
}

export { OurMission };
