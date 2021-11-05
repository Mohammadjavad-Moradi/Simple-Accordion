import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import PublicPage from '../Pages/PublicPage/PublicPage.component';
import LoginPage from '../Pages/LoginPage/LoginPage.component';
import AdviserPage from '../Pages/AdviserPage/AdviserPage.component';
import Header from '../Components/Header/Header.component';

interface ReactRouterTypes {
  userName: null | any;
}
const ReactRouter: React.FC<ReactRouterTypes> = ({ userName }) => {
  return (
    <Router>
      <Header user={userName} />
      <Switch>
        <Route exact path="/" render={() => <PublicPage user={userName} />} />
        <Route
          path="/login"
          render={() => (userName ? <Redirect to="/adviser" /> : <LoginPage />)}
        />
        <Route
          path="/adviser"
          render={() => (userName ? <AdviserPage /> : <Redirect to="/login" />)}
        />
      </Switch>
    </Router>
  );
};

export default ReactRouter;
