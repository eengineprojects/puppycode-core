const play_button = document.querySelector("#play");
const Console = document.querySelector("#console");
const runtime = document.querySelector("#consoleRuntime");
//const IDE = document.getElementById("container");
const editor = document.getElementById("container")

function openConsole() {
    IDE.style.display = "none";
}

function run() {
    content = IDE.getValue();
    content = content.replaceAll("\n",";")
    content = content.replaceAll("\t","")
    eval(content);
}

//play_button.addEventListener("click", openConsole);