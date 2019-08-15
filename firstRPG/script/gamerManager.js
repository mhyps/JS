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
        getInterface.innerHTML = `<img src="images/${classType}.jpg" class="img-avatar" alt="${classType}"><div><h3>${classType}</h3><p>Health: ${player.health}</p><p>Mana: ${player.mana}</p><p>Strength: ${player.strength}</p><p>Agility: ${player.agility}</p><p>Speed: ${player.speed}</p></div>`;
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
        let getArena = document.querySelector(".arena");
    }

};