let Article_id = "";
const FormAdd = document.querySelector("#NewForm1");
const postBlog = async (e) =>{
    e.preventDefault();
    const doc = {
        Title: FormAdd.blogtitle.value,
        Description: FormAdd.blogdescription.value,
    }
    await fetch("http://localhost:3000/blogContainer",{
        method: "POST",
        body: JSON.stringify(doc),
        headers: {"Content-Type" : "application/json"}
    });
    alert("your Article cleated successfully");
    
}
FormAdd && FormAdd.addEventListener("submit",postBlog);
    

const fetchBlog = async () => {
    const response = await fetch("http://localhost:3000/blogContainer");
    const blogContainer = await response.json();
    const BlogsContainer = document.getElementById("Articleblog");

   let templete = "";
   blogContainer.forEach((blog) =>{
    console.log(blog.title)
    templete +=`

    <tr><td>${blog.id}</td>
    <td>${blog.Title}</td>
    <td>${blog.Description}</td>
    <td><img src="/images/Vector.png" alt="" onClick = "openModal(${blog.id});">
    <img src="/images/Vector (1).png" alt="" onClick= "deleteBlog(${blog.id});"></td> </tr>

    `
   })
   if (BlogsContainer) BlogsContainer.innerHTML = templete;

}
// On Client Side
const fetchBlogDetails = async () => {
    const response = await fetch("http://localhost:3000/blogContainer");
    const blogContainer = await response.json();
    const BlogsContainer = document.querySelector(".blogsone");
    console.log(BlogsContainer);
   let templete = "";
   blogContainer.forEach((blog) =>{
    console.log(blog.title)
    templete +=`
    
    <div class="blogs1">
            <h3>${blog.Title}</h3>
            <p>${blog.Description.slice(0, 400)}</p>
            
            <button type="submit" class="blogbutton"><a href="/BlogsDetails/details.html">Read More</a> </button>
        </div>

    `
   })
   if (BlogsContainer) BlogsContainer.innerHTML = templete;

}
fetchBlogDetails();


const deleteBlog = async(Blog_id)=>{
    await fetch(`http://localhost:3000/blogContainer/${Blog_id}`,{

        method: "DELETE",
    })
    return confirm("are you sure you want to delete this comments?");
    
}

const modalBox = document.getElementById("modalBox");
const newForm = document.getElementById("newForm");
modalBox.style.display = "none";
const openModal = async(Blog_id)=>{
    const res = await fetch(`http://localhost:3000/blogContainer/${Blog_id}`)
    let blog = await res.json();
    modalBox.style.display = "block";
    newForm.blogtitle.value = blog.Title;
    newForm.blogdescription.value = blog.Description;
    newForm.blog_id.value = blog.id;
    Article_id = blog.id;        
}
const updateBlog = async()=>{
    const Post = {
        Title: newForm.blogtitle.value,
        Description: newForm.blogdescription.value,
    }

   let  Title = newForm.blogtitle.value;
   let  Description = newForm.blogdescription.value;
   let blog_id = newForm.blog_id.value;

  
    const res = await fetch(`http://localhost:3000/blogContainer/${blog_id}`,{

        method:"PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body:JSON.stringify(Post)
    })
    alert("Your blog has been updated successfully")
}

 window.addEventListener("DOMContentLoaded", () => fetchBlog());