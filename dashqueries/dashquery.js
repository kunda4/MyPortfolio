const token = localStorage.getItem("token");
window.addEventListener("DOMContentLoaded", function () {
  if (!token) {
    window.location.replace("../login/login.html");
  } else{
    fetchQuerry();
  }
});

function logout() {
    localStorage.removeItem("token");
     window.location.replace("../index.html");
  }
    
const fetchQuerry = async () => {
    const response = await fetch("https://clear-trousers-mite.cyclic.app/api/v1/querries");
    const Querries = await response.json();
    const ContactContainer = document.getElementById("Contactid");

   let templete = ""; 
   Querries.data.forEach((contact, index) =>{
    console.log(index);
    templete +=`

    <tr><td>${index+1}</td>
    <td>${contact.name}</td>
    <td>${contact.email}</td>
    <td>${contact.querry}</td>
    <td><img src="/images/Vector (1).png" alt="" onClick= "deleteContact('${contact._id}');"></td> </tr>

    `
   })
   if (ContactContainer) ContactContainer.innerHTML = templete;

}

const deleteContact = async(Contact_id)=>{
    await fetch(`https://clear-trousers-mite.cyclic.app/api/v1/querries/delete/${Contact_id}`,{

        method: "DELETE",
        headers: {authorization:"Bearer "+token}
    })
    alert("message deleted successfully!!!");
    location.reload();
}

 window.addEventListener("DOMContentLoaded", () => fetchQuerry());