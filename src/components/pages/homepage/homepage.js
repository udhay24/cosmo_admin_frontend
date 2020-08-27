import React, {useEffect, useState} from "react";
import firebase from "../../../data/firebase";

export default function HomePageComponent() {

    const [userName, setUserName] = useState('')

    useEffect(() => {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                console.log(`current user ${JSON.stringify(user)}`)
                setUserName(user.displayName)
                setUserName(user.displayName)
            } else {
                console.log(`current user not signed in`)
            }
        });

    })

    return (
        <div>
            <h2>welcome {userName} ! you have successfully logged in</h2>
        </div>
    )
}