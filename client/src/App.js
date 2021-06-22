import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MainList from './components/MainList';
import  SubList from './components/SubList';
import FoodDetail from './components/FoodDetail';

function App() {
  document.title = 'Ammazing Food Court';
  return (
	<div className="App">
    <Router>
      <Switch>
        <Route exact path="/">
            <MainList key = 'qwert'/>
        </Route>
        <Route exact path="/sublist">
            <SubList key ='sqwe'/>
        </Route>
        <Route exact path="/fooddetail">
            <FoodDetail key ='sqwe'/>
        </Route>
      </Switch>
    </Router>
	</div>
  );
}

export default App;
