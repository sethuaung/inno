function checkPswd() {
    var username = document.getElementById("usrname").value;
    var password = document.getElementById("pswd").value;
    if (username == "rootM" && password == "rootM") {
         window.location="indexM.html";
    }
    else if( username == "icm1" && password == "icm1") {
      window.location.href="https://sites.google.com/view/innocmf/career";
    // login Google Site - External
    }
    else if( username == "icmfadmin" && password == "icmfadmin") {
      window.location.href="https://sites.google.com/view/innocmf/career/exam-records";
    // login Main - Exam Records
    }
    else if( username == "icmit" && password == "icmit") {
      window.location.href="https://sites.google.com/view/innocmf/it-team-reports";
    // login Main - IT Team Reports
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