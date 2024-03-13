let enterName = prompt("Enter Your Name");
let playerGuess;
//let computerGuess randomNum();
let computerGuess = randomNum();
let playerFeedback
loadDIV ();

function randomNum() {
    return Math.floor(Math.random() * (10 - 1 + 1) + 1)
}

function loadDIV () {
document.getElementById("ScriptThisDIV").innerHTML = "<H1>Hello " + enterName + "</H1><H2>Geese a numero between uno and 1"
document.getElementById("ScriptThisDIV").innerHTML = document.getElementById("ScriptThisDIV")
document.getElementById("ScriptThisDIV").innerHTML = document.getElementById("ScriptThisDIV").innerHTML + playerFeedback

}

function enterNumber () {
    playerGuess = prompt ("entree a numero")
}