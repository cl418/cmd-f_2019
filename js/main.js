$(document).ready(function() {
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

    //background
    ctx.drawImage(background, 0, 0);
    /*ctx.fillStyle = "#ffefc2";
    ctx.fillRect(0, 50, canvas.width, canvas.height);*/

    //stats "canvas"
    ctx.fillStyle = "#ffefc2";
    ctx.fillRect(0, 0, barWidth, barHeight);

    //set up the stress and progress bars
    drawStatsBar(ctx, barWidth/2, barHeight, stress, 0, stressColor);

    ctx.fillStyle = "#000";
    ctx.font = "40px pixelFont";
    ctx.fillText("Stress", 5, barHeight-5);

    drawStatsBar(ctx, barWidth/2, barHeight, progress, barWidth/2, progressColor);
    ctx.fillStyle = "#000";
    ctx.fillText("Progress", barWidth/2+5, barHeight-5);

    //other things
    ctx.drawImage(desk, 300, 250);
    ctx.drawImage(dog, 100, 50);
    ctx.drawImage(group, 100, 250);

    //draw emotes!
    if(drawEmotes) {
      ctx.drawImage(emotes, emoteIndexX*16, emoteIndexY*16, 16, 16, currentX-17, currentY, 16, 16);
      emoteCount++;
    }

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
      draw(cycleLoopX[currentLoopIndex], cycleLoopY, currentX, currentY);
      lastX = currentX;
      lastY = currentY;
      currentLoopIndex++;
      if (currentLoopIndex >= cycleLoopX.length) {
        currentLoopIndex = 0;
      }


      //other functions that require requestAnimationFrame need to go here
      //there should only be one requestAnimationFrame
      increaseStress();

      var num = Math.floor((Math.random() * 1000) + 1);
      if (num == 1) {
        chooseEvent();
      }

      //if you won
      if (win) {
        ctx.fillStyle = progressColor;
        ctx.fillRect(0, 0, 750, 570);
        ctx.globalAlpha += 0.1;
        countWin++;
        console.log(ctx.globalAlpha);
        if (countWin > 18) {
          ctx.fillStyle = stressColor;
          ctx.font = "80px pixelFont"
          ctx.fillText("YOU WIN", 200, 200);
          return;
        }
      }

      //if you lost
      if (fail) {
        ctx.fillStyle = "black"
        ctx.fillRect(0, 0, 750, 570);
        ctx.globalAlpha += 0.1;
        countLose++;
        console.log(ctx.globalAlpha);
        if (countLose > 18) {
          ctx.fillStyle = "white";
          ctx.font = "80px pixelFont"
          ctx.fillText("YOU LOSE", 200, 200);
          return;
        }
      }

      window.requestAnimationFrame(update);
      //quick fix of emotes blanking out
      if(emoteCount >= 40) {
        drawEmotes = false;
        emoteCount = 0;
      }

  }

  //actual animation
  function init() {
    window.requestAnimationFrame(update);
  }

});
