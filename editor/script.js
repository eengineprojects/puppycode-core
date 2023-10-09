function rename(){
    document.getElementById("filename").innerHTML = prompt('Filename')
}
window.onload = function(){
    //draggable = document.getElementsByClassName("puppycode-block-drag");
    editor = document.getElementById('container');
    setTimeout(function(){document.getElementsByClassName("mdl-layout__drawer-button")[0].remove()},250)
}
function newBlock(){
    for (i = 0; i < document.getElementsByClassName("puppycode-block-drag").length; i++){
        e = document.getElementsByClassName("puppycode-block-drag")[i];
        e.onmousedown = function(_){
            e.onmousemove = function(_){
                
            }
        }
    }
}