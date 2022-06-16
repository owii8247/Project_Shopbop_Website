
let login=async()=>{
  let user_data={
      username:document.getElementById("username").value,
      password:document.getElementById("password").value,
   }
   user_data=JSON.stringify(user_data)
   let res=await fetch("https://masai-api-mocker.herokuapp.com/auth/login",{
       method:"POST",
       body:user_data,
       headers:{
           "Content-Type":"application/json",
       },
   });

   let data= await res.json();
   let username=document.getElementById("username").value
   getUserDetail(username,data.token);
   console.log(data)
   if(data.error==true){
      alert("Wrong Credentials !! Check Your Details")
  }
  else{
      alert("Congrats" + " " + username + " " + "Account Loged In Successfully")
      window.location.href="index.html"
  }
};

document.getElementById("submit").addEventListener("click",login)

let getUserDetail=async(username,token)=>{
  let res=await fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`,{
   headers:{
        Authorization: `Bearer ${token}`,
    },
  });
let data=await res.json();   
console.log("user_data",data) 
localStorage.setItem("username",JSON.stringify(data))

};
