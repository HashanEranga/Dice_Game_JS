// random image generator

function randomizer(){
    var randomNumber = Math.floor(Math.random() * 6 + 1)
    return randomNumber;
}

function randomGenerator(randomNumber){
    
    var numberStr;

    switch(randomNumber) {
        case 1:
            numberStr = 'one';
            break;
        case 2:
            numberStr = 'two';
            break;
        case 3:
            numberStr = 'three';
            break;
        case 4:
            numberStr = 'four';
            break;
        case 5: 
            numberStr = 'five'
            break;
        default:
            numberStr = 'six';
            break;
    }
    return numberStr;
}

function handleClick(){
    var listOfPlayers = document.getElementsByClassName('image');

    var number1 = randomizer();
    imageNum1 = randomGenerator(number1);
    listOfPlayers[0].setAttribute('src', 'Assets/'+imageNum1+'.png')

    var number2 = randomizer();
    imageNum2 = randomGenerator(number2);
    listOfPlayers[1].setAttribute('src', 'Assets/'+imageNum2+'.png')

    if (number1 > number2){
        document.getElementsByClassName('title')[0].innerHTML = 'Player 01 Wins';
    }
    else if(number1 < number2){
        document.getElementsByClassName('title')[0].innerHTML = 'Player 02 Wins';
    }
    else{
        document.getElementsByClassName('title')[0].innerHTML = 'Draw';
    }

}


document.getElementById('buton').addEventListener('click', handleClick);
