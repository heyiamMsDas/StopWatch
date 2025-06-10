
const startBtn = document.getElementById('start') ;

const resetBtn = document.getElementById('reset') ;

const counterDisplay = document.getElementById('timer')

let counter = 0; 
let intervalID = null ;

function startTimer(){

    if(intervalID === null){
        intervalID = setInterval(() => {
            counter++ ;
            counterDisplay.value = counter ;
        } , 1000 ) ;

        startBtn.disabled = true ;
    }
}


function resetTimer(){
    clearInterval(intervalID) ;
    intervalID = null ;
    counter = 0 ;
    counterDisplay.value = counter ;
    startBtn.disabled = false ;
}


startBtn.addEventListener('click' , startTimer) ;

resetBtn.addEventListener('click' , resetTimer) ;