$(document).ready(function() {
  $("#animal").submit(function(event) {
    event.preventDefault();

    let userChoice = $("#animal-type").val();
    let animal = userChoice.toLowerCase();
    alert(animal);


  });
});