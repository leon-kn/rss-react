import { Route, Routes } from 'react-router-dom';
import AboutPage from 'src/pages/AboutPage';
import { AppRoutes } from 'src/enum/AppRoutes';
import HomePage from 'src/pages/HomePage';
import NotFoundPage from 'src/pages/NotFoundPage';

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
