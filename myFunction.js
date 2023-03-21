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

const fetchBlog = async () => {
    const response = await fetch("https://clear-trousers-mite.cyclic.app/api/v1/blogs");
    const blogContainer = await response.json();
    const BlogsContainer = document.getElementById("Articleblog");

   let templete = "";
   blogContainer.data.forEach((blog, index) =>{
    console.log(index)
    templete +=`

    <tr><td>${index+1}</td>
    <td>${blog.name}</td>
    <td>${blog.description}</td>
    <td><img src="/images/Vector.png" alt="" onClick = "openModal('${blog._id}');">
    <img src="/images/Vector (1).png" alt="" onClick= "deleteBlog('${blog._id}');"></td> </tr>

    `
   })
   if (BlogsContainer) BlogsContainer.innerHTML = templete;

}

let Article_id = "";
const FormAdd = document.querySelector("#NewForm1");
const postBlog = async (e) =>{
    e.preventDefault();
    const doc = {
        name: FormAdd.blogtitle.value,
        description: FormAdd.blogdescription.value,
        author: "Admin",
        imageUrl: "image.png",
    }
    await fetch("https://clear-trousers-mite.cyclic.app/api/v1/blogs",{
        method: "POST",
        body: JSON.stringify(doc),
        headers: {"Content-Type" : "application/json", authorization:"Bearer "+token}
    });
    alert("your Article cleated successfully");
    location.replace("../dashupdate/dashupdate.html");
    
}
FormAdd && FormAdd.addEventListener("submit",postBlog);
    
// On Client Side
const fetchBlogDetails = async () => {
    const response = await fetch("https://clear-trousers-mite.cyclic.app/api/v1/blogs");
    const blogContainer = await response.json();
    const BlogsContainer = document.querySelector(".blogsone");
    console.log(BlogsContainer);
   let templete = "";
   blogContainer.data.forEach((blog) =>{
    console.log(blog.name)
    templete +=`
    
    <div class="blogs1">
            <h3>${blog.name}</h3>
            <p>${blog.description.slice(0, 400)}</p>
            
            <button type="submit" class="blogbutton"><a href="/BlogsDetails/details.html">Read More</a> </button>
        </div>

    `
   })
   if (BlogsContainer) BlogsContainer.innerHTML = templete;

}
fetchBlogDetails();


const deleteBlog = async(Blog_id)=>{
    await fetch(`https://clear-trousers-mite.cyclic.app/api/v1/blogs/delete/${Blog_id}`,{

        method: "DELETE",
        headers: { authorization:"Bearer "+token}
    })
    fetchBlog();
    alert("Blog deleted successfully!!!");
    
    
}

const modalBox = document.getElementById("modalBox");
const newForm = document.getElementById("newForm");
modalBox.style.display = "none";
const openModal = async(Blog_id)=>{
    const res = await fetch(`https://clear-trousers-mite.cyclic.app/api/v1/blogs/get/${Blog_id}`)
    let blog = await res.json();
    modalBox.style.display = "block";
    newForm.blogtitle.value = blog.data.name;
    newForm.blogdescription.value = blog.data.description;
    newForm.blog_id.value = blog.data._id;
    Article_id = blog.data._id;        
}
const updateBlog = async()=>{
    

   let blog_id = newForm.blog_id.value;
   const Post = {
    name: newForm.blogtitle.value,
    description: newForm.blogdescription.value,
}
 
    const res = await fetch(`https://clear-trousers-mite.cyclic.app/api/v1//blogs/update/${blog_id}`,{

        method:"PUT",
        headers: {
            "Content-Type": "application/json", authorization:"Bearer "+token
        },
        body:JSON.stringify(Post)
    })
    alert("Your blog has been updated successfully")
    location.reload();
}
