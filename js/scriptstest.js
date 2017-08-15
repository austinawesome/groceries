$(document).ready(function() {
  $("#groceries").submit(function(event) {

event.preventDefault();

    var groceries = $("#sentence").val().toUpperCase().split(" ");
// $(#sentence===whatiditwanted)its value. madeuppercase. split at this value (" ") split made it an arrayy!!!!//

    //above is grabbing input form values
    groceries.sort();
//this alphabetizes
alert(groceries)
groceries.forEach(function(stuff) {
      $("#results").append("<li>" + stuff + "</li>");
//this spits stuff out in listed sequence
    });

  });
});
