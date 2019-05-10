$(document).ready(function() {
  // Getting references to our form and input
  var signUpForm = $(".signup");
  var nameInput = $("#name-input");
  var emailInput = $("#email-input");
  var passwordInput = $("#password-input");
  var macInput = $("#mac-input");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      mac: macInput.val().trim()
    };

    if (!userData.email || !userData.password || !userData.mac) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.email, userData.password, userData.mac);

    nameInput.val("");
    emailInput.val("");
    passwordInput.val("");
    macInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, password, mac) {
    $.post("/api/signup", {
      email: email,
      password: password,
      mac: mac
    })
      .then(function(res) {
        console.log(res);
        //window.location.replace(data);

        //window.location.href = "/login";
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(function(err) {
        console.log(err.status);
        if (err.status === 409) {
          alert("That Email or Sensor Code is already taken");
        }
      });
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
