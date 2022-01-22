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
          document.getElementById("msg").value = "";
      }

      
//ADD YOUR FIREBASE LINKS HERE
//YOUR FIREBASE LINKS


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name']
message = message_data['message'];
like  =message_data['like'];
name_with_tag = "<h4>"+ name +"<img class='message_h4'>" + message + "</h4>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button = "<button class='btn btn-warning' id=" +firebase_message_id+" value="+like+ " onclick= 'updatelike(this.id)'>";
span_with_tag = "<span class='glyphicon-thumbs-up'>Like: " +like +"</span></button><hr>";

row = name_with_tag + message_with_tag +like_button + span_with_tag;
document.getElementById("output").innerHTML += row;

//End code
      } });  }); }
getData();


function updateLike(message_id)
{
      console.log("click on like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      update_likes = Number(likes) + 1;
      console.log(update_likes);

      firebase.database(),ref(room_name).child(message_id).updata({
            like : updated_likes
      });
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("kwitter.html");
}