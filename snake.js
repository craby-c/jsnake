<<<<<<< HEAD
speed = 9;
size = 15;
=======
speed = 1;
size = 10;
food_number = 5;

>>>>>>> d8a6136fe7706cc0398947f184f00bd42387c30d
function init(){
  x = 0;
  y = 0;
  dx = 1;
  dy = 0;
  snake_length = 1;
  snake_body = ["0_0"];
  food = [];
<<<<<<< HEAD
  food_number = 5;
=======
>>>>>>> d8a6136fe7706cc0398947f184f00bd42387c30d
  setScore();
  setSpeed();
  setSize();
  button = document.getElementById("start_button");
}

function start(){
  init();
  buttonChange();
  document.body.onkeydown = khandle;
<<<<<<< HEAD
  loop = window.setInterval(main, 1000-100*speed);
=======
  loop = window.setInterval(main, 500-50*speed);
>>>>>>> d8a6136fe7706cc0398947f184f00bd42387c30d
}

function main(){
    makeFood();
    clearField();
    showFood();
    showSnake();
    setScore();
    setSpeed();
<<<<<<< HEAD
    // robo();
=======
>>>>>>> d8a6136fe7706cc0398947f184f00bd42387c30d
    step();
    gameOver();
}

<<<<<<< HEAD
function robo(){
  if (x<5){
    x++;
  }
  else{
    y++;
  }
}

