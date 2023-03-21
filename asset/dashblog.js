const bookTable = document.getElementById("book-table")

// interacting with our getbooks endpoint
fetch('http://localhost:4000/api/v1/books')
.then((response) => response.json())
.then((books) => {
  console.log(books)
  books.data.forEach(book => {
    const row = document.createElement("tr")
    const nameCell = document.createElement("td");
    const authorCell = document.createElement("td")
    const actionsCell = document.createElement("td")

    const deleteButton = document.createElement("button")

    // assign values to the cells
    nameCell.textContent = book.name;
    authorCell.textContent = book.author;
    deleteButton.textContent = "Remove"

    actionsCell.appendChild(deleteButton)

    // append rows
    row.appendChild(nameCell)
    row.appendChild(authorCell)
    row.appendChild(actionsCell)

    // append table body
    bookTable.querySelector("tbody").appendChild(row)

    deleteButton.addEventListener("click", () => {
      deleteBook(book._id)
    })
  })
})
.cath(err => alert(err))

function deleteBook(bookId) {
  fetch('http://localhost:4000/api/v1/books', {
    method: "DELETE"
  })
  .then((response) => response.json())
  .then((data) => {
    // functionalities of delete
  });
}
