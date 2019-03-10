function leftArrowPressed(){
  currentX -= 5;
  //movementTrue = true;
}

function rightArrowPressed(){
  currentX += 5;
  //movementTrue = true;
}

function upArrowPressed(){
  currentY -= 5;
  //movementTrue = true;
}

function downArrowPressed(){
  currentY += 5;
  //movementTrue = true;
}

function checkLocation(){
  //borders
  if (currentX > 612){
    currentX = 612;
  }
  if (currentX < 0){
    currentX = 0;
  }
  if (currentY > 612){
    currentY = 612;
  }
  if (currentY < 0){
    currentY = 0;
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
