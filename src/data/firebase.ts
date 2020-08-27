import firebase from 'firebase'

const firebaseConfig = {
        apiKey: "AIzaSyBWyu-QDezzQGvtMGpg5nbUgl1b3weMnfY",
        authDomain: "cosmo-pubg.firebaseapp.com",
        databaseURL: "https://cosmo-pubg.firebaseio.com",
        projectId: "cosmo-pubg",
        storageBucket: "cosmo-pubg.appspot.com",
        messagingSenderId: "1050325654502",
        appId: "1:1050325654502:web:c3411b60c30ef7c5c1d427",
        measurementId: "G-ERX9EBVJS8"
};

firebase.initializeApp(
    {
            ...firebaseConfig
        // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
        // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
        // databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
        // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
        // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
        // messagingSenderId: process.env.REACT_FIREBASE_APP_SENDER_ID,
        // appId: process.env.REACT_APP_FIREBASE_APP_ID,
        // measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
    }
)

export default firebase
const firestore = firebase.firestore()
export {firestore}
