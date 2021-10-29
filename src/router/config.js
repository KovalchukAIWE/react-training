import Background from '../pages/Bg';
import BgDifferent from '../pages/BgDifferent';
import BgPrimary from '../pages/BgPrimary';
import BgLight from '../pages/BgLight';
import OurMission from '../pages/OurMission';
import Team from '../pages/Team';
import CoverPrimary from '../pages/CoverPrimary';
import CoverAlt from '../pages/CoverAlt';
import Cover from '../pages/Cover';
import Marketing from '../pages/Marketing';
import Competitive from '../pages/Competitive';
import Customer from '../pages/Customer';
import NotFound from '../pages/NotFound';
import { Blocks } from '../pages/Blocks';

const routes = [
  {
    path: '/Bg',
    exact: true,
    component: Background,
  },
  {
    path: '/BgDifferent',
    exact: true,
    component: BgDifferent,
  },
  {
    path: '/BgPrimary',
    exact: true,
    component: BgPrimary,
  },
  {
    path: '/BgLight',
    exact: true,
    component: BgLight,
  },
  {
    path: '/OurMission',
    exact: true,
    component: OurMission,
  },
  {
    path: '/Team',
    exact: true,
    component: Team,
  },
  {
    path: '/CoverPrimary',
    exact: true,
    component: CoverPrimary,
  },
  {
    path: '/CoverAlt',
    exact: true,
    component: CoverAlt,
  },
  {
    path: '/Cover',
    exact: true,
    component: Cover,
  },
  {
    path: '/Marketing',
    exact: true,
    component: Marketing,
  },
  {
    path: '/Competitive',
    exact: true,
    component: Competitive,
  },
  {
    path: '/Customer',
    exact: true,
    component: Customer,
  },
  {
    path: '/NotFound',
    exact: true,
    component: NotFound,
  },
  {
    path: '/Blocks',
    exact: true,
    component: Blocks,
  },
];

export default routes;
