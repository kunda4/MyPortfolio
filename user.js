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

const FormAdd = document.querySelector("#NewForm2");
const postContact = async (e) =>{
    e.preventDefault();
    const doc = {
        name: FormAdd.contactname.value,
        email: FormAdd.contactemail.value,
        querry: FormAdd.contactmessage.value,
    }
    await fetch("https://clear-trousers-mite.cyclic.app/api/v1/querries",{
        method: "POST",
        body: JSON.stringify(doc),
        headers: {"Content-Type" : "application/json"}
    });
     alert("your message sent successfully!!!")
     location.reload();
}
FormAdd && FormAdd.addEventListener("submit",postContact);

