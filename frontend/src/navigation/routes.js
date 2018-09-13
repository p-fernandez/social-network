import React from 'react';
import {
  DashboardPage,
  LoginPage,
} from '../containers';
import Login from '../components/Login/Login';

const indexRoutes = [
 {
    path: "/",
    main: () => <LoginPage />,
    isPrivate: false,
  },
  {
    path: "/dashboard",
    main: () => <div />,
    isPrivate: true,
  }
];

const routes = [
  {
    path: "/",
    main: () => <Login />
  },
  {
    path: "/register",
    main: () => <h2>Register</h2>
  }
];

export {
  indexRoutes,
  routes,
};
