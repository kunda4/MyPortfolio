const loginbutton = document.querySelector(".loginbutton");
loginbutton.onclick = (e) =>{
    e.preventDefault();

    //Cautch the value

    const emailAddress= document.getElementById("Email").value;
    const passWord = document.getElementById("password").value;

// Get value in storage

const Email = localStorage.getItem("Email");
const Password = localStorage.getItem("Password");
  
// conditions

if(emailAddress == "" && passWord == "" ){
    alert("Enter email and password");
}
else if(emailAddress == Email && passWord == Password){
    alert("Login Successfully");
    window.location = "/Dashboardone/dashone.html";
}  
else {
    alert("Your Email or Password are incorect");
}

}
