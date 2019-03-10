function leftArrowPressed(){
  currentX -= 5;
  cycleLoopY = 1;
  console.log("currentX = " + currentX);
}

function rightArrowPressed(){
  currentX += 5;
  cycleLoopY = 2;
  console.log("currentX = " + currentX);
}

function upArrowPressed(){
  currentY -= 5;
  cycleLoopY = 3;
  console.log("currentY = " + currentY);
}

function downArrowPressed(){
  currentY += 5;
  cycleLoopY = 0;
  console.log("currentY = " + currentY);
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
  if (currentY > 345){
    currentY = 345;
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
  * 3 = group w table
  * 4 = single peoples
  * 5 = plant
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

  //single sitting people - literally do nothing
  else if (currentY > 250 && currentY < 310 && (
    (currentX > 360 && currentX < 410) ||
    (currentX > 455 && currentX < 510) ||
    (currentX > 560 && currentX < 615) )) {
    currentX = lastX;
    currentY = lastY;
    objectCode = 4;
  }

  //plants
  else if ((currentX > 570 && currentX < 615 && currentY > 118 && currentY < 170) ||
           (currentX > 370 && currentX < 415 && currentY > 318 && currentY < 370) ||
           (currentX > 20 && currentX < 65 && currentY > 68 && currentY < 120) ||
           (currentX > 690 && currentX < 735 && currentY > 48 && currentY < 100)) {
    currentX = lastX;
    currentY = lastY;
    objectCode = 5;
  }

  else if (currentX > 480 && currentX < 585
      && currentY > 45 && currentY < 95) {
      currentX = lastX;
      currentY = lastY;
      objectCode = 6;
   }

  else if(currentX > 585 && currentX < 700 &&
      currentY > 45 && currentY < 95) {
        currentX = lastX;
        currentY = lastY;
        objectCode = 7;
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
