import { AppRoutes } from 'src/enum/AppRoutes';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = ({ title }: { title: string }) => {
  return (
    <div className="header">
      <h1 className="header__title">{title}</h1>
      <ul className="navbar">
        <li className="navbar__item">
          <NavLink to={AppRoutes.Home} className="navbar__link">
            Home
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink to={AppRoutes.About} className="navbar__link">
            About Us
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
