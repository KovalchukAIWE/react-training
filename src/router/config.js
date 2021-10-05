import { Background } from '../pages/Background';
import { BgDifferent } from '../pages/BgDifferent';
import { BgPrimary } from '../pages/BgPrimary';
import { BgLight } from '../pages/BgLight';
import { OurMission } from '../pages/OurMission';
import { Team } from '../pages/Team';
import { CoverPrimary } from '../pages/CoverPrimary';
import { CoverAlt } from '../pages/CoverAlt';
import { Cover } from '../pages/Cover';
import { Marketing } from '../pages/Marketing';
import { Competitive } from '../pages/Competitive';
import { Customer } from '../pages/Customer';

const routes = [
  {
    path: '/bg',
    exact: true,
    component: Background
  },
  {
    path: '/bg-different',
    exact: true,
    component: BgDifferent
  },
  {
    path: '/bg-primary',
    exact: true,
    component: BgPrimary
  },
  {
    path: '/bg-light',
    exact: true,
    component: BgLight
  },
  {
    path: '/our-mission',
    exact: true,
    component: OurMission
  },
  {
    path: '/team',
    exact: true,
    component: Team
  },
  {
    path: '/cover-primary',
    exact: true,
    component: CoverPrimary
  },
  {
    path: '/cover-alt',
    exact: true,
    component: CoverAlt
  },
  {
    path: '/cover',
    exact: true,
    component: Cover
  },
  {
    path: '/market-strategy',
    exact: true,
    component: Marketing
  },
  {
    path: '/competitive',
    exact: true,
    component: Competitive
  },
  {
    path: '/target-customer',
    exact: true,
    component: Customer
  }
]

export default routes;