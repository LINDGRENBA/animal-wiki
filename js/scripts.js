$(document).ready(function() {

  $("img").click(function(){
    let animal = $(this).attr("id");

    if(animal === "snake-image") {
      $("#snake-info").show();
      $("#shark-info").hide();
      $("#owl-info").hide();
    } else if (animal === "owl-image") {
      $("#owl-info").show();
      $("#shark-info").hide();
      $("#snake-info").hide();
    }  else {
      $("#shark-info").show();
      $("#snake-info").hide();
      $("#owl-info").hide();
    }
  });
});

