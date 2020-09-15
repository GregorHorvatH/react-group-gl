import { lazy } from 'react';

// import asyncComponent from './components/AsyncComponent';

// const Home = asyncComponent({
//   loader: () => import('./components/Home' /* webpackChunkName: "home-page" */),
//   loading: () => <p>Loading...</p>,
// });

const Home = lazy(() =>
  import('./components/Home' /* webpackChunkName: "home-page" */),
);
const Users = lazy(() =>
  import('./components/Users' /* webpackChunkName: "users-page" */),
);
const UserDetails = lazy(() =>
  import(
    './components/UserDetails' /* webpackChunkName: "user-details-page" */
  ),
);
const HomeWorks = lazy(() =>
  import('./components/HomeWorks' /* webpackChunkName: "home-work-page" */),
);
const About = lazy(() =>
  import('./components/About' /* webpackChunkName: "about-page" */),
);

export default [
  {
    path: '/',
    label: 'Home',
    isExact: true,
    isInMenu: true,
    component: Home,
  },
  {
    path: '/users',
    label: 'Users',
    isExact: true,
    isInMenu: true,
    component: Users,
  },
  {
    path: '/home-works',
    label: 'Home Works',
    isExact: false,
    isInMenu: true,
    component: HomeWorks,
  },
  {
    path: '/about',
    label: 'About',
    isExact: false,
    isInMenu: true,
    component: About,
  },
  {
    path: '/users/:userId',
    label: 'User Details',
    isExact: false,
    isInMenu: false,
    component: UserDetails,
  },
];
