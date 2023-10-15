const play_button = document.querySelector("#play");
const Console = document.querySelector("#console");
const runtime = document.querySelector("#consoleRuntime");
const IDE = document.getElementById("container");

function openConsole() {
    IDE.style.display = "none";
}

function run() {
    
}

play_button.addEventListener("click", openConsole);