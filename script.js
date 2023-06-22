// Get the form element
var form = document.getElementById("applicationForm");

// Add a submit event listener to the form
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get the form values
  var name = document.getElementById("name").value;
  var dob = document.getElementById("dob").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var skills = document.getElementById("skills").value;

  // Create a formatted output string
  var output =
    "<h3>Application Details:</h3>" +
    "<p><strong>Name:</strong> " + name + "</p>" +
    "<p><strong>Date of Birth:</strong> " + dob + "</p>" +
    "<p><strong>Email:</strong> " + email + "</p>" +
    "<p><strong>Phone:</strong> " + phone + "</p>" +
    "<p><strong>Skills:</strong> " + skills + "</p>";

  // Display the output
  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML = output;

  // Clear the form
  form.reset();
});
