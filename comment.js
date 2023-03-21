const FormAdd = document.querySelector("#NewForm3");
const postComment = async (e) =>{
    e.preventDefault();
    const documnt = {
        name: FormAdd.commentname.value,
        comment: FormAdd.commentmessage.value,
    }
    await fetch("https://clear-trousers-mite.cyclic.app/api/v1/Comments",{
        method: "POST",
        body: JSON.stringify(documnt),
        headers: {"Content-Type" : "application/json"}
    });
     alert("you Commented successfully!!");  
     location.reload()
}
FormAdd && FormAdd.addEventListener("submit",postComment);

// on client side

const fetchCommentt = async () => {
    const response = await fetch("https://clear-trousers-mite.cyclic.app/api/v1/Comments");
    const Comments = await response.json();
    const CmntContainer = document.querySelector(".blogsdetailscomment");

   let templete = "";
   Comments.data.forEach((comnt) =>{
    console.log(comnt.name);
    templete +=`

    <div class="blogsdetailscomment">
        <h3>${comnt.name}</h3>
        <p>${comnt.comment}</p>
    </div>

    `
   })
   if (CmntContainer) CmntContainer.innerHTML = templete;

}
window.addEventListener("DOMContentLoaded", () => fetchCommentt());