import Home from '../views/home';
import About from '../views/about';
import Intro from '../views/intro';

export const routes = [
  {
    label: 'Home',
    path: '/home',
    component: Home,
  },
  {
    label: 'Intro',
    path: '/intro',
    component: Intro,
  },
  {
    label: 'About',
    path: '/about',
    component: About,
  },
];