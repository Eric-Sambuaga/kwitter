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
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function addUser()
{
    user_name = document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
    purpose:"adding user"
});
}
