import { Link } from 'react-router-dom';
import { auth } from '../../Firebase/Firebase.utils';
import Button from '@mui/material/Button';

const Header: React.FC = () => {
  return (
    <>
      <Button
        component={Link}
        to="/login"
        variant="outlined"
        aria-label="login page"
        role="link"
      >
        Login
      </Button>
    </>
  );
};

export default Header;
