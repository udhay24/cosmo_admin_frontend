import React from "react";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from "../../../data/firebase";
import {HOME_SCREEN_PATH} from "../../../const/routes_path";

export default function LogInComponent() {

    const uiConfig = {
        signInFlow: 'popup',
        // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
        signInSuccessUrl: HOME_SCREEN_PATH,
        // We will display Google and Facebook as auth providers.
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID
        ]
    }

    return (<div>
        <h1>Cosmo gamingz</h1>
        <p>Please sign-in:</p>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
    </div>)
}