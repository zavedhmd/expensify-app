import * as firebase from 'firebase';

// Your web app's Firebase configuration
const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };
  console.log(config.databaseURL)

   // Initialize Firebase
   firebase.initializeApp(config);

   const database = firebase.database();
   const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

   export {firebase, googleAuthProvider, database as default};

//    //child_removed
//    database.ref('expenses').on('child_removed', (snapshot) => {
//        console.log('Expenses removed with key : ', snapshot.val());
//    });

//    database.ref('expenses').on('child_changed', snapshot => {
//        console.log(`Child changed with key : ${snapshot.key}`)
//    });

//    database.ref('expenses').on('child_added', snapshot => {
//        console.log('Child added with key : ', snapshot.key)
//    })

//    database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//        snapshot.forEach((childSnapshot) => {
//            expenses.push(childSnapshot.val());
//        });
//     console.log(expenses);
//     })


       // Array pushing into firebase
//    database.ref('expenses').push({
//     description: 'Gum',
//     note: 'This is a gum',
//     amount: 195,
//     createdAt: 0
//    });

    //Fetching data from Firebase array
//    database.ref('expenses')
//     .once('value')
//     .then( (snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses)
//     });



//    database.ref('notes').push({
//        title: 'Study for',
//        body: 'JavaScript, React, Redux'
//    })

   // Fetching Data from Firebase
//    database.ref('location/city').once('value')       //once() will work only once.
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     }).catch(e => console.log(`Error : ${e.message}`))

    // const onValueChange = database.ref().on('value',(snapshot) => {        // on() will work everytime the value changes
    //     const res = snapshot.val();
    //     console.log(`${res.name} is a ${res.job.title} at ${res.job.company}.`);
    // }, (e) => {
    //     console.log('Error with data fetching  : ', e)
    // });     



    //Writing data to firebase
//    database.ref().set({
//        name: 'Zaved Ahmed',
//        age: 25,
//        stressLevel : 6,
//        job: {
//            title: 'Software Developer',
//            company: 'Google'
//        },
//        location: {
//            city: 'Noida',
//            country: 'India'
//        }
//    }).then(() => {
//        console.log('The data is saved !');
//    }).catch((error) => {
//         console.log('This failed : ',error)
//    });

//    database.ref().set("This is my data");

// database.ref('age').set(27);
// database.ref('location/city').set('Kolkata');

// database.ref('attributes').set({
//     weight: 50,
//     height: 175
// }).then(() => {
//     console.log('Data saved successfully !');
// }, error => console.log('Got an error : ',error));  //then() takes an optional second argument which is called for errors.This is same as above.


// database.ref('isSingle').set(null);

// // database.ref('isSingle').remove().then(() => {
// //     console.log('The data was deleted')
// // }).catch((error) => {
// //     console.log(`Data removal failed : ${error.message}`)
// // }) 

// database.ref().update({
//     stressLevel: 9,
//     'location/city': 'Bangalore',
//     'job/company': 'Amazon'
// });