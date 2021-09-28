import React from 'react';

import logo from '../../images/logo.jpg';
import Charlie from '../../images/Charlie.jpeg';
import Sandra from '../../images/Sandra.jpeg';
import SandraAlta from '../../images/Sandra Alta.jpeg';
import Joe from '../../images/Joe Black.jpeg';

export default function TeamSquares() {
  return (
    <div class="team-squares">
    <img class="text-wrapper__logo" src={ logo } alt="logo" />
    <div class="text">
      <h1 class="text__title">Meet the Team</h1>
      <h2 class="text__description">A description about your team goes here. Talk about your values, mission, 
        and anything else you think would be helpful or relevant for investors to know. A description about your team goes here.</h2>
    </div>
    <div class="teammates">
      <div class="teammates__card">
        <img class="teammates__photo" src={ Charlie } alt="Charlie" />
        <div class="teammates__description">
          <div class="teammates__name">Charlie Kelly</div>
          <div class="teammates__role">CEO</div>
        </div>
      </div>
      <div class="teammates__card">
        <img class="teammates__photo" src={ Sandra } alt="Sandra" />
        <div class="teammates__description">
          <div class="teammates__name">Sandra Alta</div>
          <div class="teammates__role">CMO</div>
        </div>
      </div>
      <div class="teammates__card">
        <img class="teammates__photo" src={ SandraAlta } alt="Sandra" />
        <div class="teammates__description">
          <div class="teammates__name">Sandra Alta</div>
          <div class="teammates__role">CMO</div>
        </div>
      </div>
      <div class="teammates__card">
        <img class="teammates__photo" src={ Joe } alt="Joe" />
        <div class="teammates__description">
          <div class="teammates__name">Joe Black</div>
          <div class="teammates__role">CMO</div>
        </div>
      </div>
    </div>
  </div>
  );
}
