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
