let userSeq = [];
let gameSeq = [];

let btns = [ "red", "purple" ,"green","yellow"];
let h2 = document.querySelector("h2");

let started = false;
let level = 0 ;


document.addEventListener("keypress", function(){
    if(started == false ){
        console.log("game started");
        started = true;

        levelUp();
    }
})

function gameFlash(btn) {
    btn.classList.add("gameFlash");
    setTimeout(function (){
        btn.classList.remove("gameFlash")
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function (){
        btn.classList.remove("userFlash")
    }, 250);
}

function levelUp(){
    userSeq=[];
    level++ ;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);

    gameFlash(randBtn);
}

function checkAns(idx){
    
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    } else{
        h2.innerHTML = `Game Over! Your Score was ${level} <br> Press any key to start..`;
        document.querySelector("body").style.backgroundColor = "black";
        setTimeout(function(){
        document.querySelector("body").style.backgroundColor = "#282c34";   
        },250);
        reset();
    }
}

function btnPress(){
    let btn = this ;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0;

}