function khandle(e) {
  if(e.keyCode == 37){
    dy = -1;
    dx = 0;
  }
  if(e.keyCode == 39){
    dy = 1;
    dx = 0;
=======
function khandle(e) {
  if(e.keyCode == 37){
    dx = 0;
    dy = -1;
  }
  if(e.keyCode == 39){
    dx = 0;
    dy = 1;
>>>>>>> d8a6136fe7706cc0398947f184f00bd42387c30d
  }
  if(e.keyCode == 38){
    dx = -1;
    dy = 0;
  }
  if(e.keyCode == 40){
    dx = 1;
    dy = 0;
  }
}

function step(){
  x = x + dx;
  y = y + dy;
  if (x < 0){
    x = size-1;
  }
  if (y < 0){
    y = size-1;
  }
  if (x > size-1){
    x = 0;
  }
  if (y > size-1){
    y = 0;
  }
  var head = x + "_" + y;
  snake_body.push(head);
<<<<<<< HEAD
  for (i in food){
=======
  for (var i in food){
>>>>>>> d8a6136fe7706cc0398947f184f00bd42387c30d
    if (head == food[i]){
      snake_length++;
      food.splice(i,1);
    }
  }
<<<<<<< HEAD
}

function setScore(){
  document.getElementById("score").innerHTML = "Score: " + (snake_length-1);
}

function increaseSpeed(){
  if(speed < 9){
    speed++;
  }
  setSpeed();
}

function decreaseSpeed(){
  if(1 < speed){
    speed--;
=======
  if (snake_length < snake_body.length){
    snake_body.shift();
  }
}

function changeSpeed(x){
  speed += x;
  if(speed < 1 || speed > 9){
    speed -= x;
>>>>>>> d8a6136fe7706cc0398947f184f00bd42387c30d
  }
  setSpeed();
}

<<<<<<< HEAD
function increaseSize(){
  if(size < 15){
    size++;
  }
  setSize();
  document.getElementById("table").removeChild(t);
  createField();
}

function decreaseSize(){
  if(5 < size){
    size--;
=======
function changeSize(x){
  size += x;
  if(size < 5 || size > 15){
    size -= x;
>>>>>>> d8a6136fe7706cc0398947f184f00bd42387c30d
  }
  setSize();
  document.getElementById("table").removeChild(t);
  createField();
}

<<<<<<< HEAD
function setSpeed(){
  document.getElementById("speed").innerHTML = "Speed: " + (speed);
}

function setSize(){
  document.getElementById("size").innerHTML = "Size: " + (size);
}

function showSnake(){
  if (snake_length < snake_body.length){
    snake_body.shift();
  }
  for (i in snake_body){
    setBlue(snake_body[i]);
  }
=======
function showSnake(){
  snake_body.forEach(setBlue);
>>>>>>> d8a6136fe7706cc0398947f184f00bd42387c30d
}

function getRandom(){
  return Math.floor(Math.random()*size);
}

function makeFood(){  
  while (food.length < food_number){
    var food_place = getRandom() + "_" + getRandom();
    var infood = false;
    var insnake = false;
<<<<<<< HEAD
    for (i in food){
=======
    for (var i in food){
>>>>>>> d8a6136fe7706cc0398947f184f00bd42387c30d
      if (food_place == food[i]){
        infood = true;
      }
    }
<<<<<<< HEAD
    for (i in snake_body){
=======
    for (var i in snake_body){
>>>>>>> d8a6136fe7706cc0398947f184f00bd42387c30d
      if (food_place == snake_body[i]){
        insnake = true;
      }
    }
    if ((infood == false) && (insnake == false)){
      food.push(food_place);
    }
  }
}

function showFood(){
<<<<<<< HEAD
  for (i in food){
    setGreen(food[i]);
  }
}

function gameOver(){
  for (i in snake_body){
    if (snake_body.length > 2){
        if (snake_body[i-1] == snake_body[snake_body.length-1]){
	      stop();
          alert("Game Over");
	    }
=======
  food.forEach(setGreen);
}

function gameOver(){
  var l = snake_body[snake_body.length-1];
  for (var i in snake_body){
    if (snake_body[i-1] == l){
	  stop();
      alert("Game Over");
>>>>>>> d8a6136fe7706cc0398947f184f00bd42387c30d
	}
  }
}

function setBlue(name){
  var b = document.getElementsByClassName(name)[0];
<<<<<<< HEAD
  b.style.background = "DodgerBlue";
=======
  // b.style.background = "DodgerBlue";
  var st = b.className.split(" ");
  b.className = st[0] + " " + st[1] + " snake";
  console.log(b.className);
>>>>>>> d8a6136fe7706cc0398947f184f00bd42387c30d
}

function setGreen(name){
  var g = document.getElementsByClassName(name)[0];
<<<<<<< HEAD
  g.style.background = "limegreen";
}

function removeColor(name){
  var r = document.getElementsByClassName(name)[0];
  r.style.background = "white";
}

function clearField(){
  var c = document.getElementsByClassName("Cell");
  for (i=0; i<c.length; i++){
    var cel = c[i];
    cel.style.background = "white";
  };
=======
  // g.style.background = "limegreen";
  var st = g.className.split(" ");
  g.className = st[0] + " " + st[1] + " food";
  // console.log(g.className);
}

function setSpeed(){
  document.getElementById("speed").innerHTML = "Speed : " + (speed);
}

function setSize(){
  document.getElementById("size").innerHTML = "Size : " + (size);
}

function setScore(){
  document.getElementById("score").innerHTML = "x " + (snake_length-1);
}

function clearField(){
  var c = document.getElementsByClassName("cell");
  for (var i = 0; i < c.length; i++){
  	var st = c[i].className.split(" ");
  	c[i].className = st[0] + " " + st[1] + " empty";
  	// console.log(c[i].className);
    // c[i].style.background = "none";
  }
>>>>>>> d8a6136fe7706cc0398947f184f00bd42387c30d
}

function createField(){
  t = document.createElement('table');
  var tbody = document.createElement('tbody');
<<<<<<< HEAD
  for(i=0;i<size;i++) {
    var row = document.createElement('div');
    row.className = "row";
    for (j=0;j<size;j++){
=======
  for(var i = 0; i < size; i++) {
    var row = document.createElement('div');
    row.className = "row";
    for (var j = 0; j < size; j++){
>>>>>>> d8a6136fe7706cc0398947f184f00bd42387c30d
      var cell = document.createElement('div');
      cell.className = "cell "+i+"_"+j;
      row.appendChild(cell);
    }
    tbody.appendChild(row);
  }
  t.appendChild(tbody);
  document.getElementById("table").appendChild(t);
}

function buttonChange(){
  button.value = "Stop";
  button.onclick = stop;
}

function stop(){
  window.clearInterval(loop);
  button.value = "Restart";
  button.onclick = restart;
}

function restart(){
  stop();
  clearField();
  init();
  button.value = "Start";
  button.onclick = start;
}
