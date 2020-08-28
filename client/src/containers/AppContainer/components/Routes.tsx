import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeContainer from "../../HomeContainer";

const Routes = () => (
  <Switch>
    <Route path="/home" component={HomeContainer} />
    <Route exact path="/" component={HomeContainer} />
    <Route path="/" component={() => (<div>Not Found</div>)} />
  </Switch>
);
export default Routes;
