import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

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

        this.db = app.firestore();
    }

    // *** Auth API ***

    doCreateUserWithEmailAndPassword = (email, password) => // Sign up method
        this.auth.createUserWithEmailAndPassword(email, password)

    doSignInWithEmailAndPassword = (email, password) => // Sign in method
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => // Sign out method
        this.auth.signOut()

    doPasswordReset = email => // Reset password
        this.auth.sendPasswordResetEmail(email);

    /*doPasswordUpdate = (oldPassword, password) => {
        const user = this.auth.currentUser;
        const cred = app.auth().EmailAuthProvider.credential(user.email, oldPassword);
        console.log(oldPassword);
        console.log(password);
        console.log(cred);
        console.log(this.auth.currentUser.email);
        
        this.auth.currentUser.reauthenticateWithCredential(cred)
            .then(() => {
                return this.auth.currentUser.updatePassword(password);
            })
            .catch(error => {
                console.error(error);
            })
    }*/

    doPasswordUpdate = password => // Change password
        this.auth.currentUser.updatePassword(password);
    

}

export default Firebase;