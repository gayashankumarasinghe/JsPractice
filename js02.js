
var player01button = document.getElementById("player01");
var p1score = 0;

player01button.addEventListener("click",function(){
    p1score++;
    document.getElementById("player01score").textContent= p1score;
});


var p2score = 0;
document.getElementById("player02").addEventListener("click",function(){
    p2score++;
    document.getElementById("player02score").textContent = p2score;
});