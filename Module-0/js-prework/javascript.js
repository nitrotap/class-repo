// Grow button
document.getElementById("button1").addEventListener("click", function(){
    document.getElementById("box").style.height = "250px";
    document.getElementById("box").style.width = "250px";
})

// Blue button
document.getElementById("button2").addEventListener("click", function() {
    document.getElementById("box").style.backgroundColor = 'blue';
    
})

// Fade button
document.getElementById("button3").addEventListener("click", function() {    
     document.getElementById("box").style.opacity = ".5";
})



// Reset Button 
document.getElementById("button4").addEventListener("click", function() {
    // style="height:150px; width:150px; background-color:orange; margin:25px"
    document.getElementById("box").style.backgroundColor = 'orange';
    document.getElementById("box").style.height = "150px";
    document.getElementById("box").style.width = "150px";
    document.getElementById("box").style.margin = "25px";
    document.getElementById("box").style.opacity = "1";
})