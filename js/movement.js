function leftArrowPressed(){
  currentX -= 5;
  cycleLoopY = 2;
  //movementTrue = true;
}

function rightArrowPressed(){
  currentX += 5;
  cycleLoopY = 1;
  //movementTrue = true;
}

function upArrowPressed(){
  currentY -= 5;
  cycleLoopY = 3;
  //movementTrue = true;
}

function downArrowPressed(){
  currentY += 5;
  cycleLoopY = 0;
  //movementTrue = true;
}

function checkLocation(){
  //borders
  if (currentX > 612){
    currentX = 612;
  }
  //right
  if (currentX < 0){
    currentX = 0;
  }
  //bottom
  if (currentY > 612){
    currentY = 612;
  }
  //top
  if (currentY < 50){
    console.log(currentY);
    currentY = 50;
  }

  /**
  * objects so won't run over them
  * 0 = nothing
  * 1 = desk
  * 2 = dog
  **/
  var objectCode = 0;

  //desk
  if (currentX > 267 && currentX < 332 &&
      currentY > 216 && currentY < 283) {
    currentX = lastX;
    currentY = lastY;
    objectCode = 1
  }

  //dog
  if (currentX > 75 && currentX < 140 &&
      currentY > 20 && currentY < 82) {
    currentX = lastX;
    currentY = lastY;
    objectCode = 2
  }

  chooseAction(objectCode);
}

function movePlayer(evt) {
  switch (evt.keyCode) {
      case 37:
      leftArrowPressed();
      checkLocation();
      break;
      case 39:
      rightArrowPressed();
      checkLocation();
      break;
      case 38:
      upArrowPressed();
      checkLocation();
      break;
      case 40:
      downArrowPressed();
      checkLocation();
      break;
  }
};

document.addEventListener("keydown", movePlayer);

function playerPosUpdate(){
  movePlayer(evt);
}
