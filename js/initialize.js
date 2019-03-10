var canvas = document.getElementById('gameCanvas');
var ctx = canvas.getContext('2d');

var fail = false;
var count = 0;

var canvasWidth = 750;
var canvasHeight = 400;

var barWidth = canvasWidth;
var barHeight = 50;

//STRESS//
var stress = 0;
var maxStress = 100;
var stressColor = "#ffb266";

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
const cycleLoopX = [0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1];
var cycleLoopY = 0;
var currentLoopIndex = 0;
var frameCount = 0;
