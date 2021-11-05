import { signInWithGoogle } from '../../Firebase/Firebase.utils';
import Button from '@mui/material/Button';
import { LoginPageWrapperStyles } from './LoginPage.styles';

const LoginPage: React.FC = () => {
  const handleSignIn = () => {
    signInWithGoogle();
  };
  return (
    <LoginPageWrapperStyles>
      <Button variant="contained" onClick={handleSignIn}>
        Sign In With Google
      </Button>
    </LoginPageWrapperStyles>
  );
};

export default LoginPage;
