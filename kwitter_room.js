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
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();


  user_name = localStorage.getItem("user_name").innerHTML = "Welcome" + user_name + "!";
  
  function addRoom()
  {
      room_name = document.getElementById("room_name").value;
  
      firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
  }
  
  function getdata() {
      firebase.database().ref("/").on('value', function(snapsshot){ document.getElementById("output").innerHTML = ""; 
      snapsshot.forEach(function(childSnapshot)
  {
      childKey = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_name);
      row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id' >#"+ Room_names +"</div><hr>";
      document.getAnimations("output").innerHTML += row;

  });    
    });
  }

  getData();
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
  }

  function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";

  }