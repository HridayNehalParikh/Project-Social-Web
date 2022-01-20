
//ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA29zfQRCvtrX1vwvIEVWxW0TUfcj4qwVc",
    authDomain: "project-social-website.firebaseapp.com",
    databaseURL: "https://project-social-website-default-rtdb.firebaseio.com",
    projectId: "project-social-website",
    storageBucket: "project-social-website.appspot.com",
    messagingSenderId: "943372485060",
    appId: "1:943372485060:web:48b99ecf4e411445c9a491",
    measurementId: "G-8M7CVXQFVH"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  function addUser() 
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}


