/**
* KEY:
* 0 = nothing
* 1 = code
* 2 = petDog
* 3 = groupInteraction
* 4 = NOT IN USE
* 5 = plants
* 6 = goodFood
* 7 = badFood
* 8 = mentors
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
    ctx.fillText("Dogs are great.", buffer, canvasHeight + 20);
  }
  else if (messageCode == 3) {
    ctx.fillText("They all know what they're doing....", buffer, canvasHeight + 20);
  }
  else if(messageCode == 4) {
    ctx.fillText("Huh. They are working.", buffer, canvasHeight + 20);
  }
  else if (messageCode == 5) {
    ctx.fillText("What a nice plant.", buffer, canvasHeight + 20);
  }
  else if (messageCode == 6) {
    ctx.fillText("The food was great!", buffer, canvasHeight + 20);
  }
  else if (messageCode == 7) {
    ctx.fillText("I.... don't feel so good.", buffer, canvasHeight + 20);
  }
  else if (messageCode == 8) {
    ctx.fillText("Wow, the mentors are so helpful!", buffer, canvasHeight + 20);
  }
}
