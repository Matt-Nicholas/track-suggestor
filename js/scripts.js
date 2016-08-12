$(document).ready(function(){ //Waits until the page is loaded to run JS
  var suggetion;
  $("form#survey").submit(function(event){ //Runs when the submit button is pressed
    event.preventDefault();

    var interests = $("#interests").val();
    var whichEnd = $("input:radio[name=whichEnd]:checked").val();
    var favLang = $("#favLang").val();
    var func = $("input:radio[name=func]:checked").val();
    var comp = $("input:radio[name=comp]:checked").val();

    if(interests == "0" && (whichEnd == "back" || func == "work")){
      localStorage.suggestion = "cSharp";
    }
    else if(interests == "1" && (whichEnd == "back" || func == "work")){
      localStorage.suggestion = "java";
    }
    else if(interests == "2" && (whichEnd == "back" || func == "work")){
      localStorage.suggestion = "php";
    }
    else if(interests == "3" && (whichEnd == "back" || func == "work")){
      localStorage.suggestion = "ruby";
    }
    else if(interests == "4" && (whichEnd == "front" || func == "pretty")){
      localStorage.suggestion = "css";
    }
    else{
      localStorage.suggestion = "none";
    }
  });

  $(".reveal").click(function(){ //Shows track suggestion when clicked
    if(localStorage.suggestion === "cSharp"){
      $(".cSharp").fadeToggle();
    }
    else if(localStorage.suggestion === "java"){
      $(".java").fadeToggle();
    }
    else if(localStorage.suggestion === "php"){
      $(".php").fadeToggle();
    }
    else if(localStorage.suggestion === "ruby"){
      $(".ruby").fadeToggle();
    }
    else if(localStorage.suggestion === "css"){
      $(".css").fadeToggle();
    }
    else if(localStorage.suggestion === "none"){
      $(".none").fadeToggle();
    }
  });
});
