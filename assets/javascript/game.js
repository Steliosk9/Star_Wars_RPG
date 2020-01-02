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

        function playerOrEnemy () {
            if (numOfWarriors === 4 && masterYoda === true) {
                player = true;
                numOfWarriors--;
                $("#playerChoice").attr("class", "yoda");
                playerAttack = yodaAttack;
                playerHP = yodaHP;
                $("#playerHP").text(playerHP);
                $("#warrior1").prop("onclick", null).off("click");
            } else if (numOfWarriors === 4 && lukeSkywalker === true) {
                player = true;
                numOfWarriors--;
                $("#playerChoice").attr("class", "luke");
                playerAttack = lukeAttack;
                playerHP = lukeHP;
                $("#playerHP").text(playerHP);
                $("#warrior2").prop("onclick", null).off("click");
            } else if (numOfWarriors === 4 && darthVader === true)  {
                player = true;
                numOfWarriors--;
                $("#playerChoice").attr("class", "vader");
                playerAttack = vaderAttack;
                playerHP = vaderHP;
                $("#playerHP").text(playerHP);
                $("#warrior3").prop("onclick", null).off("click");
            } else if (numOfWarriors === 4 && kyloRen === true) {
                player = true;
                numOfWarriors--;
                $("#playerChoice").attr("class", "kylo");
                playerAttack = kyloAttack;
                playerHP = kyloHP;
                $("#playerHP").text(playerHP);
                $("#warrior4").prop("onclick", null).off("click");
            } else if (numOfWarriors === 3 && masterYoda === true) {
                enemy = true;
                numOfWarriors--;
                $("#enemyChoice").attr("class", "yoda");
                enemyCounter = yodaCounter
                enemyHP = yodaHP
                $("#enemyHP").text(enemyHP);
                $("#warrior1").prop("onclick", null).off("click");
                $("#attack").text(" ");
                $("#counter").text("Click Your Warrior To Attack");
            } else if (numOfWarriors === 3 && lukeSkywalker === true) {
                enemy = true;
                numOfWarriors--;
                $("#enemyChoice").attr("class", "luke");
                enemyCounter = lukeCounter
                enemyHP = lukeHP
                $("#enemyHP").text(enemyHP);
                $("#warrior2").prop("onclick", null).off("click");
                $("#attack").text(" ");
                $("#counter").text("Click Your Warrior To Attack");
            } else if (numOfWarriors === 3 && darthVader === true)  {
                enemy = true;
                numOfWarriors--;
                $("#enemyChoice").attr("class", "vader");
                enemyCounter = vaderCounter
                enemyHP = vaderHP
                $("#enemyHP").text(enemyHP);
                $("#warrior3").prop("onclick", null).off("click");
                $("#attack").text(" "); 
                $("#counter").text("Click Your Warrior To Attack");    
            } else if (numOfWarriors === 3 && kyloRen === true) {
                enemy = true;
                numOfWarriors--;
                $("#enemyChoice").attr("class", "kylo");
                enemyCounter = kyloCounter
                enemyHP = kyloHP
                $("#enemyHP").text(enemyHP);
                $("#warrior4").prop("onclick", null).off("click");
                $("#attack").text(" "); 
                $("#counter").text("Click Your Warrior To Attack");   
            } else if (numOfWarriors === 2 && masterYoda === true) {
                enemy = true;
                numOfWarriors--;
                $("#enemyChoice").attr("class", "yoda");
                enemyCounter = yodaCounter
                enemyHP = yodaHP
                $("#enemyHP").text(enemyHP);
                $("#warrior1").prop("onclick", null).off("click");
                $("#attack").text(" ");
                $("#counter").text("Click Your Warrior To Attack");
            } else if (numOfWarriors === 2 && lukeSkywalker === true) {
                enemy = true;
                numOfWarriors--;
                $("#enemyChoice").attr("class", "luke");
                enemyCounter = lukeCounter
                enemyHP = lukeHP
                $("#enemyHP").text(enemyHP);
                $("#warrior2").prop("onclick", null).off("click");
                $("#attack").text(" ");
                $("#counter").text("Click Your Warrior To Attack");
            } else if (numOfWarriors === 2 && darthVader === true)  {
                enemy = true;
                numOfWarriors--;
                $("#enemyChoice").attr("class", "vader");
                enemyCounter = vaderCounter
                enemyHP = vaderHP
                $("#enemyHP").text(enemyHP);
                $("#warrior3").prop("onclick", null).off("click"); 
                $("#attack").text(" ");
                $("#counter").text("Click Your Warrior To Attack");    
            } else if (numOfWarriors === 2 && kyloRen === true) {
                enemy = true;
                numOfWarriors--;
                $("#enemyChoice").attr("class", "kylo");
                enemyCounter = kyloCounter
                enemyHP = kyloHP
                $("#enemyHP").text(enemyHP);
                $("#warrior4").prop("onclick", null).off("click"); 
                $("#attack").text(" ");
                $("#counter").text("Click Your Warrior To Attack");   
            } else if (numOfWarriors === 1 && masterYoda === true) {
                enemy = true;
                numOfWarriors--;
                $("#enemyChoice").attr("class", "yoda");
                enemyCounter = yodaCounter
                enemyHP = yodaHP
                $("#enemyHP").text(enemyHP);
                $("#warrior1").prop("onclick", null).off("click");
                $("#attack").text(" ");
                $("#counter").text("Click Your Warrior To Attack");
            } else if (numOfWarriors === 1 && lukeSkywalker === true) {
                enemy = true;
                numOfWarriors--;
                $("#enemyChoice").attr("class", "luke");
                enemyCounter = lukeCounter
                enemyHP = lukeHP
                $("#enemyHP").text(enemyHP);
                $("#warrior2").prop("onclick", null).off("click");
                $("#attack").text(" ");
                $("#counter").text("Click Your Warrior To Attack");
            } else if (numOfWarriors === 1 && darthVader === true)  {
                enemy = true;
                numOfWarriors--;
                $("#enemyChoice").attr("class", "vader");
                enemyCounter = vaderCounter
                enemyHP = vaderHP
                $("#enemyHP").text(enemyHP);
                $("#warrior3").prop("onclick", null).off("click"); 
                $("#attack").text(" ");
                $("#counter").text("Click Your Warrior To Attack");    
            } else if (numOfWarriors === 1 && kyloRen === true) {
                enemy = true;
                numOfWarriors--;
                $("#enemyChoice").attr("class", "kylo");
                enemyCounter = kyloCounter
                enemyHP = kyloHP
                $("#enemyHP").text(enemyHP);
                $("#warrior4").prop("onclick", null).off("click"); 
                $("#attack").text(" ");
                $("#counter").text("Click Your Warrior To Attack");   
            }
        };
        


})