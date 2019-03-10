function leftArrowPressed(){
  currentX -= 1;
}

function rightArrowPressed(){
  currentX += 1;
}

function upArrowPressed(){
  currentY -= 1;
}

function downArrowPressed(){
  currentY += 1;
}

function checkBorders(){
  if (currentX > 19){
    currentX = 19;
  }
  if (currentX < 0){
    currentX = 0;
  }
  if (currentY > 19){
    currentY = 19;
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
}

document.addEventListener("keydown", movePlayer);

function playerPosUpdate(){
  movePlayer(evt);
}
