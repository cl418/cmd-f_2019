var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var canvasWidth = 660;
var canvasHeight = 660;
var tileWidth = 660;
var tileHeight = 660;

var stress = 0;
var maxStress = 100;

var progress = 0;
var maxProgress = 0;

var currentX = 10;
var currentY = 10;

var player = new Image();
player.onload = function () {
  ctx.drawImage(player, 200, 200);
};
player.src = "./assets/alienPink_badge1.png";
ctx.drawImage(player, 200, 200);
