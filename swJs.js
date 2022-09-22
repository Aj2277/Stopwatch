document.getElementById('start').addEventListener("click", timer);
document.getElementById('stop').addEventListener("click", stopCount);
document.getElementById('restart').addEventListener("click", restart);
let milliseconds = document.getElementById('milliseconds');
let seconds = document.getElementById('seconds');
let minutes = document.getElementById('minutes');

let millSec = 0;
let sec = 0;
let min = 0;  
let interval;

function timer() {
    if(!interval) {
        interval = setInterval(increment, 10);
    }
}

function increment(){
    millSec++;
    if(millSec <= 9){
        milliseconds.innerHTML = '0' + millSec;
    }
    if(millSec > 9){
        milliseconds.innerHTML = millSec;
    }
    if(millSec > 99){
        sec++;
        seconds.innerHTML = sec;
        millSec = 0;
        milliseconds.innerHTML = '0' + 0;
    }
    if(sec != '00' && sec <= 9){
        seconds.innerHTML = '0' + sec;
    }
    if(sec > 59){
        minutes.style = '';
        min++;
        minutes.innerHTML = '0' + min + ' :';
        sec = 0;
        seconds.innerHTML = '0' + 0;
    }

}

function stopCount(){
    clearInterval(interval);

    interval = null;
}
function restart(){
    millSec = '00';
    sec = '00';
    min = '00';
    minutes.style.display = "none";
    milliseconds.innerHTML = millSec;
    seconds.innerHTML = sec;
    stopCount();
}


    
