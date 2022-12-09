/*
1. При нажатии на кнопку "Старт"
    1.1 Сделать кнопку активной  - done
    1.2 Вставить патрон  в барабан - done
    1.3 Начать крутить барабан  - done
    1.4 Скрыть пулю - done
    1.5 Записать случайное число от 1 до 6, это число отвечает за место пули в барабане  - done
    1.6 отобразить револьвер  
    1.7 Изменить текст кнопки на "Сделать выстрел"
    1.8 Сделать кнопку актвной 
2. При нажатии на кнопку "Сделать выстрел"
    2.1 Проверяется число выстрела 
    2.2 Если пуля совпадает числу пули в барабане, то персонаж убит 
    2.3 Иначе револьвер переварачивается и далее повторяется пункт 2
    2.4 При успешном выстреле залить соответствующую иконку красной жидкостью
    2.5 Прокрутить барабан 
3. При завершении игры 
    3.1 Изменить текст кнопки на "Рестарт"
    3.2 При нажатии на эту кнопку перезагрузить страницу.
    */




//  1 block 
var countShot = 0;
var bulletPosition = random(1, 6);
var btnShot = document.querySelector("#shot"); 


//  2 block 
btnShot.onclick = start;      //=> block 4
// function() {
//     countShot = countShot + 1;
//     if (countShot == bulletPosition) {
//         endGame();
//     } else {
//         alert (countShot);
//     }
// }
//  2 block 

// block 4
function start () {
       
    btnShot.className = "off";
    var bullet = document.querySelector("#bullet");
    bullet.style.display = "block";

    btnShot.onclick = shot;
      
}
 // block 4

function random(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

function shot () {
    countShot = countShot + 1;
    alert(countShot);
}

var revolver = document.querySelector("#revolver");

function rotationRight() {
    revolver.style.background = 'url("images/revolver-right.png") no-repeat'
    revolver.style.display = "block";
}

rotationRight();

function rotationLeft() {
    revolver.style.background = 'url("images/revolver-left.png") no-repeat'
    revolver.style.display = "block";
}

rotationLeft();

function endGame() {
    alert("Game Over!");
}
//  1 block 








// block 3
    // var bulletPosition = random(1, 6);
    // function random(min, max){
    //     return Math.floor(Math.random() * (max - min) + min);
    // }
// block 3




    // var countShot = 0;
    // var bulletPosition = 3;

    // var btnShot = document.querySelector("#shot"); 
// //  2 block 
    // btnShot.onclick = function() {
    //     countShot = countShot + 1;
    //     if (countShot == bulletPosition) {
    //         endGame();
    //     } else {
    //         alert (countShot);
    //     }
    // }
// //  2 block 
    // function shot () {
    //     countShot = countShot + 1;
    //     alert(countShot);
    // }

    // var revolver = document.querySelector("#revolver");

    // function rotationRight() {
    //     revolver.style.background = 'url("images/revolver-right.png") no-repeat'
    //     revolver.style.display = "block";
    // }

    // rotationRight();

    // function rotationLeft() {
    //     revolver.style.background = 'url("images/revolver-left.png") no-repeat'
    //     revolver.style.display = "block";
    // }

    // rotationLeft();

    // function endGame() {
    //     alert("Game Over!");
    // }
    // //  1 block 