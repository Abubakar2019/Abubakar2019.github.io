$(document).ready(function(){
    $("button").click(function(){
        $("#alert").hide();
        });
});

console.log('Welcome to capital quiz!');

function welcome() {
    let txt;
    let name = prompt("What is your name: ", "Enter your name");
    if (name == null || name == "") {
        txt = "Try again. Click the button";
    }   else{
        txt = "Welcome to capital quiz " + name + "!";
    }
    document.getElementById("alert").innerHTML = txt
}

$("button").click(function(){
    $.get("https://opentdb.com/api.php?amount=10&category=27&difficulty=medium", function(data){
      alert();
    });
  });

console.log(results[0])