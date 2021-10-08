import Background from '../pages/Background/Background';
import BgDifferent from '../pages/BgDifferent/BgDifferent';
import BgPrimary from '../pages/BgPrimary/BgPrimary';
import BgLight from '../pages/BgLight/BgLight';
import OurMission from '../pages/OurMission/OurMission';
import Team from '../pages/Team/Team';
import CoverPrimary from '../pages/CoverPrimary/CoverPrimary';
import CoverAlt from '../pages/CoverAlt/CoverAlt';
import Cover from '../pages/Cover/Cover';
import Marketing from '../pages/Marketing/Marketing';
import Competitive from '../pages/Competitive/Competitive';
import Customer from '../pages/Customer/Customer';
import NotFound from '../pages/NotFound/NotFound';

const routes = [
  {
    path: '/bg',
    exact: true,
    component: Background,
  },
  {
    path: '/bg-different',
    exact: true,
    component: BgDifferent,
  },
  {
    path: '/bg-primary',
    exact: true,
    component: BgPrimary,
  },
  {
    path: '/bg-light',
    exact: true,
    component: BgLight,
  },
  {
    path: '/our-mission',
    exact: true,
    component: OurMission,
  },
  {
    path: '/team',
    exact: true,
    component: Team,
  },
  {
    path: '/cover-primary',
    exact: true,
    component: CoverPrimary,
  },
  {
    path: '/cover-alt',
    exact: true,
    component: CoverAlt,
  },
  {
    path: '/cover',
    exact: true,
    component: Cover,
  },
  {
    path: '/market-strategy',
    exact: true,
    component: Marketing,
  },
  {
    path: '/competitive',
    exact: true,
    component: Competitive,
  },
  {
    path: '/target-customer',
    exact: true,
    component: Customer,
  },
  {
    path: '/not-found',
    exact: true,
    component: NotFound,
  },
];

export default routes;
