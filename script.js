const lifePointsText = document.getElementById('lifePointsText')
const atckPointsText = document.getElementById('atckPointsText')
const dungeonLvlText = document.getElementById('dungeonLvlText')
const goblinFightResult = document.getElementById('goblinFightResult')
const trollFightResult = document.getElementById('trollFightResult')
const dragonFightResult = document.getElementById('dragonFightResult')



const fightBtn = document.querySelector('#fightBtn')
const restBtn = document.querySelector('#restBtn')
const closeModalFightS = document.querySelector('#closeModalFightSlime')
const closeModalFightG = document.querySelector('#closeModalFightGoblin')
const closeModalFightT = document.querySelector('#closeModalFightTroll')
const closeModalFightD = document.querySelector('#closeModalFightDragon')
const closeModalRest = document.querySelector('#closeModalRest')
const closeModalDeath = document.querySelector('#closeModalDeath')
const closeModalWin = document.querySelector('#closeModalWin')


const LIFE_START_POINTS = 10;
const ATCK_START_POINTS = 5;
const DUNGEON_START_LEVEL = 1;
const GOBLIN_DEFEAT_TEXT = "Voce nao tinha forca suficiente para derrotar um goblin?, perdeu 4 de vida";
const GOBLIN_WIN_TEXT = "Voce tinha a forca suficiente, derrotando-o, conseguindo uma adaga, porem perdendo 2 de vida";
const TROLL_DEFEAT_TEXT = "O troll foi demais para vc, perdeu 6 de vida";
const TROLL_WIN_TEXT = "Voce tinha a forca suficiente, derrotando-o, conseguindo um amuleto de protecao, porem perdendo 3 de vida";
const DRAGON_DEFEAT_TEXT = "Voce nao foi forte o suficiente, entao morreu pras chamas do dragao";
const DRAGON_WIN_TEXT = "Voce é o escolhido, derrotou o dragao e se tornou o grande herói!!!";

let atckPoints = ATCK_START_POINTS;
let dungeonLvl = DUNGEON_START_LEVEL;
let lifePoints = LIFE_START_POINTS;

lifePointsText.innerText = lifePoints;
dungeonLvlText.innerText = dungeonLvl;
atckPointsText.innerText = atckPoints;

const modalDeath = document.querySelector("#deathModal")
const modalVictory = document.querySelector("#victoryModal")

fightBtn.addEventListener('click', function() {

    if (dungeonLvl <= 3){
        const modalFight = document.querySelector("#fightModalSlime")
        
            modalFight.showModal()
            dungeonLvl = dungeonLvl + 1;
            lifePoints = lifePoints - 1
            atckPoints = atckPoints + 1;
            lifePointsText.innerText = lifePoints;
            dungeonLvlText.innerText = dungeonLvl;
            atckPointsText.innerText = atckPoints;

    
        closeModalFightS.onclick = function() {
            modalFight.close()
                if (lifePoints <= 0){
                modalDeath.showModal()
                closeModalDeath.onclick = function() {
                    location.reload()
                }
            }
        }
    } 
    else if (dungeonLvl <= 6)
    {
        const modalFight = document.querySelector("#fightModalGoblin")
            modalFight.showModal()
            if (atckPoints < 6){
            dungeonLvl = dungeonLvl + 1;
            lifePoints = lifePoints - 4;
            lifePointsText.innerText = lifePoints;
            dungeonLvlText.innerText = dungeonLvl;
            goblinFightResult.innerText = GOBLIN_DEFEAT_TEXT
            }else{
            dungeonLvl = dungeonLvl + 1;
            lifePoints = lifePoints - 2;
            atckPoints = atckPoints + 2;
            atckPointsText.innerText = atckPoints;
            lifePointsText.innerText = lifePoints;
            dungeonLvlText.innerText = dungeonLvl;
            goblinFightResult.innerText = GOBLIN_WIN_TEXT

            }
        closeModalFightG.onclick = function() {
            modalFight.close()
            if (lifePoints <= 0){
                modalDeath.showModal()
                closeModalDeath.onclick = function() {
                    location.reload()
                }
            }
        }
    
    }
    else if (dungeonLvl <= 9)
    {
        const modalFight = document.querySelector("#fightModalTroll")
            modalFight.showModal()
            if (atckPoints < 10){
                dungeonLvl = dungeonLvl + 1;
                lifePoints = lifePoints - 6;
                lifePointsText.innerText = lifePoints;
                dungeonLvlText.innerText = dungeonLvl;
                trollFightResult.innerText = TROLL_DEFEAT_TEXT
                }else{
                dungeonLvl = dungeonLvl + 1;
                lifePoints = lifePoints - 3;
                atckPoints = atckPoints + 4;
                atckPointsText.innerText = atckPoints;
                lifePointsText.innerText = lifePoints;
                dungeonLvlText.innerText = dungeonLvl;
                trollFightResult.innerText = TROLL_WIN_TEXT
    
                }

        closeModalFightT.onclick = function() {
            modalFight.close()

            if (lifePoints <= 0){
                modalDeath.showModal()
                closeModalDeath.onclick = function() {
                    location.reload()
                }
            }
        }

}
else if (dungeonLvl = 10)
{

    const modalFight = document.querySelector("#fightModalDragon")
        modalFight.showModal()
        if(atckPoints > 19){
            dragonFightResult.innerText = DRAGON_WIN_TEXT
        }else{
            dragonFightResult.innerText = DRAGON_DEFEAT_TEXT
            lifePoints = lifePoints - 100
        }
    closeModalFightD.onclick = function() {
        modalFight.close()
            if (lifePoints <= 0){
                modalDeath.showModal()
                closeModalDeath.onclick = function() {
                    location.reload()
                }
            }else{
                modalVictory.showModal()
                closeModalWin.onclick = function() {
                    location.reload()
                }
            }
    }

}
});





const modalRest = document.querySelector("#restModal")
  restBtn.addEventListener('click', function() {
    if (dungeonLvl > 9) {
        alert("Voce nao pode descansar na sala 10, deve lutar contra o BOSS")
    }else{
    modalRest.showModal()
    
        lifePoints = lifePoints + 2
        lifePointsText.innerText = lifePoints;
        dungeonLvl = dungeonLvl + 1;
    dungeonLvlText.innerText = dungeonLvl;
}
    
    });




closeModalRest.onclick = function() {
    modalRest.close()
}
