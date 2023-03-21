const token = localStorage.getItem("token");
window.addEventListener("DOMContentLoaded", function () {
  if (!token) {
    window.location.replace("../login/login.html");
  } else{
    fetchBlog();
  }
});

function logout() {
  localStorage.removeItem("token");
   window.location.replace("../index.html");
}

const fetchComment = async () => {
    const response = await fetch("https://clear-trousers-mite.cyclic.app/api/v1/Comments");
    const Comments = await response.json();
    const CmntContainer = document.getElementById("Commentid");

   let templete = "";
   Comments.data.forEach((comnt, index) =>{
    console.log(index);
    templete +=`

    <tr><td>${index+1}</td>
    <td>${comnt.name}</td>
    <td>${comnt.comment}</td>
    <td><img src="/images/Vector (1).png" alt="" onClick= "deleteComment('${comnt._id}');"></td></tr>
    `
   })
   if (CmntContainer) CmntContainer.innerHTML = templete;

}
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
fetchCommentt();

const deleteComment = async(comnt_id)=>{
    await fetch(`https://clear-trousers-mite.cyclic.app/api/v1/Comments/delete/${comnt_id}`,{

        method: "DELETE",
        headers: {authorization:"Bearer "+token}
    })
    alert("Comment deleted successfully!!!");
    location.reload();
    
}

window.addEventListener("DOMContentLoaded", () => fetchComment());