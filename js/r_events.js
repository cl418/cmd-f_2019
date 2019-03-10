//GETTING STRESSED?!
function organizer(){
  alert("Oh no! An organizer just asked you\nwhat you were doing, but you weren't\n prepared! STRESS += 20%");
  stress += 20;
}

function noIdea(){
  alert("Hnnnnghh... Neither you nor your teammates\nhave any ideas. STRESS += 15%");
  stress += 15;
}

//DESTRESSING
function mentor(){
  alert("Wow, a mentor fixed that bug you were\nworking on for like, three hourse\nafter deleting a single line of code???\nSTRESS -= 15%");
  stress -= 15;
}

function cupStacking(){
  alert("Whoa, who knew there'd be something fun\nlike cup stacking at a hackthon?\nSTRESS -= 10%");
  stress -= 10;
}

function chooseEvent(){
  var min = 1;
  var max = 4;
  var choice = Math.floor((Math.random() * max) + min);
  if (choice == 1) {
    organizer();
  }
  else if (choice == 2) {
    noIdea();
  }
  else if (choice == 3) {
    mentor();
  }
  else if (choice == 4) {
    cupStacking();
  }
}
