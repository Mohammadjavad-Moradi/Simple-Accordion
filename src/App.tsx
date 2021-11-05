import { useState, useEffect } from 'react';
import ReactRouter from './Router/ReactRouter.component';
import { auth } from './Firebase/Firebase.utils';
function App() {
  const [userName, setUserName] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((user: null | any): void => {
      console.log(userName);
      setUserName(user);
    });
  }, [userName]);
  return (
    <div>
      <ReactRouter userName={userName} />
    </div>
  );
}

export default App;
