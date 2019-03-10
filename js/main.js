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
    //introduction
    if (intro) {
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);
      ctx.fillStyle = stressColor;
      ctx.font = "40px pixelFont";
      ctx.fillText("Hackathon Survival Guide", 75, 100);
      ctx.font = "20px pixelFont";
      ctx.fillText("Try to stay calm and complete your hackathon!", 75, 150);
      ctx.fillText("Use the arrows keys to move and press X to interact", 75, 180);
      ctx.fillText("Certain items will increase/decrease your stress levels", 75, 210);
      ctx.fillText("Be careful: if you get too stressed, you'll lose for sure!", 75, 240);
      ctx.fillText("(Click to continue!)", 75, 270);

      $("#gameCanvas").click(function(){
        intro = false;
      });
    }

    else {
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
      ctx.drawImage(desk, 250, 280);
      ctx.drawImage(dog, 100, 60);
      ctx.drawImage(group, 100, 280);
      ctx.drawImage(single1, 380, 280);

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

      //message
      //console.log(messageCode);
      printMessage();
    }
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
    draw(cycleLoopX[currentLoopIndex], cycleLoopY, currentX, currentY);
    lastX = currentX;
    lastY = currentY;
    currentLoopIndex++;
    if (currentLoopIndex >= cycleLoopX.length) {
      currentLoopIndex = 0;
    }


    //other functions that require requestAnimationFrame need to go here
    //there should only be one requestAnimationFrame
    if (!intro) {
      increaseStress();

      var num = Math.floor((Math.random() * 5000) + 1);
      if (num == 1) {
        chooseEvent();
      }
    }

    //if you won
    if (win) {
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);
      ctx.globalAlpha += 0.1;
      countWin++;
      console.log(ctx.globalAlpha);
      if (countWin > 18) {
        ctx.fillStyle = progressColor;
        ctx.font = "80px pixelFont"
        ctx.fillText("YOU WIN", 250, 200);
        ctx.font = "20px pixelFont";
        ctx.fillText("All your hard work has paid off; you won the hackathon!!!", 145, 215);
        return;
      }
    }

    //if you lost
    if (lose) {
      ctx.fillStyle = "black"
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);
      ctx.globalAlpha += 0.1;
      countLose++;
      if (countLose > 18) {
        ctx.fillStyle = "white";
        ctx.font = "80px pixelFont";
        ctx.fillText("YOU LOSE", 250, 180);
        ctx.font = "20px pixelFont";
        ctx.fillText("Looks like you've lost this hackathon. Better luck next time!", 140, 210);
        return;
      }
    }

    //quick fix of emotes blanking out
    if(emoteCount >= 40) {
      drawEmotes = false;
      emoteCount = 0;
    }

    window.requestAnimationFrame(update);
  }

  //actual animation
  function init() {
    window.requestAnimationFrame(update);
  }

});
