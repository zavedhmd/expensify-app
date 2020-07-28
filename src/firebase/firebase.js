import * as firebase from 'firebase';

// Your web app's Firebase configuration
const config = {
    apiKey: "AIzaSyBQYGgXrlj43iU0_YCbqLk9pjphrZmrCkE",
    authDomain: "expensify-bb758.firebaseapp.com",
    databaseURL: "https://expensify-bb758.firebaseio.com",
    projectId: "expensify-bb758",
    storageBucket: "expensify-bb758.appspot.com",
    messagingSenderId: "372374054992",
    appId: "1:372374054992:web:d943cd726b266fefb6c955"
  };

   // Initialize Firebase
   firebase.initializeApp(config);

   const database = firebase.database();

   database.ref().set({
       name: 'Zaved Ahmed',
       age: 25,
       isSingle: false,
       location: {
           city: 'Noida',
           country: 'India'
       }
   }).then(() => {
       console.log('The data is saved !');
   }).catch((error) => {
        console.log('This failed : ',error)
   });

//    database.ref().set("This is my data");

// database.ref('age').set(27);
// database.ref('location/city').set('Kolkata');

database.ref('attributes').set({
    weight: 50,
    height: 175
}).then(() => {
    console.log('Data saved successfully !');
}, error => console.log('Got an error : ',error));