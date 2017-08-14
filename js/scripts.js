$(document).ready(function() {
  $("#groceries").submit(function(event){
  event.preventDefault();


  var groceries = ["sentence"];


var upperCase = groceries.map(function(thing) {
  var userGrocery = ($ ("#" + thing).val()).toUpperCase();
return userGrocery;
});
upperCase.sort();

upperCase.forEach(function(stuff) {
  $("#results").append("<li>" + stuff + "</li>");
});

event.preventDefault();
});
});
