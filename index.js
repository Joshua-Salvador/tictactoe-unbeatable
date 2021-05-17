const box0 = document.getElementById("0");
const box1 = document.getElementById("1");
const box2 = document.getElementById("2");
const box3 = document.getElementById("3");
const box4 = document.getElementById("4");
const box5 = document.getElementById("5");
const box6 = document.getElementById("6");
const box7 = document.getElementById("7");
const box8 = document.getElementById("8");

const player = new Player();
const ai = new AI();

box0.addEventListener("click", () => {
  console.log(`Testing Box ${box0.id}`);
  const playerBox = player.selectBox(box0.id, ai);
  playerSelectBox(playerBox);
  if (player.checkIfWin()) {
    alert("Player has won");
  }
  const aiBox = ai.makeMove(player);
  aiSelectBox(aiBox);
  if (ai.won) {
    alert("I won");
    return;
  }
});
box1.addEventListener("click", () => {
  console.log(`Testing Box ${box1.id}`);
  const playerBox = player.selectBox(box1.id, ai);
  playerSelectBox(playerBox);
  if (player.checkIfWin()) {
    alert("Player has won");
  }
  const aiBox = ai.makeMove(player);
  aiSelectBox(aiBox);
  if (ai.won) {
    alert("I won");
    return;
  }
});
box2.addEventListener("click", () => {
  console.log(`Testing Box ${box2.id}`);
  const playerBox = player.selectBox(box2.id, ai);
  playerSelectBox(playerBox);
  if (player.checkIfWin()) {
    alert("Player has won");
  }
  const aiBox = ai.makeMove(player);
  aiSelectBox(aiBox);
  if (ai.won) {
    alert("I won");
    return;
  }
});
box3.addEventListener("click", () => {
  console.log(`Testing Box ${box3.id}`);
  const playerBox = player.selectBox(box3.id, ai);
  playerSelectBox(playerBox);
  if (player.checkIfWin()) {
    alert("Player has won");
  }
  const aiBox = ai.makeMove(player);
  aiSelectBox(aiBox);
  if (ai.won) {
    alert("I won");
    return;
  }
});
box4.addEventListener("click", () => {
  console.log(`Testing Box ${box4.id}`);
  const playerBox = player.selectBox(box4.id, ai);
  playerSelectBox(playerBox);
  if (player.checkIfWin()) {
    alert("Player has won");
  }
  const aiBox = ai.makeMove(player);
  aiSelectBox(aiBox);
  if (ai.won) {
    alert("I won");
    return;
  }
});
box5.addEventListener("click", () => {
  console.log(`Testing Box ${box5.id}`);
  const playerBox = player.selectBox(box5.id, ai);
  playerSelectBox(playerBox);
  if (player.checkIfWin()) {
    alert("Player has won");
  }
  const aiBox = ai.makeMove(player);
  aiSelectBox(aiBox);
  if (ai.won) {
    alert("I won");
    return;
  }
});
box6.addEventListener("click", () => {
  console.log(`Testing Box ${box6.id}`);
  const playerBox = player.selectBox(box6.id, ai);
  playerSelectBox(playerBox);
  if (player.checkIfWin()) {
    alert("Player has won");
  }
  const aiBox = ai.makeMove(player);
  aiSelectBox(aiBox);
  if (ai.won) {
    alert("I won");
    return;
  }
});
box7.addEventListener("click", () => {
  console.log(`Testing Box ${box7.id}`);
  const playerBox = player.selectBox(box7.id, ai);
  playerSelectBox(playerBox);
  if (player.checkIfWin()) {
    alert("Player has won");
  }
  const aiBox = ai.makeMove(player);
  aiSelectBox(aiBox);
  if (ai.won) {
    alert("I won");
    return;
  }
});
box8.addEventListener("click", () => {
  console.log(`Testing Box ${box8.id}`);
  const playerBox = player.selectBox(box8.id, ai);
  playerSelectBox(playerBox);
  if (player.checkIfWin()) {
    alert("Player has won");
  }
  const aiBox = ai.makeMove(player);
  aiSelectBox(aiBox);
  if (ai.won) {
    alert("I won");
    return;
  }
});

function playerSelectBox(boxId) {
  document.getElementById(boxId).innerHTML = "<span>X</span>";
}

function aiSelectBox(boxId) {
  document.getElementById(boxId).innerHTML = "<span>O<span>";
}
