$(document).ready(function() {
  var player = new Image();
  player.onload = function () {
    init();
  };
  player.src = "./assets/char.png";

  //draw one frame of the character
  function draw(frameX, frameY, canvasX, canvasY) {

    //character animation
    ctx.fillStyle = "#ffefc2";
    ctx.fillRect(0, 50, canvas.width, canvas.height);

    //stats "canvas"
    ctx.fillStyle = "#ffffc2";
    ctx.fillRect(0, 0, 660, 50);

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
    //if (!fail) {
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

      //if you lost
      if (fail) {
        ctx.fillStyle = "black"
        ctx.fillRect(0, 0, 750, 570);
        ctx.globalAlpha += 0.1;
        return;
      }

      window.requestAnimationFrame(update);
  }

  //actual animation
  function init() {
    window.requestAnimationFrame(update);
  }

});
