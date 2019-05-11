$(document).ready(function() {
  //MAKING A NEW POST=============================================================
  // Getting jQuery references to the post body, title, form, and category select
  var bodyInput = $("#body");
  var titleInput = $("#title");
  var cmsForm = $("#cms");
  // Adding an event listener for when the form is submitted
  $(cmsForm).on("submit", function handleFormSubmit(event) {
    event.preventDefault();
    // Wont submit the post if we are missing a body or a title
    if (!titleInput.val().trim() || !bodyInput.val().trim()) {
      alert("Please include both a title and body!");
      return;
    }
    // Constructing a newPost object to hand to the database
    var newPost = {
      title: titleInput.val().trim(),
      body: bodyInput.val().trim()
    };

    console.log(newPost);
    submitPost(newPost);
  });

  // Submits a new post and brings user to blog page upon completion
  function submitPost(Post) {
    $.post("/api/journal/", Post, function() {
      window.location.href = "/journal";
    });
  }
});

//DISPLAYING JOURNAL POSTS=============================================================
var journalContainer = $(".journal-container");

var posts;

// This function grabs posts from the database and updates the view
function getPosts() {
  $.get("/api/journal", function(data) {
    console.log("Posts", data);
    posts = data;
    if (!posts || !posts.length) {
      displayEmpty();
    } else {
      initializeRows();
    }
  });
}
getPosts();
// InitializeRows handles appending all of our constructed post HTML inside journal container
function initializeRows() {
  journalContainer.empty();
  var postsToAdd = [];
  for (var i = 0; i < posts.length; i++) {
    postsToAdd.push(createNewRow(posts[i]));
  }
  journalContainer.append(postsToAdd);
}
// This function constructs a post's HTML
function createNewRow(post) {
  var newPostCard = $("<div>");
  newPostCard.addClass("card");
  var newPostCardHeading = $("<div>");
  newPostCardHeading.addClass("card-header");
  var deleteBtn = $("<button>");
  deleteBtn.text("x");
  deleteBtn.addClass("delete btn btn-danger");
  var newPostTitle = $("<h2>");
  var newPostDate = $("<small>");
  var newPostCardBody = $("<div>");
  newPostCardBody.addClass("card-body");
  var newPostBody = $("<p>");
  newPostTitle.text(post.title + " ");
  newPostBody.text(post.body);
  var formattedDate = new Date(post.createdAt);
  newPostDate.text(formattedDate);
  newPostTitle.append(newPostDate);
  newPostCardHeading.append(deleteBtn);
  newPostCardHeading.append(newPostTitle);
  newPostCardBody.append(newPostBody);
  newPostCard.append(newPostCardHeading);
  newPostCard.append(newPostCardBody);
  newPostCard.data("post", post);
  return newPostCard;
}

// DELETING POSTS ~ API CALL
$(document).on("click", "button.delete", handlePostDelete);
function deletePost(id) {
  $.ajax({
    method: "DELETE",
    url: "/api/journal/" + id
  }).then(function() {
    getPosts();
  });
}

function handlePostDelete() {
  var currentPost = $(this)
    .parent()
    .parent()
    .data("post");
  deletePost(currentPost.id);
}

// This function displays a message when there are no posts
function displayEmpty() {
  journalContainer.empty();
  var messageH2 = $("<h2>");
  messageH2.css({ "text-align": "center", "margin-top": "50px" });
  messageH2.html("You haven't made any posts yet!");
  journalContainer.append(messageH2);
}
