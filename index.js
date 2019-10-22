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