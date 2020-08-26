import React from 'react';
import './App.css';

import {BrowserRouter as Router} from 'react-router-dom';

import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";
import {theme} from "./utils/theme";
import createRoutes from "./routes/routes";

function App() {
    return (
        <React.StrictMode>
            <MuiThemeProvider theme={createMuiTheme(theme)}>
                <Router>
                    {createRoutes()}
                </Router>
            </MuiThemeProvider>
        </React.StrictMode>
    );
}

export default App;
