let register=async (e)=>{
  e.preventDefault();

  let form_data={
      name:document.getElementById("name").value,
      email:document.getElementById("email").value,
      password:document.getElementById("password").value,
      username:document.getElementById("username").value,
      mobile:document.getElementById("mobile").value,
      description:document.getElementById("description").value,

  };
//   console.log(form_data)
form_data=JSON.stringify(form_data);

let res= await fetch("https://masai-api-mocker.herokuapp.com/auth/register",{
    method: "POST",
    // mode:"no-cors",          
    body : form_data,
    headers:{
        "Content-Type":"application/json",
    },
});
let data=await res.json();
console.log(data)
if(data.error===true){
    alert("User already exist")
    window.location.reload()
}
else{
    alert("Congrats" + " " + user.name + " " + "Account Created Successfully")
    window.location.href ="./login.html"
}
    
};
document.getElementById("submit").addEventListener("click",register)