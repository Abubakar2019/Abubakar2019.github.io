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

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

//Animals quiz content

$.get("https://opentdb.com/api.php?amount=10&category=27&difficulty=medium", function(data){
    for (let question = 0; question < 10; question++) {

        $("#q" + (question + 1)).text( 'Question ' + (question + 1) + ': ' + data.results[question].question) 
       
        let allAnswers = [data.results[question].correct_answer , data.results[question].incorrect_answers[0], data.results[question].incorrect_answers[1], data.results[question].incorrect_answers[2]]
            //console.log(allAnswers)
            shuffle(allAnswers)
            //console.log(allAnswers)

        for (let index = 0; index < 4; index++) {

            let text = (index + 1) + '. ' + allAnswers[index];
            let name = 'RadioButton'; // + (index + 1);
            let id = data.results[0].question + index;

            let row = document.createElement('div');
            document.body.appendChild(row);
            
            let radioBut = document.createElement('input');
            radioBut.setAttribute('type', 'radio');
            radioBut.setAttribute('name', name);
            radioBut.setAttribute('id', id);
            row.appendChild(radioBut);
          
            let label = document.createElement('label');
            label.setAttribute('for', id);
            label.innerHTML = text;
            row.appendChild(label);
          }
    }      
});
