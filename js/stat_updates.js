//STRESS... IS... INCREASING
function checkMaxStress(){
  if (stress > maxStress){
    ctx.rect(200, 200, 200, 200);
    ctx.stroke();
    stress = 0;
    fail = true;
  }
}

function increaseStress(){
  stress += 0.1;
  checkMaxStress();
}

function coding(){
  stress += 10;
  checkMaxStress();
}

//STRESS IS DECREASIN?? WOW
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
