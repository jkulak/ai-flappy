let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 300;
const GAME_HEIGHT = 400;
const GRAVITY = 60;
let playing = true;

const inputHandler = new InputHandler();
const pug = new Pug(GAME_WIDTH, GAME_HEIGHT, GRAVITY);

pug.draw(ctx);

function clear(ctx) {
  ctx.clearRect(0, 0, 300, 400);
}

let lastTime = 0;

function pause() {
  let pauseDiv = document.getElementById("paused");
  pauseDiv.style.display = playing ? "flex" : "none";
  playing = !playing;
}

function gameLoop(timeStamp) {
  console.log(playing);
  if (playing) {
    let dt = timeStamp - lastTime;
    lastTime = timeStamp;
    clear(ctx);
    pug.update(dt);
    pug.draw(ctx);
  }
  requestAnimationFrame(gameLoop);
}

gameLoop(0);
