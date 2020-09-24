import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Signin from './components/Signin';
import Slack from './components/Slack';

export class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Signin} />
          <Route exact path="/slack" component={Slack} />
        </Switch>
      </div>
    );
  }
}

export default App;
