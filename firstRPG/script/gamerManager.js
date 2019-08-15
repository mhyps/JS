let GameManager = {
    setGameStart: function (classType) {
        this.resetPlayer(classType);
        this.setPreFight();
    },
    resetPlayer: function (classType) {
        switch (classType) {
            case "Thief":
                player = new Player("Thief", 100, 0, 30, 50, 50);
                break;
            case "Knight":
                player = new Player("Knight", 200, 0, 60, 20, 20);
                break;
            case "Gunslinger":
                player = new Player("Gunslinger", 150, 0, 45, 35, 60);
                break;
            case "Ranger":
                player = new Player("Ranger", 80, 0, 40, 60, 80);
                break;
        }
        let getInterface = document.querySelector(".interface");
        getInterface.innerHTML = `<img src="images/${classType}.jpg" class="img-avatar" alt="${classType}"><div><h3>${classType}</h3><p class="player-health">Health: ${player.health}</p><p>Mana: ${player.mana}</p><p>Strength: ${player.strength}</p><p>Agility: ${player.agility}</p><p>Speed: ${player.speed}</p></div>`;
    },
    setPreFight: function () {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getArena = document.querySelector(".arena");

        getHeader.innerHTML = `<p>Task:Find an enemy!</p>`;
        getActions.innerHTML = `<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Search for an enemy!</a>`;
        getArena.style.visibility = "visible";
    },

    setFight: function () {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getEnemy = document.querySelector(".enemy");

        //Create enemy
        let witch = new Enemy("Witch", 150, 100, 50, 30, 30);
        let devil = new Enemy("Devil", 250, 0, 80, 10, 10);
        let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(2));

        switch (chooseRandomEnemy) {
            case 0:
                enemy = witch;
                break;
            case 1:
                enemy = devil;
                break;
        }
        getHeader.innerHTML = `<p>Task: Choose your move</p>`;
        getActions.innerHTML = `<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Attack!</a>`;
        getEnemy.innerHTML = `<img src="images/${enemy.classType}.jpg" alt="${enemy.classType}" class="img-avatar"><div><h3>${enemy.classType}</h3><p class="enemy-health">Health: ${enemy.health}</p><p>Mana: ${enemy.mana}</p><p>Strength: ${enemy.strength}</p><p>Agility: ${enemy.agility}</p><p>Speed: ${enemy.speed}</p></div>`;

    }

};