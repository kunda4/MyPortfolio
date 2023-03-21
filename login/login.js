const loginbutton = document.querySelector(".loginbutton");
loginbutton.onclick = (e) =>{
    e.preventDefault();

    //Cautch the value

    const emailAddress= document.getElementById("email").value;
    const passWord = document.getElementById("password").value;


// conditions

if(emailAddress == "" || passWord == "" ){
    alert("Fill all input required!");
}
 
else {
        fetch("https://clear-trousers-mite.cyclic.app/api/v1/login",{
        method: "POST",
        body: JSON.stringify({
            email: emailAddress,
            password: passWord
        }),
        headers: {"Content-Type" : "application/json"}
    }).then((res)=> res.json()).then((user)=>{
        if(user.token){
            localStorage.setItem("token", user.token);
            location.replace("../Dashboardone/dashone.html");
        }else{
            alert(user.message);
        }

    }).catch(err=>console.log(err));
}

}
