const submit_button = document.querySelector(".signupbutton");
submit_button.onclick = (e) =>{
    e.preventDefault();

    //All input data received this variables

    const fullName = document.getElementById("fullName").value;
    const email= document.getElementById("email").value;
    const pass = document.getElementById("pass").value;
    const cpass = document.getElementById("cpass").value;


//Now it's time to store it in local storage

localStorage.setItem('FullName',fullName);
localStorage.setItem('Email',email);
localStorage.setItem('Password',pass);
localStorage.setItem('CPassword',cpass);

// conditions

if(fullName == "" && email == "" && pass == "" && cpass == ""){
    alert("input has no value");
}
else if(pass !== cpass){
    alert("Password doesn't match");
}
else {
    alert('registration Successfully');
}
}
