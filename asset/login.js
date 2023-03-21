const form = document.getElementById("login-form");

// add event listen
form.addEventListener("submit", (e) => {
  e.preventDefault();
  //grad values
  const emailValue = document.getElementById("Email").value
  const passwordValue = document.getElementById("password").value
  const data = {Email: emailValue, password: passwordValue}

  // use fetch method to interact with your login api endpoint
  fetch('https://clear-trousers-mite.cyclic.app/api/v1/login', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then ((response) => response.json())
  .then((data) => {
    console.log(data)
    if (data.ok) {
      // set our token in LS
      localStorage.setItem("authToken", data.token)
      location.href="/dashboard.html"
    } else {
      alert(data.message)
    }
  })
  .catch(err => alert(err))
});