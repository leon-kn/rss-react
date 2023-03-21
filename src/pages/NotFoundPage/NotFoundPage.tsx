import { AppRoutes } from 'src/enum/AppRoutes';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <h1>Page not Found</h1>
      <button>
        <Link to={AppRoutes.Home}>to Home Page</Link>
      </button>
    </div>
  );
};

export default NotFoundPage;
