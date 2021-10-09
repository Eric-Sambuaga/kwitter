
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    function addRoom()
    {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update(
    {
    purpose:"adding roomname"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_room.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;

       Room_names = childKey;
      //Start code
Room_names = childKey;
console.log("Roomname - " + Room_names);
row = "<div class = 'room_name' id = "+ Room_names +" onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName()
{
console.log(name);
localStorage.setItem("room_name", name);
window.location ="kwitter_room.html";
}