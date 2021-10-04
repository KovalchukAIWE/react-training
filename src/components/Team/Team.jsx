import React from 'react';

import logo from '../../images/logo.jpg';
import charlie from '../../images/team-charlie.jpeg';
import sandra from '../../images/team-sandra.jpeg';
import alta from '../../images/team-alta.jpeg';
import joe from '../../images/team-joe.jpeg';

const Team = () => {
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
        <img class="teammates__photo" src={ charlie } alt="Charlie" />
        <div class="teammates__description">
          <div class="teammates__name">Charlie Kelly</div>
          <div class="teammates__role">CEO</div>
        </div>
      </div>
      <div class="teammates__card">
        <img class="teammates__photo" src={ sandra } alt="Sandra" />
        <div class="teammates__description">
          <div class="teammates__name">Sandra Alta</div>
          <div class="teammates__role">CMO</div>
        </div>
      </div>
      <div class="teammates__card">
        <img class="teammates__photo" src={ alta } alt="Sandra" />
        <div class="teammates__description">
          <div class="teammates__name">Sandra Alta</div>
          <div class="teammates__role">CMO</div>
        </div>
      </div>
      <div class="teammates__card">
        <img class="teammates__photo" src={ joe } alt="Joe" />
        <div class="teammates__description">
          <div class="teammates__name">Joe Black</div>
          <div class="teammates__role">CMO</div>
        </div>
      </div>
    </div>
  </div>
  );
}

export { Team };