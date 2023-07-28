function checkPswd() {
    var username = document.getElementById("usrname").value;
    var password = document.getElementById("pswd").value;
    if (username == "root" && password == "root") {
         window.location="indexM.html";
    }
    else if( username == "admin" && password == "admin") {
      window.location="indexM.html";
    // login Main
    }
    else if( username == "admin1" && password == "admin") {
      window.location="indexM.html";
    // login Main
    }
    else if( username == "admin2" && password == "admin") {
      window.location="indexM.html";
    // login Main
    }
    else if( username == "admin3" && password == "admin") {
      window.location="indexM.html";
    // login Main
    }
    else{
        alert("Passwords do not match.");
    }
}