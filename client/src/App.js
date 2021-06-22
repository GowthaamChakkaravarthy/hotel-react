import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MainList from './components/MainList';
import  SubList from './components/SubList';

function App() {
  document.title = 'Ammazing Food Court';
  return (
	<div className="App">
    <Router>
      <Switch>
        <Route exact path="/">
            <MainList />
        </Route>
        <Route exact path="/sublist">
            <SubList />
        </Route>
      </Switch>
    </Router>
	</div>
  );
}

export default App;
