function reg_go(){
    window.location= "reg.html";
}

var firebaseConfig = {
    apiKey: "AIzaSyBDoF5ib6vf_GzSUdbQ0TnGLmyKIgOHsKE",
    authDomain: "basic-login-ccd1f.firebaseapp.com",
    databaseURL: "https://basic-login-ccd1f-default-rtdb.firebaseio.com",
    projectId: "basic-login-ccd1f",
    storageBucket: "basic-login-ccd1f.appspot.com",
    messagingSenderId: "379879408177",
    appId: "1:379879408177:web:c931cf7f5c402d7e02cb10"
  };

  firebase.initializeApp(firebaseConfig);

  function login(){
      uname_login= document.getElementById("name").value;
      pwd_login= document.getElementById("pwd").value;
      uname_db="" ;
      pwd_db= "";

      if(uname_login != uname_db || pwd_login != pwd_db){
          document.getElementById("error")= "Invalid Details, please try again";
            }
      else if(uname_login==uname_db && pwd_login==pwd_db){
        document.getElementById("error")= "Successfully logged in";
        window.location= "profile.html";
      }
  }

