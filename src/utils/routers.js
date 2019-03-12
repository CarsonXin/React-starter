import Home from '../views/home';
import About from '../views/about';
import Intro from '../views/intro';
import {Info, Help} from '@material-ui/icons';

export const routes = [
  {
    label: 'Home',
    path: '/home',
    icon: 'fa fa-home',
    component: Home,
  },
  {
    label: 'Intro',
    path: '/intro',
    icon: Info,
    component: Intro,
  },
  {
    label: 'About',
    path: '/about',
    icon: Help,
    component: About,
  },
];