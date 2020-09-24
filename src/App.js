import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Signin from './components/Signin';

export class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Signin} />
        </Switch>
      </div>
    );
  }
}

export default App;
