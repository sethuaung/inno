function checkPswd() {
    var username = document.getElementById("usrname").value;
    var password = document.getElementById("pswd").value;
    if (username == "rootM" && password == "rootM") {
         window.location="indexM.html";
    }
    else if( username == "icmit" && password == "icmit") {
      window.location.href="https://sites.google.com/view/innocmf/";
    // login Google Site - IT Staff
    }
    else if( username == "root" && password == "root") {
      window.location="index-sysM.html";
    // login Main - System Admin
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