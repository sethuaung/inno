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
    else if( username == "admin1" && password == "admin1") {
        window.location="indexC1.html";
      // login Formdata
    }
    else if( username == "admin2" && password == "admin2") {
        window.location="indexC2.html";
      // login Meeting
    }
    else if( username == "sgadmin@smilax.com" && password == "sgadmin") {
      window.location="https://sites.google.com/view/smilaxglobal/";
    // login SG-GoogleSite
    }
    else if( username == "ms" && password == "sshrm") {
      window.location="http://sky.smilaxhr.com/Secure/Login";
    // Mingalar Sky login SSHRM
    }
    else if( username == "acn" && password == "sshrm") {
      window.location="https://acn.smilaxhr.com/Secure/LogIn";
    // ACN login SSHRM
    }
    else if( username == "app" && password == "sshrm") {
      window.location="http://app.smilaxhr.com/Secure/LogIn";
    // APP login SSHRM
    }
    else if( username == "ocn" && password == "sshrm") {
      window.location="http://ocn.smilaxhr.com/Secure/LogIn";
    // OCN login SSHRM
    }

    else{
        alert("Passwords do not match.");
    }
}