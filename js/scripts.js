$(document).ready(function(){ //Waits until the page is loaded to run JS
  $("form#survey").submit(function(event){ //Runs when th esubmit button is pressed
    event.preventDefault();
    var interests = $("#interests").val();
    var whichEnd = $("input:radio[name=whichEnd]:checked").val();
    var favLang = $("#favLang").val();
    var func = $("input:radio[name=func]:checked").val();
    var cpny = $("input:radio[name=cpny]:checked").val();

    if(interests == "0" && (whichEnd == "back" || func == "work")){
      alert("C#/.NET");
    }
    else if(interests == "1" && (whichEnd == "back" || func == "work")){
      alert("JAVA/Android");
    }
    else if(interests == "2" && (whichEnd == "back" || func == "work")){
      alert("PHP/Drupal");
    }
    else if(interests == "3" && (whichEnd == "back" || func == "work")){
      alert("RUBY/Rails");
    }
    else if(interests == "4" && (whichEnd == "front" || func == "pretty")){
      alert("CSS/Design");
    }
    else{
      alert("na")
    }
  });
});
