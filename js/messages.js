/**
* KEY:
* 0 = nothing
* 1 = code
* 2 = petDog
* 3 = groupInteraction
* 4 = petDog
* 5 = drinkWater
* 6 = meditate
* 7 = takeAHike
**/

var buffer = 5;

function printMessage() {
  ctx.fillStyle = "black";
  ctx.font = "40px pixelFont";
  if (messageCode == 0){
    ctx.fillText("Hmmm... What should I do?", buffer, canvasHeight + 20);
  }
  else if (messageCode == 1) {
    ctx.fillText("You struggled with your project!", buffer, canvasHeight + 20);
  }
  else if (messageCode == 2) {
    ctx.fillText("Dogs are great", buffer, canvasHeight + 20);
  }
  else if (messageCode == 3) {
    ctx.fillText("They all know what they're doing....", buffer, canvasHeight + 20);
  }
}
