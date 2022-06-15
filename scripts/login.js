
document.getElementById("loginform").addEventListener("submit", UserLogin);

function UserLogin(event) {
  event.preventDefault();
  console.log("here")
  var signedupUsers = JSON.parse(localStorage.getItem("UsersObj"));
  var Email = document.querySelector("#CheckEmail").value;
  var pass = document.querySelector("#pass").value;

  var flag = false;
  var IsuserLoggedin = false;
  var LoggedUser = JSON.parse(localStorage.getItem("LoggedUser")) || [];
  for (var i = 0; i < signedupUsers.length; i++) {
    if (signedupUsers[i].UserEmail === Email) {
      if (signedupUsers[i].UserPass === pass) {
        alert(signedupUsers[i].UserName + " " + "Logged in Successfully");
        window.location.href = "index.html";
        
        LoggedUser.push(signedupUsers[i]);
        localStorage.setItem("LoggedUSer", JSON.stringify(LoggedUser));
        flag = true;
        IsuserLoggedin = true;
        document.querySelector("#email").value = null;
        document.querySelector("#pass").value = null;
      } else if (signedupUsers[i].UserPass !== pass) {
        alert("Enter Valid Password !");
        flag = true;
      }
    }
  }
  if (!flag) {
    alert("Enter Valid Email Address");
  }
}

document.querySelector("#create").addEventListener("click", Gotosigin);

function Gotosigin(){
  window.location.href = "Signup.html";
}