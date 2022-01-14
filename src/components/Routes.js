import { Route, Switch, Redirect } from "react-router-dom";
import Results from './Results'
const Routes = () => {
     // If at / redirect to /search path automatically... If on any of the list in second route, return component results
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Redirect to="/search" />
        </Route>
        <Route exact path={["/images", "/search", "/news", "/videos"]}>
          <Results />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
