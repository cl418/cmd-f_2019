var desk = new Image();
desk.onload = function () {
};
desk.src = "./assets/computer.png";

//maybe make dog move
var dog = new Image();
dog.onload = function () {
};
dog.src = "./assets/rabbit_normal.png";

var background = new Image();
background.onload = function() {
};
background.src = "./assets/background.png";

var group = new Image();
group.onload = function() {
};
group.src = "./assets/group.png";

var single1 = new Image();
single1.onload = function() {
  };
single1.src = "./assets/single1.png";

var single2 = new Image();
single2.onload = function() {
};
single2.src = "./assets/single2.png";

var single3 = new Image();
single3.onload = function() {
  };
single3.src = "./assets/single3.png";

var goodFood = new Image();
goodFood.onload = function () {
};
goodFood.src = "./assets/healthy_food.png";

var badFood = new Image();
badFood.onload = function () {
};
badFood.src = "./assets/unhealthy_food.png";

function chooseAction(objectCode){
  if (objectCode == 0) {
    messageCode = 0;
  }
  else if (objectCode == 1) {
    messageCode = 1;
    coding();
  }
  else if (objectCode == 2) {
    messageCode = 2;
    petDog();
  }
  else if(objectCode == 3) {
    messageCode = 3;
    groupInteraction();
  }
  else if(objectCode == 4) {
    drawEmotes = true;
    emoteIndexX = 5;
    emoteIndexY = 10;
  }
  else if (objectCode == 6) {
    //good food
    
  }
  else if (objectCode == 7) {
    //bad food

  }
}
