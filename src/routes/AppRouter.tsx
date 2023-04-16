import { Route, Routes } from 'react-router-dom';
import { AppRoutes } from 'src/enum/AppRoutes';
import Layout from 'src/components/Layout';
import AboutPage from 'src/pages/AboutPage';
import FormPage from 'src/pages/FormPage';
import HomePage from 'src/pages/HomePage';
import NotFoundPage from 'src/pages/NotFoundPage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path={AppRoutes.Index} element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path={AppRoutes.About} element={<AboutPage />} />
        <Route path={AppRoutes.Form} element={<FormPage />} />
        <Route path={AppRoutes.NotFoundPage} element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
