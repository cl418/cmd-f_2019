//STRESS... IS... INCREASING (aka stress related things)
var smallIncrease = 1;
var mediumIncrease = 2;
var highIncrease = 3;

function checkMaxStress(){
  if (stress > maxStress){
    lose = true;
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

//the three dots emote = (5, 10)

function coding(){
  stress += highIncrease;
  //progress += smallIncrease;
  progress += smallIncrease;
  drawEmotes = true;
  //tangled emote (9, 0)
  emoteIndexX = 9;
  emoteIndexY = 0;
  //messageCode = 1;
  checkMaxStress();
  checkMaxProgress();
  if (win || lose) {
    ctx.globalAlpha = 0.1
  }
}

function groupInteraction() {
  stress += mediumIncrease;
  checkMaxStress();
  drawEmotes = true;
  //messageCode = 3;
  //tangled thoughts emote = (9, 0)
  emoteIndexX = 9;
  emoteIndexY = 0;
}

//STRESS IS DECREASING?? WOW (aka progress related things)
function checkMaxProgress() {
  if (progress >= maxProgress) {
    win = true;
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
  messageCode = 2;
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
