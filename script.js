var bullet = document.querySelector("#bullet");
var countShot = 0;
var bulletPosition = random(1, 6); 
var btnShot = document.querySelector("#shot");
var baraban = document.querySelector("#baraban");
var currentPlayer = 1; 

btnShot.onclick = start;



function start() {
    btnShot.className = "off";
    bullet.style.display = "block";
    revolver.style.display = "block";

    btnShot.onclick = "";

    var rotate = 0;

    var timer = setInterval (function() { 
        rotate = rotate + 10;
        baraban.style.transform = "rotate(" + rotate + "deg)";
        if (rotate > 300) {
            bullet.style.display = "none";
        }
         if (rotate == 720) {
            clearInterval(timer);
            btnShot.innerText = "Сделать выстрел";
            btnShot.onclick = shot;
            btnShot.className = "";
        }
    }, 50)
  
}

var rotateBaraban = 0;

function shot() {
    countShot = countShot + 1; 
    if (bulletPosition == countShot) {
        var blood = document.createElement("div");
        blood.id = "blood";
        var player = document.querySelector("#player" + currentPlayer);
        console.dir(player);
        player.appendChild(blood);
        endGame();

    } else {
        if (currentPlayer == 1) {
            rotationRight();
            currentPlayer = 1;
        } else {
            rotationLeft ();
            currentPlayer = 1;
        }  
        
    

    var rotate = rotateBaraban;
    var timer = setInterval(function()  { 
        rotate = rotate + 10;
        baraban.style.transform = "rotate(" + rotate + "deg)";
        if (rotate == rotateBaraban + 60){
            clearInterval(timer);
            rotateBaraban = rotate;
        }
    }, 10)
}  
}



function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}




var revolver = document.querySelector("#revolver");

function rotationLeft () {
    revolver.style.background = 'url("images/revolver-left.png")no-repeat'
}

rotationLeft ();

function rotationRight () {
    revolver.style.background = 'url("images/revolver-right.png")no-repeat'
}

function endGame() {
    alert("Game Over!");
    btnShot.innerText = "Рестарт";
    btnShot.onclick = restart;
}

function restart() {
    document.location.reload();
}