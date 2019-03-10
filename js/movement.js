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

function checkBorders(){
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
}

function movePlayer(evt) {
  switch (evt.keyCode) {
      case 37:
      leftArrowPressed();
      checkBorders();
      break;
      case 39:
      rightArrowPressed();
      checkBorders();
      break;
      case 38:
      upArrowPressed();
      checkBorders();
      break;
      case 40:
      downArrowPressed();
      checkBorders();
      break;
  }
};

document.addEventListener("keydown", movePlayer);

function playerPosUpdate(){
  movePlayer(evt);
}
