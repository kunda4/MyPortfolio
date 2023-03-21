// create a blog
const form = document.getElementById("NewForm1");

// add event listener to the form
form.addEventListener("submit", (event) => {
  event.preventDefault();
  // grab the values in our inputs
  const title = document.getElementById("blogtitle").value;
  const description = document.getElementById("blogdescription").value;

  // have our values in one object
  const data = { title, description };

  // interaction with the API endpoint
  fetch('https://clear-trousers-mite.cyclic.app/api/v1/blogs', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    if (data.ok){
      alert(data.message)}
     else {
      alert(data.errors.name)
    }
  })
  .catch(error => alert(error))
});