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
  player.selectBox(box0.id, ai);
  ai.makeMove(player);
});
box1.addEventListener("click", () => {
  console.log(`Testing Box ${box1.id}`);
  player.selectBox(box1.id, ai);
  ai.makeMove(player);
});
box2.addEventListener("click", () => {
  console.log(`Testing Box ${box2.id}`);
  player.selectBox(box2.id, ai);
  ai.makeMove(player);
});
box3.addEventListener("click", () => {
  console.log(`Testing Box ${box3.id}`);
  player.selectBox(box3.id, ai);
  ai.makeMove(player);
});
box4.addEventListener("click", () => {
  console.log(`Testing Box ${box4.id}`);
  player.selectBox(box4.id, ai);
  ai.makeMove(player);
});
box5.addEventListener("click", () => {
  console.log(`Testing Box ${box5.id}`);
  player.selectBox(box5.id, ai);
  ai.makeMove(player);
});
box6.addEventListener("click", () => {
  console.log(`Testing Box ${box6.id}`);
  player.selectBox(box6.id, ai);
  ai.makeMove(player);
});
box7.addEventListener("click", () => {
  console.log(`Testing Box ${box7.id}`);
  player.selectBox(box7.id, ai);
  ai.makeMove(player);
});
box8.addEventListener("click", () => {
  console.log(`Testing Box ${box8.id}`);
  player.selectBox(box8.id, ai);
  ai.makeMove(player);
});

function selectBox(boxId) {}
