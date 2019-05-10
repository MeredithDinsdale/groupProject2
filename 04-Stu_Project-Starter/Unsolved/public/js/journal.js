$(document).ready(function() {
  // Getting jQuery references to the post body, title, form, and author select
  var bodyInput = $("#body");
  var titleInput = $("#title");
  var journalForm = $("#new-entry");

  // Adding an event listener for when the form is submitted
  $(journalForm).on("submit", handleFormSubmit);
  // Gets the part of the url that comes after the "?" (which we have if we're updating a post)
  var url = window.location.search;
  var postId;

  // Sets a flag for whether or not we're updating a post to be false initially
  var updating = false;

  // A function for handling what happens when the form to create a new post is submitted
  function handleFormSubmit(event) {
    event.preventDefault();
    // Wont submit the post if we are missing a body, title, or author
    if (!titleInput.val().trim() || !bodyInput.val().trim()) {
      return;
    }
    // Constructing a newPost object to hand to the database
    var newPost = {
      title: titleInput.val().trim(),
      body: bodyInput.val().trim()
    };

    // If we're updating a post run updatePost to update a post
    // Otherwise run submitPost to create a whole new post
    if (updating) {
      newPost.id = journalId;
      updatePost(newPost);
    } else {
      submitPost(newPost);
    }
  }

  // Submits a new post and brings user to blog page upon completion
  function submitPost(post) {
    $.post("/api/journal", post, function() {
      window.location.href = "/journal";
    });
  }

  // Gets post data for the current post if we're editing, or if we're adding to an author's existing posts
  function getPostData(id, type) {
    var queryUrl;
    switch (type) {
      case "journal":
        queryUrl = "/api/journal/" + id;
        break;
      default:
        return;
    }
    $.get(queryUrl, function(data) {
      if (data) {
      
        titleInput.val(data.title);
        bodyInput.val(data.body);

        // If we have a post with this id, set a flag for us to know to update the post
        // when we hit submit
        updating = true;
      }
    });
  }



  // Update a given post, bring user to the blog page when done
  function updatePost(post) {
    $.ajax({
      method: "PUT",
      url: "/api/journal",
      data: journal
    }).then(function() {
      window.location.href = "/blog";
    });
  }
});

// $(document).ready(function() {
//   var journalContainer = $(".journal-container");
//   // Click events for the edit and delete buttons
//   $(document).on("click", "button.delete", handlePostDelete);
//   $(document).on("click", "button.edit", handlePostEdit);
//   var posts;

//   // This function grabs journal entries from the database and updates the view
//   function getPosts() {
//     $.get("/api/journal", function(data) {
//       console.log("Journal entries:", data);
//       posts = data;
//       if (!posts || !posts.length) {
//         displayEmpty();
//       } else {
//         initializeRows();
//       }
//     });
//   }

//   // This function does an API call to delete entries
//   function deletePost(id) {
//     $.ajax({
//       method: "DELETE",
//       url: "/api/journal/" + id
//     }).then(function() {
//       getPosts();
//     });
//   }

//   // Getting the initial list of entries
//   getPosts();
