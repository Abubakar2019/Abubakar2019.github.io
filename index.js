$(document).ready(function () {
    $("button").click(function () {
        $("#alert").hide();
    });
});

console.log('Welcome to capital quiz!');

function welcome() {
    let txt;
    let name = prompt("What is your name: ", "Enter your name");
    if (name == null || name == "") {
        txt = "Try again. Click the button";
    } else {
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

function refresh() {
    window.location.reload()
}

//Animals quiz content
$.get("https://opentdb.com/api.php?amount=10&category=27&difficulty=medium&type=multiple", function (data) {
    for (let question = 0; question < 10; question++) {
        document.getElementById("animalsq" + (question + 1)).innerHTML = ('Question ' + (question + 1) + ': ' + data.results[question].question)

        let allAnswers = [data.results[question].correct_answer, data.results[question].incorrect_answers[0], data.results[question].incorrect_answers[1], data.results[question].incorrect_answers[2]]
        //console.log(allAnswers)
        shuffle(allAnswers)
        //console.log(allAnswers)

        for (let index = 0; index < 4; index++) {

            let text = (index + 1) + '. ' + allAnswers[index];
            let name = 'animalsRadioButton' + (question + 1); // + (index + 1);
            let id = data.results[question].question + index;

            let row = document.getElementById("animalsa" + (question + 1));

            let radioBut = document.createElement('input');
            radioBut.className = 'animalsRadioButton' + (question + 1)
            radioBut.setAttribute('type', 'radio');
            radioBut.setAttribute('name', name);
            radioBut.setAttribute('id', id);
            radioBut.setAttribute('value', allAnswers[index]);
            row.appendChild(radioBut);

            let label = document.createElement('label');
            label.setAttribute('for', id);
            label.setAttribute('id', id)
            label.innerHTML = text;
            row.appendChild(label);
        }
    }

    document.getElementById("submit").onclick = function () {
        answered = true
        for (let question = 0; question < 10; question++) {
            let userChoice = $("#animalsa" + (question + 1)).find("input:checked");
            let question_text = document.getElementById("animalsq" + (question + 1));
            if (userChoice.length == 0) {
                answered = false
            }
        }

        if (!answered) {
            alert("You have unanswered questions. Please select an answer for each question and try again!");
            return
        } else {
            let score = 0;
            for (let question = 0; question < 10; question++) {
                let userChoice = $("#animalsa" + (question + 1)).find("input:checked").val();
                let question_text = document.getElementById("animalsq" + (question + 1));
                if (userChoice == (data.results[question].correct_answer)) {
                    question_text.style = "color: green;";
                    score += 1
                } else {
                    question_text.style = "color: red;";
                };
            }
            alert('You have scored: ' + score);
        }
    }
});


//Art quiz content
$.get("https://opentdb.com/api.php?amount=10&category=25&type=multiple", function (data) {
    for (let question = 0; question < 10; question++) {
        document.getElementById("artq" + (question + 1)).innerHTML = ('Question ' + (question + 1) + ': ' + data.results[question].question)

        let allAnswers = [data.results[question].correct_answer, data.results[question].incorrect_answers[0], data.results[question].incorrect_answers[1], data.results[question].incorrect_answers[2]]
        //console.log(allAnswers)
        shuffle(allAnswers)
        //console.log(allAnswers)

        for (let index = 0; index < 4; index++) {

            let text = (index + 1) + '. ' + allAnswers[index];
            let name = 'artRadioButton' + (question + 1); // + (index + 1);
            let id = data.results[question].question + index;

            let row = document.getElementById("arta" + (question + 1));

            let radioBut = document.createElement('input');
            radioBut.className = 'artRadioButton' + (question + 1)
            radioBut.setAttribute('type', 'radio');
            radioBut.setAttribute('name', name);
            radioBut.setAttribute('id', id);
            radioBut.setAttribute('value', allAnswers[index]);
            row.appendChild(radioBut);

            let label = document.createElement('label');
            label.setAttribute('for', id);
            label.setAttribute('id', id)
            label.innerHTML = text;
            row.appendChild(label);
        }
    }

    document.getElementById("submit").onclick = function () {
        answered = true
        for (let question = 0; question < 10; question++) {
            let userChoice = $("#arta" + (question + 1)).find("input:checked");
            let question_text = document.getElementById("artq" + (question + 1));
            if (userChoice.length == 0) {
                answered = false
            }
        }

        if (!answered) {
            alert("You have unanswered questions. Please select an answer for each question and try again!");
            return
        } else {
            let score = 0;
            for (let question = 0; question < 10; question++) {
                let userChoice = $("#arta" + (question + 1)).find("input:checked").val();
                let question_text = document.getElementById("artq" + (question + 1));
                if (userChoice == (data.results[question].correct_answer)) {
                    question_text.style = "color: green;";
                    score += 1
                } else {
                    question_text.style = "color: red;";
                };
            }
            alert('You have scored: ' + score);
        }
    }
})

//Books quiz content
$.get("https://opentdb.com/api.php?amount=10&category=25&type=multiple", function (data) {
    for (let question = 0; question < 10; question++) {
        document.getElementById("booksq" + (question + 1)).innerHTML = ('Question ' + (question + 1) + ': ' + data.results[question].question)

        let allAnswers = [data.results[question].correct_answer, data.results[question].incorrect_answers[0], data.results[question].incorrect_answers[1], data.results[question].incorrect_answers[2]]
        //console.log(allAnswers)
        shuffle(allAnswers)
        //console.log(allAnswers)

        for (let index = 0; index < 4; index++) {

            let text = (index + 1) + '. ' + allAnswers[index];
            let name = 'booksRadioButton' + (question + 1); // + (index + 1);
            let id = data.results[question].question + index;

            let row = document.getElementById("booksa" + (question + 1));

            let radioBut = document.createElement('input');
            radioBut.className = 'booksRadioButton' + (question + 1)
            radioBut.setAttribute('type', 'radio');
            radioBut.setAttribute('name', name);
            radioBut.setAttribute('id', id);
            radioBut.setAttribute('value', allAnswers[index]);
            row.appendChild(radioBut);

            let label = document.createElement('label');
            label.setAttribute('for', id);
            label.setAttribute('id', id)
            label.innerHTML = text;
            row.appendChild(label);
        }
    }

    document.getElementById("submit").onclick = function () {
        answered = true
        for (let question = 0; question < 10; question++) {
            let userChoice = $("#booksa" + (question + 1)).find("input:checked");
            let question_text = document.getElementById("booksq" + (question + 1));
            if (userChoice.length == 0) {
                answered = false
            }
        }

        if (!answered) {
            alert("You have unanswered questions. Please select an answer for each question and try again!");
            return
        } else {
            let score = 0;
            for (let question = 0; question < 10; question++) {
                let userChoice = $("#booksa" + (question + 1)).find("input:checked").val();
                let question_text = document.getElementById("booksq" + (question + 1));
                if (userChoice == (data.results[question].correct_answer)) {
                    question_text.style = "color: green;";
                    score += 1
                } else {
                    question_text.style = "color: red;";
                };
            }
            alert('You have scored: ' + score);
        }
    }
})


//Film quiz content 
$.get("https://opentdb.com/api.php?amount=10&category=25&type=multiple", function (data) {
    for (let question = 0; question < 10; question++) {
        document.getElementById("filmq" + (question + 1)).innerHTML = ('Question ' + (question + 1) + ': ' + data.results[question].question)

        let allAnswers = [data.results[question].correct_answer, data.results[question].incorrect_answers[0], data.results[question].incorrect_answers[1], data.results[question].incorrect_answers[2]]
        //console.log(allAnswers)
        shuffle(allAnswers)
        //console.log(allAnswers)

        for (let index = 0; index < 4; index++) {

            let text = (index + 1) + '. ' + allAnswers[index];
            let name = 'filmRadioButton' + (question + 1); // + (index + 1);
            let id = data.results[question].question + index;

            let row = document.getElementById("filma" + (question + 1));

            let radioBut = document.createElement('input');
            radioBut.className = 'filmRadioButton' + (question + 1)
            radioBut.setAttribute('type', 'radio');
            radioBut.setAttribute('name', name);
            radioBut.setAttribute('id', id);
            radioBut.setAttribute('value', allAnswers[index]);
            row.appendChild(radioBut);

            let label = document.createElement('label');
            label.setAttribute('for', id);
            label.setAttribute('id', id)
            label.innerHTML = text;
            row.appendChild(label);
        }
    }

    document.getElementById("submit").onclick = function () {
        answered = true
        for (let question = 0; question < 10; question++) {
            let userChoice = $("#filma" + (question + 1)).find("input:checked");
            let question_text = document.getElementById("filmq" + (question + 1));
            if (userChoice.length == 0) {
                answered = false
            }
        }

        if (!answered) {
            alert("You have unanswered questions. Please select an answer for each question and try again!");
            return
        } else {
            let score = 0;
            for (let question = 0; question < 10; question++) {
                let userChoice = $("#filma" + (question + 1)).find("input:checked").val();
                let question_text = document.getElementById("filmq" + (question + 1));
                if (userChoice == (data.results[question].correct_answer)) {
                    question_text.style = "color: green;";
                    score += 1
                } else {
                    question_text.style = "color: red;";
                };
            }
            alert('You have scored: ' + score);
        }
    }
})


//History quiz content 
$.get("https://opentdb.com/api.php?amount=10&category=25&type=multiple", function (data) {
    for (let question = 0; question < 10; question++) {
        document.getElementById("historyq" + (question + 1)).innerHTML = ('Question ' + (question + 1) + ': ' + data.results[question].question)

        let allAnswers = [data.results[question].correct_answer, data.results[question].incorrect_answers[0], data.results[question].incorrect_answers[1], data.results[question].incorrect_answers[2]]
        //console.log(allAnswers)
        shuffle(allAnswers)
        //console.log(allAnswers)

        for (let index = 0; index < 4; index++) {

            let text = (index + 1) + '. ' + allAnswers[index];
            let name = 'historyRadioButton' + (question + 1); // + (index + 1);
            let id = data.results[question].question + index;

            let row = document.getElementById("historya" + (question + 1));

            let radioBut = document.createElement('input');
            radioBut.className = 'historyRadioButton' + (question + 1)
            radioBut.setAttribute('type', 'radio');
            radioBut.setAttribute('name', name);
            radioBut.setAttribute('id', id);
            radioBut.setAttribute('value', allAnswers[index]);
            row.appendChild(radioBut);

            let label = document.createElement('label');
            label.setAttribute('for', id);
            label.setAttribute('id', id)
            label.innerHTML = text;
            row.appendChild(label);
        }
    }

    document.getElementById("submit").onclick = function () {
        answered = true
        for (let question = 0; question < 10; question++) {
            let userChoice = $("#historya" + (question + 1)).find("input:checked");
            let question_text = document.getElementById("historyq" + (question + 1));
            if (userChoice.length == 0) {
                answered = false
            }
        }

        if (!answered) {
            alert("You have unanswered questions. Please select an answer for each question and try again!");
            return
        } else {
            let score = 0;
            for (let question = 0; question < 10; question++) {
                let userChoice = $("#historya" + (question + 1)).find("input:checked").val();
                let question_text = document.getElementById("historyq" + (question + 1));
                if (userChoice == (data.results[question].correct_answer)) {
                    question_text.style = "color: green;";
                    score += 1
                } else {
                    question_text.style = "color: red;";
                };
            }
            alert('You have scored: ' + score);
        }
    }
})


//Maths quiz content
$.get("https://opentdb.com/api.php?amount=10&category=25&type=multiple", function (data) {
    for (let question = 0; question < 10; question++) {
        document.getElementById("mathsq" + (question + 1)).innerHTML = ('Question ' + (question + 1) + ': ' + data.results[question].question)

        let allAnswers = [data.results[question].correct_answer, data.results[question].incorrect_answers[0], data.results[question].incorrect_answers[1], data.results[question].incorrect_answers[2]]
        //console.log(allAnswers)
        shuffle(allAnswers)
        //console.log(allAnswers)

        for (let index = 0; index < 4; index++) {

            let text = (index + 1) + '. ' + allAnswers[index];
            let name = 'mathsRadioButton' + (question + 1); // + (index + 1);
            let id = data.results[question].question + index;

            let row = document.getElementById("mathsa" + (question + 1));

            let radioBut = document.createElement('input');
            radioBut.className = 'mathsRadioButton' + (question + 1)
            radioBut.setAttribute('type', 'radio');
            radioBut.setAttribute('name', name);
            radioBut.setAttribute('id', id);
            radioBut.setAttribute('value', allAnswers[index]);
            row.appendChild(radioBut);

            let label = document.createElement('label');
            label.setAttribute('for', id);
            label.setAttribute('id', id)
            label.innerHTML = text;
            row.appendChild(label);
        }
    }

    document.getElementById("submit").onclick = function () {
        answered = true
        for (let question = 0; question < 10; question++) {
            let userChoice = $("#mathsa" + (question + 1)).find("input:checked");
            let question_text = document.getElementById("mathsq" + (question + 1));
            if (userChoice.length == 0) {
                answered = false
            }
        }

        if (!answered) {
            alert("You have unanswered questions. Please select an answer for each question and try again!");
            return
        } else {
            let score = 0;
            for (let question = 0; question < 10; question++) {
                let userChoice = $("#mathsa" + (question + 1)).find("input:checked").val();
                let question_text = document.getElementById("mathsq" + (question + 1));
                if (userChoice == (data.results[question].correct_answer)) {
                    question_text.style = "color: green;";
                    score += 1
                } else {
                    question_text.style = "color: red;";
                };
            }
            alert('You have scored: ' + score);
        }
    }
})


//Sports quiz content sports
$.get("https://opentdb.com/api.php?amount=10&category=25&type=multiple", function (data) {
    for (let question = 0; question < 10; question++) {
        document.getElementById("sportsq" + (question + 1)).innerHTML = ('Question ' + (question + 1) + ': ' + data.results[question].question)

        let allAnswers = [data.results[question].correct_answer, data.results[question].incorrect_answers[0], data.results[question].incorrect_answers[1], data.results[question].incorrect_answers[2]]
        //console.log(allAnswers)
        shuffle(allAnswers)
        //console.log(allAnswers)

        for (let index = 0; index < 4; index++) {

            let text = (index + 1) + '. ' + allAnswers[index];
            let name = 'sportsRadioButton' + (question + 1); // + (index + 1);
            let id = data.results[question].question + index;

            let row = document.getElementById("sportsa" + (question + 1));

            let radioBut = document.createElement('input');
            radioBut.className = 'sportsRadioButton' + (question + 1)
            radioBut.setAttribute('type', 'radio');
            radioBut.setAttribute('name', name);
            radioBut.setAttribute('id', id);
            radioBut.setAttribute('value', allAnswers[index]);
            row.appendChild(radioBut);

            let label = document.createElement('label');
            label.setAttribute('for', id);
            label.setAttribute('id', id)
            label.innerHTML = text;
            row.appendChild(label);
        }
    }

    document.getElementById("submit").onclick = function () {
        answered = true
        for (let question = 0; question < 10; question++) {
            let userChoice = $("#sportsa" + (question + 1)).find("input:checked");
            let question_text = document.getElementById("sportsq" + (question + 1));
            if (userChoice.length == 0) {
                answered = false
            }
        }

        if (!answered) {
            alert("You have unanswered questions. Please select an answer for each question and try again!");
            return
        } else {
            let score = 0;
            for (let question = 0; question < 10; question++) {
                let userChoice = $("#sportsa" + (question + 1)).find("input:checked").val();
                let question_text = document.getElementById("sportsq" + (question + 1));
                if (userChoice == (data.results[question].correct_answer)) {
                    question_text.style = "color: green;";
                    score += 1
                } else {
                    question_text.style = "color: red;";
                };
            }
            alert('You have scored: ' + score);
        }
    }
})


//Technology quiz content 
$.get("https://opentdb.com/api.php?amount=10&category=25&type=multiple", function (data) {
    for (let question = 0; question < 10; question++) {
        document.getElementById("technologyq" + (question + 1)).innerHTML = ('Question ' + (question + 1) + ': ' + data.results[question].question)

        let allAnswers = [data.results[question].correct_answer, data.results[question].incorrect_answers[0], data.results[question].incorrect_answers[1], data.results[question].incorrect_answers[2]]
        //console.log(allAnswers)
        shuffle(allAnswers)
        //console.log(allAnswers)

        for (let index = 0; index < 4; index++) {

            let text = (index + 1) + '. ' + allAnswers[index];
            let name = 'technologyRadioButton' + (question + 1); // + (index + 1);
            let id = data.results[question].question + index;

            let row = document.getElementById("technologya" + (question + 1));

            let radioBut = document.createElement('input');
            radioBut.className = 'technologyRadioButton' + (question + 1)
            radioBut.setAttribute('type', 'radio');
            radioBut.setAttribute('name', name);
            radioBut.setAttribute('id', id);
            radioBut.setAttribute('value', allAnswers[index]);
            row.appendChild(radioBut);

            let label = document.createElement('label');
            label.setAttribute('for', id);
            label.setAttribute('id', id)
            label.innerHTML = text;
            row.appendChild(label);
        }
    }

    document.getElementById("submit").onclick = function () {
        answered = true
        for (let question = 0; question < 10; question++) {
            let userChoice = $("#technologya" + (question + 1)).find("input:checked");
            let question_text = document.getElementById("technologyq" + (question + 1));
            if (userChoice.length == 0) {
                answered = false
            }
        }

        if (!answered) {
            alert("You have unanswered questions. Please select an answer for each question and try again!");
            return
        } else {
            let score = 0;
            for (let question = 0; question < 10; question++) {
                let userChoice = $("#technologya" + (question + 1)).find("input:checked").val();
                let question_text = document.getElementById("technologyq" + (question + 1));
                if (userChoice == (data.results[question].correct_answer)) {
                    question_text.style = "color: green;";
                    score += 1
                } else {
                    question_text.style = "color: red;";
                };
            }
            alert('You have scored: ' + score);
        }
    }
})


//Vehicles quiz content 
$.get("https://opentdb.com/api.php?amount=10&category=25&type=multiple", function (data) {
    for (let question = 0; question < 10; question++) {
        document.getElementById("vehiclesq" + (question + 1)).innerHTML = ('Question ' + (question + 1) + ': ' + data.results[question].question)

        let allAnswers = [data.results[question].correct_answer, data.results[question].incorrect_answers[0], data.results[question].incorrect_answers[1], data.results[question].incorrect_answers[2]]
        //console.log(allAnswers)
        shuffle(allAnswers)
        //console.log(allAnswers)

        for (let index = 0; index < 4; index++) {

            let text = (index + 1) + '. ' + allAnswers[index];
            let name = 'vehiclesRadioButton' + (question + 1); // + (index + 1);
            let id = data.results[question].question + index;

            let row = document.getElementById("vehiclesa" + (question + 1));

            let radioBut = document.createElement('input');
            radioBut.className = 'vehiclesRadioButton' + (question + 1)
            radioBut.setAttribute('type', 'radio');
            radioBut.setAttribute('name', name);
            radioBut.setAttribute('id', id);
            radioBut.setAttribute('value', allAnswers[index]);
            row.appendChild(radioBut);

            let label = document.createElement('label');
            label.setAttribute('for', id);
            label.setAttribute('id', id)
            label.innerHTML = text;
            row.appendChild(label);
        }
    }

    document.getElementById("submit").onclick = function () {
        answered = true
        for (let question = 0; question < 10; question++) {
            let userChoice = $("#vehiclesa" + (question + 1)).find("input:checked");
            let question_text = document.getElementById("vehiclesq" + (question + 1));
            if (userChoice.length == 0) {
                answered = false
            }
        }

        if (!answered) {
            alert("You have unanswered questions. Please select an answer for each question and try again!");
            return
        } else {
            let score = 0;
            for (let question = 0; question < 10; question++) {
                let userChoice = $("#vehiclesa" + (question + 1)).find("input:checked").val();
                let question_text = document.getElementById("vehiclesq" + (question + 1));
                if (userChoice == (data.results[question].correct_answer)) {
                    question_text.style = "color: green;";
                    score += 1
                } else {
                    question_text.style = "color: red;";
                };
            }
            alert('You have scored: ' + score);
        }
    }
})

