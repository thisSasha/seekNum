let btnsNumber = document.querySelectorAll('.button-number');
let box = document.querySelector('#box');
let btnStart = document.querySelector('#start');
let objAttemps = document.querySelector('#attemps');
let numAttemps = 3;
let randomNum;
let game = false;

let disable = function (obj) {
    obj.setAttribute('disabled', true)
}
let enable = function (obj) {
    obj.removeAttribute('disabled')
}
let setAtt = function (obj, num) {
    obj.innerHTML = `Попытки ${num}`
}
let stopGame = function () {
    game = false;
    btnsNumber.forEach(el => {
        disable(el)
    });
    enable(btnStart)
    objAttemps.innerHTML = 'Ожидание начала'
}
let popup = function(name) {
    document.querySelector('div.win').innerHTML = name;
    document.querySelector('div.win').style.transform = 'translate(-50%, -50%) rotate(28deg)';
    document.querySelector('div.win').style.opacity = 1;
    document.querySelector('div.win').style.visibility = 'visible';
    setTimeout(() => {
        document.querySelector('div.win').style.transform = '';
        document.querySelector('div.win').style.opacity = 0;
        document.querySelector('div.win').style.visibility = 'hidden';
    }, 3000);
}
let newGame = function () {
    numAttemps = 3;
    setAtt(objAttemps, numAttemps)
    game = true;
    btnsNumber.forEach(element => {
        enable(element)
    });
    randomNum = Math.floor(Math.random() * (10 - 1) + 1)
    disable(btnStart)
}

box.onclick = function(e){
    let cl = e.target;
    if(cl.classList.contains('button-number') && game){
        if(numAttemps > 0){
            if(cl.innerHTML == randomNum.toString()){
                popup('Победа!!')
                stopGame()
            } else{
                disable(cl)
                numAttemps--
                setAtt(objAttemps, numAttemps)
                if(numAttemps <= 0){
                    popup('Проигрыш')
                    stopGame()
                }
            }
        } else{
            popup('Попыток больше нет')
        }
    }
}

btnStart.onclick = newGame;

stopGame()