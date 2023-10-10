const firebaseConfig = {
    apiKey: "AIzaSyCfQhXCx8uRmmN0SDb0lsE7su2ui3Ix4zY",
    authDomain: "basketball-group-chat-ecc20.firebaseapp.com",
    databaseURL: "https://basketball-group-chat-ecc20-default-rtdb.firebaseio.com",
    projectId: "basketball-group-chat-ecc20",
    storageBucket: "basketball-group-chat-ecc20.appspot.com",
    messagingSenderId: "502614886628",
    appId: "1:502614886628:web:ad3bdad29ce6b50ec884f1",
    measurementId: "G-FPKB7CYW60"
  };
  
  firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();
function logout()
{
    localStorage.removeitem("user_name");
    localStorage.removeitem("user_name");
    window.location="index.html"
}
