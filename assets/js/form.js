const usernameInput = document.querySelector("#username");
const titleInput = document.querySelector("#blog-title");
const contentInput = document.querySelector("#blog-text");
const submitButton = document.querySelector("#submit-button");

submitButton.addEventListener("click", function (e) {
  // Stop page from attempting to post data
  e.preventDefault();

  const username = usernameInput.value;
  const title = titleInput.value;
  const content = contentInput.value;

  if (username && title && content) {
    // Wrap all entry data in an object
    const blogPost = {
      username: username,
      title: title,
      content: content,
    };

    // Getting post array from storage
    const postArrayString = localStorage.getItem("postArray");

    // If it does not exist yet, set it to an empty array
    if (!postArrayString) {
      postArray = [];
    } else {
      postArray = JSON.parse(postArrayString);
    }

    // Push the new post to array & save in local storage
    postArray.push(blogPost);
    localStorage.setItem("postArray", JSON.stringify(postArray));

    window.location.href = "blog.html";
  } else {
    alert("Please fill in missing fields.");
  }
});
