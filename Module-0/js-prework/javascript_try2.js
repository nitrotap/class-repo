// Grow button
var height = 150;
var len = 150;
document.getElementById("button_grow").addEventListener("click", function(){
    height = height + 50;
    len = len + 50;
    document.getElementById("box").style.height = height + "px";
    document.getElementById("box").style.width = len + "px";
})

// Blue button
document.getElementById("button_blue").addEventListener("click", function() {
    document.getElementById("box").style.backgroundColor = 'blue';
})

// Fade button
var opacity = 1;
document.getElementById("button_fade").addEventListener("click", function() {
    opacity = opacity - .3
     document.getElementById("box").style.opacity = opacity;
})

// Reset Button 
document.getElementById("button_reset").addEventListener("click", function() {
    document.getElementById("box").style.backgroundColor = 'orange';
    document.getElementById("box").style.height = "150px";
    document.getElementById("box").style.width = "150px";
    document.getElementById("box").style.margin = "25px";
    document.getElementById("box").style.opacity = "1";
    opacity = 1;
})