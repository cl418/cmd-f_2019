function increaseStress(){
  stress += 0.1;
  if (stress > maxStress){
    ctx.rect(200, 200, 200, 200);
    ctx.stroke();
    stress = 0;
    //do smth else that indicates end of game
  }
}

function minStressCheck(){
  if (stress < 0) {
    stress = 0
  }
}

function petDog(){
  stress -= 10;
  minStressCheck();
}

function drinkWater(){
  stress -= 5;
  minStressCheck();
}

function meditate(){
  stress -= 15;
  minStressCheck();
}

function takeAHike(){
  stress -= 20;
  minStressCheck();
}
