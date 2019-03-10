var desk = new Image();
desk.onload = function () {
};
desk.src = "./assets/computer.png";

//maybe make dog move
var dog = new Image();
dog.onload = function () {
};
dog.src = "./assets/rabbit_normal.png";

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
