var canvas = document.getElementById('gameCanvas');
var ctx = canvas.getContext('2d');


var canvasWidth = 750;
var canvasHeight = 570;
var tileWidth = 660;
var tileHeight = 660;

var stress = 0;
var maxStress = 100;

var progress = 0;
var maxProgress = 100;

var lastX;
var lastY;
var currentX = 10;
var currentY = 60;

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
};
player.src = "./assets/char.png";

//draw one frame of the character
function draw(frameX, frameY, canvasX, canvasY) {
  //draw other things
  ctx.fillStyle = "#ffefc2";
  ctx.fillRect(0,0,canvas.width, canvas.height);
  ctx.drawImage(desk, 300, 250);
  ctx.drawImage(dog, 100, 50);

  //character animation
  ctx.fillStyle = "#ffefc2";
  ctx.fillRect(0, 50, canvas.width, canvas.height);

  //stats "canvas"
  ctx.fillStyle = "#ffffc2";
  ctx.fillRect(0, 0, 660, 50);

  ctx.drawImage(player,
  frameX * width, frameY * height,
  width, height,
  canvasX, canvasY,
  width, height);
}

//one step of animation
function update() {
  //to slow down the character
    frameCount++;
    if(frameCount < 2) {
      window.requestAnimationFrame(update);
      return;
    }
    frameCount = 0;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //draw the character frame
    draw(cycleLoop[currentLoopIndex], 0, currentX, currentY);
    lastX = currentX;
    lastY = currentY;
    currentLoopIndex++;
    if (currentLoopIndex >= cycleLoop.length) {
      currentLoopIndex = 0;
    }

    //other functions that require requestAnimationFrame need to go here
    //there should only be one requestAnimationFrame
    increaseStress();

    window.requestAnimationFrame(update);
}

  //actual animation
  function init() {
    window.requestAnimationFrame(update);
  }
