//STRESS... IS... INCREASING (aka stress related things)
var smallIncrease = 0.5;
var mediumIncrease = 1;
var highIncrease = 3;

function checkMaxStress(){
  if (stress > maxStress){
    fail = true;
    ctx.globalAlpha = 0.1;
  }
}

function minStressCheck(){
  if (stress < 0) {
    stress = 0
  }
}

function increaseStress(){
  stress += 0.05;
  checkMaxStress();
}

function coding(){
  stress += mediumIncrease;
  //progress += smallIncrease;
  progress += highIncrease;
  drawEmotes = true;
  //the three dots = (5, 10)
  emoteIndexX = 5;
  emoteIndexY = 10;
  checkMaxStress();
  checkMaxProgress();
}

//STRESS IS DECREASIN?? WOW (aka progress related things)
function checkMaxProgress() {
  console.log(progress);
  if (progress >= maxProgress) {
    win = true;
    ctx.globalAlpha = 0.1;
    console.log("hewwo??");
  }
}

function increaseProgress() {
  progress += 1;
  checkMaxProgress();
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
