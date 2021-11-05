import { Link } from 'react-router-dom';
import { auth } from '../../Firebase/Firebase.utils';
import Button from '@mui/material/Button';
import { HeaderContainerStyles } from './Header.styles';
interface HeaderTypes {
  user: null | any;
}
const Header: React.FC<HeaderTypes> = ({ user }) => {
  const hanldeSignOut = () => {
    auth.signOut();
  };
  return (
    <HeaderContainerStyles>
      <nav>
        <Button
          component={Link}
          to="/"
          variant="outlined"
          aria-label="public page"
          role="link"
        >
          Public Page
        </Button>
        {user && (
          <Button
            component={Link}
            to="/adviser"
            variant="outlined"
            aria-label="adviser page"
            role="link"
          >
            adviser
          </Button>
        )}
        {user ? (
          <Button
            component={Link}
            to="/"
            variant="outlined"
            onClick={hanldeSignOut}
            aria-label="sign out"
            role="link"
          >
            Sign Out
          </Button>
        ) : (
          <Button
            component={Link}
            to="/login"
            variant="outlined"
            aria-label="login page"
            role="link"
          >
            Login
          </Button>
        )}
      </nav>
    </HeaderContainerStyles>
  );
};

export default Header;
