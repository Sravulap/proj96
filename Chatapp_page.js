var firebaseConfig = {
    apiKey: "AIzaSyCamq0Nxe3IP4I6q1j_8MS8nn5yYYJ97yE",
    authDomain: "kwitter-8d3de.firebaseapp.com",
    databaseURL: "https://kwitter-8d3de-default-rtdb.firebaseio.com",
    projectId: "kwitter-8d3de",
    storageBucket: "kwitter-8d3de.appspot.com",
    messagingSenderId: "1052612761719",
    appId: "1:1052612761719:web:1985c4392c9e614a538e72"
  };
   firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });

    document.getElementById("msg").value = " ";
}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code



//End code
    } });  }); }
getData();
