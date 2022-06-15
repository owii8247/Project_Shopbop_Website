
document.querySelector("form").addEventListener("submit", SaveUserInfo);
var UserData = JSON.parse(localStorage.getItem("UsersObj")) || [];

function SaveUserInfo(event) {
  event.preventDefault();

  var UserName = document.querySelector("#name").value;
  var UserEmail = document.querySelector("#email").value;
  var UserPass = document.querySelector("#pass").value;

  var UserDetails = {
    UserName: UserName,
    UserEmail: UserEmail,
    UserPass: UserPass,
  };

  UserData.push(UserDetails);
  localStorage.setItem("UsersObj", JSON.stringify(UserData));
  document.querySelector("#name").value = null;
  document.querySelector("#email").value = null;
  document.querySelector("#pass").value = null;
  document.querySelector("#Repass").value = null;

  alert("Congrats" + " " + UserName + " " + "You Account Created Successfully");
  window.location.href = "Login.html";
}