// Books data
const books = [
  { title: "Mathematics", file: "books/math.pdf" },
  { title: "Physics", file: "books/physics.pdf" },
  { title: "Chemistry", file: "books/chemistry.pdf" }
];

const bookList = document.getElementById("bookList");

function displayBooks(filter = "") {
  bookList.innerHTML = "";
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(filter.toLowerCase())
  );

  filteredBooks.forEach(book => {
    const div = document.createElement("div");
    div.classList.add("book-item");
    div.innerHTML = `
      <div class="book-title">${book.title}</div>
      <div class="book-buttons">
        <a href="${book.file}" target="_blank">Open</a>
        <a href="${book.file}" download>Download</a>
      </div>
    `;
    bookList.appendChild(div);
  });
}

document.getElementById("searchInput").addEventListener("input", e => {
  displayBooks(e.target.value);
});

// Load all books on start
displayBooks();
