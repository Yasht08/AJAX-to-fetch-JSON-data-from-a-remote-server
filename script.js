function fetchAndDisplayBooks() {
    const bookList = document.getElementById("bookItems");
    bookList.innerHTML = "";

    fetch("https://raw.githubusercontent.com/Yasht08/AJAX-to-fetch-JSON-data-from-a-remote-server/main/Books.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            data.forEach((book) => {
                const listItem = document.createElement("li");
                listItem.classList.add("book-item");

                const titleElement = document.createElement("h3");
                titleElement.textContent = book.title;

                const detailsElement = document.createElement("div");
                detailsElement.classList.add("book-details");

                const authorElement = document.createElement("span");
                authorElement.classList.add("author");
                authorElement.textContent = `Author: ${book.author}`;

                const descriptionElement = document.createElement("p");
                descriptionElement.classList.add("description");
                descriptionElement.textContent = book.description;

                detailsElement.appendChild(authorElement);
                detailsElement.appendChild(descriptionElement);
                listItem.appendChild(titleElement);
                listItem.appendChild(detailsElement);

                bookList.appendChild(listItem);
            });
        })
        .catch((error) => {
            console.error("Error fetching or parsing JSON:", error);
        });
}

document.getElementById("fetchBooks").addEventListener("click", fetchAndDisplayBooks);
