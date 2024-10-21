// scores ...
const score1 = document.getElementById("ds-1");
const score2 = document.getElementById("ds-2");

//team btns
const tbtn1 = document.getElementById("Tbtn-1");
const tbtn2 = document.getElementById("Tbtn-2");

//remaining balls
const reball = document.getElementById("remaining-balls");

// bat or bowl
const dp1 = document.getElementById("display-toss-win");

// buttons ...

const but1 = document.getElementById("btn-1");
const but2 = document.getElementById("btn-2");
const but3 = document.getElementById("btn-3");


const but4 = document.getElementById("btn-4");
const but5 = document.getElementById("btn-5");
const but6 = document.getElementById("btn-6");

//finish button
// const fbtn1 = document.getElementById("btn-t1")
// const fbtn2 = document.getElementById("btn-t2")

//total score
const total1 = document.querySelector(".total1");
const total2 = document.querySelector(".total2");

//demo
const dEmo = document.getElementById("demo");

// toss

let balls = 0;
let team1 = 0;
let team2 = 0;
function toss() {
    // Randomly decide if Team 1 or Team 2 wins the toss
    const isTeam1Win = Math.random() < 0.5;
    // ballcount
    balls =document.getElementById("b-count").value;
    if(balls == 0){
        document.getElementById("enter-balls").innerText = "Warning.... Enter the No.of Balls";
    }
    else if (isTeam1Win) {
        document.getElementById('display-toss-win').textContent = "Team 1 wins the toss.";
        document.getElementById("toss-result").innerText = "Team1 win the toss";
        document.getElementById('tos').style.display = 'none';
        document.querySelector('.win-container').style.display = 'block';
        document.getElementById('total-balls').innerText = `Total balls = ${balls}`;
        document.getElementById('total-balls1').innerText = `Total balls = ${balls}`;
        // reBalls();
        team1++;
    } else {
        document.getElementById('display-toss-win').textContent = "Team 2 wins the toss.";
        document.getElementById("toss-result").innerText = "Team2 win the toss"
        document.getElementById('tos').style.display = 'none';
        document.querySelector('.win-container').style.display = 'block';
        document.getElementById('total-balls').innerText = `Total balls = ${balls}`;
        document.getElementById('total-balls1').innerText = `Total balls = ${balls}`;
        // console.log(g);
        
        // reBalls();
        team2++;
    }
}

// remaining balls

// function reBalls(){
//     reball.innerText = `remaining balls = ${balls}`
// }

let count1 = 0;
let count2 = 0;
let t1ballcount = 0;
let t2ballcount = 0;

//user choose bat or bowl

function makeDecision() {
    const display = document.getElementById('display-toss-win');
    const isBatSelected = document.getElementById('box-1').checked;
    const isBowlSelected = document.getElementById('box-2').checked;

    // document.getElementById("demo").innerText=`team1 = ${team1}, team2 = ${team2}`

    // Check if one of the options is selected
    if (isBatSelected && isBowlSelected) {
      display.textContent = 'Please select only one option!';
    } else if (isBatSelected) {
        if(team1>0){
            document.querySelector('.team-1').style.display = 'block';
            document.querySelector('.team-2').style.display = 'none';
            // reBalls();
            display.textContent = 'Team-1 have chosen Batting';
            document.querySelector(".win-container").style.display = 'none';
        }else if(team2>0){
            document.querySelector('.team-2').style.display = 'block';
            document.querySelector('.team-1').style.display = 'none';
            // reBalls();
            display.textContent = 'Team-2 have chosen Batting';
            document.querySelector(".win-container").style.display = 'none';
        }
    } else if (isBowlSelected) {
        if(team1==0){
            document.querySelector('.team-1').style.display = 'block';
            document.querySelector('.team-2').style.display = 'none';
            // reBalls();
            display.textContent = 'Team-2 have chosen Bowling';
            document.querySelector(".win-container").style.display = 'none';
        }else if(team2==0){
            document.querySelector('.team-2').style.display = 'block';
            document.querySelector('.team-1').style.display = 'none';
            // reBalls();
            display.textContent = 'Team-1 have chosen Bowling';
            document.querySelector(".win-container").style.display = 'none';
        }
    } else {
      display.textContent = 'Please make a selection!';
    }
    document.querySelector(".bat-bowl").style.display = 'none';
    document.querySelector(".center-1").style.display = 'block';
  }

// Team-1 buttons

