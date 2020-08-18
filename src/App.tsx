import React from 'react';
import './App.css';

import { Switch, Route, Redirect } from 'react-router-dom';

import LoginComponent from "./components/pages/login/login";
import HomePageComponent from "./components/pages/homepage/homepage";

function App() {
  return (
    <div className="app-container">
      <header className="App-header">
        <div className="page-container" >
          <Switch>

              <Route exact path = "/" render = { () => <LoginComponent/> }/>

              <Route exact path = '/home' render = { () => <HomePageComponent/>}/>
          </Switch>
        </div>
      </header>
    </div>
  );
}

export default App;
