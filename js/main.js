var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var canvasWidth = 660;
var canvasHeight = 660;
var tileWidth = 660;
var tileHeight = 660;

var stress = 0;
var maxStress = 100;

var progress = 0;
var maxProgress = 100;

var currentX = 10;
var currentY = 10;

//player animation variables
const width = 33;
const height = 32;
const cycleLoop = [0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1];
var currentLoopIndex = 0;
var frameCount = 0;

//var movementTrue = false;

var player = new Image();
player.onload = function () {
  init();
  //ctx.drawImage(player, 200, 200);
};
player.src = "./assets/char.png";
//ctx.drawImage(player, 200, 200);

//draw one frame of the character
function drawFrame(frameX, frameY, canvasX, canvasY) {

  ctx.fillStyle = "#ffefc2";
  ctx.fillRect(0,0,canvas.width, canvas.height);
  ctx.drawImage(player,
  frameX * width, frameY * height,
  width, height,
  canvasX, canvasY,
  width, height);
}

//one step of animation
function step() {
  //to slow down the character

    //if(movementTrue) {
      frameCount++;
      if(frameCount < 2) {
        window.requestAnimationFrame(step);
        return;
      }
      frameCount = 0;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      //draw the character frame
      drawFrame(cycleLoop[currentLoopIndex], 0, currentX, currentY);
      currentLoopIndex++;
      if (currentLoopIndex >= cycleLoop.length) {
        currentLoopIndex = 0;
      }
      window.requestAnimationFrame(step);
    //}

}

  //actual animation
  function init() {
    window.requestAnimationFrame(step);
  }
