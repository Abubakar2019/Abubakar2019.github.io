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

function createRadio() {
    var x = document.createElement("INPUT");
    x.setAttribute("type", "radio");
    document.body.appendChild(x);
}

$.get("https://opentdb.com/api.php?amount=10&category=27&difficulty=medium", function(data){
        $("#q1").text( 'Question 1: '+ data.results[0].question) 
            if (data.results.length = 1) {
                $("#q1a").text( 'A: '+ data.results[0].incorrect_answers[2])
                $("#q1b").text( 'B: '+ data.results[0].correct_answer[0])
            } else {
                $("#q1a").text( 'A: '+ data.results[0].incorrect_answers[2])
                $("#q1b").text( 'B: '+ data.results[0].correct_answer[0])
                $("#q1c").text( 'C: '+ data.results[0].incorrect_answers[0])
                $("#q1d").text( 'D: '+ data.results[0].incorrect_answers[1])
            }
    });
