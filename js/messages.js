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

var buffer = 10;

function printMessage() {
  if (messageCode == 0){
    ctx.fillText("Hmmm... What should I do?", buffer, canvasHeight - 25);
  }
  else if (messageCode == 1) {
    ctx.fillText("You struggled with your project!", buffer, canvasHeight - 25);
  }
  /*else if (messageCode = 2) {
    ctx.fillText("Dogs are great", buffer, canvasHeight - 25);
  }*/
  else if (messageCode = 3) {
    ctx.fillText("hey all know what they're doing....", buffer, canvasHeight - 25);
  }
}
