import { AppRoutes } from 'src/enum/AppRoutes';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import './Layout.css';

const Layout = () => {
  const location = useLocation();
  const getCurrentRoute = () => {
    switch (location.pathname) {
      case '/':
        return 'Home Page';
      case '/about':
        return 'About Page';
      case '/form':
        return 'Form Page';
    }
  };
  return (
    <div>
      <header className="header">
        <h1 className="header__title">{getCurrentRoute()}</h1>
        <ul className="navbar">
          <li className="navbar__item">
            <NavLink to={AppRoutes.Index} className="navbar__link">
              Home
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to={AppRoutes.About} className="navbar__link">
              About Us
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to={AppRoutes.Form} className="navbar__link">
              Form
            </NavLink>
          </li>
        </ul>
      </header>
      <Outlet />
      <footer></footer>
    </div>
  );
};

export default Layout;
