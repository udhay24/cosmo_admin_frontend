import React from "react";

import {LOGIN_PATH, HOME_SCREEN_PATH} from "../const/routes_path";

import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom'
import LoginComponent from "../components/pages/login/login";
import HomePageComponent from "../components/pages/homepage/homepage";

export default function createRoutes() {
    return (
        <Switch>
            <Route exact path={LOGIN_PATH}>
                <LoginComponent/>
            </Route>

            <Route exact path={HOME_SCREEN_PATH}>
                <HomePageComponent/>
            </Route>

            <Redirect exact from="/" to={LOGIN_PATH}/>

        </Switch>
    )

}