import { Background } from '../components/Background';
import { BgDifferent } from '../components/BgDifferent';
import { BgPrimary } from '../components/BgPrimary';
import { BgLight } from '../components/BgLight';
import { OurMission } from '../components/OurMission';
import { Team } from '../components/Team';
import { CoverPrimary } from '../components/CoverPrimary';
import { CoverAlt } from '../components/CoverAlt';
import { Cover } from '../components/Cover';
import { Marketing } from '../components/Marketing';
import { Competitive } from '../components/Competitive';
import { Customer } from '../components/Customer';

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