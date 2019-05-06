$(document).ready(function() {
 
  var posts;

  // This function grabs journal entries from the database and updates the view
  function getPosts() {
    $.get("/api/journal", function(data) {
      console.log("Journal entries:", data);
      posts = data;
      if (!posts || !posts.length) {
        displayEmpty();
      } else {
        initializeRows();
      }
    });
  }

  // This function does an API call to delete entries
  function deletePost(id) {
    $.ajax({
      method: "DELETE",
      url: "/api/journal/" + id
    }).then(function() {
      getPosts();
    });
  }

  // Getting the initial list of entries
  getPosts();
  

 
