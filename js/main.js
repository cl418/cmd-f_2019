  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  var stress = 0;
  var maxStress = 100;

  var progress = 0;
  var maxProgress = 0;

  var currentX = 10;
  var currentY = 10;

  var player = new Image();
  player.onload = function () {
    init();
    //ctx.drawImage(player, 200, 200);
  };
  player.src = "./assets/char.png";
  ctx.drawImage(player, 200, 200);

  //player animation variables
  const width = 33;
  const height = 32;
  const cycleLoop = [0, 1, 2, 1];
  var currentLoopIndex = 0;
  var frameCount = 0;

  //draw one frame of the character
  function drawFrame(frameX, frameY, canvasX, canvasY) {
    ctx.drawImage(player,
    frameX * width, frameY * height, 
    width, height,
    canvasX, canvasY,
    width, height);
  }

  //one step of animation
  function step() {
    //to slow down the character
    frameCount++;
    if(frameCount < 15) { 
      window.requestAnimationFrame(step);
      return;
    }
    frameCount = 0;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    //draw the character frame
    drawFrame(cycleLoop[currentLoopIndex], 0, 0, 0);
    currentLoopIndex++;
    if (currentLoopIndex >= cycleLoop.length) {
      currentLoopIndex = 0;
    }
    window.requestAnimationFrame(step);
  }

  //actual animation
  function init() {
    window.requestAnimationFrame(step);
  }