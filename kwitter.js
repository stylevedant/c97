var firebaseConfig = {
    apiKey: "AIzaSyA4D6w0ZpdidSv9ZwsCpxTumynt2jE2WFA",
    authDomain: "practice-c94-6e8fc.firebaseapp.com",
    databaseURL: "https://practice-c94-6e8fc-default-rtdb.firebaseio.com",
    projectId: "practice-c94-6e8fc",
    storageBucket: "practice-c94-6e8fc.appspot.com",
    messagingSenderId: "894147489631",
    appId: "1:894147489631:web:a5b5b9e3980433d03490ea"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function addUser() {

    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name", user_name);

    window.location = "kwitter_room.html";
}

