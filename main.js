
  var firebaseConfig = {
    apiKey: "AIzaSyDtfY3sksyu5xEhEiMRLTdvuVCigB4Yu5s",
    authDomain: "portfolio-924e5.firebaseapp.com",
    databaseURL: "https://portfolio-924e5-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "portfolio-924e5",
    storageBucket: "portfolio-924e5.appspot.com",
    messagingSenderId: "907516796024",
    appId: "1:907516796024:web:fede3c1f8ec0f640ec618d",
    measurementId: "G-DFT90082BR"
  };
  

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const analytics = firebase.analytics(app);

 var messageRef = firebase.database().ref('messages');
 document.getElementById('submit-btn').addEventListener('click' , submit=(event) => {
     var name = getInputValue("name");
     var subject = getInputValue("subject");
     var email = getInputValue("email");
     var message = getInputValue("message");

     saveMessage(name,subject,email,message)
 })

 function getInputValue(id){
     return document.getElementById(id).value 
 }
 function saveMessage (name,subject,email,message){
     var newMessageRef = messageRef.push();
     newMessageRef.set({
         name: name,
         subject:subject,
         email:email,
         message:message
     }) 
     alert("Your message is sent successfully!")
 }
