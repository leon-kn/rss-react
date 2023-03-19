import { AppRoutes } from '../enum/AppRoutes';
import AboutPage from '../pages/AboutPage';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';
import { Routes, Route, Link } from 'react-router-dom';
import React from 'react';

const AppRouter = () => {
  return (
    <Routes>
      <Route path={AppRoutes.Home} element={<HomePage />} />
      <Route path={AppRoutes.About} element={<AboutPage />} />
      <Route path={AppRoutes.NotFoundPage} element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;
