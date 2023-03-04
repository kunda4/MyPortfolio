
const FormAdd = document.querySelector("#NewForm2");
const postContact = async (e) =>{
    e.preventDefault();
    const doc = {
        Name: FormAdd.contactname.value,
        Email: FormAdd.contactemail.value,
        Message: FormAdd.contactmessage.value,
    }
    await fetch("http://localhost:3000/Querries",{
        method: "POST",
        body: JSON.stringify(doc),
        headers: {"Content-Type" : "application/json"}
    });
    alert("your Message Sent successfully!!");
    
}
FormAdd && FormAdd.addEventListener("submit",postContact);

    
const fetchQuerry = async () => {
    const response = await fetch("http://localhost:3000/Querries");
    const Querries = await response.json();
    const ContactContainer = document.getElementById("Contactid");

   let templete = ""; 
   Querries.forEach((contact) =>{
    console.log(contact.Name);
    templete +=`

    <tr><td>${contact.id}</td>
    <td>${contact.Name}</td>
    <td>${contact.Email}</td>
    <td>${contact.Message}</td>
    <td><img src="/images/Vector (1).png" alt="" onClick= "deleteContact(${contact.id});"></td> </tr>

    `
   })
   if (ContactContainer) ContactContainer.innerHTML = templete;

}

const deleteContact = async(Contact_id)=>{
    await fetch(`http://localhost:3000/Querries/${Contact_id}`,{

        method: "DELETE",
    })
    return confirm("are you sure you want to delete this comments?");
}

 window.addEventListener("DOMContentLoaded", () => fetchQuerry());