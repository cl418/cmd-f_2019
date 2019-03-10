function leftArrowPressed(){
  currentX -= 5;
  cycleLoopY = 1;
  //console.log("currentX = " + currentX);
}

function rightArrowPressed(){
  currentX += 5;
  cycleLoopY = 2;
  //console.log("currentX = " + currentX);
}

function upArrowPressed(){
  currentY -= 5;
  cycleLoopY = 3;
  //console.log("currentY = " + currentY);
}

function downArrowPressed(){
  currentY += 5;
  cycleLoopY = 0;
  //console.log("currentY = " + currentY);
}

function checkLocation(){
  //borders
  if (currentX > 718){
    currentX = 718;
  }
  //right
  if (currentX < 0){
    currentX = 0;
  }
  //bottom
  if (currentY > 318){
    currentY = 318;
  }
  //top
  if (currentY < 50){
    currentY = 50;
  }

  /**
  * objects so won't run over them
  * 0 = nothing
  * 1 = desk
  * 2 = dog
  **/

  //your desk
  if (currentX > 225 && currentX < 280 &&
      currentY > 250 && currentY < 290) {
      currentX = lastX;
      currentY = lastY;
      objectCode = 1
  }

  //dog
  else if (currentX > 75 && currentX < 140 &&
      currentY > 20 && currentY < 82) {
      currentX = lastX;
      currentY = lastY;
      objectCode = 2
      console.log(messageCode);
  }

  //group with a table
  else if (currentX > 75 && currentX < 170 &&
      currentY > 250 && currentY < 310) {
      currentX = lastX;
      currentY = lastY;
      objectCode = 3;
  }

  else if (currentY > 250 && currentY < 320 && (
    (currentX > 335 && currentX < 390) ||
    (currentX > 455 && currentX < 510) ||
    (currentX > 576 && currentX < 633) )) {
    currentX = lastX;
    currentY = lastY;
    objectCode = 4;

  }

 else {
    objectCode = 0;
  }

  //console.log(objectCode);
  //console.log(messageCode);
}

function movePlayer(evt) {
  switch (evt.keyCode) {
      case 37:
      leftArrowPressed();
      checkLocation();
      messageCode = 0;
      break;
      case 39:
      rightArrowPressed();
      checkLocation();
      messageCode = 0;
      break;
      case 38:
      upArrowPressed();
      checkLocation();
      messageCode = 0;
      break;
      case 40:
      downArrowPressed();
      checkLocation();
      messageCode = 0;
      break;
      case 88:
      chooseAction(objectCode);
      break;
  }
};

document.addEventListener("keydown", movePlayer);
