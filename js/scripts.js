$(document).ready(function(){ //Waits until the page is loaded to run JS
  var suggetion;
  $("form#survey").submit(function(event){ //Runs when th esubmit button is pressed
    event.preventDefault();
    var interests = $("#interests").val();
    var whichEnd = $("input:radio[name=whichEnd]:checked").val();
    var favLang = $("#favLang").val();
    var func = $("input:radio[name=func]:checked").val();
    var cpny = $("input:radio[name=cpny]:checked").val();

    if(interests == "0" && (whichEnd == "back" || func == "work")){
      localStorage.suggestion = "cSharp";
    }
    else if(interests == "1" && (whichEnd == "back" || func == "work")){
      alert("JAVA/Android");
      localStorage.suggestion = "java";
    }
    else if(interests == "2" && (whichEnd == "back" || func == "work")){
      alert("PHP/Drupal");
      localStorage.suggestion = "php";
    }
    else if(interests == "3" && (whichEnd == "back" || func == "work")){
      alert("RUBY/Rails");
      localStorage.suggestion = "ruby";
    }
    else if(interests == "4" && (whichEnd == "front" || func == "pretty")){
      alert("CSS/Design");
      localStorage.suggestion = "css";
    }
    else{
      alert("none");
      localStorage.suggestion = "none";
    }


  });
  $(".reveal").click(function(){
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
