$(document).ready(function(){
    var yodaAttack = 8;
    var yodaCounter = 11;
    var yodaHP = 65;
    
    var lukeAttack = 5;
    var lukeCounter = 10;
    var lukeHP = 65;
    
    var vaderAttack = 7;
    var vaderCounter = 12;
    var vaderHP = 60;
    
    var kyloAttack = 6;
    var kyloCounter = 9;
    var kyloHP = 65;
    
    var numOfWarriors = 4
    
    var masterYoda = false;
    var lukeSkywalker = false;
    var darthVader = false;
    var kyloRen = false;
    
    var player = false;
    var playerAttack = 0;
    var playerHP = 0;
    
    var enemy = false;
    var enemyCounter = 0;
    var enemyHP = 0

    function selectWarrior() {
        $("#warrior1").on("click", function () {
            masterYoda = true;
            if (player === false || enemy === false) {
                playerOrEnemy();
            };
            console.log(masterYoda);
            masterYoda = false;
            console.log(enemy);
            console.log(numOfWarriors);
        });
        
        $("#warrior2").on("click", function () {
            lukeSkywalker = true;
            if (player === false || enemy === false) {
                playerOrEnemy();
            };
            console.log(lukeSkywalker);
            lukeSkywalker = false;    
            console.log(enemy);
            console.log(numOfWarriors);
        });
        
        $("#warrior3").on("click", function () {
            darthVader = true;
            if (player === false || enemy === false) {
                playerOrEnemy();
            };
            console.log(darthVader);
            darthVader = false;
            console.log(enemy);
            console.log(numOfWarriors);
        });
        
        $("#warrior4").on("click", function () {
            kyloRen = true;
            if (player === false || enemy === false) {
                playerOrEnemy();
            };
            console.log(kyloRen);
            kyloRen = false;
            console.log(enemy);
            console.log(numOfWarriors);
        });
        }
        selectWarrior();



})