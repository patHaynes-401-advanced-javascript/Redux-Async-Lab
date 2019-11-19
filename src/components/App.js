import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import DisplayCharacters from '../containers/DisplayCharacters';
import DisplayCharacterDetail from '../containers/DisplayCharacterDetail';
import Header from './header/Header';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={DisplayCharacters} />
        <Route path="/cards/:id" component={DisplayCharacterDetail} />
      </Switch>
    </Router>
  );
}
