const mainContainer = document.querySelector("main");
const backButton = document.querySelector("#back-button");

// Getting post array from storage
const postArrayString = localStorage.getItem("postArray");

// If it does not exist yet, set it to an empty array
if (!postArrayString) {
  postArray = [];
} else {
  postArray = JSON.parse(postArrayString);
}

for (post of postArray) {
  // Get post data from storage array
  const username = post.username;
  const title = post.title;
  const content = post.content;

  // Create HTML elements to render
  const postCard = document.createElement("div");
  const postTitle = document.createElement("h2");
  postTitle.textContent = title;
  postCard.appendChild(postTitle);
  const postUser = document.createElement("h3");
  postUser.textContent = `By ${username}`;
  postCard.appendChild(postUser);
  const postContent = document.createElement("p");
  postContent.textContent = content;
  postCard.appendChild(postContent);
  postCard.classList.add("card");

  // Appending div containing all new elements to main container
  mainContainer.appendChild(postCard);
}

backButton.addEventListener("click", function (e) {
  window.location.href = "index.html";
});
