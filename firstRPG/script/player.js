let player;

function Player(classType, health, mana, strength, agility, speed) {
    this.classType = classType;
    this.health = health;
    this.mana = mana;
    this.strength = strength;
    this.agility = agility;
    this.speed = speed;
}

let PlayerMoves = {
    calcAttack: function () {
        //Who attacks first
        let getPlayerSpeed = player.speed;
        let getEnemySpeed = enemy.speed;

        //Player attack
        let playerAttack = function () {
            let calcBaseDmg;
            player.mana > 0 ? calcBaseDmg = player.strength * player.mana / 100 : calcBaseDmg = player.strength * player.agility / 100;

            let offsetDamage = Math.floor(Math.random() * Math.floor(10));
            let calcOutputDamage = calcBaseDmg + offsetDamage;

            //Number of hits
            let numberOfHits = Math.floor(Math.random() * Math.floor(player.agility / 10) / 2) + 1;
            let attackValues = [calcOutputDamage, numberOfHits];
            return attackValues;

        }
        let enemyAttack = function () {
            let calcBaseDmg;
            player.mana > 0 ? calcBaseDmg = enemy.strength * enemy.mana / 100 : calcBaseDmg = enemy.strength * enemy.agility / 100;

            let offsetDamage = Math.floor(Math.random() * Math.floor(10));
            let calcOutputDamage = calcBaseDmg + offsetDamage;

            //Number of hits
            let numberOfHits = Math.floor(Math.random() * Math.floor(enemy.agility / 6) / 2) + 1;
            let attackValues = [calcOutputDamage, numberOfHits];
            return attackValues;

        }
        //Get hp of enemy and player
        let getPlayerHealth = document.querySelector(".player-health");
        let getEnemyHealth = document.querySelector(".enemy-health");
        //Initiate attacks

        if (getPlayerSpeed >= getEnemySpeed) {
            let playerAttackValues = playerAttack();
            let totalDamage = playerAttackValues[0] * playerAttackValues[1];
            enemy.health -= totalDamage;
            alert(`You hit ${playerAttackValues[0]} damage ${playerAttackValues[1]} times`);

            if (enemy.health <= 0) {
                alert(`You won`);
                getPlayerHealth.innerHTML = `Health: ${player.health}`;
                getEnemyHealth.innerHTML = `Health: 0`;
            } else {
                getEnemyHealth.innerHTML = `Health: ${enemy.health}`;
                //Enemy attacks
                let enemyAttackValues = enemyAttack();
                let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
                player.health -= totalDamage;
                alert(`Enemy hit you for ${enemyAttackValues[0]} damage ${enemyAttackValues[1]} times`);

                if (player.health <= 0) {
                    alert(`Enemy won`);
                    getPlayerHealth.innerHTML = `Health: 0`;
                    getEnemyHealth.innerHTML = `Health: ${enemy.health}`;
                } else {
                    getPlayerHealth.innerHTML = `Health: ` + player.health;
                }
            }
        } else if (getPlayerSpeed <= getEnemySpeed) {
            let enemyAttackValues = enemyAttack();
            let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
            player.health -= totalDamage;
            alert(`Enemy hit ${enemyAttackValues[0]} damage ${enemyAttackValues[1]} times`);

            if (player.health <= 0) {
                alert(`Enemy won`);
                getEnemyHealth.innerHTML = `Health: ${enemy.health}`;
                getPlayerHealth.innerHTML = `Health: 0`;
            } else {
                getPlayerHealth.innerHTML = `Health: ${player.health}`;
                //Player attacks
                let playerAttackValues = playerAttack();
                let totalDamage = playerAttackValues[0] * playerAttackValues[1];
                enemy.health -= totalDamage;
                alert(`You hit for ${playerAttackValues[0]} damage ${playerAttackValues[1]} times`);

                if (enemy.health <= 0) {
                    alert(`You won`);
                    getEnemyHealth.innerHTML = `Health: 0`;
                    getPlayerHealth.innerHTML = `Health: ${player.health}`;
                } else {
                    getEnemyHealth.innerHTML = `Health: ` + enemy.health;
                }
            }

        }
    }
};