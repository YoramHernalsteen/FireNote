import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDuFH9tcb-7Mfv4sKc-G1zw5I-_XhkUGHg",
    authDomain: "note-ec7fd.firebaseapp.com",
    databaseURL: "https://note-ec7fd.firebaseio.com",
    projectId: "note-ec7fd",
    storageBucket: "note-ec7fd.appspot.com",
    messagingSenderId: "202627142816",
    appId: "1:202627142816:web:2ced3a75b81bf2805a25c5",
    measurementId: "G-YBBZT95V2Y"
};

firebase.initializeApp(firebaseConfig)


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