function butt1(){
    if(balls!=t1ballcount){
        count1 +=1;
        t1ballcount +=1;
        score1.innerText = "Score = " + count1;
        document.getElementById('show').innerText ="Current ball no = "+ t1ballcount;
        // balls-=1;
        // reBalls()
    } else if(balls==t1ballcount){
        document.querySelector('.Game-Over').style.display='block';
        document.getElementById('btn-t1').style.display='block';
    }else{
        team1result();
    }
}
function butt2(){
    if(balls!=t1ballcount){
        count1 +=4;
        t1ballcount +=1;
        score1.innerText = "Score = " + count1;
        document.getElementById('show').innerText ="Current ball no = "+ t1ballcount;
        // balls-=1;
        // reBalls()
    } else if(balls==t1ballcount){
        document.querySelector('.Game-Over').style.display='block';
        document.getElementById('btn-t1').style.display='block';
    }else{
        team1result();
    }
}
function butt3(){
    if(balls!=t1ballcount){
        count1 +=6;
        t1ballcount +=1;
        score1.innerText = "Score = " + count1;
        document.getElementById('show').innerText ="Current ball no = "+ t1ballcount;
        // balls-=1;
        // reBalls()
    } else if(balls==t1ballcount){
        document.querySelector('.Game-Over').style.display='block';
        document.getElementById('btn-t1').style.display='block';
    }else{
        team1result();
    }
}

// Team-2 buttons

function butt4(){
    if(balls!=t2ballcount){
        count2 +=1;
        t2ballcount +=1;
        score2.innerText = "Score = " + count2;
        document.getElementById('show1').innerText ="Current ball no = "+ t2ballcount;
        // balls-=1;
        // reBalls()
    }else if(balls==t2ballcount){
        document.querySelector('.Game-Over1').style.display='block';
        document.getElementById('btn-t2').style.display='block';
    }else{
        team2result();
    } 
}
function butt5(){
    if(balls!=t2ballcount){
        count2 +=4;
        t2ballcount +=1;
        score2.innerText = "Score = " + count2;
        document.getElementById('show1').innerText ="Current ball no = "+ t2ballcount;
        // balls-=1;
        // reBalls()
    }else if(balls==t2ballcount){
        document.querySelector('.Game-Over1').style.display='block';
        document.getElementById('btn-t2').style.display='block';
    }else{
        team2result();
    }
}
function butt6(){
    if(balls!=t2ballcount){
        count2 +=6;
        t2ballcount +=1;
        score2.innerText = "Score = " + count2;
        document.getElementById('show1').innerText ="Current ball no = "+ t2ballcount;
        // balls-=1;
        // reBalls()
    }else if(balls==t2ballcount){
        document.querySelector('.Game-Over1').style.display='block';
        document.getElementById('btn-t2').style.display='block';
    }else{
        team2result();
    }
}

//Team1 finsh button

// document.getElementById("btn-t1").addEventListener("click",()=>{
function team1result(){
    if(count1>count2){
        dEmo.innerText = `Team 1 win the match`;
        document.querySelector('.final-container').style.display='block';
    }else if(count1==count2){
        dEmo.innerText = `match draw`
        toss();
        document.getElementById('tos').style.display = 'block';
        document.querySelector('.team-1').style.display = 'none';
        document.querySelector('.team-2').style.display = 'none';
        balls = 0;
        team1 = 0;
        team2 = 0;
        count1 = 0;
        count2 = 0;
        t1ballcount = 0;
        t2ballcount = 0;
    } else{
        dEmo.innerText = `Team 2 win the match`;
        document.querySelector('.final-container').style.display='block';
    }
    document.querySelector('.team-1').style.display = 'none';
    document.querySelector('.team-2').style.display = 'block';
}

//Team2 finsh button

// document.getElementById("btn-t2").addEventListener("click",()=>{
function team2result(){
    if(count1>count2){
        dEmo.innerText = `Team 1 win the match`;
        document.querySelector('.final-container').style.display='block';
    }else if(count1==count2){
        dEmo.innerText = `match draw = ${balls}`
        toss();
        document.getElementById('tos').style.display = 'block';
        document.querySelector('.team-1').style.display = 'none';
        document.querySelector('.team-2').style.display = 'none';
        balls = 0;
        team1 = 0;
        team2 = 0;
        count1 = 0;
        count2 = 0;
        t1ballcount = 0;
        t2ballcount = 0;
    } else{
        dEmo.innerText = `Team 2 win the match`;
        document.querySelector('.final-container').style.display='block';
    }
    document.querySelector('.team-2').style.display = 'none';
    document.querySelector('.team-1').style.display = 'block';
}

function rematch(){
    console.log("hello");
    document.querySelector('.team-1').style.display = 'block';
    document.querySelector('.team-1').style.display = 'none';
    document.querySelector('.team-2').style.display = 'none';
}