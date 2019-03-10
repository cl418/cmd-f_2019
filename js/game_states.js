function youWin(){
  ctx.fillStyle = progressColor;
  ctx.fillRect(0, 0, 750, 570);
  ctx.globalAlpha += 0.1;
  countWin++;
  console.log(ctx.globalAlpha);
  if (countWin > 18) {
    ctx.fillStyle = stressColor;
    ctx.font = "80px pixelFont"
    ctx.fillText("YOU WIN", 250, 200);
    //return;
  }
}

function youLose(){
  ctx.fillStyle = "black"
  ctx.fillRect(0, 0, 750, 570);
  ctx.globalAlpha += 0.1;
  countLose++;
  //console.log(ctx.globalAlpha);
  console.log(countLose);
  console.log(countLose > 18);
  if (countLose > 18) {
    ctx.fillStyle = "white";
    ctx.font = "80px pixelFont"
    ctx.fillText("YOU LOSE", 200, 200);
    //return;
  }
}
