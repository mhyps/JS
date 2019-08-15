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
        let getInterface = document.querySelector()
    },
    setPreFight: function () {

    }

};