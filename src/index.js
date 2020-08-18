import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";
import {theme} from "./theme";
import { BrowserRouter as Router } from 'react-router-dom';
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
      <MuiThemeProvider theme={createMuiTheme(theme)}>
          <Router>
              <App/>
          </Router>
      </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
