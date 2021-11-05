import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PublicPage from '../Pages/PublicPage/PublicPage.component';
import LoginPage from '../Pages/LoginPage/LoginPage.component';
import AdviserPage from '../Pages/AdviserPage/AdviserPage.component';
const ReactRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <PublicPage />} />
        <Route path="/login" render={() => <LoginPage />} />
        <Route path="/adviser" render={() => <AdviserPage />} />
      </Switch>
    </Router>
  );
};

export default ReactRouter;
