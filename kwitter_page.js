const firebaseConfig = {
      apiKey: "AIzaSyASzd1IW5hbhRflCK6cCAZKKzavnV6yZy0",
      authDomain: "kwitter-2b42a.firebaseapp.com",
      databaseURL: "https://kwitter-2b42a-default-rtdb.firebaseio.com",
      projectId: "kwitter-2b42a",
      storageBucket: "kwitter-2b42a.appspot.com",
      messagingSenderId: "382273183279",
      appId: "1:382273183279:web:6e32717684c807cf6a70da",
      measurementId: "G-QZ9X76QRF3"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

     user_name = localStorage.getItem("user_name");
     room_name = localStorage.getItem("room_name");

     function send()
     {
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

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("kwitter.html");      
}