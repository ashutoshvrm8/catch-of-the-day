import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDNIBBoc9_nBFvuH6wkYxf7R6HMse7AeXM",
    authDomain: "catch-of-the-day-74585.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-74585.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
