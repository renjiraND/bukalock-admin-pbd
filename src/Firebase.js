import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBjnT5Ow8TIyz_GPw8qw_oRT8cmoi6gAgs",
    authDomain: "bukalock-9e58b.firebaseapp.com",
    databaseURL: "https://bukalock-9e58b.firebaseio.com",
    projectId: "bukalock-9e58b",
    storageBucket: "bukalock-9e58b.appspot.com",
    messagingSenderId: "120247446532"
  };
firebase.initializeApp(config);
var fire = firebase.database();

export default fire;