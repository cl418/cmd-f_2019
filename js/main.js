$(document).ready(function(){

  var canvas = document.getElementById('myCanvas');
  var ctx = canvas.getContext('2d');

  var stress = 0;
  var maxStress = 100;

  var progress = 0;
  var maxProgress = 0;

  var currentX = 10;
  var currentY = 10;

  var player = new Image();
  player.onload = function () {
      ctx.drawImage(player, 400, 400);
  }
  player.src = "/../assets/alienPink_badge1.png";

});
