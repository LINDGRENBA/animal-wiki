$(document).ready(function() {
  $("#animal").submit(function(event) {
    event.preventDefault();

    let userChoice = $("#animal-type").val();
    let animal = userChoice.toLowerCase();

      if(animal === "snake") {
        $("#snake-info").show();
        $("#shark-info").hide();
        $("#owl-info").hide();
      } else if(animal === "owl") {
        $("#owl-info").show();
        $("#shark-info").hide();
        $("#snake-info").hide();
      } else {
        $("#shark-info").show();
        $("#snake-info").hide();
        $("#owl-info").hide();
      }

  });
});
