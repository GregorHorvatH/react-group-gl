import { lazy } from 'react';

const Home = lazy(() =>
  import('../pages/Home' /* webpackChunkName: "home-page" */),
);
const Movies = lazy(() =>
  import('../pages/Movies' /* webpackChunkName: "movies-page" */),
);
const HOC = lazy(() =>
  import('../pages/HOC' /* webpackChunkName: "hoc-page" */),
);
const UserInfo = lazy(() =>
  import('../pages/UserInfo' /* webpackChunkName: "user-info-page" */),
);

const routes = [
  {
    label: 'Home',
    path: '/',
    exact: true,
    needsAuth: false,
    component: Home,
  },
  {
    label: 'Movies',
    path: '/movies',
    exact: false,
    needsAuth: true,
    component: Movies,
  },
  {
    label: 'HOC',
    path: '/hoc',
    exact: false,
    needsAuth: true,
    component: HOC,
  },
  {
    label: 'User Info',
    path: '/user-info',
    exact: false,
    needsAuth: true,
    component: UserInfo,
  },
];

export default routes;
