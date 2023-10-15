function rename() {
    document.getElementById("filename").innerHTML = prompt('Filename')
}
window.onload = function () {
    //draggable = document.getElementsByClassName("puppycode-block-drag");
    //editor = document.getElementById('container');
    setTimeout(function () {
        document.getElementsByClassName("mdl-layout__drawer-button")[0].remove()
        document.getElementsByClassName("mdl-layout__tab-bar-button mdl-layout__tab-bar-left-button")[0].remove()
        document.getElementsByClassName("mdl-layout__tab-bar-button mdl-layout__tab-bar-right-button")[0].remove()
    }, 250)
    colors = ["rgb(244,67,54)","rgb(255,152,0)","rgb(76,175,80)","rgb(0,150,136)","rgb(0,188,212)","rgb(33,150,243)","rgb(64,81,181)","rgb(103,58,183)","rgb(233,28,99)"]
    color = colors[Math.floor(Math.random() * colors.length)]
    //document.getElementById("tabs").style.backgroundColor = color
    //document.getElementById("header").style.backgroundColor = color
}
function newBlock() {
    for (i = 0; i < document.getElementsByClassName("puppycode-block-drag").length; i++) {
        e = document.getElementsByClassName("puppycode-block-drag")[i];
        e.onmousedown = function (_) {
            e.onmousemove = function (_) {

            }
        }
    }
}
function opennotes() {
    document.getElementById('notes').style.display = "inline-block";
    document.getElementById('container').style.display = "none";
}
function lock() {
    if (document.getElementById('lock').innerHTML == "lock_open") {
        document.getElementById('lock').innerHTML = "lock"
        document.getElementById('locktooltip').innerHTML = "Share to community"
    } else {
        document.getElementById('lock').innerHTML = "lock_open"
        document.getElementById('locktooltip').innerHTML = "Unshare"
    }
}
function save() {
    if (document.getElementById('save').className == "material-icons-outlined"){
        return;
    }
    document.getElementById('save').classList.replace("material-icons", "material-icons-outlined")
    document.getElementById('savetooltip').innerHTML = "Saving"
    setTimeout(function () {
        document.getElementById('save').classList.replace("material-icons-outlined", "material-icons")
        document.getElementById('savetooltip').innerHTML = "Save"
    },1000)
}