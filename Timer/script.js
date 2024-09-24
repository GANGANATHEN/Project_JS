const timerEl = document.getElementById("timer")
const startEl = document.getElementById("start")
const stopEl = document.getElementById("stop")
const resetEl = document.getElementById("reset")

startEl.addEventListener("click",startTimer)
stopEl.addEventListener("click",stopTimer)
resetEl.addEventListener("click",resetTimer)

let interval;
let timeLeft = 1500; //1500 sec = 25 min

function updateTimer(){
    let minutes  = Math.floor(timeLeft / 60)
    let seconds  = timeLeft % 60
    formattedTime = `${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`
    timerEl.innerText = formattedTime
}

function startTimer(){
    interval = setInterval(()=>{
        timeLeft--;
        updateTimer()
        if(timeLeft==0){
            clearInterval(interval);
            alert("Time's up")
        }
    },1000)
}
function stopTimer(){
    clearInterval(interval);
}
function resetTimer(){
    clearInterval(interval);
    timeLeft = 1500;
    updateTimer()
}