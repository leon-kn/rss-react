import { AppRoutes } from '../enum/AppRoutes';
import { NavLink } from 'react-router-dom';

const Header = ({ title }: { title: string }) => {
  return (
    <div>
      {title}
      <NavLink to={AppRoutes.Home}>Home</NavLink>
      <NavLink to={AppRoutes.About}>About Us</NavLink>
    </div>
  );
};

export default Header;
