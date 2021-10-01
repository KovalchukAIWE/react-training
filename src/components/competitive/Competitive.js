import React from 'react';

import logo from '../../images/logo.jpg';

const Competitive = () =>  {
  return (
    <div class="competitive">
    <div class="competitive__image-wrapper">
        <div class="competitive__image">
        <div class="competitive-text">
        <img class="competitive-text__logo" src={ logo } alt="logo" />
        <h1 class="competitive-text__title">The Competition</h1>
        <div class="competitive-links">
            <div class="competitive-links__item">
              <div class="competitive-links__text">
                <h2 class="competitive-links__subtitle">Company1</h2>
                <h3 class="competitive-links__description">Their reviews average 3.5, whereas we average 5 stars</h3>
              </div>
            </div>
            <div class="competitive-links__item">
              <div class="competitive-links__text">
                <h2 class="competitive-links__subtitle">Company2</h2>   
                <h3 class="competitive-links__description">Their reviews average 3.5, whereas we average 5 stars</h3>
              </div>
            </div>
            <div class="competitive-links__item">
            <div class="competitive-links__text">
              <h2 class="competitive-links__subtitle">Company3</h2>  
              <h3 class="competitive-links__description">Their reviews average 3.5, whereas we average 5 stars</h3>
            </div>
            <div class="competitive-links__text">
              <h2 class="competitive-links__subtitle">Company4</h2>  
              <h3 class="competitive-links__description">Their reviews average 3.5, whereas we average 5 stars</h3>
            </div>
          </div>
        </div>
       </div>
      </div>
    </div>
    
  </div>
  );
}

export default Competitive;