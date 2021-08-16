
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAxGBbtJmaDosvky_NNSJhvbLxZ87LdAiI",
      authDomain: "kwitter-989c7.firebaseapp.com",
      databaseURL: "https://kwitter-989c7-default-rtdb.firebaseio.com",
      projectId: "kwitter-989c7",
      storageBucket: "kwitter-989c7.appspot.com",
      messagingSenderId: "747995430963",
      appId: "1:747995430963:web:0f9e2110b1f6062fa62346"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
