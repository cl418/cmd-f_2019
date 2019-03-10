var canvas = document.getElementById('gameCanvas');
var ctx = canvas.getContext('2d');

var canvasWidth = 750;
var canvasHeight = 570;

var barWidth = canvasWidth;
var barHeight = 50;

//STRESS//
var stress = 0;
var maxStress = 100;
var stressColor = "#ffb266";
var fail = false;

//PROGRESS//
var progress = 0;
var maxProgress = 100;
var progressColor = "#66DCFF";
var win = false;

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


//fill up the rectangle based on how much stress you have in percentages
function drawStatsBar(canv, canvWidth, canvHeight, stressLevel, xPos, color) {
 
  let level = (stressLevel * canvWidth)/100;
  ctx.fillStyle = color;
  canv.fillRect(xPos, 0, level, canvHeight);

}

//draw one frame of the character
function draw(frameX, frameY, canvasX, canvasY) {

  //character animation
  ctx.fillStyle = "#ffefc2";
  ctx.fillRect(0, 50, canvas.width, canvas.height);

  //stats "canvas"
  ctx.fillStyle = "#ffffc2";
  ctx.fillRect(0, 0, barWidth, barHeight);

  //set up the stress and progress bars
  drawStatsBar(ctx, barWidth/2, barHeight, stress, 0, stressColor);
  
  ctx.fillStyle = "#000";
  ctx.font = "20px Verdana";
  ctx.fillText("Stress", 5, barHeight-5);

  drawStatsBar(ctx, barWidth/2, barHeight, progress, barWidth/2, progressColor);
  ctx.fillStyle = "#000";
  ctx.fillText("Progress", barWidth/2+5, barHeight-5);

  //other things
  ctx.drawImage(desk, 300, 250);
  ctx.drawImage(dog, 100, 50);

  //player
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
