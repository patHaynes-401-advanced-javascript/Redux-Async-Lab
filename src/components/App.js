import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import DisplayCards from '../containers/DisplayCards';
import Header from './header/Header';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={DisplayCards} />
      </Switch>
    </Router>
  );
}
