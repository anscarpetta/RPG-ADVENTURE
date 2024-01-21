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

const monsters = [
    {
        name: 'Slime',
        encounterLevels: [1, 3],
        life: 1,
        strenght: 1,
        onWin: () => {
            atckPoints += 1;
        },
        closeButton: closeModalFightS,
    }, 
    {
        name: 'Goblin',
        encounterLevels: [4, 6],
        life: 6,
        strenght: 2,
        onWin: () => {
            atckPoints += 2;
        },
        closeButton: closeModalFightG,
        defeatText: GOBLIN_DEFEAT_TEXT,
        winText: GOBLIN_WIN_TEXT,
        fightResultEl: goblinFightResult,
    }, 
    {
        name: 'Troll',
        encounterLevels: [7, 9],
        life: 10,
        strenght: 3,
        onWin: () => {
            atckPoints += 4;
        },
        closeButton: closeModalFightT,
        defeatText: TROLL_DEFEAT_TEXT,
        winText: TROLL_WIN_TEXT,
        fightResultEl: trollFightResult,
    }, 
    {
        name: 'Dragon',
        encounterLevels: [10, 10],
        life: 20,
        strenght: 100,
        closeButton: closeModalFightD,
        defeatText: DRAGON_DEFEAT_TEXT,
        winText: DRAGON_WIN_TEXT,
        fightResultEl: dragonFightResult,
    }, 
]

function fight() {
    // Determina qual monstro foi encontrado
    const monster = monsters.find((monster) => {
        const [min, max] = monster.encounterLevels;
        return dungeonLvl >= min && dungeonLvl <= max;
    });

    if (!monster) {
        throw new Error('Monstro não encontrado');
    }

    // Abre o modalFight para o monstro específico
    const modalFight = document.querySelector(`#fightModal${monster.name}`)
    modalFight.showModal()

    // Verifica se vc pode derrotar o monstro ou não
    if (atckPoints >= monster.life) { // Vitória
        lifePoints -= monster.strenght;
        monster.onWin && monster.onWin();
    } else { // Derrota
        lifePoints -= monster.strenght * 2;
    }

    dungeonLvl += 1;
    atckPointsText.innerText = atckPoints;
    lifePointsText.innerText = lifePoints;
    dungeonLvlText.innerText = dungeonLvl;

    if (monster.fightResultEl) {
        monster.fightResultEl.innerText = GOBLIN_WIN_TEXT;
    }

    if (monster.closeButton) {
        monster.closeButton.onclick = function() {
            modalFight.close()
            if (lifePoints <= 0){
                modalDeath.showModal()
                closeModalDeath.onclick = function() {
                    location.reload()
                }
            }
        }
    }
}

fightBtn.addEventListener('click', fight);



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
