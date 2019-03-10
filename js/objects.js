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
single1.src = "./assets.single2.png";

function chooseAction(objectCode){
  if (objectCode == 0) {
    return;
  }
  if (objectCode == 1) {
    coding();
  }
  if (objectCode == 2) {
    petDog();
  }
  if(objectCode == 3) {
    groupInteraction();
  }
}

function interact(evt) {
  switch (evt.keyCode) {
      case 88:
      chooseAction(objectCode);
      break;
  }
};

document.addEventListener("keypress", interact);

function interactUpdate(){
  interact(evt);
}
