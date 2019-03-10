//STRESS... IS... INCREASING
function checkMaxStress(){
  if (stress > maxStress){
    ctx.rect(200, 200, 200, 200);
    ctx.stroke();
    stress = 0;
    fail = true;
    ctx.globalAlpha = 0.1;
  }
}

//STRESS IS DECREASIN?? WOW
function minStressCheck(){
  if (stress < 0) {
    stress = 0
  }
}

var smallIncrease = 0.5;
var mediumIncrease = 1;
var highIncrease = 3;

function checkMaxProgress() {
  if (progress >= maxProgress) {
    progress = 0;
    win = true;
    //add a win condition
  }
}

function increaseStress(){
  stress += 0.05;
  checkMaxStress();
}

function increaseProgress() {
  progress += 1;
  checkMaxProgress();
}

function coding(){
  stress += mediumIncrease;
  progress += smallIncrease;
  drawEmotes = true;
  //the three dots = (5, 10)
  emoteIndexX = 5;
  emoteIndexY = 10;
  checkMaxStress();
}

function talkToMentor() {
  progress += highIncrease;
  stress -= highIncrease;
  minStressCheck();
  checkMaxProgress();
}

function petDog(){
  stress -= highIncrease;
  drawEmotes = true;
  //heart = (1, 6)
  emoteIndexX = 1;
  emoteIndexY = 6;
  minStressCheck();
}

function drinkWater(){
  stress -= mediumIncrease;
  minStressCheck();
}

function meditate(){
  stress -= highIncrease;
  minStressCheck();
}

function takeAHike(){
  stress -= highIncrease;
  minStressCheck();
}
