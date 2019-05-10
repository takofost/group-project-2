$("#add-student").on("click", function(event) {
  event.preventDefault();
  console.log("Testing in add button");
  addStudent();
  function addStudent() {
    // make a newAccount obj
    var newItem = {
      first_name: $("#inputFirst")
        .val()
        .trim(),
      last_name: $("#inputLast")
        .val()
        .trim(),
      street: $("#inputStreet")
        .val()
        .trim(),
      city: $("#inputCity")
        .val()
        .trim(),
      state: $("#inputState")
        .val()
        .trim(),
      zip: $("#inputZip")
        .val()
        .trim(),
      role: $("#inputRole")
        .val()
        .trim(),
      email: $("#inputEmail")
        .val()
        .trim(),
      phone: $("#inputPhone")
        .val()
        .trim()
    };

    // send an AJAX POST-request with jQuery
    $.post("/add-students/new", newItem).then(function(data) {
      // log the data we found
      console.log(data);
      // tell the user we're adding a  with an alert window
      alert("Adding...");
    });

    // empty each input box by replacing the value with an empty string

    $("#inputFirst").val("");
    $("#inputLast").val("");
    $("#inputStreet").val("");
    $("inputCity").val("");
    $("#inputState").val("");
    $("#inputZip").val("");
    $("#inputRole").val();
    $("#inputEmail").val();
    $("#inputPhone").val();
  }
});
