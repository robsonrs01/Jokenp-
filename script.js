
const result = document.querySelector(".result")
const MyScore = document.querySelector(".MyScore")
const ScoreMAchine = document.querySelector(".ScoreMAchine")

let humanScoreNumber = 0
let machineScoreNumber = 0

const playHuman = (humanChoice) => {
   
    playTheGame(humanChoice, playMachine())
    countPoints()
}

const playMachine = () => {

    const choices = ['pedra', 'papel', 'tesoura']

    const randomNumbers = Math.floor(Math.random() * 3)

    return choices [randomNumbers]
}

const playTheGame = (human, machine) => {

    console.log('Humano: ' + human + ' Maquina: ' + machine)


    if(human === machine){
        result.innerHTML = "Empatou! &#x1F605;"
    } else if (
        (human === 'papel' && machine === 'pedra') ||
        (human === 'pedra' && machine === 'tesoura') ||
        (human === 'tesoura' && machine === 'papel')
    ){
        humanScoreNumber++
        result.innerHTML = "Você Ganhou! &#x1F609;"
        MyScore.innerHTML = humanScoreNumber 
    }
    else {
        machineScoreNumber++
        result.innerHTML = "Você Perdeu &#x1F625;"
        ScoreMAchine.innerHTML = machineScoreNumber
    }
    

}


const countPoints = () =>{

    if(humanScoreNumber >= 10) {
        result.innerHTML = "Fim de Jogo!"
        MyScore.innerHTML = "0"
        ScoreMAchine.innerHTML = "0"
    }

    if(ScoreMAchine >= 10){
        result.innerHTML = "Fim de Jogo!"
        MyScore.innerHTML = "0"
        ScoreMAchine.innerHTML = "0"
    }

}
