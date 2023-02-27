
const FormAdd = document.querySelector("#NewForm3");
const postComment = async (e) =>{
    e.preventDefault();
    const documnt = {
        Name: FormAdd.commentname.value,
        Comment: FormAdd.commentmessage.value,
    }
    await fetch("http://localhost:3000/Comments",{
        method: "POST",
        body: JSON.stringify(documnt),
        headers: {"Content-Type" : "application/json"}
    });
     alert("you Commented successfully!!");  
}
FormAdd && FormAdd.addEventListener("submit",postComment);

const fetchBlog = async () => {
    const response = await fetch("http://localhost:3000/Comments");
    const Comments = await response.json();
    const CmntContainer = document.getElementById("Commentid");

   let templete = "";
   Comments.forEach((comnt) =>{
    console.log(comnt.Name);
    templete +=`

    <tr><td>${comnt.id}</td>
    <td>${comnt.Name}</td>
    <td>${comnt.Comment}</td>
    <td><img src="/images/Vector (1).png" alt="" onClick= "deleteComment(${comnt.id});"></td></tr>
    `
   })
   if (CmntContainer) CmntContainer.innerHTML = templete;

}

const deleteComment = async(comnt_id)=>{
    await fetch(`http://localhost:3000/Comments/${comnt_id}`,{

        method: "DELETE",
    })
}

window.addEventListener("DOMContentLoaded", () => fetchBlog());