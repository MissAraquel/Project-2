$(".submit").on("click", function (event) {
    event.preventDefault();

    // Here we grab the form elements
    var newProfile = {
        firstName: $("#firstName").val().trim(),
        lastName: $("#lasttName").val().trim(),
        email: $("#inputEmail").val().trim(),
        password: $("#inputPassword").val().trim(),
    };

    console.log(newProfile);

    $.post("/api/user", newProfile,
        function (data) {
            alert("Thank you for signing up, " + firstName + " !");

            // Clear the form when submitting
            $("#firstName").val("");
            $("#lasttName").val("");
            $("#inputEmail").val("");
            $("#inputPassword").val("");
    });
});


function createUser() {
    // The AJAX function uses the URL of our API to GET the data associated with it (initially set to localhost)
    $.ajax({ url: "/api/user", method: "GET" })
      .then(function(tableData) {

        // Here we then log the tableData to console, where it will show up as an object.
        console.log(tableData);
        console.log("------------------------------------");

        // Loop through and display each of the customers
        for (var i = 0; i < tableData.length; i++) {

          // Get a reference to the tableList element and populate it with tables
          var tableList = $("#tableList");

          // Then display the fields in the HTML (Section Name, Date, URL)
          var listUser = $("<li class='list-group-item mt-4'>");

          listItem.append(
            $("<h2>").text("Table #" + (i + 1)),
            $("<hr>"),
            $("<h2>").text("ID: " + tableData[i].firstName),
            $("<h2>").text("Name: " + tableData[i].lastName),
            $("<h2>").text("Email: " + tableData[i].email),
            $("<h2>").text("Phone: " + tableData[i].password)
          );

          tableList.append(listUser);
        }
      });
  }
