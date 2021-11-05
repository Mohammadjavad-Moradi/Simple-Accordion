import { signInWithGoogle } from '../../Firebase/Firebase.utils';
import Button from '@mui/material/Button';
const LoginPage: React.FC = () => {
  const handleSignIn = () => {
    signInWithGoogle();
  };
  return (
    <div>
      <Button variant="contained" onClick={handleSignIn}>
        Sign In With Google
      </Button>
    </div>
  );
};

export default LoginPage;
