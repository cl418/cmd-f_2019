function leftArrowPressed(){
  currentX -= 5;
}

function rightArrowPressed(){
  currentX += 5;
}

function upArrowPressed(){
  currentY -= 5;
}

function downArrowPressed(){
  currentY += 5;
}

function checkBorders(){
  if (currentX > 627){
    currentX = 627;
  }
  if (currentX < 0){
    currentX = 0;
  }
  if (currentY > 627){
    currentY = 627;
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
