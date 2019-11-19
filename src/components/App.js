import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import DisplayCards from '../containers/DisplayCards';

export default function App() {
  return (

    <Router>
      <Switch>
        <Route exact path="/" component={DisplayCards} />
      </Switch>
    </Router>
  );
}
