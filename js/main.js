var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var fail = false;

var canvasWidth = 660;
var canvasHeight = 660;

var stress = 0;
var maxStress = 100;

var progress = 0;
var maxProgress = 100;

var lastX;
var lastY;
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
  ctx.drawImage(player,
  frameX * width, frameY * height,
  width, height,
  canvasX, canvasY,
  width, height);
}

//one step of animation
function update() {
  if (!fail) {
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

  $(document).ready(function() {
     $('#overlay').animate({
       opacity: 1,
     }, 5000, function() {
        // Animation complete.
     });
  });
  
}

  //actual animation
  function init() {
    window.requestAnimationFrame(update);
  }
