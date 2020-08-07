import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

class Firebase {
    constructor() {
        app.initializeApp(config);

        this.auth = app.auth();
    }

    // *** Auth API ***

    doCreateUserWithEmailAndPassword = (email, password) => { // Sign up method
        this.auth.createUserWithEmailAndPassword(email, password)
        /*.then(res => {
            console.log(res);
            alert(`Seja bem-vindo ${email}!`);

          })
          .catch(err => {
            console.error(err)
            alert(err.message)
          })*/
    };

    doSignInWithEmailAndPassword = (email, password) => { // Sign in method
        this.auth.signInWithEmailAndPassword(email, password);
    };

    doSignOut = () => { // Sign out method
        this.auth.signOut();
    };

    doPasswordReset = email => {
        this.auth.sendPasswordResetEmail(email);
    };

    doPasswordUpdate = password => {
        this.auth.currentUsers.updatePassword(password);
    }

}

export default Firebase;