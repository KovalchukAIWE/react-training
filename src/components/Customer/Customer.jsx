import React from 'react';
import logo from '../../images/logo.jpg';

const Customer = () => {
  return (
  <div class="customer">
    <div class="customer__image-wrapper">
      <div class="customer__image"></div>
    </div>
    <div class="customer-text">
      <img class="customer-text__logo" src={ logo } alt="logo" />
      <h1 class="customer-text__title">Target Customer</h1>
      <div class="customer-text__wrapper">
        <div class="customer-text__card">
          <h3 class="customer-text__subtitle">Product Manager</h3>
          <h4 class="customer-text__description">List an appealing fact about your target customer here.</h4>
        </div>
        <div class="customer-text__card">
          <h3 class="customer-text__subtitle">$200k+ Income</h3>
          <h4 class="customer-text__description">List an appealing fact about your target customer here.</h4>
        </div>
        <div class="customer-text__card">
          <h3 class="customer-text__subtitle">Decision Maker</h3>
          <h4 class="customer-text__description">List an appealing fact about your target customer here.</h4>
        </div>
        <div class="customer-text__card">
          <h3 class="customer-text__subtitle">Metro Area</h3>
          <h4 class="text-wrapper__description">List an appealing fact about your target customer here.</h4>
        </div>
      </div>
      <h3 class="customer-text__subtitle">In this city alone, there are 1M product managers.</h3>
      </div>
      
  </div>
  );
}

export { Customer };
